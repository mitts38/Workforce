import{useEmployees} from"./employesDataProvider.js"
import{useComputers} from"./computerDataProvider.js"
import employees from "./employees.js"
import { useDepartments } from "./departmentDataProvider.js"
import { useLocation } from "./locationDataProvider.js"

const  contentTarget = document.querySelector(".employees")

export const EmployeestList = () => {
    const allEmployees = useEmployees()
    const allComputers = useComputers()
    const allDepartment =useDepartments()
    const allLocation = useLocation()

    const render = () => {
        contentTarget.innerHTML = allEmployees.map(employ => {
            // Find this product's type
            const computers = allComputers.find(type => type.id === employ.computerId)
            const department = allDepartment.find(type => type.id === employ.departmentId)
            const location = allLocation.find(type => type.id ===employ.locationId)
            // Get HTML representation of product
            const html = employees(employ, computers, department, location)

            return html
        }).join("")
    }

    render()
}

export default EmployeestList
