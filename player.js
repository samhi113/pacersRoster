const selector = document.getElementById("rosterSelect");
const playerVals = {
    "00": [`Benedict`, `MATHURIN`, `6'5"`, `210 lbs.`, `23`, `Arizona`, `Canadian`],
    "0" : [`Tyrese`, `HALIBURTON`, `6'5"`, `185 lbs.`, `25`, `Iowa State`, `American`],
    "1" : [`Obi`, `TOPPIN`, `6'9"`, `220 lbs.`, `27`, `Dayton`, `American`],
    "2" : [`Andrew`, `NEMBHARD`, `6'4"`, `191 lbs.`, `25`, `Gonzaga`, `Canadian`],
    "4" : [`Taelon`, `PETER`, `6'3"`, `185 lbs.`, `23`, `Liberty`, `American`],
    "5" : [`Jarace`, `WALKER`, `6'7"`, `235 lbs.`, `22`, `Houston`, `American`],
    "7" : [`Kam`, `JONES`, `6'4"`, `200 lbs.`, `23`, `Marquette`, `American`],
    "9" : [`TJ`, `McCONNELL`, `6'1"`, `190 lbs.`, `33`, `Arizona`, `American`],
    "12" : [`Johnny`, `FURPHY`, `6'8"`, `200 lbs.`, `21`, `Kansas`, `Australian`],
    "13" : [`Tony`, `BRADLEY`, `6'10"`, `248 lbs.`, `27`, `North Carolina`, `American`],
    "22" : [`Isaiah`, `JACKSON`, `6'8"`, `205 lbs.`, `23`, `Kentucky`, `American`],
    "23" : [`Aaron`, `NESMITH`, `6'5"`, `215 lbs.`, `26`, `Vanderbilt`, `American`],
    "24" : [`Garrison`, `MATHEWS`, `6'5"`, `215 lbs.`, `29`, `Lipscomb`, `American`],
    "26" : [`Ben`, `SHEPPARD`, `6'6"`, `190 lbs.`, `24`, `Belmont`, `American`],
    "29" : [`Quenton`, `JACKSON`, `6'4"`, `173 lbs.`, `27`, `Texas A&M`, `American`],
    "32" : [`Jay`, `HUFF`, `7'1"`, `245 lbs.`, `28`, `Virginia`, `American`],
    "41" : [`Gabe`, `McGLOTHAN`, `6'6"`, `235 lbs.`, `26`, `Grand Canyon`, `American`],
    "43" : [`Pascal`, `SIAKAM`, `6'8"`, `245 lbs.`, `31`, `New Mexico St`, `Cameroonian`],
    "55" : [`Ethan`, `THOMPSON`, `6'4"`, `195 lbs.`, `26`, `Oregon State`, `Puerto Rican`]
}

changePlayer("00");

selector.addEventListener("change", (e) => {
    e.preventDefault();
    changePlayer(e.target.value)
})

function changePlayer(val) {
    document.getElementById("playerPhoto").setAttribute("src", `./img/${val}.png`)

    document.getElementById("firstName").innerHTML = playerVals[val][0];
    document.getElementById("lastName").innerHTML = playerVals[val][1];

    var statText = playerVals[val][2] + " | " + playerVals[val][3] + " | " + playerVals[val][4] + " | " + playerVals[val][5]
    document.getElementById("stats").innerHTML = statText;
}