
document.addEventListener('scroll', () => {
	const header = document.querySelector('.header')
	const hero   = document.querySelector('.hero')

	if (!header) return

	if(hero.getBoundingClientRect().bottom  <= 0  ) {
		header.classList.add('scrolled')
	}

	const scrollTop = window.scrollY

	if (scrollTop == 0) {
		if (header.classList.contains('scrolled')) header.classList.remove('scrolled')
	}
})