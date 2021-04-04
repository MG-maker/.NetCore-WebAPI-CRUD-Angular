using ITCraft_Tasc_App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ITCraft_Tasc_App.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(UserContext context) : base(context)
        {

        }
    }
}
