const normalPErson = {
    firstName: 'Rahim',
    lastName: "Uddin",
    getFullName: function () {
        return this.firstName + " " + this.lastName
    },
    salary: 14000,
    chargeBill: function (amount) {
        console.log(this);
        return this.salary - amount;
    }
}

const lestSalary = normalPErson.chargeBill(1000)
console.log(lestSalary);

const heroPerson={
    firstName:"Hero",
    lastName: "Kalam",
    salary:20000
}

//normal use another function
const heroBillCharge=normalPErson.chargeBill.bind(heroPerson)
const hRB=heroBillCharge(15000)
console.log("heroBill Normal",hRB);

//direct use another function
const bill = normalPErson.chargeBill.call(heroPerson, 4000)
console.log("heroBill Direct",bill); 
//Apply use another function
const billApply = normalPErson.chargeBill.call(heroPerson, [2000])
console.log("heroBill apply",billApply); 