# Allo-Health-Clinic-Management-System

A web-based application for managing patient queues, doctor appointments, and doctor information at a clinic. This project is built using Next.js for the frontend and NestJS for the backend, with MySQL as the database.

## Features

- **User Authentication**: Secure login for admin users.
- **Queue Management**: Add, update, and manage patient queues.
- **Appointment Scheduling**: Book, update, and cancel appointments with doctors.
- **Doctor Management**: Add, edit, and delete doctor information.
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS.

## Technologies Used

- **Frontend**: 
  - Next.js
  - React
  - Tailwind CSS
  - Axios for API calls

- **Backend**: 
  - NestJS
  - TypeORM for database interactions
  - MySQL for the database
  - JWT for authentication

## Prerequisites

- Node.js (LTS version recommended)
- MySQL (8.x)
- Docker (optional, for containerized deployment)

## Setup Instructions

### Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/manish3173/Allo-Health-Clinic-Management-System.git
   cd clinic-management-system
   ```

2. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

4. **Configure environment variables**:
   - Copy `.env.example` to `.env` in both the `frontend` and `backend` directories.
   - Update the values according to your setup.

5. **Create the database**:
   - Log in to MySQL:
     ```bash
     mysql -u root -p
     ```
   - Run the following commands:
     ```sql
     CREATE DATABASE clinic_db;
     USE clinic_db;
     ```

6. **Run migrations**:
   ```bash
   cd backend
   npm run migration:run
   ```

7. **Insert initial admin user**:
   ```sql
   INSERT INTO users (username, password, role) VALUES ('admin', 'hashed_password_here', 'ADMIN');
   ```

8. **Start the development servers**:
   - **Backend**:
     ```bash
     cd backend
     npm run start:dev
     ```
   - **Frontend**:
     ```bash
     cd frontend
     npm run dev
     ```

### Docker Setup

1. **Build and start the containers**:
   ```bash
   docker-compose up --build
   ```

## Testing

- **Backend tests**:
  ```bash
  cd backend
  npm run test
  ```

- **Frontend tests**:
  ```bash
  cd frontend
  npm run test
  ```

## Contact
For questions or support, please contact:

- **Y Manish Kumar**: [ymanishk602@gmail.com](mailto:ymanishk602@gmail.com)
  
## Contributing
Feel free to submit issues and pull requests. Contributions are welcome!


## License
This project is licensed under the MIT License.

