import postcssPresetEnv from 'postcss-preset-env'
import postcssSass from '@csstools/postcss-sass'
import postcssScss from 'postcss-scss'

export default {
  syntax: postcssScss,

  plugins: [
    postcssSass(),
    postcssPresetEnv({
      browsers: 'last 2 versions',
    }),
  ],
}
