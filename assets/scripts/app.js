'use strict';

let habits = [];
const HABIT_KEY = 'HABIT_KEY';

const page = {
	menu: document.querySelector('.menu__list')
};

/**
 * utils
 */
function loadData() {
	const habitsString = localStorage.getItem(HABIT_KEY);
	const habitArray = JSON.parse(habitsString);

	if (Array.isArray(habitArray)) {
		habits = habitArray;
	}
}

function saveData() {
	localStorage.setItem(HABIT_KEY, JSON.stringify(habits));
}

function rerenderMenu(activeHabit) {
	if (!activeHabit) {
		return false;
	}

	for (const habit of habits) {
		const existed = document.querySelector(`[menu-habit-id="${habit.id}"]`);

		if (!existed) {
			const element = document.createElement('button');
			element.setAttribute('menu-habit-id', habit.id);
			element.classList.add('menu__item');

			element.addEventListener('click', () => rerender(habit.id));

			element.innerHTML = `<img src="../assets/images/${habit.icon}.svg" alt="${habit.name}" />`;

			if (activeHabit.id === habit.id) {
				element.classList.add('menu__item-active');
			}

			page.menu.appendChild(element);

			continue;
		}

		if (activeHabit.id === habit.id) {
			existed.classList.add('menu__item-active');
		} else {
			existed.classList.remove('menu__item-active');
		}
	}
}

function rerender(activeHabitId) {
	const activeHabit = habits.find(habit => habit.id === activeHabitId);
	rerenderMenu(activeHabit);
}

(() => {
	loadData();
	rerender(habits[0].id);
})()