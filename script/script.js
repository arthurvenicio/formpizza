// btn-add
var btnadd = document.querySelectorAll(".btn-add");

for(let buttons of btnadd){
    buttons.addEventListener('click', addItem);

    function addItem(){

        var item = buttons.closest('.item');
        var inputbtn = item.querySelector('.quantidade');

        inputbtn.value++;

        var price = getItemPrice(item);
        addtoPrice(price);
    }
}

// btn-rmv
var btnrmv = document.querySelectorAll(".btn-rmv");

for(let button of btnrmv){
    button.addEventListener('click', rmvItem);

    function rmvItem(){

        var item = button.closest('.item');
        var inputbtn = item.querySelector('.quantidade');

        if(inputbtn.value > 0){
         inputbtn.value--;   

         var price = getItemPrice(item);
         addtoPrice(-price);
        }
       
        
    }
}

// btn-submit validation

var formOrder = document.forms.formOrder;

formOrder.addEventListener('submit', function(){

    var cont  = 0;
    var inputs = formOrder.querySelectorAll('input.quantidade');

    for(let input of inputs){
        if(input.value > 0){
            cont++;
        } 
    }

    if(cont == 0){
        alert("Você não pode enviar um pedido em branco!");
        event.preventDefault();
    }
});

//function

function getItemPrice(item){
    var  itemPrice = item.querySelector('.price-item');
    return Math.round(Number(itemPrice.textContent));

}

function addtoPrice(price){
    var totalElement = document.querySelector("#totalValue");
    totalElement.textContent = price + Number(totalElement.textContent);
}
