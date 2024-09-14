# Students Management Dashboard

This project is a Students Management Dashboard built with Laravel and React, using Inertia.js for seamless server-side rendering and Material-UI for the frontend components.

The project is a task assesment for [ZedPro](#)

## Table of Contents

- Installation
- Usage
- Features
- Routes
- Components
- Models
- Controllers
- License

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/students-dashboard.git
    cd students-dashboard
    ```

2. **Install dependencies:**

    ```sh
    composer install
    npm install
    ```

3. **Set up environment variables:**

    Copy the [`.env.example`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Faiyadzamirabuhassan%2Flaravel-app%2Fstudash%2F.env.example%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/aiyadzamirabuhassan/laravel-app/studash/.env.example") file to [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Faiyadzamirabuhassan%2Flaravel-app%2Fstudash%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/aiyadzamirabuhassan/laravel-app/studash/.env") and update the necessary environment variables, such as database credentials.

    ```sh
    cp .env.example .env
    ```

4. **Generate application key:**

    ```sh
    php artisan key:generate
    ```

5. **Run migrations and seed the database:**

    ```sh
    php artisan migrate --seed
    ```

6. **Build the frontend assets:**

    ```sh
    npm run dev
    ```

7. **Start the development server:**

    ```sh
    php artisan serve

## Usage

- Visit `http://localhost:8000` to access the application.
- Log in or register to access the Students Dashboard.

## Features

- **CRUD Operations:** Create, Read, Update, and Delete students.
- **Validation:** Server-side validation for student data.
- **Modals:** Use of Material-UI modals for adding and updating students.
- **Notifications:** Success messages on CRUD operations.

## Routes

- **GET `/studentsdashboard`:** Display the students dashboard.
- **POST `/addStudent`:** Add a new student.
- **PATCH `/updateStudent/{id}`:** Update an existing student.
- **DELETE `/deleteStudent/{id}`:** Delete a student.

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.