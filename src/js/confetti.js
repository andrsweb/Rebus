import confetti from "canvas-confetti"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	callConfetti()
})

const callConfetti = () => {
	const buttons = document.querySelectorAll('.reactions__item')
	let canvas = document.createElement('canvas')
	canvas.setAttribute('id', 'my-canvas') //Create canvas with id "my-canvas"
	canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true })

	if (!buttons.length) return

	buttons.forEach(button => {
		buttons.disabled = true

		button.addEventListener('click', () => {
			const reactionsValue = button.querySelector('.reactions__value')
			let num = button.querySelector('.reactions__value').textContent

			if (!button.classList.contains('active')) {
				button.classList.add('active')
				reactionsValue.textContent = ++num
				button.appendChild(canvas)  //Insert a previously created canvas into the current button
				canvas.confetti({  //Init canvas confetti with user settings
					spread: 70,
					particleCount: 150
				})
				buttons.forEach(button => {
					button.disabled = true

					setTimeout(() => {
						button.disabled = false
					}, 3500);
				})
			} else {
				button.classList.remove('active')
				reactionsValue.textContent = --num
			}
		})
	})
}