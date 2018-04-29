define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const word = Object.create(_root);
  const $join = dartx.join;
  const $reversed = dartx.reversed;
  const $split = dartx.split;
  const $length = dartx.length;
  word.Word = class Word extends core.Object {
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
      let r = core.RegExp.new("(?=[^aeiouAEIOU])[b-zB-Z]");
      core.print(r.allMatches(this.desc));
      return r.allMatches(this.desc)[$length];
    }
    get showDesc() {
      return this.desc;
    }
  };
  (word.Word.new = function(desc) {
    this[desc$] = desc;
  }).prototype = word.Word.prototype;
  dart.addTypeTests(word.Word);
  const desc$ = Symbol("Word.desc");
  dart.setMethodSignature(word.Word, () => ({
    __proto__: dart.getMethods(word.Word.__proto__),
    reverse: dart.fnType(core.String, []),
    countVowels: dart.fnType(core.int, []),
    countConsonants: dart.fnType(core.int, [])
  }));
  dart.setGetterSignature(word.Word, () => ({
    __proto__: dart.getGetters(word.Word.__proto__),
    showDesc: core.String
  }));
  dart.setFieldSignature(word.Word, () => ({
    __proto__: dart.getFields(word.Word.__proto__),
    desc: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/webi/word.ddc", {
    "package:webi/word.dart": word
  }, '{"version":3,"sourceRoot":"","sources":["word.dart"],"names":[],"mappings":";;;;;;;;;;;;IACe;;;;;;;AAIZ,YAAO,UAAS,QAAM,CAAC,cAAY,OAAK;IACzC;;AAGE,UAAO,IAAI,eAAM,CAAC;AAClB,YAAO,EAAC,WAAW,CAAC,SAAS,UAAQ;IACvC;;AAGE,UAAO,IAAI,eAAM,CAAC;AAClB,gBAAK,CAAC,CAAC,WAAW,CAAC,SAAS;AAC5B,YAAO,EAAC,WAAW,CAAC,SAAS,UAAQ;IACvC;;YAEuB,UAAS;;;4BAjB3B,IAAS;IAAJ,WAAI,GAAJ,IAAI;EAAC","file":"word.ddc.js"}');
  // Exports:
  return {
    word: word
  };
});

//# sourceMappingURL=word.ddc.js.map
