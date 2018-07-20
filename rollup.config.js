import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const config = [
  // UMD bundle, transpiled (for the browsers that do not support ES modules).
  // Also works in Node.
  {
    input: 'src/vaadin-usage-statistics.js',
    output: {
      format: 'iife',
      file: 'vaadin-usage-statistics.js',
    },
    plugins: [
      babel({
        // The 'external-helpers' Babel plugin allows Rollup to include every
        // used babel helper just once per bundle, rather than including them in
        // every module that uses them (which is the default behaviour).
        plugins: ['external-helpers'],
        presets: [
          ['env', {
            // Run `npm run browserslist` to see the percent of users covered
            // by this browsers selection
            targets: {
              browsers: pkg.browserslist
            },

            // Instructs Babel to not convert ES modules to CommonJS--that's a
            // job for Rollup.
            modules: false,

            // To see which browsers are targeted, and which JS features are
            // polyfilled, uncomment the next line and run `npm run build`
            // debug: true,
          }]
        ],
      })]
  },
];

export default config;
