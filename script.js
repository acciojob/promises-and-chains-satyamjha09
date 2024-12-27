const form = document.getElementById("myForm");

    // 1) Correct event name is "submit" (NOT "sumbit").
    form.addEventListener('submit', function(event) {
      // 2) Prevent default form submission (page refresh).
      event.preventDefault();

      const ageInput = document.getElementById('age');
      const nameInput = document.getElementById('name');

      // 3) Use .value (not .value()) because .value is a property, not a function.
      //    We parse the age because it should be a number.
      const age = parseInt(ageInput.value);
      
      // 4) For name, we want the string, not a number. Using trim() to remove extra spaces.
      const name = nameInput.value.trim();

      // 5) Validate that neither field is empty. 
      //    Note: If ageInput.value is empty or not a valid number, parseInt returns NaN and (!NaN) is true in JS.
      //    So this also checks if the age is actually a number.
      if (!age || !name) {
        alert("Please fill out all fields correctly.");
        return;
      }

      // 6) Create a new Promise that resolves if age >= 18, otherwise it rejects.
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve();
          } else {
            reject();
          }
        }, 4000);
      })
      // 7) If resolved, we show success alert.
      .then(() => {
        alert(`Welcome, ${name}. You can vote.`);
      })
      // 8) If rejected, we show the failure alert.
      .catch(() => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      });
    });