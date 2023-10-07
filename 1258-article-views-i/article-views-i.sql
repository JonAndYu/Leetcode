# Write your MySQL query statement below
SELECT author_id as id
FROM Views
WHERE Author_id = viewer_id
GROUP BY author_id
ORDER BY author_id ASC;
