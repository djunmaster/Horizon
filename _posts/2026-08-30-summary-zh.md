---
layout: default
title: "Horizon Summary: 2026-08-30 (ZH)"
date: 2026-08-30
lang: zh
---

> 从 32 条内容中筛选出 4 条重要资讯。

---

**科技新闻**
1. [开放多智能体环境自主数学发现](#item-tech-news-1) ⭐️ 8.0/10
2. [腾讯发布并开源 Hy4 Preview](#item-tech-news-2) ⭐️ 7.0/10
3. [LeVJEPA：视频预训练的新帕累托前沿](#item-tech-news-3) ⭐️ 7.0/10

**财经新闻**
1. [美国第九巡回法院裁定预测市场败诉，或引发最高法院对决](#item-finance-news-1) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [开放多智能体环境自主数学发现](https://aihot.virxact.com/items/cmte36nzj02isrog2hwxpthhn) ⭐️ 8.0/10

在名为 Station 的开放世界多智能体环境中，没有中央协调器，来自不同模型家族的 AI 智能体自主选择了研究方向、开展实验并构建了共享科学文献。该环境在 AlphaEvolve 目录的 12 个构造问题及两个额外案例研究中，于五个问题上取得了超越现有文献的新结果，包括有限域 Kakeya 集的新无限族和 11 维 604 点亲吻构型，并生成了可解释的定理与分析。所有原始智能体对话、证明和验证代码均已公开，相关论文见于 arXiv:2608.23691，这为多智能体自主科学发现提供了可复现的开源产物。

rss · AIHOT 精选全文 · 8月29日 07:32

**「背景」** Station 是一个无中央协调器的开放世界多智能体环境，来自不同模型家族的 AI 智能体可在其中自主选择研究方向并构建共享科学文献。该环境基于 AlphaEvolve 目录的构造问题集开展自主数学发现实验，相关论文已于 arXiv 发布。

**「影响」** 数学与 AI 研究人员现在可基于公开的 Station 对话与验证代码复现并拓展在有限域 Kakeya 集、11 维 604 点亲吻构型等构造问题上取得的新结果。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2608.23691">Autonomous Mathematical Discovery in an Open-World Multi-Agent ...</a></li>

</ul>
</details>

**标签**: `#multi-agent systems`, `#autonomous discovery`, `#mathematical research`, `#AI research`, `#open-source`

---

<a id="item-tech-news-2"></a>
### [腾讯发布并开源 Hy4 Preview](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/) ⭐️ 7.0/10

腾讯发布并开源了人工智能模型 Hy4 Preview，据称该模型参与了自身训练过程的自动化优化，建立了早期递归自我提升循环。该模型在 OpenRouter 平台上迅速获得大量采用，显示出较强的社区关注度。此次开源使更多研究者与开发者能够直接获取和部署该模型，推动相关生态实验。

hackernews · shenli3514 · 8月29日 19:33 · [社区讨论](https://news.ycombinator.com/item?id=49492632)

**「背景」** 腾讯混元（Hunyuan，简称 Hy）系列是腾讯自研的大语言模型产品线，Hy4 preview 是其最新发布的下一代模型，具备 770B 总参数、49B 激活参数及超过 1M 的上下文窗口。开源指腾讯在 Hugging Face、ModelScope 等平台公开模型权重供自由使用，并同步将模型接入元宝、CodeBuddy 等腾讯产品。

**「影响」** 开发者和组织现在可以获取 Hy4 Preview 的开放权重，用于推理、微调或集成到应用中。但其在特定任务（如代码生成）中的实际表现仍需更多独立评估。

**「社区讨论」** 社区中 minimaxir 指出 Hy4 在 OpenRouter 上短时间内处理数万亿 token 且缓存成本仅 5%，性价比突出；但 joshheitzman 反馈通过 novita.ai 托管使用时作为编码代理效果有限。codethief 与 jorl17 分别讨论了其自我提升循环及前代 Hy3 的代理能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/">Tencent Releases and Open-Sources Tencent Hy4 preview - Tencent</a></li>
<li><a href="https://huggingface.co/tencent/Hy4-preview">tencent/Hy4-preview · Hugging Face</a></li>
<li><a href="https://finance.biggo.com/news/439ad16c-57ce-4efc-bfd0-83f079cfdc9c">Tencent Hunyuan releases next-generation Hy4 preview model, open-sourced and launched across multiple products — BigGo Finance</a></li>

</ul>
</details>

**标签**: `#large-language-models`, `#open-source`, `#Tencent`, `#AI-self-improvement`, `#model-release`

---

<a id="item-tech-news-3"></a>
### [LeVJEPA：视频预训练的新帕累托前沿](https://twitter.com/ylecun/status/tweet-2093549515831701539) ⭐️ 7.0/10

Yann LeCun 转发了 Lukas Kuhn 关于 LeVJEPA 的推文，该工作被称为视频预训练的新帕累托前沿。LeVJEPA 是一种稳定且高效的端到端视频预训练方法，旨在提升视频表征学习的效率与性能。由于原始推文被截断，目前公开的技术细节有限，但其宣称在效率与效果权衡上取得了进展。

twitter · Yann LeCun · 8月29日 04:01

**「背景」** 自监督视频预训练此前依赖 EMA 目标编码器、停止梯度、容量受限预测器（如 V-JEPA）或带解码器的像素空间重建（如 VideoMAE）等启发式方法来避免表征崩溃。LeVJEPA 是首个在 LeJEPA 的无崩溃目标下训练的视频编码器，从而摆脱了上述启发式设计。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/MLO-lab/LeVJEPA">GitHub - MLO-lab/LeVJEPA · GitHub</a></li>

</ul>
</details>

**标签**: `#video pretraining`, `#LeVJEPA`, `#efficient training`, `#computer vision`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [美国第九巡回法院裁定预测市场败诉，或引发最高法院对决](https://www.cnbc.com/2026/08/28/appeals-court-rules-against-prediction-markets-tees-up-scotus-fight.html) ⭐️ 7.0/10

美国第九巡回上诉法院驳回 Kalshi、Crypto.com 等预测市场平台针对内华达州博彩管制委员会的禁令请求，裁定体育相关事件合约不属于联邦监管的互换合约（swap，一种衍生品）。

rss · CNBC Finance · 8月29日 02:23

**「背景」** 此前第三巡回上诉法院于今年 4 月初裁定仅商品期货交易委员会（CFTC，联邦衍生品监管机构）有权监管体育事件合约，而第九巡回法院相反裁决形成“巡回法院分裂”（不同上诉法院对同题结论相反），可能交由最高法院裁决。

**标签**: `#prediction markets`, `#regulatory jurisdiction`, `#circuit split`, `#CFTC`, `#event contracts`

---