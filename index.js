var list = document.getElementById("list");
var add = document.getElementById('addElem');
let Persons; // define an array of type Person

document.addEventListener("DOMContentLoaded", function (event) {


add.addEventListener('click', function() {
    
    let li = document.createElement("li");
    let Person = {
        name:  document.getElementById("custname").value,        
        city: document.getElementById("city").value,        
        payment: document.getElementById("paymentType").value
    }
    
    Persons = Person;
    
    
    li.innerHTML = Persons.name + '  ' + Persons.city + '  '+ Persons.payment;
    list.appendChild(li);
    
  });


});


function getData(){
    return false;
}

