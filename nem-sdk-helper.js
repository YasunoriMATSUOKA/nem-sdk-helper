NemSdkHelper = (() => {
  'use strict';
  var nem = require('nem-sdk').default;
  return {
    //Not NEM
    //html Escape
    htmlEscape: (string) => {
      if(typeof string !== 'string') {
        return string;
      }
      return string.replace(/[&'`"<>]/g, function(match) {
        return {
          '&': '&amp;',
          "'": '&#x27;',
          '`': '&#x60;',
          '"': '&quot;',
          '<': '&lt;',
          '>': '&gt;',
        }[match]
      });
    },
    
    //NIS1 Node
    //get NIS1 Node List
    getNIS1NodeList: async () => {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const nis1NodeListUrl = "https://s3-ap-northeast-1.amazonaws.com/xembook.net/data/v4/node.json";
      const url = proxy + nis1NodeListUrl;
      const abortController = new AbortController();
      setTimeout(() => abortController.abort(), 10000);
      const nis1NodeList = await fetch(url, {
        signal: abortController.signal
      })
      .then((res) => {
        return res.json();
      }).then((json) => {
        return json;
      }).catch((error) => {
        console.log(error);
        return {};
      });
      return nis1NodeList;
    },
    //Get NIS1 https Node List
    getNIS1HttpsNodeList: (nis1NodeList) => {
      return nis1NodeList.https;
    },
    //Get NIS1 https random node
    getNIS1HttpsRandomNode: (nis1NodeList) => {
      return nis1NodeList.https[floor(Math.random()*nis1NodeList.https.length)];
    },
    
    //nem-sdk
    //Validate address
    isValidAddress: (rawAddress) => {
      const address = htmlEscape(rawAddress).replace(/-/g,"").trim();
      return nem.model.address.isValid(address) ? true : false;
    },
    getAddressFromPrivateKey: (rawPrivateKey) => {
      const privateKey = htmlEscape(rawPrivateKey).trim();
      const keyPair = nem.crypto.keyPair.create(htmlEscape(privateKey));
      const publicKey = keyPair.publicKey.toString();
      const address = nem.model.address.toAddress(
        publicKey,
        nem.model.network.data.mainnet.id
      );
      if isValidAddress(address){
        return address;
      } else{
        return "";
      }
    },
    isNotUsedAddress: async (rawAddress) => {
      //
      return (true ? true : false);
    },
    sendTx: async (senderPrivateKey, senderAddress, recipientAddress, amount, message) => {
      //
      const result = "dummy";
      return result;
    },
    receiveTx: async (recipientAddress, amount, message) => {
      //
    }
  };
})();