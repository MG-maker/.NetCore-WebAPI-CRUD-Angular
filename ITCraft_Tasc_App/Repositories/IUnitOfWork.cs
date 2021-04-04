using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITCraft_Tasc_App.Repositories
{
    public interface IUnitOfWork: IDisposable
    {
        IUserRepository User { get; }
        int Complete();
    }
}
