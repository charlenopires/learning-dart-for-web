import 'dart:html';
import '../lib/word.dart';

void main() {
  ButtonElement btn = querySelector("#btn");
  btn.onClick.listen((Event e) {
    Element msg = querySelector("#msg");
    InputElement p = querySelector("#word");
    Word word = Word(p.value);
    msg.innerHtml = word.countVowels().toString() + " vowels";
    msg.innerHtml += "<br>";
    msg.innerHtml += word.countConsonants().toString() + " consonants";
  });
}