function totalExpensesCalculation (){     /* function for expenses price input and their calculation */
    const foodPrice = document.getElementById('food-price').value;
    const rentPrice = document.getElementById('rent-price').value;
    const clothesPrice = document.getElementById('clothes-price').value;
    const totalExpenses = parseFloat(foodPrice) + parseFloat(rentPrice) + parseFloat(clothesPrice);

    return totalExpenses;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalExpensesTextField = document.getElementById('total-expenses');
    totalExpensesTextField.innerText = totalExpensesCalculation();

    
    // updating balance:
    const balanceTextField = document.getElementById('balance-text-field');
    const incomeField = document.getElementById('income-field').value;
    if(totalExpensesCalculation() < incomeField){
        balanceTextField.innerText = incomeField - totalExpensesCalculation();
    } 
    // handling eror for spending more money then earning:
    else {
        balanceTextField.innerText = "You spended more then you earn!"
    }
}); 
// calculating saving amount after spending | event listner:
document.getElementById('savings-btn').addEventListener('click', function(){
    const savingsInputField = document.getElementById('savings-input-field').value;
    const incomeField = document.getElementById('income-field').value;
    const savingAmount = parseFloat(savingsInputField) * parseFloat(incomeField) / 100;
    
    const totalInputField = parseFloat(incomeField);
    const totalBalance = totalInputField - totalExpensesCalculation();

    if (savingAmount < totalBalance){
        const savingAmountText = document.getElementById('saving-amount');
        savingAmountText.innerText = savingAmount;
    }
    else {
        const savingAmountText = document.getElementById('saving-amount');
        savingAmountText.innerText = "You spends more than you want to save!";
    }

    const remainigBalance = totalBalance - savingAmount;
    if (savingAmount < totalBalance) {
        const remainigBalanceText = document.getElementById('remaining-balance');
        remainigBalanceText.innerText = remainigBalance;
    }
    else{
        const remainigBalanceText = document.getElementById('remaining-balance');
        remainigBalanceText.innerText = "No Remaining Balance For Now!!!";
    }
});