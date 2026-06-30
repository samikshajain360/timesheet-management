# Timesheet Management Application

A Next.js application for managing timesheets with filtering, date range selection, and detailed time tracking capabilities.

## Setup Instructions

### Prerequisites

- Node.js (v20 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Frameworks and Libraries Used

### Core Framework

- **Next.js 16.2.9** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type safety

### UI Components & Styling

- **@mui/material 9.1.1** - Material-UI component library
- **@mui/x-date-pickers 9.6.0** - Date picker components
- **TailwindCSS 4** - Utility-first CSS framework
- **@emotion/react 11.14.0** - CSS-in-JS library
- **@emotion/styled 11.14.1** - Styled components

### Utilities

- **dayjs 1.11.21** - Date manipulation library
- **axios 1.18.0** - HTTP client
- **react-icons 5.6.0** - Icon library
- **react-hot-toast 2.6.0** - Toast notifications

### Form Handling

- **formik 2.4.9** - Form management
- **yup 1.7.1** - Schema validation

### Authentication

- **next-auth 4.24.14** - Authentication solution

## Assumptions and Notes

### Date Handling

- All dates are stored in ISO 8601 format (UTC)
- Date filtering normalizes dates to UTC midnight for consistent comparison
- Week numbering follows ISO standards (Monday as first day of week)
- Future dates are disabled in the date picker to prevent invalid selections

### Mock Data

- Mock data covers 25 weeks from December 29, 2025 to June 19, 2026
- Each week represents Monday-Friday workdays
- Timesheet status is calculated based on total hours vs target hours (40 hours)
- Status logic:
  - 0 hours = MISSING
  - > = 40 hours = COMPLETED
  - < 40 hours = INCOMPLETE

### API Routes

- API routes include a 500ms delay to simulate network latency
- All timesheet data is currently mocked (no database integration)
- Date range filtering uses overlap logic to include any week that intersects with the selected range

### Component Architecture

- Custom dropdown component replaces native select elements for consistent styling
- Material-UI Dialog component used for modals with custom styling via sx prop
- Icons from react-icons library (IoIos family)
- Status badges with color-coded indicators

## Time Spent

The following features were implemented during development:

1. **AddEntryModal Component** - Fixed TypeScript error, replaced native selects with CustomDropdown, added icons for hour adjustment, integrated with TimesheetTable
2. **CustomDropdown Component** - Added placeholder functionality
3. **TimesheetFilters Component** - Added close icons for clear buttons
4. **DateRangePicker Component** - Disabled future dates, improved cursor styling
5. **Mock Data Updates** - Updated all dates from 2024 to 2026, corrected week dates to match actual 2026 calendar, extended data through June 2026
6. **API Route** - Fixed date filtering logic with UTC normalization
7. **Skeleton Loading** - Implemented TableSkeleton and DetailSkeleton components for better UX during data fetching
8. **Type Safety** - Replaced all `any` types with proper TypeScript interfaces
9. **Code Quality** - Added Prettier, Husky, and lint-staged for automatic formatting and linting
10. **UI Improvements** - Added back button to detail page, dropdown arrow to date picker with rotation animation
