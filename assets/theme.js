/* mobile menu */
document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.getElementById('menu-toggle');
	const mainMenu = document.getElementById('main-menu');
	const iconOpen = document.getElementById('icon-open');
	const iconClose = document.getElementById('icon-close');

	if (menuToggle && mainMenu) {
		menuToggle.addEventListener('click', () => {
			// Menü listesini aç/kapat
			mainMenu.classList.toggle('hidden');

			// İkonları değiştir
			if (mainMenu.classList.contains('hidden')) {
				// Menü kapalıysa
				iconOpen.classList.replace('hidden', 'block');
				iconClose.classList.replace('block', 'hidden');
			} else {
				// Menü açıksa
				iconOpen.classList.replace('block', 'hidden');
				iconClose.classList.replace('hidden', 'block');
			}
		});
	}
});

/* back to top */
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		// Butonu göster
		backToTop.classList.remove('translate-y-20', 'opacity-0');
		backToTop.classList.add('translate-y-0', 'opacity-100');
	} else {
		// Butonu gizle
		backToTop.classList.add('translate-y-20', 'opacity-0');
		backToTop.classList.remove('translate-y-0', 'opacity-100');
	}
});

backToTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth', // Yumuşak kaydırma
	});
});
