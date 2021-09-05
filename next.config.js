const STUDIO_REWRITE = {
  source: '/sanity/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/sanity/:path*'
      : '/studio/:path*',
}

module.exports = {
  reactStrictMode: true,
  rewrites: () => [STUDIO_REWRITE],
}
