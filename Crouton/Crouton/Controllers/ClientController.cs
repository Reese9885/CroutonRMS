using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading;
using MongoDB.Driver;
using Crouton.Models;
using MongoCRUD;
using System.Collections.Generic;

namespace Crouton.Controllers
{
    [ApiController]
    public class ClientController : Controller
    {
        const Collections table = Collections.Employees;

        [HttpGet]
        [Route("[controller]")]
        // GET: Client
        public Employee Index()
        {
            Applicant apply = new Applicant();
            apply.firstName = "Eric";
            apply.lastName = "Smith";
            apply.email = "Reese@MyEmail.com";
            apply.id = Guid.NewGuid().ToString();

            Employee emp = apply.Hire();
            return emp;
        }



        //public async Task<UserResponse> AddUserAsync(Applicant applicant, string password,
        //   CancellationToken cancellationToken = default)

        //{
        //    try
        //    {

        //        Employee user = new Employee(applicant, new Client());
        //        var user = new Employee();
        //        user.firstName = "Nate";
        //        user.lastName = "Smith";
        //        user.id = "2";
        //        user.client.encodedPassword = Cryptic.Encode("3417");


        //        var collection = MongoDBManager.database.GetCollection<Employee>("Employees");
        //        collection.InsertOne(user);


        //        !!!change password
        //       var newUser = ManagerLogIn(user.email, "ChangeThisToAPassword", cancellationToken);
        //        return new UserResponse(newUser);
        //    }
        //    catch (Exception ex)
        //    {
        //        return ex.Message.StartsWith("MongoError: E11000 duplicate key error")
        //            ? new UserResponse(false, "A user with the given email already exists.")
        //            : new UserResponse(false, ex.Message);
        //    }
        //}

        [HttpGet]
        [Route("[controller]/Confirmation/Login/{email}/{password}")]
        // GET: Client/Confirmation
        public Employee Login([FromRoute] string email, string password, CancellationToken cancellationToken = default)
        {
            Console.WriteLine("***Trying.." + email + ":" + password);
            Employee emp = null;
            var collection = MongoDBManager.database.GetCollection<Employee>("Employees");
            try
            {
                emp = collection.Find<Employee>(x => x.email == email).First();
                
            }
            catch (Exception error)
            {
                if (error.Message == "Sequence contains no elements")
                {
                    var x = "No user with that email!";
                    Console.WriteLine(x);
                    return new Employee(x);
                }
                else return new Employee(error);
            }
            if (emp == null) return new Employee("User does not have access!");
            Console.WriteLine("33  " + password);
            if (Cryptic.Decode(password, emp.client.encodedPassword)) return emp;
            else return new Employee("Wrong Password");



        }

        [HttpGet]
        [Route("[controller]/ReturnAll")]
        // GET: Client/Confirmation
        public Employee[] GetAllEmployees() => CRUDControler.GetRecords<Employee>(table).Result.ToArray();

        [HttpDelete]
        [Route("[controller]/DeleteOne/{id}")]
        public void DeleteEmployee([FromRoute] string id) { CRUDControler.DeleteRecord(table, id); Console.WriteLine("Deleteing"); }
            
    }
}
