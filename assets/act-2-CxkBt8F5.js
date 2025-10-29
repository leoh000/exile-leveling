const n=`#section Act 2
➞ {enter|1_2_1} #The Southern Forest
➞ {enter|1_2_town} #The Forest Encampment
➞ {enter|1_2_2} #The Old Fields
    #sub {dir|45} 방향으로 이동
#ifdef LEAGUE_START
    {area|1_2_2a} 찾기, {portal|set} 열기 #The Den
#endif
➞ {enter|1_2_3} #The Crossroads
    #sub 길을 따라감
#ifdef LEAGUE_START
    {waypoint|1_2_town} #The Forest Encampment
        #sub 길을 따라감
    {portal|use}
    ➞ {enter|1_2_2a} #The Den
    {kill|거대한 백색 야수} 찾아서 처치하기
    {logout}
    {quest|a2q10} 완료 보고 #The Great White Beast
    {waypoint|1_2_3} #The Crossroads
#endif
#ifndef LEAGUE_START
    {waypoint_get} 얻기
#endif
➞ {enter|1_2_6_1} #The Chamber of Sins Level 1
    #sub {dir|315} 방향으로 이동
➞ {enter|1_2_6_2} #The Chamber of Sins Level 2
    #sub {waypoint}이 있는 방향으로 계속 이동
#ifdef LEAGUE_START
    {trial} 완료
#endif
{kill|슬퍼하는 피델리타스} 처치하기, {quest_text|사악한 젬} 획득
    #sub 긴 복도를 찾아봄
    #sub 추천 레벨: 14-15
{logout}
{quest|a2q6} 완료 보고 #Intruders in Black
{waypoint|1_2_3} #The Crossroads
➞ {enter|1_2_15} #The Fellshrine Ruins
    #sub {dir|135} 방향으로 이동
➞ {enter|1_2_5_1} #The Crypt Level 1
    #sub 길을 따라감
#ifdef LEAGUE_START
    {trial} 완료
#endif
➞ {enter|1_2_5_2} #The Crypt Level 2
{quest_text|제단} 찾기, {quest_text|황금의 손} 획득
{logout}
{quest|a2q5} 완료 보고 #Through Sacred Ground
➞ {enter|1_2_7} #The Riverways
    #sub {dir|225} 방향으로 이동
{waypoint_get} 얻기
    #sub 길을 따라감
➞ {enter|1_2_9} #The Western Forest
    #sub 길을 따라감
{waypoint_get} 얻기
    #sub 길을 따라감
➞ {enter|1_2_10} #The Weaver's Chambers
    #sub {waypoint}의 반대쪽 도로 옆을 탐색
➞ {arena|거미의 둥지}, {kill|직공} 처치하기, {quest_text|말리가로의 가시} 획득
    #sub {dir|270} 방향으로 이동. 막혀 있다면 {dir|45} 방향으로 이동.
    #sub 추천 레벨: 16
{logout}
{quest|a2q4} 완료 보고 #Sharp and Cruel
#ifdef BANDIT_KILL
    {waypoint|1_2_3} #The Crossroads
    ➞ {enter|1_2_4} #The Broken Bridge
        #sub {dir|45} 방향으로 이동
    {kill|흉터 전달자 크레이틴} 처치하기, {quest_text|크레이틴의 목걸이} 획득
        #sub 길을 따라감
    {logout}
    {waypoint|1_2_7} #The Riverways
    ➞ {enter|1_2_12} #The Wetlands
        #sub {waypoint} 근처의 기둥 두 개를 찾아보고 보이면 그 길을 따라감
    {kill|해골 분쇄자 오크} 찾아서 처치하기, {quest_text|오크의 목걸이} 획득
    {waypoint|1_2_9} #The Western Forest
        #sub 야영지 입구 반대편을 탐색
    {kill|알리라 다크텅} 처치하기, {quest_text|알리라의 목걸이} 획득
        #sub {dir|180} 방향으로 가면서 길가에 있는 횃불을 찾아봄
        #sub 횃불이 가리키는 쪽으로 길을 따라감
    {kill|지휘관 아테리} 처치하기
        #sub 길을 따라감 {dir|225}
    {quest_text|마석의 상징}을 획득하고, {quest_text|마석의 봉인}을 활성화
    {logout}
    {quest|a2q7} 완료 보고, {quest_text|정점} 획득 #Deal with the Bandits
    {waypoint|1_1_town} #Lioneye's Watch
    {quest|a1q9} 완료 보고 #The Way Forward
    {waypoint|1_2_12} #The Wetlands
    {quest_text|나무 뿌리} 중독 ➞ {enter|1_2_11} #The Vaal Ruins
#endif
#ifdef BANDIT_ALIRA
    {waypoint|1_2_3} #The Crossroads
    ➞ {enter|1_2_4} #The Broken Bridge
        #sub {dir|45} 방향으로 이동
    {kill|흉터 전달자 크레이틴} 처치하기, {quest_text|크레이틴의 목걸이} 획득
        #sub 길을 따라감
    {logout}
    {waypoint|1_2_7} #The Riverways
    ➞ {enter|1_2_12} #The Wetlands
        #sub {waypoint} 근처의 기둥 두 개를 찾아보고 보이면 그 길을 따라감
    {kill|해골 분쇄자 오크} 찾아서 처치하기, {quest_text|오크의 목걸이} 획득
    {waypoint|1_2_9} #The Western Forest
        #sub 야영지 입구 반대편을 탐색
    {kill|알리라 다크텅} 돕기, {quest_text|정점} 획득
        #sub {dir|180} 방향으로 가면서 길가에 있는 횃불을 찾아봄
        #sub 횃불이 가리키는 쪽으로 길을 따라감
    {kill|지휘관 아테리} 처치하기
        #sub 길을 따라감 {dir|225}
    {quest_text|마석의 상징}을 획득하고, {quest_text|마석의 봉인}을 활성화
    {logout}
    {waypoint|1_1_town} #Lioneye's Watch
    {quest|a1q9} 완료 보고 #The Way Forward
    {waypoint|1_2_12} #The Wetlands
    {quest_text|나무 뿌리} 중독 ➞ {enter|1_2_11} #The Vaal Ruins
#endif
#ifdef BANDIT_KRAITYN
    {waypoint|1_2_7} #The Riverways
    ➞ {enter|1_2_12} #The Wetlands
        #sub {waypoint} 근처의 기둥 두 개를 찾아보고 보이면 그 길을 따라감
    {kill|해골 분쇄자 오크} 찾아서 처치하기, {quest_text|오크의 목걸이} 획득
    {waypoint|1_2_9} #The Western Forest
        #sub 야영지 입구 반대편을 탐색
    {kill|알리라 다크텅} 처치하기, {quest_text|알리라의 목걸이} 획득
        #sub {dir|180} 방향으로 가면서 길가에 있는 횃불을 찾아봄
        #sub 횃불이 가리키는 쪽으로 길을 따라감
    {kill|지휘관 아테리} 처치하기
        #sub 길을 따라감 {dir|225}
    {quest_text|마석의 상징}을 획득하고, {quest_text|마석의 봉인}을 활성화
    {logout}
    {waypoint|1_1_town} #Lioneye's Watch
    {quest|a1q9} 완료 보고 #The Way Forward
    {waypoint|1_2_3} #The Crossroads
    ➞ {enter|1_2_4} #The Broken Bridge
        #sub {dir|45} 방향으로 이동
    {kill|흉터 전달자 크레이틴} 돕기, {quest_text|정점} 획득
        #sub 길을 따라감
    {logout}
    {waypoint|1_2_12} #The Wetlands
    {quest_text|나무 뿌리} 중독 ➞ {enter|1_2_11} #The Vaal Ruins
#endif
#ifdef BANDIT_OAK
    {waypoint|1_2_3} #The Crossroads
    ➞ {enter|1_2_4} #The Broken Bridge
        #sub {dir|45} 방향으로 이동
    {kill|흉터 전달자 크레이틴} 처치하기, {quest_text|크레이틴의 목걸이} 획득
        #sub 길을 따라감
    {logout}
    {waypoint|1_2_9} #The Western Forest
    {kill|알리라 다크텅} 처치하기, {quest_text|알리라의 목걸이} 획득
        #sub {dir|180} 방향으로 가면서 길가에 있는 횃불을 찾아봄
        #sub 횃불이 가리키는 쪽으로 길을 따라감
    {kill|지휘관 아테리} 처치하기
        #sub 길을 따라감 {dir|225}
    {quest_text|마석의 상징}을 획득하고, {quest_text|마석의 봉인}을 활성화
    {logout}
    {waypoint|1_1_town} #Lioneye's Watch
    {quest|a1q9} 완료 보고 #The Way Forward
    {waypoint|1_2_7} #The Riverways
    ➞ {enter|1_2_12} #The Wetlands
        #sub {waypoint} 근처의 기둥 두 개를 찾아보고 보이면 그 길을 따라감
    {kill|해골 분쇄자 오크} 찾아서 돕기, {quest_text|정점} 획득
    {quest_text|나무 뿌리} 중독 ➞ {enter|1_2_11} #The Vaal Ruins
        #sub 야영지 입구 반대편을 탐색
#endif
➞ {enter|1_2_8} #The Northern Forest
    #sub S자나 L자 모양의 길을 따라가면 출구로 이어짐
➞ {enter|1_2_14_2} #The Caverns
{crafting} 얻기
➞ {enter|1_2_14_3} #The Ancient Pyramid
➞ {arena|피라미드 최상층}, {kill|바알 신령} 처치하기
    #sub 1층의 출구는 세 모서리 중 한 곳에 있음
    #sub 나머지 층들의 출구는 입구의 대각선 반대편에 있음
    #sub 추천 레벨: 20-22
{crafting} 얻기
`;export{n as default};
