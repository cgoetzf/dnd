using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DndOnline.Controllers
{
    public class MasterController : Controller
    {
        // GET: Master
        //[Authorize]
        public ActionResult Index()
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
            InitPage();
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