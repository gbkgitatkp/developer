MySQL JOINS Tutorial: INNER, OUTER, LEFT, RIGHT, CROSS
What are JOINS?
Joins help retrieving data from two or more database tables. 
The tables are mutually related using primary and foreign keys.

Note: JOIN is the most misunderstood topic amongst SQL leaners. For sake of simplicity and ease of understanding , we will be using a new Database to practice sample.  As shown below

id	first_name	last_name		movie_id
1	Adam			Smith			1
2	Ravi			Kumar			2
3	Susan			Davidson		5
4	Jenny			Adrianna		8
6	Lee				Pong			10


id	title								category
1	ASSASSIN'S CREED: EMBERS		Animations
2	Real Steel(2012)				Animations
3	Alvin and the Chipmunks			Animations
4	The Adventures of Tin Tin		Animations
5	Safe (2012)						Action
6	Safe House(2012)				Action
7	GIA								18+
8	Deadline 2009					18+
9	The Dirty Picture				18+
10	Marley and me					Romance

Types of joins
 

1. Cross JOIN

Cross JOIN is a simplest form of JOINs which matches each row from one database table to all rows of another.

In other words it gives us combinations of each row of first table with all records in second table.

SELECT * FROM `movies` CROSS JOIN `members`

2. INNER JOIN
The inner JOIN is used to return rows from both tables that satisfy the given condition.

Suppose , you want to get list of members who have rented movies together with titles of movies rented by them. You can simply use an INNER JOIN for that, which returns rows from both tables that satisfy with given conditions.


SELECT members.`first_name` , members.`last_name` , movies.`title`
FROM members ,movies
WHERE movies.`id` = members.`movie_id`


first_name	last_name		title
Adam			Smith		ASSASSIN'S CREED: EMBERS
Ravi			Kumar		Real Steel(2012)
Susan			Davidson	Safe (2012)
Jenny			Adrianna	Deadline(2009)
Lee				Pong		Marley and me


SELECT A.`first_name` , A.`last_name` , B.`title`
FROM `members`AS A
INNER JOIN `movies` AS B
ON B.`id` = A.`movie_id`

3.Outer JOINs
MySQL Outer JOINs return all records matching from both tables .

It can detect records having no match in joined table. It returns NULL values for records of joined table if no match is found.

LEFT JOIN
Assume now you want to get titles of all movies together with names of members who have rented them. It is clear that some movies have not being rented by any one. We can simply use LEFT JOIN for the purpose.
The LEFT JOIN returns all the rows from the table on the left even if no matching rows have been found in the table on the right. Where no matches have been found in the table on the right, NULL is returned.

SELECT A.`title` , B.`first_name` , B.`last_name`
FROM `movies` AS A
LEFT JOIN `members` AS B
ON B.`movie_id` = A.`id`


SELECT 
    status, SUM(quantityOrdered * priceEach) AS amount
FROM
    orders
        INNER JOIN
    orderdetails USING (orderNumber)
GROUP BY status;

// select total count of each row of column

SELECT 
    quantityOrdered, COUNT(*)
FROM
    candidate
GROUP BY quantityOrdered;

//with expression

SELECT 
    candidate_name,SUM(quantityOrdered * priceEach) AS amounts
FROM
    candidate
        INNER JOIN
    candidatevotes USING (candidate_id)
    WHERE
    candidate_name = 'xyz'
GROUP BY candidate_name ;
// distinct => count the no. of candidate without duplicates ie x,x,y,z op = 3//(x,y,z) 
select count(distinct candidate_name) from candidate
// max 
//min
select max(quantityOrdered) from candidate

select min(quantityOrdered) from candidate
//AVG average
select AVG(quantityOrdered) from candidate

//
select candidate_name,max(quantityOrdered) from candidate quantityOrdered where quantityOrdered > 12 group by quantityOrdered
// having betwwen => for range
select candidate_name,max(quantityOrdered) from candidate group by candidate_name 
having max(quantityOrdered) between 13 and 14

// having in => for range match the given list
select candidate_name,max(quantityOrdered) from candidate group by candidate_name 
having max(quantityOrdered) in( 11,13,10)