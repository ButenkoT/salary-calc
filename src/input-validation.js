const config = require('../config');

function isValid (from, to) {
	const fromTime = new Date(from);
	const toTime = new Date(to);

	const isValid = [];
	const timeLength = (toTime.getTime() - fromTime.getTime()) / config.millisecondsInHour;

	isValid.push(minTimeCheck(timeLength));
	isValid.push(maxTimeCheck(timeLength));
	isValid.push(endAfterStart(timeLength));
	isValid.push(properIncrement(timeLength));

	return isValid.some(x => x === false) ? false : true;
}

function minTimeCheck (time) {
	return time >= config.minTime;
}

function maxTimeCheck (time) {
	return time <= config.maxTime;
}

function endAfterStart (time) {
	return time > 0;
}

function properIncrement (time) {
	return time % config.bookingIncrement === 0;
}

exports.isValid = isValid;