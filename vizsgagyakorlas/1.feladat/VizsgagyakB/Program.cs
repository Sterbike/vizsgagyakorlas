using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VizsgagyakB
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Fesztival> list = new List<Fesztival>();
            string[] lines = File.ReadAllLines("fesztival.txt");
            foreach (string line in lines)
            {
                string[] adatok = line.Split(',');
                Fesztival obj = new Fesztival(adatok[0], adatok[1], adatok[2], adatok[3], adatok[4], adatok[5], adatok[6]);
                list.Add(obj);
            }

            Console.WriteLine("4. feladat");
            foreach (var item in list)
            {
                Console.WriteLine($"{item.sorszam};{item.nev};{item.hotel};{item.fo};{item.nap};{item.ar};{item.kedvezmeny}");
            }

            Console.WriteLine("5. és 6. feladat");
            Dictionary<string, double> dict = new Dictionary<string, double>();

            foreach (var i in list)
            {
                double kedvezmeny = i.ar * i.nap * i.fo;
                if (i.kedvezmeny == "igen")
                {
                    kedvezmeny *= 0.75;
                }

                if (dict.ContainsKey(i.nev))
                {

                    dict[i.nev] += kedvezmeny;
                }
                else
                {
                    dict[i.nev] = kedvezmeny;
                }
            }

            var novDict = dict.OrderBy(x => x.Value);

            foreach (var item in novDict)
            {
                Console.WriteLine($"{item.Key}: {item.Value} Ft");
            }
            Console.WriteLine("7. feladat");
            var legtobbetKolto = novDict.Last();
            Console.WriteLine($"A legtöbbet költötte: {legtobbetKolto.Key} - {legtobbetKolto.Value} Ft");
            Console.WriteLine("8. feladat, Akik kétszer foglaltak:");
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

            var tobbFoglalas = foglalasok.Where(x => x.Value >= 2);

            foreach (var person in tobbFoglalas)
            {
                Console.WriteLine($"{person.Key}, {person.Value} alkalommal foglalt szállást.");
            }
            Console.ReadKey();
        }
    }
}
