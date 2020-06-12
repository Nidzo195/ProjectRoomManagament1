using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RoomManagament.Services.Services.Interface;

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
    }


}
