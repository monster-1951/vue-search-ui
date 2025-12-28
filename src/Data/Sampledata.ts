import {ref} from 'vue'

export interface Doc {
    id:number
    title: string
    snippet: string
    date_modified: string
    type: "MP4" | "PDF" | "PPTX" | "DOCX" | "MP3"
    size: string
    expanded:boolean

}

export const data = ref<Doc[]>([
    {   id:1,
        title: "Bahubali:The Conclusion.mp4",
        snippet: "Sequel of Bahubali:The beginning", date_modified: "23-12-2025",
        size: "2.5GB",
        type: "MP4",
        expanded: false
    },
    {
        id:2,
        title: "The Fountainhead.pdf",
        snippet: "Book written by Ayn Rand",
        date_modified: "24-12-2025",
        size: "2.5MB",
        type: "PDF",
        expanded: false
    },
    {
        id:3,
        title: "Quarterly Business Review.pptx",
        snippet: "Q4 2025 performance analysis", date_modified: "20-12-2025",
        size: "45MB",
        type: "PPTX",
        expanded: false
    },
    {
        id:4,
        title: "Project Proposal.docx",
        snippet: "New marketing campaign proposal", date_modified: "22-12-2025",
        size: "3.2MB",
        type: "DOCX",
        expanded: false
    },
    {
        id:5,
        title: "Morning Motivation.mp3",
        snippet: "Daily inspirational podcast",
        date_modified: "25-12-2025",
        size: "85MB",
        type: "MP3",
        expanded: false
    },
    {
        id:6,
        title: "Product Launch Video.mp4",
        snippet: "New product demonstration",
        date_modified: "18-12-2025",
        size: "180MB",
        type: "MP4",
        expanded: false
    },
    {
        id:7,
        title: "Financial Report 2025.pdf",
        snippet: "Annual financial statements",
        date_modified: "15-12-2025",
        size: "5.3MB",
        type: "PDF",
        expanded: false
    },
    {
        id:8,
        title: "Team Building Workshop.pptx",
        snippet: "Employee engagement presentation",
        date_modified: "17-12-2025",
        size: "32MB",
        type: "PPTX",
        expanded: false
    },
    {
        id:9,
        title: "Meeting Minutes.docx",
        snippet: "December board meeting notes", date_modified: "19-12-2025",
        size: "1.8MB",
        type: "DOCX",
        expanded: false
    },
    {
        id:10,
        title: "Relaxing Piano Music.mp3",
        snippet: "Instrumental music for focus", date_modified: "24-12-2025",
        size: "120MB",
        type: "MP3",
        expanded: false
    },
    {
        id:11,
        title: "Tutorial Series Part 1.mp4",
        snippet: "Introduction to programming",
        date_modified: "12-12-2025",
        size: "950MB",
        type: "MP4",
        expanded: false
    },
    {
        id:12,
        title: "Research Paper.pdf",
        snippet: "AI ethics and implications",
        date_modified: "10-12-2025",
        size: "8.7MB",
        type: "PDF",
        expanded: false
    },
    {
        id:13,
        title: "Marketing Strategy.pptx",
        snippet: "2026 marketing plan overview", date_modified: "14-12-2025",
        size: "28MB",
        type: "PPTX",
        expanded: false
    },
    {
        id:14,
        title: "Employee Handbook.docx",
        snippet: "Company policies and guidelines", date_modified: "05-12-2025",
        size: "4.5MB",
        type: "DOCX",
        expanded: false
    },
    {
        id:15,
        title: "Jazz Classics Collection.mp3",
        snippet: "Best of jazz music",
        date_modified: "22-12-2025",
        size: "350MB",
        type: "MP3",
        expanded: false
    },
    { 
        id:16,
        title: "Vacation Memories.mp4", 
        snippet: "Holiday trip compilation", 
        date_modified: "08-12-2025", 
        size: "3.2GB", 
        type: "MP4" ,
        expanded: false
    },
    { 
        id:17,
        title: "Legal Contract Template.pdf", 
        snippet: "Standard service agreement", 
        date_modified: "03-12-2025", 
        size: "2.1MB", 
        type: "PDF",
        expanded: false
    },
    { 
        id:18,
        title: "Technology Trends 2026.pptx",
        snippet: "Future tech predictions", 
        date_modified: "01-12-2025", 
        size: "52MB", 
        type: "PPTX" ,
        expanded: false
    },
    { 
        id:19,
        title: "Resume Template.docx", 
        snippet: "Professional CV format", 
        date_modified: "25-11-2025", 
        size: "890KB", 
        type: "DOCX" ,
        expanded: false
    },
    { 
        id:20,
        title: "Language Learning Podcast.mp3", 
        snippet: "Spanish for beginners", 
        date_modified: "28-11-2025", 
        size: "95MB", 
        type: "MP3" ,
        expanded: false
    },
    { 
        id:21,
        title: "Conference Recording.mp4", 
        snippet: "Annual tech conference highlights", date_modified: "30-11-2025",
        size: "4.1GB", 
        type: "MP4",
        expanded: false
    },
    { 
        id:22,
        title: "User Manual.pdf", 
        snippet: "Product installation guide", 
        date_modified: "27-11-2025", 
        size: "3.8MB", 
        type: "PDF",
        expanded: false
    },
    { 
        id:23,
        title: "Sales Pitch Deck.pptx", 
        snippet: "Client presentation template", date_modified: "25-11-2025", 
        size: "24MB", 
        type: "PPTX",
        expanded: false
    },
    { 
        id:24,
        title: "Business Plan.docx", 
        snippet: "Startup funding proposal", 
        date_modified: "22-11-2025", 
        size: "6.2MB", 
        type: "DOCX" ,
        expanded: false
    },
    { 
        id:25,
        title: "Nature Sounds.mp3", 
        snippet: "Rain and forest ambience", 
        date_modified: "20-11-2025", 
        size: "65MB", 
        type: "MP3" ,
        expanded: false
    }
])