const fs = require('fs');
const inputValidation = require('./input-validation');
const calculate = require('./calculator');

fs.readFile('input.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    	const shiftList = JSON.parse(data);

    	shiftList.map(shift => {
            shift.isValid = inputValidation.isValid(shift.from, shift.to);

            if (shift.isValid) {        
                shift.total = calculate.calculate(shift.from, shift.to);
            } else {
                shift.total = 0;
            }
    	})

    	const json = JSON.stringify(shiftList);
    	fs.writeFile('output.json', json, 'utf8'); 
    }
});