# Tauri React SQLite Todo App

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Alby999/tauri-react-sqlite-todo-app.git
   cd tauri-react-sqlite-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm run tauri dev
   ```

## Features
- **Cross-Platform**: Built with Tauri, the app runs on Windows, macOS, and Linux.
- **SQLite Database**: Uses SQLite for local data storage.
- **React Framework**: Utilizes React for a responsive user interface.
- **Todo Management**: Create, edit, and delete todo items easily.

## Architecture
This application is structured with a clear separation of concerns:
- **Frontend**: Built with React, managing user interactions and UI components.
- **Backend**: Tauri acts as the backend, handling system interactions and SQLite database management.
- **Database**: SQLite is used to store todos persistently on the user's machine.

## Customization Guide
1. **Changing the App Name**: Update the `name` field in `package.json`.
2. **Modifying Styles**: Edit the CSS files in the `src/styles` directory.
3. **Adding Features**: Implement new components in the `src/components` directory and ensure routing is updated accordingly.