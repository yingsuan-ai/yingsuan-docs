/**
 * YingSuan AI - Quick Start Example (Node.js)
 *
 * This example shows how to use YingSuan's OpenAI-compatible API
 * with the OpenAI Node.js SDK.
 *
 * Step 1: Get your API key by emailing yingsuan_service@163.com
 * Step 2: Install: npm install openai
 * Step 3: Run: node quickstart.js
 */

import OpenAI from 'openai';

// Replace with your YingSuan API key
const API_KEY = 'sk-your-yingsuan-key-here';

const client = new OpenAI({
  apiKey: API_KEY,
  baseURL: 'https://yingsuan.top/v1',
});

async function chatCompletion(message, model = 'deepseek-chat') {
  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: 'You are a helpful AI assistant.' },
      { role: 'user', content: message },
    ],
    temperature: 0.7,
    max_tokens: 1024,
  });
  return response.choices[0].message.content;
}

async function listModels() {
  const models = await client.models.list();
  for (const model of models.data) {
    console.log(`  ${model.id}`);
  }
}

async function main() {
  console.log('='.repeat(50));
  console.log('YingSuan AI - Quick Start Demo (Node.js)');
  console.log('='.repeat(50));

  console.log('\nAvailable models:');
  await listModels();

  console.log('\nSending chat request...');
  const reply = await chatCompletion(
    'Tell me about GPU computing in Southeast Asia in 3 sentences.'
  );
  console.log(`\nResponse:\n${reply}`);

  console.log('\n' + '='.repeat(50));
  console.log('Using DeepSeek Reasoner:');
  const reasoningReply = await chatCompletion(
    'What is the optimal batch size for a GPU with 24GB VRAM running a 7B parameter model?',
    'deepseek-reasoner'
  );
  console.log(`\nResponse:\n${reasoningReply}`);
}

main().catch(console.error);
