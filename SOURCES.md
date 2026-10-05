# 太陽系教學資料：來源與使用說明

核對日期：2026-10-05。這份繁體中文資料由 AI 協助整理；提供原始 NASA/JPL 頁面以便核對，不代表 NASA 審核、授權背書或對本網站內容負責。

## 數值來源與欄位

- [JPL Planetary Physical Parameters](https://ssd.jpl.nasa.gov/planets/phys_par.html)：八顆行星的 meanRadiusKm、diameterKm、orbitYears、orbitDays、rotationDays。平均半徑指同體積球體半徑；直徑是其兩倍，並非赤道直徑。orbital period 與 rotation period 都是相對恆星的週期。行星公轉年數乘 365.25 換算為教學用近似日數；顯示建議加「約」。自轉資料保留數值的絕對值，金星、天王星的負號另寫成逆行。
- [JPL Approximate Positions of the Planets](https://ssd.jpl.nasa.gov/planets/approx_pos.html)：distanceAU、rawSemiMajorAxisAU 使用 Table 1 的 J2000 半長軸。Table 1 是1800–2050年範圍的擬合元素；此資料集只取半長軸近似值，沒有實作其星曆算法。地球值實際是地月質心，三位小數下為1.000 AU。
- 太陽直徑為 [Sun Facts](https://science.nasa.gov/sun/facts/) 提供的約140萬公里；這是教育約值。太陽不是固體，赤道約25日、極區約36日自轉，故不塞入單一rotationDays。
- color 為介面辨識色，tagline 為原創教學短句，沒有宣稱它們是觀測色彩或官方文字。

## 文字資料來源

每個天體三個 facts，均以自己的繁中文字句改寫；不是逐句翻譯原頁。每一facts索引的來源也逐項放在JSON的sources.facts。

- [水星](https://science.nasa.gov/mercury/facts/)：最小、最靠近太陽、撞擊坑、自轉與太陽日的分別。
- [金星](https://science.nasa.gov/venus/venus-facts/)：溫室效應、最熱行星、與地球相近的體型、逆行。
- [地球](https://science.nasa.gov/earth/facts/)：最大岩石行星、液態海洋、季節與傾斜自轉軸。
- [火星](https://science.nasa.gov/mars/facts/)：含鐵礦物氧化、稀薄大氣、古代水的證據。沒有將水跡說成已發現生命。
- [木星](https://science.nasa.gov/jupiter/jupiter-facts/)：最大行星、大紅斑、自轉最快。
- [土星](https://science.nasa.gov/saturn/facts/)：第二大行星、環、平均密度與主要成分。
- [天王星](https://science.nasa.gov/uranus/facts/)：近側躺自轉、甲烷與藍綠色、冰巨行星內部為流體而非整顆冰球。
- [海王星](https://science.nasa.gov/neptune/neptune-facts/)：最遠行星、強風、數學預測後確認。
- [太陽](https://science.nasa.gov/sun/facts/)：恆星、氫與氦、核融合、光球而非固體表面。

## 防止常見誤解

1. 顯示「自轉週期（相對恆星）」，避免統一稱為「一天」。水星約59日自轉，但一個完整太陽日約176日。金星約243日是自轉週期，並非日出到下次日出的間隔。
2. 金星NASA科普頁目前有將117日敘述為 sunrise-to-sunset 的可疑說法，這份資料不採用這句。若要介紹金星太陽日，應另取可靠表格或明確說明計算定義；本版不需要它。
3. 所有公轉動畫是教學近似，起始角度是示意，不是今天的真實位置。不應出現「即時位置」或「精確星曆」。
4. 大小、距離不可都暗示使用同一比例。正常導覽應標示「天體大小與軌道距離採不同縮放」；比較模式另標示比較的是哪一種比例。
5. 「距離太陽」較精確標法是「軌道半長軸」，或「日距（以軌道半長軸近似）」。它不是當下日距，也不是沿時間平均所得的精確均值。
6. 太陽是恆星，八大行星的最大、最小問答不能把太陽算入。
7. 不採用衛星數量，避免持續更新造成過期資訊。不用單一溫度橫比岩石地表、氣體雲頂與太陽光球。

## 測驗

JSON含8題，answerIndex以0起算，每題都有explanation與sourceUrl。題型為客觀單選；不含仍有爭論或隨觀測頻繁改變的數量。可選擇整合，不必另建複雜測驗系統。

## 圖像及材質

本次沒有下載或指定任何第三方照片或貼圖。建議採程序生成3D示意，並顯示「示意外觀，非探測器實拍」。這能避免將誇張顏色與雲帶誤稱為真實攝影。

若後續採用NASA圖片，必須逐張檢查credit與權利資訊，不應假設NASA網站上的所有檔案都可自由轉用。依[NASA媒體使用說明](https://www.nasa.gov/nasa-brand-center/images-and-media/)，許多NASA媒體可用於教育與資訊用途，但第三方著作另有條件；NASA標誌亦另受限制，勿拿來作本網站標誌或表示官方背書。木星科普頁首圖就有第三方後製credit（Kevin M. Gill，CC-BY），不可省略credit再假稱純NASA原圖。
