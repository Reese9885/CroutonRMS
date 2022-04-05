using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crouton;

namespace MongoCRUD
{
    public class CRUDControler
    {
        //Creates a single record in select table.
        public static async void CreateRecord<T>(Collections table, T record) where T : class
        {
            if (MongoDBManager.database != null)
            {
                var collection = GetCollection<T>(table);
                try { await collection.InsertOneAsync(record); }
                catch (Exception e) { Console.WriteLine("Write Error: " + e.Message); }
            }

        }

        // Get all records in a select table.
        public static async Task<List<T>> GetRecords<T>(Collections table)
        {
            var collection = MongoDBManager.database.GetCollection<T>(table.ToString());
            return await collection.Find(new BsonDocument()).ToListAsync();

        }

        //Get a record in a select table by id field.
        public static IMongoData GetRecordByID(Collections table, string id)
        {
            IMongoCollection<IMongoData> collection = MongoDBManager.database.GetCollection<IMongoData>(table.ToString());
            FilterDefinition<IMongoData> filter = Builders<IMongoData>.Filter.Eq("_id", id);
            var result = collection.Find(filter).First();

            return result;
        }
        public static T GetRecordByFieldValue<T>(Collections table, string field,string value)
        {
            IMongoCollection<T> collection = MongoDBManager.database.GetCollection<T>(table.ToString());
            FilterDefinition<T> filter = Builders<T>.Filter.Eq(field, value);
            var result = collection.Find(filter).First();

            return result;
        }
        public static List<BsonDocument> ReturnAllOfField(Collections table, string field)
        {
            var collection = MongoDBManager.database.GetCollection<BsonDocument>(field);
            return collection.Find(new BsonDocument()).ToList();

        }

        //Gets record by id and replaces it with an updated version;
        public static void UpdateReplace(Collections table, int id, IMongoData update)
        {
            IMongoCollection<IMongoData> collection = MongoDBManager.database.GetCollection<IMongoData>(table.ToString());
            FilterDefinition<IMongoData> filter = Builders<IMongoData>.Filter.Eq("_id", id);
            var result = collection.Find(filter).First();
            collection.FindOneAndReplace<IMongoData>(filter, update);
        }
        //Deletes record in a select table by id;
        public static void DeleteRecord(Collections table ,string id)
        {
            IMongoCollection<IMongoData> collection = MongoDBManager.database.GetCollection<IMongoData>(table.ToString());
            FilterDefinition<IMongoData> filter = Builders<IMongoData>.Filter.Eq("_id", id);
            collection.DeleteOne(filter);
        }
        //Deletes record in a select table by field/value;
        public static void DeleteRecord(Collections table,string field, string value)
        {
            IMongoCollection<IMongoData> collection = MongoDBManager.database.GetCollection<IMongoData>(table.ToString());
            FilterDefinition<IMongoData> filter = Builders<IMongoData>.Filter.Eq(field, value);
            collection.DeleteOne(filter);
        }
        public static void DeleteRecord(Collections table, string field1, string value1, string field2, string value2)
        {
            IMongoCollection<IMongoData> collection = MongoDBManager.database.GetCollection<IMongoData>(table.ToString());
            FilterDefinition<IMongoData> filter = Builders<IMongoData>.Filter.Eq(field1, value1);
            var result = collection.Find(filter).ToList<IMongoData>();
            foreach (var item in result)
            {
                
            }
        }

        static IMongoCollection<T> GetCollection<T>(Collections table)
        {
            try
            {
                return  MongoDBManager.database.GetCollection<T>(table.ToString());
            }
            catch (Exception)
            {
                Console.WriteLine($"Database : {table} was not returned.");
                throw;
            }
            
        }

    }
}