import { getComputers } from "./computerDataProvider.js";   
import { getEmployees } from "./employesDataProvider.js";
import{getDepartments } from"./departmentDataProvider.js"
import { getLocation } from "./locationDataProvider.js";
import EmployeestList from "./employesList.js";

getEmployees()
.then(getComputers)
.then(getDepartments)
.then(getLocation)
.then(EmployeestList)

