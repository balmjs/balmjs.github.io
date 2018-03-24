npm run docs:prod
npm run prod
cd dist
git init
git add -A
git commit -m 'update official site'
git push -f git@github.com:balmjs/balmjs.github.io.git master
