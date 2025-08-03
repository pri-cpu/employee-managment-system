const router = require('express').Router();
const Employee = require('../models/Employee');

router.post('/', async (req, res) => {
  const emp = new Employee(req.body);
  await emp.save();
  res.json(emp);
});

router.get('/', async (req, res) => {
  const emps = await Employee.find();
  res.json(emps);
});

router.put('/:id', async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
});

module.exports = router;
