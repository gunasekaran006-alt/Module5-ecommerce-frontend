
# E-Commerce Platform - Frontend

This is a full-stack E-Commerce application built using the MERN Stack (MongoDB, Express, React, Node.js). This repository contains the frontend implementation, featuring a dynamic product catalog, user authentication, and a persistent shopping cart synchronized with a backend database.

## Key Features
* **Product Catalog:** Browse and view a wide range of products with search and filtering capabilities.
* **Shopping Cart Management:** Add/remove items and adjust quantities with real-time database synchronization.
* **User Authentication:** Secure login and registration system.
* **Responsive Design:** A mobile-first, user-friendly interface optimized for all devices.
* **State Management:** Uses Redux Toolkit for seamless state handling across the application.

## Tech Stack
* **Frontend:** React.js, Tailwind CSS, Redux Toolkit, Axios.
* **Backend:** Node.js, Express.js, MongoDB Atlas.

## Getting Started

### Prerequisites
* Node.js (v18 or higher recommended)
* npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd <your-project-directory>

```

2. Install dependencies:
```bash
npm install

```


3. Create a `.env` file in the root directory and add your backend API URL:
```env
VITE_API_URL=[https://your-backend-api-url.com/api](https://your-backend-api-url.com/api)

```


4. Run the development server:
```bash
npm run dev

```



## Deployment

This application is deployed using Netlify. To deploy your own instance:

1. Run `npm run build` to generate the `dist` folder.
2. Drag and drop the `dist` folder into the Netlify dashboard.
3. Ensure your environment variables are configured in the Netlify site settings.


```