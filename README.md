# EventHub 🎟️

A production-style **event and ticket booking platform** where users can discover events, book tickets, make online payments, and manage their bookings.

The project is being built to learn and demonstrate modern **full-stack development, backend architecture, database design, caching, payments, containerization, CI/CD, and AWS deployment**.

## 🚀 Tech Stack

### Frontend
- React
- TypeScript
- React Router
- Redux Toolkit

### Backend
- Node.js
- Express.js
- TypeScript
- REST API

### Database & Caching
- PostgreSQL
- Redis

### Payments
- Razorpay

### DevOps & Deployment
- Docker
- Docker Compose
- Nginx
- Jenkins
- AWS

### Testing & Documentation
- Jest
- Supertest
- React Testing Library
- Swagger / OpenAPI

## ✨ Planned Features

- User registration and login
- Role-based access control
- Browse and search events
- Event creation and management
- Multiple ticket types and pricing
- Ticket booking
- Temporary ticket reservation
- Concurrent booking protection
- Online payment with Razorpay
- Payment verification and webhooks
- Booking cancellation and refunds
- QR-based tickets
- Event reviews
- Organizer dashboard
- Admin dashboard
- Redis caching
- API rate limiting
- Dockerized development environment
- Jenkins CI/CD pipeline
- AWS deployment

## 🏗️ Project Architecture

EventHub is initially being developed as a **modular monolith**.

```text
                        ┌─────────────────┐
                        │     Browser     │
                        │ React + TS      │
                        └────────┬────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │      Nginx      │
                        │ Reverse Proxy   │
                        └────────┬────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │ Node.js +       │
                        │ Express + TS    │
                        └───────┬─┬───────┘
                                │ │
                    ┌───────────┘ └───────────┐
                    ▼                         ▼
             ┌──────────────┐          ┌──────────────┐
             │ PostgreSQL   │          │    Redis     │
             │   Database   │          │ Cache/Locks  │
             └──────────────┘          └──────────────┘
                                │
                                ▼
                         ┌─────────────┐
                         │  Razorpay   │
                         │  Payments   │
                         └─────────────┘
```

## 📁 Project Structure

```text
eventhub/
│
├── frontend/          # React frontend
├── backend/           # Node.js + Express backend
├── database/          # Database scripts and related files
├── nginx/             # Nginx configuration
├── docker/            # Docker configuration
├── jenkins/           # CI/CD configuration
├── infrastructure/    # AWS / infrastructure configuration
├── docs/              # Project documentation
│
├── docker-compose.yml
├── .gitignore
├── README.md
└── LICENSE
```

## 🎯 Project Goals

The main goal of EventHub is not only to build an event booking application, but also to understand how the different parts of a modern production-style application work together.

Some of the key areas being explored are:

- REST API design
- Modular backend architecture
- PostgreSQL database design
- Transactions and concurrency
- Redis caching and distributed locking
- Secure authentication and authorization
- Payment processing
- Docker containerization
- Nginx reverse proxy
- CI/CD with Jenkins
- AWS infrastructure and deployment
- Automated testing
- Application security and performance

## 📌 Project Status

**🚧 Currently under development**

This project is being built incrementally. Features, architecture, documentation, and deployment configuration will be added as development progresses.

## 🛠️ Local Development

Local setup instructions will be added as the project structure and services are implemented.

Eventually, the application will be runnable locally using:

```bash
docker compose up
```

## 🧪 Testing

Testing will be implemented using:

- Jest
- Supertest
- React Testing Library

More detailed testing instructions will be added later.

## ☁️ Deployment

The planned production deployment will use AWS services such as:

- EC2
- RDS PostgreSQL
- ElastiCache Redis
- S3
- CloudFront
- Route 53
- Load Balancer
- IAM
- CloudWatch

Detailed deployment documentation will be added later.

## 📚 Documentation

Project documentation will be maintained in the `docs/` directory.

Planned documentation includes:

```text
docs/
├── architecture/
├── database/
├── api/
├── redis/
├── payments/
├── deployment/
└── security/
```

## 👨‍💻 Author

**Prakash Dwivedi**

---

⭐ This project is built as a learning and portfolio project focused on understanding production-style full-stack development and DevOps practices.
