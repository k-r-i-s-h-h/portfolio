import os
import resend
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(root_path="/api")

# Configure CORS
origins = [
    "http://localhost:5173",  # Vite default port
    "http://127.0.0.1:5173",
    "https://portfolio-weld-eight-66.vercel.app", # Production URL
    "https://portfolio-git-main-krishs-projects-0a3913e1.vercel.app" # Preview URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all for simplicity in this context, or restrict to origins list
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Project(BaseModel):
    id: int
    title: str
    description: str
    tags: List[str]
    imageUrl: str
    link: str

# Mock Data
projects_db = [
    Project(
        id=1,
        title="Project Alpha",
        description="A high-performance financial dashboard built with React and D3.js.",
        tags=["React", "D3.js", "TypeScript"],
        imageUrl="https://via.placeholder.com/600x400/1a1a1a/8844ff?text=Project+Alpha",
        link="#"
    ),
    Project(
        id=2,
        title="Project Beta",
        description="AI-powered image generation tool using Stable Diffusion.",
        tags=["Python", "FastAPI", "PyTorch"],
        imageUrl="https://via.placeholder.com/600x400/1a1a1a/8844ff?text=Project+Beta",
        link="#"
    ),
    Project(
        id=3,
        title="Project Gamma",
        description="Real-time chat application with end-to-end encryption.",
        tags=["Go", "WebSockets", "Redis"],
        imageUrl="https://via.placeholder.com/600x400/1a1a1a/8844ff?text=Project+Gamma",
        link="#"
    )
]

@app.get("/")
def read_root():
    return {"message": "Welcome to the Portfolio API"}

@app.get("/projects", response_model=List[Project])
def get_projects():
    return projects_db

class ContactForm(BaseModel):
    name: str
    email: str
    message: str
    subject: Optional[str] = "Portfolio Contact"

@app.post("/contact")
def submit_contact(form: ContactForm):
    api_key = os.environ.get("RESEND_API_KEY")
    if not api_key:
        print("RESEND_API_KEY not set")
        return {"message": "Email service not configured (API Key missing)", "data": form}

    resend.api_key = api_key

    try:
        r = resend.Emails.send({
            "from": "Portfolio Contact <onboarding@resend.dev>", # Use Resend's testing domain by default
            "to": "girishkrish063@gmail.com", # Hardcoded owner email for now
            "subject": f"New Message from {form.name}: {form.subject}",
            "html": f"""
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Message:</strong></p>
            <p>{form.message}</p>
            """
        })
        return {"message": "Message sent successfully!", "id": r.get('id')}
    except Exception as e:
        print(f"Failed to send email: {e}")
        raise HTTPException(status_code=500, detail=str(e))
