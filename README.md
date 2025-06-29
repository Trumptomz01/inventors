# Contri - Country Information Website

A responsive web application that displays comprehensive country information using the REST Countries API. Built as part of the INVENTORS hackathon assessment.

## About

Contri is an interactive country explorer that fetches and displays detailed information about countries worldwide. Users can search for specific countries and filter results by region, making it easy to discover and learn about different nations.

## Features

- **Country Cards Display**: Clean, card-based layout showing essential country information
- **Real-time Search**: Search countries by name with instant results
- **Region Filtering**: Filter countries by continent (Africa, Americas, Asia, Europe, Oceania, Antarctic)
- **Comprehensive Data**: Displays country name, capital, region, population, and flag
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## Live Demo

[View Live Demo](https://contri-six.vercel.app/)

## Tech Stack

- **HTML5** - Structure and semantics
- **Tailwind CSS** - Styling and responsive design
- **JavaScript (ES6+)** - Dynamic functionality and API integration
- **REST Countries API** - Country data source

## API

This project uses the REST Countries API:
```
https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population
```

## Project Structure

```
contri/
├── src/
│   ├── input.css          # Tailwind CSS input file
│   └── output.css         # Compiled CSS output
├── index.html             # Main HTML file
├── main.js               # JavaScript functionality
├── package.json          # Project dependencies
├── package-lock.json     # Lock file
├── README.md            # Project documentation
└── .gitignore           # Git ignore rules
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Trumptomz01/inventors.git
   cd contri
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build Tailwind CSS**
   ```bash
   npm run build-css
   ```
   *Or if you have Tailwind CLI installed globally:*
   ```bash
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```

4. **Open the application**
   - Open `index.html` in your browser
   - Or use a local server like Live Server extension in VS Code

### Development

To work on the project with live CSS rebuilding:

```bash
# Watch for changes and rebuild CSS automatically
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## Usage

1. **Search Countries**: Use the search bar to find countries by name
2. **Filter by Region**: Click on region buttons (Africa, Americas, Asia, Europe, Oceania, Antarctic) to filter countries
3. **View Details**: Each card displays:
   - Country name and capital
   - Region/continent
   - Population count
   - National flag

## Hackathon

This project was developed as part of the **INVENTORS** hackathon assessment, demonstrating skills in:
- API integration
- Responsive web design
- Modern JavaScript ES6+
- Tailwind CSS framework
- User experience design


## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing comprehensive country data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- INVENTORS hackathon for the opportunity to build this project

---