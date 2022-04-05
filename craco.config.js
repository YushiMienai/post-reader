const path = require('path')

const aliases = {
  '@actions': path.resolve(__dirname, 'src/redux/actions'),
  '@api': path.resolve(__dirname, 'src/api.ts'),
}

module.exports = {
  plugins: [{plugin: require('@semantic-ui-react/craco-less')}],
  webpack: {alias: aliases},
  resolve: {
    alias: aliases,
    extensions: ['.tsx', '.ts', '.js']
  }
}