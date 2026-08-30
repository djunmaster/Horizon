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
        <h1 id="digest-title-zh">Adam's Daily Digest</h1>
        <p>AI、技术与研究信号的每日索引。</p>
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
      </div>

      <ol class="digest-list" data-digest-list>
        {% for post in zh_posts limit:20 %}
          <li class="digest-row{% if forloop.index > 5 %} is-extra-hidden{% endif %}">
            <a class="digest-row-link" href="{{ post.url | relative_url }}">
              <time class="digest-row-date" datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%Y-%m-%d" }}
              </time>
              <strong class="digest-row-title">{% if forloop.first %}今日日报{% else %}往期日报{% endif %}</strong>
            </a>
          </li>
        {% else %}
          <li class="digest-empty">暂无内容</li>
        {% endfor %}
      </ol>

      {% if zh_posts.size > 5 %}
        <button class="digest-load-more" type="button" data-digest-load-more>
          更多
        </button>
      {% endif %}
    </main>
  </div>

  <div id="lang-en" class="lang-section">
    {% assign en_posts = site.posts | where: "lang", "en" %}
    {% assign latest_en = en_posts | first %}

    <header class="digest-shell digest-masthead" aria-labelledby="digest-title-en">
      <div>
        <h1 id="digest-title-en">Adam's Daily Digest</h1>
        <p>A daily index of AI, technology, and research signals.</p>
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
      </div>

      <ol class="digest-list" data-digest-list>
        {% for post in en_posts limit:20 %}
          <li class="digest-row{% if forloop.index > 5 %} is-extra-hidden{% endif %}">
            <a class="digest-row-link" href="{{ post.url | relative_url }}">
              <time class="digest-row-date" datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%Y-%m-%d" }}
              </time>
              <strong class="digest-row-title">{% if forloop.first %}Today's Digest{% else %}Archive Digest{% endif %}</strong>
            </a>
          </li>
        {% else %}
          <li class="digest-empty">No posts yet</li>
        {% endfor %}
      </ol>

      {% if en_posts.size > 5 %}
        <button class="digest-load-more" type="button" data-digest-load-more>
          More
        </button>
      {% endif %}
    </main>
  </div>
</div>
