
            // değişken tiperi 

            /*
byte	1 bayt	0, ..., 255 (tam sayı)	 
sbyte	1 bayt	-128, ..., 127 (tam sayı)	 
short	2 bayt	-32768, ..., 32767 (tam sayı)	 
ushort	2 bayt	0, ..., 65535 (tam sayı)	 
int	4 bayt	-2147483648, ..., 2147483647 (tam sayı)	 
uint	4 bayt	0, ..., 4294967295 (tam sayı)	 
long	8 bayt	-9223372036854775808, ..., 9223372036854775807 (tam sayı)	 
ulong	8 bayt	0, ..., 18446744073709551615 (tam sayı)	 
float	4 bayt	±1.5*10-45, ..., ±3.4*1038 (reel sayı)	 
double	8 bayt	±5.0*10-324, ..., ±1.7*10308 (reel sayı)
decimal	16 bayt	±1.5*10-28, ..., ±7.9*1028 (reel sayı)
DateTime =Tarih
           char	2 bayt	Tek bir karakteri tutar.	
           string	Sınırsız	Metin tutar.
           
            */

/*
Değişken isimlendirme  Kuralları
1- Kod isimleri Kullanılamaz (static,class, void )
2- Harf ile başlamak zorunda (_ alt tire istisna)
3- özel karakterler veya boşluk olamaz(_ alt tire istisna)
4-(case sensivity) küçük büyük harf duyarlılığı vardır
*/


/*

değişkene değer atamak için 2 farklı yöntem kullanılır 
1- değşken oluştururken değer atamak 
int a=5;
2- değişken oluşturduktan sonra değer atamak
int a;
a=5;




-Aynı faliyet alanında aynı isimde 2 değişken tanımlanırsa Bu hata verecektir.
- üst seviye blokta açılan değişken alt seviyeyide kapsamaktadır.

*/  



            Console.WriteLine("Hello World!");