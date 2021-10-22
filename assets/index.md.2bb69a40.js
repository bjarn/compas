import{_ as n,c as s,o as a,a as t}from"./app.d0d65fcc.js";const g=`{"title":"Home","description":"","frontmatter":{"home":true,"heroText":"Compas","tagline":"Unified backend tooling","actionText":"Get started","actionLink":"/getting-started.html","altActionText":"Changelog","altActionLink":"/changelog.html","footer":"MIT Licensed | Copyright \xA9 2019-present Dirk de Visser","features":[{"title":"Flexible code generators","details":"Code generate routers, validators, api clients and Postgres queries."},{"title":"ES Modules first","details":"Contains test, bench and script runner supporting only ES modules."},{"title":"Common utilities","details":"Comes with session handling, job queue, file storage, script runner and more."}]},"headers":[{"level":2,"title":"I'm a...","slug":"i-m-a"},{"level":3,"title":"Backend developer","slug":"backend-developer"},{"level":3,"title":"Frontend developer","slug":"frontend-developer"},{"level":2,"title":"How it works","slug":"how-it-works"},{"level":2,"title":"Why","slug":"why"},{"level":2,"title":"New features","slug":"new-features"}],"relativePath":"index.md","lastUpdated":1634880135878}`,p={},o=t(`<h2 id="i-m-a" tabindex="-1">I&#39;m a... <a class="header-anchor" href="#i-m-a" aria-hidden="true">#</a></h2><ul><li><a href="/#backend-developer">Backend developer</a></li><li><a href="/#frontend-developer">Frontend developer</a></li><li><a href="/#todo">Manager</a></li></ul><h3 id="backend-developer" tabindex="-1">Backend developer <a class="header-anchor" href="#backend-developer" aria-hidden="true">#</a></h3><p>Provide the HTTP api structure:</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token constant">T</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeCreator</span><span class="token punctuation">(</span><span class="token string">&quot;todo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">R</span> <span class="token operator">=</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">router</span><span class="token punctuation">(</span><span class="token string">&quot;/todo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  todos<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      todo<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      completed<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Add an implementation:</p><div class="language-js"><pre><code>todoHandlers<span class="token punctuation">.</span><span class="token function-variable function">list</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
    todo<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        todo<span class="token operator">:</span> <span class="token string">&quot;Explore compas&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>Create a test:</p><div class="language-js"><pre><code><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;todo/controller&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> apiClient <span class="token operator">=</span> Axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">createTestAppAndClient</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> apiClient<span class="token punctuation">)</span><span class="token punctuation">;</span>

  t<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;list conforms to response structure&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> todoApi<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Throws: validator.response.todo.list.boolean.type -&gt; Missing boolean value at &#39;$.todo[0].completed&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>And some icing on the cake, by generating some PostgreSQL queries:</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token constant">T</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeCreator</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    email<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">searchable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">enableQueries</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    withDates<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">relations</span><span class="token punctuation">(</span><span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">oneToMany</span><span class="token punctuation">(</span><span class="token string">&quot;posts&quot;</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    body<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">enableQueries</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    withSoftDeletes<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">relations</span><span class="token punctuation">(</span><span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">manyToOne</span><span class="token punctuation">(</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;posts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>With queries like the following:</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span> where<span class="token operator">:</span> <span class="token punctuation">{</span> email<span class="token operator">:</span> <span class="token string">&quot;foo@bar.com&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> usersWithPosts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span> posts<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> postsForAuthor <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryPost</span><span class="token punctuation">(</span><span class="token punctuation">{</span> where<span class="token operator">:</span> <span class="token punctuation">{</span> author<span class="token operator">:</span> user<span class="token punctuation">.</span>id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exe</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>authorOfPost<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  viaPosts<span class="token operator">:</span> <span class="token punctuation">{</span> where<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> postsForAuthor<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// postsForAuthor[0].author == authorOfPost.id</span>

<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">userInsert</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span> email<span class="token operator">:</span> <span class="token string">&quot;bar@foo.com&quot;</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Compas &quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// soft delete</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">postDelete</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;c532ac2a-4489-4b50-a061-12b2aa9a5df2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Search include soft deleted posts</span>
<span class="token keyword">await</span> <span class="token function">queryPost</span><span class="token punctuation">(</span><span class="token punctuation">{</span> where<span class="token operator">:</span> <span class="token punctuation">{</span> deletedAtIncludeNotNull<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// permanent delete</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">postDeletePermanent</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&quot;c532ac2a-4489-4b50-a061-12b2aa9a5df2&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="frontend-developer" tabindex="-1">Frontend developer <a class="header-anchor" href="#frontend-developer" aria-hidden="true">#</a></h3><p>Either import from a Compas server:</p><div class="language-js"><pre><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">loadFromRemote</span><span class="token punctuation">(</span>Axios<span class="token punctuation">,</span> <span class="token string">&quot;https://api.my-domain.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  outputDirectory<span class="token operator">:</span> <span class="token string">&quot;./src/generated&quot;</span><span class="token punctuation">,</span>
  isBrowser<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Or import from an OpenAPI spec (alpha-quality :S):</p><div class="language-js"><pre><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">extendWithOpenApi</span><span class="token punctuation">(</span><span class="token string">&quot;todo&quot;</span><span class="token punctuation">,</span> <span class="token function">getAnOpenAPISpecAsPlainJavascriptObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  outputDirectory<span class="token operator">:</span> <span class="token string">&quot;./src/generated&quot;</span><span class="token punctuation">,</span>
  isBrowser<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>And use the typed api client:</p><div class="language-ts"><pre><code><span class="token keyword">const</span> todos<span class="token operator">:</span> TodoListResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiTodoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Or use the generated react-query hooks:</p><div class="language-tsx"><pre><code><span class="token keyword">function</span> <span class="token function">renderTodo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> todoId <span class="token punctuation">}</span><span class="token operator">:</span> TodoSingleParams</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Generated react-query hook with typed results</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTodoSingle</span><span class="token punctuation">(</span><span class="token punctuation">{</span> todoId <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a></h2><p>Most of the above is achieved by a custom specification, a few code generators and a bunch of time tweaking results to achieve a stable way of working. Which benefits backend developers with less copy-pasting, easy &#39;interface&#39;-testing and less manual doc writing, and frontend developers with explorable and ready to consume api&#39;s.</p><h2 id="why" tabindex="-1">Why <a class="header-anchor" href="#why" aria-hidden="true">#</a></h2><p>My work involved doing many small projects. I had a hard time backporting incremental fixes to existing projects. To facilitate my needs more and to stop copying and pasting things around, this project was born.</p><h2 id="new-features" tabindex="-1">New features <a class="header-anchor" href="#new-features" aria-hidden="true">#</a></h2><p>New features added should fall under the following categories:</p><ul><li>It improves the interface between api and client in some way. An example may be to support websockets in @compas/code-gen</li><li>It improves the developer experience one way or another while developing an api For example the <code>compas docker</code> commands or various utilities provided by @compas/stdlib</li></ul><p>Although some parts heavily rely on conventions set by the packages, we currently aim not to be a framework. We aim to provide a good developer experience, useful abstractions around the basics, and a stable backend &lt;-&gt; client interface.</p>`,30),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
