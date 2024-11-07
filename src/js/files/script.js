// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

function initMobileTabs() {
	if (document.querySelector('[data-tabs]')) {
		const buttonPrev = document.querySelector('.prevTab');
		const buttonNext = document.querySelector('.nextTab');
		const buttonsWrapper = document.querySelector('.tabs__navigation');
		const tabsButtons = buttonsWrapper.querySelectorAll('.tabs__title');

		let activeTabIndex = 0;

		function setActiveTab(index) {
			tabsButtons.forEach((tab, i) => {
				if (i === index) return;
				else tab.classList.contains('_tab-active') && tab.classList.remove('_tab-active');
			});

			buttonPrev.classList.contains('disabled') && buttonPrev.classList.remove('disabled');

			buttonNext.classList.contains('disabled') && buttonNext.classList.remove('disabled');

			switch (index) {
				case 0:
					!buttonPrev.classList.contains('disabled') && buttonPrev.classList.add('disabled');
					break;
				case tabsButtons.length - 1:
					!buttonNext.classList.contains('disabled') && buttonNext.classList.add('disabled');
					break;
			}

			tabsButtons[index].click();
		}

		buttonPrev.addEventListener('click', () => {
			if (activeTabIndex === 0) return;

			activeTabIndex--;

			setActiveTab(activeTabIndex);
		});

		buttonNext.addEventListener('click', () => {
			if (activeTabIndex > tabsButtons.length) return;

			activeTabIndex++;

			setActiveTab(activeTabIndex);
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initMobileTabs();
});
