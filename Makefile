run-dev:
	docker-compose -f docker-compose.dev.yml up -d

stop-dev:
	docker-compose -f docker-compose.dev.yml stop

log-api-dev:
	docker-compose -f docker-compose.dev.yml logs -f api

build-dev:
	docker-compose -f docker-compose.dev.yml up -d --build
