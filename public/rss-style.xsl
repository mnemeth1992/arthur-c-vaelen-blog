<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="hu">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="/rss/channel/title"/> – RSS Hírfolyam</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Merriweather:wght@400;700&amp;display=swap" rel="stylesheet" />
        <style>
          :root {
            --bg: #fbfbfa;
            --card-bg: #ffffff;
            --card-border: #e6e6e0;
            --text-main: #1a1d21;
            --text-muted: #626770;
            --accent: #2d5a43;
            --accent-hover: #224634;
            --accent-subtle: #edf4f0;
            --banner-bg: #f3f3f0;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --bg: #121316;
              --card-bg: #181a1f;
              --card-border: #262930;
              --text-main: #f5f6f8;
              --text-muted: #9ca2ad;
              --accent: #4e8d6b;
              --accent-hover: #62a581;
              --accent-subtle: #17281f;
              --banner-bg: #1b1d22;
            }
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: var(--bg);
            color: var(--text-main);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            line-height: 1.6;
            padding: 24px 16px;
          }

          .container {
            max-width: 760px;
            margin: 0 auto;
          }

          header {
            margin-bottom: 28px;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--card-border);
          }

          .back-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--accent);
            text-decoration: none;
            font-size: 13px;
            font-weight: 500;
            margin-bottom: 16px;
            font-family: monospace;
          }
          .back-link:hover {
            text-decoration: underline;
          }

          h1 {
            font-family: 'Merriweather', Georgia, serif;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: 8px;
            color: var(--text-main);
          }

          .feed-desc {
            font-size: 15px;
            color: var(--text-muted);
            margin-bottom: 16px;
          }

          /* Info Banner */
          .info-banner {
            background-color: var(--card-bg);
            border: 1px solid var(--card-border);
            border-left: 4px solid var(--accent);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 36px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
          }

          .info-banner h2 {
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--text-main);
          }

          .info-banner p {
            font-size: 13.5px;
            color: var(--text-muted);
            line-height: 1.55;
            margin-bottom: 14px;
          }

          .url-box {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
          }

          .url-input {
            flex: 1;
            min-width: 240px;
            padding: 8px 12px;
            font-family: monospace;
            font-size: 12.5px;
            background: var(--banner-bg);
            border: 1px solid var(--card-border);
            border-radius: 8px;
            color: var(--text-main);
            outline: none;
          }

          .copy-btn {
            background-color: var(--accent);
            color: #ffffff;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 12.5px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.15s ease;
          }
          .copy-btn:hover {
            background-color: var(--accent-hover);
          }

          /* Feed Items */
          .section-title {
            font-family: monospace;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-size: 12px;
            color: var(--text-muted);
            margin-bottom: 16px;
          }

          .items-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .item-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 12px;
            padding: 20px;
            transition: transform 0.15s ease, box-shadow 0.15s ease;
          }
          .item-card:hover {
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          }

          .item-date {
            font-size: 12px;
            font-family: monospace;
            color: var(--text-muted);
            margin-bottom: 6px;
          }

          .item-title {
            font-family: 'Merriweather', Georgia, serif;
            font-size: 19px;
            font-weight: 700;
            line-height: 1.35;
            margin-bottom: 8px;
          }

          .item-title a {
            color: var(--text-main);
            text-decoration: none;
          }
          .item-title a:hover {
            color: var(--accent);
          }

          .item-desc {
            font-size: 13.5px;
            color: var(--text-muted);
            line-height: 1.55;
            margin-bottom: 12px;
          }

          .item-link {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 13px;
            font-weight: 500;
            color: var(--accent);
            text-decoration: none;
          }
          .item-link:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <a href="/" class="back-link">&#8592; Vissza a blog főoldalára</a>
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p class="feed-desc"><xsl:value-of select="/rss/channel/description"/></p>
          </header>

          <aside class="info-banner">
            <h2>
              <span>&#128225;</span>
              <span>RSS Hírcsatorna (Web Feed)</span>
            </h2>
            <p>
              Ez az oldal az Arthur C. Vaelen blog <strong>RSS hírfolyama</strong>. Ha szeretnél közvetlenül értesülni a legújabb tanulmányokról és esszékről, másold be az alábbi címet a kedvenc RSS-olvasódba (pl. <em>Feedly, Inoreader, NetNewsWire, Thunderbird</em>).
            </p>
            <div class="url-box">
              <input type="text" id="feed-url" class="url-input" readonly="readonly" />
              <button type="button" class="copy-btn" id="copy-btn">Link másolása</button>
            </div>
          </aside>

          <main>
            <h2 class="section-title">Legfrissebb publikációk</h2>
            <div class="items-list">
              <xsl:for-each select="/rss/channel/item">
                <article class="item-card">
                  <div class="item-date">
                    <xsl:value-of select="pubDate" />
                  </div>
                  <h3 class="item-title">
                    <a href="{link}">
                      <xsl:value-of select="title"/>
                    </a>
                  </h3>
                  <p class="item-desc">
                    <xsl:value-of select="description"/>
                  </p>
                  <a href="{link}" class="item-link">
                    Elolvasom a cikket &#8594;
                  </a>
                </article>
              </xsl:for-each>
            </div>
          </main>
        </div>

        <script>
          <![CDATA[
          (function() {
            var urlInput = document.getElementById('feed-url');
            var copyBtn = document.getElementById('copy-btn');
            if (urlInput) {
              urlInput.value = window.location.href;
            }
            if (copyBtn && urlInput) {
              copyBtn.addEventListener('click', function() {
                navigator.clipboard.writeText(urlInput.value).then(function() {
                  var orig = copyBtn.textContent;
                  copyBtn.textContent = 'Másolva! ✓';
                  setTimeout(function() { copyBtn.textContent = orig; }, 2000);
                }).catch(function() {
                  urlInput.select();
                });
              });
            }
          })();
          ]]>
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
