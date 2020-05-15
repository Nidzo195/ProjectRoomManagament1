using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RoomManagament.Services.Model;
using RoomManagament.Services.Services.Interface;

namespace ProjektRoomManagament.Controllers
{
    [Route("api/[controller]")]
    public class RoomController : Controller
    {
        private readonly IRoomService _roomService;

        [HttpGet("ListAll")] //[HttpGet("GetAllKunde/{id}")] // api/Kunde/GetAllKunde
        public IActionResult GetObjekt()
        {
            return new OkObjectResult(_roomService.GetAll());
        }

        public RoomController(IRoomService roomService)
        {

            _roomService = roomService;
        }
    }
}