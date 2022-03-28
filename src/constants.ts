import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum Blockchain {
  ETHEREUM = 1,
  BINANCE_SMART_CHAIN = 2,
  HARMONY = 3,
  MTV = 4,
  AURORA_MAINNET = 5,
  AURORA_TESTNET = 6
}

export enum ChainId {
  MTV_MAINNET = 62621,
  AURORA_MAINNET = 1313161554,
  AURORA_TESTNET = 1313161555
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MTV_MAINNET]: '0x6A4EA1056146Cd284B19Cd0FEE80Df3Dc80b9A90',
  [ChainId.AURORA_TESTNET]: '0x4eef2e729e235041d7f08D569f29fb83CABEF1c7',
  [ChainId.AURORA_MAINNET]: '0x4eef2e729e235041d7f08D569f29fb83CABEF1c7'
}

export const INIT_CODE_HASH = '0xb3da4698cc518015841d30e83d315ee7fe7123dc7cbbe30dc10538e10633deff'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(9975)
export const _1000 = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
