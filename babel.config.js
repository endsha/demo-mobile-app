module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ["./src"],
        alias: {
          assets: "./src/assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@constants": "./src/constants",
          "@services": "./src/services",
          '@custom-types': './src/types',
        },
        extensions: [".js", ".ios.js", ".android.js", ".json"]
      },
    ],
  ],
};
