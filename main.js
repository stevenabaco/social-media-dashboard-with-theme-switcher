const input = document.querySelector('#switch input');

input.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.body.setAttribute(('data-theme'), 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }
})