
function add_timeline() {
    let e=document.getElementById("timeline");
    let nt=document.createElement("table");
    let tr=document.createElement("tr");
    let th1=document.createElement("th");
    let th2=document.createElement("th");
    th1.append(document.createTextNode("Century"));
    th2.append(document.createTextNode("Events"));
    tr.append(th1);
    tr.append(th2);
    nt.append(tr);

    let data=[
        "","","","","","",
        ["The forerunner of chess, chaturanga, is invented in India (probably)",
        "The game spreads west into Persia (modern day Iran)",
        "Either in the 6th century or in the 7th century the game of chaturanga spreads west into China, Japan, and Korea but fails to take hold against the established game of Go",
        "Chinese River Chess (xiang-qi) is influenced by or derived from chaturanga, xiang-qi is played with black and red pieces, and black has the first move"
        ],//6th century
        ["Bana, in Harshacharita, mentions chaturanga, giving us documentary evidence of its existence",
        "In 633 the (Aryan) Sasanian rule of Persia (modern day Iran) is brought to an end through conquest by Muslims under Umar, and chaturanga becomes the game of shatranj",
        "Possibly a rook carved from sandstone becomes buried beneath a trading post in modern day Jordan, to be rediscovered in 2019"
        ],//7
        ["The first Arabic literary references to chess are written"],//8
        [
        "The Moors who have conquered Spain bring chess into Europe",
        "Around 820 chess is introduced into Russia (though there are indications it could have been earlier)",
        "In 842 Al-Aldi writes 'a book of chess'; he is regarded as the first great Arabic player (aliyat, which might in today's terms equate to grandmaster)",
        "Rudrata, in the poem Kavyalankara, in 875, demonstrates tours of the chaturanga board by the chariot (rat ha - the modern rook), the horse (ashwa), and the elephant (dvipa - the modern bishop), giving us documentary evidence for how the pieces moved at the time - the chariots moved the same as our rooks, the horses moved the same as our knights, however the elephants would leap one square diagonally which is a little different from the modern bishop",
        "In 880 a coordinate notation begins to be found for chess in Arabic countries"
        ],//9
        ["A game is recorded between a historian from Baghdad and his pupil; this is the oldest recorded game in chess history",
        "910 al-lajlaj writes a book of openings (a line of theory which seems not to be developed further until about a thousand years later in Europe))",
        "Circa 999, the Einsiedelin Verses, composed in Switzerland, mention chess"
        ],//10
        ["In Europe, the game of chess begins to be played on a chequered board"],//11
        ["Either in the late 12th century or the early 13th century the Isle of Lewis chess pieces are made; they have a Scandinavian (Viking) style to them"],//12
        [
            "Louis IX of France's 1252 ordinance against gambling--chess was played for money at the time--is widely ignored and commoners and nobility alike continues to play chess",
            "1262, Russian chess becomes known as shakhmaty",
            "1283, Alfonso the Wise has a work on chess and other games written in his name",
            "Sometime in the late 13th century, Jacobus de Cessolis writes 'Liber de moribus hominim et officiis nobilium' and describes pawns as being able to move two spaces forwards on their first move (though at this time en-passant had not developed)"
        ],//13
        [
            "1369, Chaucer gives us evidence that the queen has become more powerful when he writes that when his queen was taken he could no longer play - however this could be (purely) an allusion to a romance",
            "Ala'addin at Tabrizi is a shatranj grandmaster at the court of Timur, the Mogul Emperor"
        ],//14
        ["1497, Lucena's 'Arte de Axedres' describes the en-passant capture that pawns can make"],//15
        [
            "Circa 1500, Luca Pacioli's 'De ludo schachorum' gives over a hundred problems to be solved, and describes both old and new rules for the queen and bishop (the new ones being the modern ones with which we play, when they can move the full extent of the board)",
            "1584, Ivan IV, the Terrible, of Russia, dies while playing chess"],//16
        [],//17
        [],//18
        [
            "1831, the Isle of Lewis chess pieces are rediscovered",
            "1834, La Bourdonnais plays against McDonnell, and an onlooker-- the Westminster Chess Club's elderly founder, William Greenwood Walker--records the games, and opening theory takes a stride forwards; some now regard this match as the first unofficial World Championship",
            "1841, Howard Staunton is recognised as the world's best player",
            "1843, in the second of two matches, Staunton develops heart palpitations, which interfere with his playing of chess, he nevertheless wins the match with eleven wins, four draws, and six losses; the heart palpitations continue for the rest of his life",
            "1844 Howard Staunton catches pneumonia whilst travelling to Europe",
            "1851, after winning a tournament in London Adolf Anderssen is recognised as the world's best player; during down-time at this tournament, Anderssen also produces his 'Immortal Game' against Kieseritzky",
            "1852, Anderssen wins his 'Evergreen game' against Jean Dufresne",
            "1857, Paul Morphy comes from America to Europe to play against the world's best players",
            "1858, Morphy wins his 'Opera Game' against the amateurs (in the older non-pejorative sense) Karl II, Duke of Brunswick, and the French aristocrat Comte Isouard de Vauvenargues",
            "December 1858, Morphy defeats (the long out of practice) Adolf Anderssen in an eleven game match +7 -2 =2 (Anderssen had scarcely played since his win in 1851)",
            "Wilhelm Steinitz becomes the first officially recognised World Champion after his 1886 defeat of Johannes Zukertort",
            "Emanuel Lasker defeats Steinitz in 1894 to become World Champion, a title he holds for the next 27 years"
        ],//19
        [],//20
        [],//21
    ];
    for (century=21;century>=6;century-=1) {
        let ntr=document.createElement("tr");
        let ntd1=document.createElement("td");
        let ntd2=document.createElement("td");

        if (century!=11 && century%10==1) {
            ntd1.append(document.createTextNode(century + "st"))
        } else if (century!=12 && century%10==2) {
            ntd1.append(document.createTextNode(century + "nd"))
        } else if (century!=13 && century%10==3) {
            ntd1.append(document.createTextNode(century + "rd"))
        } else {
            ntd1.append(document.createTextNode(century + "th"))
        }

        if (data[century]) {
            for (i=0;i<data[century].length;i++) {
                let p=document.createElement("p");
                p.append(document.createTextNode(data[century][i]));
                ntd2.append(p);
            }
        }
        ntr.append(ntd1);
        ntr.append(ntd2);
        nt.append(ntr);
    }
    e.append(nt);
}
