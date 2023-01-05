## Prerequisite:

- node

## Running the backend

To download the necessary dependencies before running the application run the command:

- `npm install`

To start the backend run the following scripts in order:

- `npm run build`
- `npm start`

If you want to start the server that will restart with every save for development run the command:

- `npm run server`

## Database setup and configs

First required step is to have locally running mongodb instance. If you don't want to install locally the db there is a docker file in the backend directory that will run a mongodb instance, all that is needed being just the command `docker compose up -d`.

The database connection is placed inside `/config/db.ts` file. For the successfull connection to be held a .env file inside backend directory is going to be needed that contains the following parameters:

- DB_USERNAME
- DB_PASSWORD
- DB_HOST
- DB_PORT

## Miscelenious for now

Backend exposes for now 4 endpoints that can be accesed from frontend for testing:

- `/projects`-> POST
- `/projects` -> GET
- `/projects/projectId/bugs`-> POST
- `/projects/projectId/bugs` -> GET

Structure of JSON Object to be posted on bugs is:

```javascript
{
name: String,
description: String,
severity: String,
priority: Number,
caussingCommit: String,
resolvingCommit: String,
}
```

Structure of JSON Objected to be posted on Projects endpoints is:

```javascript
{
  name: String,
  repositoryUrl: String,
  users: [
    {
      UserID
    },
  ],
}
```

The bugs are assigned to a project when they are created, that's why the mapping `/projID/bugs` is correct.

The [One way embed](https://learnmongodbthehardway.com/schema/schemabasics/#:~:text=as%20a%20strategy.-,One%20Way%20Embedding,-The%20One%20Way) was chosen for the collection Project in regards to the collections Bugs and Users. The same idea applies to the User in regards to Bugs collection.
