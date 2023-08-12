document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	TwoFactorAuth()
})

const TwoFactorAuth = () => {
	const authWrapper = document.getElementById("auth")
	const myTwoFactor = new TwoFactor(authWrapper, 6)

	function TwoFactor(wrapper, totalDigits) {
		this.wrapper = wrapper
		this.totalDigits = totalDigits
		this.form = null
		this.inputs = []
	}
	
	TwoFactor.prototype.validateNumericInputs = function validateNumericInputs(
		input
	) {
		if (isNaN(Number(input.value)) || input.value === "") {
			input.classList.add("invalid")
			return false
		}
		input.classList.remove("invalid")
		return input.value.length > 1 ? input.value[0] : input.value
	}
	TwoFactor.prototype.focusElement = function focusElement(elem) {
		elem.focus()
		elem.select()
	}
	TwoFactor.prototype.render = function () {
		const inputsWrapper = createInputsWrapper.call(this, this.totalDigits)
		const submitButton = createSubmitButton()
	
		this.form = createForm()
		this.form.appendChild(inputsWrapper)
		this.form.appendChild(submitButton)
		this.wrapper.appendChild(this.form)
	
		addEvents.call(this)
	
		function createForm() {
			const form = document.createElement("form")
			form.classList.add("code")
			form.autocomplete = "off"
			form.autocorrect = "false"
			form.autocapitalize = "false"
			return form
		}
	
		function createInput(idx) {
			const input = document.createElement("input")
			input.classList.add("code__digit")
			input.type = "number"
			input.maxlength = "1"
			input.ariaLabel = `Digit ${idx}`
			input.ariaRequired = "true"
			input.dataset.idx = idx
			return input
		}
	
		function createInputsWrapper(totalDigits) {
			const digitsWrapper = document.createElement("div")
			const fragment = document.createDocumentFragment()
			for (let i = 0; i < this.totalDigits; i++) {
				const input = createInput(i)
				this.inputs.push(input)
				fragment.appendChild(input)
			}
			digitsWrapper.classList.add("code__digits")
			digitsWrapper.style.setProperty("--total-digits", totalDigits)
			digitsWrapper.appendChild(fragment)
			return digitsWrapper
		}
	
		function createSubmitButton() {
			const submitButton = document.createElement("button")
			submitButton.classList.add("login__button")
			submitButton.type = "submit"
			submitButton.textContent = "Войти"
			return submitButton
		}
	
		function addEvents() {
			this.form.addEventListener("input", checkInput(this))
			this.form.addEventListener("click", focusInput(this))
			this.form.addEventListener("paste", pasteCode(this))
			this.form.addEventListener("keydown", pressKey(this))
	
			function checkInput(thisTwoFactor) {
				return function handleNumericInput(e) {
					const value = thisTwoFactor.validateNumericInputs(e.target)
					if (value !== false) {
						e.target.value = value
						focusNextInput.call(thisTwoFactor, e.target)
					} else {
						e.target.value = ""
					}
				};
			}
	
			function focusInput(thisTwoFactor) {
				return function handleClickInput(e) {
					if (e.target.tagName == "INPUT") {
						thisTwoFactor.focusElement(e.target)
					}
				};
			}
	
			function pasteCode(thisTwoFactor) {
				return function handleCopypase(e) {
					e.preventDefault(); // you can copy code in any input
					const copyCode = e.clipboardData.getData("text")
					for (let i = 0; i < thisTwoFactor.inputs.length; i++) {
						thisTwoFactor.inputs[i].value = copyCode[i]
						thisTwoFactor.inputs[i].focus()
					}
					setTimeout(() => {
						submitButton.focus()
						for (let input of thisTwoFactor.inputs) {
							if (thisTwoFactor.validateNumericInputs(input) === false) {
								thisTwoFactor.focusElement(input)
								break
							}
						}
					}, 0)
				}
			}
	
			function pressKey(thisTwoFactor) {
				return function handleEventKeys(e) {
					handleArrowKeys(e, thisTwoFactor)
					handleDelete(e, thisTwoFactor)
				};
			}
	
			function handleArrowKeys(e, thisTwoFactor) {
				if (e.key == "ArrowRight") {
					e.preventDefault()
					focusNextInput.call(thisTwoFactor, e.target)
				}
				if (e.key == "ArrowLeft") {
					e.preventDefault()
					focusPrevInput.call(thisTwoFactor, e.target)
				}
			}
	
			function handleDelete(e, thisTwoFactor) {
				if (e.key == "Backspace") {
					e.target.value = ""
					e.target.classList.add("invalid");
					focusPrevInput.call(thisTwoFactor, e.target)
				}
			}
		}
	
		function focusNextInput(currentInput) {
			if (currentInput.nextElementSibling) {
				this.focusElement(currentInput.nextElementSibling)
			}
		}
	
		function focusPrevInput(currentInput) {
			if (currentInput.previousElementSibling) {
				this.focusElement(currentInput.previousElementSibling)
			}
		}
	}

	myTwoFactor.render()
}