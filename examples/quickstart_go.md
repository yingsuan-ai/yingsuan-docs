# Go Quick Start

## Install

```
go get github.com/sashabaranov/go-openai
```

## Basic Usage

```go
package main

import (
	"context"
	"fmt"
	"log"

	openai "github.com/sashabaranov/go-openai"
)

func main() {
	config := openai.DefaultConfig("your-api-key")
	config.BaseURL = "https://yingsuan.top/v1"

	client := openai.NewClientWithConfig(config)

	resp, err := client.CreateChatCompletion(context.Background(),
		openai.ChatCompletionRequest{
			Model:    openai.GPT3Dot5Turbo, // Use deepseek-chat model
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleUser,
					Content: "Hello! Tell me about GPU cloud computing.",
				},
			},
		},
	)
	if err != nil {
		log.Fatalf("ChatCompletion error: %v\n", err)
	}
	fmt.Println(resp.Choices[0].Message.Content)
}
```

Replace `your-api-key` with your YingSuan API key. Get one at [yingsuan.top](https://yingsuan.top/api).

More examples: [github.com/yingsuan-ai/api-examples](https://github.com/yingsuan-ai/api-examples)
