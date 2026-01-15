# 🛠️ Environment Setup Checklist

Complete these steps to set up your development environment for web development.

## ✅ Current Status

- ✅ **Git**: Installed (v2.52.0)
- ❌ **Node.js**: Not installed - **ACTION REQUIRED**
- ⚠️ **VSCode**: Not found in PATH - **ACTION REQUIRED**

---

## 🔧 Required Installations

### 1. Node.js (Required for Phase 2+)

**Why**: Node.js is needed for running JavaScript on the server, using NPM packages, and building React apps.

**Install Options**:

#### Option A: Using Package Manager (Recommended)
```bash
# Download and install Node.js LTS
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### Option B: Using NVM (Node Version Manager)
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then:
nvm install --lts
nvm use --lts
```

**When to install**: Before starting Phase 2 (React). You can start Phase 1 with just HTML/CSS/JS in the browser.

---

### 2. Visual Studio Code (Recommended)

**Why**: Best code editor for web development with great extensions.

**Install**:
```bash
# Download from website
# Visit: https://code.visualstudio.com/

# Or use snap
sudo snap install --classic code
```

**Alternative Editors**: Sublime Text, Atom, WebStorm (all work fine)

---

### 3. Browser with DevTools

**Recommended**: 
- ✅ Chrome (best DevTools)
- ✅ Firefox Developer Edition

You likely already have a browser, but make sure it has developer tools (F12).

---

## 📦 Recommended VSCode Extensions

Once VSCode is installed, add these extensions:

```
1. Live Server (Ritwick Dey)
   - Right-click HTML → "Open with Live Server"
   - Auto-refresh on save

2. Prettier - Code formatter
   - Automatic code formatting

3. ESLint
   - JavaScript linting

4. Auto Rename Tag
   - Rename paired HTML tags automatically

5. GitLens
   - Enhanced Git integration

6. Color Highlight
   - Visualize colors in CSS

7. Path Intellisense
   - Autocomplete file paths
```

**Install via VSCode**:
1. Open VSCode
2. Click Extensions icon (or Ctrl+Shift+X)
3. Search for extension name
4. Click Install

---

## 🎯 Start Phase 1 NOW (No installations needed!)

**Good news**: You can start learning right away!

Phase 1 only requires:
- ✅ A text editor (even `nano`, `vim`, or any editor works)
- ✅ A web browser
- ✅ Git (you have this!)

### Quick Start:
```bash
cd /home/adeandza/Desktop/anything-goes
cd projects/phase-1
mkdir project-1-personal-dashboard
cd project-1-personal-dashboard
touch index.html style.css script.js
```

Then open `index.html` in your browser!

---

## 📝 Post-Installation Verification

Run these commands after installing Node.js:

```bash
# Check versions
node --version    # Should show v18.x or v20.x
npm --version     # Should show 9.x or 10.x
git --version     # Already works!
code --version    # Should work after VSCode install
```

---

## 🚀 Initialize Git Repository

Your workspace is ready, but not yet a Git repository:

```bash
cd /home/adeandza/Desktop/anything-goes
git init
git add .
git commit -m "Initial commit: Learning environment setup"
```

---

## 🎓 Optional: Create GitHub Account

**Why**: Back up your code, build a portfolio, share projects

1. Go to [github.com](https://github.com)
2. Sign up for free account
3. Create a repository called `web-dev-journey`
4. Push your code:
```bash
git remote add origin https://github.com/YOUR-USERNAME/web-dev-journey.git
git branch -M main
git push -u origin main
```

---

## ✨ You're Almost Ready!

### For Phase 1 (Current):
- ✅ You can start NOW!
- No Node.js needed yet
- Just a browser and text editor

### For Phase 2+ (Future):
- ⚠️ Install Node.js before Phase 2
- ⚠️ Install VSCode (or preferred editor)

---

## 🆘 Troubleshooting

### "Command not found" errors
- Make sure software is installed
- Try closing and reopening terminal
- Check PATH environment variable

### VSCode won't open from terminal
- Add to PATH or use: `/usr/bin/code` instead of `code`
- Or just open VSCode from applications menu

### Node.js installation fails
- Try the NVM method instead
- Check your Linux distribution version
- Search for distro-specific instructions

---

**Need help?** Just ask! I'm here to guide you through any setup issues.

**Ready to code?** Open the [WEB_DEV_CURRICULUM.md](WEB_DEV_CURRICULUM.md) and let's start Phase 1! 🎉
