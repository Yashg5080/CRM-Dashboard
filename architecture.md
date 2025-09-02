# Architecture Documentation

## Project Overview
This is a React + TypeScript CRM dashboard application that recreates the Customers screen from the provided design specifications.

## Goals
- **Primary**: Create a pixel-perfect, functional reproduction of the Customers screen
- **Secondary**: Implement a scalable design system using Storybook
- **Tertiary**: Ensure easy transition to real backend APIs

## Non-Goals
- Full CRM functionality beyond the Customers screen
- Real authentication or user management
- Backend implementation

## Tech Stack

### Core Framework
- **React 18** with functional components and hooks
- **TypeScript** for type safety and better developer experience
- **Vite** for fast development and optimized builds

### UI & Styling
- **Tailwind CSS** for utility-first styling
- **Radix UI** (via shadcn/ui) for accessible primitive components
- **Lucide React** for consistent iconography
- **Custom CSS variables** for theming and design tokens

### Data Grid
- **AG Grid React** for advanced table functionality including:
  - Column sorting and filtering
  - Custom cell renderers
  - Pagination
  - Responsive design

### Development Tools
- **Storybook** for design system documentation
- **ESLint** for code quality
- **React Router** for navigation (prepared for future expansion)

## Design System

### Color Palette
- **Primary**: Blue gradient theme (hsl(239 84% 67%))
- **Success**: Green for active states (hsl(142 76% 36%))
- **Destructive**: Red for inactive/delete actions (hsl(0 84% 60%))
- **Muted**: Gray tones for secondary content

### Typography
- **Headings**: Semi-bold weights for clear hierarchy
- **Body**: Regular weight for readability
- **Interactive**: Medium weight for buttons and links

### Components
All components follow the shadcn/ui pattern with:
- Consistent prop interfaces
- Built-in accessibility features
- Customizable variants via class-variance-authority
- Dark/light mode support

## Data Layer

### Mock Data Strategy
- **Static mock data** in component files for immediate functionality
- **Typed interfaces** matching expected backend API responses
- **Easy migration path**: Replace mock data imports with API calls

### State Management
- **Local component state** for UI interactions (search, sorting, pagination)
- **React hooks** (useState, useMemo, useCallback) for performance optimization
- **No global state** needed for current scope

### Data Flow
1. Mock data → Filter by search term → Sort by selected criteria → Paginate → Render

## Key Features Implementation

### Search Functionality
- **Client-side filtering** across name, company, and email fields
- **Real-time updates** with debounced input
- **Case-insensitive** matching

### Sorting
- **Dropdown-controlled** sorting (Newest, Name, Status)
- **Stable sort** implementation
- **Maintains pagination** after sort changes

### Pagination
- **8 items per page** as specified
- **Smart pagination controls** (1...40 with ellipsis)
- **Entry counter** showing current range

### Error Handling
- **Graceful loading states** for async operations
- **Empty state** handling for no search results
- **Error boundaries** for component failures

## Performance Considerations

### Optimization Strategies
- **useMemo** for expensive filtering/sorting operations
- **useCallback** for event handlers to prevent unnecessary re-renders
- **AG Grid virtualization** for handling large datasets
- **Lazy loading** preparation for images and components

### Bundle Size
- **Tree-shaking** enabled for all dependencies
- **Modular imports** to reduce bundle size
- **Code splitting** ready for route-based chunks

## Testing Strategy
- **Component testing** with React Testing Library (prepared)
- **Unit tests** for utility functions
- **Integration tests** for user workflows
- **Visual regression testing** via Storybook

## Scalability Considerations

### Backend Integration
- **API abstraction layer** ready for implementation
- **TypeScript interfaces** matching expected API contracts
- **Error handling** prepared for network failures

### Component Architecture
- **Reusable components** with clear prop interfaces
- **Composition over inheritance** pattern
- **Easy theming** via CSS custom properties

### Future Enhancements
- **Real-time updates** via WebSocket integration
- **Advanced filtering** with multi-criteria support
- **Export functionality** for data download
- **Responsive design** optimizations for mobile

## Development Workflow
1. **Design system first**: Create reusable components in Storybook
2. **Component composition**: Build screens from smaller components
3. **Progressive enhancement**: Add functionality incrementally
4. **Type safety**: Ensure all data flows are properly typed

This architecture provides a solid foundation for the current requirements while maintaining flexibility for future enhancements and backend integration.