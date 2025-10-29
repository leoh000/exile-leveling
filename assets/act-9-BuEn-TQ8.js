const n=`#section Act 9
{waypoint|2_9_town} #Highgate
➞ {enter|2_9_2} #The Descent
➞ {enter|2_9_3} #The Vastiri Desert
{waypoint_get} 얻기
    #sub {dir|90} 방향으로 이동
{crafting} 얻기
태풍 닳은 상자를 찾아 {quest_text|태풍의 칼} 획득
➞ {enter|2_9_5} #The Foothills
    #sub {dir|315} 방향으로 이동
{waypoint_get} 얻기
    #sub {dir|45} 방향으로 절벽을 발견할 때까지 이동
    #sub {dir|315} 방향으로 이동
➞ {enter|2_9_6} #The Boiling Lake
{kill|바실리스크} 찾아서 처치하기, {quest_text|바실리스크의 산} 획득
    #sub {dir|45} 방향으로 이동하며 석화된 병사들을 탐색
{crafting} 얻기
{logout}
{generic|씬}에게 말을 검
{quest|a9q3} 완료 보고
{quest|a9q5|a9q5_offer} 완료 보고, {quest_text|병에 담긴 태풍} 획득
{waypoint|2_9_3} #The Vastiri Desert
➞ {enter|2_9_4} #The Oasis
    #sub {dir|45} 방향으로 이동
➞ {arena|모래 구덩이}, {kill|모래의 여왕 샤카리} 처치하기
{logout}
{quest|a9q5|a9q5} 완료 보고 #Queen of the Sands
{waypoint|2_9_5} #The Foothills
➞ {enter|2_9_7} #The Tunnel
    #sub {dir|315} 방향으로 이동
#ifdef LEAGUE_START
    {waypoint}에 도착하기 전에 {trial}을 완료
    {crafting} 얻기
#endif
➞ {enter|2_9_8} #The Quarry
{waypoint_get} 얻기
    #sub {dir|315} 방향으로 이동
{crafting} 얻기
➞ {arena|바람의 성소}, {kill|바람의 여왕 가루칸} 처치하기, {quest_text|세케마의 깃털} 획득
    #sub {dir|45} or {dir|225}
{logout}
{quest|a9q2} 완료 보고 #The Ruler of Highgate
{waypoint|2_9_8} #The Quarry
➞ {enter|2_9_9} #The Refinery
    #sub {dir|315} or {dir|45}
{crafting} 얻기
    #sub 수레 선로에 연결되어 있는 {arena|제련소 터널} 진입용 하수구 덮개를 찾아봄
{kill|아두스 장군} 찾아서 처치하기, {quest_text|트라탄 화약} 획득
    #sub {dir|45} 방향으로 이동하며 수레 선로를 따라 진행
{logout}
{waypoint|2_9_8} #The Quarry
{generic|씬}에게 말을 검
➞ {enter|2_9_10_1} #The Belly of the Beast
➞ {enter|2_9_10_2} #The Rotting Core
➞ {arena|어둠의 중심부}
{generic|씬}에게 말을 검
➞ {arena|도이드리의 절망}, {kill|검은 영혼 도이드리} 처치하기
➞ {arena|말리가로의 비참}, {kill|부서진 말리가로} 처치하기
➞ {arena|샤브론의 슬픔}, {kill|족쇄 풀린 샤브론} 처치하기
{generic|씬}에게 말을 검 ➞ {arena|검은 심장}, {kill|타락한 삼위일체} 처치하기
{portal|use}
`;export{n as default};
