import { useState } from "react";

export const CHAIN_IDS = {
  BINANCE: {
    NAME: "Binance",
    CURRENCY_CODE: "BNB",
    MAIN_NET: {
      ID: 56
    },
    TEST_NET: {
      NAME: "testnet",
      ID: 97,
    }
  },
  ETHEREUM: {
    NAME: "Ethereum",
    CURRENCY_CODE: "ETH",
    MAIN_NET: {
      ID: 1
    },
    ROPSTEN: {
      NAME: "ropsten",
      ID: 3
    }
  }
}

function CryptoPaymentForm(props) {
  const { currency = "ETH", isTestNet = true } = props;

  const checkCorrectNetwork = (network) => {
    let expectedChainId;

    if (currency === CHAIN_IDS.ETHEREUM.CURRENCY_CODE) {
      if (isTestNet) {
        expectedChainId = CHAIN_IDS.ETHEREUM.ROPSTEN.ID;
      } else {
        expectedChainId = CHAIN_IDS.ETHEREUM.MAIN_NET.ID;
      }
    } else if (currency === CHAIN_IDS.BINANCE.CURRENCY_CODE) {
      if (isTestNet) {
        expectedChainId = CHAIN_IDS.BINANCE.TEST_NET.ID;
      } else {
        expectedChainId = CHAIN_IDS.BINANCE.MAIN_NET.ID;
      }
    }

    if (network.chainId !== expectedChainId) {
      const actualNetworkName = network.chainId === CHAIN_IDS.BINANCE.TEST_NET.ID || network.chainId === CHAIN_IDS.ETHEREUM.ROPSTEN.ID ? "testnet" : "mainnet";
      const actualCurrency = network.chainId === CHAIN_IDS.BINANCE.MAIN_NET.ID || network.chainId === CHAIN_IDS.BINANCE.TEST_NET.ID ? CHAIN_IDS.BINANCE.CURRENCY_CODE : CHAIN_IDS.ETHEREUM.CURRENCY_CODE;
      return { isCorrectNetwork: false, message: `Change your crypto wallet network. Expected "${isTestNet ? "testnet" : "mainnet"}" network for currency: ${currency}. Instead received "${actualNetworkName}" network for currency: ${actualCurrency}.` };
    }
    return { isCorrectNetwork: true, message: "" };
  }

  // Inside const startPayment
  const network = {}; // Replace with the actual network object


 

  // Inside render()
  const networkName = isTestNet ? "testnet" : "mainnet";
  const [destinationAddress, setDestinationAddress] = useState('');

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">{`${currency} ${networkName}`}</span>
      </div>
      <input placeholder="Destination address" className="col-12 form-control" value={destinationAddress} onChange={(event) => { setDestinationAddress(event.target.value) }} />
    </div>
  );
}

export default CryptoPaymentForm
