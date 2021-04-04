using ITCraft_Tasc_App.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITCraft_Tasc_App.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T: class
    {
        protected readonly UserContext db;
        public BaseRepository(UserContext context)
        {
            db = context;
        }

        public IQueryable<T> GetAll()
        {
            return db.Set<T>().AsNoTracking();
        }

        public T GetById(int id)
        {
            return db.Set<T>().Find(id);
        }

        public void Add(T user)
        {
            db.Set<T>().Add(user);
        }

        public void Update(T user)
        {
            db.Set<T>().Update(user);
        }

        public void Delete(T user)
        {
            db.Set<T>().Remove(user);
        }
    }
}
