document.addEventListener('DOMContentLoaded', function () {
    const cartButtons = document.querySelectorAll('.cart-btn');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.previousElementSibling.previousElementSibling.textContent; 
            const selectedValue = this.previousElementSibling.value; 
            const [quantity, unit] = selectedValue.split(';'); 
            
            const cartItem = `${productName} - ${quantity} ${unit}`;
            const existingIndex = cart.findIndex(item => item.startsWith(productName));

            if (existingIndex > -1) {
                cart[existingIndex] = cartItem;
            } else {
                cart.push(cartItem);
            }

            localStorage.setItem('cart', JSON.stringify(cart)); 
            this.textContent = 'Added'; 
        });
    });

    document.querySelector('.cart').addEventListener('click', function () {
        window.location.href = 'cart.html'; 
    });
});

//REFRESH BUTTON

// document.getElementById('refresh-button').addEventListener('click', function() {
//     location.reload(); 
// });
//SCROLL  
 window.onscroll = function() {
            const button = document.getElementById("back-to-top");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                button.style.display = "block"; 
            } else {
                button.style.display = "none"; 
            }
        };

//BACCKTOTOP
        document.getElementById("back-to-top").addEventListener("click", function() {
            window.scrollTo({top: 0, behavior: 'smooth'}); 
        });

        document.getElementById("submit-btn").addEventListener("click", function(){
           

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            

            alert("Feedback Submitted Sucessfully!");

            
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';

            
        })