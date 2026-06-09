import { ImageResponse } from 'next/og';

export const alt = 'mtverse admin - Premium Tailwind CSS Admin Dashboard';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'edge';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0c111d',
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 24,
            padding: '8px 20px',
            borderRadius: 100,
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
          />
          <span
            style={{
              fontSize: 14,
              color: '#a5b4fc',
              fontWeight: 500,
            }}
          >
            Tailwind CSS v4 Ready
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            mtverse admin
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 28,
              color: '#94a3b8',
              fontWeight: 400,
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            Premium Tailwind CSS Admin Dashboard
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 40,
            marginTop: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: '#818cf8',
                lineHeight: 1.2,
              }}
            >
              7,000+
            </span>
            <span
              style={{
                fontSize: 14,
                color: '#64748b',
                marginTop: 4,
              }}
            >
              Components
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 1,
              height: 48,
              backgroundColor: 'rgba(148, 163, 184, 0.2)',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: '#a78bfa',
                lineHeight: 1.2,
              }}
            >
              6
            </span>
            <span
              style={{
                fontSize: 14,
                color: '#64748b',
                marginTop: 4,
              }}
            >
              Frameworks
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 1,
              height: 48,
              backgroundColor: 'rgba(148, 163, 184, 0.2)',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: '#c084fc',
                lineHeight: 1.2,
              }}
            >
              15+
            </span>
            <span
              style={{
                fontSize: 14,
                color: '#64748b',
                marginTop: 4,
              }}
            >
              Dashboards
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 1,
              height: 48,
              backgroundColor: 'rgba(148, 163, 184, 0.2)',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: '#e879f9',
                lineHeight: 1.2,
              }}
            >
              500+
            </span>
            <span
              style={{
                fontSize: 14,
                color: '#64748b',
                marginTop: 4,
              }}
            >
              Pages
            </span>
          </div>
        </div>

        {/* Framework badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 36,
          }}
        >
          {['HTML', 'React', 'Next.js', 'Vue', 'Angular', 'Laravel'].map(
            (fw) => (
              <div
                key={fw}
                style={{
                  padding: '6px 16px',
                  borderRadius: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: 13,
                  color: '#cbd5e1',
                  fontWeight: 500,
                }}
              >
                {fw}
              </div>
            )
          )}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            marginTop: 40,
            fontSize: 16,
            color: '#475569',
            fontWeight: 500,
          }}
        >
          mtverseadmin.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
