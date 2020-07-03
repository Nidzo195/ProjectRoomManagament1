using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace RoomManagament.Services.Model
{
    public partial class Room
    {
        public int Id { get; set; }
        public string RaumName { get; set; }
        public string RaumBeschreibung { get; set; }
        public int AnzahlPlaetze { get; set; }
        public decimal Kosten { get; set; }
        public string Ausstattung { get; set; }
    }
}
