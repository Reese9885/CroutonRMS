using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Crouton.Models
{
    public class Employee : IPerson
    {
        public Employee(Applicant applicant)
        {
            client = new Client();
            firstName = applicant.firstName;
            lastName = applicant.lastName;
            phone = applicant.phone;
            email = applicant.email;
            state = applicant.state;
            address = applicant.address;
            city = applicant.city;
            hiredDate = DateTime.Now;

        }
        public string address { get; set; }
        public string firstName { get; set; }
        [BsonId]
        public Guid id { get; set; }
        public string lastName { get; set; }
        public byte phone { get; set; }
        public string state { get; set; }
        public string city { get; set; }
        public string position { get; set; }
        public decimal wage { get; set; }
        public decimal hoursWorked { get; set; }
        public DateTime hiredDate { get; set; }
        public string email { get; set; }
        public Client client { get; set; }

    }
}
