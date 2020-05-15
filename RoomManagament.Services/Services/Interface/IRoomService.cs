using RoomManagament.Services.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace RoomManagament.Services.Services.Interface
{
    public interface IRoomService
    {
        IEnumerable<Room> GetAll();
    }
}
