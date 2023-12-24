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
    npm run dev
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
- Go inside server folder then run build
``` 
    npm run build
```
- Go to the dist/src/main.js and change ``` app.use('/images', express_1.default.static(path_1.default.join(__dirname, "../public"))); ``` to ``` app.use('/images', express_1.default.static(path_1.default.join(__dirname, "../../public"))); ```
- Then run pm2 after that
```
    pm2 start ./dist/src/main.js 
```
- Go to the client dierctories and run ``` pm2 start app.config.json ```

## More functionalities added
- Ajour d'un menu QR code pour voir les liens qui ont des code Qr
- Télechargement d'une image d'un QRcode
- Recherche dans les liens créer
- Boutton partage sur plusieurs réseaux sociaux