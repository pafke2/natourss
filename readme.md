# 🏔️ Natours — Full-Stack Tour Booking Application

---

Natours is a production-ready, full-stack tour booking web application built with **Node.js, Express, MongoDB, and Pug templates**. It features a complete RESTful API, authentication, automated payment processing via Stripe service and interactive Mapbox integration.

### ✨ Features

- 🔐 **Authentication & Authorization:** Secure sign-up/login, JWT authentication via HTTP-Only cookies, password resets, and role-based access control (`user`, `guide`, `lead-guide`, `admin`).
- 💳 **Stripe Payments & Webhooks:** Live checkout session workflow with secure webhook listeners processing bookings directly in MongoDB.
- 🗺️ **Interactive Maps:** Route & location visualization using Mapbox integration.
- 👤 **User Profiles & Bookings:** Dedicated user dashboard (`/me`) to manage credentials, upload profile avatars, and view purchased tours (`/my-tours`).
- ⚡ **Quick Demo Access:** One-click demo login buttons built into the authentication page for demonstation purpose.
- 🚀 **Production Deployment:** Configured for cloud hosting on Render with environment variable management and automated database indexing.

### 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB & Mongoose
- **Frontend:** Pug Templating Engine, CSS3, JavaScript (ES6+ bundled via Parcel)
- **Authentication:** JSON Web Tokens (JWT), `bcryptjs`, Cookie Parser
- **Payments & Storage:** Stripe API, Multer (File uploads)
- **Hosting:** Render, MongoDB Atlas

---

## 💻 Local Setup & Installation

Follow these steps to run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or a local MongoDB instance)
- [Stripe Account](https://stripe.com/) for test payment integration

### Clone the repository

```bash
git clone [https://github.com/pafke2/natourss.git](https://github.com/pafke2/natourss.git)


# Install dependencies

npm install

# Navigate into project directory

cd natourss

# Environment Variables. Create a config.env file in the root directory of your project and populate it with your credentials:

NODE_ENV=development
PORT=3000
DATABASE=mongodb+scope_uri_here
DATABASE_PASSWORD=your_database_password
JWT_SECRET=your_jwt_secret_key_at_least_32_characters
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret

# Build Assets & Start App. Build the frontend JavaScript bundle:

npm run build

# Start the development server:

npm run dev

Open your browser and navigate to http://localhost:3000.
```
