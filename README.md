# Christmas Photo Gallery

A beautiful, responsive static website to showcase Christmas photos with a festive design.

## 🎄 Features

- Elegant hero section with "Merry Christmas, love Jet" message
- Responsive photo grid that works on all devices
- Smooth animations and hover effects
- Festive Christmas color scheme
- Optimized for GitHub Pages hosting

## 📸 Adding Your Photos

### Quick Start: Download & Host Locally

This is the best method for GitHub Pages as it ensures photos always load reliably.

**Step 1: Download Your Photos**
1. Open your [Google Photos album](https://photos.google.com/share/AF1QipNCxT50Rc6-N45qhQdEZscFPYCyKOU_bag-aRRNVNWnr-lc6X3p9f8a6gnng8-M6w?key=VXVrMDA0NEl4azNnMGlmSXVqVFR4c0o4R3hRb293)
2. Click the three dots (⋮) in the top right corner
3. Select "Download all" to save all photos to your computer
4. Extract the ZIP file if needed

**Step 2: Add Photos to the Folder**
1. Copy all your photos into the `photos` folder (already created for you!)
2. Supported formats: .jpg, .jpeg, .png, .gif, .webp

**Step 3: Generate the Photo List (Automatic!)**
1. Open PowerShell in this project directory
2. Run: `.\generate-photo-list.ps1`
3. Copy the output and paste it into `script.js` (around line 41)

**Step 4: Test**
1. Open `index.html` in your web browser
2. Enjoy your beautiful photo gallery! 🎄

### Option 2: Use Direct Image URLs

This method uses direct links from Google Photos (may break if Google changes URLs).

1. Open your Google Photos album
2. For each photo:
   - Right-click on the photo
   - Select "Copy image address" or "Copy image link"
3. Edit `script.js` and paste the URLs into the `photoUrls` array:

```javascript
const photoUrls = [
    'https://lh3.googleusercontent.com/.../photo1.jpg',
    'https://lh3.googleusercontent.com/.../photo2.jpg',
    // Add all your photo URLs here
];
```

## 🚀 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `christmas-photos`
3. Don't initialize with README (we already have one)

### Step 2: Push Your Code

```bash
cd "c:\Users\johns\Desktop\Jet Gets Results\CascadeProjects\windsurf-project"
git init
git add .
git commit -m "Initial commit: Christmas photo gallery"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/christmas-photos.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select the **main** branch and **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://YOUR-USERNAME.github.io/christmas-photos/`

### Step 4: Configure Custom Domain (jetgetsresults.com)

#### On GitHub:
1. In the Pages settings, enter `jetgetsresults.com` in the Custom domain field
2. Click Save and wait for DNS check

#### At Your Domain Registrar:
Add these DNS records for `jetgetsresults.com`:

**Option A: Using A Records (Apex domain)**
- Type: `A`
- Name: `@` (or leave blank)
- Values (add all 4):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

**Option B: Using CNAME (www subdomain)**
- Type: `CNAME`
- Name: `www`
- Value: `YOUR-USERNAME.github.io`

**Note:** DNS changes can take up to 24-48 hours to propagate.

## 🎨 Customization

### Change the Hero Image
Edit `styles.css` line 27 to use a different background image:
```css
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), 
            url('YOUR-IMAGE-URL') center/cover no-repeat;
```

### Change Colors
Edit the CSS variables in `styles.css` (lines 2-7):
```css
:root {
    --primary: #1a472a;      /* Dark green */
    --secondary: #c41e3a;    /* Christmas red */
    --light: #f8f9fa;        /* Light background */
    --dark: #212529;         /* Dark text */
}
```

### Change the Message
Edit `index.html` lines 17-18 to customize the hero message.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is free to use for personal purposes.

## 🎅 Merry Christmas!

Enjoy sharing your Christmas memories!
