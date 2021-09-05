const STUDIO_REWRITE = {
  source: '/sanity',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/sanity/index.html'
      : '/studio/index.html',
}

const STATIC_REWRITE = {
  source: '/sanity/static/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/sanity/static/:path*'
      : '/studio/static/:path*',
}

const DESK_REWRITE = {
  source: '/sanity/desk/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/sanity/desk/:path*'
      : '/studio/desk/:path*',
}

module.exports = {
  reactStrictMode: true,
  rewrites: () => [STATIC_REWRITE, DESK_REWRITE, STUDIO_REWRITE],
}
