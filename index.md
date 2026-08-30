---
layout: default
title: Home
---

<div class="digest-home">
  <div id="lang-zh" class="lang-section">
    {% assign zh_posts = site.posts | where: "lang", "zh" %}
    {% assign latest_zh = zh_posts | first %}

    <header class="digest-shell digest-masthead" aria-labelledby="digest-title-zh">
      <div>
        <p class="digest-kicker">Daily Brief</p>
        <h1 id="digest-title-zh">Adam's Daily Digest</h1>
        <p>每日汇总值得关注的 AI、技术与研究信号。</p>
      </div>

      <div class="digest-actions">
        {% if latest_zh %}
          <a class="digest-action digest-action-primary" href="{{ latest_zh.url | relative_url }}">最新 {{ latest_zh.date | date: "%Y-%m-%d" }}</a>
        {% endif %}
        <a class="digest-action" href="{{ '/feed-zh.xml' | relative_url }}">RSS</a>
      </div>
    </header>

    <main class="digest-shell digest-section" aria-labelledby="digest-list-title-zh">
      <div class="digest-list-heading">
        <h2 id="digest-list-title-zh">中文日报</h2>
        <span>{{ zh_posts.size }} 期</span>
      </div>

      <ol class="digest-list" data-digest-list>
        {% for post in zh_posts limit:20 %}
          {% assign selected_count = "" %}
          {% if post.content contains "筛选出 " %}
            {% assign selected_count = post.content | split: "筛选出 " | last | split: " 条" | first %}
          {% endif %}
          <li class="digest-row{% if forloop.index > 8 %} is-extra-hidden{% endif %}">
            <a class="digest-row-link" href="{{ post.url | relative_url }}">
              <time class="digest-row-date" datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%Y-%m-%d" }}
              </time>
              <span class="digest-row-copy">
                <strong>{{ post.title }}</strong>
                <small>
                  {% if selected_count != "" %}
                    {{ selected_count }} 条内容
                  {% else %}
                    技术与研究日报
                  {% endif %}
                </small>
              </span>
              <span class="digest-row-action">阅读</span>
            </a>
          </li>
        {% else %}
          <li class="digest-empty">暂无内容</li>
        {% endfor %}
      </ol>

      {% if zh_posts.size > 8 %}
        <button class="digest-load-more" type="button" data-digest-load-more>
          加载更多
        </button>
      {% endif %}
    </main>
  </div>

  <div id="lang-en" class="lang-section">
    {% assign en_posts = site.posts | where: "lang", "en" %}
    {% assign latest_en = en_posts | first %}

    <header class="digest-shell digest-masthead" aria-labelledby="digest-title-en">
      <div>
        <p class="digest-kicker">Daily Brief</p>
        <h1 id="digest-title-en">Adam's Daily Digest</h1>
        <p>A quiet index of the AI, technology, and research signals worth reading.</p>
      </div>

      <div class="digest-actions">
        {% if latest_en %}
          <a class="digest-action digest-action-primary" href="{{ latest_en.url | relative_url }}">Latest {{ latest_en.date | date: "%Y-%m-%d" }}</a>
        {% endif %}
        <a class="digest-action" href="{{ '/feed-en.xml' | relative_url }}">RSS</a>
      </div>
    </header>

    <main class="digest-shell digest-section" aria-labelledby="digest-list-title-en">
      <div class="digest-list-heading">
        <h2 id="digest-list-title-en">English Digest</h2>
        <span>{{ en_posts.size }} issues</span>
      </div>

      <ol class="digest-list" data-digest-list>
        {% for post in en_posts limit:20 %}
          {% assign selected_count = "" %}
          {% if post.content contains " important content" %}
            {% assign selected_count = post.content | split: " items, " | last | split: " important" | first %}
          {% endif %}
          <li class="digest-row{% if forloop.index > 8 %} is-extra-hidden{% endif %}">
            <a class="digest-row-link" href="{{ post.url | relative_url }}">
              <time class="digest-row-date" datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%Y-%m-%d" }}
              </time>
              <span class="digest-row-copy">
                <strong>{{ post.title }}</strong>
                <small>
                  {% if selected_count != "" %}
                    {{ selected_count }} items
                  {% else %}
                    Technology and research digest
                  {% endif %}
                </small>
              </span>
              <span class="digest-row-action">Read</span>
            </a>
          </li>
        {% else %}
          <li class="digest-empty">No posts yet</li>
        {% endfor %}
      </ol>

      {% if en_posts.size > 8 %}
        <button class="digest-load-more" type="button" data-digest-load-more>
          Load more
        </button>
      {% endif %}
    </main>
  </div>
</div>
