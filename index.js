
let hand = document.getElementById("hand");
let add = document.getElementById("add");
//对象有点赞+1的方法
export class PraiseButton {
	constructor() {
		this.pariseCount = 0;
	}
	praiseAdd() {
		
		if(this.pariseCount < 10) {
			
			this.pariseCount++;
			console.log(this.pariseCount);
		} else {
			alert("最多只能点赞10次哦！");
		}
		return this.pariseCount;
	}
}

export class Thumb extends PraiseButton {
//	add.innerText ="+"+ praise.praiseAdd();
}

var praise = new Thumb();
hand.addEventListener("click", () => {
	add.innerText ="+"+ praise.praiseAdd();
});
