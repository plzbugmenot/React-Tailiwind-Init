# React Template Dashboard

A modern, responsive dashboard template built with React and Tailwind CSS. This template includes a clean UI with dark/light mode toggle, responsive sidebar, and sample dashboard components.

## Features

- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🧩 Modular component structure
- 📊 Sample dashboard statistics cards
- 📈 Chart placeholder for data visualization
- 📋 Recent transactions list
- 🔄 Interactive sidebar navigation

## Screenshots



## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn
- Redux
- Custom Hooks
- Custom API

### Installation

1. Clone the repository:
```bash
git https://github.com/plzbugmenot/React-Tailiwind-Init.git
cd React-Tailiwind-Init
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
react-template-dashboard/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.tsx           # Main application component with dashboard
│   ├── App.css           # Component-specific styles
│   ├── index.tsx         # Entry point
│   ├── index.css         # Global styles with Tailwind directives
│   └── ...
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json
└── README.md
```

## Customization

### Tailwind Configuration

The project uses Tailwind CSS for styling. You can customize the theme by editing the `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Add your custom theme extensions here
      colors: {
        // Custom colors
      },
      // ...
    },
  },
  plugins: [
    // Add Tailwind plugins here
  ],
}
```

### Adding Pages

To add new pages to the dashboard:

1. Create a new component in the `src` directory
2. Add a route in your routing configuration (if using React Router)
3. Add a link to the new page in the sidebar navigation

## Dark Mode Implementation

The dark mode is implemented using Tailwind's `dark` class strategy. The toggle button in the header switches between modes by adding or removing the `dark` class from the `documentElement`.

```typescript
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);
```

## Browser Support

This template works in all modern browsers:

- Chrome
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)

## Contact

Your Name - [@Plzbugmenot](https://t.me/plzbugmenot) - pleasebugmenot.dev@gmail.com

Project Link: [https://github.com/plzbugmenot/React-Tailiwind-Init](https://github.com/plzbugmenot/React-Tailiwind-Init)
