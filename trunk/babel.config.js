module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: true
          }
        }
      ]
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread'
    ],
  }
};