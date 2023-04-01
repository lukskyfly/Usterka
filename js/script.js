document.addEventListener('DOMContentLoaded', function () {
	const navList = document.querySelectorAll('.nav-link')
	const nav = document.querySelector('.navbar')
	const navCollapse = document.querySelector('.navbar-collapse')

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

function initMap() {
	const myLatLng = { lat: 52.19608, lng: 20.94954};
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 13,
	  center: myLatLng,
	});
  
	new google.maps.Marker({
	  position: myLatLng,
	  map,
	  title: "Adres Biura",
	});
  }
  
  window.initMap = initMap;
  
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}