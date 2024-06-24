
const videoElement = document.getElementById('videoElement');
const canvasElement = document.getElementById('canvasElement');
const captureButton = document.querySelector('button');
let inner_blue = document.getElementById('inner_blue');
async function getCameraStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
  } catch (error) {
    console.error('حدث خطأ في الوصول إلى الكاميرا: ', error);
  }
}

function captureSnapshot() {
  const context = canvasElement.getContext('2d');
  context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

  // عرض الصورة الملتقطة في صفحة HTML
  const imageElement = new Image();
  imageElement.src = canvasElement.toDataURL('image/png');
  document.body.appendChild(imageElement);
}


window.addEventListener('load', getCameraStream);



window.addEventListener('load',function(){

  inner_blue.style.background='red';
})
