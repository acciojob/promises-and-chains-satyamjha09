document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload on submit

  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");

  // Convert age to a number
  const age = parseInt(ageInput.value);
  // Trim name to remove extra whitespace
  const name = nameInput.value.trim();

  // If age is invalid (NaN/0) or name is empty, show this alert
  if (!age || !name) {
    alert("Please enter valid details");
    return;
  }

  // Create a promise that resolves if age >= 18, otherwise rejects
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
