import 'dart:html';

class Word {
  final String desc;
  Word(this.desc);

  String reverse(){
   return this.desc.split('').reversed.join();
  }

  int countVowels(){
    RegExp r = new RegExp("[aeiouAEIOU]");
    return r.allMatches(this.desc).length;
  }

  int countConsonants() {
    RegExp r = new RegExp("[^aeiouAEIOU]");
    print(r.allMatches(this.desc));
    return r.allMatches(this.desc).length;
  }

  String get showDesc => this.desc;
}

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