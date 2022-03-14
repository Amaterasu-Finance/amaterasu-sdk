import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.MTV_MAINNET]: new Token(
    ChainId.MTV_MAINNET,
    '0x8E321596267a4727746b2F48BC8736DB5Da26977',
    18,
    'WMTV',
    'Wrapped MTV'
  ),
  [ChainId.AURORA_MAINNET]: new Token(
      ChainId.AURORA_MAINNET,
      '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
      18,
      'WETH',
      'Wrapped ETH'
  ),
  [ChainId.AURORA_TESTNET]: new Token(
      ChainId.AURORA_TESTNET,
      '0x27e2714bAf8054Fbbb12CeABD9f1CBdCB058BBaa',
      18,
      'WETH',
      'Wrapped ETH'
  )
}
