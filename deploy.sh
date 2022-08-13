#!/usr/bin/env sh
set -e
npm run build
cd dist/  
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/gy1001/gy1001.github.io.git main
cd - 
