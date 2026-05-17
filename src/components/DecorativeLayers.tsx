const GRAIN_BG =
  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")'

export function DecorativeLayers() {
  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-[12%] z-0 h-screen w-px bg-[rgba(201,168,76,0.045)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed top-0 right-[12%] z-0 h-screen w-px bg-[rgba(201,168,76,0.045)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-[999] opacity-[0.55]"
        style={{ backgroundImage: GRAIN_BG }}
        aria-hidden
      />
    </>
  )
}
