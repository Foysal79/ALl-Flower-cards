let total = 0;
function handleCLikBtn(target)
{
    const selectedItem = document.getElementById('selected-item');
   const itemName = target.parentNode.childNodes[1].innerText;
   const li = document.createElement('li');
   li.innerText = itemName; 
   selectedItem.appendChild(li);
   const priceString = target.parentNode.childNodes[5].innerText.split(' ')[1]
   total += parseFloat(priceString);
   document.getElementById('total').innerText = total;
    
    if(total >= 500)
    {
        
    const discount = document.getElementById('discount');
    const grandTotal = document.getElementById('grandTotal');
        discount.innerText = "5%";
        const discountTotalAmount = (total / 100 ) * (95);
        grandTotal.innerText = discountTotalAmount;



    }
    if(total >= 1000)
    {
        
    const discount = document.getElementById('discount');
    const grandTotal = document.getElementById('grandTotal');
        discount.innerText = "10%";
        const discountTotalAmount = (total / 100 ) * (90);
        grandTotal.innerText = discountTotalAmount;



    }

}