import {fusebox, pluginLess} from "fuse-box";
import {pluginTypeChecker} from "fuse-box-typechecker";
import * as path from "path";

const fuse = fusebox({
  target: "browser",
  entry: 'src/app.tsx',
  watcher: {
    root: "./src/"
  },
  webIndex: {
    publicPath: "./",
    template: 'src/index.html'
  },
  devServer: true,
  sourceMap: true,
  cache: {
    root: "build/.cache"
  },
  plugins: [
    pluginLess("*.less", {
      stylesheet: {
        macros: {
          '../../theme.config': path.resolve(__dirname, "src/semantic-ui/theme.config"),
          'themes/grey': path.resolve(__dirname, "src/semantic-ui/themes/grey"),
          '~semantic-ui-less': path.resolve(__dirname, 'node_modules/semantic-ui-less'),
          '@spritePath': path.resolve(__dirname, 'node_modules/semantic-ui-less/themes/default/assets/images/flags.png'),
          '@{fontPath}/@{fontName}': path.resolve(__dirname, 'node_modules/semantic-ui-less/themes/default/assets/fonts/icons'),
          '@{fontPath}/@{outlineFontName}': path.resolve(__dirname, 'node_modules/semantic-ui-less/themes/default/assets/fonts/outline-icons'),
          '@{fontPath}/@{brandFontName}': path.resolve(__dirname, 'node_modules/semantic-ui-less/themes/default/assets/fonts/brand-icons')
        }
      }
    }),
    pluginTypeChecker({
      tsConfig: './tsconfig.json',
      name: 'TypeChecker App'
    })
  ],
});

fuse.runDev({
  bundles: {
    distRoot: "build/browser",
    app: "app.js",
    vendor: "vendor.js"
  }
});
