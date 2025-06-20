using System;

namespace FactoryMethodPattern
{
    public abstract class Creator
    {
        public abstract IProduct FactoryMethod();
    }
}
