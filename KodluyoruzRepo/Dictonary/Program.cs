// dictonary key and value  şeklinde veri tutar
// keyler uniqe olmalı

Dictionary<int, string> kullanicilar = new Dictionary<int, string>();

kullanicilar.Add(10, "ayşe yılmaz");
kullanicilar.Add(11, "ahmet yılmaz");
kullanicilar.Add(12, "deniz arda");
kullanicilar.Add(13, "özcan çooşar");
kullanicilar.Add(14, "hakan baran çakır");



Console.WriteLine(kullanicilar[14]);


foreach (var item in kullanicilar)
{
    Console.WriteLine(item);
}

int sayi = kullanicilar.Count();

bool a = kullanicilar.ContainsKey(1);
bool b = kullanicilar.ContainsValue("arama");


//Remove key üstünden silme  
kullanicilar.Remove(12);


// sadece key veya value üstünden işlem yapulabilir

//kullanicilar.Keys
//kullanicilar.Values