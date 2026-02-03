'use client';

import { Calendar, Clock, MapPin, Heart, Users, Mail, Phone, Shirt } from 'lucide-react';

export default function WeddingInvitation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-rose-50/5 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239c6d6d'/%3E%3C/svg%3E")`,
          backgroundSize: '300px'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-rose-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/3 translate-y-1/3 bg-amber-100/10 rounded-full blur-3xl"></div>

      {/* FULL SCREEN HERO SECTION */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          
          {/* Invitation Header */}
          <header className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Users className="size-4 text-rose-400/60" />
              <p className="text-rose-500/70 text-xs tracking-[0.35em] uppercase font-light">
                Together with their families
              </p>
            </div>
            <h2 className="font-serif text-stone-600/90 text-xl font-light italic tracking-wide">
              Have the honour of inviting you to celebrate their wedding
            </h2>
          </header>

          {/* Couple Names */}
          <div className="space-y-10">
            <h1 className="font-script text-6xl md:text-7xl text-stone-800 leading-none">
              Sudha Joshi
            </h1>
            
            <div className="flex items-center justify-center gap-5">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-stone-300/50"></div>
              <Heart className="size-6 text-rose-300/80 fill-rose-300/20" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-stone-300/50"></div>
            </div>

            <h1 className="font-script text-6xl md:text-7xl text-stone-800 leading-none">
              Dilip Shrestha
            </h1>
          </div>

          {/* Date */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center gap-3 text-stone-600">
              <Calendar className="size-5 text-rose-400/60" />
              <p className="font-serif text-2xl tracking-wide font-light">
                Saturday, March 14, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS SECTION - Below fold */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Event Details Card */}
          <div className="bg-white/90 backdrop-blur-sm border border-stone-200/70 rounded-2xl p-10 md:p-14 shadow-lg shadow-stone-200/30">
            <div className="grid md:grid-cols-3 gap-10">
              
              {/* Time */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-rose-50/50 border border-rose-100/50 mb-2">
                  <Clock className="size-6 text-rose-500/80" />
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-stone-500/70 font-medium mb-3">
                    Time
                  </h3>
                  <p className="font-serif text-xl text-stone-800 font-light">
                    Five o'clock
                  </p>
                  <p className="font-serif text-stone-500/90 text-sm mt-1">
                    in the evening
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-amber-50/50 border border-amber-100/50 mb-2">
                  <MapPin className="size-6 text-amber-500/80" />
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-stone-500/70 font-medium mb-3">
                    Venue
                  </h3>
                  <p className="font-serif text-xl text-stone-800 font-light">
                    Imperial Banquet
                  </p>
                  <div className="mt-2 space-y-1">
                    <p className="font-serif text-stone-500/90 text-sm">
                      Sallaghari, Bhaktapur
                    </p>
                    <p className="font-serif text-stone-500/90 text-sm">
                      Nepal
                    </p>
                  </div>
                </div>
              </div>

              {/* Attire */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-stone-50/50 border border-stone-200/50 mb-2">
                  <Shirt className="size-6 text-stone-500/70" />
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-stone-500/70 font-medium mb-3">
                    Attire
                  </h3>
                  <p className="font-serif text-xl text-stone-800 font-light">
                    Formal Attire
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <a 
              href="/assets/invitation-card.png"
              download="Wedding-Invitation-Sudha-Dilip.png"
              className="inline-block px-10 py-4 bg-white hover:bg-stone-50 text-stone-700 font-serif text-lg tracking-wide rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 border border-stone-300/80 hover:border-stone-400/50 shadow-md hover:shadow-lg"
            >
              Download Invitation
            </a>
          </div>

          {/* Clean Footer */}
          <footer className="text-center pt-16 pb-8">
            <div className="space-y-6">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-stone-300/30 to-transparent mx-auto"></div>
              
              <p className="font-serif text-stone-500/80 text-lg italic font-light leading-relaxed">
                With love and gratitude, we look forward to celebrating with you
              </p>
              
              <div className="pt-6">
                <p className="font-script text-2xl text-stone-400/60">
                  Sudha & Dilip
                </p>
                <p className="font-sans text-xs tracking-wider text-stone-400/50 mt-2">
                  March 14 (Falgun 30), 2026
                </p>
              </div>
            </div>
          </footer>

        </div>
      </section>

    </div>
  );
}