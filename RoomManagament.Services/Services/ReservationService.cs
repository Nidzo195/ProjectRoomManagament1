using RoomManagament.Services.Extension;
using RoomManagament.Services.Model;
using RoomManagament.Services.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RoomManagament.Services.Services
{
    internal class ReservationService : IReservationService
    {
        public IEnumerable<Reservation> GetAll()
        {
            using (var dc = new RoomManagamentContext())
                return dc.Reservation.ToList();
        }

        public IEnumerable<Reservation> NextSevenDaysReservation()
        {
            /*
             * Logik
StartupExtension kleiner als hüt plus 7 tage
    ende grösser heute
    */
            var dateTimeNow = DateTime.Now;
            var dateTimeInSevenDays = dateTimeNow.AddDays(7);

            using (var dc = new RoomManagamentContext())
            {
                return dc.Reservation.ToList().Where(reservation => reservation.Start < dateTimeInSevenDays && reservation.Start > dateTimeNow && reservation.End > dateTimeNow).ToList();
            }
        }
    }
}
