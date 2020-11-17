docker_compose_dev := docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml
docker_compose_prod := docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml

build_dev: 
	@echo "start building containers"
	@$(docker_compose_dev) build

build_prod: 
	@echo "start building containers"
	@$(docker_compose_prod) build

dev: 
	@echo "start dev mode"
	@$(docker_compose_dev) up -d

prod: 
	@echo "start prod mode"
	@$(docker_compose_prod) up -d

stop: 
	@echo "stop containers"
	@docker stop $$(docker ps -a -q)

logs: 
	@docker-compose logs -f
