

/*
List<T> class
 system.Collection.Generic
T => object türünden
 
 */


List<int> sayiListesi = new List<int>();
sayiListesi.Add(16);
sayiListesi.Add(12);
sayiListesi.Add(32);
sayiListesi.Add(234);
sayiListesi.Add(23);
sayiListesi.Add(30);
sayiListesi.Add(20);

List<string> RenkListesi = new List<string>();
RenkListesi.Add("Kırmızı");
RenkListesi.Add("Mavi");
RenkListesi.Add("yeşil");
RenkListesi.Add("Turuncu");
RenkListesi.Add("Sarı");
RenkListesi.Add("Mor");
RenkListesi.Add("Siyah");
RenkListesi.Add("Lacivert");

Console.WriteLine(RenkListesi.Count);
Console.WriteLine(sayiListesi.Count);


sayiListesi.ForEach(x => Console.WriteLine(x));
RenkListesi.ForEach(renk => Console.WriteLine(renk));

sayiListesi.Remove(16);
RenkListesi.Remove("Sarı");


// index ile silme
sayiListesi.RemoveAt(0);
RenkListesi.RemoveAt(1);



//if (sayiListesi.Contains(15))
//{
//    // sayi listesinde bu değer varmı diye kontrol eder
//}


// diziyi listeye çevirme

int[] rakamlar = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

List<int> ListRakam = new List<int>(rakamlar);


// clear  => listenin içini boşaltmak






