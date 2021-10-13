const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  presets: [path.resolve(__dirname, './next-preset.js')],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components'),
      '@elements': path.resolve(__dirname, '../components/Elements'),
      '@config': path.resolve(__dirname, '../config'),
      '@hooks': path.resolve(__dirname, '../hooks'),
      '@redux': path.resolve(__dirname, '../redux'),
      '@pages': path.resolve(__dirname, '../pages'),
      '@tests': path.resolve(__dirname, '../tests')
    }

    return config
  }
}
