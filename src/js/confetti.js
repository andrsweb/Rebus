import confetti from "canvas-confetti"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	callConfetti()
})

const callConfetti = () => {
	const buttons = document.querySelectorAll('.reactions__item')
	let canvas = document.createElement('canvas')
	canvas.setAttribute('id', 'my-canvas')
	canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true })

	canvas.confetti({
		spread: 70,
		particleCount: 150,
		origin: { y: 1.2 }
	})

	if (!buttons.length) return

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const reactionsValue = button.querySelector('.reactions__value')
			let num = button.querySelector('.reactions__value').textContent

			if (!button.classList.contains('active')) {
				button.classList.add('active')
				reactionsValue.textContent = ++num
				canvas.confetti()
				button.appendChild(canvas)
			} else {
				button.classList.remove('active')
				reactionsValue.textContent = --num
			}
		})
	})
}