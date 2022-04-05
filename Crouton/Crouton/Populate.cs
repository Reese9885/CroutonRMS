using Crouton.Models;
using MongoCRUD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crouton
{
    public class Populate
    {
        public static void Employees()
        {
            
            List<Employee> emps = new List<Employee>();

            Job job = new Job();
            job.title = "Owner";
            Applicant app = new Applicant();
            app.firstName = "Eric";
            app.lastName = "Smith";
            app.email = "Admin";
            var emp = new Employee(app, job);
            emp.client.encodedPassword = Cryptic.Encode("Admin");
            emp.client.IsAdmin = true;
            emp.client.IsManager = false;
            emps.Add(emp);

            job = new Job();
            job.title = "Manager";
            app = new Applicant();
            app.firstName = "Megan";
            app.lastName = "Hofer";
            app.email = "man";
            emp = new Employee(app, job);
            emp.client.encodedPassword = Cryptic.Encode("man");
            emp.client.IsAdmin = false;
            emp.client.IsManager = true;
            emps.Add(emp);

            job = new Job();
            job.title = "N/A";
            app = new Applicant();
            app.firstName = "Bob";
            app.lastName = "Ross";
            app.email = "emp";
            emp = new Employee(app, job);
            emp.client.encodedPassword = Cryptic.Encode("emp");
            emp.client.IsAdmin = false;
            emp.client.IsManager = true;
            emps.Add(emp);

            MongoCRUD.CRUDControler.CreateRecord<Employee>(Collections.Employees, emps[0]);
            MongoCRUD.CRUDControler.CreateRecord<Employee>(Collections.Employees, emps[1]);
            MongoCRUD.CRUDControler.CreateRecord<Employee>(Collections.Employees, emps[2]);
        }
    }
}
