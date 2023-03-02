document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navCollapse = document.querySelector('.navbar-collapse')
	const navList = document.querySelectorAll('.nav-link')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	navList.forEach(item => item.addEventListener('click', () => navCollapse.classList.remove('show')))
	window.addEventListener('scroll', addShadow)
})
const arrowUp = document.querySelector('.scrollToTop')
function trackScroll() {
	if (window.scrollY > 1000) {
		arrowUp.classList.add('hide')
	} else {
		arrowUp.classList.remove('hide')
	}
}
window.addEventListener('scroll', trackScroll)
