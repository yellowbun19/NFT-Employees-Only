'use strict';

//FBC Wallet - NcSuHQnpntJbeKGkRqiRxo4aswW1CYCjJEA8rLSnUDL

const countriesContainer = document.querySelector('.right');

const render = function (result) {
  console.log(result);

  const { floorPrice } = result;
  console.log(floorPrice);

  const html = `
    <table>
    <tr><class="message"><td>${result.symbol} 
    <td>${result.floorPrice / 1000000000}</li>
    </tr>
    </table>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const getFloorPrice = function (abc) {
  fetch(
    'https://corsproxy.io/?' +
      encodeURIComponent(
        `https://api-mainnet.magiceden.dev/v2/collections/${abc}/stats`
      ),
    requestOptions
  )
    .then(response => response.json())
    .then(result => render(result))
    //.then(result => console.log(result))
    .catch(error => console.log('error', error));
};

getFloorPrice(`degods`);
getFloorPrice(`fearless_bulls_club`);
getFloorPrice(`okay_bears`);

const profile = [`yellowbun`, 35, web3];
console.log(profile);
