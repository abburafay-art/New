
import React from 'react';
import { Tool, Project, Skill } from './types';

export const PERSONAL_DETAILS = {
  name: "Abu Rafay",
  degree: "B.Com (Computers)",
  college: "R.G. Kedia College of Commerce",
  email: "abu.rafay@example.com", // Placeholder
  phone: "+91-XXXXXXXXXX", // Placeholder
  github: "github.com/aburafay", // Placeholder
  about: "I am a confident and self-motivated B.Com (Computers) graduate with a strong interest in IT workflows. While I am at the beginning of my technical journey, I have a positive mindset and a willingness to learn. My projects demonstrate my ability to adapt to modern tools like AI assistants to solve problems effectively."
};

export const SOFT_SKILLS: Skill[] = [
  { name: "Strong Work Ethic", description: "Consistently delivering high-quality work with dedication." },
  { name: "Interpersonal Skills", description: "Effective communicator and a collaborative team player." },
  { name: "Goal-Oriented", description: "Focused on achieving measurable outcomes and milestones." },
  { name: "Reliability", description: "Dependable in meeting deadlines and fulfilling commitments." },
  { name: "Time Management", description: "Prioritizing tasks efficiently to optimize productivity." },
  { name: "MS Office Proficiency", description: "Experienced in Excel, Word, and PowerPoint for business needs." }
];

export const TOOLS: Tool[] = [
  { name: "Git", category: "Version Control", proficiency: "Proficient" },
  { name: "GitHub", category: "Collaboration", proficiency: "Proficient" },
  { name: "Replit", category: "Development", proficiency: "Familiar" },
  { name: "Expo", category: "Mobile Dev", proficiency: "Familiar" },
  { name: "Android Studio (Basic)", category: "Mobile Dev", proficiency: "Familiar" },
  { name: "Antigravity", category: "Modern Tooling", proficiency: "Familiar" },
  { name: "Dyad", category: "Modern Tooling", proficiency: "Familiar" },
  { name: "Lovable", category: "AI Tooling", proficiency: "Familiar" }
];

export const PROJECTS: Project[] = [
  {
    title: "Personal Portfolio Website",
    description: "A clean, responsive portfolio showcasing my background in commerce and my transition into technology, built using modern web standards.",
    tags: ["React", "Tailwind CSS", "Vite"]
  },
  {
    title: "Basic Form & UI Layouts",
    description: "A collection of user interface components focusing on clean data entry forms and intuitive layout structures for web applications.",
    tags: ["HTML", "CSS", "UI/UX"]
  },
  {
    title: "AI-Assisted Content Exploration",
    description: "Research and practical implementation of AI tools to organize information and generate structured data for academic and professional use.",
    tags: ["AI Tools", "Research", "Prompt Engineering"]
  }
];
