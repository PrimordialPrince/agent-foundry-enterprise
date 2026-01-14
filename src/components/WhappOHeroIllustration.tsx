import { Mail, MessageCircle } from "lucide-react";

export default function WhappOHeroIllustration() {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden">
      {/* Gradient overlay on left for text readability */}
      <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent z-10" />
      
      {/* Illustration container - positioned to the right */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-16">
        <div className="relative w-[600px] h-[600px] lg:w-[750px] lg:h-[700px]">
          
          {/* Chat bubble - Dark Blue (top left) */}
          <div 
            className="absolute top-4 left-8 bg-[#1e3a5f] rounded-2xl rounded-bl-sm p-4 shadow-lg w-44 animate-float-slow"
            style={{ animationDelay: '0s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/30 rounded w-full" />
              <div className="h-2 bg-white/30 rounded w-3/4" />
              <div className="h-2 bg-white/30 rounded w-1/2" />
            </div>
          </div>

          {/* Small chat - Indigo (top) */}
          <div 
            className="absolute top-2 left-56 bg-[#4f46e5] rounded-xl rounded-br-sm p-2.5 shadow-md w-24 animate-float-fast"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="space-y-1.5">
              <div className="h-1.5 bg-white/40 rounded w-full" />
              <div className="h-1.5 bg-white/40 rounded w-1/2" />
            </div>
          </div>

          {/* Chat bubble - Light Blue (top right) */}
          <div 
            className="absolute top-0 right-16 bg-[#60a5fa] rounded-2xl rounded-br-sm p-4 shadow-lg w-40 animate-float-medium"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/40 rounded w-full" />
              <div className="h-2 bg-white/40 rounded w-2/3" />
            </div>
          </div>

          {/* Tiny bubble - Rose (top far right) */}
          <div 
            className="absolute top-8 right-0 bg-[#fb7185] rounded-lg rounded-bl-sm p-2 shadow-md w-20 animate-float-slow"
            style={{ animationDelay: '2.2s' }}
          >
            <div className="h-1.5 bg-white/40 rounded w-full" />
          </div>

          {/* Email card - Pink (middle right) */}
          <div 
            className="absolute top-28 right-4 bg-[#f472b6] rounded-xl p-4 shadow-lg w-52 animate-float-fast"
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

          {/* Chat bubble - Indigo (middle top) */}
          <div 
            className="absolute top-24 left-0 bg-[#818cf8] rounded-2xl rounded-br-sm p-3 shadow-lg w-32 animate-float-medium"
            style={{ animationDelay: '1.7s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/40 rounded w-full" />
              <div className="h-2 bg-white/40 rounded w-3/4" />
            </div>
          </div>

          {/* Chat bubble - Indigo (middle left) */}
          <div 
            className="absolute top-44 left-16 bg-[#6366f1] rounded-2xl rounded-bl-sm p-4 shadow-lg w-36 animate-float-medium"
            style={{ animationDelay: '1.5s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/40 rounded w-full" />
              <div className="h-2 bg-white/40 rounded w-1/2" />
            </div>
          </div>

          {/* Small floating chat bubble - Sky Blue (center) */}
          <div 
            className="absolute top-52 right-44 bg-[#38bdf8] rounded-xl rounded-br-sm p-3 shadow-md w-28 animate-float-slow"
            style={{ animationDelay: '1.8s' }}
          >
            <div className="space-y-1.5">
              <div className="h-1.5 bg-white/40 rounded w-full" />
              <div className="h-1.5 bg-white/40 rounded w-2/3" />
            </div>
          </div>

          {/* Email card - Deep Purple (center right) */}
          <div 
            className="absolute top-56 right-0 bg-[#7c3aed] rounded-xl p-3 shadow-lg w-44 animate-float-medium"
            style={{ animationDelay: '0.7s' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-3 w-3 text-white/80" />
              <div className="h-1.5 bg-white/40 rounded w-14" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 bg-white/30 rounded w-full" />
              <div className="h-1.5 bg-white/30 rounded w-2/3" />
            </div>
          </div>

          {/* Chat with icon - Navy (middle) */}
          <div 
            className="absolute top-72 left-4 bg-[#1e40af] rounded-2xl rounded-bl-sm p-3 shadow-lg w-40 animate-float-fast"
            style={{ animationDelay: '2s' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="h-3 w-3 text-white/70" />
              <div className="h-1.5 bg-white/40 rounded w-12" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 bg-white/30 rounded w-full" />
              <div className="h-1.5 bg-white/30 rounded w-1/2" />
            </div>
          </div>

          {/* Email card - Light Purple (bottom right) */}
          <div 
            className="absolute bottom-32 right-8 bg-[#a78bfa] rounded-xl p-4 shadow-lg w-48 animate-float-slow"
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
            className="absolute bottom-40 left-0 bg-[#1e3a5f] rounded-2xl rounded-br-sm p-4 shadow-lg w-36 animate-float-fast"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/30 rounded w-full" />
              <div className="h-2 bg-white/30 rounded w-2/3" />
            </div>
          </div>

          {/* Small bubble - Indigo Light (bottom center-left) */}
          <div 
            className="absolute bottom-28 left-24 bg-[#818cf8] rounded-xl rounded-bl-sm p-2.5 shadow-md w-28 animate-float-medium"
            style={{ animationDelay: '1.3s' }}
          >
            <div className="space-y-1.5">
              <div className="h-1.5 bg-white/40 rounded w-full" />
              <div className="h-1.5 bg-white/40 rounded w-2/3" />
            </div>
          </div>

          {/* Chat bubble - Pink (bottom) */}
          <div 
            className="absolute bottom-12 left-8 bg-[#ec4899] rounded-2xl rounded-bl-sm p-3 shadow-lg w-32 animate-float-medium"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-white/40 rounded w-full" />
              <div className="h-2 bg-white/40 rounded w-1/2" />
            </div>
          </div>

          {/* Tiny bubble - Amber (bottom center) */}
          <div 
            className="absolute bottom-4 left-44 bg-[#f59e0b] rounded-lg rounded-br-sm p-2 shadow-md w-20 animate-float-slow"
            style={{ animationDelay: '2.5s' }}
          >
            <div className="h-1.5 bg-white/40 rounded w-full" />
          </div>

          {/* Small email - Fuchsia (bottom right edge) */}
          <div 
            className="absolute bottom-8 right-0 bg-[#d946ef] rounded-xl p-2.5 shadow-md w-36 animate-float-fast"
            style={{ animationDelay: '1.6s' }}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <Mail className="h-3 w-3 text-white/80" />
              <div className="h-1.5 bg-white/40 rounded w-10" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 bg-white/30 rounded w-full" />
              <div className="h-1.5 bg-white/30 rounded w-3/4" />
            </div>
          </div>

          {/* Tiny chat - Slate (far bottom right) */}
          <div 
            className="absolute bottom-20 right-56 bg-[#475569] rounded-lg rounded-bl-sm p-2 shadow-md w-24 animate-float-medium"
            style={{ animationDelay: '2.3s' }}
          >
            <div className="space-y-1">
              <div className="h-1.5 bg-white/30 rounded w-full" />
              <div className="h-1.5 bg-white/30 rounded w-1/2" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}