using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crouton.Models
{
    public class Applicant : IPerson
    {
        public string address { get; set; }
        public string firstName { get; set; }
        public Guid id { get; set; }
        public string lastName { get; set; }
        public byte phone { get; set; }
        public string state { get; set; }
        public string city { get; set; }
        public DateTime appliedDate { get; set; }
        public bool save { get; set; }
        public string email { get; set; }
    }
}
