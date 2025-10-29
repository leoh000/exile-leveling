const n=`#section Act 6
➞ {enter|2_6_town} #Lioneye's Watch
➞ {enter|2_6_1} #The Twilight Strand
{kill|모두 다} 처치하기
{logout}
{quest|a6q4} 완료 보고 #Fallen from Grace
➞ {enter|2_6_2} #The Coast
➞ {enter|2_6_4} #The Mud Flats
{kill|명예 잃은 여왕} 찾아서 처치하기, {quest_text|점령자의 눈} 획득
    #sub {dir|45} 방향 모서리 부근, 일반적으로 집 근처에 위치
➞ {enter|2_6_5} #The Karui Fortress
➞ {arena|투코하마의 성채}, {kill|카루이 전쟁의 신 투코하마} 처치하기
{crafting} 얻기
➞ {enter|2_6_6} #The Ridge
    #sub {dir|0} 방향으로 이동
➞ {enter|2_6_7_1} #The Lower Prison
#ifdef LEAGUE_START
    {trial} 완료
#endif
{crafting} 얻기
➞ {enter|2_6_7_2} #Shavronne's Tower
➞ {arena|수용소 지붕}, {kill|되돌아온 샤브론} & {kill|재조립된 브루투스} 처치하기
➞ {arena|간수의 방}
{crafting} 얻기
➞ {enter|2_6_8} #Prisoner's Gate
➞ {enter|2_6_9} #The Western Forest
    #sub 길을 따라감
{crafting} 얻기
    #sub 길을 따라 설치된 횃불을 찾음
    #sub 횃불이 가리키는 쪽으로 길을 따라감
➞ {enter|2_6_10} #The Riverways
    #sub 길을 따라감
{waypoint_get} 얻기
    #sub 길을 따라감
➞ {enter|2_6_11} #The Wetlands
    #sub {waypoint} 근처의 기둥 두 개를 찾아보고 보이면 그 길을 따라감
➞ {arena|유충 부화장}, {kill|꼭두각시 여사 리슬라사} 처치하기
    #sub {dir|315} 방향으로 이동
{logout}
{quest|a6q3} 완료 보고 #The Father of War
{quest|a6q2} 완료 보고 #Essence of Umbra
{quest|a6q6} 완료 보고 #The Puppet Mistress
{waypoint|2_6_10} #The Riverways
➞ {enter|2_6_12} #The Southern Forest
    #sub 길이 끝날 때까지 따라 이동
    #sub {dir|135} 방향으로 이동
➞ {enter|2_6_13} #The Cavern of Anger
깃발 상자에서 {quest_text|검은 깃발} 획득
➞ {enter|2_6_14} #The Beacon
{crafting} 얻기
    #sub 해안을 따라 이동
{quest_text|기둥 밀기} 완료
{quest_text|등대}에 불을 붙이고, {quest_text|검은 깃발}을 던져 넣음
{generic|웨일럼 로스}에게 말을 검, {enter|2_6_15}로 항해 #The Brine King's Reef
➞ {arena|염수왕의 옥좌}, {kill|염수왕 소아고스} 처치하기
{logout}
{generic|판테온} 선택
`;export{n as default};
