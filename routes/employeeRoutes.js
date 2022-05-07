const express = require('express');
const router = express.Router();

const { getEmployees, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

router.get('/', getEmployees);

router.post('/', createEmployee);

router.put('/:id', updateEmployee);

router.delete('/:id', deleteEmployee);

module.exports = router;