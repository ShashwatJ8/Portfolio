# Shashwat Jain Portfolio Website

## Overview
A professional portfolio website showcasing Shashwat Jain's experience as a Senior Software Developer with 8+ years of expertise in React, Node.js, and Cloud Technologies.

## Features
- **Hero Section**: Full-screen introduction with professional background image, name, title, and call-to-action buttons
- **About Section**: Professional summary with experience statistics
- **Experience Timeline**: Alternating timeline layout showcasing 5 positions with achievements
- **Skills Section**: Categorized technical skills (Languages, Frameworks, DevOps, Cloud)
- **Education Section**: Academic background including Masters from UMBC
- **Certifications Section**: Professional certifications including RPA credentials
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Resume Download**: PDF resume download functionality
- **Responsive Design**: Optimized for desktop, tablet, and mobile

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js
- **Icons**: Lucide React, React Icons

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── navigation.tsx      # Header navigation with smooth scroll
│   │   ├── theme-toggle.tsx    # Dark/light mode toggle
│   │   └── ui/                 # Shadcn UI components
│   ├── pages/
│   │   └── home.tsx            # Main portfolio page with all sections
│   └── App.tsx                 # Root application component
server/
├── routes.ts                   # API routes (resume download endpoint)
└── index.ts                    # Express server setup
```

## API Endpoints
- `GET /api/resume` - Downloads the resume PDF file

## Development
The application runs on port 5000 with hot-reload enabled for development.

## Recent Changes
- December 2024: Initial portfolio website creation
- Hero section with workspace background image and dark wash overlay
- Experience timeline with alternating card layout
- Complete responsive design implementation
- Theme toggle functionality
- Resume download endpoint
