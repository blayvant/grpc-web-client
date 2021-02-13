const { Product, Empty, Result } = require('./products_pb');
const { ProductsClient } = require('./products_grpc_web_pb');

const client = new ProductsClient('https://localhost:5001');

const txtName = document.getElementById('name');
const txtCode = document.getElementById('code');
const btnAddProduct = document.getElementById('addProduct');
const trProducts = document.getElementById('trProducts');

const getAllProducts = document.getElementById('getAllProducts');

const resultText = document.getElementById('result');

getAllProducts.onclick = () => {
    trProducts.innerHTML = '';
    getProductsStream();
};

btnAddProduct.onclick = () => {

    var request = new Product();
    request.setName(txtName.value);
    request.setCode(txtCode.value);

    client.addProduct(request, {}, (err, response) => {
        console.log(response);
        resultText.innerHTML = response.getMsg();
    });
};

function getProductsStream () {
    var request = new Empty();

    streamingCall = client.getAllProducts(request, {});
    streamingCall.on('data', response => {
        console.log('stream started', response);
        trProducts.innerHTML += `<tr><td>${response.getName()}</td><td>${response.getCode()}</td><td>${response.getStock()}</td>`;
    });

    streamingCall.on('end', () => {
        console.log('stream ended');
    });
};
