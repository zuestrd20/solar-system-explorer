# 宇宙尺度教學：資料來源與定義

核對日期：2026-10-05。檔案 cosmic.json 與 cosmic_scales.json 內容相同；前者方便網站直接整合，後者保留指定交付名稱。7個stages用於介面，9個scales包含日球層頂、歐特雲獨立條目。中文為AI協助整理的教學說明；不是NASA審核內容。

## 原始來源

1. 地球平均半徑：[JPL Planetary Physical Parameters](https://ssd.jpl.nasa.gov/planets/phys_par.html)。6371.0084 km為同體積球體半徑，乘二得到平均直徑12742.0168 km。顯示約12742 km，不與赤道直徑混用。
2. 單位：[JPL Astrodynamic Parameters](https://ssd.jpl.nasa.gov/astro_par.html)。1 AU = 149597870700 m；真空光速299792458 m/s；Julian年365.25日；一日86400秒。光年公里值由這些常數相乘：9460730472580.8 km。
3. 光年概念：[NASA What is a light-year?](https://science.nasa.gov/exoplanets/what-is-a-light-year/)。光年是距離單位；可向學生說「光一年走的距離，約9.46兆公里」。不採其文中過度概括的旅行能力描述。
4. 海王星：[JPL Approximate Positions, Table 1](https://ssd.jpl.nasa.gov/planets/approx_pos.html)。J2000擬合軌道半長軸30.06992276 AU。展示約30 AU；這是日心軌道尺度，不是整個太陽系的直徑。以固定代表距離除真空光速得約4小時10分，為近似光行時，不是當下精確星曆。
5. 日球層：[NASA The Voyage to Interstellar Space](https://www.nasa.gov/solar-system/the-voyage-to-interstellar-space/)記述約120 AU的越界尺度；[Basics of Space Flight](https://science.nasa.gov/learn/basics-of-space-flight/chapter1-1/)說明日球層形狀與大小會隨太陽風及星際介質而變。此處120 AU只是旅行者方向的代表日心距離，不能畫成已確定全球等距的硬球殼。
6. 歐特雲：[NASA Oort Cloud Facts](https://science.nasa.gov/solar-system/oort-cloud/facts/)。採其Scale and Distance段落：內緣估計2000–5000 AU，外緣10000–100000 AU。頁首及不同NASA歷史圖使用其他更簡化界線，故本版完整保留區間、說明推測性，不宣稱一個精確外緣。這些都是距太陽的範圍，不是雲的直徑。
7. 最近其他恆星：[NASA Sun Facts](https://science.nasa.gov/sun/facts/)給比鄰星4.24光年；南門二A/B約4.37光年。此版只用比鄰星。太陽本身仍是距地球最近的恆星，因此題目／標籤需寫「太陽之外」或「太陽最近的恆星鄰居」。
8. 銀河系：[NASA Imagine the Universe](https://imagine.gsfc.nasa.gov/science/featured_science/milkyway/index.html)提供約10萬光年直徑與太陽系距中心約2.6萬光年。現行[NASA Galaxies](https://science.nasa.gov/universe/galaxies/)說恆星盤超過10萬光年，與此教學量級相容。此處指恆星盤，不代表包括暗物質暈的全部外圍。沒有採旧頁銀河年齡或公轉年數。
9. 本星系群：[NASA Cosmic Distance Scale – Local Group](https://imagine.gsfc.nasa.gov/features/cosmic/local_group_info.html)提供近1000萬光年群體直徑。只採尺度及銀河／仙女座／三角座成員，不採該舊頁星系總數、仙女座距離或未更新的碰撞推測。現行[NASA Galaxies](https://science.nasa.gov/universe/galaxies/)也支持本星系群的地位。
10. 可觀測宇宙：[NASA How Big is Space?（2025-05-21）](https://www.nasa.gov/science-research/astrophysics/how-big-is-space-we-asked-a-nasa-expert-episode-61/)提供約920億光年直徑，並解釋膨脹使遙遠星系的今日距離超過光旅行的時間所直接對應的距離。半徑460億光年是直徑除二的推算；不另假裝精確到465億。
11. 宇宙年齡：[NASA What is the Universe?](https://science.nasa.gov/exoplanets/what-is-the-universe/)提供約138億年。年齡不是距離，也不是可觀測半徑。
12. 中心觀念：[NASA Webb Big Bang Q&A](https://science.nasa.gov/mission/webb/big-bang-q-and-a/)明確反對有一個爆炸中心的比喻。此版只採「觀测者在自己的可觀測範圍中心，不代表地球是宇宙真正中心」，不將該頁對無限宇宙的措辭當成已確定結論。2025 NASA專家頁明說尚不知道整體宇宙有限或無限。

## 統一線性尺規：若地球平均直徑是1公分

模型公尺 = 真實公里 ÷ 地球平均直徑公里 × 0.01。

- 地球到太陽，以1 AU計：約117公尺。
- 太陽到海王星軌道：約3.53公里。
- 太陽到比鄰星：約31481公里。

這些起點不同，必須保留標籤，不能合併成通用「離地球」。三者都按同一線性比例計算。這個尺規才是等比例比較；主視覺可用每站不同視野，但須明示天體及星點為了可見而放大。

## 視覺與教學限制

- 不同stage的extentType有直徑、半径、日心半長軸或兩天體間距；這些不可全包裝成「距離地球」。
- 程序生成星點、銀河旋臂、銀河群位置都是教學示意，不是從外部拍攝的宇宙實景或精確座標地圖。
- 日球層、外行星區、歐特雲不是可互換的「太陽系邊界」。跨出日球層不等於已越過歐特雲。
- 可觀測宇宙不是宇宙的硬邊界，亦不是太陽／地球真正位於宇宙中央的證據。
- 460億光年是今日尺度半徑。不可自動以distance/c輸出460億年光行時間。lightTime欄位特意使用說明文字而非數字。
- range=null表示來源只給教學近似數字；不是精確、也不是誤差為零。不要臆造置信區間。
- 問答4題分別測光年單位、30 AU意義、距離與年齡、觀測中心，皆有來源與解析。
- 未下載新照片、貼圖或宇宙地圖；維持先前程序生成外觀與權利注意事項。
