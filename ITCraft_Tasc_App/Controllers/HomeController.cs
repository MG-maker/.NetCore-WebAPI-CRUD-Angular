using ITCraft_Tasc_App.Models;
using ITCraft_Tasc_App.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITCraft_Tasc_App.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class HomeController : Controller
    {
        private readonly IUnitOfWork repo;
        public HomeController(IUnitOfWork unitOfWork)
        {
            repo = unitOfWork;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(repo.User.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {

            return Ok(repo.User.GetById(id));
        }

        [HttpPost]
        public IActionResult AddUser(User user)
        {
            repo.User.Add(user);
            repo.Complete();
            return Ok(user);
        }
        
        [HttpPut]
        public IActionResult UpdateUser(User user)
        {
            if (ModelState.IsValid)
            {
                repo.User.Update(user);
                repo.Complete();
                return Ok(user);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int Id)
        {
            var user = repo.User.GetById(Id);
            repo.User.Delete(user);
            repo.Complete();
            return Ok();
        }
    }
}
