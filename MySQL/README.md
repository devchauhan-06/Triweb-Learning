# MySQL 

This file provides a brief overview of fundamental MySQL operations, focusing on key actions performed.

## MySQL Operations

### Create (INSERT)

- **Insert Data**: Use SQL `INSERT` statements to add new records to a table.

### Retrieve (SELECT)

- **Query Data**: Employ SQL `SELECT` statements to retrieve data from one or more tables.
- **Filter Results**: Use the `WHERE` clause to specify conditions for selecting specific rows.
- **Join Tables**: Combine data from multiple tables using `JOIN` operations, such as `INNER JOIN` or `LEFT JOIN`.

### Update

- **Modify Data**: Utilize the SQL `UPDATE` statement to modify existing records within a table.

### Delete

- **Remove Data**: Employ SQL `DELETE` statements to delete records from a table.

### Basic Operations Example

- Here is a simple example illustrating these operations in SQL:

```sql
-- Insert Data
INSERT INTO students(student_name,mobile, class_id) values("Dev Chauhan","6396",7),("Garv Rathi","7024",1),("Prachi Mehta","6789",1)

-- Query Data
SELECT * FROM students where class_id=5 or class_id=4

-- Update Data
UPDATE  classes SET class_name = "Class 6-A" where id = 2

-- Delete Data
DELETE FROM students WHERE student_name = "Dev Chauhan";
