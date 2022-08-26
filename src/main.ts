import { join } from 'path';
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { static_site } from 'pwed-cdk';
import { Account } from './constant';

export class UnstackedIoSite extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new static_site.StaticSite(this, 'UnstackedIoSite', {
      domain: 'unstacked.io',
      alternativeDomains: [
        'unstacked.cloud',
        'unstacked.xyz',
        'unstacked.me',
        'unstacked.media',
        'unstacked.online',
      ],
      path: join(__dirname, '..', 'website', 'dist'),
      enablePrettyPaths: true,
    });
  }
}

const env = {
  account: Account.WORKLOAD,
  region: 'us-east-1',
};

const app = new App();

new UnstackedIoSite(app, 'UnstackedIoWebsite', { env: env });

app.synth();
