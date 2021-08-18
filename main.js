const input = document.querySelector('#switch input');
const theme = document.querySelector('#theme-switcher h2');

input.addEventListener('change', e => {
	if (e.target.checked) {
		document.body.setAttribute('data-theme', 'dark');
		theme.textContent = 'Dark Mode';
	} else {
		document.body.setAttribute('data-theme', 'light');
		theme.textContent = 'Light Mode';
	}
});
