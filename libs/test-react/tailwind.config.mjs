import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import defaultTheme from 'tailwindcss/defaultTheme.js';

import tokens from '@test/test-tokens';

const tailwindConfig = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,mdx}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      sans: [tokens.brand, ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};

export default tailwindConfig;
