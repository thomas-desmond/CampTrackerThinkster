using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CampTracker.Models
{
    public class Camp
    {
        public int Id { get; set; }
        public DateTimeOffset Date { get; set; }
        public string Name { get; set; }
        public int CampsiteNumber { get; set; }
        public string Notes { get; set; }
    }
}

