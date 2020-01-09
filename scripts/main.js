import { getComputers } from "./computer/computerDataProvider.js";   
import { getEmployees } from "./employees/employesDataProvider.js";
import{getDepartments } from"./department/departmentDataProvider.js";
import { getLocation } from "./location/locationDataProvider.js";
import { getEmployeeCustomers } from "./location/employeesCustomerProvider.js"
import { getCustomers } from "./location/customerProvider.js"

import EmployeestList from "./employees/employesList.js"

getEmployees()
.then(getComputers)
.then(getDepartments)
.then(getLocation)
.then(getEmployeeCustomers)
.then(getCustomers)
.then(EmployeestList)

