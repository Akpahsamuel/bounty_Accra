import React, { useState } from "react";
import "./App.css";
import web3jsLogo from "./web3js-logo.png"; // Import the Web3.js logo
import { Web3 } from "web3";
import { ChainlinkPlugin, MainnetPriceFeeds } from "@chainsafe/web3-plugin-chainlink";

function App() {
  const [conversionResult, setConversionResult] = useState("");
  const [conversionType, setConversionType] = useState("ETHtoBTC");
  const [amount, setAmount] = useState(1);

  // Initialize RPC/injected provider
  const web3 = new Web3(window.ethereum);

  // Register the plugin
  web3.registerPlugin(new ChainlinkPlugin());

  async function getPrice(feed) {
    try {
      console.log(`Fetching price for feed: ${feed}`);
      const price = await web3.chainlink.getPrice(feed);
      console.log(`Price for ${feed}:`, price);
      return Number(price.answer); // Convert BigInt to Number
    } catch (error) {
      console.error(`Error fetching price for ${feed}:`, error);
      throw error;
    }
  }

  async function convertETHtoBTC(ethAmount) {
    try {
      const ethToUsd = await getPrice(MainnetPriceFeeds.EthUsd);
      const btcToUsd = await getPrice(MainnetPriceFeeds.BtcUsd);
      const btcAmount = (ethAmount * ethToUsd) / btcToUsd;
      setConversionResult(`${ethAmount} ETH is approximately ${btcAmount.toFixed(5)} BTC`);
    } catch (error) {
      console.error("Error in convertETHtoBTC:", error);
    }
  }

  async function convertBTCtoETH(btcAmount) {
    try {
      const ethToUsd = await getPrice(MainnetPriceFeeds.EthUsd);
      const btcToUsd = await getPrice(MainnetPriceFeeds.BtcUsd);
      const ethAmount = (btcAmount * btcToUsd) / ethToUsd;
      setConversionResult(`${btcAmount} BTC is approximately ${ethAmount.toFixed(5)} ETH`);
    } catch (error) {
      console.error("Error in convertBTCtoETH:", error);
    }
  }

  async function convertETHtoBNB(ethAmount) {
    try {
      const ethToUsd = await getPrice(MainnetPriceFeeds.EthUsd);
      const bnbToUsd = await getPrice(MainnetPriceFeeds.BnbUsd);
      const bnbAmount = (ethAmount * ethToUsd) / bnbToUsd;
      setConversionResult(`${ethAmount} ETH is approximately ${bnbAmount.toFixed(5)} BNB`);
    } catch (error) {
      console.error("Error in convertETHtoBNB:", error);
    }
  }

  async function convertBTCtoBNB(btcAmount) {
    try {
      const btcToUsd = await getPrice(MainnetPriceFeeds.BtcUsd);
      const bnbToUsd = await getPrice(MainnetPriceFeeds.BnbUsd);
      const bnbAmount = (btcAmount * btcToUsd) / bnbToUsd;
      setConversionResult(`${btcAmount} BTC is approximately ${bnbAmount.toFixed(5)} BNB`);
    } catch (error) {
      console.error("Error in convertBTCtoBNB:", error);
    }
  }

  async function convertBNBtoETH(bnbAmount) {
    try {
      const bnbToUsd = await getPrice(MainnetPriceFeeds.BnbUsd);
      const ethToUsd = await getPrice(MainnetPriceFeeds.EthUsd);
      const ethAmount = (bnbAmount * bnbToUsd) / ethToUsd;
      setConversionResult(`${bnbAmount} BNB is approximately ${ethAmount.toFixed(5)} ETH`);
    } catch (error) {
      console.error("Error in convertBNBtoETH:", error);
    }
  }

  async function convertBNBtoBTC(bnbAmount) {
    try {
      const bnbToUsd = await getPrice(MainnetPriceFeeds.BnbUsd);
      const btcToUsd = await getPrice(MainnetPriceFeeds.BtcUsd);
      const btcAmount = (bnbAmount * bnbToUsd) / btcToUsd;
      setConversionResult(`${bnbAmount} BNB is approximately ${btcAmount.toFixed(5)} BTC`);
    } catch (error) {
      console.error("Error in convertBNBtoBTC:", error);
    }
  }

  async function convertETHtoUSDT(ethAmount) {
    try {
      const ethToUsd = await getPrice(MainnetPriceFeeds.EthUsd);
      const usdtToUsd = await getPrice(MainnetPriceFeeds.UsdtUsd);
      const usdtAmount = (ethAmount * ethToUsd) / usdtToUsd;
      setConversionResult(`${ethAmount} ETH is approximately ${usdtAmount.toFixed(5)} USDT`);
    } catch (error) {
      console.error("Error in convertETHtoUSDT:", error);
    }
  }

  async function convertBTCtoUSDT(btcAmount) {
    try {
      const btcToUsd = await getPrice(MainnetPriceFeeds.BtcUsd);
      const usdtToUsd = await getPrice(MainnetPriceFeeds.UsdtUsd);
      const usdtAmount = (btcAmount * btcToUsd) / usdtToUsd;
      setConversionResult(`${btcAmount} BTC is approximately ${usdtAmount.toFixed(5)} USDT`);
    } catch (error) {
      console.error("Error in convertBTCtoUSDT:", error);
    }
  }

  async function convertBNBtoUSDT(bnbAmount) {
    try {
      const bnbToUsd = await getPrice(MainnetPriceFeeds.BnbUsd);
      const usdtToUsd = await getPrice(MainnetPriceFeeds.UsdtUsd);
      const usdtAmount = (bnbAmount * bnbToUsd) / usdtToUsd;
      setConversionResult(`${bnbAmount} BNB is approximately ${usdtAmount.toFixed(5)} USDT`);
    } catch (error) {
      console.error("Error in convertBNBtoUSDT:", error);
    }
  }

  async function convertUSDTtoETH(usdtAmount) {
    try {
      const usdtToUsd = await getPrice(MainnetPriceFeeds.UsdtUsd);
      const ethToUsd = await getPrice(MainnetPriceFeeds.EthUsd);
      const ethAmount = (usdtAmount * usdtToUsd) / ethToUsd;
      setConversionResult(`${usdtAmount} USDT is approximately ${ethAmount.toFixed(5)} ETH`);
    } catch (error) {
      console.error("Error in convertUSDTtoETH:", error);
    }
  }

  async function convertUSDTtoBTC(usdtAmount) {
    try {
      const usdtToUsd = await getPrice(MainnetPriceFeeds.UsdtUsd);
      const btcToUsd = await getPrice(MainnetPriceFeeds.BtcUsd);
      const btcAmount = (usdtAmount * usdtToUsd) / btcToUsd;
      setConversionResult(`${usdtAmount} USDT is approximately ${btcAmount.toFixed(5)} BTC`);
    } catch (error) {
      console.error("Error in convertUSDTtoBTC:", error);
    }
  }

  async function convertUSDTtoBNB(usdtAmount) {
    try {
      const usdtToUsd = await getPrice(MainnetPriceFeeds.UsdtUsd);
      const bnbToUsd = await getPrice(MainnetPriceFeeds.BnbUsd);
      const bnbAmount = (usdtAmount * usdtToUsd) / bnbToUsd;
      setConversionResult(`${usdtAmount} USDT is approximately ${bnbAmount.toFixed(5)} BNB`);
    } catch (error) {
      console.error("Error in convertUSDTtoBNB:", error);
    }
  }

  async function handleConversion() {
    console.log(`Conversion type: ${conversionType}, Amount: ${amount}`);
    if (conversionType === "ETHtoBTC") {
      await convertETHtoBTC(amount);
    } else if (conversionType === "BTCtoETH") {
      await convertBTCtoETH(amount);
    } else if (conversionType === "ETHtoBNB") {
      await convertETHtoBNB(amount);
    } else if (conversionType === "BTCtoBNB") {
      await convertBTCtoBNB(amount);
    } else if (conversionType === "BNBtoETH") {
      await convertBNBtoETH(amount);
    } else if (conversionType === "BNBtoBTC") {
      await convertBNBtoBTC(amount);
    } else if (conversionType === "ETHtoUSDT") {
      await convertETHtoUSDT(amount);
    } else if (conversionType === "BTCtoUSDT") {
      await convertBTCtoUSDT(amount);
    } else if (conversionType === "BNBtoUSDT") {
      await convertBNBtoUSDT(amount);
    } else if (conversionType === "USDTtoETH") {
      await convertUSDTtoETH(amount);
    } else if (conversionType === "USDTtoBTC") {
      await convertUSDTtoBTC(amount);
    } else if (conversionType === "USDTtoBNB") {
      await convertUSDTtoBNB(amount);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={web3jsLogo} className="App-logo" alt="logo" />
        <h1 className="animated-heading">Welcome to Crypto Converter</h1>
        <div className="conversion-controls">
          <select
            id="conversionType"
            name="conversionType"
            value={conversionType}
            onChange={(e) => setConversionType(e.target.value)}
          >
            <option value="ETHtoBTC">ETH to BTC</option>
            <option value="BTCtoETH">BTC to ETH</option>
            <option value="ETHtoBNB">ETH to BNB</option>
            <option value="BTCtoBNB">BTC to BNB</option>
            <option value="BNBtoETH">BNB to ETH</option>
            <option value="BNBtoBTC">BNB to BTC</option>
            <option value="ETHtoUSDT">ETH to USDT</option>
            <option value="BTCtoUSDT">BTC to USDT</option>
            <option value="BNBtoUSDT">BNB to USDT</option>
            <option value="USDTtoETH">USDT to ETH</option>
            <option value="USDTtoBTC">USDT to BTC</option>
            <option value="USDTtoBNB">USDT to BNB</option>
          </select>
          <input
            id="amount"
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleConversion}>Convert</button>
        </div>
        <p className="conversion-result">{conversionResult}</p>
      </header>
    </div>
  );
}

export default App;