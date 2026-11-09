import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { Music, Skull, Zap } from 'lucide-react'

function App() {
  const heroRef = useRef<HTMLElement>(null)
  const roastRef = useRef<HTMLDivElement>(null)

  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showRoast, setShowRoast] = useState(false)

  const startRoast = () => {
    setShowRoast(false)
    setIsAnalyzing(true)

    setTimeout(() => {
      setIsAnalyzing(false)
      setShowRoast(true)
    }, 3000)
  }

  useEffect(() => {
    if (!heroRef.current)
      return

    gsap.fromTo(
      heroRef.current.children,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.15,
        ease: 'power3.out',
      }
    )
  }, [])

  useEffect(() => {
    if (showRoast && roastRef.current) {
      gsap.fromTo(
        roastRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }
      )
    }
  }, [showRoast])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2">
          <Skull className="h-8 w-8 text-green-400" />

          <span className="text-2xl font-black tracking-tight">
            ROASTIFY
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#how-it-works"
            className="hidden text-sm text-zinc-400 transition hover:text-white md:block"
          >
            How it works
          </a>

          <a
            href="#about"
            className="hidden text-sm text-zinc-400 transition hover:text-white md:block"
          >
            About
          </a>

          <a
            href="#roast"
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition hover:scale-105"
          >
            Get Roasted 💀
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="roast"
        ref={heroRef}
        className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center"
      >
        <div className="mb-6 flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
          <Zap className="h-4 w-4 text-green-400" />
          Your music taste is about to be judged
        </div>

        <h1 className="max-w-5xl text-6xl font-black leading-none tracking-tight md:text-8xl">
          YOUR MUSIC TASTE
          <br />

          <span className="text-green-400">
            DESERVES A ROAST.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
          Connect your Spotify account, let Roastify analyze your
          questionable music choices, and prepare to be absolutely destroyed.
        </p>

        <button
          onClick={startRoast}
          disabled={isAnalyzing}
          className="mt-10 flex items-center gap-3 rounded-full bg-green-400 px-7 py-4 font-bold text-black shadow-lg shadow-green-500/20 transition duration-300 hover:scale-105 hover:bg-green-300 hover:shadow-green-400/40 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Music className="h-5 w-5" />

          {isAnalyzing
            ? 'Analyzing...'
            : showRoast
              ? 'Roast Me Again 🔥'
              : 'Connect Spotify'}
        </button>
        {isAnalyzing && (
          <div className="mt-6 text-sm text-green-400">
            🎧 Analyzing your questionable music taste...
          </div>
        )}
        {showRoast && (
          <div
            ref={roastRef}
            className="mt-10 max-w-2xl rounded-3xl border border-green-500/20 bg-zinc-900/80 p-8 text-left shadow-2xl shadow-green-500/10 backdrop-blur"
          >
            <div className="mb-6 flex items-center gap-3">
              <Skull className="h-7 w-7 text-green-400" />

              <div>
                <p className="text-sm font-bold tracking-widest text-green-400">
                  ROASTIFY VERDICT
                </p>

                <h2 className="text-2xl font-black">
                  Your music taste needs supervision.
                </h2>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-zinc-300">
              You have somehow managed to turn your Spotify library into an emotional
              rollercoaster with absolutely no seatbelts. One minute you're listening
              to heartbreak songs, and the next you're acting like the main character
              in a movie nobody asked for.
            </p>

            <p className="mt-6 text-zinc-400">
              Honestly, we're not judging...
              <span className="font-bold text-green-400"> okay, we are.</span> 💀
            </p>
          </div>
        )}

        <p className="mt-6 text-sm text-zinc-600">
          No music will be played. Only your dignity will be destroyed. 💀
        </p>
      </section>
    </main>
  )
}

export default App