# Имя репозитория
REPO_NAME = music-shop-web
BRANCH = deploy-pages

# Установить зависимости
install:
	@echo "Installing dependencies..."
	npm install

# Сборка проекта
build:
	@echo "Building the project..."
	npm run build

# Удалить предыдущую сборку
clean:
	@echo "Cleaning previous build..."
	rm -rf dist

# Деплой на GitHub Pages
deploy: clean build
	@echo "Deploying to GitHub Pages..."
	npx gh-pages -d dist --branch $(BRANCH)