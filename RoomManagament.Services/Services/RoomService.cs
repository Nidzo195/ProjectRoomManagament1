using RoomManagament.Services.Model;
using RoomManagament.Services.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RoomManagament.Services.Services
{
    internal class RoomService : IRoomService
    {
        public IEnumerable<Room> GetAll()
        {
            using (var dc = new RoomManagamentContext())
                return dc.Room.ToList();
        }

        public IEnumerable<Room> GetRoomContainingString(string searchText)
        {
            using (var dc = new RoomManagamentContext())
                return dc.Room.ToList().Where(room => room.RaumName.ToLower().Contains(searchText.ToLower())).ToList();
        }

        public Room GetSpecificRoom(int roomId)
        {
            using (var dc = new RoomManagamentContext())
                return dc.Room.ToList().Where(room => room.Id == roomId).FirstOrDefault();
        }
    }
}
