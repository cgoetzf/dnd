using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DndOnline.Models;

namespace DndOnline.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        [Authorize]
        public ActionResult Index()
        {

            ViewBag.Printable = false;
            ViewBag.PageSubtitle = "sub";
            ViewBag.PageTitle = "title";
            return View();
        }
        public ActionResult Monster()
        {
            MonsterModel model = new MonsterModel();
            ViewBag.Printable = false;
            ViewBag.PageSubtitle = "Edição";
            ViewBag.PageTitle = "Monster";
            return View(model);
        }
        [HttpPost]
        public ActionResult Monster(MonsterModel model)
        {
            ViewBag.Printable = false;
            ViewBag.PageSubtitle = "Edição";
            ViewBag.PageTitle = "Monster";
            return View(model);
        }
    }
}