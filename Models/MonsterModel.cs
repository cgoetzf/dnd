using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DndOnline.Models
{
    public class MonsterModel
    {
		public int Monster_Id { get; set; }
		public string Name { get; set; }
		public int 	Static_Hp  { get; set; }
		public int Random_Hp { get; set; }
		public int Armor_Class { get; set; }
		public string Speed  { get; set; }
		public int Challenge { get; set; }

		public int Strenght { get; set; }
		public int Mod_Strenght { get; set; }
		public int Dexterity { get; set; }
		public int Mod_Dexterity { get; set; }
		public int Constituition { get; set; }
		public int Mod_Constituition { get; set; }
		public int Intelligence { get; set; }
		public int Mod_Intelligence { get; set; }
		public int Wisdom { get; set; }
		public int Mod_Wisdom { get; set; }
		public int Charisma { get; set; }
		public int Mod_Charisma { get; set; }

		public int Sen_Perception { get; set; }
		public int Sen_Insight { get; set; }
		public int Sen_Investigation { get; set; }

		public int Sk_Acrobatics { get; set; }
		public int Sk_Animal_Hnd { get; set; }
		public int Sk_Arcana { get; set; }
		public int Sk_Athletics { get; set; }
		public int Sk_Deception { get; set; }
		public int Sk_History { get; set; }
		public int Sk_Insight { get; set; }
		public int Sk_Intimidation { get; set; }
		public int Sk_Investigation { get; set; }
		public int Sk_Medicine { get; set; }
		public int Sk_Nature { get; set; }
		public int Sk_Perception { get; set; }
		public int Sk_Performance { get; set; }
		public int Sk_Persuasion { get; set; }
		public int Sk_Religion { get; set; }
		public int Sk_Sleight_Hand { get; set; }
		public int Sk_Stealth { get; set; }
		public int Sk_Survival { get; set; }

		public int Exp_Amount { get; set; }
		public string Languages { get; set; }
		public string Description { get; set; }
		public string Actions { get; set; }
		public string Observations { get; set; }
	}
}