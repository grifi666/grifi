function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => tab.classList.remove('active'));
  panels.forEach(panel => panel.classList.remove('active-panel'));

  document.querySelector(.tab[onclick*="${tabId}"]).classList.add('active');
  document.getElementById(tabId).classList.add('active-panel');
}

function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const preview = document.getElementById('doc-preview');
      preview.innerHTML = <img src="${e.target.result}" alt="Документ" />;
    };
    reader.readAsDataURL(file);
  }
}