describe("老张的第一个测试环境", function() {
//var a;
	function reverse(name){
		return name.split("").reverse().join("");
	}
  it("测试点赞功能", function() {
//  a = true;
//  expect(PraiseButton).toBe(true);
	expect("DCBA").toEqual(reverse("ABCD"));
  });
});