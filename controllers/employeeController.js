const {response} = require('express');
const Employee = require('../models/EmployeeModel');


// @dec    get employees
// @route  GET /api/gemployees
// @access Private
const getEmployees = async (req,res)=> {
    const employees = await Employee.find();

    res.status(200).json(employees);
}

// @dec    create employees
// @route  POST /api/gemployees
// @access Private
const createEmployee = async (req,res = response) => {

    const employee = new Employee(req.body);

    try {

        const employeeSaved =  await employee.save();

        res.json({
            ok: true,
            employee: employeeSaved
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
}

// @dec    update employee
// @route  PUT /api/gemployees/:id
// @access Private
const updateEmployee = async (req,res)=> {

    const employeeId = req.params.id;
    const _id = req._id;


    try {

        const employee = await Employee.findById(employeeId);
        
        // if(event.user.toString() !== _id){
        //     return res.status(401).json({
        //         ok: false,
        //         msg: 'Not authorized'
        //     });
        // }

        if(!employee){
            return res.status(404).json({
                ok: false,
                msg: 'Employee not found'
            });
        }

        const newEmployee = {
            ...req.body,
            // user: _id
        }

        // {new:true} opción para que retorne el nuevo objeto y no el viejo por defecto
        const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, newEmployee, {new:true});

        res.json({
            ok: true,
            employee: updatedEmployee
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
}

// @dec    delete employee
// @route  DELETE /api/gemployees/:id
// @access Private
const deleteEmployee = async (req,res)=> {

    const employeeId = req.params.id;
    const _id = req._id;


    try {

        const employee = await Employee.findById(employeeId);
        
        // if(employee.user.toString() !== _id){
        //     return res.status(401).json({
        //         ok: false,
        //         msg: 'Not authorized'
        //     });
        // }

        if(!employee){
            return res.status(404).json({
                ok: false,
                msg: 'Employee not found'
            });
        }

        await Employee.findByIdAndDelete(employeeId);

        res.json({
            ok: true
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
}


module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
}