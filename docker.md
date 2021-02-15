WHEN to use this command - or WHY 	
What it does	
Gotchas	
`docker ps` = status of running containers
`docker paste_id stop` = stop a container
`docker compose up` = build / run containers
`docker compose up -d` = build / run containers in background
`docker compose - - build` = rebuild after updating code
`docker compose down` = stop all containers in background
`docker-compose exec notes-app npm run seed` = Run seed script
ex: `docker run -d -p 80:80 docker/getting-started`



Docker compose- 
1. Makes networking containers straight forward - host names are resolved by docker 
2. Easier to build and run multiple containers at once or together 
3. Automates some of the docker cli commands
Teach containers from day 3 - as soon as object oriented or node packages come into play 

Docker cli 
docker compose up
docker ps  - status 
docker paste_id stop

docker compose up -d
Rebuild after updating  code - docker compose  - - build 
docker compose down 


Restart containers 
Node 
process.exit(). 0  on purpose    1,2,3 something wrong
