# KoinX Assignment Project

https://7y8tub8elny4uthdj.lite.vusercontent.net/

## Overview

This project is a web application built with Next.js, designed to provide a cryptocurrency dashboard with a focus on Bitcoin. It integrates various components to display real-time pricing data, interactive charts, market fundamentals, news insights, and more. The application utilizes libraries like `lucide-react` for icons, `recharts` for charting, `tailwind-merge` and `clsx` for styling and `vaul` for drawer and `cmdk` for command pallete. It leverages `react-hook-form` and `zod` for form management and validation respectively.

The primary goal of this project is to showcase a dynamic, data-driven UI for cryptocurrency analysis, while also practicing maintainable and reusable components, and handling async data fetching with error boundaries.

## Main Features

-   **Real-time Bitcoin Price Data:** Fetches and displays live Bitcoin price information, including USD and INR values, 24-hour price changes, and market ranking.
-   **Interactive TradingView Chart:** Integrates TradingView's charting library to provide an interactive chart for Bitcoin price analysis.
-   **Overview Tabs:** Includes a tabbed interface for switching between different perspectives on Bitcoin, such as Overview, Fundamentals, News Insights, Sentiments, Team, Technicals, and Tokenomics.
-   **Comprehensive Fundamentals Data:** Displays key metrics like market cap, trading volume, and high/low price data.
-   **News and Insights Section:** Presents a curated list of news articles related to Bitcoin.
-   **Sentiment Analysis:** Showcases sentiment data from analysts and other sources.
-   **Team Section:** Introduces the team behind the project with their respective roles.
-   **Technicals Analysis:** Lists various technical indicators with values and signals.
-   **Tokenomics Overview:** Presents token distribution information using a donut chart.
-   **"You May Like" Section:** Recommends trending coins based on current market trends.
-   **Error Boundaries:** Implements React Error Boundaries to gracefully handle component errors and provide a better user experience.
-   **Reusable UI Components:** Utilizes a library of custom UI components built with Radix UI for consistency and easier customization.
-   **Mobile responsiveness:** Utilizes custom hook `useIsMobile` and responsive classes to make the application responsive.
-   **Toast Notifications:** Uses `sonner` and custom toast hook for notifications.
-   **Custom hooks:** Uses custom hooks for mobile device detection and toast notification.
-   **Keyboard shortcuts:** Sidebar can be toggled with `ctrl + b` or `meta + b`

## Setup Instructions

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn package manager

### Steps

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```
2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be accessible at `http://localhost:3000`.

## Usage Examples

### Dashboard

The main dashboard page (`app/page.jsx`) displays:

-   A navigation menu with links to other sections.
-   Bitcoin price information with a percentage change indicator.
-   A TradingView chart for interactive price analysis.
-   A tabbed overview with different information sections.
-   A call-to-action banner for KoinX services.
-   Trending coins and related insights.
-   A "You May Like" carousel for related cryptocurrencies.

### NavMenu

The `NavMenu` component (`components/nav-menu.jsx`) provides:

-   A responsive navigation bar with links.
-   A mobile-friendly menu that toggles with a hamburger icon.
-   Branding logo at the left side of the navigation

### Overview Tabs
The `OverviewTabs` component (`components/overview-tabs.jsx`) allows the users to toggle through the overview, fundamentals, news insights, sentiments, team, technicals and tokenomics of the bitcoin.

### Trading View Chart

The `TradingViewChart` component (`components/trading-view-chart.jsx`) displays:

-   An embedded interactive chart from TradingView.
-   A single chart for bitcoin currency

### Trending Coins

The `TrendingCoins` component (`components/trending-coins.jsx`) provides:

-   A list of trending cryptocurrencies with their respective price changes.
-   Loading and error states
-   Uses API from `coingecko` to fetch the trending coins.

### Tabbed Content

The tabbed content (`components/overview-tabs.jsx`, `components/tab-content.jsx`, and  `components/tab-context.jsx`) provides:

-   Tab management using a custom context.
-   Different components corresponding to each tab.
-   Separated sections for `Performance`, `Fundamentals`, `Sentiment`, `Team`, `Technicals`, and `Tokenomics`.

### You May Like Section
The `YouMayLike` component (`components/you-may-like.jsx`) provides:
- A horizontal carousel for related cryptocurrencies.
- Loading and error states
- Uses API from `coingecko` to fetch the trending coins.

### UI Library

The `components/ui` directory contains a collection of reusable UI components, including:

-   `accordion`: For collapsible sections.
-   `alert-dialog`: For modal confirmation dialogs.
-   `alert`: For notifications.
-   `aspect-ratio`: For maintaining aspect ratios.
-   `avatar`: For user profiles.
-   `badge`: For tags.
-   `breadcrumb`: For page navigation hierarchy.
-   `button`: For interactive elements.
-   `calendar`: For date selection.
-   `card`: For container elements.
-   `carousel`: For slideshows.
-    `chart` : For displaying charts.
-   `checkbox`: For boolean choices.
-   `collapsible`: For expandable sections.
-   `command`: For command palette.
-   `context-menu`: For right-click menus.
-   `dialog`: For modal dialogs.
-   `drawer`: For side drawers.
-   `dropdown-menu`: For dropdown selections.
-   `form`: For custom form management.
-   `hover-card`: For displaying information on hover.
-    `input-otp` : For OTP input.
-   `input`: For single-line text entry.
-   `label`: For form labels.
-   `menubar`: For horizontal menus.
-    `navigation-menu` : For multi-level navigation menus.
-    `pagination` : For paginated content.
-   `popover`: For expandable content.
-   `progress`: For showing loading or progress.
-   `radio-group`: For selecting one option.
-    `resizable` : For adjustable resizable panes
-   `scroll-area`: For scrollable containers.
-   `select`: For dropdown selections.
-   `separator`: For visual dividers.
-   `sheet`: For side sheets.
-    `sidebar` : For collapsible navigation sidebars.
-   `skeleton`: For placeholder loaders.
-   `slider`: For numerical input ranges.
-   `sonner` : For notification toasts.
-   `switch`: For binary toggles.
-   `table`: For structured data display.
-   `tabs`: For switching between related sections.
-   `textarea`: For multi-line text entry.
-   `toast`: For displaying temporary notifications.
-    `toaster` : For displaying toast notifications
-   `toggle`: For on/off switches.
-   `toggle-group`: For grouped selections.
-   `tooltip`: For displaying helpful hints on hover.

## Libraries and Technologies Used

-   **Next.js:** Framework for building web applications.
-   **TypeScript:** For type-safe JavaScript development.
-   **Tailwind CSS:** For styling and UI development.
-   **Radix UI:** For building accessible and customizable UI components.
-   **Lucide React:** For icons.
-    `recharts` : For charts
-   `TradingView`: For interactive charting.
-   `react-hook-form` and `zod` : for form handling
-    `vaul` : For drawer
-    `cmdk` : For command pallete
-   `tailwind-merge` and `clsx` : for handling conditional classes.
-   `sonner` : For toast notifications.
-   `embla-carousel-react` : For carousel implementation
-   `input-otp`: For handling OTP inputs.

## Additional Notes

-   The project includes a `lib/api.js` file with functions for making API requests to `coingecko`.
-   The codebase also includes `hooks/use-toast.ts` and `hooks/use-mobile.tsx` which are custom hooks for toast notifications and mobile detection respectively.
-   Error handling is implemented with React Error Boundaries.
-   The UI Components in the `components/ui` directory are reusable components built with Radix UI.
-   Global CSS styles and custom theming are found in `app/globals.css` and `styles/globals.css`.
-   The components are designed to be flexible and customizable, ensuring a consistent user experience across the application.

This README provides a comprehensive guide to understanding, setting up, and using the project. For any questions or issues, please refer to the project's repository or contact the project maintainers.
