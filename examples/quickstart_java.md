# Java Quick Start

## Install

```
Maven: add openai4j dependency
```

## Basic Usage

```java
import com.theokanning.openai.client.OpenAiApi;
import com.theokanning.openai.client.OpenAiService;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;

public class YingSuanQuickStart {
    public static void main(String[] args) {
        OpenAiService service = new OpenAiService("your-api-key");
        // Note: Configure base URL to https://yingsuan.top/v1
        
        ChatCompletionRequest request = ChatCompletionRequest.builder()
            .model("deepseek-chat")
            .messages(List.of(new ChatMessage("user", "Hello!")))
            .build();
        
        var response = service.createChatCompletion(request);
        System.out.println(response.getChoices().get(0).getMessage().getContent());
    }
}
```

Replace `your-api-key` with your YingSuan API key. Get one at [yingsuan.top](https://yingsuan.top/api).

More examples: [github.com/yingsuan-ai/api-examples](https://github.com/yingsuan-ai/api-examples)
