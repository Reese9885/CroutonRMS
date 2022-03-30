using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;
using MongoCRUD;

namespace Crouton.Models
{
    public class ClientController
    {
        public static async Task<UserResponse> AddUserAsync(Applicant applicant, string password,
           CancellationToken cancellationToken = default)
        {
            try
            {
                Employee user = new Employee(applicant);
                //var user = new Employee();
                user.firstName = "Nate";
                user.lastName = "Smith";
                //user.id = "2";
                user.client.encodedPassword = Cryptic.Encode("3417");
                

                var collection = MongoDBManager.database.GetCollection<Employee>("Employees");
                collection.InsertOne(user);



                var newUser = await GetUserAsync(user.email, cancellationToken);
                return new UserResponse(newUser);
            }
            catch (Exception ex)
            {
                return ex.Message.StartsWith("MongoError: E11000 duplicate key error")
                    ? new UserResponse(false, "A user with the given email already exists.")
                    : new UserResponse(false, ex.Message);
            }
        }
        public static async Task<Employee> GetUserAsync(string email, CancellationToken cancellationToken = default)
        {
            var collection = MongoDBManager.database.GetCollection<Employee>("Employees");

            // TODO Ticket: User Management
            // Retrieve the user document corresponding with the user's email.
            //
            // // return await _usersCollection.Find(...)

            return await collection.Find<Employee>(x => x.firstName == "Nate").FirstAsync();
        }
    }
}
