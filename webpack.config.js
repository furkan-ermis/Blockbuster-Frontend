const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSS'i ayırmak için kullanılır

module.exports = {
  entry: "./src/index.tsx", // Proje giriş dosyası
  output: {
    filename: "bundle.js", // Çıkış dosyası adı
    path: path.resolve(__dirname, "dist"), // Çıkış yolu
    publicPath: "/", // Tüm dosyaların kök dizinden yüklendiğini belirtir
  },
  mode: "development", // Geliştirme modu
  devtool: "source-map", // Hata ayıklama için source map'ler
  devServer: {
    historyApiFallback: true, // SPA uygulamaları için gereklidir, 404 hatalarını index.html'e yönlendirir
    hot: true, // Hot module replacement (HMR) etkinleştirir, sayfayı yeniden yüklemeden değişiklikleri uygular
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/, // .ts, .tsx, .js ve .jsx dosyaları için geçerli
        exclude: /node_modules/, // node_modules klasörünü hariç tutar
        use: "babel-loader", // Bu dosyalar için Babel loader'ını kullanır
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Görüntü dosyaları için geçerli
        use: [
          {
            loader: "file-loader", // Görüntü dosyalarını işler ve çıktı klasörüne kopyalar
            options: {
              name: "[name].[hash].[ext]", // Çıktı dosyalarının adını ve hash'ini belirler
              outputPath: "assets/images", // Görüntü dosyalarının çıkış yolunu belirler
            },
          },
        ],
      },
      {
        test: /\.css$/i, // .css dosyaları için geçerli
        use: [MiniCssExtractPlugin.loader, "css-loader"], // CSS'i ayrı dosya olarak çıkartmak için MiniCssExtractPlugin kullanılır
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"], // Bu uzantılara sahip dosyalar otomatik olarak çözümlenir
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/"),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({ template: "./src/index.html" }), // HTML şablonunu kullanarak output dosyasını oluşturur
    new webpack.ProvidePlugin({
      $: "jquery", // jQuery'yi global olarak sağlar
      jQuery: "jquery",
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }), // CSS dosyalarını ayırır ve output dosyasının adını belirler
  ],
};
