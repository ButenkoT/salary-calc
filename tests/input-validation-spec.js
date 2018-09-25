const test = require('tape');
const validation = require('../src/input-validation');
 
test('Shift length validator returns false if shift is less then 1 hour', function (t) {
    const from = "2017-10-23T08:00:00+11:00";
    const to = "2017-10-23T08:30:00+11:00"
 
 	t.plan(1);
    t.equal(validation.isValid(from, to), false);
});

test('Shift length validator returns true if shift is 1 hour', function (t) {
    const from = "2017-10-23T08:00:00+11:00";
    const to = "2017-10-23T09:00:00+11:00"
 
 	t.plan(1);
    t.equal(validation.isValid(from, to), true);
});

test('Shift length validator returns true if shift is more then 1 hour', function (t) {
    const from = "2017-10-23T08:00:00+11:00";
    const to = "2017-10-23T09:30:00+11:00"
 
 	t.plan(1);
    t.equal(validation.isValid(from, to), true);
});

test('Shift length validator returns false if shift is more then 24 hours', function (t) {
    const from = "2017-10-23T08:00:00+11:00";
    const to = "2017-10-24T09:30:00+11:00"
 
 	t.plan(1);
    t.equal(validation.isValid(from, to), false);
});

test('Shift length validator returns true if shift is 24 hours', function (t) {
    const from = "2017-10-23T08:00:00+11:00";
    const to = "2017-10-24T08:00:00+11:00"
 
 	t.plan(1);
    t.equal(validation.isValid(from, to), true);
});

test('Shift length validator returns false if shift ends before it starts', function (t) {
    const from = "2017-10-24T08:00:00+11:00";
    const to = "2017-10-23T08:00:00+11:00"
 
 	t.plan(1);
    t.equal(validation.isValid(from, to), false);
});

test('Shift length validator returns false if shift increment is not equal 15mins', function (t) {
    const from = "2017-10-24T08:00:00+11:00";
    const to = "2017-10-24T09:20:00+11:00"
 
 	t.plan(1);
    t.equal(validation.isValid(from, to), false);
});