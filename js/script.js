document.addEventListener('DOMContentLoaded', function() {

	// THEME TOGGLE

	const themeBtn = document.getElementById('theme-toggle');
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
	const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)');
	const currentTheme = localStorage.getItem('theme');

	if (currentTheme === null && prefersLightScheme.matches) {
		localStorage.setItem('theme', 'light'); 
	} else if (currentTheme === null && prefersDarkScheme.matches) {
		localStorage.setItem('theme', 'dark');
	} else if (currentTheme == 'light') {
		document.documentElement.classList.toggle('theme-light');
	} else if (currentTheme == 'dark') {
		document.documentElement.classList.toggle('theme-dark');
	}

	function themeSwitch() {
		if (currentTheme == 'light') {
			document.documentElement.classList.toggle('theme-light');
			document.documentElement.classList.toggle('theme-dark'); 
			localStorage.setItem('theme', 'dark');
		} else if (currentTheme == 'dark') {
			document.documentElement.classList.toggle('theme-dark');
			document.documentElement.classList.toggle('theme-light');
			localStorage.setItem('theme','light'); 
		}
	}
	
	themeBtn.addEventListener("click", themeSwitch);

	// CAROUSEL IMAGE SLIDER
  	// https://ganlanyuan.github.io/tiny-slider/
	
  	let slider = tns({
  	  container: '.carousel',
  	  mode: 'gallery',
  	  items: 1,
  	  slideBy: 1,
  	  autoplay: false,
  	  center: true,
  	  controls: true,
  	  controlsContainer: '#controls',
  	  prevButton: '#previous',
  	  nextButton: '#next',
  	  nav: true,
  	  navContainer: '#thumbnails',
  	  navPosition: 'bottom'
  	});
});