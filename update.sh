
# delete current files and copy latest files from master branch

rm *.html
rm -r assets_/
git checkout master doc
mv doc/* .
rmdir doc
git add -A
git status
