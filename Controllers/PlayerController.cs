using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DndOnline.Controllers
{
    public class PlayerController : Controller
    {
        // GET: Player
       // [Authorize]
        public ActionResult Index()
        {
            return View();
        }
        //[Authorize]
        public ActionResult Sheet()
        {
            InitPage();
            return View();
        }
        public ActionResult Battle()
        {
            InitPage();
            return View();
        }
        public ActionResult Store()
        {
            return View();
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