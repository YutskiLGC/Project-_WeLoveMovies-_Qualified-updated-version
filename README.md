run: npm install
run: npm install knex pg 
run: npm install cors
create database elephantSQL or other of choice 
connect database to DBeaver or other of choice 
run npx knex migrate:latest
run npx knex seed:run 
