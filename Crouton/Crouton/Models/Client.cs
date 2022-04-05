using MongoCRUD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crouton.Models
{
    public class Client : IMongoData
    {
        public Client()
        {
            id = Guid.NewGuid().ToString();
        }
        
        public string id { get; set; }
        
        public string AuthToken { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsManager { get; set; }
        public string encodedPassword { get; set; }
        public Dictionary<string, string> Preferences { get; set; }
    }
}
