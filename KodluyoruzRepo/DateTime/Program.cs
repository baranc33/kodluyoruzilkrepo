Console.WriteLine(DateTime.Now); // 5.02.2022 02:14:19
Console.WriteLine(DateTime.Now.Date);  // 5.02.2022 00:00:00
Console.WriteLine(DateTime.Now.Day);
Console.WriteLine(DateTime.Now.Month);
Console.WriteLine(DateTime.Now.Year);
Console.WriteLine(DateTime.Now.Hour);
Console.WriteLine(DateTime.Now.Minute);
Console.WriteLine(DateTime.Now.Second);
Console.WriteLine(DateTime.Now.Millisecond);


Console.WriteLine(DateTime.Now.DayOfWeek);// Saturday
Console.WriteLine(DateTime.Now.DayOfYear);



DateTime time = new DateTime();

time.AddDays(1);
time.AddMilliseconds(1);
time.AddHours(1);
time.AddYears(1);
// şeklinde eklmee yapabilirz

Console.WriteLine(DateTime.Now.ToLongDateString());  ///5 Şubat 2022 Cumartesi
Console.WriteLine(DateTime.Now.ToShortDateString()); // 5.02.2022
Console.WriteLine(DateTime.Now.ToLongTimeString());  // 02:14:19

// dateTime Formatlar
/* gün için
 dd   sayısal
ddd   kısaltma isim
dddd tam isim
Ay için
mm say
mmm kısaltma
mmmm  uzun
yıl için
yy   son 2 rakam
yyyy 4 rakam


*/


/*
 
Abs  mutlak değer
İnt a =Math.Abs (5);   

Ceiling   Yukarıya yuvarlama
Ondalıklı sayıyı bir üst tam sayıya yuvarlar
Math.Ceiling(1.4)

Floor  Aşşağıya yuvarlama
Round   Yakın sayıya yuvarlam
Pow
// üslü sayılar
            double a = Math.Pow(2, 3); // 2 üssü 3 
            Console.WriteLine(a);//8
Sqrt
 
            // KareKök Alma
            double a = Math.Sqrt(16);
            Console.WriteLine(a);//4

            double b = Math.Sqrt(55);
            Console.WriteLine(b);//7,416198487095663
Truncate
Ondalıklı kısmı siler. Tam Sayı verir

            double a = Math.Truncate(3.550);
            Console.WriteLine(a); //3


 */



