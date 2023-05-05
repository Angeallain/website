const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = form.email.value;
  const password = form.password.value;

  if (email === '' || password === '') {
    alert('Please enter your email and password.');
  } else if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
  } else {
    const xhr = new XMLHttpRequest();
    const url = '/your-server-side-code';
    const params = `email=${email}&password=${password}`;
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.success) {
            alert('Bienvenue et merci pour votre inscription!');
            // Redirect to the dashboard or home page
          } else {
            alert('ERREUR.');
          }
        } else {
          alert('Bienvenue et merci pour votre inscription!');
        }
      }
    };

    xhr.send(params);
  }
});

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  