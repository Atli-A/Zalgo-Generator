let zalgoList = ["&#771", "&#772", "&#770", "&#773", "&#774", "&#775", "&#817", "&#863"];
let inpt;
let slideVal;
function editOutpt() {
  if (document.getElementById("inputArea").value != inpt || document.getElementById("slide").value != slideVal) {
    inpt = document.getElementById("inputArea").value;
    slideVal = document.getElementById("slide").value;
    //console.log(inpt);

    document.getElementById("outputArea").innerHTML = addZalgo(inpt);
  }
}

function addZalgo(inptVal) {
  let s = inptVal;
  let finalString = "";
  for (let j = 0; j < s.length; j++) {
    finalString += s.charAt(j);
    for (let i = 0; i < document.getElementById("slide").value; i++) {
      finalString =
        finalString +
        zalgoList[Math.round(Math.random() * (zalgoList.length - 1))];
    }
  }
  return finalString;
}

function loop() {
  editOutpt();
  setTimeout(loop, 30);
}

loop();
