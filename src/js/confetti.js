import confetti from "canvas-confetti"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	callConfetti()
})

const callConfetti = () => {
	const buttons = document.querySelectorAll('.reactions__item')

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const canvas = document.getElementById('my-canvas');

			canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });

			canvas.confetti({
				spread: 70,
				origin: { y: 0.95 }
			})
		})
	})
}