'use strict';

let habits = [];
const habit_KEY = 'habit_KEY';

/**
 * utils
 */
function loadData() {
	const habitsString = localStorage.getItem(habit_KEY);
	const habitArray = JSON.parse(habitsString);

	if (Array.isArray(habitArray)) {
		habits = habitArray;
	}
}

function saveData() {
	localStorage.setItem(habit_KEY, JSON.stringify(habits));
}

(() => {
	loadData();
})()