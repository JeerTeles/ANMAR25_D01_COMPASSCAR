# AWS NODE MAR25 CHALLENGE 01: Compass CAR API

## Description

This Node.js API, built with Express.js, aims to provide a car management system for the "Compass Car" rental company. The initial focus is the implementation of an MVP (Minimum Viable Product) to perform CRUD (Create, Read, Update, and Delete) operations on car records, including the necessary validations.

## How to Run the Project (Step-by-Step for Beginners)

Follow these steps to set up and run the Compass CAR API on your local environment:

**Prerequisites:**

* **Node.js:** Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
* **npm (or yarn):** Usually installed with Node.js. It will be used to manage project dependencies.
* **MySQL:** You will need a MySQL server running locally. If you don't have it installed, you can use tools like [MySQL Community Server](https://dev.mysql.com/downloads/mysql/) or a development environment like [XAMPP](https://www.apachefriends.org/index.html).

**Steps:**

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_PRIVATE_REPOSITORY_URL>
    cd ANMAR25_D01_COMPASSCAR
    ```
    *(Replace `<YOUR_PRIVATE_REPOSITORY_URL>` with the URL of your repository on GitHub).*

2.  **Install dependencies:**
    Inside the project folder (`ANMAR25_D01_COMPASSCAR`), run the following command to install the necessary libraries listed in the guidelines:
    ```bash
    npm install
    # or
    yarn install
    ```
    This command will download and install the `express`, `cors`, `dotenv`, `sequelize`, and `mysql2` libraries.

3.  **Configure the database:**
    a.  **Create the database:** Open your MySQL client (such as MySQL Workbench, DBeaver, or command line) and execute the following command to create the database:
        ```sql
        CREATE DATABASE compasscar;
        ```

    b.  **Create the tables:** The `cars` and `cars_items` tables need to be created. Execute the following SQL commands:

        ```sql
        USE compasscar;

        CREATE TABLE cars (
            id INT AUTO_INCREMENT PRIMARY KEY,
            brand VARCHAR(255) NOT NULL,
            model VARCHAR(255) NOT NULL,
            plate VARCHAR(8) UNIQUE NOT NULL,
            year INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE cars_items (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            car_id INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (car_id) REFERENCES cars(id)
        );
        ```

    c.  **Configure environment variables:**
        * In the root of your project, create a file named `.env`.
        * Add your MySQL connection information to this file. Replace the values with your configuration details:

        ```dotenv
        DB_HOST=localhost
        DB_USER=your_mysql_username
        DB_PASSWORD=your_mysql_password
        DB_NAME=compasscar
        DB_DIALECT=mysql
        ```
        *(Make sure to use the correct credentials to access your MySQL database).*

4.  **Run the API:**
    In the terminal, inside the project folder, execute the following command to start the API server:
    ```bash
    npm start
    # or
    yarn start
    ```
    This command usually runs a script defined in your `package.json` file, which will start your Node.js server (likely in your main application file, such as `server.js` or `app.js`).

5.  **Test the API:**
    The API will be running (by default, on a port like `3000`). You can use tools like `curl`, Postman, or Insomnia to send HTTP requests to the endpoints defined in the project specifications (for example, `POST /api/v1/cars` to register a new car).

## Next Steps

Now you have the API running! You can start implementing the functionalities of each endpoint following the detailed specifications in the main document. Remember to write your code in English, use the specified libraries, and follow the validation and error handling guidelines. Good luck with the development!