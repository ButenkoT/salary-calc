const config = require('../config');

function calculate (from, to) {
	const fromTime = new Date(from);
	const toTime = new Date(to);

	const timeLength = (toTime.getTime() - fromTime.getTime()) / config.millisecondsInHour;
	let total = 0;

	switch (true) {
		case isWeekday(fromTime, config.Sat.code, config.Sun.code) && isSameDay(fromTime, toTime) && isDayTime(fromTime) && isDayTime(toTime):
			total = timeLength * config.day.rate;
			break;
		case isWeekday(fromTime, config.Sat.code, config.Sun.code) && isSameDay(fromTime, toTime) && (isDayTime(fromTime) || isDayTime(toTime)):
			total = timeLength * config.night.rate;
			break;
		case isWeekday(fromTime, config.Sat.code, config.Sun.code) && isSameDay(fromTime, toTime) && !isDayTime(fromTime) && !isDayTime(toTime):
			total = timeLength * config.night.rate;
			break;
		case isWeekday(fromTime, config.Sat.code, config.Sun.code) && isDayOfTheWeek(toTime, config.Sat.code) && fromTime.getHours() === 23 && fromTime.getMinutes() === 0 && timeLength === 24:
			total = timeLength * config.Sat.rate;
			break;
		case isWeekday(fromTime, config.Sat.code, config.Sun.code) && isWeekday(toTime, config.Sat.code, config.Sun.code) && !isSameDay(fromTime, toTime):
			total = timeLength * config.night.rate;
			break;
		case isDayOfTheWeek(fromTime, config.Sat.code) && isSameDay(fromTime, toTime):
			total = timeLength * config.Sat.rate;
			break;
		case isDayOfTheWeek(fromTime, config.Sat.code) && fromTime.getHours() === 23 && fromTime.getMinutes() === 0 && timeLength === 24:
			total = timeLength * config.Sun.rate;
			break;
		case isDayOfTheWeek(fromTime, config.Sun.code) && isSameDay(fromTime, toTime):
			total = timeLength * config.Sun.rate;
			break;
		default:
			total;
	}

	return total.toFixed(2);
}

function isDayOfTheWeek (time, code) {
	return time.getDay() === code;
}

function isDayTime (time) {
	const hours = time.getHours();
	return hours >= config.day.from && hours < config.day.to;
}

function isWeekday (time, sat, sun) {
	return !isDayOfTheWeek(time, sat) && !isDayOfTheWeek(time, sun);
}

function isWeekdayDaytime (time, sat, sun) {
	return isWeekday(time, sat, sun) && isDayTime(time);
}

function isSameDay (from, to) {
	return to.getDate() - from.getDate() === 0;
}


exports.calculate = calculate;