using System;
using System.Collections.Generic;

namespace RoomManagament.Services.Model
{
    public partial class Reservation
    {
        public int Id { get; set; }
        public int RoomId { get; set; }
        public int EventId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }

        public virtual Event Event { get; set; }
        public virtual Room Room { get; set; }
    }
}
