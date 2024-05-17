const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const form = document.querySelector('form');
console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault();
    let num1 = n1.value;
    let num2 = n2.value;
    num1 = Number(num1);
    num2 = Number(num2);
    let errorMessage = `${num2} is not greater than ${num1}, please enter new numbers`;
    let succesMessage = `${num2} is greater than ${num1}, congratulations`;
    if((num2 - num1) > 0){
        document.querySelector('#message').style.display = 'block';
        document.querySelector('#message').innerHTML = errorMessage;
        document.querySelector('#message').style.color = 'red';
    }
    else{
        document.querySelector('#message').innerHTML = succesMessage;
        document.querySelector('#message').style.color = 'green';
    }
    console.log(typeof(num1))
})