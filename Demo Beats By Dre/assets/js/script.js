
 

const searchButton = document.getElementById('search-button');
const searchBar = document.querySelector('.search-bar');
searchButton.addEventListener('click', function() {
  searchBar.classList.toggle('d-none');
});

const animationContainers = document.querySelectorAll('.animation-container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-container');
    } else {
      entry.target.classList.remove('animation-container');
    }
  });
});

animationContainers.forEach(animationContainer => {
  observer.observe(animationContainer);
});

window.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector(".card-animated");
  const handleVisivilitychange = () => {
    if(isVisible(card)){
      card.classList.add( "visible" );
    }
  };
  handleVisibilityChange();
  window.addEventListener("resize" , handleVisivilitychange);
    function isVisible(element){
      const { top, bottom} = element.getBoundingClientRect() ;
      return top  >=0 && bottom <= window.innerHeight;
    }
});
    




document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.querySelector('[name="EMAIL"]');
  const formElements = document.querySelector('.form-elements');

  emailInput.addEventListener('input', () => {
    console.log('Input event triggered');
    
    if (emailInput.value.length > 0) {
      console.log('Email input has a value');
      formElements.classList.remove('form-elements'); // Assuming 'hidden' is the class for hiding elements
    } else {
      console.log('Email input is empty');
      formElements.classList.add('form-elements');
    }
  });
});

const emailInput = document.getElementById('emailInput');
const signUpButton = document.getElementById('signUpButton');
const checkbox = document.querySelector('.exampleCheck1');
let isFormValid = true;

document.getElementById('exampleCheck1').addEventListener("change", function() {
  console.log('Checkbox changed');
  if (!this.checked) {
    document.getElementById('signUpButton').disabled = true;
    alert("Please check the box to agree on our terms and conditions");
  } else {
    document.getElementById('signUpButton').disabled = false;
  }
});

document.getElementById('signupForm').addEventListener("submit", function(event) {
  if (!document.getElementById('exampleCheck1').checked) {
    event.preventDefault();
    document.getElementById('signUpButton').disabled = true;
    alert("Please check the box to agree on our terms and conditions");
  } else {
    document.getElementById('signUpButton').disabled = false;
    // send form data to server
    // ...
    // add alert message when form is successfully submitted
    alert("You have successfully signed up!");
  }
});

$("#signupForm").submit((e)=>{
  e.preventDefault()
  if ($("#exampleCheck1").is(":checked")) {
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyo_flBlT5nW3aqUXrnOLEl95V6qv3TJTvTpBUKqp2WzO1QcdYASrbzk8iDP636lYDNVg/exec",
        data:$("#signupForm").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")
        }
    })
  } else {
    alert("Please check the box to agree on our terms and conditions.");
  }
});

// Display the alert message only once when the page loads and the checkbox is not checked








