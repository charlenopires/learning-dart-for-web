define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const main = Object.create(_root);
  const $join = dartx.join;
  const $reversed = dartx.reversed;
  const $split = dartx.split;
  const $text = dartx.text;
  const $onClick = dartx.onClick;
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  main.Palavra = class Palavra extends core.Object {
    get desc() {
      return this[desc$];
    }
    set desc(value) {
      this[desc$] = value;
    }
    reverso() {
      return this.desc[$split]('')[$reversed][$join]();
    }
  };
  (main.Palavra.new = function(desc) {
    this[desc$] = desc;
  }).prototype = main.Palavra.prototype;
  dart.addTypeTests(main.Palavra);
  const desc$ = Symbol("Palavra.desc");
  dart.setMethodSignature(main.Palavra, () => ({
    __proto__: dart.getMethods(main.Palavra.__proto__),
    reverso: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(main.Palavra, () => ({
    __proto__: dart.getFields(main.Palavra.__proto__),
    desc: dart.fieldType(core.String)
  }));
  main.main = function() {
    let btn = html.ButtonElement._check(html.querySelector("#btn"));
    btn[$onClick].listen(dart.fn(e => {
      let msg = html.querySelector("#msg");
      let p = html.InputElement._check(html.querySelector("#palavra"));
      let palavra = new main.Palavra.new(p.value);
      msg[$text] = palavra.reverso();
    }, EventToNull()));
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAGS;;;;;;;AAIN,YAAO,UAAS,QAAM,CAAC,cAAY,OAAK;IACzC;;+BAJQ,IAAS;IAAJ,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;AAQlB,QAAc,gCAAM,kBAAa,CAAC;AAClC,OAAG,UAAQ,OAAO,CAAC,QAAC,CAAO;AACzB,UAAQ,MAAM,kBAAa,CAAC;AAC5B,UAAa,6BAAI,kBAAa,CAAC;AAC/B,UAAQ,cAAU,gBAAO,CAAC,CAAC,MAAM;AACjC,SAAG,OAAK,GAAG,OAAO,QAAQ;;EAE9B","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
