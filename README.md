# 🌐 EasyTranslator 🌐

**Welcome to EasyTranslator!**  
A business card website for professional document translation from various languages into Polish. Fast, reliable, and visually appealing!

## 🔥 Key Features

- **Built with React** ⚛️: A dynamic, fast, and responsive UI to present translation services.
- **Styled with SCSS** 🎨: Custom styles for a sleek, professional look.
- **Designed in Figma** 🖌️: The layout and visuals were crafted in Figma, ensuring top-notch user experience.
- **Free API Integration** 🌍: Using the [Countries and Flags API](https://countriesnow.space/api/v0.1/countries/flag/images) to show languages and flags the translator knows.

## 🚀 Technologies Used

- **React**: Frontend framework for creating dynamic UIs.
- **SCSS**: For modular and maintainable stylesheets.
- **Figma**: To design the layout and user interface.
- **API**: Fetching country names and flags from [CountriesNow API](https://countriesnow.space).

## 📦 API Example

The page displays country flags using this API:

- **Get country and flag images**: [https://countriesnow.space/api/v0.1/countries/flag/images](https://countriesnow.space/api/v0.1/countries/flag/images)

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/ThePioter18/EasyTranslator.git
cd EasyTranslator
```

### 1. Create a .env File
Create a new file named .env in the root of the project.

### 2. Add the following line to the .env file:

```bash
VITE_API_URL=https://countriesnow.space/api/v0.1/countries/flag/images
```

### 3. Install Dependencies
Run the following command to install the required dependencies:
```bash
npm install
```

### 4. Start the Application
Finally, start the application with:
```bash
npm start
```
#### Your application should now be running at http://localhost:3000.


## 🛡 License

This project is licensed under the MIT License - see the LICENSE file for details.
