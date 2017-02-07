/*LIKE '%Bak%'와 다르게 글자수까지 정할수 있다*/
select name from products WHERE name LIKE 'Bak____________'

/*SELECT 개수도 정할수 있음. 2개까지 호출*/
select name from products LIMIT 2

/*앞의 2개를 건너뛰고 두게 호출*/
select * from products LIMIT 2,2

/*이름 오름차순으로 정렬뒤 상위 두개 이후의 2개호출*/
select * from products ORDER BY name ASC LIMIT 2,2

/*SELECT ATTRIBUTE FROM TABLE WHERE GROUP BY ORDER BY LIMIT
->이순서를 반드시 지켜라!
*/
