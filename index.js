const buttonCekNomor = document.querySelector(".cek-nomor .buttonCek");

cekNomorHP = (string) => {
  const regEx = new RegExp(/^\d{10,12}$/);
  return regEx.test(string);
};
// -------------------- EVENT LISTENER ---------------------
buttonCekNomor.addEventListener("click", () => {
  const cekNomor = document.getElementById("nomor").value;
  if (cekNomorHP(cekNomor)) {
    alert(`${cekNomor} Successfully Added!`);
  } else {
    alert("Please, masukkan nomor 10-12 digit!");
  }
});
