# gigachads.de

## Installation

    git clone https://github.com/gigachads-de/gigachads.de.git
    cd gigachads.de
    docker build -t gigachads:1.0.0 .


## docker-compose.yml
    networks:
      frontend:
        external: true
    
    volumes:
      gigachads-redis-data:
        name: gigachads-redis-data
        driver: local

    services:
      gigachads-app:
        container_name: gigachads-app
        image: gigachads:1.0.0
        restart: unless-stopped
        ports:
          - 3000:3000/tcp
        environment:
          - FASTIFY_HOST=0.0.0.0
          - FASTIFY_PORT=3000
          - REDIS_HOST=gigachads-redis
          - REDIS_PASSWORD=${REDIS_PASSWORD}
          - REDIS_PORT=6379
          - REDIS_IP_FAMILY=4
          - LOG_LEVEL=trace
        networks:
          - frontend

      gigachads-redis:
        container_name: gigachads-redis
        image: redis:8.0.2-bookworm
        restart: unless-stopped
        command: redis-server --save 20 1 --loglevel warning --requirepass ${REDIS_PASSWORD}
        volumes:
          - gigachads-redis-data:/data/
        networks:
          - frontend

## .env Variables

### TZ | string
    Default: none
    Europe/Berlin
### NODE_ENV | string
    Default: none
    dev | production
### FASTIFY_HOST | string
    Default: 127.0.0.1
    Examples: 127.0.0.1 | 0.0.0.0
### FASTIFY_PORT | string
    Default: 3000
    Examples: 3000 | 5000
### REDIS_HOST | string
    Default: none
    Examples: gigachads-redis | 172.16.0.50
### REDIS_PASSWORD | string
    Default: none
    Examples: supersecurepassword
### REDIS_PORT | number
    Default: 6379
    Examples: 6379
### REDIS_IP_FAMILY | number
    Default: 4
    Examples: 4 | 6
### LOG_ENABLED | boolean
    Default: true
    Examples: true | false
### LOG_LEVEL | string
    Default: info
    Examples: fatal | error | warn | info | debug | trace