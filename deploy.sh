cd src
nuxt generate
cd ..

git checkout master

git pull origin master --rebase

cp -R src/dist/* .

git clean -fx src

git add .

git commit -a -m "Auto Deploy"

git push origin master

git checkout dev