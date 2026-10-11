# Data geting

1...powershell - Get-Content input.txt | node question1.js
2...Bash - node question1.js < input.txt

---

# JavaScript Assessment Practice

These problems are designed to practice patterns commonly seen in coding assessments.

Solve them one by one.

Recommended approach:

1. Understand the requirements.
2. Identify the pattern.
3. Write the algorithm in plain English.
4. Write the code.
5. Test with the given input.
6. Test at least one additional edge case.

---

# Question 1 — Company Employee Performance Analyzer

## Problem

A company stores employee performance records from different teams.

Each record contains:

- Employee name
- Team name
- Performance score

The input data may contain inconsistent capitalization and spacing.

Your task is to generate a team-wise performance report.

## Rules

1. Employee names and team names are case-insensitive.

   For example:
   - `Alice`
   - `alice`
   - `ALICE`

   represent the same employee.

   Similarly:
   - `Frontend`
   - `FRONTEND`
   - `frontend`

   represent the same team.

2. Scores must be integers between `0` and `100`.

3. Invalid scores must be ignored.

4. If the same employee appears multiple times in the same team, keep only their highest score.

5. Each team should appear only once.

6. Teams should be sorted alphabetically.

7. Employees inside each team should be sorted by:
   - highest score first
   - if scores are equal, preserve their original input order.

8. Team names should be displayed with:
   - first letter uppercase
   - remaining letters lowercase.

## Input Format

The first line contains an integer `n`, representing the number of records.

The next `n` lines contain:

```text
name team score
```

## Sample Input

```text
9
Alice Frontend 85
alice frontend 92
BOB Backend 88
bob backend 91
Charlie Frontend 78
David Backend 91
Eve FRONTEND 105
Frank backend abc
George DevOps 90
```

## Expected Output

```text
Backend
Bob 91
David 91
Devops
George 90
Frontend
Alice 92
Charlie 78
```

---

# Question 2 — Store Sales Analyzer

## Problem

A retail company receives sales records from multiple stores.

Each record contains:

- Customer name
- Store name
- Purchase amount

Your task is to generate a store-wise sales report.

## Rules

1. Customer names and store names are case-insensitive.

2. The purchase amount must be a valid number between `1` and `100000`.

3. Invalid records must be ignored.

4. If the same customer appears multiple times in the same store, keep only their highest purchase amount.

5. Each store should appear only once.

6. Stores should be sorted alphabetically.

7. Customers inside each store should be sorted by purchase amount in descending order.

8. If two customers have the same purchase amount, preserve their original input order.

9. Store names should be displayed with:
   - first letter uppercase
   - remaining letters lowercase.

10. Stores with no valid entries should be skipped.

## Input Format

The first line contains an integer `n`.

The next `n` lines contain:

```text
customerName storeName amount
```

## Sample Input

```text
8
John Mumbai 5000
john mumbai 7500
Alice Delhi 8000
BOB Mumbai 6000
alice DELHI 7000
Bob mumbai 6000
David Delhi 9000
Mike Pune abc
```

## Expected Output

```text
Delhi
David 9000
Alice 8000
Mumbai
John 7500
Bob 6000
```

---

# Question 3 — Student Exam Analyzer

## Problem

A university stores examination records for students across different subjects.

Each record contains:

- Student name
- Subject name
- Score

Your task is to generate a subject-wise student report.

## Rules

1. Student names and subject names are case-insensitive.

2. Scores must be integers between `0` and `100`.

3. Invalid scores must be ignored.

4. If the same student appears multiple times for the same subject, keep only their highest score.

5. Each student should appear only once per subject.

6. Subjects should be sorted alphabetically.

7. Students inside each subject should be sorted by score in descending order.

8. If two students have the same score, preserve their original input order.

9. Subject names should be displayed with:
   - first letter uppercase
   - remaining letters lowercase.

10. Subjects with no valid students should be skipped.

## Input Format

The first line contains an integer `n`.

The next `n` lines contain:

```text
studentName subject score
```

## Sample Input

```text
10
Alice Math 80
alice math 95
Bob Math 90
Charlie Science 85
bob MATH 88
David Science 92
Eve science 105
Frank Math abc
George Physics 90
Harry physics 90
```

## Expected Output

```text
Math
Alice 95
Bob 90
Physics
George 90
Harry 90
Science
David 92
Charlie 85
```

---

# Question 4 — Product Review Analyzer

## Problem

An online store receives product reviews from customers.

Each record contains:

- Product name
- Category
- Rating

Your task is to generate a category-wise product rating report.

## Rules

1. Product names and category names are case-insensitive.

2. Rating must be an integer from `1` to `5`.

3. Invalid ratings must be ignored.

4. If the same product appears multiple times in the same category, calculate its average rating.

5. Each product should appear only once per category.

6. Categories should be sorted alphabetically.

7. Products inside each category should be sorted by average rating in descending order.

8. If two products have the same average rating, preserve their original input order.

9. Average ratings must be rounded to 2 decimal places.

10. Categories with no valid products should be skipped.

11. Category names should be displayed with:

- first letter uppercase
- remaining letters lowercase.

## Input Format

The first line contains an integer `n`.

The next `n` lines contain:

```text
productName category rating
```

## Sample Input

```text
8
Phone Electronics 5
phone electronics 4
Laptop Electronics 5
Camera Electronics 3
camera ELECTRONICS 5
Shirt Clothing 4
shirt clothing 5
Watch Clothing 6
```

## Expected Output

```text
Clothing
Shirt 4.50
Electronics
Laptop 5.00
Phone 4.50
Camera 4.00
```

---

# Question 5 — Doctor Appointment Analyzer

## Problem

A hospital stores patient appointment records.

Each record contains:

- Patient name
- Doctor name
- Department
- Waiting time in minutes

Your task is to generate a department-wise doctor report.

## Rules

1. Patient names, doctor names, and department names are case-insensitive.

2. Waiting time must be an integer between `0` and `300`.

3. Invalid records must be ignored.

4. If the same patient visits the same doctor multiple times, keep only their minimum waiting time.

5. Doctors should be grouped by department.

6. Departments should be sorted alphabetically.

7. Doctors inside each department should be sorted by their average patient waiting time in ascending order.

8. If two doctors have the same average waiting time, preserve their original input order.

9. Average waiting time should be rounded to 2 decimal places.

10. Departments with no valid records should be skipped.

11. Department names should be displayed with:
    - first letter uppercase
    - remaining letters lowercase.

## Input Format

The first line contains an integer `n`.

The next `n` lines contain:

```text
patient doctor department waitingTime
```

## Sample Input

```text
9
Alice DrSmith Cardiology 30
alice drsmith cardiology 20
Bob DrJones Cardiology 40
Charlie DrSmith Cardiology 50
David DrBrown Neurology 25
Eve DrBrown neurology 35
Frank DrJones Cardiology 40
Grace DrWhite Neurology 20
Henry DrWhite neurology 30
```

## Expected Output

```text
Cardiology
DrSmith 35.00
DrJones 40.00
Neurology
DrWhite 25.00
DrBrown 30.00
```

---

# Question 6 — E-Commerce Order Analyzer

## Problem

An e-commerce company stores customer orders.

Each record contains:

- Customer name
- Product category
- Order amount

Generate a category-wise customer report.

## Rules

1. Customer names and category names are case-insensitive.

2. Order amount must be a valid number between `1` and `500000`.

3. Invalid records must be ignored.

4. If a customer appears multiple times in the same category, keep only their highest order amount.

5. Categories should be sorted alphabetically.

6. Customers inside each category should be sorted by order amount descending.

7. If two customers have the same amount, preserve input order.

8. Category names should be properly formatted.

9. Categories with no valid orders should be skipped.

## Sample Input

```text
8
Rahul Electronics 50000
rahul electronics 75000
Priya Clothing 45000
Amit Electronics 80000
priya clothing 50000
Amit ELECTRONICS 60000
John Grocery abc
Neha Grocery 30000
```

## Expected Output

```text
Clothing
Priya 50000
Electronics
Amit 80000
Rahul 75000
Grocery
Neha 30000
```

---

# Question 7 — Employee Attendance Analyzer

## Problem

A company stores employee attendance records.

Each record contains:

- Employee name
- Department
- Number of days present

Generate a department-wise employee report.

## Rules

1. Names and departments are case-insensitive.

2. Days present must be an integer between `0` and `31`.

3. Invalid records must be ignored.

4. If the same employee appears multiple times in the same department, keep their highest number of days present.

5. Departments should be sorted alphabetically.

6. Employees should be sorted by days present in descending order.

7. If two employees have the same number of days, preserve their original input order.

8. Department names should be properly formatted.

## Sample Input

```text
8
Alice HR 25
alice hr 28
Bob IT 30
Charlie IT 25
bob it 29
David HR 28
Eve IT 35
Frank HR abc
```

## Expected Output

```text
Hr
Alice 28
David 28
It
Bob 30
Charlie 25
```

---

# Question 8 — Movie Rating Analyzer

## Problem

A movie platform stores ratings given by users.

Each record contains:

- Movie name
- Genre
- Rating

Generate a genre-wise movie report.

## Rules

1. Movie names and genres are case-insensitive.

2. Rating must be between `1` and `10`.

3. Invalid ratings must be ignored.

4. If the same movie appears multiple times in the same genre, calculate its average rating.

5. Genres should be sorted alphabetically.

6. Movies should be sorted by average rating descending.

7. If two movies have the same average rating, preserve their first input order.

8. Average ratings should be rounded to 2 decimal places.

9. Genre names should be properly formatted.

## Sample Input

```text
9
Inception SciFi 9
inception scifi 8
Avatar SciFi 7
Titanic Drama 9
titanic drama 10
Joker Drama 8
Batman Action 9
batman action 7
Superman Action 8
```

## Expected Output

```text
Action
Batman 8.00
Superman 8.00
Drama
Titanic 9.50
Joker 8.00
Scifi
Inception 8.50
Avatar 7.00
```

---

# Question 9 — Bank Transaction Analyzer

## Problem

A bank stores customer transaction records.

Each record contains:

- Customer name
- Account type
- Transaction amount

Generate an account-type-wise customer report.

## Rules

1. Customer names and account types are case-insensitive.

2. Transaction amount must be a valid positive number.

3. Invalid transactions must be ignored.

4. If the same customer appears multiple times for the same account type, keep their highest transaction amount.

5. Account types should be sorted alphabetically.

6. Customers should be sorted by transaction amount descending.

7. Equal amounts should preserve input order.

8. Account type names should be properly formatted.

## Sample Input

```text
8
Rahul Savings 5000
rahul savings 8000
Priya Current 9000
Amit Savings 7000
priya CURRENT 6000
Amit savings 7000
John Current abc
Neha Savings 10000
```

## Expected Output

```text
Current
Priya 9000
Savings
Neha 10000
Rahul 8000
Amit 7000
```

---

# Question 10 — Restaurant Rating Analyzer

## Problem

A food delivery platform stores restaurant ratings.

Each record contains:

- Restaurant name
- City
- Rating

Generate a city-wise restaurant report.

## Rules

1. Restaurant names and city names are case-insensitive.

2. Rating must be an integer between `1` and `5`.

3. Invalid ratings must be ignored.

4. If the same restaurant appears multiple times in the same city, calculate its average rating.

5. Cities should be sorted alphabetically.

6. Restaurants should be sorted by average rating descending.

7. Equal ratings should preserve first input order.

8. Average ratings should be rounded to 2 decimal places.

9. City names should be properly formatted.

## Sample Input

```text
9
Taj Delhi 5
taj delhi 4
ITC Delhi 5
Oberoi Mumbai 4
oberoi mumbai 5
Trident Mumbai 3
Taj Delhi 3
Leela Bangalore 5
leela bangalore 4
```

## Expected Output

```text
Bangalore
Leela 4.50
Delhi
Taj 4.00
ITC 5.00
Mumbai
Oberoi 4.50
Trident 3.00
```

Note: Before submitting, carefully check the sorting rule. The correct Delhi order should be:

```text
Delhi
ITC 5.00
Taj 4.00
```

---

# Practice Strategy

Solve the questions in this order:

1. Question 1 — Basic grouping + maximum
2. Question 2 — Grouping + maximum + validation
3. Question 3 — Same pattern with different data
4. Question 4 — Grouping + average
5. Question 5 — Nested grouping + minimum + average
6. Question 6 — Grouping + maximum
7. Question 7 — Grouping + maximum + tie ordering
8. Question 8 — Grouping + average + sorting
9. Question 9 — Grouping + maximum
10. Question 10 — Grouping + average + sorting

## Pattern Checklist

Before coding each question, identify:

### 1. Validation

```text
What makes a record invalid?
```

### 2. Normalization

```text
Which values should be compared case-insensitively?
```

### 3. Grouping

```text
What is the main grouping key?
```

### 4. Duplicate handling

```text
What makes two records the same?
```

### 5. Aggregation

```text
Do I need:
- maximum?
- minimum?
- sum?
- average?
- count?
```

### 6. Sorting

```text
What is the primary sort?
What happens when values are equal?
```

### 7. Output

```text
Does the problem expect:
- array?
- object?
- string?
- multiple lines?
```

---

# Core JavaScript Patterns to Remember

## Grouping

```js
const map = new Map();
```

## Case-insensitive key

```js
const key = value.toLowerCase();
```

## Duplicate check

```js
if (!map.has(key)) {
  map.set(key, value);
}
```

## Keep maximum

```js
if (newValue > oldValue) {
  oldValue = newValue;
}
```

## Keep minimum

```js
if (newValue < oldValue) {
  oldValue = newValue;
}
```

## Average

```js
const average = sum / count;
```

## Sort descending

```js
arr.sort((a, b) => b.score - a.score);
```

## Sort ascending

```js
arr.sort((a, b) => a.score - b.score);
```

## Preserve input order

```js
order: index;
```

Then:

```js
a.order - b.order;
```

## Alphabetical sorting

```js
a.name.toLowerCase().localeCompare(b.name.toLowerCase());
```

## Format first letter uppercase

```js
const formatted = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
```

```

**One correction I intentionally made:** in Questions 4, 8, and 10, the expected output follows the stated **descending average** rule. This is useful practice because spotting inconsistencies between a rule and an example is exactly the kind of thing you should learn to check during an assessment.
```
