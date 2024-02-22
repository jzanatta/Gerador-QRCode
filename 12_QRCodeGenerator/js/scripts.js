const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

// eventos
function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value;
    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => { /*load faz a imagem carregar antes de inserir o active*/
    container.classList.add("active");})

    qrCodeBtn.innerText = "Gerado!";
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
})
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
})


//limpar url depois de gerado qrcode
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar Qr Code"
    }
})