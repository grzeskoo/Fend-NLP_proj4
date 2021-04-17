# Natural Language Processing
### Udacity FEND Project 4

This project analyzes text and determines the sentiment (positive, negative, etc).

## HOW TO

### 1.Based on MeaningCloud API Key
 
replace in `.env` value: API_KEY ='here place your key'

### 2. Run
 
npm install
npm run build-prod
npm start
 
Open http://localhost:8000/ in browser to view.

## Run tests

Jest testing library
 
npm i -D
npm test
 
 
 PASS  __test__/sentimental.test.js (14.463 s)
 PASS  __test__/network.test.js (15.227 s)
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
All files       |      25 |     12.5 |      50 |      25 | 
 network.js     |       0 |        0 |       0 |       0 | 2
 sentimental.js |   28.57 |    14.29 |     100 |   28.57 | 6-14
----------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        30.984 s
Ran all test suites.

## Run Dev w/ Automatic Refresh

npm i -D
npm run build-dev

http://localhost:8001/ 