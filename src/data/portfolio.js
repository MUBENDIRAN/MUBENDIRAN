export const projects = [
  {
    id: 1, title: 'CloudShare',
    desc: 'Serverless file-sharing platform with secure uploads and time-limited access links. Built with AWS-managed services for zero-server operations.',
    img: '/images/cloudshare(thumbnail).png', alt: 'CloudShare',
    tags: [
      { label: 'AWS S3', color: '#f97316' },
      { label: 'Lambda', color: '#f59e0b' },
      { label: 'DynamoDB', color: '#3b82f6' },
      { label: 'Serverless', color: '#22d3ee' },
    ],
    github: 'https://github.com/MUBENDIRAN/CloudShare',
    demo: 'https://youtu.be/NGL95asKHoM',
    featured: true,
  },
  {
    id: 2, title: 'Cloud Insight AI',
    desc: 'Containerized cloud monitoring service that analyzes cost & log data, generates structured reports, deployed on AWS ECS via GitHub Actions CI/CD.',
    img: '/images/ci-ai(thumbnail).png', alt: 'Cloud Insight AI',
    tags: [
      { label: 'Python', color: '#facc15' },
      { label: 'Docker', color: '#3b82f6' },
      { label: 'AWS ECS', color: '#f97316' },
      { label: 'CI/CD', color: '#10b981' },
    ],
    github: 'https://github.com/MUBENDIRAN/Cloud-Insight-AI',
    demo: 'https://youtu.be/7EAaSQkCl3Q',
    featured: true,
  },
  {
    id: 3, title: "Mube's Chatbot",
    desc: 'Real-time RAG-based AI chat system with WebSocket streaming, persistent multi-chat history, and multi-document Q&A using FAISS + Groq LLM.',
    img: '/images/mube-chat-bot-logo.jpeg', alt: "Mube's Chatbot",
    tags: [
      { label: 'FastAPI', color: '#10b981' },
      { label: 'RAG', color: '#8b5cf6' },
      { label: 'FAISS', color: '#3b82f6' },
      { label: 'Groq', color: '#f59e0b' },
    ],
    github: 'https://github.com/MUBENDIRAN/Mube-ChatBot',
    demo: 'https://youtu.be/FQVB1vDsxVg',
    featured: true,
  },
  {
    id: 4, title: 'SitePilot',
    desc: 'MCP-powered AI agent for Telegram-based website operations. Controls deployment, file management, and site health via natural language commands.',
    img: '/images/sitepilot(workflow).png', alt: 'SitePilot',
    tags: [
      { label: 'Python', color: '#facc15' },
      { label: 'MCP', color: '#3b82f6' },
      { label: 'LLM', color: '#8b5cf6' },
      { label: 'Telegram', color: '#22d3ee' },
    ],
    github: 'https://github.com/MUBENDIRAN/SitePilot',
    demo: 'https://youtu.be/wWsGnYfuECk',
  },
  {
    id: 5, title: 'JustPost',
    desc: 'Full-stack social media platform with FastAPI backend, JWT authentication, PostgreSQL storage, and media-based user interactions.',
    img: '/images/justpost(logo).jpeg', alt: 'JustPost',
    tags: [
      { label: 'FastAPI', color: '#10b981' },
      { label: 'PostgreSQL', color: '#3b82f6' },
      { label: 'JWT', color: '#ec4899' },
      { label: 'Streamlit', color: '#8b5cf6' },
    ],
    github: 'https://github.com/MUBENDIRAN/JustPost',
    demo: 'https://youtu.be/v0czx0QKHss',
  },
  {
    id: 6, title: 'ShopSense',
    desc: 'RFID navigation system for the visually impaired — enables product identification with audio feedback. Patent Application: 202441017518.',
    img: '/images/shopsense(pro).jpg', alt: 'ShopSense',
    tags: [
      { label: 'RFID', color: '#3b82f6' },
      { label: 'Arduino', color: '#10b981' },
      { label: '🏛 Patented', color: '#f59e0b' },
    ],
    github: 'https://github.com/MUBENDIRAN/ShopSense',
    demo: 'https://youtu.be/Ou_bG1i3ybU?si=43ZudmzWYoyDtpPT',
  },
]

export const skills = [
  { icon: '🐍', name: 'Python',       tag: 'primary lang',    color: '#facc15' },
  { icon: '⚡', name: 'FastAPI',      tag: 'backend',         color: '#10b981' },
  { icon: '🧠', name: 'LangChain',    tag: 'ai framework',    color: '#8b5cf6' },
  { icon: '🔍', name: 'RAG / FAISS',  tag: 'retrieval ai',    color: '#6366f1' },
  { icon: '🤗', name: 'Hugging Face', tag: 'ml models',       color: '#f97316' },
  { icon: '☁️', name: 'AWS',          tag: 'cloud platform',  color: '#f97316' },
  { icon: '🐳', name: 'Docker',       tag: 'containers',      color: '#3b82f6' },
  { icon: '🐧', name: 'Linux',        tag: 'systems',         color: '#22d3ee' },
  { icon: '🗄️', name: 'SQL',          tag: 'database',        color: '#22d3ee' },
  { icon: '🔀', name: 'Git / GitHub', tag: 'version control', color: '#f97316' },
  { icon: '📜', name: 'Bash',         tag: 'scripting',       color: '#10b981' },
  { icon: '🌐', name: 'WebSockets',   tag: 'real-time',       color: '#8b5cf6' },
]

export const certifications = [
  { img: '/images/AWS Cloud Practitioner.png', alt: 'AWS Cloud Practitioner Essentials' },
  { img: '/images/docker udemy.jpg',            alt: 'Docker — Udemy' },
  { img: '/images/Github Actions.png',          alt: 'GitHub Actions' },
]

export const awsServices = ['S3','Lambda','DynamoDB','API Gateway','ECS','ECR','IAM','CloudFront','Comprehend']
