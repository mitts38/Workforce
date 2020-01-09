const employees = (employee, computers, department, location, customers) => {
    return`
<section class="employee">
<header>
<h2>${employee.firstName} ${employee.lastName}</h2>
</header>
<div>
<h3>${employee.age}</h3>
</div>
<div>
<h3>Using the${computers.model} ${computers.year} computer</h3>
</div>
<div><h3>
Works in the${department.name}department</h3>
</div>
<div><h3>
Located in the${location.place}office</h3>
</div>
<div>
<h3>currently working for...</h3>
<ol><h3>
${
    customers.map(c=>{
        return`<li>${c.name}</li>`
    }).join("")
}
</h3>
</ol>
</div>

    </section>`
}

export default employees





