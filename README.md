# CRM Dashboard - React Implementation

A modern, responsive CRM dashboard implementation using React and Vite, inspired by a Figma design.

## Goals
- Create a pixel-perfect implementation of the CRM dashboard design
- Implement responsive layouts that work across all device sizes
- Ensure high performance and accessibility
- Demonstrate best practices in React component architecture
- Show practical implementation of modern data grid solutions

## Non-Goals
- Backend implementation
- Authentication system
- Real-time data updates
- Complex state management (keeping it simple with React hooks)

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - shadcn/ui for component primitives
  - CSS Variables for theming
- **Data Grid**: AG Grid Community Edition
- **Icons**: Lucide React
- **Charts**: Recharts for analytics visualization

## Design System
- Built on shadcn/ui components
- Custom theme implementation with CSS variables
- Consistent spacing and typography scale
- Responsive design breakpoints
- Dark mode support
- Custom component variants

## Data Layer
### Mock Strategy
- Static mock data for initial development
- Type-safe data structures using TypeScript interfaces
- Simulated API delay for realistic loading states

### Data Management
- **Sorting**: Client-side sorting using AG Grid's built-in functionality
- **Filtering**: 
  - Quick search across all columns
  - Column-specific filtering
  - Custom filter components for specific data types
- **Pagination**: 
  - Client-side pagination
  - Configurable page sizes
  - Page navigation controls

### Error Handling
- Graceful fallbacks for loading states
- Error boundaries for component-level error catching
- Custom error states in data grid
- Helpful error messages for development

## Component Architecture
```
src/
├── components/
│   ├── dashboard/      # Dashboard-specific components
│   ├── layout/         # Layout components
│   └── ui/            # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/              # Utility functions
└── pages/            # Page components
```

## Performance Considerations
- Memoization of expensive computations
- Virtualized scrolling in data grid
- Optimized bundle size with tree shaking
- Lazy loading of components when needed
- Code splitting at route level

## Future Improvements
- Server-side sorting and filtering
- Real-time data updates
- Advanced filtering capabilities
- Export functionality
- Customizable dashboard layouts
- More interactive charts and analytics

## Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing
Feel free to submit issues and enhancement requests!

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

You can deploy this project to any static hosting platform:

### Build for Production
```bash
npm run build
```

This will create a `dist` folder with optimized production build.

### Hosting Platforms
You can deploy to platforms like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting
