document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	toogleBurgerMenu()
})

const toogleBurgerMenu = () => {
	const burgerButton = document.querySelector('.burger__button')
	const headerMenu = document.querySelector('.header__nav')

	if(!burgerButton) return

	burgerButton.addEventListener('click', () => {

		if (!headerMenu.classList.contains('opened')) {
			headerMenu.classList.add('opened')
			burgerButton.classList.add('opened')
		} else {
			headerMenu.classList.remove('opened')
			burgerButton.classList.remove('opened')
		}
	})

	window.addEventListener('resize', () => {        //Resize function, if window width >= 768, remove all active classes on burger menu and button
		const windowWidth = window.innerWidth
		const WINDOW_WIDTH_MD = 768

		if (windowWidth >= WINDOW_WIDTH_MD && headerMenu.classList.contains('opened')) {
			headerMenu.classList.remove('opened')
			burgerButton.classList.remove('opened')
		}
	})

	document.addEventListener( 'click', e => {
		e.stopPropagation()
		target = e.target

		if (
			! target.className ||
			target.classList.contains( 'header__nav' ) ||
			target.classList.contains( 'burger__button' )
		) return

		headerMenu.classList.remove( 'opened' )
		burgerButton.classList.remove( 'opened' )
	} )
}


document.addEventListener('scroll', () => {
	const header = document.querySelector('.header')
	const hero   = document.querySelector('.hero')

	if (!header) return

	if(hero) {
		if(hero.getBoundingClientRect().bottom  <= 0  ) {
			header.classList.add('scrolled')
		}
	}

	const scrollTop = window.scrollY

	if (scrollTop == 0) {
		if (header.classList.contains('scrolled')) header.classList.remove('scrolled')
	}
})