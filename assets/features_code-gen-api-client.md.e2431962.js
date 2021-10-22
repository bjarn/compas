import{_ as n,c as e,o as a,a as s}from"./app.d0d65fcc.js";const m='{"title":"Code gen api client","description":"","frontmatter":{},"headers":[{"level":2,"title":"API functions","slug":"api-functions"},{"level":2,"title":"Generated output","slug":"generated-output"},{"level":2,"title":"Introducing react-query","slug":"introducing-react-query"}],"relativePath":"features/code-gen-api-client.md","lastUpdated":1634880135878}',t={},o=s(`<h1 id="code-gen-api-client" tabindex="-1">Code gen api client <a class="header-anchor" href="#code-gen-api-client" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Requires <code>@compas/cli</code>, <code>@compas/stdlib</code>, <code>@compas/code-gen</code>, <code>Axios</code> and (optionally) <code>react-query</code> to be installed. Also requires the project to be using TypeScript.</p></div><p>Compas can generate api clients from different sources &amp; for different consumers. We can read the OpenAPI specification, or get the Compas structure from a remote Compas based api. We can generate only wrappers around Axios calls, or provide full-fledged react-query hooks.</p><h2 id="api-functions" tabindex="-1">API functions <a class="header-anchor" href="#api-functions" aria-hidden="true">#</a></h2><p>Generating api functions from a remote structure consists of creating a &#39;generate&#39; script, which reads either a remote api structure or an OpenAPI definition and writes a bunch of TypeScript files to disk. It has the following contents:</p><div class="language-javascript"><pre><code><span class="token comment">// scripts/generate.mjs</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mainFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@compas/stdlib&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> App<span class="token punctuation">,</span> loadFromRemote <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@compas/store&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token function">mainFn</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">,</span> main<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Either:</span>
  <span class="token comment">// Load the OpenAPI 3.0 based definiotion somehow in to an object</span>
  <span class="token keyword">const</span> openApiDefinition <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// &#39;serviceName&#39; is used as the function name prefix if the used api definition is not using tags.</span>
  app<span class="token punctuation">.</span><span class="token function">extendWithOpenApi</span><span class="token punctuation">(</span><span class="token string">&quot;serviceName&quot;</span><span class="token punctuation">,</span> openApiDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// OR:</span>
  app<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>
    <span class="token keyword">await</span> <span class="token function">loadFromRemote</span><span class="token punctuation">(</span>
      <span class="token string">&quot;https://api.example.com&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Base url of the Compas based api</span>
      Axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">/* ... */</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// And finally</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    outputDirectory<span class="token operator">:</span> <span class="token string">&quot;./src/generated&quot;</span><span class="token punctuation">,</span>
    isBrowser<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    enabledGenerators<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;apiClient&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>After calling <code>node ./scripts/generate.mjs</code>, you should see some files in <code>src/generated</code>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If the output of <code>node ./scripts/generate.mjs</code> consists of only lines with json, add <code>NODE_ENV=development</code> to your <code>.env</code> or <code>.env.local</code> file.</p></div><h2 id="generated-output" tabindex="-1">Generated output <a class="header-anchor" href="#generated-output" aria-hidden="true">#</a></h2><p>There are a few cool files to look at;</p><ul><li><code>src/generated/common/types.ts</code>: this file contains all input and output types used in the project.</li><li><code>src/generated/xxx/apiClient.ts</code>: these files contain the generated typed api functions. As you can see it wraps the an <code>Axios.request</code> call and returns the response data.</li></ul><p>By using your IDE and requesting for autocomplete on <code>apiGroupName</code> you can see all generated api functions.</p><h2 id="introducing-react-query" tabindex="-1">Introducing react-query <a class="header-anchor" href="#introducing-react-query" aria-hidden="true">#</a></h2><p>For projects with React, we also support automatically wrapping the generated api calls in to react-query hooks, using <code>useQuery</code> and <code>useMutations</code>. To enable the <code>react-query</code> generator add <code>&quot;reactQuery&quot;</code> to the <code>enabledGenerators</code> array in <code>scripts/generate.mjs</code> and generate again via <code>node ./scripts/generate.mjs</code>.</p><p>This needs some setup to let the generated hooks know which Axios instance to use. You can do that via the exported <code>ApiProvider</code> component, which should be wrapped around the React component tree that uses generated hooks.</p><p>Any api <code>GET</code> api call uses <code>useQuery</code> under the hood, and <code>POST, PATCH, PUT &amp; DELETE</code> calls use <code>useMutation</code> which are reflected in the hooks arguments and return types. All hooks also have two special functions:</p><ul><li><code>useTodoSingle.baseKey()</code>: which returns the root query key without combining any input parameters</li><li><code>useTodoSingle.queryKey({ /* expects all input params */ })</code>: for a specific query key</li></ul><p>With these two you can do custom prefetching, invalidating and optimistic updates.</p><p><code>GET</code> requests have another speciality generated. An automatic <code>options.enabled</code>. All required <code>param</code>, <code>query</code> and <code>body</code> parameters are used to check if <code>options.enabled</code> should be set to true or false. This way we don&#39;t do unnecessary network calls that we know will not succeed.</p><p>As with the api functions, use autocomplete on <code>useGroupName</code> to discover the generated functions.</p>`,20),p=[o];function c(i,u,r,l,d,k){return a(),e("div",null,p)}var f=n(t,[["render",c]]);export{m as __pageData,f as default};
