
//일부 style 객체에 저장
const styleObj = {
  borderSolidBlack: "1px solid black",
  borderDottedBlack: "1px dotted black",
  color: ["cadetblue", "blue", "black"]
}

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
//------------------------------------------------------------------

//태그 생성하는 부분
//#move-btn > h1
elmtCreate("aside", "id", "move-btn", document.body, "");
elmtCreate("h1", "", "", document.body.children[1], "move!");

//#root > main
elmtCreate("div", "id", "root", document.body, "");
elmtCreate("main", "", "", document.body.children[2], "");

//#root > main > left-section, right-section
elmtCreate("section", "id", "left-sect", document.body.children[2].children[0], "");
elmtCreate("section", "id", "right-sect", document.body.children[2].children[0], "");

//#root > main > left-section > ul, right-section > ul
elmtCreate("ul", "", "", document.body.children[2].children[0].children[0], "");
elmtCreate("ul", "", "", document.body.children[2].children[0].children[1], "");

//#root > main > left-section > ul > li 5개, right-section > ul > li 5개
for(let i = 0; i < 5; i++){
  elmtCreate("li", "", "", document.body.children[2].children[0].children[0].children[0], `items-${i+1}`);
  elmtCreate("li", "", "", document.body.children[2].children[0].children[1].children[0], `items-${i+1}`);
}
//------------------------------------------------------------------
