# Write your MySQL query statement below
WITH managers AS
(
    SELECT DISTINCT reports_to as employee_id
    FROM Employees
    WHERE reports_to IS NOT NULL
)

SELECT 
    e2.employee_id, 
    e2.name, 
    count(*) as reports_count, 
    ROUND(AVG(e.age)) as average_age
FROM Employees e
INNER JOIN Employees e2 ON e.reports_to = e2.employee_id
GROUP BY e2.employee_id
ORDER BY e2.employee_id ASC;