module.exports = {
  experimental: {
    reactCompiler: true,
  },
  transpilePackages: ["gifsicle-wasm-browser"],
  basePath: "/manual/video_edit_2",
  assetPrefix: "/manual/video_edit_2",
  output: "export",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
        ],
      },
    ];
  },
};
