# OrderNest - Manufacturing ERP System

A comprehensive Manufacturing ERP (Enterprise Resource Planning) system built with modern web technologies. OrderNest streamlines manufacturing operations, inventory management, and production planning with an intuitive user interface.

## 🚀 Features

### Core Functionality
- **User Management** - Role-based access control with multiple user types
- **Product Management** - Complete product catalog with raw materials, semi-finished, and finished goods
- **Manufacturing Orders** - Production batch management and tracking
- **Work Orders** - Detailed production step management
- **Inventory Management** - Real-time stock tracking and material movement
- **Bill of Materials (BOM)** - Product recipe and component management
- **Work Centers** - Machine and production line management
- **Reporting** - Comprehensive analytics and audit trails

### Technical Features
- **Modern UI/UX** - Built with Next.js 15, TypeScript, and Tailwind CSS
- **Database** - Prisma ORM with SQLite for development
- **Authentication** - Secure user registration and login with password hashing
- **Form Validation** - Client and server-side validation
- **Responsive Design** - Mobile-first approach with modern animations
- **Type Safety** - Full TypeScript implementation

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components, Framer Motion
- **Database**: Prisma ORM, SQLite (development)
- **Authentication**: bcryptjs for password hashing
- **UI Components**: Custom components with shadcn/ui
- **Development**: ESLint, TypeScript strict mode

## 📊 Database Schema

### Tables
1. **Users** - User accounts with role-based permissions
2. **Products** - Product catalog with inventory tracking
3. **BOM (Bill of Materials)** - Product recipes and components
4. **Manufacturing Orders** - Production batches
5. **Work Orders** - Individual production tasks
6. **Work Centers** - Production facilities and machines
7. **Stock Ledger** - Material movement tracking
8. **Reports** - System reporting and analytics
9. **Audit Logs** - User action tracking

### User Roles
- `USER` - Basic user access
- `INVENTORY_MANAGER` - Inventory management permissions
- `OPERATOR_MANAGER` - Production operations management
- `MANUFACTURER_MANAGER` - Manufacturing oversight
- `ADMIN` - Full system administration

### Product Units
- `PCS` - Pieces/Units
- `KG` - Kilograms
- `LTR` - Liters
- `MT` - Meters/Metric Tons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MananHiran/OrderNest.git
   cd OrderNest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Database Management

- **Prisma Studio**: `npx prisma studio`
- **Reset Database**: `npx prisma db push --force-reset`
- **Generate Client**: `npx prisma generate`

## 📱 Pages and Features

### Authentication
- **Registration** (`/register`) - User account creation with validation
- **Login** (`/login`) - Secure user authentication

### Dashboard
- **Home** (`/`) - System overview and navigation
- **Manufacturing Orders** - Production management
- **Inventory** - Stock management
- **Reports** - Analytics and insights

## 🔧 Development

### Project Structure
```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
├── lib/                   # Utility functions and Prisma client
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

### Key Components
- **Authentication System** - Complete user management
- **Form Components** - Validated forms with error handling
- **Database Integration** - Prisma ORM with type safety
- **UI Components** - Modern, responsive design system

## 🔐 Security Features

- **Password Hashing** - bcryptjs with 12 salt rounds
- **Input Validation** - Client and server-side validation
- **Type Safety** - TypeScript for runtime safety
- **SQL Injection Protection** - Prisma ORM parameterized queries

## 📈 Future Enhancements

- [ ] Real-time notifications
- [ ] Advanced reporting dashboard
- [ ] Mobile app development
- [ ] Integration with external systems
- [ ] Advanced inventory forecasting
- [ ] Quality control management
- [ ] Supplier management
- [ ] Cost accounting features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Manan Hiran**
- GitHub: [@MananHiran](https://github.com/MananHiran)
- Repository: [OrderNest](https://github.com/MananHiran/OrderNest)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Database powered by [Prisma](https://prisma.io/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://framer.com/motion/)

---

**OrderNest** - Streamlining Manufacturing Operations with Modern Technology