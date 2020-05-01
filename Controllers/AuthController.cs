using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.Mvc;
using DndOnline.Models.Database;
using DndOnline.Models;

namespace DndOnline.Controllers
{
    public class AuthController : Controller
    {
        // GET: Auth
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(UserModel user)
        {
            if (ModelState.IsValid)
            {
                
                bool IsValidUser = new UserDb().Login(user.Username, user.Password);
                if (IsValidUser)
                {
                    FormsAuthentication.SetAuthCookie(user.Username, user.IsPersistent);
                    UserModel u = new UserDb().GetModelByUsername(user.Username);
                    @Session["UserFullName"] = u.FirstName + " " + u.LastName;
                    @Session["UserId"] = u.UserId;
                    return RedirectToAction("Index", "Home");
                }
            }
            return View();
        }
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "Auth");
        }
    }
}