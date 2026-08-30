---
layout: default
title: Home
---

<div class="digest-home">
  <div id="lang-zh" class="lang-section">
    {% assign zh_posts = site.posts | where: "lang", "zh" %}
    {% assign latest_zh = zh_posts | first %}

    <section class="digest-hero" aria-labelledby="digest-title-zh">
      <div class="digest-hero-inner">
        <h1 id="digest-title-zh">Adam's Daily Digest</h1>
        <p>AI 驱动的技术与研究日报</p>
        {% if latest_zh %}
          <a class="digest-date-pill" href="{{ latest_zh.url | relative_url }}" aria-label="打开最新中文日报">
            <span class="calendar-glyph" aria-hidden="true"></span>
            {{ latest_zh.date | date: "%Y-%m-%d" }}
          </a>
        {% endif %}
      </div>
    </section>

    <section class="digest-panel" aria-labelledby="digest-list-title-zh">
      <div class="digest-panel-heading">
        <span class="leaf-glyph" aria-hidden="true"></span>
        <div>
          <h2 id="digest-list-title-zh">每日速递</h2>
          <p>聚焦技术前沿，洞察每日价值</p>
        </div>
        <a class="digest-rss-link" href="{{ '/feed-zh.xml' | relative_url }}" aria-label="订阅中文日报">RSS</a>
      </div>

      <ol class="digest-timeline" data-digest-list>
        {% for post in zh_posts limit:20 %}
          {% assign selected_count = "" %}
          {% if post.content contains "筛选出 " %}
            {% assign selected_count = post.content | split: "筛选出 " | last | split: " 条" | first %}
          {% endif %}
          <li class="digest-item{% if forloop.index > 5 %} is-extra-hidden{% endif %}">
            <a class="digest-card" href="{{ post.url | relative_url }}">
              <time class="digest-card-date" datetime="{{ post.date | date_to_xmlschema }}">
                <span>{{ post.date | date: "%m-%d" }}</span>
                <small>{{ post.date | date: "%Y" }}</small>
              </time>
              <span class="digest-document-glyph" aria-hidden="true"></span>
              <span class="digest-card-copy">
                <strong>{% if forloop.first %}今日速递{% else %}每日速递{% endif %}</strong>
                <small>
                  {% if selected_count != "" %}
                    精选 {{ selected_count }} 篇技术与研究内容
                  {% else %}
                    技术与研究日报
                  {% endif %}
                </small>
              </span>
              <span class="digest-chevron" aria-hidden="true"></span>
            </a>
          </li>
        {% else %}
          <li class="digest-empty">暂无内容</li>
        {% endfor %}
      </ol>

      {% if zh_posts.size > 5 %}
        <button class="digest-load-more" type="button" data-digest-load-more>
          加载更多 <span aria-hidden="true"></span>
        </button>
      {% endif %}
    </section>
  </div>

  <div id="lang-en" class="lang-section">
    {% assign en_posts = site.posts | where: "lang", "en" %}
    {% assign latest_en = en_posts | first %}

    <section class="digest-hero" aria-labelledby="digest-title-en">
      <div class="digest-hero-inner">
        <h1 id="digest-title-en">Adam's Daily Digest</h1>
        <p>AI-driven technology and research brief</p>
        {% if latest_en %}
          <a class="digest-date-pill" href="{{ latest_en.url | relative_url }}" aria-label="Open latest English digest">
            <span class="calendar-glyph" aria-hidden="true"></span>
            {{ latest_en.date | date: "%Y-%m-%d" }}
          </a>
        {% endif %}
      </div>
    </section>

    <section class="digest-panel" aria-labelledby="digest-list-title-en">
      <div class="digest-panel-heading">
        <span class="leaf-glyph" aria-hidden="true"></span>
        <div>
          <h2 id="digest-list-title-en">Daily Dispatch</h2>
          <p>Focused signals from technology and research</p>
        </div>
        <a class="digest-rss-link" href="{{ '/feed-en.xml' | relative_url }}" aria-label="Subscribe English digest">RSS</a>
      </div>

      <ol class="digest-timeline" data-digest-list>
        {% for post in en_posts limit:20 %}
          {% assign selected_count = "" %}
          {% if post.content contains "Selected " %}
            {% assign selected_count = post.content | split: "Selected " | last | split: " important" | first %}
          {% endif %}
          <li class="digest-item{% if forloop.index > 5 %} is-extra-hidden{% endif %}">
            <a class="digest-card" href="{{ post.url | relative_url }}">
              <time class="digest-card-date" datetime="{{ post.date | date_to_xmlschema }}">
                <span>{{ post.date | date: "%m-%d" }}</span>
                <small>{{ post.date | date: "%Y" }}</small>
              </time>
              <span class="digest-document-glyph" aria-hidden="true"></span>
              <span class="digest-card-copy">
                <strong>{% if forloop.first %}Today's Digest{% else %}Daily Digest{% endif %}</strong>
                <small>
                  {% if selected_count != "" %}
                    Selected {{ selected_count }} technology and research items
                  {% else %}
                    Technology and research digest
                  {% endif %}
                </small>
              </span>
              <span class="digest-chevron" aria-hidden="true"></span>
            </a>
          </li>
        {% else %}
          <li class="digest-empty">No posts yet</li>
        {% endfor %}
      </ol>

      {% if en_posts.size > 5 %}
        <button class="digest-load-more" type="button" data-digest-load-more>
          Load more <span aria-hidden="true"></span>
        </button>
      {% endif %}
    </section>
  </div>
</div>
