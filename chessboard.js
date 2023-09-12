const wk="\u2654";
const wq="\u2655";
const wr="\u2656";
const wb="\u2657";
const wn="\u2658";
const wp="\u2659";
const bk="\u265A";
const bq="\u265B";
const br="\u265C";
const bb="\u265D";
const bn="\u265E";
const bp="\u265F";

function newtable() {
 let a=document.getElementById("displayarea");
 
 let nt=document.createElement("table");
 for (let y=8;y>0;y--) {
  var nr=document.createElement("tr");
  for (let x=1;x<9;x++) {
   let nd=document.createElement("td");
   
   if ((y+x)%2==0) {
    nd.classList.add("black");
   } else {
    nd.classList.add("white");
   }
   
   if (y==8) { nd.classList.add("top"); }
   if (y==1) { nd.classList.add("bottom"); }
   if (x==8) { nd.classList.add("right"); }
   if (x==1) { nd.classList.add("left"); }
   
   nr.append(nd);
   
   if (y==8){
    let setup=[br,bn,bb,bq,bk,bb,bn,br];
    let piece=document.createTextNode(setup[x-1]);
	nd.append(piece);
   }
   if (y==2){
    nd.append(document.createTextNode(wp));
   }
   if (y==7){
    nd.append(document.createTextNode(bp));
   }
   if (y==1){
    let setup=[wr,wn,wb,wq,wk,wb,wn,wr];
    let piece=document.createTextNode(setup[x-1]);
	nd.append(piece);
   }
   
  }
  nt.append(nr);
 }
 a.append(nt);
 
 
}

function fullBoard(a,board,show) {
 /*
 a is the element to append to
 board is a string representation of where the pieces are
 */
 partialBoard(a,1,8,1,8,board,show);
}

function partialBoard(a,x1,x2,y1,y2,board,show) {
 /*
 a is the element to append to
 board is a string representation of where the pieces are
 */
 
 let nt=document.createElement("table");

 let ystop=show ? -1 : 0
 let xstart=show ? 0 : 1
 
 for (let y=8;y>ystop;y--) {
  if (!(y==0 || (y>=y1 && y<=y2))) { continue; }
  let nr=document.createElement("tr");
  for (let x=xstart;x<9;x++) {
   if (!(x==0 || (x>=x1 && x<=x2))) { continue; }
   
   let nd=document.createElement("td");
   
   if (x==0 && y>0) {
    nd.classList.add("coord");
	if (y>0) {
	 nd.append(document.createTextNode(y));
	 nr.append(nd);
	}
    continue;
   }
   
   if (y==0) {
    let coord=document.createTextNode(String.fromCharCode(96+x));
	nd.classList.add("coord");
	if (x>0) nd.append(coord);
	nr.append(nd);
	continue;
   }
      
   if ((y+x)%2==0) {
    nd.classList.add("black");
   } else {
    nd.classList.add("white");
   }
   
   if (y==8) { nd.classList.add("top"); }
   if (y==1) { nd.classList.add("bottom"); }
   if (x==8) { nd.classList.add("right"); }
   if (x==1) { nd.classList.add("left"); }
   
   nr.append(nd);
   
   let p=board.substr(x-1+(8-y)*8,1)
   if (p=="A") { p=10; }
   if (p=="B") { p=11; }
   if (p=="C") { p=12; }
   
   let lookup=[" ",wp,wn,wb,wr,wq,wk,bp,bn,bb,br,bq,bk]
   
   let piece=document.createTextNode(lookup[p]);
   nd.append(piece);
   
  }
  nt.append(nr);
 }
 a.append(nt);
 //if (show) a.append(document.createElement("br"));
}

function addListTable(a,list) {
 let nt=document.createElement("table");
 for (i=0;i<list.length;i++) {
  let nr=document.createElement("tr");
  for (j=0;j<list[i].length;j++) {
   let nd=document.createElement("td");
   nd.append(document.createTextNode(list[i][j]));
   nd.classList.add("info");
   nr.append(nd);
  }
  nt.append(nr)
 }
 a.append(nt);
}

function addKey(a) {
 let nt=document.createElement("table");
 let nc=document.createElement("caption");
 nc.append(document.createTextNode("KEY"));
 nt.append(nc);
 
 let content=[[[" "],["Pawn"]],[["N"],["Knight"]],[["B"],["Bishop"]],[["R"],["Rook"]],[["Q"],["Queen"]],[["K"],["King"]],[["1..8"],["Rank/Row"]],[["a..h"],["File"]],[["-"],["Move"]],[["x"],["Capture"]],[["+"],["Check"]],[["#"],["Checkmate"]]];
 for (y=0;y<content.length;y++) {
  let nr=document.createElement("tr");
  let nd=document.createElement("td");
  nd.append(document.createTextNode(content[y][0]));
  nd.classList.add("key");
  nr.append(nd);
  nd=document.createElement("td");
  nd.append(document.createTextNode(content[y][1]));
  nd.classList.add("key");
  nr.append(nd);
  nt.append(nr);
 }
 a.append(nt)
}
