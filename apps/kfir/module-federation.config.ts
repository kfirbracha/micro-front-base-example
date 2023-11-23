import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'kfir',
  exposes: {
    './Routes': 'apps/kfir/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
