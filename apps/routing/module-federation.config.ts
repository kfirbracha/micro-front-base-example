import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'routing',
  remotes: ['achia', 'kfir'],
};

export default config;
