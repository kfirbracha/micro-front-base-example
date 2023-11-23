import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'achia',
  exposes: {
    './Routes': 'apps/achia/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
