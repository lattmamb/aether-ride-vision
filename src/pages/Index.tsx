import React from 'react';
import { UnityNavbar } from '@/components/unity/UnityNavbar';
import { UnityHero } from '@/components/unity/UnityHero';
import { PlatformCard } from '@/components/unity/PlatformCard';
import { EcosystemFlow } from '@/components/unity/EcosystemFlow';
import { CommunityImpact } from '@/components/unity/CommunityImpact';
import { NavigationDock } from '@/components/unity/NavigationDock';
import Footer from '@/components/Footer';
import { Users, Car, Camera, Compass, ShoppingBag, Briefcase, Music, Heart } from 'lucide-react';

const platforms = [
  {
    icon: Users,
    title: 'Unity Social',
    description: 'Connect with friends, share moments, and build your community in a seamless social experience.',
    path: '/social',
    gradient: 'unity-gradient-purple',
  },
  {
    icon: Car,
    title: 'Unity Rides',
    description: 'Book electric vehicles, autonomous rides, and explore sustainable transportation options.',
    path: '/vehicles',
    gradient: 'unity-gradient-cyan',
  },
  {
    icon: Camera,
    title: 'Unity Stories',
    description: 'Capture and share your moments with immersive short-form content and AR experiences.',
    path: '/stories',
    gradient: 'bg-gradient-to-br from-pink-500 to-purple-600',
  },
  {
    icon: Compass,
    title: 'Unity Discover',
    description: 'Explore personalized content, trending topics, and discover new experiences tailored for you.',
    path: '/discover',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
  },
  {
    icon: ShoppingBag,
    title: 'Unity Market',
    description: 'Shop, sell, and discover unique products in an integrated marketplace experience.',
    path: '/market',
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-600',
  },
  {
    icon: Briefcase,
    title: 'Unity Work',
    description: 'Find opportunities, showcase your skills, and build your professional network.',
    path: '/work',
    gradient: 'bg-gradient-to-br from-blue-600 to-indigo-700',
  },
  {
    icon: Music,
    title: 'Unity Beats',
    description: 'Stream music, create playlists, and immerse yourself in high-quality audio experiences.',
    path: '/beats',
    gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
  },
  {
    icon: Heart,
    title: 'Unity Connect',
    description: 'Meet new people, build meaningful connections, and expand your social circle.',
    path: '/connect',
    gradient: 'bg-gradient-to-br from-rose-500 to-pink-600',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-unity-dark">
      <UnityNavbar />
      
      <UnityHero />

      {/* Ecosystem Flow - New interconnectedness visualization */}
      <EcosystemFlow />

      {/* Community Impact - Real-world metrics */}
      <CommunityImpact />

      {/* Platforms Section */}
      <section className="relative py-24 bg-gradient-to-b from-unity-dark via-unity-dark-light to-unity-dark">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4">
              All Your Apps.{' '}
              <span className="bg-gradient-to-r from-unity-cyan to-unity-purple bg-clip-text text-transparent">
                One Platform.
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-inter">
              Experience the power of integration with dedicated platforms for every aspect of your digital life.
            </p>
          </div>

          {/* Platform Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <PlatformCard
                key={platform.title}
                icon={platform.icon}
                title={platform.title}
                description={platform.description}
                path={platform.path}
                gradient={platform.gradient}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-unity-dark-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Features */}
              <div>
                <h2 className="text-4xl font-space font-bold text-white mb-6">
                  Built for the
                  <br />
                  <span className="bg-gradient-to-r from-unity-cyan to-unity-purple bg-clip-text text-transparent">
                    Future of Mobile
                  </span>
                </h2>
                <p className="text-white/70 text-lg mb-8 font-inter">
                  Every detail crafted to perfection. Every interaction designed to delight. 
                  Experience the next generation of mobile applications.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Seamless Integration', description: 'All your favorite services in one place with unified navigation and cross-platform features.' },
                    { title: 'AI-Powered', description: 'Intelligent recommendations and personalized experiences powered by advanced AI.' },
                    { title: 'Secure & Private', description: 'Bank-level security with end-to-end encryption protecting your data.' },
                    { title: 'Always Connected', description: '24/7 real-time updates and synchronization across all your devices.' },
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 unity-gradient-cyan rounded-xl flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div>
                        <h3 className="text-white font-space font-semibold mb-1">{feature.title}</h3>
                        <p className="text-white/60 text-sm font-inter">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Visual showcase */}
              <div className="relative">
                <div className="relative liquid-glass rounded-3xl p-8 backdrop-blur-xl">
                  {/* Mock phone interface */}
                  <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                    {/* Status bar */}
                    <div className="bg-black px-6 py-3 flex items-center justify-between text-white text-xs">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-3 border border-white/50 rounded-sm" />
                        <div className="w-1 h-3 bg-white/50 rounded-sm" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-unity-dark p-4 space-y-3" style={{ height: '400px' }}>
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="liquid-glass rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 unity-gradient-cyan rounded-full" />
                            <div className="flex-1 space-y-1">
                              <div className="h-3 bg-white/20 rounded w-24" />
                              <div className="h-2 bg-white/10 rounded w-16" />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-2 bg-white/10 rounded w-full" />
                            <div className="h-2 bg-white/10 rounded w-3/4" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom navigation */}
                    <div className="bg-black/50 backdrop-blur-xl p-4">
                      <div className="flex items-center justify-around">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-8 h-8 rounded-lg ${i === 0 ? 'unity-gradient-cyan' : 'bg-white/10'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-unity-cyan/20 rounded-full blur-[80px]" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-unity-purple/20 rounded-full blur-[80px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <NavigationDock />
    </div>
  );
};

export default Index;
