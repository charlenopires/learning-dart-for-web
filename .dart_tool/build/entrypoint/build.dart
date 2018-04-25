import 'package:build_runner/build_runner.dart' as _i1;
import 'package:build_test/builder.dart' as _i2;
import 'package:build_config/build_config.dart' as _i3;
import 'package:build_modules/builders.dart' as _i4;
import 'package:build_web_compilers/builders.dart' as _i5;
import 'package:build/build.dart' as _i6;
import 'dart:convert' as _i7;
import 'dart:isolate' as _i8;

final _builders = [
  _i1.apply(
      'build_test|test_bootstrap',
      [_i2.debugIndexBuilder, _i2.debugTestBuilder, _i2.testBootstrapBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i3.InputSet(include: const ['test/**'])),
  _i1.apply(
      'build_modules|modules',
      [
        _i4.metaModuleBuilder,
        _i4.metaModuleCleanBuilder,
        _i4.moduleBuilder,
        _i4.unlinkedSummaryBuilder,
        _i4.linkedSummaryBuilder
      ],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_web_compilers|ddc', [_i5.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true, hideOutput: true),
  _i1.apply('build_web_compilers|entrypoint', [_i5.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i3.InputSet(include: const [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: const [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: new _i6.BuilderOptions(
          _i7.json.decode('{"dart2js_args":["--minify"]}')),
      defaultReleaseOptions:
          new _i6.BuilderOptions(_i7.json.decode('{"compiler":"dart2js"}')),
      appliesBuilders: ['build_web_compilers|dart2js_archive_extractor']),
  _i1.applyPostProcess('build_modules|module_cleanup', _i4.moduleCleanup,
      defaultGenerateFor: const _i3.InputSet()),
  _i1.applyPostProcess('build_web_compilers|dart2js_archive_extractor',
      _i5.dart2JsArchiveExtractor,
      defaultGenerateFor: const _i3.InputSet())
];
main(List<String> args, [_i8.SendPort sendPort]) async {
  var result = await _i1.run(args, _builders);
  sendPort?.send(result);
}
