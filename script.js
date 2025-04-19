function switchTab(tabElement, tabId) {
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));

  tabElement.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const img = document.getElementById('id-photo');
    img.src = reader.result;
    img.style.display = 'block';
  };
  reader.readAsDataURL(event.target.files[0]);
}
