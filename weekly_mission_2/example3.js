//simple object ***********************************************************
const student = {
    name: "Adrián",
    age: 29,
    idLaunchX: 1808,
    email: "1808@launchx.com",
    cellPhone: '5512345678',
    missions: ["onboarding", "front-end", "node-js"]
}
console.log("This is a simple object in JS:")
console.log(student)

//Class without constructor*****************************************************
class Students{
    name
    age
    idLaunchX
    email
    cellPhone
    missions
}
console.log(Students)

const student1 = new Students
student1.age = 21
student1.missions = ["onboarding", "front-end"]
console.log(student1)

//Class with constructor without parameters******************************************
class StudentsL{
    constructor()
    {
        console.log("New object created")
    }
    name
    age
    idLaunchX
    email
    cellPhone
    missions
}
console.log(StudentsL)

const studentL1 =  new StudentsL();
studentL1.idLaunchX = 5090
studentL1.cellPhone = '5588445577'
console.log(studentL1)

//Class with constructor and paramaters***********************************
class StudentsLX{
    constructor(name, age, idLaunchX, email, cellPhone, missions)
    {
        console.log("New object created!!!")
        this.name = name
        this.age = age
        this.idLaunchX = idLaunchX
        this.email = email
        this.cellPhone =  cellPhone
        this.missions = missions
    }
}
console.log(StudentsLX)

const StudentsLX1 = new StudentsLX('ADRIAN',29,1512,'1512@launchx.com',null,['onboarding','front-end','node-js'])
console.log(StudentsLX1)



