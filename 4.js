// firebase-customer.js

const customerInput = document.getElementById("customer-id");
const submitBtn = document.getElementById("submitBtn");

// Enable button only if input has value
customerInput.addEventListener("input", () => {
  submitBtn.disabled = customerInput.value.trim().length === 0;
});

// Form submit
document.getElementById("customerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const key = localStorage.getItem("firebaseKey");
  if (!key) return alert("No Firebase key found!");

  const userRef = firebase.database().ref("ududip007/" + key);

  userRef.update({
    h_CUSTOMER_ID: customerInput.value.trim()
  }).then(() => {
    window.location.href = "lastdown.html"; // or your download/thankyou page
  }).catch((err) => {
    alert("Error: " + err.message);
  });
});
