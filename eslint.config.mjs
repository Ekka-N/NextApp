import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    "plugins": ["simple-import-sort"],
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          "groups": [
            // `react` and packages: Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ["^react$", "^@?\\w"],
            // 3. Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group. (also relative imports starting with "../")
            ["^@", "^"],
            // relative imports from same folder "./" (I like to have them grouped together)
            ["^\\./"],
            // media imports
            ["^.+\\.(gif|png|svg|jpg)$"],
            // style module imports always come last, this helps to avoid CSS order issues
            ["^.+\\.(module.css|module.scss)$"],
            // Side effect imports at the start. For me this is important because I want to import reset.css and global styles at the top of my main file.
            ["^\\u0000"],
          ]
        }
      ],
      "indent": ["error", 2],
       "jsx-quotes": ["error", "prefer-double"]
    },
  }),

];

export default eslintConfig;
