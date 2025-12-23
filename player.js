const selector = document.getElementById("rosterSelect");

const playerVals = {
    "00": [`Benedict`, `MATHURIN`, `6'5"`, `210 lbs.`, `23`, `Arizona`, `Canadian`, "Drafted 6th overall by the Pacers in the 2022 Draft, Mathurin has been a solid force off the bench in his first several years. His role has been elevated this year, starting in all 18 of his appearences thi year, with averages of 18.7 PPG, 5.7 rebounds, and 2.1 assists. The 2024 Rising Stars MVP and Skills Contest winner looks to send a message as to his status as a career starter."],
    "0" : [`Tyrese`, `HALIBURTON`, `6'5"`, `185 lbs.`, `25`, `Iowa State`, `American`, "Following a promising rookie season in Sacremento, the Pacers traded for Tyrese in January 2022. Since joining the Pacers, Haliburton has been nothing short of a superstar. Including the playoffs, Tyrese has averaged 19.2 PPG, 9.8 assists, 4.0 rebounds, and only 2.2 turnovers per game. An achilles tear sidelines him this season, but the league will be on watch when the 2-time All-Star and All-NBA team member returns."],
    "1" : [`Obi`, `TOPPIN`, `6'9"`, `220 lbs.`, `27`, `Dayton`, `American`, "The Pacers picked up Obi in the 2023 Free Agency, and he stepped on the gas immediately. He was a heavy bench player, seeing minutes all throughout the game, oftentimes late in close moments. This season has been sidelined with a stress fracture three games in, but when he returns, the team will look different."],
    "2" : [`Andrew`, `NEMBHARD`, `6'4"`, `191 lbs.`, `25`, `Gonzaga`, `Canadian`, "The number 31 has allure to it in Pacers history, and Nembhard was the 31st pick in the 2022 Draft. He was elevated to the starting lineup during the moving and shaking of the 2023-24 season, helping act as a 3 and D guard with a deep bag. This season has seen Nembhard average 17.6 PPG, 2.2 rebounds, and 6.4 rebounds in his elevation to the lead point guard."],
    "4" : [`Taelon`, `PETER`, `6'3"`, `185 lbs.`, `23`, `Liberty`, `American`, "A two-way rookie, Taelon was noted as a sharpshooter in his college career at both D2 Arkansas Tech and at Liberty. The Pacers took a shot on him at 54th overall, and he shined during the Summer League and preseason."],
    "5" : [`Jarace`, `WALKER`, `6'7"`, `235 lbs.`, `22`, `Houston`, `American`, "In 2023, the Pacers took Bilal Coulibaly 7th, then swapped with the Wizards, getting a second-round pick and Jarace. Jarace has been a never-quit guy, always pushing to get an edge on the competition and snag rebounds. Appearing in 29 games, Jarace averages 9.2 PPG, 4.8 rebounds, and 2.0 assists."],
    "7" : [`Kam`, `JONES`, `6'4"`, `200 lbs.`, `23`, `Marquette`, `American`, "One of two two-way rookies, Kam Jones was drafted 38th by the Spurs as part of a trade with the Pacers, before being sidelined due to a back stress reaction. He made his debut on December 22nd in Boston, making his only shot for 2 points in 1 minute."],
    "9" : [`TJ`, `McCONNELL`, `6'1"`, `190 lbs.`, `33`, `Arizona`, `American`, "Widely regarded as one of the greatest white American players, TJ McConnell is the prototypical sparkplug. A motor that never runs out, an efficient passer, and one of the quickest stealers on the court. Returning after a preseason injury, McConnell has averaged 9.5 PPG, 2.7 rebounds, 4.6 assists, and 1.1 steals in his 18 appearances this season, returning to old form just as quick as his pop-up midrange shots."],
    "11" : [`James`, `WISEMAN`, `6'11"`, `240 lbs.`, `24`, `Memphis`, `American`, "Wiseman has had an on-and-off time with the Pacers, returning recently on a hardship 10-day contract. The Pacers have been known to sign many players off of 10-days, but time will tell if Wiseman is the guy."],
    "12" : [`Johnny`, `FURPHY`, `6'8"`, `200 lbs.`, `21`, `Kansas`, `Australian`, "In a Draft-Night trade with San Antonio, the Pacers acquired the rights to draft Furphy, and it's been a match made in heaven. His rookie campaign saw him playing two-way with the Indiana Mad Ants (now Noblesville Boom,) where he shined in his 10 starts. An ankle injury took him out for a while, but Furphy has since returned, with 11 games this year, averaging 13.4 minutes, 3.5 PPG, and 2.2 rebounds."],
    "13" : [`Tony`, `BRADLEY`, `6'10"`, `248 lbs.`, `27`, `North Carolina`, `American`, "Last season, the Pacers brought Bradley on with a pair of 10-day contracts, before signing him for the remainder of the 24-25 season into this season. His solid play and rotational minutes garnered enough credit for minutes well into the playoff run, including some stints in the Finals series. This season, he has averaged 11.3 minutes, 4.7 PPG, and 2.6 rebounds in 23 games."],
    "22" : [`Isaiah`, `JACKSON`, `6'8"`, `205 lbs.`, `23`, `Kentucky`, `American`, "Isaiah has been a quietly important part of the rotation, notably missing all of last season, minus the first five games, when he tore his Achilles. Since healing and returning to the squad, he has averaged 7.3 PPG, 5.9 rebounds, and 0.8 rebounds on an impressive 58.5% shooting."],
    "23" : [`Aaron`, `NESMITH`, `6'5"`, `215 lbs.`, `26`, `Vanderbilt`, `American`, "The paper clip. Acquired in a trade with Boston, Nesmith has been a crucial member of the team, starting in a majority of his appearances in the past 3 seasons. Between quick ball movement, hard drives, and steady defensive play, Nesmith has quickly earned himself a reputation as one who never quits. Oh, yeah. And he can be a flamethrower down the stretch. Just ask New York."],
    "24" : [`Garrison`, `MATHEWS`, `6'5"`, `215 lbs.`, `29`, `Lipscomb`, `American`, "One of the Pacers mid-season moves, Garrison was picked up via 10-day hardship contracts, then eventually picked up for the remained of the season with a waiver of Jeremiah Robinson-Earl. Mathews has good transition play and has averaged 5.1 PPG, 1.1 rebounds, and 0.7 assists so far this season on an average 13.2 minutes."],
    "26" : [`Ben`, `SHEPPARD`, `6'6"`, `190 lbs.`, `24`, `Belmont`, `American`, "A key rotational player, the Pacers selected Ben 26th overall in the 2023 Draft. He has slowly gained momentum, putting up career numbers this season of an average 6.5 PPG, 4.1 rebounds, and 2.0 assists."],
    "29" : [`Quenton`, `JACKSON`, `6'4"`, `173 lbs.`, `27`, `Texas A&M`, `American`, "In his second year with the Pacers on a two-way contract, Jackson continues to excel, primarily in his isolation matchups and shot creation. With injuries plaguing the Pacers, Jackson has found a larger presence when healthy. He has averaged a career-high 18.8 minutes, 9.0 PPG, 2.9 rebounds, and 2.4 assists."],
    "32" : [`Jay`, `HUFF`, `7'1"`, `245 lbs.`, `28`, `Virginia`, `American`, "An offseason free agency pickup, Huff has built a great reputation as a shooting big, willing to sling the rock and get blocks. The current league block leader averages 7.9 PPG, 4.0 rebounds, 1.2 assists, and 2.5 blocks, solidifying himself as a key member of the franchise."],
    "41" : [`Gabe`, `McGLOTHAN`, `6'6"`, `235 lbs.`, `26`, `Grand Canyon`, `American`],
    "43" : [`Pascal`, `SIAKAM`, `6'8"`, `245 lbs.`, `31`, `New Mexico St`, `Cameroonian`, "Acquired via a trade in January 2024, the 2019 champion has fit right in with the team, becoming a first option for the team by carving through teams and making tough baskets. Siakam was the Eastern Conference Finals MVP during last year's Finals run, his case for a 4th All-Star appearance is well-built, averaging 23.8 PPG, 6.7 rebounds, and 4.0 assists in his best statistical season in the blue and gold."],
    "55" : [`Ethan`, `THOMPSON`, `6'4"`, `195 lbs.`, `26`, `Oregon State`, `Puerto Rican`, "Another mid-season pickup via waivers, Thompson is a two-way player who has seen plenty of usage from the Pacers, averaging 20 minutes, 5.9 PPG, 1.7 rebounds, and 1.7 assists."]
}

changePlayer("00", true);

selector.addEventListener("change", (e) => {
    e.preventDefault();
    changePlayer(e.target.value, false)
})

async function changePlayer(val, skip) {

    if (!skip) {
        document.getElementById("display").style.marginLeft = "300vw";
        await delay(1000);
    }

    document.getElementById("playerPhoto").setAttribute("src", `./img/${val}.png`)

    document.getElementById("firstName").innerHTML = playerVals[val][0];
    document.getElementById("lastName").innerHTML = playerVals[val][1];

    var statText = playerVals[val][2] + " | " + playerVals[val][3] + " | " + playerVals[val][4] + " | " + playerVals[val][5] + " | " + playerVals[val][6];
    document.getElementById("stats").innerHTML = statText;

    document.getElementById("description").innerHTML = (playerVals[val][7]) ? playerVals[val][7] : "No Description Provided";

    document.getElementById("display").style.marginLeft = "0";
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
