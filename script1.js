document.getElementById('addPhone').addEventListener('click', function(){
     var iphoneNumberInput = document.getElementById('iphoneQuantity');
     var iphoneNumber = parseInt(iphoneNumberInput.value);
     iphoneNumberInput.value = iphoneNumber + 1
});