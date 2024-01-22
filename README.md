# Havan Cuts

Havan Cuts is a scheduling application that allows customers to easily book appointments at your barber shop. The application features a user-friendly React frontend for customers to book appointments, and a Node.js backend with Express.js to handle the scheduling process. Additionally, the app uses a MongoDB database to store appointment information.
Table of Contents

## Features
    Getting Started
    Prerequisites
    Installation
    Usage
    Customer
    Owner/Admin
    Technologies Used
    Contributing
    License

## Features

    Customer:
        View available time slots.
        Book appointments.
        Receive confirmation notifications.

    Owner/Admin:
        Log in to view scheduled appointments.
        Manage and update appointment details.

## Getting Started
### Prerequisites

Before you begin, ensure you have the following installed:

    Node.js
    npm
    MongoDB

Installation

    Clone the Repository:

bash

        git clone https://git@github.com:KabiruH/Havan-cuts.git
        cd havan-cuts

### Backend Setup:

bash

        cd backend
        npm install

### Frontend Setup:

bash

        cd frontend
        npm install

## Database Configuration:

    Configure your MongoDB connection in backend/config/db.js.

Environment Variables:

    Create a .env file in the backend directory with the following:

    env

        JWT_SECRET=your_secret_key

## Usage
Customer

    Start the Frontend:

    bash

    cd frontend
    npm start

    Visit http://localhost:3000 to access the customer interface.

Owner/Admin

    Start the Backend:

    bash

    cd backend
    npm start

    Visit http://localhost:3001 to access the backend.

Technologies Used

    Frontend:
        React

    Backend:
        Node.js
        Express.js

    Database:
        MongoDB

## Contributing

Contributions are welcome! Please follow the contribution guidelines.
License

This project is licensed under the MIT License.