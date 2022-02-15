window.addEventListener('DOMContentLoaded', () => {
	let tabsList = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsListFather = document.querySelector('.tabheader__items');

	hideTabContent();
	showTabContent();

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});

		tabsList.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].style.display = 'block';
		tabsList[i].classList.add('tabheader__item_active');
	}

	function changeTab(e) {
		let target = e.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabsList.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	}



	tabsListFather.addEventListener('click', changeTab);


});