'use strict';
const nem = require("nem-sdk").default;
const send = async () => {
  const senderPrivateKey = NemSdkHelper.getPrivateKey(document.getElementById("senderPrivateKey").value);
  const recipientAddress = NemSdkHelper.getAddress(document.getElementById("recipientAddress").value);
  const amount = document.getElementById("sendingAmount").value;
  const message = document.getElementById("sendingMessage").value;
  const nis1NodeList = await NemSdkHelper.getNIS1NodeList();
  console.log(nis1NodeList);
  const endpointUrl = NemSdkHelper.getNIS1HttpsRandomNodeUrl(nis1NodeList);
  console.log(endpointUrl);
  const sendResult = await NemSdkHelper.sendTx(
    senderPrivateKey,
    recipientAddress,
    amount,
    message,
    endpointUrl
  );
  document.getElementById("sendResult").textContent = JSON.stringify(sendResult);
  document.getElementById("senderPrivateKey").value = "";
  document.getElementById("recipientAddress").value = "";
  document.getElementById("sendingAmount").value = "";
  document.getElementById("sendingMessage").value = "";
  console.log(sendResult);
};
const receive = async () => {
  const recipientAddress = NemSdkHelper.getAddress(document.getElementById("recipientAddress2").value);
  const amount = document.getElementById("receivingAmount").value;
  const message = document.getElementById("receivingMessage").value;
  const nis1NodeList = await NemSdkHelper.getNIS1NodeList();
  console.log(nis1NodeList);
  const endpointUrl = NemSdkHelper.getNIS1HttpsRandomNodeUrl(nis1NodeList);
  console.log(endpointUrl);
  const invoiceData = NemSdkHelper.getInvoiceData(recipientAddress, amount, message);
  console.log(invoiceData);
  NemSdkHelper.setInvoiceQrCode("qrInvoice", invoiceData);
  await NemSdkHelper.receiveTx(recipientAddress, amount, message);
};