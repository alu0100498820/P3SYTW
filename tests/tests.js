var expect = chai.expect;

describe("__ TEST BDD __", function() {



  it("32F", function() {
    var temp = new Temperatura(32,"F");
    expect(temp.get_valor()).to.equal(32);
    expect(temp.get_tipo()).to.equal("F");
  });

  it("45C", function() {
    var temp = new Temperatura(45,"C");
    expect(temp.get_valor()).to.equal(45);
    expect(temp.get_tipo()).to.equal("C");
  });

  it("5X = ERROR", function() {
      window.onload = function() {
        var temp = new Temperatura(5,0,"X");
        convertir();
        expect(fin.innerHTML).to.match("/ERROR/");
      }
    });

  it("2.34C = 36.212F", function() {
    var temp = new Temperatura();
    temp.set_valor(2.34);
    temp.set_tipo("C");
    var result = temp.pasar_a_f();
    expect(result).to.equal(36.212);
  });

  it("32F = 0C", function() {
    var temp = new Temperatura();
    temp.set_valor(32);
    temp.set_tipo("F");
    var result = temp.pasar_a_c();
    expect(result).to.equal(0);
  });
});
