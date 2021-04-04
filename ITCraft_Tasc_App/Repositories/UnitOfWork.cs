using ITCraft_Tasc_App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITCraft_Tasc_App.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly UserContext db;
        public UnitOfWork(UserContext context)
        {
            db = context;
            User = new UserRepository(db);
        }
        public IUserRepository User { get; private set; }
        public int Complete()
        {
            return db.SaveChanges();
        }
        public void Dispose()
        {
            db.Dispose();
        }
    }
}
