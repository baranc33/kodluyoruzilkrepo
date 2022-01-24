
Calisan calisan=new Calisan("Hakan Baran","Çakır",1,"Yazılım");
calisan.calisanBilgileri();

class Calisan
{
    public string ad;
    public string SoyAd;
    public int No;
    public string Departman;

    public Calisan()
    {

    }
            
    // constructer  kurucu metot
    public Calisan(string ad, string soyad, int no, string departman)
    {
        this.ad = ad;
        this.SoyAd = soyad;
        this.No = no;
        this.Departman = departman;
    }
    public void calisanBilgileri()
    {
        Console.WriteLine("Çalışan Adı:{0}", ad);
        Console.WriteLine("Çalışan Soy Adı:{0}", SoyAd);
        Console.WriteLine("Çalışan Numarası:{0}", No);
        Console.WriteLine("Çalışan Departmanı :{0}", Departman);
    }
}