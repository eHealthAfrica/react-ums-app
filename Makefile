BABEL_CMD = node_modules/.bin/babel
WEBPACK_CMD = node_modules/.bin/webpack
WEBPACK_SERVER_CMD = node_modules/.bin/webpack-dev-server
WEBPACK_BUNDLE_CMD = node_modules/.bin/webpack-bundle-size-analyzer

start:
	NODE_ENV=development PORT=9004 $(WEBPACK_SERVER_CMD) --config ./webpack/webpack.config.js --port 9004

test:
	NODE_ENV=test karma start --single

build_webpack:
	rm -rf dist && rm -rf build && NODE_ENV=production PORT=9004 $(WEBPACK_CMD) --config ./webpack/webpack.config.js --display-error-details

build_webpack_test:
	rm -rf static/dist && rm -rf dist && NODE_ENV=development PORT=9004 $(WEBPACK_CMD) --config ./webpack/webpack.config.js --display-error-details

build_server:
	rm -rf dist && NODE_ENV=production PORT=9004 $(BABEL_CMD) ./src -d ./dist -D

prod:
	NODE_ENV=production PORT=9004 node ./src/index.js

test:
	NODE_ENV=development PORT=9004 node ./src/index.js

pre_lint:
	cd ./node_modules/ && pwd

post_install:
	rsync pre-commit .git/hooks && chmod 755 .git/hooks/pre-commit

analyze_build:
	NODE_ENV=production $(WEBPACK_CMD) --json --config ./webpack/webpack.config.js  > bundle-stats.json

analyze_json:
	$(WEBPACK_BUNDLE_CMD) bundle-stats.json
