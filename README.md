# Deriv API Client

A lightweight, zero dependency wrapper around the `WebSockets Web API` and the `native Node WebSocket` (Node V22 and above) that is fully typed to Deriv's Backend WebSocket ([Deriv WS API Explorer](https://api.deriv.com/api-explorer)).

# Requirements

- Node version 22 and above (With native WebSocket API): for running it on the Backend or a Node runner
- For browser - generally all is supported

<br />

# Getting Started

You can start by installing the library via the following commands:

### npm

```bash
npm i @deriv-com/api-client
```

### pnpm

```bash
pnpm install @deriv-com/api-client
```

### yarn

```bash
yarn add @deriv-com/api-client
```

<br />
To use it in your codebase, simply initialise the `DerivAPICLient` class and invoke the methods available. Most of the things you need (Deriv WS endpoints, handler, etc) are all included and internalised within the library itself.

```javascript
const derivAPI = new DerivAPIClient();
const response = await derivAPI.send({ name: "get_account_status" });
console.log(response);
```

<br />

# Functionalities

- Conversion of Request/Response Deriv WS Calls to JavaScript Promises
- Deduping Subscriptions via Internal Subscription Tracking
- Separating data handlers (`onData`) with WebSocket message streams - there will always be only one subscription per payload to Deriv WS BE
- Asynchronous queuing calls when WebSocket calls are `connecting`, `disconnect` or `reconnecting`
- Connection keep alive mechanism
- Allow error handling via callbacks by forwarding the generic Deriv WS `response.error` property
- Fully typed safe endpoints - Typed payload based on endpoint names

<br />

# Core Functions

## Send

```js
async send({ name, payload })
```

The send method is for request/response Deriv WS call that do not have subscriptions. These types of call will only return one response for every call you make.

- `name` - typesafe to all deriv WS request/response endpoint names (`TSocketEndpointNames`).
- `payload` - typesafe to the expected payload (mapped to the `name`). Default payload will always be set to `{ [name]: 1 }`. For example for the `get_account_status` call, if no payload is passed will result in the following payload sent to the BE

```json
{
  "get_account_status": 1
}
```

## Subscribe

## Unsubscribe
