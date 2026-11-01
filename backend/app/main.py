from fastapi import FastAPI

app = FastAPI(
    title="Roastify API",
    description="AI-powered Spotify music taste roasting application",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to Roastify API!",
        "status": "running"
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "application": "Roastify"
    }