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
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}