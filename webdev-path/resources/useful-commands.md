# 💻 Useful Commands & Snippets

## Git Commands

```bash
# Initialize a repository
git init

# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your message here"

# Create a new branch
git checkout -b feature-name

# View commit history
git log --oneline
```

## Node.js & NPM

```bash
# Check Node version
node --version

# Check NPM version
npm --version

# Initialize a new project
npm init -y

# Install a package
npm install package-name

# Install dev dependency
npm install --save-dev package-name

# Run scripts
npm run dev
npm start
npm test
```

## Create React App / Vite

```bash
# Create React App
npx create-react-app my-app

# Vite (faster, recommended)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## Development Servers

```bash
# Simple HTTP server with Python
python3 -m http.server 8000

# Simple HTTP server with Node.js
npx http-server

# Live Server (VSCode extension)
# Right-click HTML file → "Open with Live Server"
```

## Useful VSCode Shortcuts

- **Ctrl + P**: Quick file search
- **Ctrl + Shift + P**: Command palette
- **Ctrl + `**: Toggle terminal
- **Alt + Up/Down**: Move line up/down
- **Ctrl + /**: Toggle comment
- **Ctrl + D**: Select next occurrence
- **Ctrl + Shift + F**: Search in all files
- **F2**: Rename symbol

## Browser DevTools

- **F12**: Open DevTools
- **Ctrl + Shift + C**: Inspect element
- **Ctrl + Shift + M**: Toggle device toolbar (mobile view)
- **Ctrl + Shift + J**: Open console

## CSS Snippets

```css
/* Modern CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Flexbox Center */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid Layout */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Smooth Transitions */
.smooth {
  transition: all 0.3s ease;
}
```

## JavaScript Snippets

```javascript
// Fetch API Template
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Async/Await Version
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// DOM Manipulation
document.querySelector('.class-name');
document.getElementById('id-name');
document.querySelectorAll('div');
element.addEventListener('click', handleClick);
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
```

## Debugging Tips

```javascript
// Console methods
console.log('Basic log');
console.error('Error message');
console.warn('Warning message');
console.table([{a: 1, b: 2}, {a: 3, b: 4}]);
console.time('timer');
console.timeEnd('timer');

// Debugger statement
debugger; // Pauses execution in DevTools
```

## Package Recommendations

### Frontend
- `react` - UI library
- `react-router-dom` - Routing
- `axios` - HTTP client
- `recharts` - Charts for React
- `date-fns` - Date utilities

### Backend
- `express` - Web framework
- `dotenv` - Environment variables
- `cors` - CORS middleware
- `bcrypt` - Password hashing
- `jsonwebtoken` - JWT authentication
- `pg` - PostgreSQL client

### Dev Tools
- `nodemon` - Auto-restart server
- `prettier` - Code formatter
- `eslint` - Code linter
- `jest` - Testing framework

---

**Tip**: Bookmark this file and add your own commands as you learn!
