#!/bin/bash

time=$(date "+%Y-%m-%d %H:%M:%S")

npm run docs:v2:prod
npm run prod

cd dist
git init
git add -A
git commit -m "update BalmJS official site ${time}"
git push -f git@github.com:balmjs/balm.js.org.git master:gh-pages
