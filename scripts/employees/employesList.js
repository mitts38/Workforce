import{useEmployees} from"../employees/employesDataProvider.js"
import{useComputers} from"../computer/computerDataProvider.js"
import employees from "../employees/employees.js"
import { useDepartments } from "../department/departmentDataProvider.js"
import { useLocation } from "../location/locationDataProvider.js"
import { useCustomers } from "../location/customerProvider.js"
import {useEmployeeCustomers} from "../location/employeesCustomerProvider.js"
const  contentTarget = document.querySelector(".employees")

export const EmployeestList = () => {
    const allEmployees = useEmployees()
    const allComputers = useComputers()
    const allDepartment =useDepartments()
    const allLocation = useLocation()
    const customers = useCustomers()
    const empCust = useEmployeeCustomers()

    

    const render = () => {
        contentTarget.innerHTML = allEmployees.map(employ => {
            // Find this product's type
            const computers = allComputers.find(type => type.id === employ.computerId)
            const department = allDepartment.find(type => type.id === employ.departmentId)
            const location = allLocation.find(type => type.id ===employ.locationId)
            // Get HTML representation of product
            const customerRelationships = empCust.filter(ec => ec.employeeId === employ.id)
            // For each relationship, find the corresponding company
            const foundCustomersArray = customerRelationships.map(rc => {
                const foundCustomer = customers.find(customer => customer.id === rc.customerId)
                return foundCustomer
            })
            console.log(foundCustomersArray)

            const html = employees(employ, computers, department, location, foundCustomersArray)

            return html
        }).join("")
    }

    render()
}

export default EmployeestList
