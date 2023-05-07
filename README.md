# How to run kc_web_dev_test project locally

1.  Download repository as zip
2. Unzip/extract the downloaded repo
3. Navigate to the directory containing the repo, AKA `kc_web_dev_test-main` in the terminal
3. Run the command `yarn`
4. Start up the back-end Node server by running the command `yarn dev` 
5. Navigate to `http://localhost:3001/api/psets` and `http://localhost:3001/api/pset-database` in your web browser of choice to verify the responses for the APIs
6. In another terminal session, navigate to the directory containing the repo, AKA `kc_web_dev_test-main` and then navigate further to the `client` directory
7. Run the command `npm install` 
8. Run the command `npm start` to start up the front-end client, which should load in your default web browser at `http://localhost:3000/`
