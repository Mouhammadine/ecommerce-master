# Ecommerce

Basic ecommerce website written with Angular and Springboot.

## Prerequisite

- [Docker](https://docs.docker.com/get-docker/)

## Run the project

```shell
# To start the front, the back, and the db
$ docker-compose up --build

# To shut down everything
$ docker-compose down
```

Starting the project may take some time as the container needs to install every modules and dependencies. Once
everything is done, you can go to [http://localhost:4200](http://localhost:4200).

Database is initialized with some products plus 2 users, first with admin rights, second with default rights:

- email: `admin@admin.com`, password: `admin`
- email: `booba@gmail.com`, password: `booba`

## API documentation

#### Product

- `GET` `/products` Get the list of products.
- `GET` `/products/{id}` Get info on one product.
- `POST` `/products/create` Create one product with payload data.
- `PUT` `/products/{id}` Update one product with payload data.
- `POST` `/products/delete` Soft delete one product with payload.

#### User

- `GET` `/users/{id}` Get info on one user.
- `POST` `/users/authenticate` Retrieve authentication token with email and password.
- `POST` `/users/create` Create one user with payload data.
- `PUT` `/users/{id}` Update one user with payload data.

#### Order

- `GET` `/orders` Get list of past orders from given user.
- `POST` `/orders/create` Create an order for current user with a list of product.

## Front

The front is accessible from `http://localhost:4200`.
A user will be able to see the product on the home page and add it to the cart.
If the user is not logged, the checkout button will not be availabe.
Click on the Icon LogIn, it will redirect you to the login page, where you can
register or connect to your account.
Once connected, you will be redirected to the home page.
If you are using the admin account. You will be able to access the admin interface
to add new products and to delete old product.

#### Route

- `/` | `/home` will redirect you to the home page
- `/login` will redirect you to the login or register page
- `/admin` will redirect you to the admin page if you are on an admin account
- `/profil` will redirect you to your profil page if you are logged

## Authors

- yorov Mouhammadine, <yorov@et.esiea.fr>
