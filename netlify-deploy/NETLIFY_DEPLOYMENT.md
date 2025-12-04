# 🚀 Netlify Deployment Guide

## Quick Deploy Options

### Option 1: Deploy via Netlify CLI (Recommended)
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard
1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to your Git repository OR drag and drop the `netlify-deploy.zip` file
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Add environment variables (if using EmailJS):
   - `VITE_EMAILJS_SERVICE_ID` = `service_zukq4lf`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_24gtxc6`
   - `VITE_EMAILJS_PUBLIC_KEY` = `Mq2IhyUUB3uKd1WsS`
6. Click "Deploy site"

### Option 3: Deploy via Git (Automatic)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically deploy on every push

## Environment Variables Setup

If you're using the contact form with EmailJS, add these in Netlify Dashboard:

1. Go to Site settings → Environment variables
2. Add the following:
   - `VITE_EMAILJS_SERVICE_ID` = `service_zukq4lf`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_24gtxc6`
   - `VITE_EMAILJS_PUBLIC_KEY` = `Mq2IhyUUB3uKd1WsS`

## Build Configuration

The project includes `netlify.toml` with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects configured

## Files Included in Deployment

✅ All source code (`src/`)
✅ Public assets (`public/` including all project images)
✅ Configuration files (`package.json`, `tsconfig.json`, etc.)
✅ Build configuration (`netlify.toml`, `vite.config.ts`)

## Post-Deployment Checklist

- [ ] Test the live site URL
- [ ] Verify all images load correctly
- [ ] Test contact form (if EmailJS is configured)
- [ ] Test theme toggle (dark/light mode)
- [ ] Test navigation and smooth scrolling
- [ ] Verify all project links work
- [ ] Test responsive design on mobile

## Troubleshooting

### Images not loading?
- Ensure all images are in `public/projects/` folder
- Check image paths in `src/data/portfolio.ts`

### Contact form not working?
- Verify environment variables are set in Netlify
- Check EmailJS service is active
- Review browser console for errors

### Build fails?
- Ensure Node.js version is 18+ (configured in netlify.toml)
- Check for TypeScript errors: `npm run build`
- Verify all dependencies are in `package.json`

## Support

For issues, check:
- Netlify build logs in dashboard
- Browser console for runtime errors
- EmailJS dashboard for form submission logs

