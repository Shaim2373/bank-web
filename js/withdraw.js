document.getElementById('btn-withdrow').addEventListener('click', function(){

    const withdrowInput = document.getElementById('withdrow-input')
    const newWithdrowAmountString = withdrowInput.value;
    const newWithdrowAmount = parseFloat(newWithdrowAmountString);
    
    const withdrowTotalElement = document.getElementById('total-withdrow')
    const previousWithdrowTotalstring = withdrowTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalstring);
    const withdrowTotal = previousWithdrowTotal + newWithdrowAmount;

    withdrowTotalElement.innerText = withdrowTotal;
    
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalstring = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalstring);

    const balanceTotal = previousBalanceTotal - newWithdrowAmount;

    balanceTotalElement.innerText = balanceTotal;

    withdrowInput.value = '';
})