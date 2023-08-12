document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showHiddenClues()
})

const showHiddenClues = () => {
	const buttons = document.querySelectorAll('.last__img')
	const clues   = document.querySelectorAll('.clue')
	if (!buttons.length) return

	buttons.forEach(button => {
		const clue = button.querySelector('.clue')
		button.addEventListener('click', () => {

			if (!clue) return
			// If current clue is clicked - remove 'clicked' and exit.
			const old = document.querySelector('.clue.clicked')

			if (clue.classList.contains('clicked')) {
				clue.classList.remove('clicked')
				return
			}

			// If there's some other items clicked - remove clicked...
			if (old) old.classList.remove('clicked')

			// ...and then enable the CURRENT one.
			clue.classList.add('clicked')
		})
	})

	document.addEventListener( 'click', e => {  // Close clues by tap or click anywhere
		e.stopPropagation()
		target = e.target

		if (
			! target.className ||
			target.classList.contains( 'help' )
		) return

		clues.forEach(clue => {
			clue.classList.remove( 'clicked' )
		})
	} )
}