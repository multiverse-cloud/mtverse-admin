#!/bin/bash
cd /home/z/my-project
while true; do
  NODE_OPTIONS="--max-old-space-size=256" KEEP_ALIVE_TIMEOUT=1 PORT=3000 HOSTNAME=0.0.0.0 node .next/standalone/server.js
  echo "Server exited, restarting in 2s..."
  sleep 2
done
