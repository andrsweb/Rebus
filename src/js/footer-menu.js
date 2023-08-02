document.addEventListener('DOMContentLoaded', () => {
	'use strict'
	
	showMenu()
})

const showMenu = () => {
	const buttons = document.querySelector('.footer__buttons')

	if(!buttons && !menu) return

	buttons.addEventListener('click', e => {
		const target = e.target
		const prev = document.querySelector('.call-menu.clicked')

		if(target.closest('.call-menu').classList.contains('clicked')) {
			target.closest('.call-menu').classList.remove('clicked')
			return
		}

		if (prev) {
			prev.classList.remove('clicked')
		}

		target.closest('.call-menu').classList.add('clicked')
	})
}