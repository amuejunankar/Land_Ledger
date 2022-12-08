function myFunction() {  
  // alert("Welcome to the javaTpoint.com"); 
    window.location.href = "file:///C:/Users/junan/Desktop/Land_Ledger/registration.html"; 
  }  

let form = document.querySelecter('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  return false;
});