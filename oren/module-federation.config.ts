import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'oren',
  exposes: {
    './Module': 'oren/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
