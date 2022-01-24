
            Console.WriteLine("Lütfen Bir sayı giriniz");
            int sayac = int.Parse(Console.ReadLine());


            for (int i = 0; i < sayac; i++)
            {
                if (i % 2 == 1)
                {
                    Console.WriteLine(i);
                }
            }

            int tektoplam = new int();
            int çiftToplam = new int();

            for (int i = 0; i < 1000; i++)
            {
                if (i % 2 == 0)
                {
                    tektoplam += i;
                }
                else
                {
                    çiftToplam += i;
                }

            }


            Console.WriteLine("tek" +tektoplam+" çift = "+çiftToplam);


