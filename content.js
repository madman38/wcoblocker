// content.js - WCO Nagscreen Bypasser
setTimeout(() => {
  const closeBtn = document.getElementById('close-btn');
  if (closeBtn) {
    closeBtn.disabled = false;
    closeBtn.click();
  }
}, 100);