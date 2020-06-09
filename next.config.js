const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa')

module.exports = withPlugins([
  optimizedImages,

  [webpack, (cfg) => {
    cfg.module.rules.push(
        {
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            options: { mode: ['react-component'] }
        }
    )
    return cfg;
  }],

  [withPWA, {
    pwa: {
      dest: 'public'
    }
  }]
]);