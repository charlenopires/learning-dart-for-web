import 'dart:html';

class Palavra {
  String desc;
  Palavra(this.desc);

  String reverso(){
   return this.desc.split('').reversed.join();
  }
}

void main() {
  ButtonElement btn = querySelector("#btn");
  btn.onClick.listen((Event e) {
    Element msg = querySelector("#msg");
    InputElement p = querySelector("#palavra");
    Palavra palavra = Palavra(p.value);
    msg.text = palavra.reverso();
  });
}