import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export function getConfig({
  tsconfig = './tsconfig.json',
  output = [
    {
      file: `dist/${pkg.name}.js`,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: `dist/${pkg.name}.es.js`,
      format: 'esm',
    },
    {
      name: "react-hook-form",
      file: `dist/${pkg.name}.umd.js`,
      format: 'umd',
    }
  ],
  plugins = [],
} = {}) {
  return {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    plugins: [
      typescript({
        tsconfig,
        clean: true,
      }),
      ...plugins
    ],
    output,
  };
}

export default getConfig();
