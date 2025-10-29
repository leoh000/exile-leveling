const e=`#section Act 1
{kill|힐록} 찾아서 처치하기
➞ {enter|1_1_town} #Lioneye's Watch
{quest|a1q1} 완료 보고 #Enemy at the Gate
➞ {enter|1_1_2} #The Coast
#ifdef LEAGUE_START
    {waypoint_get} 얻기
#endif
➞ {enter|1_1_3} #The Mud Flats
3x{quest_text|상형 문자} 찾기
    #sub 작은 시냇물들이 세 개의 로아 둥지를 연결하고 있음
    #sub 보통 삼각형 형태를 이루지만, 드물게 일자 형태로 형성됨
➞ {enter|1_1_4_1} #The Submerged Passage
#ifdef LEAGUE_START
    {waypoint|1_1_2} #The Coast
    ➞ {enter|1_1_2a} #The Tidal Island
    {kill|우박 갈퀴} 찾아서 처치하기, {quest_text|약품 상자} 획득
        #sub {dir|270} 방향으로 이동
        #sub 절벽 지형을 발견하면 방향을 돌리고 {dir|90} 쪽으로 이동
        #sub 추천 레벨: 4
    {logout}
    {quest|a1q4} 완료 보고 #로아 알 깨트리기
    {quest|a1q5} 완료 보고 #자비로운 임무
#endif
#ifndef LEAGUE_START
    {waypoint|1_1_town} #Lioneye's Watch
    {quest|a1q4} 완료 보고 #Breaking Some Eggs
#endif
{waypoint|1_1_4_1} #The Submerged Passage
다리를 찾아서 {portal|set} 열기
➞ {enter|1_1_5} #The Ledge
➞ {enter|1_1_6} #The Climb
➞ {enter|1_1_7_1} #The Lower Prison
{waypoint|1_1_town} #Lioneye's Watch
{portal|use}
➞ {enter|1_1_4_0} #The Flooded Depths
    #sub 다리의 오른쪽으로 이동
{kill|심연의 주인} 찾아서 처치하기
    #sub 입구의 반대편을 탐색
    #sub 큰 빈 공간을 찾아봄
{logout}
{quest|a1q7} 완료 보고 #The Dweller of the Deep
{quest|a1q2|a1q2b} 완료 보고 #The Caged Brute
{waypoint|1_1_7_1} #The Lower Prison
#ifdef LEAGUE_START
    {trial} 완료
        #sub 보통 {dir|45}
#endif
➞ {enter|1_1_7_2} #The Upper Prison
#ifdef LEAGUE_START
    {generic|약제사의 금고} 찾기
        #sub 지도 아이콘을 확인하고, 근처 스위치로 작동함
        #sub {generic|수은 플라스크} 획득 확률 높음
        #sub 상인레시피: {generic|수은 플라스크} + {generic|확장의 오브} + 일반 등급 {generic|장화}
        #sub 상인레시피: {generic|수은 플라스크} + {generic|확장의 오브} + 이동속도 {generic|장화}
#endif
➞ {arena|간수의 숙소}, {kill|강대한 감독관 브루투스} 처치하기
    #sub 추천 레벨: 8
{logout}
{quest|a1q2|a1q2} 완료 보고 #The Caged Brute
{waypoint|1_1_8} #Prisoner's Gate
➞ {enter|1_1_9} #The Ship Graveyard
    #sub 길 옆의 절벽을 따라 아래로 내려감
{area|1_1_9a} 찾기, {portal|set} 열기 #The Ship Graveyard Cave
➞ {enter|1_1_11_1} #The Cavern of Wrath
{waypoint|1_1_town} #Lioneye's Watch
{portal|use}
➞ {enter|1_1_9a} #The Ship Graveyard Cave
{quest_text|노예 소녀} 찾기, {quest_text|올플레임} 획득
    #sub 입구의 반대편을 탐색
➞ {enter|1_1_9}, {kill|페어그레이브즈 선장} 처치하기 #The Ship Graveyard
{logout}
{quest|a1q6} 완료 보고 #The Marooned Mariner
{quest|a1q3} 완료 보고 #The Siren's Cadence
{waypoint|1_1_11_1} #The Cavern of Wrath
➞ {enter|1_1_11_2} #The Cavern of Anger
    #sub 물을 따라감
➞ {arena|머베일의 소굴}, {kill|사이렌 머베일} 처치하기
    #sub 물을 따라감
    #sub 추천 레벨: 12
`;export{e as default};
