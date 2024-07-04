//create a new QRCode instance

let qrcode = new QRCode(document.querySelector(".qrcode"));

// Initial QR code generation  with a default message
qrcode.makeCode("Why did you scan me?");

//function to generate  QR code basedon user input

function generateQr() {
    if(document.querySelector("input").value === "" || document.querySelector("input").value === " " ){
        alert("Input Feild Can not be blank !");
    }
    else{
        qrcode.makeCode(document.querySelector("input").value);
    }
}
