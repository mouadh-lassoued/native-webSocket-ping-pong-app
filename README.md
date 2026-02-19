# WebSocket Ping-Pong Server

A tiny Node.js WebSocket project to experiment with native WebSockets (no Socket.IO).  
This project is a learning playground for connection handling, message events, and server-side control.

---

## Features

- Native WebSocket server using [`ws`](https://www.npmjs.com/package/ws)
- ESM module setup
- Assigns unique IDs to each connection
- Server responds to `"ping"` messages with `"pong"`
- Connection closes after 10 pings with a custom message
- Logs connection lifecycle (`connected` / `disconnected`) with client IDs

---

## Getting Started

### Requirements

- Node.js v18+ (supports `crypto.randomUUID()` and ESM modules)
- npm

### Installation

```bash
git clone <repo-url>
cd <repo-folder>
npm install
