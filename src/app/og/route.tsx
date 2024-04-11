import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

const boldFont = fetch(new URL('/public/assets/fonts/inter/inter-bold.ttf', import.meta.url)).then((res) => res.arrayBuffer());

export async function GET() {
  const boldFontData = await boldFont;
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 60,
          gap: 60,
        }}
      >
        <div
          style={{
            display: 'flex',
            fontWeight: 700,
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 2,
          }}
        >
          <p
            style={{
              marginBottom: '16px',
            }}
          >
            Calculate your Strength Numbers
          </p>
          <div
            style={{
              display: 'flex',
              gap: 20,
            }}
          >
            <span
              style={{
                fontSize: 25,
                backgroundColor: '#0d9488',
                color: 'white',
                borderRadius: '4px',
                padding: '8px 16px',
              }}
            >
              1RM Calculator
            </span>
            <span
              style={{
                fontSize: 25,
                border: '2px solid #0d9488',
                borderRadius: '4px',
                padding: '8px 16px',
              }}
            >
              Rep Percentages Calculator
            </span>
          </div>
        </div>

        <span
          style={{
            display: 'block',
            flex: 1,
          }}
        >
          <svg
            style={{
              width: 288,
              height: 230,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              style={{
                fill: '#0d9488',
              }}
              d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64H64c-17.7 0-32-14.3-32-32v-64c-17.7 0-32-14.3-32-32s14.3-32 32-32v-64c0-17.7 14.3-32 32-32h32V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32h-32v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224v-64h192z"
            />
          </svg>
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Inter',
          data: boldFontData,
          weight: 700,
        },
      ],
    }
  );
}
