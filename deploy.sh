#!/bin/bash
echo 'Starting deploy'
pm2 stop marketing-front
npm i
npm run build
pm2 start marketing-front
echo 'Successfully deployed'