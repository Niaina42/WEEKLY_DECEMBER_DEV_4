# Link Reducer

### Prod link: http://173.249.22.169:3035

## Installation

### Required Dependences
- Node JS
- Docker
- docker-compose cli

### Run local
- run ``` docker-compose up -d ``` for starting database
- Go to /client/src/services/http/https.js and change the BaseUrl as 
``` 
    const BaseUrl = 'http://localhost:9091' 
```
- Add a folder named "public" in the "src/"
- Go to the server directories and run 
``` 
    npm install 
    npm run migrate
    npm run generate
    npm start
``` 
- Go to the client dierctories and run ``` npm install ``` then run ``` npm start ```

### Deploy on server
- change .env on server directories, remove "localhost" and change to the @IP your server
- run ``` docker-compose up build ``` for starting the database
- Add a folder named "public" in the "src/"
- Go to the server directories and run 
``` 
    npm install 
    npm run migrate
    npm run generate
```
- Go inside src folder then run in pm2 ``` pm2 start app.js ```
- Go to the client dierctories and run ``` pm2 start app.config.json ```

## More functionalities added
- Ajout de dossier pour facilité le rangement du stockage des utilisateurs
- Supprimer des fichier
- Telecharger des fichier