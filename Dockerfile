FROM python:latest

WORKDIR /usr/src/app

COPY . .
CMD [ "python", "index.py" ]
