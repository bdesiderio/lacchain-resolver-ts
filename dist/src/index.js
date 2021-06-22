// import { DID, DIDRecoverable, Resolver } from '@lacchain/did';
import DID from "@lacchain/did/lib/did.js";
const did = new DID({
    registry: '0xbDa1238272FDA6888556449Cb77A87Fc8205E8ba',
    rpcUrl: 'https://writer.lacchain.net',
    network: 'main'
});
const controller = did.getController().then((result) => {
    console.log(result);
});
//node --experimental-json-modules --loader ts-node/esm src/index.ts
//# sourceMappingURL=index.js.map