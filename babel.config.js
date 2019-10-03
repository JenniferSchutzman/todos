const MODES = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  TEST: 'test',
};
const env = process.env.NODE_ENV || MODES.DEVELOPMENT;

function configurePresets() {
  let presetEnv = '@babel/preset-env';

  if (env === MODES.TEST) {
    presetEnv = [
      '@babel/preset-env',
      { targets: { node: 'current' } },
    ];
  }

  return [
    presetEnv,
    '@babel/preset-react',
  ];
}

function configurePlugins() {
  const plugins = [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
  ];

  if (env === MODES.TEST) plugins.push('@babel/plugin-transform-runtime');

  return plugins;
}

module.exports = (api) => {
  api.cache(true);

  return {
    presets: configurePresets(),
    plugins: configurePlugins(),
  };
};
