const form = document.getElementById("myForm");

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const ageInput = document.getElementById('age');
      const nameInput = document.getElementById('name');

      const age = parseInt(ageInput.value);
      
      const name = nameInput.value.trim();

      alert("Please enter valid details");


      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve();
          } else {
            reject();
          }
        }, 4000);
      })
      .then(() => {
        alert(`Welcome, ${name}. You can vote.`);
      })
      .catch(() => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      });
    });