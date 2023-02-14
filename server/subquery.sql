SELECT id, name, 
(SELECT COUNT(*) FROM employees WHERE id IS NOT NULL) WHERE COUNT(*) != 0) AS employee_count
FROM departments;