# 🎄 Quick Start Guide

## Get Your Photos Online in 4 Easy Steps!

### ✅ Step 1: Download Photos from Google Photos

1. Click this link: [Your Christmas Album](https://photos.google.com/share/AF1QipNCxT50Rc6-N45qhQdEZscFPYCyKOU_bag-aRRNVNWnr-lc6X3p9f8a6gnng8-M6w?key=VXVrMDA0NEl4azNnMGlmSXVqVFR4c0o4R3hRb293)
2. Click the **⋮** (three dots) in the top right
3. Select **"Download all"**
4. Save and extract the ZIP file

### ✅ Step 2: Add Photos to the Project

1. Open the `photos` folder in this project
2. Copy all your downloaded photos into it
3. That's it! The folder is ready.

### ✅ Step 3: Generate the Photo List

Open PowerShell in this folder and run:

```powershell
.\generate-photo-list.ps1
```

This will output something like:

```javascript
const photoUrls = [
    'photos/photo1.jpg',
    'photos/photo2.jpg',
    'photos/photo3.jpg',
];
```

**Copy this output!**

### ✅ Step 4: Update script.js

1. Open `script.js` in your editor
2. Find line 41 (the `photoUrls` array)
3. Replace the empty array with what you copied
4. Save the file

### 🎉 Test It!

Double-click `index.html` to open it in your browser. You should see your beautiful Christmas photo gallery!

---

## 🚀 Ready to Deploy to GitHub Pages?

Once your photos look good locally:

1. **Create a GitHub repository**
2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Christmas photo gallery"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
   git push -u origin main
   ```
3. **Enable GitHub Pages** in repository Settings → Pages
4. **Configure your custom domain** (jetgetsresults.com) in the Pages settings

See the full README.md for detailed deployment instructions!

---

## 🆘 Need Help?

- Photos not showing? Check that the file names in `script.js` match the actual files in the `photos` folder
- Website looks broken? Make sure all files (index.html, styles.css, script.js) are in the same folder
- Still stuck? Check the full README.md for more details

**Merry Christmas! 🎅🎄**
