using System;
using System.Collections.Generic;
using MongoCRUD;
using NUnit.Framework;
using System.Collections;
using MongoDB.Driver.Core.Servers;
using MongoDB.Bson;
using System.Threading.Tasks;
using Crouton.Models;

namespace Crouton
{
    class Program
    {
        const string dbName = "MyDatabase";
        static void Main(string[] args)
        {
            string user = "Benton";
            string pass = "062059";

            Applicant p = new Applicant();
            p.firstName = "Eric";
            p.lastName = "Smith";
           // p.id = "1";

            MongoDBManager.LogIn(user, pass);
            //MongoDBManager.CreateUser("Restraunt", "Megan", "3417");
            //CRUDControler.sampleGetRecordByID(Collections.Employees, 1);
            MongoDBManager.SetDatabase("Restraunt");
            // CRUDControler.CreateRecord(Collections.Employees, p);

            Task<UserResponse> task = ClientController.AddUserAsync(p, "");
            var q = Cryptic.Encode("ERICSMITH");
            var w = Cryptic.Encode("ERICSMITH");
            Console.WriteLine(q);
            Console.WriteLine(w);
            if (Cryptic.Decode("ERICSMITH",q)) Console.WriteLine(true);
            else Console.WriteLine(false);
            

            
            //MongoCrud.DeleteRecord<Person>("Basic", "firstName", "Eric", "lastName", "Smith");
            //Console.WriteLine($"F:{p.firstName},L:{p.lastName},ID:{p.id}");


        }
    }

   
}
   
