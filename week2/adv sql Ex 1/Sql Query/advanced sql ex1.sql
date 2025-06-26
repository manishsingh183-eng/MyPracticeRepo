WITH RankedProducts AS (
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS Rank
    FROM Products
)
SELECT * FROM RankedProducts
WHERE Rank <= 3;
