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
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
        [Authorize]
        public ActionResult Sheet()
        {
            @Session["UserFullName"] = "Carlos Goetz";
            ViewBag.Printable = false;
            ViewBag.PageSubtitle = "Akkar";
            ViewBag.PageTitle = "Ficha do Personagem";
            return View();
        }
        public ActionResult Battle()
        {
            @Session["UserFullName"] = "Carlos Goetz";
            ViewBag.Printable = false;
            ViewBag.PageSubtitle = "Batalha do castelo";
            ViewBag.PageTitle = "Batalha";
            return View();
        }
    }
}