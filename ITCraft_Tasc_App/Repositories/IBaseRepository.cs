using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITCraft_Tasc_App.Repositories
{
    public interface IBaseRepository<T> where T: class
    {
        IQueryable<T> GetAll();
        T GetById(int id);
        void Add(T user);
        void Update(T user);
        void Delete(T user);
    }
}
