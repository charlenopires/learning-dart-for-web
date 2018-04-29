class Word {
  final String desc;
  Word(this.desc);

  String reverse(){
   return this.desc.split('').reversed.join();
  }

  int countVowels(){
    RegExp r = RegExp("[aeiouAEIOU]");
    return r.allMatches(this.desc).length;
  }

  int countConsonants() {
    RegExp r = RegExp("(?=[^aeiouAEIOU])[b-zB-Z]");
    print(r.allMatches(this.desc));
    return r.allMatches(this.desc).length;
  }

  String get showDesc => this.desc;
}