document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	toogleDropdown()
})

const toogleDropdown = () => {
	const dropdowns = document.querySelectorAll('.dropdown')

	if (!dropdowns.length) return

	dropdowns.forEach(dropdown => {
		if (dropdown.classList.contains('opened'))
			reCalculateDropdownHeight(dropdown) //Call recalculate function
	})

	dropdowns.forEach(dropdown => {
		dropdown.addEventListener('click', () => {
			const dropdownOpen = dropdown.querySelector('.dropdown-open')

			if (!dropdown.classList.contains('opened')) {
				dropdown.classList.add('opened')
				reCalculateDropdownHeight(dropdown) //Call recalculate function
			}
			else {
				dropdown.classList.remove('opened')
				dropdownOpen.style.height = '0' //Set dropdown height
			}
		})
	})
}

window.addEventListener('resize', () => {     //If resize -- recalculate dropdown height
	const dropdowns = document.querySelectorAll('.dropdown.opened')

	if (!dropdowns.length) return

	dropdowns.forEach(dropdown => reCalculateDropdownHeight(dropdown))
})

const reCalculateDropdownHeight = dropdown => {
	const dropdownOpen = dropdown.querySelector('.dropdown-open'),
		dropdownInner = dropdown.querySelector('.dropdown-inner')

	if (!dropdownOpen || !dropdownInner) return

	dropdownOpen.style.height = `${dropdownInner.getBoundingClientRect().height}px`
}
