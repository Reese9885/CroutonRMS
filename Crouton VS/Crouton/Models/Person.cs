using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoCRUD;

namespace Crouton.Models
{
    public class Person :  IMongoData, IPerson
    {
        public Guid id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public byte phone { get; set; }
        public string address { get; set; }
        public string state { get; set; }
        public string city { get; set; }
        public string email { get; set; }
    }
}
