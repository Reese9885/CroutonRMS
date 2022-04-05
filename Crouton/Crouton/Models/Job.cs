using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crouton.Models
{
    public class Job : IJob
    {
        public string id { get; set; }
        public string title { get; set; }
        public string startWage { get; set; }

        public Job()
        {
            id = Guid.NewGuid().ToString();
        }


    }
    
}
