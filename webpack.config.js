const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Входной файл
  output: {
    path: path.resolve(__dirname, "dist"), // Выходная директория
    filename: "bundle.js", // Имя выходного файла
    assetModuleFilename: "assets/[name][ext]", // Путь для всех статических ресурсов
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Применение к файлам .js и .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Пресеты для Babel
          },
        },
      },
      {
        test: /\.scss$/, // Применение к файлам .scss
        use: [
          MiniCssExtractPlugin.loader, // Извлечение CSS в отдельный файл
          "css-loader", // Преобразование CSS в модули
          "sass-loader", // Преобразование SCSS в CSS
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]", // Specify output path and filename format
            },
          },
        ],
      },
      {
        test: /\.txt$/, // Применение к файлам .txt
        use: "raw-loader", // Использование raw-loader для преобразования .txt файлов
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Расширения файлов, которые Webpack должен обрабатывать
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Шаблон HTML
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css", // Имя выходного CSS файла
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Папка для обслуживания статических файлов
    },
    compress: true,
    port: 3000,
    hot: true, // Поддержка горячей перезагрузки
    historyApiFallback: true, // Поддержка History API (для React Router)
  },
};
