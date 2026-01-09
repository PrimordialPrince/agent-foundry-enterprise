import { Mail } from "lucide-react";

export default function WhappOHeroIllustration() {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden">
      {/* Gradient overlay on left for text readability */}
      <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent z-10" />
      
      {/* Illustration container - positioned to the right */}
      <div className="absolute inset-0 flex items-center justify-end pr-12 lg:pr-24">
        <div className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]">
          
          {/* Chat bubble - Dark Blue (top left) */}
          <div 
            className="absolute top-8 left-0 bg-[#1e3a5f] rounded-2xl rounded-bl-sm p-4 shadow-lg w-48 animate-float-slow"
            style={{ animationDelay: '0s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/30 rounded w-full" />
              <div className="h-2 bg-white/30 rounded w-3/4" />
              <div className="h-2 bg-white/30 rounded w-1/2" />
            </div>
          </div>

          {/* Chat bubble - Light Blue (top right) */}
          <div 
            className="absolute top-0 right-8 bg-[#60a5fa] rounded-2xl rounded-br-sm p-4 shadow-lg w-44 animate-float-medium"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/40 rounded w-full" />
              <div className="h-2 bg-white/40 rounded w-2/3" />
            </div>
          </div>

          {/* Email card - Pink (middle) */}
          <div 
            className="absolute top-32 right-0 bg-[#f472b6] rounded-xl p-4 shadow-lg w-56 animate-float-fast"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-4 w-4 text-white/80" />
              <div className="h-2 bg-white/40 rounded w-20" />
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-white/30 rounded w-full" />
              <div className="h-2 bg-white/30 rounded w-5/6" />
              <div className="h-2 bg-white/30 rounded w-4/6" />
            </div>
          </div>

          {/* Chat bubble - Teal (middle left) */}
          <div 
            className="absolute top-48 left-12 bg-[#14b8a6] rounded-2xl rounded-bl-sm p-4 shadow-lg w-40 animate-float-medium"
            style={{ animationDelay: '1.5s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/40 rounded w-full" />
              <div className="h-2 bg-white/40 rounded w-1/2" />
            </div>
          </div>

          {/* Email card - Light Purple (bottom right) */}
          <div 
            className="absolute bottom-24 right-12 bg-[#a78bfa] rounded-xl p-4 shadow-lg w-52 animate-float-slow"
            style={{ animationDelay: '2s' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-4 w-4 text-white/80" />
              <div className="h-2 bg-white/40 rounded w-16" />
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-white/30 rounded w-full" />
              <div className="h-2 bg-white/30 rounded w-3/4" />
            </div>
          </div>

          {/* Chat bubble - Dark Blue (bottom left) */}
          <div 
            className="absolute bottom-32 left-0 bg-[#1e40af] rounded-2xl rounded-br-sm p-4 shadow-lg w-36 animate-float-fast"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/30 rounded w-full" />
              <div className="h-2 bg-white/30 rounded w-2/3" />
            </div>
          </div>

          {/* Chat bubble - Pink (bottom) */}
          <div 
            className="absolute bottom-8 left-20 bg-[#ec4899] rounded-2xl rounded-bl-sm p-3 shadow-lg w-32 animate-float-medium"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/40 rounded w-full" />
              <div className="h-2 bg-white/40 rounded w-1/2" />
            </div>
          </div>

          {/* Small floating chat bubble - Light Blue */}
          <div 
            className="absolute top-56 right-48 bg-[#38bdf8] rounded-xl rounded-br-sm p-3 shadow-md w-28 animate-float-slow"
            style={{ animationDelay: '1.8s' }}
          >
            <div className="space-y-1.5">
              <div className="h-1.5 bg-white/40 rounded w-full" />
              <div className="h-1.5 bg-white/40 rounded w-2/3" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}