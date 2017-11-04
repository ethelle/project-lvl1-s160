install: 
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js --source-maps
	npm run babel-node -- src/bin/even-games.js --source-maps
	npm run babel-node -- src/bin/calc-games.js --source-maps
	npm run babel-node -- src/bin/brain-gcd.js --source-maps
	npm run babel-node -- src/bin/brain-balance.js --source-maps
	npm run babel-node -- src/bin/brain-progression.js --source-maps
	npm run babel-node -- src/bin/brain-prime.js --source-maps
lint:
	npm run eslint ./src
	
publish:
	npm publish
	