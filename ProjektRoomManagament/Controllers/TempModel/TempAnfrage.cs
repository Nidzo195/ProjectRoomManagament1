using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ProjektRoomManagament.Controllers.TempModel
{
 /// <summary>
 /// Modell für Anfrage stellen fromular
 /// </summary>
    public class TempAnfrage
    {

        [JsonPropertyName("roomId")]
        public int RoomId { get; set; }

        [JsonPropertyName("organiser")]
        public string Organiser { get; set; }

        [JsonPropertyName("eventName")]
        public string EventName { get; set; }

        [JsonPropertyName("beschreibung")]
        public string Beschreibung { get; set; }

        public int IdRaum { get; set; }

        [JsonPropertyName("start")]
        public DateTime Start { get; set; }

        [JsonPropertyName("end")]
        public DateTime End { get; set; }

        [JsonPropertyName("timestart")]
        public TimeSpan TimeStart { get; set; }

        [JsonPropertyName("timeend")]
        public TimeSpan TimeEnd { get; set; }

        [JsonPropertyName("telefonnummer")]
        public string Telefonnummer { get; set; }

    }
}
