using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Crouton.Models;
namespace Crouton.Validation
{
    public class ApplicantValidation
    {
        public static Applicant OnCreate(Applicant app)
        {
            //Check id isnt blank **Usually is coming from Angular
            if (app.id == "" || app.id == "undefined" || app.id == null) app.id = Guid.NewGuid(). ToString();
            Console.WriteLine(app.position.title);
            //Finds a Match in the database to set as to fill in the rest of the data
            try
            {
                var match = MongoCRUD.CRUDControler.GetRecordByFieldValue<Job>(Collections.Jobs, "title", app.position.title);
                app.appliedDate = DateTime.Now;
                app.position = match;
            }
            catch(Exception error)
            {
                var message = "No matching positions of its kind!";
                Console.WriteLine(message+"----"+error);
                app.id = "error";
                app.address = message;
                return app;
            }
            
            
            return app;


        }

    }
}
