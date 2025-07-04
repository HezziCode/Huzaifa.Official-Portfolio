# 🚀 Production Deployment Guide

This guide covers deploying your portfolio to production with optimal performance and security.

## 📋 Pre-Deployment Checklist

### 1. Environment Variables
Ensure all required environment variables are set:

```bash
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 2. Build Optimization
```bash
# Clean previous builds
npm run clean

# Run production build
npm run build:production

# Test the build locally
npm run preview
```

### 3. Performance Testing
- Test loading speed with Lighthouse
- Verify mobile responsiveness
- Check 3D animations performance
- Test contact form functionality

## 🌐 Deployment Platforms

### Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel --prod
```

3. **Environment Variables:**
Set in Vercel dashboard under Project Settings > Environment Variables

4. **Custom Domain:**
Add your domain in Vercel dashboard under Project Settings > Domains

### Netlify

1. **Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

2. **Environment Variables:**
Set in Netlify dashboard under Site Settings > Environment Variables

3. **Deploy:**
```bash
# Using Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. **Enable GitHub Actions:**
The `.github/workflows/deploy.yml` file is already configured

2. **Set Repository Secrets:**
- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

3. **Enable GitHub Pages:**
Go to Repository Settings > Pages > Source: GitHub Actions

## 🔒 Security Configuration

### Headers
The following security headers are configured:
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Content Security Policy (CSP)
Add to your hosting platform:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' api.emailjs.com;
```

## ⚡ Performance Optimization

### 1. Asset Optimization
- Images are optimized and compressed
- 3D models are efficiently loaded
- Code splitting is implemented

### 2. Caching Strategy
```
# Static assets (1 year)
/assets/* - Cache-Control: public, max-age=31536000, immutable

# HTML files (no cache)
/*.html - Cache-Control: no-cache
```

### 3. Bundle Analysis
```bash
npm run build:analyze
```

## 🔍 Monitoring & Analytics

### Error Tracking
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user analytics

### Performance Monitoring
- Core Web Vitals
- Lighthouse CI
- Bundle size monitoring

## 🧪 Testing in Production

### 1. Functionality Tests
- [ ] Contact form sends emails
- [ ] All navigation links work
- [ ] 3D animations load properly
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

### 2. Performance Tests
- [ ] Page load time < 3 seconds
- [ ] First Contentful Paint < 1.5 seconds
- [ ] Largest Contentful Paint < 2.5 seconds
- [ ] Cumulative Layout Shift < 0.1

### 3. SEO Tests
- [ ] Meta tags are present
- [ ] Open Graph tags work
- [ ] Structured data is valid
- [ ] Sitemap is accessible

## 🔄 Continuous Deployment

The GitHub Actions workflow automatically:
1. Runs tests on pull requests
2. Builds the project
3. Deploys to production on main branch

### Manual Deployment Commands

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod --dir=dist

# GitHub Pages (automatic via Actions)
git push origin main
```

## 🐛 Troubleshooting

### Common Issues

1. **Environment Variables Not Loading:**
   - Check variable names start with `VITE_`
   - Verify they're set in deployment platform
   - Restart build after adding variables

2. **3D Models Not Loading:**
   - Check asset paths are correct
   - Verify CORS headers for external assets
   - Test with smaller models first

3. **Contact Form Not Working:**
   - Verify EmailJS credentials
   - Check network requests in browser dev tools
   - Test with different email providers

### Debug Mode
Set `NODE_ENV=development` to enable debug logging.

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all environment variables are set
3. Test the build locally first
4. Check deployment platform logs

---

**🎉 Your portfolio is now production-ready!**
