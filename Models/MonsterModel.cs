using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DndOnline.Models
{
    public class MonsterModel
    {
		public int MonsterId { get; set; }
		public int MonsterTypeId { get; set; }
		public int MonsterSizeId { get; set; }
		public int AlignmentId { get; set; }
		public string Name { get; set; }
		public string MonsterType { get; set; }
		public string MonsterSize { get; set; }
		public string Alignment { get; set; }
		public string PicThumb { get; set; }
		public string PicLarge { get; set; }
		public int 	StaticHp  { get; set; }
		public int RandomHp { get; set; }
		public int ArmorClass { get; set; }
		public string Speed  { get; set; }
		public int Challenge { get; set; }

		public int Strenght { get; set; }
		public int ModStrenght { get; set; }
		public int Dexterity { get; set; }
		public int ModDexterity { get; set; }
		public int Constituition { get; set; }
		public int ModConstituition { get; set; }
		public int Intelligence { get; set; }
		public int ModIntelligence { get; set; }
		public int Wisdom { get; set; }
		public int ModWisdom { get; set; }
		public int Charisma { get; set; }
		public int ModCharisma { get; set; }
		[AllowHtml]
		public string Description { get; set; }
		[AllowHtml]
		public string Skills { get; set; }
		[AllowHtml]
		public string Actions { get; set; }
		[AllowHtml]
		public string LegendaryActions { get; set; }
		[AllowHtml]
		public string SpecialTraits { get; set; }
	}
}