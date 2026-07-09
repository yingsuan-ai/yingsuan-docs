#!/bin/bash
# YingSuan AI - Quick Start Example (cURL)
# No SDK required - just curl!

# Replace with your YingSuan API key
API_KEY="sk-your-yingsuan-key-here"
BASE_URL="https://yingsuan.top/v1"

echo "=========================================="
echo "YingSuan AI - Quick Start Demo (cURL)"
echo "=========================================="

# List available models
echo ""
echo "Available models:"
curl -s -H "Authorization: Bearer $API_KEY" "$BASE_URL/models" | python3 -m json.tool

# Chat completion
echo ""
echo "Sending chat request..."
curl -s -X POST "$BASE_URL/chat/completions" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-chat",
    "messages": [
      {"role": "system", "content": "You are a helpful AI assistant."},
      {"role": "user", "content": "Tell me about GPU computing in Southeast Asia in 3 sentences."}
    ],
    "temperature": 0.7,
    "max_tokens": 1024
  }' | python3 -m json.tool

# Check usage
echo ""
echo "Current usage:"
curl -s -H "Authorization: Bearer $API_KEY" "$BASE_URL/usage" | python3 -m json.tool
