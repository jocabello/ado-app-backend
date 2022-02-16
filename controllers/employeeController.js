
// @dec    get employees
// @route  GET /api/gemployees
// @access Private
const getEmployees = (req,res)=> {
    res.status(200).json({ message: 'get employees'})
}

// @dec    create employees
// @route  POST /api/gemployees
// @access Private
const createEmployee = async (req,res) => {

    const employee = req.body

    // console.log(req.body);

    try {

        // const employeeSaved =  await employee.save();

        res.json({
            ok: true,
            // employee: employeeSaved
            employee
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
const updateEmployee = (req,res)=> {
    res.status(200).json({ message: `update employee ${req.params.id}`})
}

// @dec    delete employee
// @route  DELETE /api/gemployees/:id
// @access Private
const deleteEmployee = (req,res)=> {
    res.status(200).json({ message: `delete employee ${req.params.id}`})
}


module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
}