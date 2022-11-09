import Web3 from 'web3'

export function toLocaleString(x) {
  return x.toLocaleString('fullwide', { useGrouping: false })
}

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(address) {
  try {
    return Web3.utils.isAddress(address)
  } catch {
    return false
  }
}

export function isTxhash(addr) {
  return /^0x([A-Fa-f0-9]{64})$/.test(addr)
}
