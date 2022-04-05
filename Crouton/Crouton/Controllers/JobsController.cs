using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading;
using MongoDB.Driver;
using Crouton.Models;
using MongoCRUD;

namespace Crouton.Controllers
{
    public class JobsController : Controller
    {
        const Collections table = Collections.Jobs;

        [HttpPost]
        [Route("[controller]/PostOne")]
        ///{title}/{wage}
        public void PostJob([FromBody] Job input)
        {
            Console.WriteLine(input.id);
            Console.WriteLine(input.title);
            Console.WriteLine(input.startWage);
            CRUDControler.CreateRecord<Job>(table, input);
        }
        

        [HttpGet]
        [Route("[controller]/ReturnAll")]
        // GET: Client/Confirmation
        public Job[] GetAllJobs() => CRUDControler.GetRecords<Job>(table).Result.ToArray();

        [HttpDelete]
        [Route("[controller]/DeleteOne/{id}")]
        public void DeleteJob([FromRoute] string id)
        {
            Console.WriteLine("Attempting to delete " + id);
            CRUDControler.DeleteRecord(table, id);


        }
    }
}
