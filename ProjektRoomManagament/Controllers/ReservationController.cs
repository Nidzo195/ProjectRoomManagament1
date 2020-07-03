using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjektRoomManagament.Controllers.TempModel;
using RoomManagament.Services.Model;
using RoomManagament.Services.Services.Interface;
using WebSocket4Net.Command;

namespace ProjektRoomManagament.Controllers
{
    [Route("api/[controller]")]
    public class ReservationController : Controller
    {
        private readonly IReservationService _reservationService;

        public ReservationController(IReservationService reservationService) { _reservationService = reservationService; }


        [HttpGet("NextSevenDaysReservation")]
        public IActionResult NextSevenDaysReservation()
        {
            var resList = _reservationService.NextSevenDaysReservation();

            if (resList.Any())
            {
                return new OkObjectResult(resList);//200 with data
            }
            else
            {
                return new NoContentResult();//204
            }
        }

        [HttpPost("Save")]
        public IActionResult SaveRoom(TempAnfrage anfrage)
        {

            try
            {

                var reservation = new Reservation();
                reservation.RoomId = anfrage.RoomId;
                reservation.Start = new DateTime(anfrage.Start.Year, anfrage.Start.Month, anfrage.Start.Day, anfrage.TimeStart.Hours, anfrage.TimeStart.Minutes, 0);
                reservation.End = new DateTime(anfrage.End.Year, anfrage.End.Month, anfrage.End.Day, anfrage.TimeEnd.Hours, anfrage.TimeEnd.Minutes, 0);

                var usersEvent = new Event();
                usersEvent.Titel = anfrage.EventName;
                usersEvent.Beschreibung = anfrage.Beschreibung;
                usersEvent.Organiser = anfrage.Organiser;
                usersEvent.Telefonnummer = anfrage.Telefonnummer;

                reservation.Event = usersEvent;

                using (var dc = new RoomManagamentContext())
                {
                    dc.Reservation.Add(reservation);
                    dc.SaveChanges();
                }
                return new NoContentResult();//204
            }
            catch (Exception e)
            {
                return new NotFoundResult();
            }

           

            
        }





    }


}
