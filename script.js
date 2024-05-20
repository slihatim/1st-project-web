let currentStep = 1;
let nameInput = document.getElementById('nameInput');
let greeting = document.getElementById('greeting');
let sandwichDisplay = document.getElementById('sandwichDisplay');

function nextStep() {
    if (currentStep === 1) {
        if (nameInput.value.trim() !== '') {
            greeting.textContent = `Hi ${nameInput.value},`;
            sandwichDisplay.innerHTML = ''; // katms7 l previous selections
        } else {
            alert('Please enter your name.');
            return;
        }
    }


    document.getElementById(`step${currentStep}`).style.display = 'none';
    currentStep++;
    document.getElementById(`step${currentStep}`).style.display = 'block';
}

function prevStep() {
    if (currentStep > 1) {
        document.getElementById(`step${currentStep}`).style.display = 'none';
        currentStep--;
        document.getElementById(`step${currentStep}`).style.display = 'block';
    }
}



//la logique dyal 2nd step
//initializing checkboxes
document.getElementById('ing1').checked = false;
document.getElementById('ing2').checked = false;
document.getElementById('ing3').checked = false;
document.getElementById('ing4').checked = false;


//Checkboxs
// Get the checkbox and target element
const checkbox1 = document.getElementById('ing1');
const checkbox2 = document.getElementById('ing2');
const checkbox3 = document.getElementById('ing3');
const checkbox4 = document.getElementById('ing4');
const targetElement = document.querySelector('.tomato');

let price = 10;
let storedPrice;


function showHide(checkbox, targetElement) {
    checkbox.addEventListener('change', function() {
        targetElement.style.display = this.checked ? 'block' : 'none';
        if (this.checked) {
            price += 10;
        } else {
            price -= 10;
        }
        document.querySelectorAll('.price, .price3, .price4').forEach(element => {
            element.innerHTML = `${price} MAD`;
        });
        document.querySelector('.t').innerHTML = `${price}`;

        
        // document.querySelector('.price3').innerHTML = `${price} MAD`;

    });
}

function showHideFinalOrder(checkbox, targetElement) {
    checkbox.addEventListener('change', function() {
        targetElement.style.display = this.checked ? 'block' : 'none';
        
    });
}

// Loop 3la les ingredients kat applique la logique dyal showHide

showHide(document.getElementById('ing1'), document.querySelectorAll('.patty')[0]);
showHideFinalOrder(document.getElementById('ing1'), document.querySelectorAll('.patty')[1]);

showHide(document.getElementById('ing2'), document.querySelectorAll('.cheese')[0]);
showHideFinalOrder(document.getElementById('ing2'), document.querySelectorAll('.cheese')[1]);

showHide(document.getElementById('ing3'), document.querySelectorAll('.lettuce')[0]);
showHideFinalOrder(document.getElementById('ing3'), document.querySelectorAll('.lettuce')[1]);

showHide(document.getElementById('ing4'), document.querySelectorAll('.tomato')[0]);
showHideFinalOrder(document.getElementById('ing4'), document.querySelectorAll('.tomato')[1]);





//Loop d 3eme step
console.log(storedPrice);

let count1 = 0;
const plusButton1 = document.querySelector('.plus1');
const minessButton1 = document.querySelector('.miness1');

plusButton1.addEventListener('click', function(){
    price += 20;
    document.querySelectorAll('.price, .price3, .price4').forEach(element => {
        element.innerHTML = `${price} MAD`;
    });
    document.querySelector('.t').innerHTML = `${price}`;

    count1 ++;
    document.querySelector('.count1').innerHTML = `${count1}`;
    document.querySelector('.c1').innerHTML = `${count1}`;

    if(count1 !== 0){
        document.querySelector('.display1').style.display = 'block';
    }
    
});


minessButton1.addEventListener('click', function(){
    if(count1>0){
        price -= 20;
        count1 --;
    }
    
    document.querySelectorAll('.price, .price3, .price4').forEach(element => {
        element.innerHTML = `${price} MAD`;
    });
    document.querySelector('.t').innerHTML = `${price}`;
    
    document.querySelector('.count1').innerHTML = `${count1}`;
    document.querySelector('.c1').innerHTML = `${count1}`;

    if(count1 === 0){
        document.querySelector('.display1').style.display = 'none';
    }
    
});





let count2 = 0;
const plusButton2 = document.querySelector('.plus2');
const minessButton2 = document.querySelector('.miness2');

plusButton2.addEventListener('click', function(){
    price += 15;
    document.querySelectorAll('.price, .price3, .price4').forEach(element => {
        element.innerHTML = `${price} MAD`;
    });
    document.querySelector('.t').innerHTML = `${price}`;

    count2 ++;
    document.querySelector('.count2').innerHTML = `${count2}`;
    document.querySelector('.c2').innerHTML = `${count2}`;

    if(count2 !== 0){
        document.querySelector('.display2').style.display = 'block';
    }
    
});


minessButton2.addEventListener('click', function(){
    if(count2>0){
        price -= 15;
        count2 --;
    }
    
    document.querySelectorAll('.price, .price3, .price4').forEach(element => {
        element.innerHTML = `${price} MAD`;
    });
    document.querySelector('.t').innerHTML = `${price}`;
    
    document.querySelector('.count2').innerHTML = `${count2}`;
    document.querySelector('.c2').innerHTML = `${count2}`;

    if(count2 === 0){
        document.querySelector('.display2').style.display = 'none';
    }
    
});
