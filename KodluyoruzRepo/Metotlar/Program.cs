/*

ErişimBelirteci GeriDönüştipi MetotAdi(parametreler)
{
Kodlarımız;
}

 */

int Topla(int deger1, int deger2)
{
    return deger1 + deger2;
}



int a = 2;
int b = 3;

string cevap = Topla(a, b).ToString();
Metotlar.EkranaYazdir(cevap);


class Metotlar
{
    static public void EkranaYazdir(string veri)
    {
        Console.WriteLine(veri);
    }

    static int arttırVeTopla(int deger1, int deger2)
    {
        deger1++;
        deger2++;

        return deger1 + deger2;
    }
}