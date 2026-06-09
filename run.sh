#!/bin/bash
cd /home/z/my-project
while true; do
  NODE_OPTIONS="--max-old-space-size=384" KEEP_ALIVE_TIMEOUT=0 PORT=3000 HOSTNAME=0.0.0.0 node .next/standalone/server.js 2>&1
  echo "[$(date)] Server crashed, restarting in 3s..." >> /tmp/server-restarts.log
  sleep 3
done
