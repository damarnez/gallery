TECHNICAL TEST
=====================

## Specs

- The gallery should load a small subset of images and load more via pagination or infinite scroll technique.
- The gallery should be able to show owner's username that point to the original image post and the image caption on mouse hover event as the example shows.
- On image click a responsive lightbox should be opened with all image information that you can include.
- The backend must be responsible to (a) serve the SPA (HTML files and CSS+JS bundles that conforms the app) and (b) act as an API to retrieve the images.
- The backend API must retrieve the images through the Flickr API.
- The app must be a SPA. The first request to the webserver should return the SPA code. Subsequent interactions shouldn’t make requests to the webserver, only to the API to request data.
- Backend must be implemented with NodeJS. Additionally, you can also use the ExpressJS or, any other, framework you consider.
- Commit your progress so we can see how you work. You can use github or bitbucket. If use a private repositories give us access to see your work. If you make a public repository, please, do not make any reference indicating it is a test for letgo.

## Start

### Requirements

 - npm version 6.4.0
 - nodejs verion 10.6.0

### Installation 

 ` npm i
 `
### Configuration file

Create the file configuration in the project path .env 

` 
 PORT=3000
 FLICKR_TOKEN=11111111111111
 USER_ID=66956608@N06
`


### Test

` npm test:web
` 

### Devmode FRONT END 

` start:web
` 

### Build FRONT END 

` build:web
` 

### Launch project
 
 - * This step require intallation and build the front end.
 
` npm start
` 

## Directory project



### Server Code 
The path ` /app`, including the tests.


### React Code
The path ` /src`, including the tests. 
