install: 
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js 
	npm run babel-node -- src/bin/even-games.js
	
lint:
	npm run eslint ./src
	
publish:
	npm publish
	