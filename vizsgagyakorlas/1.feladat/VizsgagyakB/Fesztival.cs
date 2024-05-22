using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VizsgagyakB
{
    internal class Fesztival
    {
        public int sorszam;
        public string nev;
        public string hotel;
        public int fo;
        public int nap;
        public int ar;
        public string kedvezmeny;

        public Fesztival(string sorszam, string nev, string hotel, string fo, string nap, string ar, string kedvezmeny)
        {
            this.sorszam = int.Parse(sorszam);
            this.nev = nev;
            this.hotel = hotel;
            this.fo = int.Parse(fo);
            this.nap = int.Parse(nap);
            this.ar = int.Parse(ar);
            this.kedvezmeny = kedvezmeny;
        }
    }
}
