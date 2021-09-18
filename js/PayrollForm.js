//UC8   
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function() {
    output.textContent = salary.value;
});
//UC9

class Employee{

    name;
    img;
    gender;
    dept;
    salary;
    startDate;
    notes;

    set name(name){
        this.name = name;
    }
    set img(img){
        this.img = img;
    }
    set gender(gender){
        this.gender = gender;
    }
    set dept(dept){
        this.dept = dept;
    }
    set salary(salary){
        this.salary = salary;
    }
    set startDate(startDate){
        this.startDate = startDate;
    }
    set notes(notes){
        this.notes = notes;
    }
}

let emp = new Employee();