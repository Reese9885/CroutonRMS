using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoCRUD;

namespace Crouton.Models
{
    public class Employee : IPerson
    {
        public Employee(Applicant applicant, Job position)
        {
            this.client = new Client();
            id = client.id;
            firstName = applicant.firstName;
            lastName = applicant.lastName;
            phone = applicant.phone;
            email = applicant.email;
            state = applicant.state;
            address = applicant.address;
            city = applicant.city;
            hiredDate = DateTime.Now;
            this.position = position;
            wage = position.startWage;

        }
        

        public string address { get; set; }
        public string firstName { get; set; }
        [BsonId]
        public string id { get; set; }
        public string lastName { get; set; }
        public string phone { get; set; }
        public string state { get; set; }
        public string city { get; set; }
        public string wage { get; set; }
        public decimal hoursWorked { get; set; }
        public DateTime hiredDate { get; set; }
        public string email { get; set; }
        public Client client { get; set; }      
        public Job position { get; set; }


        //Data Errors Returns
        public Employee(Exception error)
        {
            this.id = (-1).ToString();
            this.address = error.Message;

        }
        public Employee(string error)
        {
            this.id = (-1).ToString();
            this.address = error;

        }
    }
}
