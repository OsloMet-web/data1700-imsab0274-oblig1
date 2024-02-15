let billettListe = [];
const sciFiMovies = [
  "Blade Runner",
  "The Matrix",
  "Inception",
  "Star Wars: A New Hope",
  "The Terminator",
  "2001: A Space Odyssey",
  "Alien",
  "Jurassic Park",
  "The Fifth Element",
  "Interstellar",
];

// Insert the film names when page is loaded using an event listener
document.addEventListener(
  "DOMContentLoaded",
  function () {
    let filmNames = document.getElementById("filmNames");
    sciFiMovies.forEach(function (film) {
      filmNames.innerHTML += `<option value=${film}>${film}</option>`;
    });
  },
  false
);

// Function to add bilets first checks the inputs
// if all are valid adds ticket object to the global billettListe array
// Then also adds the new bilett to the ordered list "alleBilletter" as a list element
function addBillett() {
  if (checkInputs()) {
    let billett = {
      film: document.getElementById("filmNames").value,
      antall: document.getElementById("antall").value,
      fornavn: document.getElementById("fornavn").value,
      etternavn: document.getElementById("etternavn").value,
      telefonnr: document.getElementById("telefonnr").value,
      epost: document.getElementById("epost").value,
    };
    billettListe.push(billett);
    //Add the new billett to the list
    document.getElementById(
      "alleBilletter"
    ).innerHTML += `<li>${billett.film} ${billett.antall} ${billett.fornavn} ${billett.etternavn} ${billett.telefonnr} ${billett.epost}</li>`;

    //Reset the form fields after adding the film
    resetForm();
  }
}

//If any of the inputs fail this function will return false.
function checkInputs() {
  return (
    checkFilmSelectionInput() &
    checkBillettCountInput() &
    checkMailInput() &
    checkPhoneInput() &
    checkMailInput() &
    checkNameInput() &
    checkSurNameInput()
  );
}

// Checks the film selection element input
function checkFilmSelectionInput() {
  let isValid = true;
  let film = document.getElementById("filmNames").value;
  console.log(film.length);
  let filmErrMsg = document.getElementById("filmErrMsg");
  if (film.length < 1) {
    filmErrMsg.innerText = "Vennligst velg en film fra listen";
    filmErrMsg.style.visibility = "visible";
    isValid = false;
  } else {
    filmErrMsg.style.visibility = "hidden";
  }

  return isValid;
}

// Antall validation
function checkBillettCountInput() {
  let isValid = true;
  let antall = document.getElementById("antall").value;
  let antallErrMsg = document.getElementById("antallErrMsg");
  if (parseInt(antall) < 1 || isNaN(parseInt(antall))) {
    antallErrMsg.innerText = "Må skrive noe inn i antall";
    antallErrMsg.style.visibility = "visible"; // Show error message
    isValid = false;
  } else {
    antallErrMsg.style.visibility = "hidden"; // Hide error message
  }
  return isValid;
}

// Check e-Mail input
function checkMailInput() {
  let isValid = true;
  // Epost validation
  let epost = document.getElementById("epost").value;
  let epostErrMsg = document.getElementById("epostErrMsg");
  // A regular expression for validating email. (from regexr.com)
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(epost)) {
    epostErrMsg.innerText =
      "Må skrive noe inn i epost(f.eks. bruker@eksempel.no)";
    epostErrMsg.style.visibility = "visible"; // Hata mesajını göster
    isValid = false;
  } else {
    epostErrMsg.style.visibility = "hidden"; // Hata mesajını gizle
  }

  return isValid;
}

// Check Phone input
function checkPhoneInput() {
  let isValid = true;
  // Telefonnr validation
  // Telefonnr validation
  let telefonnr = document.getElementById("telefonnr").value;
  let telErrMsg = document.getElementById("telErrMsg");
  // A regular expression for validating telephone number. (from regexr.com)
  if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(telefonnr)) {
    telErrMsg.innerText = "Må skrive noe inn i telefon nummer";
    telErrMsg.style.visibility = "visible"; // Hata mesajını göster
    isValid = false;
  } else {
    telErrMsg.style.visibility = "hidden"; // Hata mesajını gizle
  }
  return isValid;
}

// Check Name input
function checkNameInput() {
  let isValid = true;
  // Fornavn validation
  let fornavn = document.getElementById("fornavn").value;
  let fornavnErrMsg = document.getElementById("fornavnErrMsg");
  if (!/^[a-zA-ZæøåÆØÅ\s]+$/.test(fornavn) || fornavn.length < 2) {
    fornavnErrMsg.innerText = "Må skrive noe inn i fornavnet";
    fornavnErrMsg.style.visibility = "visible";
    isValid = false;
  } else {
    fornavnErrMsg.style.visibility = "hidden";
  }
  return isValid;
}

// Check surname input
function checkSurNameInput() {
  let isValid = true;
  // Etternavn validation
  let etternavn = document.getElementById("etternavn").value;
  let etternavnErrMsg = document.getElementById("etternavnErrMsg");
  if (!/^[a-zA-ZæøåÆØÅ\s]+$/.test(etternavn) || etternavn.length < 2) {
    etternavnErrMsg.innerText = "Må skrive noe inn i etterrnavnet";
    etternavnErrMsg.style.visibility = "visible";
    isValid = false;
  } else {
    etternavnErrMsg.style.visibility = "hidden";
  }
  return isValid;
}
// Reset the form
function resetForm() {
  document.getElementById("billettForm").reset();
  // Hide all warning messages
  let warnings = document.querySelectorAll(".error-message");
  warnings.forEach(function (warning) {
    warning.style.visibility = "hidden";
  });
}

// Clear all bilets from the array and reset the list
function slettAlleBilletter() {
  billettListe = [];
  document.getElementById("alleBilletter").innerHTML = "";
}
