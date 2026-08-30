---
layout: default
title: "Adam's Daily Digest: 2026-08-30"
description: "AI & research digest"
date: 2026-08-30
lang: en
---

**Technology News**
1. [Autonomous Mathematical Discovery in Open-World Multi-Agent Environment](#item-tech-news-1) ⭐️ 9.0/10
2. [Tencent releases and open-sources Hy4 preview](#item-tech-news-2) ⭐️ 8.0/10
3. [Hidden AI agent skill files extracted via normal use](#item-tech-news-3) ⭐️ 7.0/10
4. [Sony Music and Warner Chappell sue Anthropic for billions](#item-tech-news-4) ⭐️ 7.0/10
5. [Classical SPC beats SOTA on TSB-AD-M benchmark](#item-tech-news-5) ⭐️ 7.0/10
6. [31,352 Hourly LLM Scores: 2.8 Within-Day, 8.4 Between-Day Variation](#item-tech-news-6) ⭐️ 7.0/10
7. [South Korea selects consortia for free public AI by year-end](#item-tech-news-7) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Autonomous Mathematical Discovery in Open-World Multi-Agent Environment](https://aihot.virxact.com/items/cmte36nzj02isrog2hwxpthhn) ⭐️ 9.0/10

The decentralized open-world multi-agent environment Station enabled AI agents from different model families to autonomously select research directions, run experiments, and compile shared scientific literature without a central coordinator. On 12 construction problems from the AlphaEvolve catalog plus two additional case studies, the system produced results beyond existing literature on five problems, including a new infinite family of finite field Kakeya sets and an 11-dimensional 604-point kissing configuration, while generating interpretable theorems and analyses. All raw agent conversations, proofs, and verification code have been publicly released, marking a step toward open and reproducible AI-driven mathematical discovery.

rss · AIHot Full · Aug 29, 07:32

**「Background」** AlphaEvolve is a catalog of construction problems used as a testbed for evaluating mathematical discovery in this work. Station is a decentralized multi-agent environment where AI agents from diverse model families collaborate without a central coordinator to pursue open-ended research.

**「Impact」** Researchers can now verify and build upon Station&\#x27;s publicly released proofs and verification code for five novel mathematical constructions.

**Tags**: `#multi-agent systems`, `#AI mathematical discovery`, `#autonomous agents`, `#open science`

---

<a id="item-tech-news-2"></a>
### [Tencent releases and open-sources Hy4 preview](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/) ⭐️ 8.0/10

Tencent has released and open-sourced the Hy4 preview large language model, making its code publicly available. According to community commentary, the model contributed to its own development by participating in automated optimization of training methods, data strategies, evaluation frameworks, and low-level operators, establishing an early recursive self-improvement loop. The model has seen rapid adoption on OpenRouter, with reported trillions of tokens processed within a couple of days and a relatively low 5% cache cost versus typical 10–20% rates from other providers. The release is notable as a major open-source AI model with self-improvement claims, though primary documentation details are limited.

hackernews · shenli3514 · Aug 29, 19:33 · [Discussion](https://news.ycombinator.com/item?id=49492632)

**「Background」** Tencent&\#x27;s Hunyuan \(Hy\) family is a series of large language models, with Hy4 preview being the latest next-generation release that the company states reaches the open-source frontier via scaling on model size, context length, and training data \(tool-1-1, tool-1-3\). The model was open-sourced with 770B total parameters, 49B active parameters, and a context window exceeding 1M tokens \(tool-1-2\).

**「Impact」** OpenRouter users gain a low-cost, high-throughput inference option with Hy4 preview&\#x27;s 5% cache cost and trillions of tokens processed within days of release.

**「Community discussion」** Commenters highlighted Hy4&\#x27;s recursive self-improvement training loop and rapid, cost-effective uptake on OpenRouter, while one criticized the release&\#x27;s benchmark chart formatting.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/Tencent-Hunyuan/Hy4-preview">GitHub - Tencent-Hunyuan/Hy4-preview</a></li>
<li><a href="https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/">Tencent Releases and Open-Sources Tencent Hy4 preview</a></li>
<li><a href="https://hy.tencent.ai/research/hy4-preview">Tencent Hy</a></li>

</ul>
</details>

**Tags**: `#Tencent`, `#open-source`, `#large-language-models`, `#AI-self-improvement`

---

<a id="item-tech-news-3"></a>
### [Hidden AI agent skill files extracted via normal use](https://aihot.virxact.com/items/cmtewrtdf05gurovjhkdl9rws) ⭐️ 7.0/10

A new paper demonstrates that hidden AI agent skill files cannot be protected merely by confidentiality, as attackers can reconstruct the skills through normal service usage. The Daydreaming method, even at the weakest access level, recovered 86.8% of original skill capability across 7 skills and 4 victim models, about 4 times the recovery of SigLeak, with a median of only 32 calls. The extraction remains effective when disclosure defense mechanisms are enabled, exposing a security weakness relevant to AI agent deployments.

rss · AIHot All · Aug 29, 21:00

**「AI Agent Skill Files」** AI agent skill files are instruction sets, often distributed as SKILL.md documents placed in an agent&\#x27;s skill folder, that define specialized capabilities such as removing AI-generated writing traces or providing design intelligence \(tool-1-1, tool-1-3\). They are sometimes kept hidden to shield proprietary logic from direct inspection.

**「Impact」** Developers and operators of AI agents that rely on hidden skill files can no longer assume confidentiality prevents skill extraction by normal users. The reported metrics are limited to 7 skills and 4 victim models under the Daydreaming method.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/blader/humanizer">blader/humanizer: Agent skill that removes signs of AI -generated...</a></li>
<li><a href="https://ui-ux-pro-max-skill.com/">UI UX Pro Max Skill — Design Intelligence for Claude Code</a></li>

</ul>
</details>

**Tags**: `#AI security`, `#AI agents`, `#skill extraction`, `#adversarial attacks`, `#privacy`

---

<a id="item-tech-news-4"></a>
### [Sony Music and Warner Chappell sue Anthropic for billions](https://aihot.virxact.com/items/cmtequv1y01morovjz0egu67t) ⭐️ 7.0/10

Sony Music and Warner Chappell filed a lawsuit against Anthropic in the U.S. District Court for the Northern District of California, alleging large-scale misappropriation of tens of thousands of copyrighted musical works. The publishers seek statutory damages of up to $150,000 per work, which could amount to several billion dollars if the court awards the maximum penalty. The case marks a significant copyright challenge for AI companies regarding the use of protected content in training data, though the brief filing details remain limited.

rss · AIHot All · Aug 29, 18:19

**「Background」** Anthropic is an AI company that developed the Claude family of large language models, which are trained on extensive text datasets. Music publishers such as Sony Music and Warner Chappell own copyrights to musical compositions and have increasingly filed lawsuits alleging that AI firms used protected works without permission in training data.

**「Impact」** Anthropic faces potential statutory damages of up to several billion dollars if the court rules in favor of the publishers.

<details><summary>References</summary>
<ul>
<li><a href="https://www.musicbusinessworldwide.com/now-sony-music-publishing-and-warner-chappell-sue-anthropic-in-multi-billion-dollar-lawsuit-one-of-the-largest-and-most-blatant-ongoing-thefts-of-intellectual-property-in-history/">Sony Music Publishing and Warner Chappell sue Anthropic in multi-billion dollar lawsuit</a></li>
<li><a href="https://www.thenews.com.pk/latest/1414143-sony-and-warner-chappell-sue-anthropic-over-copyrighted-songs-used-in-ai-training">Sony and Warner Chappell sue Anthropic over copyrighted songs used in AI training | Technology | thenews.com.pk</a></li>

</ul>
</details>

**Tags**: `#AI copyright`, `#litigation`, `#Anthropic`, `#music industry`

---

<a id="item-tech-news-5"></a>
### [Classical SPC beats SOTA on TSB-AD-M benchmark](https://www.reddit.com/r/MachineLearning/comments/1w1wt1s/you_can_beat_sota_time_series_anomaly_detection/) ⭐️ 7.0/10

A Reddit post by /u/eamonnkeogh argues that simple Statistical Process Control \(SPC\), a 100-year-old algorithm, outperforms state-of-the-art time series anomaly detection \(TSAD\) methods on Paparrizos’ TSB-AD-M benchmark used in venues like NeurIPS, SIGKDD, and VLDB. The author demonstrates perfect results on an ECG trace example and notes that &\#x27;TAO&\#x27; labeled traces are even easier for SPC, concluding the benchmark is too trivial for meaningful claims of progress. Keogh states he has completed 90% of the work to introduce harder TSAD problems involving sled dogs, tuna, fuel cells, and smart manufacturing, and calls for community introspection as most decade-long advances may be illusory.

reddit · r/MachineLearning · /u/eamonnkeogh · Aug 29, 20:16

**「Background」** Time Series Anomaly Detection \(TSAD\) is a fundamental task across scientific and industrial domains, often evaluated on the TSB-AD-M benchmark suite derived from Paparrizos et al.&\#x27;s TSB-UAD for univariate time series. A NeurIPS 2024 paper notes that the field has long faced critical issues including flawed datasets and inconsistent benchmarking practices.

**「Impact」** Authors using the TSB-AD-M benchmark to validate TSAD algorithms should scrutinize its difficulty given a classical method&\#x27;s superior performance.

<details><summary>References</summary>
<ul>
<li><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/c3f3c690b7a99fba16d0efd35cb83b2c-Abstract-Datasets_and_Benchmarks_Track.html">The Elephant in the Room: Towards A Reliable Time - Series Anomaly ...</a></li>
<li><a href="https://thedatumorg.github.io/TSB-AD/">TSB - AD</a></li>

</ul>
</details>

**Tags**: `#time series`, `#anomaly detection`, `#benchmarking`, `#machine learning evaluation`, `#statistical process control`

---

<a id="item-tech-news-6"></a>
### [31,352 Hourly LLM Scores: 2.8 Within-Day, 8.4 Between-Day Variation](https://www.reddit.com/r/MachineLearning/comments/1w1jp1j/i_analyzed_31352_hourly_llm_benchmark_scores/) ⭐️ 7.0/10

A Reddit user analyzed 31,352 hourly LLM benchmark scores from 49 model identifiers using AIStupidLevel, an open-source MIT-licensed continuous evaluation pipeline, finding within-day variation of 2.8 points versus between-day variation of 8.4 points, about 3× greater. The system repeatedly tests models on coding, deep reasoning, tool-calling, and canary tasks with executed responses and five-time aggregation, keeping prompts and scoring consistent to isolate stochastic noise from sustained drift. By aggregating into daily medians and applying sequential change-point detection with statistical thresholds, the approach provides a stronger signal for detecting production API performance degradation than isolated hourly measurements. The project has grown to 169,858 benchmark runs across 81 historical models from 6 providers and also powers an OpenAI-compatible router for task-specific model selection.

reddit · r/MachineLearning · /u/ionutvi · Aug 29, 11:08

**「Background」** Most LLM evaluations measure performance at a single point in time, while production API models may drift due to updates or inherent stochasticity. Continuous evaluation pipelines repeatedly test models to separate normal noise from sustained changes in capability.

**「Impact」** The monitoring system flagged a 32% sustained performance decline in Gemini 3.1 Flash Lite as a critical incident, demonstrating the practical utility of the drift-detection approach for production API consumers.

**Tags**: `#LLM evaluation`, `#benchmark stability`, `#open-source tool`, `#machine learning`, `#AI monitoring`

---

<a id="item-tech-news-7"></a>
### [South Korea selects consortia for free public AI by year-end](https://www.koreatimes.co.kr/business/tech-science/20260828/skt-kt-kakao-consortiums-selected-for-free-ai-service-for-public) ⭐️ 7.0/10

The South Korean Ministry of Science and ICT selected three consortia led by SK Telecom, KT, and Kakao to operate the &\#x27;AI for All&\#x27; project, which will provide a token-unlimited free AI service to all citizens using domestically developed large language models. Internal testing starts in September and the service is scheduled to officially launch by the end of the year. The government will supply the three consortia with 512 Nvidia B200 chips and subsidize nationwide operating costs from 2027, while the service can integrate with government systems for medical appointments, housing search, and tax consultation, and Naver is not participating.

telegram · zaihuapd · Aug 29, 15:31

**「Background」** The Ministry of Science and ICT is the South Korean government agency responsible for national technology and communications policy. The &\#x27;AI for All&\#x27; project is a government-backed initiative to deliver universal access to services built on domestic AI models.

**Tags**: `#AI industry`, `#government AI`, `#GPU hardware`, `#Korean tech`

---
