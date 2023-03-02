
//id지정되어 있는 태그 불러오기
const moveBtn = document.getElementById('move-btn');
const root = document.getElementById('root');
const leftSect = document.getElementById('left-sect');
const rightSect = document.getElementById('right-sect');

//첫 화면에선 rightSec의 li태그가 안보여야 하니까 display설정
rightSect.children[0].style.display = "none";

//#move-btn 스타일 지정
styleMaker(moveBtn, "flex", "200px", "200px", "#fff", "50%", "");
flexProperty(moveBtn, "", "center", "center");
//#move-btn position설정
moveBtn.style.position = "fixed";
moveBtn.style.bottom = "10px";
moveBtn.style.left = "50vw";
moveBtn.style.transform = "translate(-50%, 0)";

//#root 스타일 지정
styleMaker(root, "flex", "100vw", "100vh", styleObj.color[0], "", "");
flexProperty(root, "", "center", "center");

//#root > main 스타일 지정
styleMaker(root.children[0], "flex", "500px", "500px", "", "", styleObj.borderDottedBlack);
flexProperty(root.children[0], "","center", "center");

//#left-sect, #right-sect 스타일 지정
for(let i = 0; i < root.children[0].children.length; i++){
  styleMaker(root.children[0].children[i], "flex", "200px", "450px", "", "", styleObj.borderSolidBlack);
  flexProperty(root.children[0].children[i], "", "center", "center");
  if(i === 1){
    root.children[0].children[i].style.borderColor = styleObj.color[1];
  }
}

//li태그 스타일 지정
for(let i = 0; i < leftSect.children[0].children.length; i++){
  styleMaker(leftSect.children[0].children[i], "", "100%", "50px", "#fff", "", styleObj.borderSolidBlack);
  styleMaker(rightSect.children[0].children[i], "", "100%", "50px", "#fff", "", styleObj.borderSolidBlack);
}

//h1태그에 클릭 이벤트 삽입
moveBtn.children[0].addEventListener('click', move);
moveBtn.children[0].style.cursor = "pointer"; //h1태그에 커서 모양 변경

//?코드 중에서 캡슐화를 더 시킬게 있을까요? 코드가 길어보이는데 조금 더 최적화?시킬 수 있는지 궁금합니다.