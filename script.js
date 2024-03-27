const phonePrice = 1219;
const phoneCasePrice = 59;
let totalPrice, totalPhonePrice, totalPhoneCasePrice;
let subTotalAmount = 0;
// function for increasing or decreasing quantity
function productChange(isIncrease, inputQuantity, showPrice, price) {
    let quantity = document.getElementById(inputQuantity);
    let value = parseInt(quantity.value);
    // 
    if (isIncrease == true) {
        quantity.value = value + 1
    } else {
        if (quantity.value >= 1) {
            quantity.value = value - 1
        } else {
            alert(`Quantity can not be less than ${quantity.value}, please firstly increase! `)
        }
    };
    totalPrice = quantity.value * price
    document.getElementById(showPrice).innerText = totalPrice;
};

// adding phone quantity  
document.getElementById('addPhone').addEventListener('click', () => {
    productChange(true, "iphoneQuantity", "totalPhonePrice", phonePrice)

});

// removing phone quantity 
document.getElementById('removePhone').addEventListener('click', () => {
    productChange(false, 'iphoneQuantity', 'totalPhonePrice', phonePrice);

});

// close phone row whenever clicked on cross image
document.getElementById('removePhoneBlock').addEventListener('click', () => {
    document.getElementById('phoneRow').style.display = 'none';
});


// adding phone case quantity 
document.getElementById('addPhoneCase').addEventListener('click', () => {
    productChange(true, 'phoneCaseQuantity', 'phoneCasePrice', phoneCasePrice);
});

// removing phone case quantity
document.getElementById('removePhoneCase').addEventListener('click', () => {
    productChange(false, 'phoneCaseQuantity', 'phoneCasePrice', phoneCasePrice);
});

// close phone case row whenever clicked on cross image
document.getElementById('removePhoneCaseBlock').addEventListener('click', () => {
    document.getElementById('phoneCaseRow').style.display = 'none';
});



var cartUpdateBtn = document.getElementsByClassName('btn');
for (let i = 0; i < cartUpdateBtn.length; i++) {
    const element = cartUpdateBtn[i];
    element.addEventListener('click', function () {
        // declaring variables for getting number of prices
        totalPhonePrice = document.getElementById('totalPhonePrice');
        totalPhoneCasePrice = document.getElementById('phoneCasePrice');
        // converting to integer
        let totalPhonePriceAmount = parseInt(totalPhonePrice.innerText);
        let totalPhoneCasePriceAmount = parseInt(totalPhoneCasePrice.innerText);
        //creating total
        subTotalAmount = totalPhonePriceAmount + totalPhoneCasePriceAmount;
        //pushing this total amount to show
        let total = document.getElementsByClassName('total');
        for (let i = 0; i < total.length; i++) {
            const element = total[i];
            element.innerText = subTotalAmount;
        };
    });
};