# Instructions

`npm install`

`npx webpack --watch client.js`

`npx superstatic --port 8081 --host 127.0.0.1`

Go to http://localhost:8081 to see the application in action

### NOTES:

The "_pb.js" files were generated via the protobuff compiler using the following command, which must also run after making changes to the .proto file:

`protoc --proto_path=.\ --js_out=import_style=commonjs:.\ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.\ .\products.proto`

The service with which this client application is communicating is expected to be running on https://localhost:5001

