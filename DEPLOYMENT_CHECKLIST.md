# ✅ Deployment Checklist

## Pre-Deployment

- [x] All project images are in `public/projects/` folder
- [x] Build completes successfully (`npm run build`)
- [x] All TypeScript errors resolved
- [x] `netlify.toml` configured
- [x] All dependencies in `package.json`

## Images Included

- [x] `autopilot.png` - Autopilot Pro project
- [x] `docconverter.png` - DocConverter Pro project
- [x] `imagepro.png` - ImagePro project
- [x] `kani.jpeg` - Kani Framework project
- [x] `face.jpg` - Face Recognition project
- [x] `profile_image.png` - Profile image

## Environment Variables (Set in Netlify Dashboard)

- [ ] `VITE_EMAILJS_SERVICE_ID` = `service_zukq4lf`
- [ ] `VITE_EMAILJS_TEMPLATE_ID` = `template_24gtxc6`
- [ ] `VITE_EMAILJS_PUBLIC_KEY` = `Mq2IhyUUB3uKd1WsS`

## Post-Deployment Testing

- [ ] Homepage loads correctly
- [ ] All sections visible (Hero, Skills, Experience, Projects, Contact)
- [ ] All project images display
- [ ] Navigation works (smooth scroll to sections)
- [ ] Theme toggle works (dark/light mode)
- [ ] Contact form submits successfully
- [ ] All external links work (GitHub, LinkedIn, etc.)
- [ ] Resume download works
- [ ] Responsive design works on mobile
- [ ] Fluid cursor animation works

## Quick Deploy Steps

1. **Option A: Drag & Drop**
   - Go to https://app.netlify.com/drop
   - Drag `netlify-deploy.zip` file
   - Wait for deployment

2. **Option B: Git Integration**
   - Push code to GitHub
   - Connect repo to Netlify
   - Auto-deploy on push

3. **Option C: Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

## Important Notes

⚠️ **DO NOT** commit `.env` file to Git
✅ Set environment variables in Netlify Dashboard instead
✅ All images are stored in codebase (`public/projects/`)
✅ Build output goes to `dist/` folder

