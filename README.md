<div align="center">

# 🖥️ YingSuan AI

### GPU & LLM API Aggregation Platform for South/Southeast Asia

[![Website](https://img.shields.io/badge/Website-yingsuan.top-blue)](https://yingsuan.top)
[![API Docs](https://img.shields.io/badge/API-Documentation-green)](https://yingsuan.top/api.html)
[![Blog](https://img.shields.io/badge/Blog-Latest-orange)](https://yingsuan.top/blog.html)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)]()

</div>

---

## 🌍 What is YingSuan AI?

YingSuan AI is a **GPU compute and LLM API aggregation platform** designed for developers, startups, and research teams in **South and Southeast Asia** (Vietnam, Thailand, Indonesia, Philippines, Singapore, Malaysia, and beyond).

We solve the #1 pain point for developers in this region: **accessing AI compute without a credit card or overseas payment setup**.

### Why YingSuan?

| Problem | Our Solution |
|---------|-------------|
| No Visa/Mastercard to pay AWS/GCP | **Pay via Wise bank transfer** — no credit card needed |
| DeepSeek/OpenAI API requires overseas payment | **We proxy & aggregate APIs** — you pay locally |
| GPU instances too expensive for small teams | **Bulk-brokered pricing** — up to 30% cheaper |
| Complex billing & compliance | **Simple token-based billing** — pay as you go |

---

## ⚡ Quick Start

### 1. Get Your API Key

Email us at [yingsuan_service@163.com](mailto:yingsuan_service@163.com) with:
- Your name and country
- Desired plan: **Starter** (10 RPM) / **Standard** (30 RPM) / **Professional** (60 RPM)
- Payment via Wise bank transfer (minimum $50)

### 2. Call the API

```python
import openai

client = openai.OpenAI(
    api_key="sk-your-yingsuan-key",
    base_url="https://yingsuan.top/v1"
)

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[{"role": "user", "content": "Hello from Southeast Asia!"}]
)

print(response.choices[0].message.content)
```

**100% OpenAI-compatible** — just change `base_url`, no code rewrite needed.

### 3. Supported Models

| Model | Type | Price (per 1M tokens) |
|-------|------|----------------------|
| `deepseek-chat` | Chat/Completion | Competitive pricing |
| `deepseek-reasoner` | Reasoning | Competitive pricing |
| More models coming soon... | | |

---

## 💰 Pricing Plans

| Plan | RPM Limit | Price | Best For |
|------|----------|-------|----------|
| **Starter** | 10 RPM | $50 minimum | Individual developers |
| **Standard** | 30 RPM | $200 | Small teams & startups |
| **Professional** | 60 RPM | $500 | Production deployments |
| **Enterprise** | Unlimited | Custom | Large organizations |

> All plans include: API access, usage dashboard, email support, no credit card required.

---

## 🔧 API Reference

Base URL: `https://yingsuan.top/v1`

### Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/v1/chat/completions` | POST | Chat completions (OpenAI-compatible) |
| `/v1/models` | GET | List available models |
| `/v1/usage` | GET | Check your token usage |

### Rate Limiting

- Sliding window: 60-second window
- RPM limits per plan (see above)
- Rate limit headers in response: `X-RateLimit-Limit`, `X-RateLimit-Remaining`

Full API documentation: [yingsuan.top/api.html](https://yingsuan.top/api.html)

---

## 🏗️ Architecture

```
┌─────────────┐     ┌──────────────────┐     ┌───────────────┐
│  Your App   │────▶│  YingSuan Gateway │────▶│  DeepSeek API │
│  (any SDK)  │     │  (yingsuan.top)   │     │  (upstream)   │
└─────────────┘     ├──────────────────┤     ├───────────────┤
                    │  Rate Limiting    │     │  More upstream │
                    │  Key Management   │     │  providers...  │
                    │  Usage Tracking   │     └───────────────┘
                    └──────────────────┘
```

---

## 🌏 Target Markets

🇻🇳 Vietnam · 🇹🇭 Thailand · 🇮🇩 Indonesia · 🇵🇭 Philippines · 🇲🇾 Malaysia · 🇸🇬 Singapore · 🇱🇰 Sri Lanka · 🇧🇩 Bangladesh · 🇵🇰 Pakistan

---

## 📄 Legal & Compliance

- [Acceptable Use Policy](https://yingsuan.top/acceptable-use-policy.html)
- [Terms of Service](https://yingsuan.top/terms.html)
- [Privacy Policy](https://yingsuan.top/privacy.html)

---

## 📬 Contact & Support

- **Website**: [yingsuan.top](https://yingsuan.top)
- **Email**: [yingsuan_service@163.com](mailto:yingsuan_service@163.com)
- **Blog**: [yingsuan.top/blog.html](https://yingsuan.top/blog.html)

---

<div align="center">

**Built for developers who deserve AI access — regardless of payment infrastructure.**

⭐ Star this repo to support open AI access in Southeast Asia!

</div>
