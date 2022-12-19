// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

const DFXWebPackConfig = require("./dfx.webpack.config")
DFXWebPackConfig.initCanisterEnv()

const webpack = require("webpack")

// Make DFX_NETWORK available to Web Browser with default "local" if DFX_NETWORK is undefined
// const EnvPlugin = new webpack.EnvironmentPlugin({
//   DFX_NETWORK: "local"
// })

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Plugin
    // config.plugins.push(EnvPlugin)

    // Important: return the modified config
    return config
  }
}
