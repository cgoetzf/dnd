using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Npgsql;
using DndOnline.Database.Connections;
using DndOnline.Database.Models;
using DndOnline.Database.Interfaces;

namespace DndOnline.Database.DAOs
{
    public class UserDao : IDataAccessObject<UserModel>
    {
        private const string tablename = Parameters.SCHEMA + "user";
        private const string VW_NAME = "VW_USER";
        private const string TB_FIELDS = "Fullname, Username, Email";
        public UserModel model;

        private string defaultFields;
        public UserDao()
        {
            defaultFields = "User_Id,Username,First_Name,Last_name";
            model = new UserModel();
        }


        public bool Login(string username, string password)
        {
            bool isValidated = false;
            NpgsqlCommand sql = new NpgsqlCommand();

            sql.CommandText = "SELECT * FROM " + tablename + " WHERE Username = @Username AND Password = @Password";
            //sql.Parameters.AddWithValue("@Tablename", tablename);
            sql.Parameters.AddWithValue("@Username", username);
            sql.Parameters.AddWithValue("@Password", password);
            using (PgDb db = new PgDb())
            {
                try
                {

                    sql.Connection = db.connection;
                    using (NpgsqlDataReader reader = sql.ExecuteReader())
                    {
                        if (reader.HasRows)
                            isValidated = true;
                    }
                }
                catch (Exception e)
                {

                }
            }
            return isValidated;
        }

        public UserModel GetModelByUsername (string username)
        {
            UserModel model = new UserModel();
            string query = "select "+defaultFields+" from " + tablename + " WHERE Username = @Username";
            
            using (PgDb db = new PgDb())
            {
                NpgsqlCommand cmd = new NpgsqlCommand();
                cmd.CommandText = query;
                cmd.Parameters.AddWithValue("@Username", username);
                cmd.Connection = db.connection;

                using (NpgsqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        model = Fill(reader);
                    }
                }
            }
            
            return model;
        }
        public UserModel Fill(NpgsqlDataReader reader)
        {
            UserModel obj = new UserModel();

            obj = new UserModel();
            obj.UserId = reader.GetInt32(0);
            obj.Username = reader.GetString(1);
            obj.FirstName = reader.GetString(2);
            obj.LastName = reader.IsDBNull(3) ? "" : reader.GetString(3);

            return obj;
        }

        public List<UserModel> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}