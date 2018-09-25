const fs = require('fs');
const inputValidation = require('./input-validation');
const calculate = require('./calculator');

const outputFile = 'output.json';
const args = process.argv.slice(2)[0];
const inputFile = args ? args : 'input.json';


fs.readFile(inputFile, 'utf8', function readFileCallback(err, data){
    if (err) {
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
    	fs.writeFile(outputFile, json, 'utf8', function writeFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(`Your calculations were saved to ${outputFile} file`);
            }
        }); 
    }
});