using System;

class FinancialForecast
{
    static void Main(string[] args)
    {
        double presentValue = 10000; 
        double growthRate = 0.08;    
        int years = 5;               

        Console.WriteLine("Financial Forecast using Recursion");
        double futureValue = CalculateFutureValue(presentValue, growthRate, years);
        Console.WriteLine($"Future Value after {years} years: ₹{futureValue:F2}");
    }
    static double CalculateFutureValue(double pv, double rate, int n)
    {
        if (n == 0)
            return pv;

        return (1 + rate) * CalculateFutureValue(pv, rate, n - 1);
    }
}
