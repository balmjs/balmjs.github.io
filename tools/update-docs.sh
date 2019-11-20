time=$(date "+%Y-%m-%d %H:%M:%S")

npm run docs:v1:prod
npm run docs:v2:prod
npm run prod

cd dist
git init
git add -A
git commit -m "update BalmJS official site ${time}"
git push -f git@github.com:balmjs/balmjs.github.io.git master
