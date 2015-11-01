#!/bin/bash

cd ../src/
jsdoc --readme ../README.md engine2d.js
sudo rm -R ../docs/
mkdir ../docs/
mv out/ ../docs/main/
echo "Main documentation generated."