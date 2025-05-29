import express from "express";
const router = express.Router();
export default router;

import { getEmployee, createEmployee, updateEmployee, deleteEmployee, deleteEmployee } from "#db/queries/employees";

// TODO: this file!

router.route("/").get(async (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

router.route("/employees").get(async (req, res) => {
  const employees = await getEmployee();
  res.send(employees);
});

router.route("/employees").post(async (req, res)=>{
  if(!req.body){
    return res.status(400).send({error: "missing req.body"})
  }

  const {name, birthday, salary} = req.body
  if(!name||!birthday||!salary){
    return res.status(400).send({error: "missing req param"})
  }

  const employee = await createMovie({name, birthday, salary})
  res.status(201).send(employee)
})

router.route.apply("/employees:id").get(async (req,res)=>{
  const {id} = req.param.id
  if(!Number.isInteger(id) && id < 0){
    return res.status(400).send({error: "no valid number"})
  }

  const employee = await getEmployee(id)
  if(!employee){
    return res.status(404).send({error: "id not found"})
  }
  res.send(employee)
})

 router.route("/employees:id").delete(async(req,res)=>{
    const id = req.param.id
  if(!Number.isInteger(id) && id < 0){
    return res.status(400).send({error: "no valid number"})
  }
  const deleteEmployee = await deleteEmployee(id)
  if(!deleteEmployee){
    res.status(404).send({error: "bruh"})
  }
  res.sendStatus(204)
 })

  router.route("/:id").put(async(req,res)=>{
  const id= req.params.id
    if(!req.body){
      return res.status(400).send({error:"..right"})
    }
    const {name, birthday, salary} = req.body

    if (!name||!birthday||!salary){
      return res.status(400).send({error: ":("})
    }

    if(!Number.isInteger(id) && id <0){
      return res.status(400).status({error:"oopsies"})
    }

    const employees = await getEmployee(id)
    if(!employees){
      return res.status(404).send({error:"nah"})
    }

     const updated = await updateMovie({id, name, birthday, salary})
     res.status(200).send(updated)
 })