using System;
using System.Collections.Generic;

namespace ECommerceSearch
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Product> products = new List<Product>
            {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Shoes", "Footwear"),
                new Product(3, "Smartphone", "Electronics"),
                new Product(4, "Notebook", "Stationery"),
                new Product(5, "Pen", "Stationery")
            };

            Console.WriteLine("Searching for 'Shoes' using Linear Search:");
            var linearResult = LinearSearch(products, "Shoes");
            Console.WriteLine(linearResult != null ? linearResult.ToString() : "Product not found");

            Console.WriteLine("\nSorting products and searching using Binary Search:");
            products.Sort((x, y) => x.ProductName.CompareTo(y.ProductName));
            var binaryResult = BinarySearch(products, "Shoes");
            Console.WriteLine(binaryResult != null ? binaryResult.ToString() : "Product not found");

        }

        static Product LinearSearch(List<Product> products, string name)
        {
            foreach (var product in products)
            {
                if (product.ProductName.Equals(name, StringComparison.OrdinalIgnoreCase))
                    return product;
            }
            return null;
        }

        static Product BinarySearch(List<Product> products, string name)
        {
            int left = 0;
            int right = products.Count - 1;

            while (left <= right)
            {
                int mid = (left + right) / 2;
                int comparison = string.Compare(products[mid].ProductName, name, StringComparison.OrdinalIgnoreCase);

                if (comparison == 0)
                    return products[mid];
                else if (comparison < 0)
                    left = mid + 1;
                else
                    right = mid - 1;
            }

            return null;
        }
    }
}

