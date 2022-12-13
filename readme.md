## Prerequisite:
* node

## Running the backend

To start the backend run the following scripts in order:
 * `npm run build`
 * `npm start`


## Database setup and configs
First required step is to have locally running mongodb instance. If you don't want to install locally the db there is a docker file in the backend directory that will run a mongodb instance, all that is needed being just the command `docker compose up -d`.

The database connection is placed inside `/config/db.ts` file. For the successfull connection to be held a .env file inside backend directory is going to be needed that contains the following parameters: 
* DB_USERNAME
* DB_PASSWORD
* DB_HOST
* DB_PORT