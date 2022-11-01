# Portfolio

My personal portfolio website
## Pull Docker Image
```
docker pull emile17/portfolio
```
## Run docker image
```
docker run -d --restart=always --name portfolio -p 3000:80 emile17/portfolio
```
## Build Docker Image
```
docker build -t portfolio .
```
