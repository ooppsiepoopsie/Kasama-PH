import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Kasama PH - Ang Kaibigan ng Lola at Lolo'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#FDFBF7', // kasama-cream
          backgroundImage: 'radial-gradient(circle at 80% 20%, #FFE5E0 0%, #FDFBF7 50%), radial-gradient(circle at 20% 80%, #E6F0EA 0%, #FDFBF7 50%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Soft 3D-like decorative blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            background: '#FF715B', // kasama-primary
            opacity: 0.15,
            borderRadius: '250px',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            background: '#4A90E2', // soft blue/secondary tone
            opacity: 0.1,
            borderRadius: '200px',
            filter: 'blur(60px)',
          }}
        />

        {/* Brand Logo / Name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#FF715B', // kasama-primary
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '24px',
              boxShadow: '0 12px 30px rgba(255, 113, 91, 0.3)',
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#2D2422', // kasama-espresso
              letterSpacing: '-0.02em',
            }}
          >
            Kasama PH
          </span>
        </div>

        {/* Headline & Subheadline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '900px',
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: '76px',
              fontWeight: 900,
              color: '#2D2422',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            Ang Kaibigan ng Lola at Lolo.
          </h1>
          <p
            style={{
              fontSize: '36px',
              fontWeight: 500,
              color: '#6B5E5B', // kasama-muted
              lineHeight: 1.4,
              margin: 0,
              maxWidth: '850px',
            }}
          >
            Medicine reminders, emergency alerts, and family connection in one simple app designed for Filipino seniors.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
