# Wollete 🧾

<div align="center">

![Wollete Logo](./public/svg/logo.svg)

**Secure & Anonymous Digital Receipt Management Platform**

[![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[Live Demo](#) | [Documentation](#) | [Report Bug](https://github.com/mrkeshav-05/Wollete/issues) | [Request Feature](https://github.com/mrkeshav-05/Wollete/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Screenshots](#screenshots)
- [Key Features](#key-features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About The Project

Wollete is a cutting-edge Next.js web application designed to revolutionize the way businesses and consumers handle digital receipts. By providing a secure and anonymous platform for digital receipt transmission, Wollete eliminates the need for paper receipts while ensuring privacy and convenience for all parties involved.

### The Problem It Solves

- **Environmental Impact**: Reduces paper waste from traditional receipts
- **Privacy Concerns**: Ensures anonymous and secure transaction records
- **Receipt Management**: Centralizes digital receipt storage and management
- **Business Efficiency**: Streamlines billing and transaction processes for merchants
- **Regulatory Compliance**: Helps businesses meet paperless transaction requirements

---

## 📸 Screenshots

### Home Page
![Home Page Screenshot](./screenshots/home.png)
*The landing page showcasing Wollete's main features and benefits*

### Merchant Dashboard
![Merchant Dashboard Screenshot](./screenshots/merchant-dashboard.png)
*Comprehensive dashboard for merchants to manage transactions and receipts*

### Benefits Page
![Benefits Page Screenshot](./screenshots/benefits.png)
*Detailed overview of advantages for businesses and consumers*

### Sign Up Flow
![Sign Up Screenshot](./screenshots/signup.png)
*Streamlined registration process for merchants and third parties*

### Contact Us
![Contact Page Screenshot](./screenshots/contact.png)
*Easy-to-use contact form for support and inquiries*

---

## ✨ Key Features

### For Merchants
- 🏪 **Multi-Industry Support**: Tailored solutions for grocery chains, clothing stores, electronics retailers, and more
- 📊 **Business Analytics**: Track receipt distribution and customer engagement
- 🔐 **Secure Integration**: Easy API integration with existing POS systems
- 📱 **Mobile-First Design**: Responsive interface for on-the-go management
- 🎨 **Brand Customization**: Personalized receipt templates

### For Consumers
- 🔒 **Privacy-First**: Anonymous receipt collection without personal data exposure
- 📥 **Centralized Storage**: All receipts in one convenient location
- 🔍 **Smart Search**: Quickly find receipts by date, merchant, or amount
- 📤 **Easy Sharing**: Export receipts for warranty claims, returns, or expense reports
- 🌱 **Eco-Friendly**: Contribute to environmental sustainability

### For Third Parties & POS Providers
- 🔌 **API Integration**: Seamless connection with existing systems
- 📚 **Comprehensive Documentation**: Clear guides for implementation
- 🛠️ **Developer Tools**: SDKs and testing environments
- 🤝 **Partnership Program**: Collaborative ecosystem for growth

---

## 🛠️ Built With

### Frontend
- **[Next.js 13.5](https://nextjs.org/)** - React framework with SSR and SSG
- **[React 18.2](https://reactjs.org/)** - UI component library
- **[Tailwind CSS 3.3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Material-UI](https://mui.com/)** - React component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Backend & Integration
- **[Axios](https://axios-http.com/)** - HTTP client for API requests
- **[Next Connect](https://github.com/hoangvvo/next-connect)** - Express-like routing for Next.js
- **[AWS SDK](https://aws.amazon.com/sdk-for-javascript/)** - Cloud services integration
- **[Multer](https://github.com/expressjs/multer)** - File upload handling

### Form Handling & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[React OTP Input](https://www.npmjs.com/package/react-otp-input)** - OTP verification

### UI Components
- **[React Bootstrap](https://react-bootstrap.github.io/)** - Bootstrap components
- **[Swiper](https://swiperjs.com/)** - Modern slider library
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Notification system

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Lint-Staged](https://github.com/okonet/lint-staged)** - Pre-commit linting

---

## 🚀 Getting Started

Follow these steps to set up Wollete locally on your machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
  ```bash
  node --version
  ```

- **npm** or **yarn** or **pnpm**
  ```bash
  npm --version
  # or
  yarn --version
  # or
  pnpm --version
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrkeshav-05/Wollete.git
   cd Wollete
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add your configuration:
   ```env
   # Add your environment variables here
   NEXT_PUBLIC_API_URL=your_api_url
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   # Add other necessary variables
   ```

### Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

2. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

3. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

4. **Run linting**
   ```bash
   npm run lint
   ```

---

## 📁 Project Structure

```
Wollete/
├── components/           # Reusable React components
│   ├── buttons/         # Button components
│   ├── merchant/        # Merchant-specific components
│   └── AddressInput/    # Address form components
├── pages/               # Next.js pages and API routes
│   ├── api/            # API endpoints
│   │   └── v1/         # API version 1
│   ├── signup/         # Registration flows
│   └── ...             # Other pages
├── public/              # Static assets
│   ├── png/            # PNG images
│   └── svg/            # SVG icons and graphics
├── styles/              # Global styles and CSS modules
├── utils/               # Utility functions
├── constants/           # Application constants
├── lib/                 # Library configurations
└── ...                  # Configuration files
```

---

## 💡 Usage

### For Merchants

1. **Sign Up**: Navigate to the merchant registration page
2. **Complete Profile**: Fill in your business details through the 8-step process
3. **Integrate**: Connect your POS system using our API
4. **Start Sending**: Begin sending digital receipts to your customers

### For Third Parties

1. **Partner Registration**: Complete the third-party signup flow
2. **API Access**: Obtain your API credentials
3. **Integration**: Use our SDK to integrate Wollete into your platform
4. **Testing**: Use the sandbox environment for testing

### For Consumers

1. **Download App**: Get the Wollete mobile app (iOS/Android)
2. **Create Account**: Quick and anonymous registration
3. **Receive Receipts**: Automatically collect receipts from participating merchants
4. **Manage**: Organize, search, and export your digital receipts

---

## 📡 API Documentation

### Endpoints

#### Merchant Registration
```
POST /api/v1/merchants
```

#### OTP Generation
```
POST /api/v1/registrations/otp
```

#### OTP Verification
```
POST /api/v1/registrations/otp/verification
```

#### Administrative Areas
```
GET /api/v1/administrative-areas
```

#### Towns
```
GET /api/v1/towns
```

#### Post Codes
```
GET /api/v1/post-codes
```

For detailed API documentation, please refer to [API_DOCS.md](#) (coming soon).

---

## 🗺️ Roadmap

- [x] Initial release with core features
- [x] Merchant registration flow
- [x] Third-party integration support
- [ ] Mobile app development (iOS & Android)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Blockchain integration for enhanced security
- [ ] AI-powered receipt categorization
- [ ] Loyalty program integration
- [ ] Export to accounting software

See the [open issues](https://github.com/mrkeshav-05/Wollete/issues) for a full list of proposed features and known issues.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Ensure all tests pass before submitting PR

### Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 📧 Contact

**Project Maintainer**: Keshav Thakur

- GitHub: [@mrkeshav-05](https://github.com/mrkeshav-05)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](#)

**Project Link**: [https://github.com/mrkeshav-05/Wollete](https://github.com/mrkeshav-05/Wollete)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Material-UI](https://mui.com/)
- [Vercel](https://vercel.com) for hosting
- All our contributors and supporters

---

<div align="center">

**Made with ❤️ by the Wollete Team**

⭐ Star us on GitHub — it motivates us a lot!

</div>
