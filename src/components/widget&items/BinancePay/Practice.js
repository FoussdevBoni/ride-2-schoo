import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import CryptoPaymentForm, { CHAIN_IDS } from './BinancePay';


const currencyOptions = [
  {
    name: CHAIN_IDS.ETHEREUM.NAME,
    value: CHAIN_IDS.ETHEREUM.CURRENCY_CODE,
  },
  {
    name: CHAIN_IDS.BINANCE.NAME,
    value: CHAIN_IDS.BINANCE.CURRENCY_CODE,
  }
]

const networkOptions = [
  {
    value: "testnet",
  },
  {
    value: "mainnet",
  }
]

function Practice() { // Ajoutez la fonction devant Practice

  const [currency, setCurrency] = useState(currencyOptions[0].value);
  const [network, setNetwork] = useState(networkOptions[0].value)
const [payementAount , setPaymentAmount] = useState('')
  const handleAmountChange = (value) => { // Retirez l'annotation de type
    setPaymentAmount(value);
  }

  const handleCurrencyChange = (event) => { // Retirez l'annotation de type
    setCurrency(event.target.value);
  }

  const selectCurrency = (
    <FormControl component="fieldset">
        <RadioGroup
          aria-label="Currency"
          name="currency"
          value={currency}
          onChange={handleCurrencyChange}
        >
          {currencyOptions.map((currencyOption) => (
            <FormControlLabel
              key={currencyOption.value}
              value={currencyOption.value}
              control={<Radio />}
              label={currencyOption.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
  )
  
  const selectNetwork = (
   <FormControl component="fieldset">
        <RadioGroup
          aria-label="Network"
          name="network"
          value={network}
          onChange={(event) => setNetwork(event.target.value)}
        >
          {networkOptions.map((networkOption) => (
            <FormControlLabel
              key={networkOption.value}
              value={networkOption.value}
              control={<Radio />}
              label={networkOption.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
  )

  return (
    <>
      {selectCurrency}<br/>
      {selectNetwork}<br/>
      <CryptoPaymentForm currency={currency} isTestNet={network === "testnet"} isEditableDestinationAddress={true} />
    </>
  );
}

export default Practice; // Exportez la fonction Practice comme composant par défaut
