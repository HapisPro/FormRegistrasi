const form = document.getElementById("form");
const nama = document.getElementById("nama");
const nis = document.getElementById("nis");
const tglLahir = document.getElementById("tglahir");
const noHp = document.getElementById("nohp");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  Swal.fire({
    title: "Apakah kamu yakin?",
    text: "Silakan cek kembali data sebelum di input",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yakin",
    cancelButtonText: "Batal",
    confirmButtonColor: "#7be898",
    cancelButtonColor: "#ff7a75",
    customClass: {
      popup: "popup-class",
      title: "title-class",
      closeButton: "close-button-class",
      confirmButton: "confirm-button-class",
      cancelButton: "cancel-button-class",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      if (!checkInputs()) {
        event.preventDefault();
      } else {
        //Jquery
        $.ajax({
          url: "php/query.php",
          method: "POST",
          data: {
            nis: nis.value,
            nama: nama.value,
            tglLahir: tglLahir.value,
            nohp: noHp.value,
            email: email.value,
          },
        });

        // Sweet alert
        Swal.fire({
          title: "Berhasil",
          text: "Data sudah diinput",
          icon: "success",
          confirmButtonText: "Oke",
        });
      }
    }
  });
});

function checkInputs() {
  // Ngambil value dari input
  const valueNama = nama.value.trim();
  const valueNis = nis.value.trim();
  const valueNoHp = noHp.value.trim();
  const valueEmail = email.value.trim();
  let cek = true;

  if (valueNama === "") {
    setErrorFor(nama, "Nama tidak boleh kosong");
    cek = false;
  } else {
    setSuccessFor(nama);
  }

  if (valueNis === "") {
    setErrorFor(nis, "NIS tidak boleh kosong");
    cek = false;
  } else if (isNaN(valueNis)) {
    setErrorFor(nis, "NIS tidak valid");
    cek = false;
  } else {
    setSuccessFor(nis);
  }

  if (valueNoHp === "") {
    setErrorFor(noHp, "Nomor Hp tidak boleh kosong");
    cek = false;
  } else if (isNaN(valueNoHp)) {
    setErrorFor(noHp, "Nomor Hp tidak boleh berisi huruf");
    cek = false;
  } else {
    setSuccessFor(noHp);
  }

  if (valueEmail === "") {
    setErrorFor(email, "Email tidak boleh kosong");
    cek = false;
  } else if (!isEmail(valueEmail)) {
    setErrorFor(email, "Email tidak valid");
    cek = false;
  } else {
    setSuccessFor(email);
  }
  return cek;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const pesan = formControl.querySelector("small");
  // Pesan error
  pesan.innerText = message;

  // Popup error
  Swal.fire({
    title: "Error!",
    text: message,
    icon: "error",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Oke",
  });

  // Class error
  formControl.className = "inputgrup error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "inputgrup";
}

// Email check
function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
