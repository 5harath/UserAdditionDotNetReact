using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace SplitwiseBackend.Models
{
    public class User
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; } // Add Password property
        public Dictionary<string, decimal> Balances { get; set; } = new Dictionary<string, decimal>();
    }
}
