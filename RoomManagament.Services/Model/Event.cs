using System;
using System.Collections.Generic;

namespace RoomManagament.Services.Model
{
    public partial class Event
    {
        public int Id { get; set; }
        public string Titel { get; set; }
        public string Beschreibung { get; set; }
        public string Organiser { get; set; }
    }
}
