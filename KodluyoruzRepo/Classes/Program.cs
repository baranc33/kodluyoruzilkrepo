// sınıflar nesne oluşturmak için kullandığımız yaplar


Calisan calisan1 = new Calisan()
{
    Departman = "Yazılım",
    No = 1,
    SoyAd = "Çakır",
    ad = "Hakan Baran"
};

calisan1.calisanBilgileri();


// söz dizimi
class SinifAdi
{
    /*
       property
      [Erişim Belirleyici] [Veri Tipi] ÖzellikAdi;

      Metot
      [Erişim Belirleyici] [Geri Dönüş Tipi] MetotAdi(paramterle listesi)
      {
      }
     */


    // erişim belirleyiciler
    /*
     public heryerden erişilebilir
     private= sadece scopei çinden erişilebilir
    internal = sadece proje içinden
    protected= sadece tanımlandığı veya kalıtım alan sınıflarda erişileilibir
     
     */
}



class Calisan
{
    public string ad;
    public string SoyAd;
    public int No;
    public string Departman;


    public void calisanBilgileri()
    {
        Console.WriteLine("Çalışan Adı:{0}",ad);
        Console.WriteLine("Çalışan Soy Adı:{0}",SoyAd);
        Console.WriteLine("Çalışan Numarası:{0}",No);
        Console.WriteLine("Çalışan Departmanı :{0}",Departman);
    }
}