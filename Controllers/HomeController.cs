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
        //[Authorize]
        public ActionResult Index()
        {
            InitPage();
            return View();
        }
        public ActionResult Monster()
        {
            MonsterModel model = new MonsterModel();
            InitPage();
            return View(model);
        }
        [HttpPost]
        public ActionResult Monster(MonsterModel model)
        {
            InitPage();
            return View(model);
        }
        public void InitPage()
        {
            @Session["UserFullName"] = "Player Name";
            ViewBag.Printable = false;
            ViewBag.PageSubtitle = "Subtitle";
            ViewBag.PageTitle = "Title";
        }
    }
}