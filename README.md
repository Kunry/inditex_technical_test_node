# Back end technical test by Gabriel Cebrián

## Quick Start

To use this project make sure you have [Docker](https://www.docker.com/get-started) installed then run the following command on your terminal:

```bash
docker-compose up
```

And go to [http://localhost:8080/api/health](http://localhost:8080/api/health)

An example of a call would be:[example](http://localhost:8080/api/price?productId=35455&brandId=1&date=2020-06-16T21:00:00.000Z)

## Test

To execute the tests of our application it is necessary to connect to a Postgres db. For this it is necessary to have a Postgres db up with the following configuration:

```
  password: 'root',
  user: 'root',
  host: 'localhost',
  database: 'root',
  port: 5432
```

If we want to modify this configuration we can create an `.env` file with the parameters:

```
  DATABASE_HOST
  DATABASE_NAME
  DATABASE_USER
  DATABASE_PASSWORD
  DATABASE_PORT
```

If we do not have any server we can generate one with the following command:

```
  docker run --name local-postgres -p 5432:5432 -e POSTGRES_PASSWORD=root -e POSTGRES_USER=root -e POSTGRES_DB=root  -d postgres
```

And to load the necessary information:

```
  docker exec -i local-postgres psql -U root -d root < priceListTest.sql
```

Finally, we can execute the command

```
  yarn install
  yarn run test:coverage
```

to run the tests

# pgAdmin

If we want to access the PGADMIN panel, we can access from the path: 

[http://localhost:16543/](http://localhost:16543/)

Enter the `PGADMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD` credentials from the `docker-compose.yml` file to access it. In this case they are:

```
  PGADMIN_DEFAULT_EMAIL: "gabriel@inditex.com"
  PGADMIN_DEFAULT_PASSWORD: "inditex123!"
```

Once inside click `Add New Server`.

For `General -> Name` pick a name.  Can be whatever you want.

On the `Connection` tab values must match the `docker-compose.yml` file:

* Host: `postgres`
* Username: `root`
* Password: `root`

Now you can navigate from the left bar:

`Servers -> whatever-you-want -> Databases -> root -> Schemas -> public -> Tables -> employees`

Right click `prices` an Query Tool:

```sql
SELECT * FROM prices;
```

# No docker

If we do not want to run the project with Docker we can run the command `yarn run dev` to run it with the development variables, `yarn run dev:prod` to run it with the production variables, to run it with nodemon.

And if we want to run it in production mode we can execute the `yarn run serve` code.

I remember that it is necessary to have a Postgres database for its execution.

## Author

👤 **Gabriel Cebrián**

- [Github](https://github.com/Kunry)
- [LinkedIn](https://es.linkedin.com/in/gabrielceb)

## License

[GNU General Public License](https://opensource.org/licenses/gpl-license)
