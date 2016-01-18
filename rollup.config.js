import npm from 'rollup-plugin-npm';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'lib/index.js',
  format: 'umd',
  dest: 'dist/rollup-starter-project.js',
  sourceMap: 'dist/rollup-starter-project.js.map',
  moduleName: 'rollupStarterProject',
  plugins: [
    npm({
      jsnext: true
    }),
    uglify()
  ]
};
