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
    'astro:dev': 'npm run --prefix website dev',
    'astro:start': 'npm run --prefix website start',
    'astro:build': 'npm run --prefix website build',
    'astro:install': 'npm ci --prefix website',
    astro: 'npm run --prefix website astro',
  },
  buildCommand: 'yarn astro:install && yarn astro:build',
  stale: true,
});
project.synth();
