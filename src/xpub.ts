import * as xpub from '@swan-bitcoin/xpub-lib';

const key =
  'xpub6EuV33a2DXxAhoJTRTnr8qnysu81AA4YHpLY6o8NiGkEJ8KADJ35T64eJsStWsmRf1xXkEANVjXFXnaUKbRtFwuSPCLfDdZwYNZToh4LBCd';

console.log(xpub.addressFromExtPubKey({ extPubKey: key, network: 'mainnet' }));
