using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Npgsql;

namespace DndOnline.Database.Interfaces
{
    public interface IDataAccessObject<T>
    {
        List<T> GetAll();
        T Fill(NpgsqlDataReader reader);
    }
}