# My interview application @Greenspark

This project is a small full-stack coding challenge based on some requirements and a Figma design. 
You can find the ui side of this application at [Greenspark ui](https://github.com/vasstekla/greenspark).

## Nest.js

The server has a Nest + Typescript codebase, and the data is stored in MongoDB - connected to with the help of Mongoose. 
In order to start the project locally 

1. Run your MongoDB and copy the connection string. Paste it into the database.module.ts instead of 'mongodb://127.0.0.1:27017'.
2. Run seed.ts `npx ts-node .\src\seed.ts` in order to fill your database with the 3 initial widgets.
3. Run `npm i` followed by `npm start` and you should have a server listening on port [Localhost 3001](http://localhost:3000/)
4. You can also run the controller test cases with the command `npm test` - but please note the process will not stop after running the test cases, you will have to exit manually. This is due to some async calls which is not yet fixed. 

In order to see the data on the web application, follow the setup at [Greenspark ui](https://github.com/vasstekla/greenspark).
Once the ui is up aswell you will see 3 widgets that can be customized. 

There are at the moment two endpoints for the products: update and getAll, since creating the other CRUD operations was out of scope for this project. 
Additionally for the sake of the requirements I added a Number for the mongo _ids, however this is really not something that is supposed to be done! UUID is always the way to go - this is only to follow the pdf provided. 

**Please note that this is my first ever Nest project - although I had fun playing with it, it might have some flaws that are unknown to me that could've been avoided.**

**Have fun :)**
