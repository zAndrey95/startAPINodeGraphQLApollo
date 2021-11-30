import { resolve as _resolve } from 'path';
import { CheckerPlugin } from 'awesome-typescript-loader';
import nodeExternals from 'webpack-node-externals';

export const mode = 'production';
export const entry = './src/index.ts';
export const target = 'node';
export const externals = [nodeExternals(), { knex: 'commonjs knex' }];
export const output = {
  path: _resolve(__dirname, 'build'),
  filename: 'server.js',
};
export const resolve = {
  extensions: ['.mjs', '.js', '.ts', '.(graphql|gql)'],
  modules: [
    'src',
  ],
};
export const module = {
  rules: [
    {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader',
    },
  ],
};
export const plugins = [
  new CheckerPlugin(),
];
