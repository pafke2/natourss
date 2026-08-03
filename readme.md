# 🏔️ Natours — Full-Stack Tour Booking Application

<p align="center">
  <a href="#english">English</a>
  <a href="#russian">Русский</a>
</p>

---

<a name="english"></a>
## English

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

<a href="#russian">Русский</a>
## Русский

**Natours** — это полнофункциональное (Full-Stack) веб-приложение для бронирования туров, разработанное на **Node.js, Express, MongoDB и шаблонах Pug**. Проект включает в себя полноценный RESTful API, аутентификацию, автоматическую обработку платежей через сервис Stripe и интерактивную интеграцию с картами Mapbox.

### ✨ Основной функционал

- 🔐 **Аутентификация и права доступа:** Безопасная регистрация/вход, JWT-аутентификация через HTTP-Only cookies, сброс пароля и разграничение ролей (`user`, `guide`, `lead-guide`, `admin`).
- 💳 **Оплата через Stripe и Webhooks:** Полноценный процесс оплаты туров с защищенной обработкой событий через Stripe Webhooks для сохранения бронирований прямо в MongoDB.
- 🗺️ **Интерактивные карты:** Отображение маршрутов и локаций тура с использованием интеграции с Mapbox.
- 👤 **Профиль пользователя и бронирования:** Удобный личная страница (`/me`) для управления данными пользователя, загрузки аватарок и просмотра купленных туров (`/my-tours`).
- ⚡ **Быстрый демо-вход:** Кнопка входа в один клик прямо на странице авторизации для демонстрации возможностей.
- 🚀 **Продакшен-деплой:** Настроен для облачного хостинга на Render с управлением переменными окружения и автоматическим индексированием базы данных.

### 🛠️ Технологический стек

- **Backend:** Node.js, Express.js, MongoDB & Mongoose
- **Frontend:** Шаблонизатор Pug, CSS3, JavaScript (ES6+ сборка через Parcel)
- **Аутентификация:** JSON Web Tokens (JWT), `bcryptjs`, Cookie Parser
- **Платежи и хранение:** Stripe API, Multer (загрузка файлов)
- **Хостинг:** Render, MongoDB Atlas
