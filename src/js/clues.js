document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showHiddenClues()
})

const showHiddenClues = () => {
	const buttons = document.querySelectorAll('.last__img')
	const clue = document.querySelector('.clue')

	if (!buttons.length) return

	buttons.forEach(button => {
		const clue = button.querySelector('.clue')
		button.addEventListener('click', () => {

			if (!clue) return

			if (!clue.classList.contains('clicked')) clue.classList.add('clicked')
			else clue.classList.remove('clicked')
		})
	})
}