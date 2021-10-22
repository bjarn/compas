import{_ as t,c as a,b as e,a as l,o as i}from"./app.d0d65fcc.js";const b='{"title":"API","description":"","frontmatter":{},"headers":[{"level":2,"title":"@compas/stdlib","slug":"compas-stdlib"},{"level":2,"title":"@compas/cli","slug":"compas-cli"},{"level":2,"title":"@compas/store","slug":"compas-store"},{"level":2,"title":"@compas/server","slug":"compas-server"}],"relativePath":"api/index.md","lastUpdated":1634880135874}',r={},s=l('<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h1><p>The public compas API, a work in progress.</p><p><div class="table-of-contents"><ul><li><a href="#api">API</a><ul><li><a href="#compas-stdlib">@compas/stdlib</a></li><li><a href="#compas-cli">@compas/cli</a></li><li><a href="#compas-store">@compas/store</a></li><li><a href="#compas-server">@compas/server</a></li></ul></li></ul></div></p>',3),o=l('<h2 id="compas-stdlib" tabindex="-1">@compas/stdlib <a class="header-anchor" href="#compas-stdlib" aria-hidden="true">#</a></h2><ul><li><a href="./stdlib.html#mainfn">mainFn</a></li><li><a href="./stdlib.html#newlogger">newLogger</a></li><li><a href="./stdlib.html#newevent">newEvent</a></li><li><a href="./stdlib.html#neweventfromevent">newEventFromEvent</a></li><li><a href="./stdlib.html#eventstart">eventStart</a></li><li><a href="./stdlib.html#eventstop">eventStop</a></li><li><a href="./stdlib.html#isproduction">isProduction</a></li><li><a href="./stdlib.html#isstaging">isStaging</a></li><li><a href="./stdlib.html#refreshenvironmentcache">refreshEnvironmentCache</a></li><li><a href="./stdlib.html#filenameformodule">filenameForModule</a></li><li><a href="./stdlib.html#dirnameformodule">dirnameForModule</a></li><li><a href="./stdlib.html#isnil">isNil</a></li><li><a href="./stdlib.html#isplainobject">isPlainObject</a></li><li><a href="./stdlib.html#uuid">uuid</a></li><li><a href="./stdlib.html#noop">noop</a></li><li><a href="./stdlib.html#merge">merge</a></li><li><a href="./stdlib.html#streamtobuffer">streamToBuffer</a></li><li><a href="./stdlib.html#pathjoin">pathJoin</a></li><li><a href="./stdlib.html#exec">exec</a></li><li><a href="./stdlib.html#spawn">spawn</a></li><li><a href="./stdlib.html#calculatecookieurlfromappurl">calculateCookieUrlFromAppUrl</a></li><li><a href="./stdlib.html#calculatecorsurlfromappurl">calculateCorsUrlFromAppUrl</a></li><li><a href="./stdlib.html#processdirectoryrecursive">processDirectoryRecursive</a></li><li><a href="./stdlib.html#processdirectoryrecursivesync">processDirectoryRecursiveSync</a></li><li><a href="./stdlib.html#flatten">flatten</a></li><li><a href="./stdlib.html#unflatten">unFlatten</a></li><li><a href="./stdlib.html#getsecondssinceepoch">getSecondsSinceEpoch</a></li><li><a href="./stdlib.html#bytestohumanreadable">bytesToHumanReadable</a></li><li><a href="./stdlib.html#printprocessmemoryusage">printProcessMemoryUsage</a></li></ul><h2 id="compas-cli" tabindex="-1">@compas/cli <a class="header-anchor" href="#compas-cli" aria-hidden="true">#</a></h2><ul><li><a href="./cli.html#test">test</a></li><li><a href="./cli.html#maintestfn">mainTestFn</a></li><li><a href="./cli.html#newtestevent">newTestEvent</a></li><li><a href="./cli.html#bench">bench</a></li><li><a href="./cli.html#mainbenchfn">mainBenchFn</a></li></ul><h2 id="compas-store" tabindex="-1">@compas/store <a class="header-anchor" href="#compas-store" aria-hidden="true">#</a></h2><ul><li><a href="./store.html#newpostgresconnection">newPostgresConnection</a></li><li><a href="./store.html#setstorequeries">setStoreQueries</a></li><li><a href="./store.html#query">query</a></li><li><a href="./store.html#isquerypart">isQueryPart</a></li><li><a href="./store.html#stringifyquerypart">stringifyQueryPart</a></li><li><a href="./store.html#explainanalyzequery">explainAnalyzeQuery</a></li><li><a href="./store.html#newmigratecontext">newMigrateContext</a></li><li><a href="./store.html#getmigrationstobeapplied">getMigrationsToBeApplied</a></li><li><a href="./store.html#runmigrations">runMigrations</a></li><li><a href="./store.html#addeventtoqueue">addEventToQueue</a></li><li><a href="./store.html#addjobtoqueue">addJobToQueue</a></li><li><a href="./store.html#addrecurringjobtoqueue">addRecurringJobToQueue</a></li><li><a href="./store.html#addjobwithcustomtimeouttoqueue">addJobWithCustomTimeoutToQueue</a></li><li><a href="./store.html#getuncompletedjobsbyname">getUncompletedJobsByName</a></li><li><a href="./store.html#newsessionstore">newSessionStore</a></li><li><a href="./store.html#newminioclient">newMinioClient</a></li><li><a href="./store.html#ensurebucket">ensureBucket</a></li><li><a href="./store.html#removebucket">removeBucket</a></li><li><a href="./store.html#listobjects">listObjects</a></li><li><a href="./store.html#removebucketandobjectsinbucket">removeBucketAndObjectsInBucket</a></li><li><a href="./store.html#createorupdatefile">createOrUpdateFile</a></li><li><a href="./store.html#copyfile">copyFile</a></li><li><a href="./store.html#getfilestream">getFileStream</a></li><li><a href="./store.html#syncdeletedfiles">syncDeletedFiles</a></li><li><a href="./store.html#hostchildrentoparent">hostChildrenToParent</a></li><li><a href="./store.html#updatefilegrouporder">updateFileGroupOrder</a></li><li><a href="./store.html#createtestpostgresdatabase">createTestPostgresDatabase</a></li><li><a href="./store.html#cleanuptestpostgresdatabase">cleanupTestPostgresDatabase</a></li></ul><h2 id="compas-server" tabindex="-1">@compas/server <a class="header-anchor" href="#compas-server" aria-hidden="true">#</a></h2><ul><li><a href="./server.html#getapp">getApp</a></li><li><a href="./server.html#sendfile">sendFile</a></li><li><a href="./server.html#createbodyparsers">createBodyParsers</a></li><li><a href="./server.html#session">session</a></li><li><a href="./server.html#compose">compose</a></li><li><a href="./server.html#createtestappandclient">createTestAppAndClient</a></li><li><a href="./server.html#closetestapp">closeTestApp</a></li></ul>',8);function h(n,c,m,d,p,f){return i(),a("div",null,[s,e(" marker "),o,e(" marker ")])}var v=t(r,[["render",h]]);export{b as __pageData,v as default};
