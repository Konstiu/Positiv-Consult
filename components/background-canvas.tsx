export function BackgroundCanvas() {
  return (
    <>
      {/* Dark background for overscroll at top (matches navbar) */}
      <div
        className="fixed left-0 right-0 -top-[100vh] h-[100vh] bg-[var(--brand-dark)] -z-20"
        style={{ pointerEvents: 'none' }}
        aria-hidden="true"
      />
      {/* Main background with gradient */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          height: '100dvh',
          width: '100vw',
          backgroundColor: '#f7f8fa',
          backgroundImage: `
            radial-gradient(circle at 88% 10%, rgba(13, 27, 42, 0.35) 0%, rgba(13, 27, 42, 0.18) 22%, rgba(13, 27, 42, 0.06) 45%, transparent 70%),
            radial-gradient(circle at 70% 85%, rgba(230, 57, 70, 0.08) 0%, rgba(230, 57, 70, 0.04) 18%, rgba(230, 57, 70, 0.01) 38%, transparent 55%)
          `,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
    </>
  );
}
