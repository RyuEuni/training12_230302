const moveBtn = document.getElementById('move-btn');
const root = document.getElementById('root');
const leftSect = document.getElementById('left-sect');
const rightSect = document.getElementById('right-sect');

const borderSolidBlack = "1px solid black";
const borderDottedBlack = "1px dotted black";

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

//#move-btn 스타일 지정
styleMaker(moveBtn, "flex", "200px", "200px", "#fff", "50%", "");
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

