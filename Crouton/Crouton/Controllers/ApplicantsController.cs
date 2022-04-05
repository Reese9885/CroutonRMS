using Crouton.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoCRUD;
using Crouton.Validation;

namespace Crouton.Controllers
{
    public class ApplicantsController : Controller
    {
        const Collections table = Collections.Applicants;

        [HttpPut]
        [Route("[controller]/Apply")]
        public void PutApplicant([FromBody] Applicant app)
        {
            //Checks on the built structure
            app = ApplicantValidation.OnCreate(app);
            // -1 = error, message in the address prop
            if (app.id != "error")
            {
                CRUDControler.CreateRecord<Applicant>(table, app);
            }
                //return app;
        }

        [HttpGet]
        [Route("[controller]/ReturnAll")]
        // GET: Client/Confirmation
        public Applicant[] GetAllApplicants() => CRUDControler.GetRecords<Applicant>(table).Result.ToArray();

        [HttpDelete]
        [Route("[controller]/DeleteOne/{id}")]
        public void DeleteApplicant([FromRoute] string id)
        {
            Console.WriteLine("Attempting to delete " + id);
            CRUDControler.DeleteRecord(table, id);
        }
    }
}
