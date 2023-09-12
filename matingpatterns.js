function init() {
    /*
    Calls partial board a few times
    with the required data
    */
    //newBoard(document.getElementById("displayarea"),"00000AC00000075700000370000000000000000000000000000000000000000000000000");
    var a=document.getElementById("skillarea");
    
    var b=document.createElement("div");
    
    //example 1 Clearing
    addListTable(b,[["Clearing / Vacating-sacrifice"],["White to play"],["S. Rosenthal - Allies"],["1. Ng5-e6+ d7xNe6"],["2. Bc1-h6#"],["The knight vacates the g5 square allowing the bishop to pass through it on its way to delivering checkmate."]]);
    fullBoard(b,"A09B0C0A77778307090000000000102700001000000000001070001142300406",true);
    addKey(b);
    
    a.append(b)
    b=document.createElement("div");
    
    //example 16 Deflecting
    addListTable(b,[["Deflection (Decoy)"],["White to play"],["G. Serper - A. Shirov"],["1. Qe2xe6+ Re8xQe6"],["2. Rf4-f8#"],["The black rook has been deflected from its defence of the f8 square by the sacrifice, allowing the white rook to deliver checkmate."]]);
    fullBoard(b,"B009A0C009000077000370007000000807000400000302001100511100000060",true);
    
    a.append(b)
    b=document.createElement("div");
    
    //example 11 Attracting / Drawing the King into the net
    addListTable(b,[["Attraction (Decoy)"],["White to play"],["L. Adams - L. Comas Fabrego"],["1. Re7-f7+ Kf8xRf7"],["2. Qe5-e7#"],["The white rook is unable to deliver a useful check on e8, instead it delivers a check that attracts the black king to the f7-square. Here, the subsequent checkmate could be delivered even if the king was still on f8, but sometimes an attraction tactic can lead the king from a safe square to an unsafe one."]]);
    fullBoard(b,"A0000CA0090040807B0000700000500007000010000001001110000106004000",true);
    
    a.append(b)
    b=document.createElement("div");
    
    //example 15 Opening a line
    addListTable(b,[["Opening a line (Decoy)"],["White to play"],["L. Christiansen - J. Nunn"],["1. Rf1xf6+ Bg7xRf6"],["2. Ne7-g6#"],["What could be played if the black bishop was not on g7? The white knight could deliver a checkmate on g6. The rook moves from f1 to sacrifice itself on f6, so as to open the seventh row to the white queen's effect."]]);
    fullBoard(b,"0000AC0077002095000007000000000000B0000010000000000A001100004406",true);
    
    a.append(b)
    b=document.createElement("div");
    
    //example 24 Deflecting / Opening a line and Pinning
    //fullBoard(b,"00C0A00A77700070000900000007B00900000007002101001110050140000046",true);
    
    //example 14 pin
    addListTable(b,[["Pinning - to keep a line open"],["Black to play"],["R. Ofek - G. Kaidanov"],["1. Qf5xf2+ Rf1xQf2"],["2. Re8-e1#"],["Here, once the white rook on f1 has been deflected from its defence of the back rank, it finds itself pinned to the king, and so cannot move back to block the attack from the black rook moving to e1."]]);
    fullBoard(b,"9000A0C0000007777007000070000B2050090000000000400000011100000460",true);
     
    a.append(b)
   
    a=document.getElementById("linearpatternarea");
    //Rook protected by a piece
    partialBoard(a,5,7,6,8,"00004C0000000070000000300000400000000000000000000000000000000000",false);
    //partialBoard(a,5,7,6,8,"00004C0000000000000001300000400000000000000000000000000000000000",false);
    partialBoard(a,6,8,7,8,"00000AC000000044000000000000000000000000000000000000000000000000",false);
    //partialBoard(a,7,8,6,8,"000000400000004C000000070000000000000000000000000000000000000000",false);
    //partialBoard(a,4,7,7,8,"00004C0000050000000000000000000000000000000000000000000000000000",false);
    
    partialBoard(a,4,6,6,8,"0000C00000004000000120000000000000000000000000000000000000000000",false);
    //partialBoard(a,4,6,6,8,"0000C00000004000000026000000000000000000000000000000000000000000",false);
    
    partialBoard(a,6,8,6,8,"0000004C00000000000002000000000000000000000000000000000000000000",false);
    partialBoard(a,6,8,6,8,"000000AC000000040000001700000000000000000000000000000000000000000",false);
    partialBoard(a,6,8,6,8,"000000AC000000040000020700000000000000000000000000000000000000000",false);
   
   
    //BACK RANK
    //The rook/queen must not need to be protected
    //These are purer the king is trapped mates
    a=document.getElementById("backrankpatternarea");
    
    //Rook alone
    partialBoard(a,2,6,7,8,"0400C00000077700000000000000000000000000000000000000000000000000",false);
    //partialBoard(a,6,8,7,8,"0000040C00000077000000000000000000000000000000000000000000000000",false);
     
     //Rook and King
    partialBoard(a,2,6,6,8,"0400C00000000000000060000000000000000000000000000000000000000000",false);
    partialBoard(a,6,8,6,8,"0000040C00000000000000600000000000000000000000000000000000000000",false);
   
    //Artificial edge
    partialBoard(a,4,8,6,8,"00040000000400C0000007770000000000000000000000000000000000000000",false);
     
    //Rook and another piece blocking escape squares
    partialBoard(a,3,7,6,8,"00400C0000000700000001000000000000000000000000000000000000000000",false);
    partialBoard(a,3,7,5,8,"00400C0000000700000000000000020000000000000000000000000000000000",false);
    partialBoard(a,4,8,5,8,"000400C000000707000000700000300000000000000000000000000000000000",false);
    
    //ARTIFICIAL BARRIERS
    a=document.getElementById("artificialwallpatternarea");
   
    //Two or more pieces combine to form a barrier to the king
    //creating an artifical edge/wall/barrier
    //and between this and an actual edge
    //the king is mated
    partialBoard(a,3,7,6,8,"00400C0000000000000011000000000000000000000000000000000000000000",false);
    partialBoard(a,3,7,5,8,"00400C0000000000000000000000220000000000000000000000000000000000",false);
    partialBoard(a,3,7,5,8,"00400C0000000000000200000000020000000000000000000000000000000000",false);
    partialBoard(a,3,7,5,8,"00400C0000000000000033000000000000000000000000000000000000000000",false);
    partialBoard(a,3,7,5,8,"00400C0000000000000000000003020000000000000000000000000000000000",false);
    partialBoard(a,3,7,5,8,"00400C0000000000000203000000000000000000000000000000000000000000",false);
   
    //EDGE FILE
    a=document.getElementById("edgefilepatternarea");
    partialBoard(a,5,8,4,8,"000000000000007C000030700000000000000004000000000000000000000000",false);
    partialBoard(a,5,8,4,8,"00000004000000700000000C0000037000000000000000000000000000000000",false);
    
    //Calculation Training Patterns - a la Romain Edouard
    partialBoard(a,5,8,5,8,"000000000000277C000000000000000400000000000000000000000000000000",false);
    partialBoard(a,5,8,5,8,"00000004000000000000037C0000000000000000000000000000000000000000",false);
    partialBoard(a,5,8,4,8,"00000005000000000000007C0000000000000001000000000000000000000000",false);
    
    
    //BISHOP
    a=document.getElementById("diagonalpatternarea");
    
    //Cornered by Raking/Horowitz Bishops
    partialBoard(a,4,8,4,8,"0000000C00000007000030000000300000000000000000000000000000000000",false);
    
    //Two bishops endgame
    partialBoard(a,6,8,6,8,"0000000C00000300000003600000000000000000000000000000000000000000",false);
    
    //Knight and bishop endgame
    partialBoard(a,1,4,5,8,"C020000000600000000000000003000000000000000000000000000000000000",false);
    
    //Crossfire
    partialBoard(a,5,8,6,8,"000000CA00000007000030730000000000000000000000000000000000000000",false);
    
    //With protection
    partialBoard(a,3,7,5,8,"A20BC90A77707377000000000000290000000000000000000000000000000000",false);
    
    
    //Reti's mate
    partialBoard(a,2,4,1,8,"A893000077C00000007000000000000000000000000000000000000000040000",false);
    
    //Calculation Training Patterns - a la Romain Edouard
    partialBoard(a,5,8,1,8,"00000C0000008307000000730000000000000000000000000000001100000460",false);
    partialBoard(a,4,7,6,8,"00000C0000000100000300600000000000000000000000000000000000000000",false);
    
    //KNIGHT
    a=document.getElementById("knightpatternarea");
    partialBoard(a,6,8,7,8,"000000AC00000277000000000000000000000000000000000000000000000000",false);
    partialBoard(a,3,6,7,8,"000AC90000297700000000000000000000000000000000000000000000000000",false);
   
    //Calculation Training Patterns - a la Romain Edouard
    partialBoard(a,3,6,6,8,"00AC000000000500000020000000000000000000000000000000000000000000",false);
    
    //QUEEN
    a=document.getElementById("queenpatternarea");
    
    
    //Many enemy pieces blocking the king
    partialBoard(a,5,8,5,8,"A89BC98A77777007000007000000007500011000000000001110011142350324",false);
   
    // Queen alone or with King
    partialBoard(a,2,6,6,8,"0500C00000000000000060000000000000000000000000000000000000000000",false);
    //partialBoard(a,6,8,6,8,"0000050C00000000000000600000000000000000000000000000000000000000",false);
    
    //The pawn guard blocking the king / Back-rank
    partialBoard(a,2,6,7,8,"0500C00000077700000000000000000000000000000000000000000000000000",false);
    //partialBoard(a,6,8,7,8,"0000050C00000077000000000000000000000000000000000000000000000000",false);
   
    //Back rank-esque
    partialBoard(a,4,7,6,8,"00050C00000000700000001000000000000000000000000000000000000000000",false);
    //partialBoard(a,5,7,4,8,"00005C0000000000000001000000400000000000000000000000000000000000",false);
    //partialBoard(a,4,7,7,8,"00050C0000004000000000000000000000000000000000000000000000000000",false);
    
    a=document.getElementById("upclosepatternarea");
    //Up close and personal
    partialBoard(a,4,6,6,8,"0000C00000005000000060000000000000000000000000000000000000000000",false);
    partialBoard(a,6,8,6,8,"0000000C00000050000006000000000000000000000000000000000000000000",false);
    partialBoard(a,6,8,6,8,"00000AC000000757000000710000000000000000000000000000000000000000",false);
    
    partialBoard(a,5,8,5,8,"000000C000000757000000000000300000000000000000000000000000000000",false);
    partialBoard(a,5,8,5,8,"000000C000000757000000000000004000000000000000000000000000000000",false);
    partialBoard(a,6,8,5,8,"00000AC000000075000000000000002000000000000000000000000000000000",false);
    partialBoard(a,6,8,6,8,"00000AC000000075000000100000000000000000000000000000000000000000",false);
    partialBoard(a,3,7,5,8,"A29BC08A77700577000000000090702000000000000000000000000000000000",true);
    
    //Calculation Training Patterns - a la Romain Edouard
    partialBoard(a,5,7,1,8,"0000500000000CA0000007000000000000000000000000000000000000004000",false);
    partialBoard(a,5,7,1,8,"0000500000000CA0000000000000001000000000000000000000000000004000",false);
   
    //Silly two Queens pattern
    //partialBoard(a,2,4,4,7,"00000000050000000000000000C0000005000000000000000000000000000000",false);
    //partialBoard(a,2,4,4,7,"00000000050000000000000000C5000000000000000000000000000000000000",false);
    
    
    //Queen and one blocked diagonal
    a=document.getElementById("oneblockeddiagonalpatternarea");
     //Queen protected by a piece
    //partialBoard(a,6,8,6,8,"00000AC000000757000003700000000000000000000000000000000000000000",false);
    partialBoard(a,5,7,4,8,"00005C0000000070000000000000000000004000000000000000000000000000",false);
    partialBoard(a,4,7,7,8,"00005C0000010070000000000000000000000000000000000000000000000000",false);
    partialBoard(a,4,8,6,8,"00005C0000010000000000010000000000000000000000000000000000000000",false);
    partialBoard(a,6,8,4,8,"00000000000000050000000C0000002000000001000000000000000000000006",false);
    
    //Epaulettes and Gueridon
    a=document.getElementById("epaulettespatternarea");
    partialBoard(a,4,6,6,8,"000ACA0000000000000050000000000000000000000000000000000000000000",false);
    partialBoard(a,6,8,6,8,"0000000A0000050C000000070000000000000000000000000000000000000000",false);
    partialBoard(a,4,6,5,8,"000A0A000000C000000050000001000000000000000000000000000000000000",false);
    partialBoard(a,5,8,6,8,"0000000A000005C0000010070000000000000000000000000000000000000000",false);
    partialBoard(a,5,8,5,8,"0000000A000005C0000010000000001000000000000000000000000000000000",false);
    
    //PAWNS
    a=document.getElementById("pawnpatternarea");
    
    partialBoard(a,1,2,4,8,"0400000070000000C00000007100000000000000000000000000000000000000",false);
    
    //Calculation Training Patterns - a la Romain Edouard
   
   }
   