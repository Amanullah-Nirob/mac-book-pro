

function setText(element,elementText){
var singlelement=document.getElementById(element)
singlelement.innerText=elementText
calculate()
}


// extra memory price discuse start================================================================================================================
document.getElementById(`extra-memory`).addEventListener(`click`,()=>{
    setText(`extra-memory-cost`,180)
 })
document.getElementById(`not-extra-memory`).addEventListener(`click`,()=>{
    setText(`extra-memory-cost`,0)
})

// extra memory price discuse end ================================================================================================================

// extra storage cost start =======================================================================================================================
document.getElementById(`Storage256gbButton`).addEventListener(`click`,()=>{
    setText(`extra-storage-cost`,0)
})
document.getElementById(`Storage500gbButton`).addEventListener(`click`,()=>{
    setText(`extra-storage-cost`,100)
})
document.getElementById(`Storage1tbButton`).addEventListener(`click`,()=>{
    setText(`extra-storage-cost`,180)
    
})
// extra storage cost end =======================================================================================================================

// delivery Charge area start====================================================================================================================
document.getElementById(`not-delivery-charge-button`).addEventListener(`click`,()=>{
    setText(`delivary-charge-price`,0)
})
document.getElementById(`delivery-charge-button`).addEventListener(`click`,()=>{
    setText(`delivary-charge-price`,20)
    
})
// delivery Charge area end====================================================================================================================



// main total area start=======================================================================================================================
function calculate(){
var bestprice=parseInt(document.getElementById(`best-price`).innerText)
var memoryprice=parseInt(document.getElementById(`extra-memory-cost`).innerText)
var storageprice=parseInt(document.getElementById(`extra-storage-cost`).innerText)
var deliveryprice=parseInt(document.getElementById(`delivary-charge-price`).innerText)

var allprice=bestprice+memoryprice+storageprice+deliveryprice;
document.getElementById(`total-price`).innerText=allprice;
document.getElementById(`anather-TOTAL`).innerText=allprice;
}
// main total area end=======================================================================================================================



// apply button area start======================================================================================================================
document.getElementById(`apply-btn`).addEventListener(`click`,()=>{
var promoCodeInput=document.getElementById(`promo-code-Input`)
var promoCodeInputValue=promoCodeInput.value

var anatherTotal=document.getElementById(`anather-TOTAL`)
var anatherTotalText=anatherTotal.innerText
anatherTotalText=parseInt(anatherTotalText)

var maintotaltext=document.getElementById(`total-price`).innerText;
maintotaltext=parseInt(maintotaltext)
var promoCode='stevekaku'

if(promoCodeInputValue==promoCode){
    var totalAmount=maintotaltext -(maintotaltext *(20 /100))
    anatherTotal.innerText=totalAmount
}
promoCodeInput.value=``
})

// apply button area end======================================================================================================================





