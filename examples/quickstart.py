"""
YingSuan AI - Quick Start Example (Python)

This example shows how to use YingSuan's OpenAI-compatible API
to call DeepSeek models without a credit card.

Step 1: Get your API key by emailing yingsuan_service@163.com
Step 2: Install the OpenAI Python SDK: pip install openai
Step 3: Run this script!
"""

from openai import OpenAI

# Replace with your YingSuan API key
API_KEY = "sk-your-yingsuan-key-here"

# Initialize client with YingSuan's base URL
client = OpenAI(
    api_key=API_KEY,
    base_url="https://yingsuan.top/v1"
)

def chat_completion(message: str, model: str = "deepseek-chat"):
    """Send a chat completion request."""
    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": "You are a helpful AI assistant."},
            {"role": "user", "content": message}
        ],
        temperature=0.7,
        max_tokens=1024
    )
    return response.choices[0].message.content

def list_models():
    """List available models."""
    models = client.models.list()
    for model in models.data:
        print(f"  {model.id}")

if __name__ == "__main__":
    print("=" * 50)
    print("YingSuan AI - Quick Start Demo")
    print("=" * 50)
    
    # List available models
    print("\nAvailable models:")
    list_models()
    
    # Chat completion
    print("\nSending chat request...")
    reply = chat_completion("Tell me about GPU computing in Southeast Asia in 3 sentences.")
    print(f"\nResponse:\n{reply}")
    
    # Reasoning model
    print("\n" + "=" * 50)
    print("Using DeepSeek Reasoner (deep logic tasks):")
    reply = chat_completion(
        "What is the optimal batch size for a GPU with 24GB VRAM running a 7B parameter model?",
        model="deepseek-reasoner"
    )
    print(f"\nResponse:\n{reply}")
