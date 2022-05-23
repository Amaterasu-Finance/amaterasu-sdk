import { ProtocolName, _9970, _9975, _9980 }  from '../constants'
import { Token } from 'entities/token'
import JSBI from "jsbi";

export interface Protocol {
  protocol: ProtocolName
  routerAddress: string
  factoryAddress: string
  initCodeHash: string
  fee: JSBI
  lpName: string
  lpSymbol: string
  BASES_TO_CHECK_TRADES_AGAINST?: Token[]
  PINNED_PAIRS?: [Token, Token][]
}

export const PROTOCOLS: { [protocol in ProtocolName]: Protocol  } = {
  [ProtocolName.AMATERASU]: {
    protocol: ProtocolName.AMATERASU,
    routerAddress: '0x3d99B2F578d94f61adcD899DE55F2991522cefE1',
    factoryAddress: '0x34696b6cE48051048f07f4cAfa39e3381242c3eD',
    initCodeHash: '0xb3da4698cc518015841d30e83d315ee7fe7123dc7cbbe30dc10538e10633deff',
    fee: _9975,
    lpName: 'Izanagi LP',
    lpSymbol: 'IZA LP'
  },
  [ProtocolName.TRISOLARIS]: {
    protocol: ProtocolName.TRISOLARIS,
    routerAddress: '0x2CB45Edb4517d5947aFdE3BEAbF95A582506858B',
    factoryAddress: '0xc66F594268041dB60507F00703b152492fb176E7',
    initCodeHash: '0x754e1d90e536e4c1df81b7f030f47b4ca80c87120e145c294f098c83a6cb5ace',
    fee: _9970,
    lpName: 'Trisolaris LP',
    lpSymbol: 'TRI LP'
  },
  [ProtocolName.WANNASWAP]: {
    protocol: ProtocolName.WANNASWAP,
    routerAddress: '0xa3a1eF5Ae6561572023363862e238aFA84C72ef5',
    factoryAddress: '0x7928D4FeA7b2c90C732c10aFF59cf403f0C38246',
    initCodeHash: '0xa06b8b0642cf6a9298322d0c8ac3c68c291ca24dc66245cf23aa2abc33b57e21',
    fee: _9980,
    lpName: 'WannaSwap LP Token',
    lpSymbol: 'wLP'
  }
}