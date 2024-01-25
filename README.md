# Deriv API JavaScript Client Library

A lightweight client library for Deriv WebSocket API that is written in TypeScript. This library can be used in both server (NodeJS) and browser environments. Comes fully typed out of the box.

<br />

## Installation

```bash
npm install --save @deriv/api-client
```

<br />

## Browser Usage

In browser environments, use the `DerivAPIBrowserClient` namespace. This implementation uses the browser's native `WebSocket` API. It doesn't require additional dependencies and supports TypeScript typings.

<br />

## Server (NodeJS Usage)

For server-side applications in Node.js, use the `DerivAPIServerClient` namespace. It integrates with the `rxjs/websocket` library to provide WebSocket functionality, necessary due to Node.js's lack of a native WebSocket library. This namespace also supports TypeScript typings.
