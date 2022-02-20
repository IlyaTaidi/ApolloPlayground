const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: { dangerouslyAddModulePathsToTranspile: ['moti', '@motify', '@motify/core', '@motify/components'] },
    },
    argv
  )

  return config
}