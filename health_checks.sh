#!/bin/bash

echo "Running Scrip Check"

response=$(curl https://savy-fso-pokedex.fly.dev/health -s)

if [ "$response" == "ok" ]; then
	echo "health check ran successfully"
	exit 1
fi
echo "health check failed"
exit 0