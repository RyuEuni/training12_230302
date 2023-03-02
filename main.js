
//id지정되어 있는 태그 불러오기
const moveBtn = document.getElementById('move-btn');
const root = document.getElementById('root');
const leftSect = document.getElementById('left-sect');
const rightSect = document.getElementById('right-sect');

//border style 변수에 저장
const borderSolidBlack = "1px solid black";
const borderDottedBlack = "1px dotted black";

//style과 flex속성 설정하는 함수
function styleMaker(targetName, displayVal, widthVal, heightVal, backClrVal, boderRadiusVal, boderVal){
  targetName.style.display = displayVal;
  targetName.style.width = widthVal;
  targetName.style.height = heightVal;
  targetName.style.backgroundColor = backClrVal;
  targetName.style.borderRadius = boderRadiusVal;
  targetName.style.border = boderVal;
}
function flexProperty(flexName, directionVal, jtContentVal, agItemsVal){
  flexName.style.flexDiraction = directionVal;
  flexName.style.justifyContent = jtContentVal;
  flexName.style.alignItems = agItemsVal;
}

function elmtCreate(tagName, proName, proVal, parent, textVal){
  const ele = document.createElement(tagName);
  if(proName !== "" && proVal !== ""){
    ele.setAttribute(proName, proVal);
  }
  ele.textContent = textVal;
  parent.appendChild(ele);
}

//move버튼 클릭할 때 마다 li태그가 이동되는 함수
let bool = true;
function move(){
  if(bool === true){
    // console.dir(rightSect.children[0].children);
    leftSect.children[0].style.display = "none";
    rightSect.children[0].style.display = "";
    bool = false;
  }
  else if(bool === false){
    rightSect.children[0].style.display = "none";
    leftSect.children[0].style.display = "";
    bool = true;
  }
}
//------------------------------------------------------------

//#move-btn 스타일 지정
styleMaker(moveBtn, "flex", "200px", "200px", "#fff", "50%", "");
flexProperty(moveBtn, "", "center", "center");
//#move-btn position설정
moveBtn.style.position = "fixed";
moveBtn.style.bottom = "10px";
moveBtn.style.left = "50vw";
moveBtn.style.transform = "translate(-50%, 0)";

//#root 스타일 지정
styleMaker(root, "flex", "100vw", "100vh", "cadetblue", "", "");
flexProperty(root, "", "center", "center");

//#root > main 스타일 지정
styleMaker(root.children[0], "flex", "500px", "500px", "", "", borderDottedBlack);
flexProperty(root.children[0], "","center", "center");

//#left-sect, #right-sect 스타일 지정
for(let i = 0; i < root.children[0].children.length; i++){
  styleMaker(root.children[0].children[i], "flex", "200px", "450px", "", "", borderSolidBlack);
  flexProperty(root.children[0].children[i], "", "center", "center");
  if(i === 1){
    root.children[0].children[i].style.borderColor = "blue";
  }
}

//li태그 스타일 지정
for(let i = 0; i < leftSect.children[0].children.length; i++){
  styleMaker(leftSect.children[0].children[i], "", "100%", "50px", "#fff", "", borderSolidBlack);
}

//rightSec에도 leftSec쪽 li태그 동일하게 생성
for(let i = 0; i < leftSect.children[0].children.length; i++){
  elmtCreate("li", "", "", rightSect.children[0], `items-${i+1}`);
  styleMaker(rightSect.children[0].children[i], "", "100%", "50px", "#fff", "", borderSolidBlack);
}
//첫 화면에선 rightSec의 li태그가 안보여야 하니까 display설정
rightSect.children[0].style.display = "none";

//h1태그에 클릭 이벤트 삽입
moveBtn.children[0].addEventListener('click', move);