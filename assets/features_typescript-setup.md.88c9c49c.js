import{_ as e,c as t,o as s,a as o}from"./app.d0d65fcc.js";const _='{"title":"Typescript setup","description":"","frontmatter":{},"headers":[{"level":2,"title":"Code generation","slug":"code-generation"}],"relativePath":"features/typescript-setup.md","lastUpdated":1634880135878}',a={},r=o('<h1 id="typescript-setup" tabindex="-1">Typescript setup <a class="header-anchor" href="#typescript-setup" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Requires <code>@compas/cli</code> to be installed</p></div><p>The recommended way of developing projects with Compas is to use JavaScript with types in JSDoc. This prevents compilation steps and gives the same auto complete experience as Typescript. Some IDE&#39;s don&#39;t work like this so we added and now recommend using a jsconfig so the Typescript Language server understands Compas projects. Use <code>yarn compas init --jsconfig</code> to create / overwrite the recommended config.</p><p>Note that the ESLint setup doesn&#39;t support Typescript files, so make sure to exclude them if your IDE has ESLint integration.</p><h2 id="code-generation" tabindex="-1">Code generation <a class="header-anchor" href="#code-generation" aria-hidden="true">#</a></h2><p>Frontend projects using the code generators are expected to use Typescript, which is why the &#39;reactQuery&#39; generator only supports generating Typescript.</p><p>The code generator also supports making all major Compas types global, via a generated <code>.d.ts</code> (Typescript declaration) file. To use this, see <a href="/index.html#todo">generateTypes</a></p>',7),p=[r];function i(c,n,d,h,l,u){return s(),t("div",null,p)}var g=e(a,[["render",i]]);export{_ as __pageData,g as default};
