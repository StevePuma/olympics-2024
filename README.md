## Paris Olympics 2024 Dashboard

![ParisOlympics](https://github.com/user-attachments/assets/fcb701ae-3aa2-46c2-a7be-d4d4d6b7d56e)


### Overview

The Paris Olympics 2024 Dashboard is a React application that provides insights into the upcoming Olympics through various visualizations and AI-powered chat functionality. This application leverages Sisense Compose SDK for embedding analytics and AI capabilities, providing users with interactive data visualization and natural language querying (NLQ).

### Features

- **Embedded Analytics**: Using Sisense SDK to embed interactive data visualizations.
- **AI-Powered Chatbot**: Sisense AI SDK integration to provide natural language querying capabilities.
- **Dark Mode**: The application is hardcoded to use a dark theme for better visual experience.
- **Navigation Highlighting**: The current page in the navigation drawer is highlighted to improve user experience.

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/paris-olympics-2024-dashboard.git
   cd paris-olympics-2024-dashboard
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root of the project with the following content:

   ```env
   REACT_APP_SISENSE_URL=https://csdklivedemo.sisensepoc.com/
   REACT_APP_SISENSE_TOKEN=your-sisense-api-token
   ```

   Replace `your-sisense-api-token` with your actual Sisense API token.

### Sisense SDK Packages Used

- `@sisense/sdk-ui`: For embedding Sisense analytics components.
- `@sisense/sdk-ui/ai`: For integrating Sisense AI capabilities into the application.
- `@sisense/sdk-data`: For data manipulation and filtering within the Sisense context.

### Project Structure

```
paris-olympics-2024-dashboard/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   ├── Paris.png
│   │   └── Sisense.png
│   │
│   ├── components/
│   │   ├── NavDrawer.tsx
│   │   └── OlympicsSchedule.tsx
│   │
│   ├── pages/
│   │   ├── Medals.tsx
│   │   ├── AiInsights.tsx
│   │   └── SelfService.tsx
│   │
│   ├── App.tsx
│   ├── index.tsx
│   └── reportWebVitals.ts
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

### Components

- **NavDrawer**: Navigation drawer with links to different pages and highlighting for the active page.
- **OlympicsSchedule**: Component to display the schedule of Olympic events using an external API.
- **Medals, AiInsights, SelfService**: Pages providing different insights and functionalities.

### Usage

1. **Start the Development Server**

   ```bash
   npm start
   ```

   This will start the development server and open the application in your default web browser.

### Updating the .env File

To authenticate the `SisenseContextProvider`, you need to update the `.env` file with your Sisense environment URL and API token. Ensure the following variables are set:

```env
REACT_APP_SISENSE_URL=https://csdklivedemo.sisensepoc.com/
REACT_APP_SISENSE_TOKEN=your-sisense-api-token
```

### Running Tests

To run tests for the application, use:

```bash
npm test
```

### Building for Production

To build the application for production, use:

```bash
npm run build
```

This will create a `build` directory with the production build of the application.

### License

This project is licensed under the MIT License.

### Acknowledgements

- Sisense for providing the powerful SDKs and APIs for embedding analytics and AI capabilities.

For any issues or contributions, please refer to the [GitHub repository](https://github.com/your-repo/paris-olympics-2024-dashboard).

---

This README provides an overview of the project, setup instructions, and details on the Sisense SDK packages used. By following the steps outlined, you can set up and run the Paris Olympics 2024 Dashboard application, leveraging Sisense's powerful analytics and AI features.
