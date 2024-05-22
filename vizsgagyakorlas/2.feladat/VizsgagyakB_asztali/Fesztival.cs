using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VizsgagyakB_asztali
{
    internal class Fesztival
    {
        public string id;
        public string nev;
        public string hotel;
        public int fo;
        public int nap;
        public int ar;
        public string kedvezmeny;

        public Fesztival(string id, string nev, string hotel, string fo, string nap, string ar, string kedvezmeny)
        {
            this.id = id;
            this.nev = nev;
            this.hotel = hotel;
            this.fo = int.Parse(fo);
            this.nap = int.Parse(nap);
            this.ar = int.Parse(ar);
            this.kedvezmeny = kedvezmeny;
        }
    }
}
