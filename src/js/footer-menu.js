document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showMenu()
})

const showMenu = () => {
	const buttons = document.querySelector('.footer__buttons')
	const menus   = document.querySelectorAll('.call-menu')

	if (!buttons && !menu) return

	buttons.addEventListener('click', e => {
		const target = e.target
		const prev = document.querySelector('.call-menu.clicked')

		if (target.closest('.call-menu').classList.contains('clicked')) {
			target.closest('.call-menu').classList.remove('clicked')
			return
		}

		if (prev) {
			prev.classList.remove('clicked')
		}

		target.closest('.call-menu').classList.add('clicked')
	})

	document.addEventListener( 'click', e => {  // Close footer menu by tap or click anywhere
		e.stopPropagation()
		target = e.target

		if (
			! target.className ||
			target.classList.contains('footer__lang_text') ||
			target.classList.contains('call-menu') ||
			target.classList.contains('clicked') ||
			target.classList.contains('footer__flag') ||
			target.classList.contains('footer__docs_text')
		) return

		menus.forEach(menu => {
			menu.classList.remove( 'clicked' )
		})
	} )
}