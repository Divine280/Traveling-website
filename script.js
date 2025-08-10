function openLogin() { alert('Login popup placeholder'); }
function switchTab(tab) {
  document.getElementById('bus-form').style.display = tab === 'bus' ? 'block' : 'none';
  document.getElementById('hotel-form').style.display = tab === 'hotel' ? 'block' : 'none';
}
