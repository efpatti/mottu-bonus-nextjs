export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Logo/Brand area */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-600 mb-2">Mottu</h1>
        <p className="text-green-500 text-sm font-medium">Carregando seu feed...</p>
      </div>

      {/* Main loading animation */}
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-20 h-20 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
        
        {/* Inner pulsing dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading dots animation */}
      <div className="flex space-x-2 mt-8">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>

      {/* Progress bar */}
      <div className="w-64 bg-green-200 rounded-full h-2 mt-8 overflow-hidden">
        <div className="h-full bg-green-500 rounded-full animate-pulse"></div>
      </div>

      {/* Additional animated elements */}
      <div className="mt-12 flex space-x-4">
        {/* Floating cards effect */}
        <div className="w-16 h-10 bg-green-100 rounded-lg animate-pulse opacity-60"></div>
        <div className="w-16 h-10 bg-green-200 rounded-lg animate-pulse opacity-80" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-16 h-10 bg-green-300 rounded-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Loading text with typewriter effect */}
      <div className="mt-8 text-green-600 text-sm">
        <span className="inline-block animate-pulse">Preparando experiência personalizada</span>
        <span className="animate-ping text-green-500 ml-1">...</span>
      </div>

      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-100 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-green-300 rounded-full opacity-10 animate-bounce"></div>
    </div>
  );
}
