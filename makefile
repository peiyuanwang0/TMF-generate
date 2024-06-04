local-install:
	npm i --save swagger-typescript-api@5.0.0
	brew install nushell
local-swagger: 
	nu swagger/convert.nu swagger
docker-build:
	docker rmi tmf/generate:v0.1 -f
	docker build -t tmf/generate:v0.1 --no-cache . 
docker-gen:
	docker run --rm -v ${PWD}:/gen tmf/generate:v0.1 make local-swagger
all: docker-build docker-gen
.PHONY: install swagger docker-gen docker-build all
