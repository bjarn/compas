import{_ as e,c as s,o as a,a as n}from"./app.d0d65fcc.js";const m='{"title":"HTTP server","description":"","frontmatter":{},"headers":[{"level":2,"title":"Default server","slug":"default-server"},{"level":2,"title":"Other middleware","slug":"other-middleware"}],"relativePath":"features/http-server.md","lastUpdated":1634880135878}',t={},o=n(`__VP_STATIC_START__<h1 id="http-server" tabindex="-1">HTTP server <a class="header-anchor" href="#http-server" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Requires <code>@compas/stdlib</code> and <code>@compas/server</code> to be installed</p></div><p>Compas also provides some utilities for constructing an HTTP server. This is based on <a href="https://koajs.com/" target="_blank" rel="noopener noreferrer">Koa</a>. The server consist of built-in error handling, a logger and security headers.</p><h2 id="default-server" tabindex="-1">Default server <a class="header-anchor" href="#default-server" aria-hidden="true">#</a></h2><p>Create a file at <code>scripts/api.js</code> with the following contents:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@compas/server&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mainFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@compas/stdlib&quot;</span><span class="token punctuation">;</span>

<span class="token function">mainFn</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">,</span> main<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>When we run this file we can already check out some default features.</p><div class="language-shell"><pre><code><span class="token function">yarn</span> compas api
<span class="token comment"># Or</span>
node ./scripts/api.js
</code></pre></div><p>We are going to do some GET requests, you can use your browser or another HTTP client, like <a href="https://httpie.io/" target="_blank" rel="noopener noreferrer">httpie</a> .</p><ol><li>Check if the server is running</li></ol><div class="language-shell"><pre><code>http GET http://localhost:3000/_health
</code></pre></div><ol start="2"><li>404 handling</li></ol><div class="language-shell"><pre><code>http GET http://localhost:3000/oops
</code></pre></div><ol start="3"><li>Logging</li></ol><p>Check the logs of the running server. You should see quite a bit of output there. Notice that the <code>/_health</code> request is missing. In order, you should see the following:</p><ul><li>Formatted 404 error with stack trace. This is an &#39;info&#39; log for any non 500 response status error.</li><li>The request log to <code>/oops</code>, containing some request and response information.</li><li>Event callstack, this can be used for timings, analytics or other diagnostic purposes.</li></ul><p>Notes that all logs also contain a <code>requestId</code>. This is automatically added when you use the logger provided by <code>ctx.log</code>. The context also contains <code>ctx.event</code>. These two together are explained in <a href="/features/logger-and-events.html">logger and events</a></p><h2 id="other-middleware" tabindex="-1">Other middleware <a class="header-anchor" href="#other-middleware" aria-hidden="true">#</a></h2><ul><li><code>createBodyParsers</code> can be used to create a json body parser, and a separate multipart body parser.</li><li><code>compose</code> can be used to manually compose multiple middleware in to a single callable middleware</li><li><code>sendFile</code> is a utility to easily send out files. Supports partial responses, when for example sending a video.</li><li><code>session</code> is a cookie based session handling, see the <a href="/features/session-handling.html">session handling docs</a> for more information</li></ul>__VP_STATIC_END__`,19),p=[o];function r(i,l,c,d,u,h){return a(),s("div",null,p)}var f=e(t,[["render",r]]);export{m as __pageData,f as default};
