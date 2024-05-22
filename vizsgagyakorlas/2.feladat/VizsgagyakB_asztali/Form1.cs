using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace VizsgagyakB_asztali
{
    public partial class Form1 : Form
    {
        List<Fesztival> list = new List<Fesztival>();
        public Form1()
        {
            InitializeComponent();
            string[] lines = File.ReadAllLines("fesztival.txt");

            foreach (string line in lines)
            {
                string[] values = line.Split(',');
                Fesztival obj = new Fesztival(values[0], values[1], values[2], values[3], values[4], values[5], values[6]);
                list.Add(obj);
            }

            Dictionary<string, double> dict = new Dictionary<string, double>();

            foreach (var item in list)
            {
                double osszeg = item.ar * item.nap * item.fo;
                if (item.kedvezmeny == "igen")
                {
                    osszeg *= 0.75;
                }

                if (dict.ContainsKey(item.nev))
                {

                    dict[item.nev] += osszeg;
                }
                else
                {
                    dict[item.nev] = osszeg;
                }
            }

            var csokkeno = dict.OrderByDescending(x => x.Value);

            foreach (var item in csokkeno)
            {
                dataGridView1.Rows.Add(item.Key, item.Value);
            }
            var min = dict.OrderBy(x => x.Value).First();
            label1.Text = $" A legkevesebbet költő személy: {min.Key}, összeg: {min.Value} Ft";

            Dictionary<string, int> foglalasok = new Dictionary<string, int>();

            foreach (var item in list)
            {
                if (foglalasok.ContainsKey(item.nev))
                {
                    foglalasok[item.nev]++;
                }
                else
                {
                    foglalasok[item.nev] = 1;
                }
            }

            var tobbFoglalas = foglalasok.Where(x => x.Value >= 3);

            foreach (var person in tobbFoglalas)
            {
                listBox1.Items.Add($"Legalább háromszor foglalt: {person.Key}");
            }
        }
    }
}
