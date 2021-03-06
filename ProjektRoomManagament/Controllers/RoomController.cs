﻿using System;
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

        public RoomController(IRoomService roomService) { _roomService = roomService; }

        [HttpGet("ListAll/{searchText?}")]
        public IActionResult GetAllRooms(string searchText)
        {
            if (string.IsNullOrEmpty(searchText))
            {
                return new OkObjectResult(_roomService.GetAll());
            }
            else
            {
                var searchingList = _roomService.GetRoomContainingString(searchText);

                if (searchingList.Any())
                {
                    return new OkObjectResult(searchingList);//200 with data
                }
                else
                {
                    return new NoContentResult();//204
                }
            }
        }

        [HttpGet("GetRoom/{roomId}")]
        public IActionResult GetRoom(int roomId)
        {
            var room = _roomService.GetSpecificRoom(roomId);
            if (room != null)
            {
                return new OkObjectResult(room);
            }
            else
            {
                return new NoContentResult();
            }
        }


    }
}