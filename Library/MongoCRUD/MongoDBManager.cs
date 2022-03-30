using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;


namespace MongoCRUD
{
    public static class MongoDBManager 
    {
        public static MongoClient client { get; set; }
        public static IMongoDatabase database { get; set; }
        //public static IMongoCollection<T> collection { get; set; }
        public static void LogIn(string userName,string password)
        {
            string connectionString = $"mongodb+srv://{userName}:{password}@cluster0.nvyia.mongodb.net/Default?retryWrites=true&w=majority";
            client = new MongoClient(connectionString);
            
           
        }
        public static void LogOut()
        {
            client = null;
            database = null;
        }
        public static void SetDatabase(string databaseName)
        {
            database = client.GetDatabase(databaseName);
        }
        public static void SetTable<U>(string collection)
        {
            var ccollection = database.GetCollection<U>(collection,null);
        }
        public static void CreateUser(string database, string userName, string password)
        {
            //var creds = MongoCredential.CreateCredential(database, userName, password);
            var connectionString = $"mongodb://{userName}:{password}@\"Project 0\"/{database}";
            //string connectionString = $"mongodb+srv://{userName}:{password}@cluster0.nvyia.mongodb.net/Default?retryWrites=true&w=majority";
            client = new MongoClient(connectionString);


        }
    }
}
