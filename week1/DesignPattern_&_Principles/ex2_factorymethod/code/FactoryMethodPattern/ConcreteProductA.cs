using System;

namespace FactoryMethodPattern
{
    public class ConcreteProductA : IProduct
    {
        public void Show()
        {
            Console.WriteLine("This is Concrete Product A");
        }
    }
}
