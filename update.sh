
# delete current files and copy latest files from master branch

rm *.html
rm -r assets_/
git checkout master doc/html
mv doc/html/* .
rm -r doc/html/
rm -r doc/
git add -A
git status
