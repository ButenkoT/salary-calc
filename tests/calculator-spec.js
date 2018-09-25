const test = require('tape');
const config = require('../config');
const c = require('../src/calculator');
 
test(`Calculator returns ${ config.day.rate * 1 } for same weekday daytime shift for 1 hour`, function (t) {
    const from = "2017-10-23T08:00:00+11:00";
    const to = "2017-10-23T09:00:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.day.rate * 1).toFixed(2));
});

test(`Calculator returns ${ config.night.rate * 3 } for same weekday day/night time shift for 3 hours`, function (t) {
    const from = "2017-10-23T18:00:00+11:00";
    const to = "2017-10-23T21:00:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.night.rate * 3).toFixed(2));
});

test(`Calculator returns ${ config.night.rate * 24 } for different start and end weekday time shift for 24 hours`, function (t) {
    const from = "2017-10-23T18:00:00+11:00";
    const to = "2017-10-24T18:00:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.night.rate * 24).toFixed(2));
});

test(`Calculator returns ${ config.night.rate * 2 } for same weekday night time shift for 2 hours`, function (t) {
    const from = "2017-10-23T01:00:00+11:00";
    const to = "2017-10-23T03:00:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.night.rate * 2).toFixed(2));
});

test(`Calculator returns ${ (config.Sat.rate * 4.5).toFixed(2) } for Saturday day time shift for 4.5 hours`, function (t) {
    const from = "2018-09-22T08:00:00+11:00";
    const to = "2018-09-22T12:30:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.Sat.rate * 4.5).toFixed(2));
});

test(`Calculator returns ${ (config.Sat.rate * 5).toFixed(2) } for Saturday day/night time shift for 5 hours`, function (t) {
    const from = "2018-09-22T18:00:00+11:00";
    const to = "2018-09-22T23:00:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.Sat.rate * 5).toFixed(2));
});

test(`Calculator returns ${ (config.Sat.rate * 1.75).toFixed(2) } for Saturday night time shift for 1.45 hours`, function (t) {
    const from = "2018-09-22T20:00:00+11:00";
    const to = "2018-09-22T21:45:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.Sat.rate * 1.75).toFixed(2));
});

test(`Calculator returns ${ (config.Sat.rate * 24).toFixed(2) } for Saturday full 24 hours shift`, function (t) {
    const from = "2018-09-22T00:00:00+11:00";
    const to = "2018-09-23T00:00:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.Sat.rate * 24).toFixed(2));
});

test(`Calculator returns ${ (config.Sun.rate * 12).toFixed(2) } for Sunday day time shift for 12 hours`, function (t) {
    const from = "2018-09-23T07:00:00+11:00";
    const to = "2018-09-23T19:00:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.Sun.rate * 12).toFixed(2));
});

test(`Calculator returns ${ (config.Sun.rate * 10).toFixed(2) } for Sunday day/night time shift for 10 hours`, function (t) {
    const from = "2018-09-23T12:00:00+11:00";
    const to = "2018-09-23T22:00:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.Sun.rate * 10).toFixed(2));
});

test(`Calculator returns ${ (config.Sun.rate * 2).toFixed(2) } for Sunday night time shift for 2 hours`, function (t) {
    const from = "2018-09-23T21:00:00+11:00";
    const to = "2018-09-23T23:00:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.Sun.rate * 2).toFixed(2));
});

test(`Calculator returns ${ (config.Sun.rate * 24).toFixed(2) } for Sunday full 24 hours shift`, function (t) {
    const from = "2018-09-23T00:00:00+11:00";
    const to = "2018-09-24T00:00:00+11:00"
 
 	t.plan(1);
    t.equal(c.calculate(from, to), (config.Sun.rate * 24).toFixed(2));
});

/* 
	TODO: tests for cases, depending on business requirements: 
	1.From Friday to Saturday
	2.From Saturday to Sunday
	3.From Sunday to Minday
*/
