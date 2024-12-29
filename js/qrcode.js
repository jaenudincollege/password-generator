function generateQRCode(container, text) {
  container.innerHTML = '';

  new QRCode(container, {
    text,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
}

export default generateQRCode;
