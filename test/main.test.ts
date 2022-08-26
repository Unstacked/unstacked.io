import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Account } from '../src/constant';
import { UnstackedIoSite } from '../src/main';

test('Snapshot', () => {
  const app = new App();
  const stack = new UnstackedIoSite(app, 'test', {
    env: {
      account: Account.WORKLOAD,
      region: 'us-east-1',
    },
  });

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});
