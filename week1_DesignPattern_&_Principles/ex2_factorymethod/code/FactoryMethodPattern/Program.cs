using System;

namespace FactoryMethodPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Factory Method Pattern Demo");

            Creator creator = new ConcreteCreatorA();
            IProduct product = creator.FactoryMethod();

            product.Show();

            Console.ReadLine(); // keeps the console open
        }
    }
}
