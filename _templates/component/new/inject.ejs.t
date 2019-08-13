---
inject: true
to: src/Views/MainPage/components/index.js
after: export { default as Example } from './Example';
skip_if: export { default as <%= name%> } from './<%= name %>';
---
export { default as <%= name%> } from './<%= name %>';