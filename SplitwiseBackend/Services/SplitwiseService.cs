using MongoDB.Driver;
using MongoDB.Bson;
using SplitwiseBackend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using System;

namespace SplitwiseBackend.Services
{
    public class SplitwiseService
    {
        private readonly ILogger<SplitwiseService> _logger;
        private readonly IMongoCollection<User> _users;

        public SplitwiseService(IMongoDatabase database, ILogger<SplitwiseService> logger)
        {
            _logger = logger;
            _users = database.GetCollection<User>("Users");
        }

        // Methods for adding users, groups, expenses, splitting expenses, updating balances, settling balances, and creating transactions
        // Add your service methods here

        public async Task<List<User>> GetUsersAsync()
        {
            try
            {
                return new List<User>(); // Placeholder implementation
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while getting users.");
                return null;
            }
        }

        public async Task<User> CreateUserAsync(User user)
        {
            try
            {
                // Ensure the Id is of type ObjectId
                user.Id = ObjectId.GenerateNewId();

                // Insert the user into the MongoDB collection
                await _users.InsertOneAsync(user);

                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while creating a user.");
                return null;
            }
        }
    }
}
