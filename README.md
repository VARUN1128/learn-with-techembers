# HarduLearn

A self-learning platform for students interested in hardware, electronics, and projects. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Learning Paths**: Structured courses for Arduino, IoT, Raspberry Pi, and more
- **Project Library**: Curated hardware projects with detailed guides
- **Sensor Explorer**: Comprehensive information about various sensors
- **Glossary & Reference**: Electronics formulas, resistor color codes, and IC pinouts
- **Project Submission**: Share your projects with the community
- **Modern Navigation**: Includes a Home link and improved navigation for both desktop and mobile
- **Enhanced UI**: Improved WhatsApp icon, beautiful cards, and responsive layout
- **Bug Fixes**: Fixed floating label bug on the Home page and improved image handling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hardulearn.git
cd hardulearn
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── data/           # Local JSON data for dynamic content
├── App.tsx         # Main application component
└── index.tsx       # Application entry point
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- React Icons

## Troubleshooting

- If you see a floating label (e.g., "Computer Hardware") on the Home page, it may be due to a failed image load. This has been fixed by removing the image, but if you add images, ensure the URLs are valid to avoid alt text rendering.
- For best results, do a hard refresh (Ctrl+Shift+R) after updates.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) 