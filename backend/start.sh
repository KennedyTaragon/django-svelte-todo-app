#!/bin/bash
python3 manage.py check && python3 manage.py makemigrations && python3 manage.py migrate && python3 manage.py runserver 127.0.0.10:8010