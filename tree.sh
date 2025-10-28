#!/bin/bash

# Generates directory tree, excluding certain directories and files, and saves output to tree.txt

tree -I 'node_modules|staticfiles|migrations|__pycache__|public|push.sh|tree.sh|tree.txt' > tree.txt
