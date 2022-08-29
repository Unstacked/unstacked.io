import { awscdk } from 'projen';
import { TrailingComma } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.39.0',
  defaultReleaseBranch: 'main',
  name: 'unstacked.io',

  deps: ['pwed-cdk'],
  description: 'Unstacked.io website',
  devDeps: [],
  packageName: 'unstacked.io',
  projenrcTs: true,
  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
      semi: true,
      trailingComma: TrailingComma.ALL,
    },
  },
  devContainer: true,
  scripts: {
    'astro:dev': 'yarn --cwd website dev',
    'astro:start': 'yarn --cwd website start',
    'astro:build': 'yarn --cwd website build',
    'astro:install': 'yarn install --cwd website',
    astro: 'yarn --cwd website astro',
  },
  buildCommand: 'yarn astro:install && yarn astro:build',
  stale: true,
  eslint: false,
  jest: false,
});
project.synth();
