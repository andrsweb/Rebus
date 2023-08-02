import confetti from "canvas-confetti"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	callConfetti()
})

const callConfetti = () => {
	const buttons = document.querySelectorAll('.reactions__item')
	localStorage.setItem('confetti', 0)

	if (!buttons.length) return

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const prev = document.querySelector('.reactions__item.active')
			const canvas = document.getElementById('my-canvas')

			canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true })

			if (button.classList.contains('active')) {
				button.classList.remove('active')
				return
			}

			if (prev) {
				prev.classList.remove('active')
			}

			button.classList.add('active')

			if (localStorage.confetti == 0) {
				canvas.confetti({
					spread: 70,
					origin: { y: 0.95 }
				})

				localStorage.setItem('confetti', 1)
			}

			window.onunload = () => {
				localStorage.clear()
			}
		})
	})
}