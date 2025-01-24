import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faYoutube,
  faGithub,
  faXTwitter, 
  faTiktok,
  faDiscord,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';

// Remove Navbar and NavLink components as they're now in their own file

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="https://giocoliere.dev/assets/creepercraft/lake.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ffd700] to-[#ffed4a]">
          404
        </h1>
        <p className="text-2xl mb-8">Looks like you got lost in the mines...</p>
        <Link 
          to="/" 
          className="button-404"
        >
          Return to Surface
        </Link>
      </div>
    </div>
  );
}

function MainContent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative text-white">
      <Navbar />
      {/* Hero Section with Video Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          >
            <source src="https://cdn.coverr.co/videos/coverr-minecraft-world-2764/1080p.mp4" type="video/mp4" />
          </video>
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in space-y-12">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ffd700] to-[#ffed4a]">
              Creepercraft
            </h1>
            
            <button className="coming-soon-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span> Coming Soon
            </button>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-12 flex-wrap">
              <SocialLink
                href="https://creeperhub.net"
                icon={<FontAwesomeIcon icon={faGlobe} className="text-xl" />}
              />
              <SocialLink
                href="https://discord.gg/Ttyg95fszY"
                icon={<FontAwesomeIcon icon={faDiscord} className="text-xl" />}
              />
              <SocialLink
                href="https://github.com/creepercraftoff"
                icon={<FontAwesomeIcon icon={faGithub} className="text-xl" />}
              />
              <SocialLink
                href="https://twitter.com/creepercraftoff"
                icon={<FontAwesomeIcon icon={faXTwitter} className="text-xl" />}
              />
              <SocialLink
                href="https://youtube.com/@creepercraftoff"
                icon={<FontAwesomeIcon icon={faYoutube} className="text-xl" />}
              />
              <SocialLink
                href="https://twitch.tv/creepercraftoff"
                icon={<FontAwesomeIcon icon={faTwitch} className="text-xl" />}
              />
              <SocialLink
                href="https://tiktok.com/@creepercraftoff"
                icon={<FontAwesomeIcon icon={faTiktok} className="text-xl" />}
              />
            </div>
          </div>

          
        </div>
      </div>

      {/* Features Preview */}
      <div className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWE1NjFndDcwbXVrNGJoamNqOHhyczMzZXltaGliMXNobWNoN3E4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjHJDWnOmPTcd1YY/giphy.gif?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.3)',
          }}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3)' }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-minecraft-cave-exploration-5544/1080p.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <FeaturePreview
                number="01"
                title="Custom Game Modes"
                description="Experience Minecraft like never before with our unique, custom-developed game modes that push the boundaries of what's possible."
              />
              <FeaturePreview
                number="02"
                title="Community First"
                description="Join a thriving community of passionate players. Make friends, build alliances, and create lasting memories together."
              />
              <FeaturePreview
                number="03"
                title="No Pay-to-Win Features"
                description="The Creepercraft network is planned to be free for everyone: that's right, no pay-to-win mechanics or unfair advantages. Just pure, unadulterated fun."
              />
              <FeaturePreview
                number="04"
                title="Accessible and Competitive"
                description="Enjoy the server by your Bedrock (Cross-Platform), Premium, or even Free account. We believe in a level playing field for all players. And we're always looking for ways to improve and expand our server."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Creepercraft. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Not affiliated with Mojang AB or Microsoft.</p>
          <a 
            href="https://creeperhub.net" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="creeperhub-link"
          >
            by CreeperHUB with ❤️
          </a>
        </div>
      </footer>
    </div>
  );
}

// Add new page components
function StatusRedirect() {
  useEffect(() => {
    window.location.href = 'https://status.creepercraft.net';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Status page...</p>
    </div>
  );
}

// Add Discord redirect component
function DiscordRedirect() {
  useEffect(() => {
    window.location.href = 'https://discord.gg/Ttyg95fszY';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Discord...</p>
    </div>
  );
}

// Update the Router configuration in App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/status" element={<StatusRedirect />} />
        <Route path="/discord" element={<DiscordRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-[#ffd700]/20 backdrop-blur-sm border border-white/10 hover:border-[#ffd700]/50 transition-all transform hover:scale-110 hover:rotate-6"
    >
      {icon}
    </a>
  );
}

function FeaturePreview({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-left hover:border-[#ffd700]/50 transition-colors">
      <div className="text-[#ffd700] mb-4 text-sm font-mono">{number}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;