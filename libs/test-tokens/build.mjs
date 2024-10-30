import StyleDictionary from 'style-dictionary';
import { register, expandTypesMap } from '@tokens-studio/sd-transforms';
import path from 'path';

register(StyleDictionary, {
  excludeParentKeys: true,
});

const OUTPUT_PATH = 'dist/libs/test-tokens/';

const TOKEN_SOURCE_PATH = path.join(import.meta.dirname, 'test.tokens.json');
const TOKEN_OUTPUT_PATH = path.join(OUTPUT_PATH, 'tokens/');

const sd = new StyleDictionary({
  source: [TOKEN_SOURCE_PATH],
  preprocessors: ['tokens-studio'],
  expand: {
    typesMap: expandTypesMap,
  },
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      prefix: 'test',
      buildPath: TOKEN_OUTPUT_PATH,
      files: [
        {
          destination: '_test.css',
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: TOKEN_OUTPUT_PATH,
      files: [
        {
          destination: '_test.scss',
          format: 'scss/map-deep',
        },
      ],
    },
    js: {
      transformGroup: 'tokens-studio',
      buildPath: TOKEN_OUTPUT_PATH,
      files: [
        {
          destination: 'test.js',
          format: 'javascript/module-flat',
        },
      ],
    },
    mjs: {
      transformGroup: 'tokens-studio',
      buildPath: TOKEN_OUTPUT_PATH,
      files: [
        {
          destination: 'test.mjs',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
