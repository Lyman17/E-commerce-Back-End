
# E-Commerce Back End

## About

This was a challenge assignment to to build the back end for an e-commerce site. I toke a working Express.js API and configured it to use Sequelize to interact with a MySQL database.

I was given starter code for this challenge. To start, I used the schema.sql file in the db folder to create my database using MySQL shell commands, and seeded the database from the code given to me. I also used environment variables to store my MySQL username, password, and database name.

I then defined the database models based on the requirements for the four models. I also executed association methods on my Sequelize models to create the required relationships between them.

Then I filled out the the unfinished API routes to perform RESTful CRUD operations using my Sequelize models.

Finally, I created the code needed to sync the Sequelize models to the MySQL database on server start.

## How it works

Given a functional Express.js API, when you add your database name, MySQL username, and MySQL password to an environment variable file, then you will be able to connect to a database using Sequelize.

Next, you'll need to enter the schema and seed commands, and then a development database is created and is seeded with the test data.

When you enter the command to invoke the application, then your server is started and the Sequelize models are synced to the MySQL database.

When you open API GET routes in Insomnia for categories, products, or tags, then the data for each of these routes is displayed in a formatted JSON.

Also, when you test API POST, PUT, and DELETE routes in Insomnia, then you will be able to successfully create, update, and delete data in my database.

## How to use

You will first need to download [Node.js](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs) and [MySQL](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide).

Next you will need to clone my [GitHub Repository](https://github.com/Lyman17/E-commerce-Back-End).

Once you're in the file relating to my code, in your command line you will enter:

npm install

which installs the dependencies to the local node_modules folder. By default, npm install will install all modules listed as dependencies in package.json.

Next, you'll want to enter in your MySQL username and your MySQL password in the fields I have listed in index.js.

To fill in the database with the seeds, enter the command:

npm run seed

Finally, you can begin testing the API routes by invoking the following command:

npm start

and then opening [Insomnia](https://insomnia.rest/download).

## Example

Google Drive link to Walkthorugh video:
https://drive.google.com/file/d/1drh3gDkPo0TeOH5otBGv0-sZT0-sIB1S/view?usp=drive_link

 

## Credits
Code assistance & finalization assisted by Amy Gardiner - Full Stack Web Developer
