const qrinput = document.getElementById("qr-input");
const qrimg = document.getElementById("qr-image");
const qrbutton = document.getElementById("qr-button");

console.log(qrinput, qrbutton, qrimg);

qrbutton.addEventListener("click", () => {
  const inputValue = qrinput.value;
  console.log(inputValue);

  if (!inputValue) {
    alert("Please enter a valid URL");
    return;
  }
  else{
    qrimg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$(inputVale)';
qrimg.alt='QR Code for ${inputValue}';
  }
});
