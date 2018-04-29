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
  const $length = dartx.length;
  const $innerHtml = dartx.innerHtml;
  const $toString = dartx.toString;
  const $onClick = dartx.onClick;
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  main.Word = class Word extends core.Object {
    get desc() {
      return this[desc$];
    }
    set desc(value) {
      super.desc = value;
    }
    reverse() {
      return this.desc[$split]('')[$reversed][$join]();
    }
    countVowels() {
      let r = core.RegExp.new("[aeiouAEIOU]");
      return r.allMatches(this.desc)[$length];
    }
    countConsonants() {
      let r = core.RegExp.new("[^aeiouAEIOU]");
      core.print(r.allMatches(this.desc));
      return r.allMatches(this.desc)[$length];
    }
    get showDesc() {
      return this.desc;
    }
  };
  (main.Word.new = function(desc) {
    this[desc$] = desc;
  }).prototype = main.Word.prototype;
  dart.addTypeTests(main.Word);
  const desc$ = Symbol("Word.desc");
  dart.setMethodSignature(main.Word, () => ({
    __proto__: dart.getMethods(main.Word.__proto__),
    reverse: dart.fnType(core.String, []),
    countVowels: dart.fnType(core.int, []),
    countConsonants: dart.fnType(core.int, [])
  }));
  dart.setGetterSignature(main.Word, () => ({
    __proto__: dart.getGetters(main.Word.__proto__),
    showDesc: core.String
  }));
  dart.setFieldSignature(main.Word, () => ({
    __proto__: dart.getFields(main.Word.__proto__),
    desc: dart.finalFieldType(core.String)
  }));
  main.main = function() {
    let btn = html.ButtonElement._check(html.querySelector("#btn_reverse"));
    btn[$onClick].listen(dart.fn(e => {
      let msg = html.querySelector("#msg");
      let p = html.InputElement._check(html.querySelector("#word"));
      let word = new main.Word.new(p.value);
      msg[$innerHtml] = dart.toString(word.countVowels()) + " vowels";
      msg[$innerHtml] = dart.notNull(msg[$innerHtml]) + "<br>";
      msg[$innerHtml] = dart.notNull(msg[$innerHtml]) + (dart.toString(word.countConsonants()) + " consonants");
    }, EventToNull()));
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAGe;;;;;;;AAIZ,YAAO,UAAS,QAAM,CAAC,cAAY,OAAK;IACzC;;AAGE,UAAO,IAAI,AAAI,eAAM,CAAC;AACtB,YAAO,EAAC,WAAW,CAAC,SAAS,UAAQ;IACvC;;AAGE,UAAO,IAAI,AAAI,eAAM,CAAC;AACtB,gBAAK,CAAC,CAAC,WAAW,CAAC,SAAS;AAC5B,YAAO,EAAC,WAAW,CAAC,SAAS,UAAQ;IACvC;;YAEuB,UAAS;;;4BAjB3B,IAAS;IAAJ,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;;;;;;;AAqBf,QAAc,gCAAM,kBAAa,CAAC;AAClC,OAAG,UAAQ,OAAO,CAAC,QAAC,CAAO;AACzB,UAAQ,MAAM,kBAAa,CAAC;AAC5B,UAAa,6BAAI,kBAAa,CAAC;AAC/B,UAAK,WAAO,aAAI,CAAC,CAAC,MAAM;AACxB,SAAG,YAAU,GAAiC,cAA9B,IAAI,YAAY,MAAgB;AAChD,SAAG,YAAU,GA/BjB,aA+BI,GAAG,YAAU,IAAI;AACjB,SAAG,YAAU,GAhCjB,aAgCI,GAAG,YAAU,KAAsC,cAAlC,IAAI,gBAAgB,MAAgB;;EAEzD","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
