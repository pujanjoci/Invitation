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

      <main className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto">
          
          {/* Invitation Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="size-4 text-rose-400/70" />
              <p className="text-rose-500/80 text-xs tracking-[0.3em] uppercase font-light font-sans">
                Together with their families
              </p>
            </div>
            <h2 className="font-serif text-stone-600 text-lg font-light italic tracking-wide leading-relaxed">
              Have the honour of inviting you to celebrate their wedding
            </h2>
          </header>

          {/* Couple Names */}
          <div className="text-center mb-14">
            <div className="space-y-8">
              <h1 className="font-script text-5xl md:text-6xl text-stone-800 leading-none">
                Sudha Joshi
              </h1>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-stone-300/40"></div>
                <Heart className="size-5 text-rose-300/80 fill-rose-300/20" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-stone-300/40"></div>
              </div>

              <h1 className="font-script text-5xl md:text-6xl text-stone-800 leading-none">
                Dilip Shrestha
              </h1>
            </div>
          </div>

          {/* Date Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 text-stone-600 mb-4">
              <Calendar className="size-5 text-rose-400/70" />
              <p className="font-serif text-xl tracking-wide font-light">
                Saturday, December 25th, 2024
              </p>
            </div>
            <div className="section-divider"></div>
          </div>

          {/* Event Details Card */}
          <div className="bg-white/90 backdrop-blur-sm border border-stone-200/70 rounded-2xl p-8 md:p-10 shadow-lg shadow-stone-200/30 hover:shadow-xl hover:shadow-stone-200/40 transition-shadow duration-300 mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Time */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-rose-50/50 border border-rose-100/50 mb-1">
                  <Clock className="size-6 text-rose-500/80" />
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-stone-500/70 font-medium font-sans mb-2">
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
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-amber-50/50 border border-amber-100/50 mb-1">
                  <MapPin className="size-6 text-amber-500/80" />
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-stone-500/70 font-medium font-sans mb-2">
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
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-stone-50/50 border border-stone-200/50 mb-1">
                    <Shirt className="size-6 text-stone-500/70" />
                </div>
                <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-stone-500/70 font-medium font-sans mb-2">
                    Attire
                    </h3>
                    <p className="font-serif text-xl text-stone-800 font-light">
                    Formal Attire
                    </p>
                </div>
             </div>
            </div>
          </div>

          {/* RSVP Section */}
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                <a 
                  href="/assets/invitation-card.png"
                  download="Wedding-Invitation-Sudha-Dilip.png"
                  className="px-8 py-3.5 bg-white hover:bg-stone-50 text-stone-700 font-serif text-lg tracking-wide rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 min-w-[180px] border border-stone-300/80 hover:border-stone-400/50 text-center"
                >
                  Download Invitation
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="pt-10 border-t border-stone-200/50">
            </div>
          </div>

          {/* Closing Message */}
          <footer className="mt-20 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-stone-300/30 to-transparent"></div>
            </div>
            <p className="font-serif text-stone-500/80 text-lg italic font-light leading-relaxed">
              With love and gratitude, we look forward to celebrating with you
            </p>
          </footer>

        </div>
      </main>


    </div>
  );
}