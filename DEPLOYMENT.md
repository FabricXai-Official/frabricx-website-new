# FabricXAI Website Deployment Guide

This guide will help you deploy your FabricXAI website using free hosting services.

## 🚀 Quick Start (Recommended: Vercel)

### Option 1: Vercel (Easiest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project:**
   ```bash
   cd fabricxai/Fabricx_Website_new
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Login to your Vercel account
   - Choose to create a new project
   - Confirm the settings
   - Wait for deployment

5. **Your site will be live at:** `https://your-project-name.vercel.app`

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Navigate to your project:**
   ```bash
   cd fabricxai/Fabricx_Website_new
   ```

3. **Deploy:**
   ```bash
   netlify deploy
   ```

4. **Follow the prompts and your site will be live!**

### Option 3: GitHub Pages

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy your site

## 📋 Prerequisites

Before deploying, make sure you have:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Git](https://git-scm.com/) installed
- A GitHub account (for version control)
- A Vercel or Netlify account (free)

## 🔧 Build Commands

The project uses these commands:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Custom Domain (Optional)

### Vercel:
1. Go to your project dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update your DNS settings

### Netlify:
1. Go to your site dashboard
2. Navigate to "Domain settings"
3. Add your custom domain
4. Update your DNS settings

## 📱 Environment Variables

If you need to add environment variables:

### Vercel:
```bash
vercel env add VARIABLE_NAME
```

### Netlify:
- Go to site settings → Environment variables
- Add your variables

## 🔄 Continuous Deployment

Both Vercel and Netlify offer automatic deployments:

- **Vercel:** Automatically deploys when you push to your main branch
- **Netlify:** Automatically deploys when you push to your main branch

## 📊 Performance Optimization

The project is already optimized with:

- Next.js 14 with App Router
- Tailwind CSS for styling
- Optimized images and assets
- SEO-friendly structure

## 🛠️ Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check Node.js version (should be 18+)
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors

2. **Images not loading:**
   - Ensure all images are in the `public` folder
   - Check image paths in your components

3. **Styling issues:**
   - Ensure Tailwind CSS is properly configured
   - Check for missing CSS imports

### Getting Help:

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Vercel documentation](https://vercel.com/docs)
- Review [Netlify documentation](https://docs.netlify.com)

## 🎉 Success!

Once deployed, you can:

1. Share your live URL with others
2. Add it to your portfolio
3. Use it for demos and presentations
4. Continue developing with automatic deployments

Your FabricXAI website will be accessible to anyone with an internet connection! 