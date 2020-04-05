using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace DndOnline.Database.Models
{
    public class UserModel
    {
        public int UserId { get; set; }
        [Required]
        [Display(Name = "Nome de Usuário")]
        public string Username { get; set; }
        [Required]
        [Display(Name = "Senha")]
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsPersistent { get; set; }
    }
}