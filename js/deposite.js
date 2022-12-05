document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositInput = document.getElementById('deposit-input')
    const newDepositAmountString = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const depositTotalElement = document.getElementById('total-deposit')
    const previousdepositeTotalstring = depositTotalElement.innerText;
    const previousdepositeTotal = parseFloat(previousdepositeTotalstring);
    const depositTotal = previousdepositeTotal + newDepositAmount;

    depositTotalElement.innerText = depositTotal;
    
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalstring = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalstring);

    const balanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = balanceTotal;

    depositInput.value = '';
})