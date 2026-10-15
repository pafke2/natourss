# 🔌 Natours API Documentation

Base URL: `https://your-app-name.onrender.com/api/v1`

## 🔐 1. Authentication & Users

| Method   | Endpoint                      | Description                       | Access        |
| :------- | :---------------------------- | :-------------------------------- | :------------ |
| `POST`   | `/users/signup`               | Register a new account            | Public        |
| `POST`   | `/users/login`                | Authenticate & issue JWT cookie   | Public        |
| `GET`    | `/users/logout`               | Clear cookie / log out            | Authenticated |
| `POST`   | `/users/forgotPassword`       | Send password reset token         | Public        |
| `PATCH`  | `/users/resetPassword/:token` | Reset password via token          | Public        |
| `PATCH`  | `/users/updateMyPassword`     | Update user password              | Authenticated |
| `GET`    | `/users/me`                   | Get current user profile          | Authenticated |
| `PATCH`  | `/users/updateMe`             | Update profile data (name, email) | Authenticated |
| `DELETE` | `/users/deleteMe`             | Deactivate user account           | Authenticated |

## 🏔️ 2. Tours

| Method   | Endpoint                                              | Description                          | Access            |
| :------- | :---------------------------------------------------- | :----------------------------------- | :---------------- |
| `GET`    | `/tours`                                              | Get all tours (filter/sort/paginate) | Public            |
| `GET`    | `/tours/:id`                                          | Get single tour by ID                | Public            |
| `POST`   | `/tours`                                              | Create a new tour                    | Admin, Lead-Guide |
| `PATCH`  | `/tours/:id`                                          | Update an existing tour              | Admin, Lead-Guide |
| `DELETE` | `/tours/:id`                                          | Delete a tour                        | Admin, Lead-Guide |
| `GET`    | `/tours/tour-stats`                                   | Get tour aggregate statistics        | Admin, Guide      |
| `GET`    | `/tours/monthly-plan/:year`                           | Get busiest month stats for year     | Admin, Guide      |
| `GET`    | `/tours/tours-within/:dist/center/:latlng/unit/:unit` | Find tours within radius             | Public            |
| `GET`    | `/tours/distances/:latlng/unit/:unit`                 | Calculate distances to tours         | Public            |

## ⭐ 3. Reviews

| Method   | Endpoint       | Description                | Access               |
| :------- | :------------- | :------------------------- | :------------------- |
| `GET`    | `/reviews`     | Get all reviews            | Public               |
| `GET`    | `/reviews/:id` | Get review by ID           | Public               |
| `POST`   | `/reviews`     | Create a review for a tour | Authenticated (User) |
| `PATCH`  | `/reviews/:id` | Update a review            | Author, Admin        |
| `DELETE` | `/reviews/:id` | Delete a review            | Author, Admin        |

## 💳 4. Bookings & Payments

| Method   | Endpoint                             | Description                      | Access               |
| :------- | :----------------------------------- | :------------------------------- | :------------------- |
| `GET`    | `/bookings/checkout-session/:tourId` | Generate Stripe checkout session | Authenticated (User) |
| `GET`    | `/bookings`                          | Get all bookings                 | Admin, Lead-Guide    |
| `POST`   | `/bookings`                          | Create a booking manually        | Admin, Lead-Guide    |
| `GET`    | `/bookings/:id`                      | Get booking by ID                | Admin, Lead-Guide    |
| `PATCH`  | `/bookings/:id`                      | Update booking                   | Admin, Lead-Guide    |
| `DELETE` | `/bookings/:id`                      | Delete booking                   | Admin, Lead-Guide    |
