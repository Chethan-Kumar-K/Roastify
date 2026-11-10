from fastapi import FastAPI
from pydantic import BaseModel
import random

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

class RoastResponse(BaseModel):
    title: str
    roast: str
    verdict: str


@app.get("/api/roast", response_model=RoastResponse)
def get_roast():
    roasts = [
        {
            "title": "Your music taste needs supervision.",
            "roast": (
                "You have somehow managed to turn your Spotify library into "
                "an emotional rollercoaster with absolutely no seatbelts. "
                "One minute you're listening to heartbreak songs, and the next "
                "you're acting like the main character in a movie nobody asked for."
            ),
            "verdict": "Honestly, we're not judging... okay, we are. 💀",
        },
        {
            "title": "Spotify is genuinely concerned.",
            "roast": (
                "Your playlist jumps between genres so aggressively that even "
                "the recommendation algorithm has started questioning its career choices."
            ),
            "verdict": "Somewhere, an algorithm is asking for therapy. 💀",
        },
        {
            "title": "This playlist has commitment issues.",
            "roast": (
                "You listen to one artist for three days straight and then "
                "abandon them like they personally offended you."
            ),
            "verdict": "Your Spotify history needs emotional stability. 🔥",
        },
        {
            "title": "Main character syndrome detected.",
            "roast": (
                "Half your songs sound like you're dramatically staring out of "
                "a car window, even though you're probably just going to college."
            ),
            "verdict": "The imaginary movie budget has been rejected. 🎬💀",
        },
    ]

    return random.choice(roasts)