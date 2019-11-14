// ChaiのAPIを使用
var assert = chai.assert;

// Mochaの規則に従ってテストを実装
describe('nem-sdk-helperのテスト', function () {
  it('メタ文字を含む引数に対してエスケープされた値を返す', function () {
    assert.strictEqual(NemSdkHelper.htmlEscape("<script>alert('password');</script>"), true);
  });

  it('ユーザーの選択がNGの時は無効', function () {
    assert.strictEqual(myInstance.magicMethod(false), false);
  });

  it('ユーザーの選択がOKでもNGでない時はエラー', function () {
    assert.throws(function () {
      myInstance.magicMethod('string');
    }, Error);
  });
});