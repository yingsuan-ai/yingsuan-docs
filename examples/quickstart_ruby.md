# Ruby Quick Start

## Install

```
gem install ruby-openai
```

## Basic Usage

```rb
require "openai"

client = OpenAI::Client.new(
  access_token: "your-api-key",
  uri_base: "https://yingsuan.top/v1"
)

response = client.chat(
  parameters: {
    model: "deepseek-chat",
    messages: [{ role: "user", content: "Hello!" }],
  }
)

puts response.dig("choices", 0, "message", "content")
```

Replace `your-api-key` with your YingSuan API key. Get one at [yingsuan.top](https://yingsuan.top/api).

More examples: [github.com/yingsuan-ai/api-examples](https://github.com/yingsuan-ai/api-examples)
