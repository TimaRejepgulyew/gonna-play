module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          alias: {
            "@": "./app",
            api: "./app/api",
            assets: "./app/assets",
            components: "./app/components",
            screens: "./app/screens",
          },
        },
      ],
    ],
  };
};
