import React from 'react';

export interface Link {
  href: string;
  text: string;
}

export interface MobilityOption {
  id: string;
  title: string;
  description: string;
  // Fix: Replaced `JSX.Element` with `React.ReactElement` as the global `JSX` namespace is not available in `.ts` files.
  icon: React.ReactElement;
  links: Link[];
}
