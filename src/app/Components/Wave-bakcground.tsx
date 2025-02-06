export function WaveBackground() {
    return (
      <div className="absolute inset-0 z-0 rounded-lg">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:14px_24px]" />
  
        {/* Waves and Circles */}
        <div className="absolute inset-0">
          <svg
            className="absolute left-0 top-0 h-full w-full"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 300C150 200 350 100 800 300C650 400 450 500 0 300Z" fill="url(#paint0_linear)" fillOpacity="0.1">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M0 300C150 200 350 100 800 300C650 400 450 500 0 300Z;
                        M0 300C150 250 350 150 800 300C650 350 450 450 0 300Z;
                        M0 300C150 200 350 100 800 300C650 400 450 500 0 300Z"
              />
            </path>
            <circle cx="200" cy="150" r="20" fill="#23856D">
              <animate attributeName="cy" dur="4s" repeatCount="indefinite" values="150;170;150" />
            </circle>
            <circle cx="600" cy="400" r="15" fill="#23A6F0">
              <animate attributeName="cy" dur="3s" repeatCount="indefinite" values="400;380;400" />
            </circle>
            <defs>
              <linearGradient id="paint0_linear" x1="400" y1="100" x2="400" y2="500" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    )
  }
  
  