from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:5173",  # Vite default port
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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

@app.post("/contact")
def submit_contact(form: ContactForm):
    # In a real app, this would send an email or save to DB
    print(f"Received contact form: {form}")
    return {"message": "Message received successfully!", "data": form}
