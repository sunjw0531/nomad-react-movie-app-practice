import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(0);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! There are {coins.length} coins.</h1>
      <h2>
        If you want to exchange USD to Coins, then write your money and choose
        the coin
      </h2>
      <input
        placeholder="write money here"
        onChange={(e) => {
          setMoney(Number(e.target.value));
        }}
      />

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          {/* <select onChange={(e) => console.log(e.target.value)}> */}
          <select
            onChange={(e) => {
              const data = JSON.parse(e.target.value);
              setSelectedCoin([data.name, data.quotes.USD.price]);
            }}
          >
            {coins.map((coin, index) => {
              // return (
              //   <option key={index} value={coin.quotes.USD.price}>
              //     {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              //   </option>
              // );
              return (
                <option key={index} value={JSON.stringify(coin)}>
                  {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                </option>
              );
            })}
          </select>
          <h2>
            Your money : ${money} and you choose {selectedCoin[0]}. <br />
            You can buy {selectedCoin[0]} : {money / selectedCoin[1]}
          </h2>
        </>
      )}
    </div>
  );
}

export default App;
