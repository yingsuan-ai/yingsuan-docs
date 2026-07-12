# Rust Quick Start

## Install

```
cargo add async-openai
```

## Basic Usage

```rs
use async_openai::{Client, config::OpenAIConfig};
use async_openai::types::{ChatCompletionRequestMessage, ChatCompletionRequestUserMessageArgs, CreateChatCompletionRequestArgs};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let config = OpenAIConfig::new()
        .with_api_key("your-api-key")
        .with_api_base("https://yingsuan.top/v1");

    let client = Client::with_config(config);

    let request = CreateChatCompletionRequestArgs::default()
        .model("deepseek-chat")
        .messages(vec![
            ChatCompletionRequestMessage::User(
                ChatCompletionRequestUserMessageArgs::default()
                    .content("Hello!")
                    .build()?
            )
        ])
        .build()?;

    let response = client.chat().create(request).await?;
    println!("{}", response.choices[0].message.content.unwrap_or_default());
    Ok(())
}
```

Replace `your-api-key` with your YingSuan API key. Get one at [yingsuan.top](https://yingsuan.top/api).

More examples: [github.com/yingsuan-ai/api-examples](https://github.com/yingsuan-ai/api-examples)
