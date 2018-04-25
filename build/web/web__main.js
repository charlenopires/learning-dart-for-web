define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const main = Object.create(_root);
  const $text = dartx.text;
  const $onClick = dartx.onClick;
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  main.main = function() {
    let btn = html.ButtonElement._check(html.querySelector("#btn"));
    btn[$onClick].listen(dart.fn(e => {
      let msg = html.querySelector("#msg");
      msg[$text] = "Olá";
    }, EventToNull()));
  };
  dart.trackLibraries("web/web__main", {
    "main.dart": main
  }, null);
  // Exports:
  return {
    main: main
  };
});
