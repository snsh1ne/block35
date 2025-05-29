import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  await createEmployee({
    name: "one",
    birthday: "2000-01-01",
    salary: 120,
  });
  await createEmployee({
    name: "two",
    birthday: "2001-01-01",
    salary: 121,
  });
  await createEmployee({
    name: "three",
    birthday: "2002-01-01",
    salary: 122,
  });
  await createEmployee({
    name: "four",
    birthday: "2002-01-01",
    salary: 122,
  });
  await createEmployee({
    name: "five",
    birthday: "2002-01-01",
    salary: 122,
  });
  await createEmployee({
    name: "six",
    birthday: "2002-01-01",
    salary: 122,
  });
  await createEmployee({
    name: "seven",
    birthday: "2002-01-01",
    salary: 122,
  });
  await createEmployee({
    name: "eight",
    birthday: "2002-01-01",
    salary: 122,
  });
  await createEmployee({
    name: "nine",
    birthday: "2002-01-01",
    salary: 122,
  });
  await createEmployee({
    name: "ten",
    birthday: "2002-01-01",
    salary: 122,
  });
}
