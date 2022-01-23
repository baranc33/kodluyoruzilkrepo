  int[] sayiDizisi = { 11, 2, 23, 5, 6 };

            Console.WriteLine("*********** Sırasız Dizi*********");
            foreach (var item in sayiDizisi)
                Console.WriteLine(item);

            Console.WriteLine("*********** Sıralı Dizi*********");

            Array.Sort(sayiDizisi);
            foreach (var item in sayiDizisi)
                Console.WriteLine(item);


            Console.WriteLine("*********** Array Clear*********");

            Array.Clear(sayiDizisi, 2, 2);

            foreach (var item in sayiDizisi)
                Console.WriteLine(item);


            Console.WriteLine("*********** Array Reverse *********");

            Array.Reverse(sayiDizisi);

            foreach (var item in sayiDizisi)
                Console.WriteLine(item);


            Console.WriteLine("*********** Array IndexOf *********");

            int ads = Array.IndexOf(sayiDizisi,2);

            Console.WriteLine(ads);


            Console.WriteLine("*********** Array Resize*********");

            Array.Resize<int>(ref sayiDizisi, 9);