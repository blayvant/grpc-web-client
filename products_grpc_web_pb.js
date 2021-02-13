/**
 * @fileoverview gRPC-Web generated client stub for products
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.products = require('./products_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.products.ProductsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.products.ProductsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.products.Empty,
 *   !proto.products.Product>}
 */
const methodDescriptor_Products_GetAllProducts = new grpc.web.MethodDescriptor(
  '/products.Products/GetAllProducts',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.products.Empty,
  proto.products.Product,
  /**
   * @param {!proto.products.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.products.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.products.Empty,
 *   !proto.products.Product>}
 */
const methodInfo_Products_GetAllProducts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.products.Product,
  /**
   * @param {!proto.products.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.products.Product.deserializeBinary
);


/**
 * @param {!proto.products.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.products.Product>}
 *     The XHR Node Readable Stream
 */
proto.products.ProductsClient.prototype.getAllProducts =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/products.Products/GetAllProducts',
      request,
      metadata || {},
      methodDescriptor_Products_GetAllProducts);
};


/**
 * @param {!proto.products.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.products.Product>}
 *     The XHR Node Readable Stream
 */
proto.products.ProductsPromiseClient.prototype.getAllProducts =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/products.Products/GetAllProducts',
      request,
      metadata || {},
      methodDescriptor_Products_GetAllProducts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.products.Product,
 *   !proto.products.Result>}
 */
const methodDescriptor_Products_AddProduct = new grpc.web.MethodDescriptor(
  '/products.Products/AddProduct',
  grpc.web.MethodType.UNARY,
  proto.products.Product,
  proto.products.Result,
  /**
   * @param {!proto.products.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.products.Result.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.products.Product,
 *   !proto.products.Result>}
 */
const methodInfo_Products_AddProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.products.Result,
  /**
   * @param {!proto.products.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.products.Result.deserializeBinary
);


/**
 * @param {!proto.products.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.products.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.products.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.products.ProductsClient.prototype.addProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/products.Products/AddProduct',
      request,
      metadata || {},
      methodDescriptor_Products_AddProduct,
      callback);
};


/**
 * @param {!proto.products.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.products.Result>}
 *     Promise that resolves to the response
 */
proto.products.ProductsPromiseClient.prototype.addProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/products.Products/AddProduct',
      request,
      metadata || {},
      methodDescriptor_Products_AddProduct);
};


module.exports = proto.products;

