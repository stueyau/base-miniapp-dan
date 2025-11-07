import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { farcasterMiniApp } from '@farcaster/miniapp-wagmi-connector';

const connector = farcasterMiniApp();
console.log('Farcaster MiniApp connector created:', connector);

export const config = createConfig({
  chains: [base],
  connectors: [connector],
  transports: {
    [base.id]: http(),
  },
});

console.log('Wagmi config created:', {
  chains: config.chains.map(c => c.name),
  connectors: config.connectors.length
});
