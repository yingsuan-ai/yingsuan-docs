# PHP Quick Start

## Install

```
composer require openai-php/client
```

## Basic Usage

```php
<?php
require 'vendor/autoload.php';

use OpenAI\Client;

$client = OpenAI::factory()
    ->withApiKey('your-api-key')
    ->withBaseUri('https://yingsuan.top/v1')
    ->make();

$response = $client->chat()->create([
    'model' => 'deepseek-chat',
    'messages' => [
        ['role' => 'user', 'content' => 'Hello!'],
    ],
]);

echo $response->choices[0]->message->content;
```

Replace `your-api-key` with your YingSuan API key. Get one at [yingsuan.top](https://yingsuan.top/api).

More examples: [github.com/yingsuan-ai/api-examples](https://github.com/yingsuan-ai/api-examples)
