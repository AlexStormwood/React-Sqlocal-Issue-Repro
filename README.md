# React SQLocal Issue Repro

This repo just exists to demo and hopefully troubleshoot or figure out the correct usage of SQLocal with an OPFS storage type in use.

Currently: 

1. Basic manual file IO shown in `OpfsBasicFileIO.tsx` works in development and production, so OPFS is usable.
2. SQLocal usage (with Kysely in place because it's practical) is shown in `SqlocalTesto.tsx`, and has issues.
  - SQLocal behaves as expected in localhost/development environments.
  - When in production, SQLocal falls back to the `memory` storage type for its database. So things work until the page refreshes or app closes.

My confusion is from the understanding that the basic file IO implemented is using OPFS, and it works in production even though `navigator.storage.persisted` is false in that environment. 
SQLocal is behaving as expected, but I'm wondering if that's wrong. If OPFS _does_ persist data even when `navigator.storage.persisted` is not `true`, should SQLocal be optionally able to use it? It seems like it does not attempt or give the developer the option to attempt using it.

SQLocal is currently the simplest SQL database system for my multi-platform app plans. One set of code and BAM, databases in apps on desktop and mobile platforms. Capacitor's community plugins seem to be falling out of date or need an absurd amount of fiddling to get working, and other WASM-based or in-browser SQL solutions aren't as simple as SQLocal.

I don't know if I'm misconfiguring SQLocal to cause the behaviour that I'm seeing, or if SQLocal really cannot currently work the way I'm hoping it would. Either way - code is here. Dig around!