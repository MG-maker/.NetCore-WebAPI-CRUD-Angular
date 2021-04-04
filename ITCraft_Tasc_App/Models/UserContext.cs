using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITCraft_Tasc_App.Models
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set;}
        public UserContext(DbContextOptions options)
            : base(options) 
        {}
    }
}
