.PHONY: help setup start stop logs ingest

help:
	@echo "Available commands:"
	@echo "  make setup    - Initial setup"
	@echo "  make start    - Start all services"
	@echo "  make stop     - Stop services"
	@echo "  make logs     - View logs"
	@echo "  make ingest   - Ingest documents"

setup:
	cp .env.example .env
	@echo "✓ Edit .env with your API keys"

start:
	docker-compose up -d
	@echo "✓ Services: http://localhost"

stop:
	docker-compose down

logs:
	docker-compose logs -f

ingest:
	cd backend && npm run ingest
