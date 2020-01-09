const employees = (employee, computers, department, location) => {
    return`
<section class="employee">
<header>
<h2>${employee.firstName}</h2>
<h2>${employee.lastName}</h2>
</header>
<div>
<h2>${employee.age}</h2>
</div>
<div>
<h2>${computers.model}</h2>
</div>
<div>
<h2>${computers.year}</h2>
</div>
<div>
</div>
<div>
<h2>${department.name}</h2>
</div>
<div>
<h2>${location.place}</h2>
</div>


</section>`
}

export default employees





