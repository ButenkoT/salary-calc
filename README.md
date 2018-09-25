# salary-calc

### Setup
- Requires installed Node.js v9.9.0
- If you have nvm on your machine and correct node version run `nvm use` inside of the project to switch to proper node version

1. Save folder on your machine
2. Go inside the folder
3. run `npm install` to install all dependencies
4. to start project you can either run `npm run start` and it will run it with default `input.json` input or you can point to any other input file by providing path ro file like so `node src/index.js name-and-path-to-your-file.json`


### Tests
To run tests run `npm run test`

### TODO:

There are few things that were not finished in project due to lack of business requirements and rules:
1. Add rules and proper calculation of shift from Friday to Saturday
2. Add rules and proper calculation of shift from Saturday to Sunday
3. Add rules and proper calculation of shift from Sunday to Monday
4. Additional library might be needed for days with day saving time - requires more testing


### Assumptions 
1. Assume 1 hour has 60minutes
2. Assume 1 day has 24 hours
3. Assume 1 minute has 60 seconds