using Microsoft.AspNetCore.Mvc;
using SplitwiseBackend.Models;
using SplitwiseBackend.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace SplitwiseBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly SplitwiseService _service;

        public UserController(SplitwiseService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            var users = await _service.GetUsersAsync();
            if (users == null)
            {
                return NotFound();
            }
            return Ok(users);
        }

        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            if (user == null)
            {
                return BadRequest("User cannot be null");
            }

            var createdUser = await _service.CreateUserAsync(user);

            Console.WriteLine($"Created user: {createdUser.Id}");

            if (createdUser == null)
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            return CreatedAtAction(nameof(GetUsers), new { id = createdUser.Id }, createdUser);
        }

        // Other user-related actions
        // ...existing code...
    }
}
