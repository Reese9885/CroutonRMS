using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crouton.Models
{
    public class Applicant : IPerson
    {
        public Applicant()
        {
            
        }
        public string address { get; set; }
        public string firstName { get; set; }
        public string id { get; set; }
        public string lastName { get; set; }
        public string phone { get; set; }
        public string state { get; set; }
        public string city { get; set; }
        public DateTime appliedDate { get; set; }
        public bool save { get; set; }
        public string email { get; set; }
        public Job position { get; set; }
        public string notes { get; set; }

        public Applicant(string error)
        {
            id = error;

        }
        public Employee Hire() => new Employee(this, new Job());
    }
}
