import React from 'react';
import WebCrawler from './WebCrawler';

function App() {
  return (
    <div className="App">
       <WebCrawler />
    </div>
  );
}

export default App;

// PS C:\Users\MADHAN\Desktop\Web Crawler> cd .\server\
// PS C:\Users\MADHAN\Desktop\Web Crawler\server> node server.js
// node:internal/modules/cjs/loader:1078
//   throw err;
//   ^

// Error: Cannot find module 'cors-anywhere'
// Require stack:
// - C:\Users\MADHAN\Desktop\Web Crawler\server\server.js        
//     at Module._resolveFilename (node:internal/modules/cjs/loader:1075:15)
//     at Module._load (node:internal/modules/cjs/loader:920:27) 
//     at Module.require (node:internal/modules/cjs/loader:1141:19)
//     at require (node:internal/modules/cjs/helpers:110:18)     
//     at Object.<anonymous> (C:\Users\MADHAN\Desktop\Web Crawler\server\server.js:1:19)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32) 
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12) {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: [ 'C:\\Users\\MADHAN\\Desktop\\Web Crawler\\server\\server.js' ]
// }

// Node.js v18.16.0
// PS C:\Users\MADHAN\Desktop\Web Crawler\server> npm i cors-anywhere

// added 5 packages in 7s
// PS C:\Users\MADHAN\Desktop\Web Crawler\server> node server.js 
// CORS Anywhere proxy server is listening on port 8080
// PS C:\Users\MADHAN\Desktop\Web Crawler\server> 
//  *  History restored 

// PS C:\Users\MADHAN\Desktop\Web Crawler> cd .\server\         
// PS C:\Users\MADHAN\Desktop\Web Crawler\server> node index.js
// node:internal/modules/cjs/loader:1078
//   throw err;
//   ^

// Error: Cannot find module 'C:\Users\MADHAN\Desktop\Web Crawler\server\index.js'
//     at Module._resolveFilename (node:internal/modules/cjs/loa    at Module._load (node:internal/modules/cjs/loader:920:27)    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47 {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: []
// }

// Node.js v18.16.0
// PS C:\Users\MADHAN\Desktop\Web Crawler\server> npm start     

// > start
// > node server.js

// CORS Anywhere proxy server is listening on port 8080
// ^C^CTerminate batch job (Y/N)? y
// PS C:\Users\MADHAN\Desktop\Web Crawler\server> 

// const corsProxy = require('cors-anywhere');

// // Create an instance of the CORS Anywhere server
// const server = corsProxy.createServer({
//   originWhitelist: [], // Allow all origins by default
//   requireHeaders: [],
//   removeHeaders: ['cookie', 'cookie2'],
// });

// // Define the port to listen on
// const PORT = process.env.PORT || 8080;

// // Start the server
// server.listen(PORT, () => {
//   console.log(`CORS Anywhere proxy server is listening on port ${PORT}`);
// });