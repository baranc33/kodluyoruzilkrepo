/*
 Out =>  Bir Fonksyon işe yaptırıp sonucu setleyip kullanmak istiyorsak bunu aut ile yapıyormuşuz 
metot imzas= metot adı + parametre sayısı+ parametre tipleri. bunlarını 3 ü aynı class içinde  aynı değerlerde olmamalı
 */

string sayi = "9999";
int outSayi;
bool sonuc = int.TryParse(sayi, out outSayi);
// eğer çevirme başarıylıysa sonuc true

if (sonuc) Console.WriteLine("Başarılı\n{0}", outSayi);
else Console.WriteLine("Başarısız");

Metotlar.Toplam(2, 3, out int toplam);
Console.WriteLine(toplam);
Metotlar.EkranaYazdir("aa");
Metotlar.EkranaYazdir(435);

class Metotlar
{

    static public void Toplam(int a, int b, out int toplam)
    {
        toplam = a + b;
    }
    static public void EkranaYazdir(string veri)
    {
        Console.WriteLine(veri);
    }
    static public void EkranaYazdir(string veri, string veri2)
    {

        Console.WriteLine(veri + " " + veri2);
    }
    static public void EkranaYazdir(int veri)
    {
        Console.WriteLine(veri.ToString());
    }

    static public void EkranaYazdir(char veri)
    {
        Console.WriteLine(veri.ToString());
    }

    static public void EkranaYazdir(double veri)
    {
        Console.WriteLine(veri.ToString());
    }
    static public void EkranaYazdir(bool veri)
    {
        Console.WriteLine(veri.ToString());
    }
}