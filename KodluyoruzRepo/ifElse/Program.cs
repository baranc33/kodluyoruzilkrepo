int time = DateTime.Now.Hour;


if (time >= 6 && time < 11)
{
    Console.WriteLine("Günaydın");
}
else if (time <= 10)
{
    Console.WriteLine("iyi Günler");
}
else
{
    Console.WriteLine("iyi aksamlar");
}

string Sonuc = time <= 18 ? "iyi Günler " : "iyi Geceler";

