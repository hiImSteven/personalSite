let ageEl = document.getElementById("age");

setInterval(() => {
	let time = dayjs().diff(dayjs('2000-01-28'), 'year', true);
	ageEl.innerText = time.toString().substring(0, 12);
}, 10);
