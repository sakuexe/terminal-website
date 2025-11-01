#!/usr/bin/env bash

BASE_URL="https://api.sakukarttunen.com"
API_URL="$BASE_URL/umbraco/delivery/api/v2/content"

mkdir -p content

curl -s "$API_URL/item/" > content/index.json
curl -s "$API_URL?fetch=descendants:/projects&expand=all" > content/portfolio.json
curl -s "$API_URL?fetch=descendants:/professional-background&expand=all" > content/background.json
