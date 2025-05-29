DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id serial primary key,
  name text unique not null,
  birthday date not null,
  salary integer not null
);

