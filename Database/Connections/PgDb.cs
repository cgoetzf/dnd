using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using Npgsql;

namespace DndOnline.Database.Connections
{
    public class PgDb : IDisposable
    {
        private static bool isOpened;
        public NpgsqlConnection connection { get; set; }

        public PgDb()
        {
            isOpened = false;
            GetConnection();
        }
        public void GetConnection()
        {
            isOpened = false;

            connection = new NpgsqlConnection();
            connection.ConnectionString = ConfigurationManager.ConnectionStrings["PgConn"].ConnectionString;
            if (OpenLocalConnection())
                isOpened = true;
        }

        private bool OpenLocalConnection()
        {
            try
            {
                connection.Open();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public void Dispose()
        {
            if (connection != null)
                connection.Close();
        }
    }
}