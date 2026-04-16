---
科目: 分析化學
章節: Supplementary
標題: UV-Vis Absorption Spectroscopy（Tissue 教科書補充）
日期: 2026-03-20
tags:
  - 分析化學
  - UV-Vis
  - 補充教材
---

# UV-Vis 補充（Tissue, Characterization of Materials）

> 本章大部分內容與 L3 重複，這裡只記錄**L3 沒涵蓋或更詳細**的重點。

## 光譜區分表（重要！考試可能直接考數字）

| Spectral Region | Wavelength (nm) | Energy (cm⁻¹) | Energy (eV) | Type of Excitation                |
| --------------- | --------------- | ------------- | ----------- | --------------------------------- |
| **Vacuum-UV**   | 10–180          | 10⁶–56000     | 120–6.9     | Electronic                        |
| **UV**          | 180–400         | 56000–25000   | 6.9–3.1     | Electronic                        |
| **Visible**     | 400–750         | 25000–13300   | 3.1–1.6     | Electronic                        |
| **NIR**         | 750–2500        | 13300–4000    | 1.6–0.50    | Electronic、vibrational overtones |
| **IR**          | 2500–25000      | 4000–400      | 0.50–0.050  | Vibrations、phonons               |

**記憶重點**：

- UV-Vis 總範圍 **~180–750 nm**，Vacuum-UV 再往下到 10 nm
- Vacuum-UV 因**O₂ 強烈吸收**空氣中的短 UV → 需要抽真空或 N₂-purge 才能做
- UV 區的「下限 ~180 nm」就是 O₂ 吸收開始處
- NIR 開始出現**振動泛音（vibrational overtones）**

---

## UV-Vis 可量測的材料性質（考點：「技術的內容」）

UV-Vis 不只做定量，還能測：

1. **Electronic structure** — 電子結構
2. **Dispersing elements** — 色散元件特性
3. **Optical constants** — 折射率 n、消光係數 k
4. **Scatterers** — 散射體尺寸、濃度
5. **Small particles** — plasmon resonance 對粒徑與形狀敏感
6. **Pigments、coatings、films** — 塗料、薄膜、顏料

**材料應用**：

- **半導體**：band gap 測量（Tauc plot，見 L3）
- **薄膜**：干涉條紋 → 測厚度與折射率
- **奈米粒子**：plasmon peak 位置 ↔ 粒徑與聚集狀態
- **光學玻璃**：透過率範圍評估
- **顏料/染料**：吸收峰位置與強度

### 金奈米棒（Au nanorod）Plasmon 定量案例（考點數字）

白話說：金奈米粒子表面的自由電子可以被光驅動做集體振盪（像水面的波），這叫 **surface plasmon resonance**。奈米棒有兩個方向可以振盪 — 沿短軸（橫向）和沿長軸（縱向）。長軸方向電子跑的距離更長、振盪更慢 → 共振頻率更低 → 吸收波長更長（紅移）。棒越長（AR 越大），紅移越多。

金奈米棒有**兩個 plasmon 吸收峰**：
- **Transverse mode**（橫向）：固定 ≈ 520 nm（不隨形狀變）
- **Longitudinal mode**（縱向）：隨 **aspect ratio (AR = 長/短)** 紅移

| Aspect Ratio | Longitudinal λ_max (nm) |
|---|---|
| 1.35 | ~540 |
| 3.06 | ~660 |
| 4.42 | ~850 |

**記憶口訣**：AR 越大 → 縱向峰越紅移（往 NIR 移）

**考點應用**：
- 從 UV-Vis 峰位置可反推 **粒子形狀（球 vs 棒）與長寬比**
- 遠比電鏡測量快、便宜、非破壞
- Au nanorod 的 longitudinal plasmon 進入 **NIR 生物窗口** → 用於 photothermal therapy、生物影像

### 溶劑極性效應（Solvent Polarity Effect，考點）

白話說：分子吸收光後從基態跳到激發態，而溶劑分子會像一群「保鏢」把它包圍住。極性溶劑特別會穩定極性較高的那個狀態。哪個狀態被穩定更多，能隙就會改變，吸收峰就會移動。

**π → π\* 躍遷**（強吸收）：
- 激發態的極性通常比基態大（電子跑到 π\* 之後電荷分離更大）
- 極性溶劑更會穩定激發態 → 激發態能量降得比基態多 → 能隙**縮小**
- 結果：**紅移（bathochromic shift）** — 吸收往長波長移
- 幅度通常 < 10 nm（小移動）

**n → π\* 躍遷**（弱吸收）：
- 基態有 lone pair 可以跟溶劑形成氫鍵（穩定效果強）；激發態的 lone pair 已經被用去躍遷了，跟溶劑的作用力變弱
- 極性溶劑更會穩定基態 → 基態能量降得比激發態多 → 能隙**變大**
- 結果：**藍移（hypsochromic shift）** — 吸收往短波長移
- 幅度可達幾十 nm（比 π→π\* 的效應大得多）

**記憶口訣**：
- π→π* 紅移少，n→π* 藍移多
- 用**水 / 甲醇等極性溶劑** → n→π* 峰往短波長移
- 用**己烷 / 環己烷等非極性溶劑** → 還原原本的峰位置

**考題應用**：看到「同一化合物在不同溶劑的 UV 譜」→ 判斷是哪種躍遷，並預測位移方向。

---

### 透射量測的 Attenuation 來源（重要觀念）

白話說：光穿過樣品後變弱了，你的第一反應是「被吸收了」。但其實光變弱可能有很多原因 — 被表面反射回去了、被粒子散射到旁邊了、薄膜干涉消掉了。如果你把這些「非吸收」的損失全當成吸收，Beer-Lambert Law 就會給你錯誤的濃度。

總衰減 = 多種機制：

1. **Absorption**（分子真正吃掉光子 — 這才是我們要量的）
2. **Reflection**（光在 cuvette 壁面被彈回來）
3. **Scattering**（混濁液中粒子把光散到各方向）
4. **Interference**（薄膜樣品的反射光互相干涉）

**關鍵**：Beer-Lambert Law 假設衰減全來自吸收。混濁液、粉末、不透明樣品不能直接套用。
- 解法：用 **integrating sphere**（一個球形內壁全反射的裝置，把散射光全收回來只留吸收）或 **Kubelka-Munk 轉換**

---

## Reflectance 測量（L3 沒細談）

白話說：透射法是「光穿過樣品看出來多少」，反射法是「光打上去彈回來多少」。對不透明的東西（粉末、金屬、塗層），光根本穿不過去，只能用反射來分析。

### Reflectance 的定義

```
ρ(λ) = P_ref / P₀
```

- 就是「反射光 / 入射光」的比值

**關鍵差異**：(1 − ρ) ≠ 吸收量。因為「沒被反射的光」不一定是被吸收了 — 可能被散射到其他方向了。所以反射譜不能直接用 Beer-Lambert 分析，需要 Kubelka-Munk 等轉換。

### 材料需要 reflectance standard

用**reference standard material** 校正儀器的反射絕對值，然後用：

```
r(λ) = S / R
```

- S：樣品訊號
- R：reference 訊號
  做 relative reflectance 比較。

### Kubelka-Munk Function（重要！）

白話說：粉末是不透明的，光打上去不會穿過去，只會反射回來。但反射回來的光強度不能直接用 Beer-Lambert Law 分析（那是給透射的）。Kubelka-Munk 公式就是「粉末版的 Beer-Lambert」— 它把反射率 R 轉換成一個跟吸收係數成正比的數值 F(R)，讓你可以像分析透射譜一樣分析反射譜。

```
F(R_∞) = (1 − R_∞)² / (2·R_∞) = k / s
```

- R_∞：粉末「夠厚」時的反射率（厚到再加粉末反射率不會變 — 通常幾 mm 就夠）
- k：吸收係數（我們想知道的）
- s：散射係數（粉末的固有性質）

**使用方式**：
- 量 diffuse reflectance R_∞ → 代入公式算 F(R_∞) → 畫 F(R_∞) vs 波長 ≈ 等效吸收譜
- 要求粉末半導體的 band gap？F(R_∞) 代替 α 丟進 Tauc plot 就行
- 前提：樣品要**夠厚且均勻**，不然 R_∞ 的假設不成立

---

## 儀器再補充

### Spectrophotometer 四種類型

1. **Single-beam**：最簡單，需手動換 blank 與 sample
2. **Dual-beam**：兩路光，參考與樣品同時量，自動扣背景
3. **Array Detector (PDA/CCD)**：concave grating + diode array，**同時量全譜**（毫秒級）
4. **Dual-detector Spectroradiometer**：兩個 detector 分別量 P 與 P₀

### Array Detector Spectrophotometer 優勢

- 掃瞄時間極短（ms 級）
- 無機械移動部件（不需轉動 monochromator）
- 適合**動力學測量（stopped-flow kinetics）**
- **Photodiode Array (PDA)** 或 **CCD** 為主

### 共同組件重點

- **光源**：D₂ lamp + tungsten-halogen 組合最常見；high-end 用 Xe 閃燈
- **Dispersion**：現代大多是 **holographic grating**（全像光柵），線性色散、低 stray light
- **Detector**：PMT（高靈敏度）、Si photodiode（寬動態）、InGaAs/PbS（NIR）

### 儀器測量誤差範圍

- 實驗室級 UV-Vis 精度：吸光度準確度通常 **± 0.5%**
- 雙光束儀器可達 **0.1–0.2 A** 的 reproducibility
- 典型動態範圍：**1–2 A**（超過 2 A 就不可靠，因為 stray light、雜訊）

---

## Quantitative Analysis 方法（L3 補充）

### 校正曲線方法

白話說：「先用已知的去建立標準，再用標準去推算未知的」。這是所有定量分析的核心邏輯。

操作步驟：
1. 配一系列**已知濃度**的標準液 → 量每個的 A（在 λ_max 波長）
2. 畫 A vs c → 應該得到一條過原點的直線（斜率 = εb）
3. 從斜率反求 ε（因為 b = cuvette 光程 = 1 cm，已知）
4. 拿**未知樣品**量 A → 代入直線 → 讀出 c

**注意**：校正曲線只在線性範圍內有效。如果高濃度點開始偏離直線，那些點就不能用。

### Molar absorptivity vs Extinction coefficient

白話說：ε 告訴你「這個分子在這個波長吃光的能力有多強」。ε 越大 → 越少的分子就能產生明顯的吸收 → 更容易偵測。ε 的數量級直接反映了躍遷是 allowed 還是 forbidden：

- **ε = 10³–10⁵**：**強吸收**（π→π\*、charge transfer）— allowed transition，軌域重疊好
- **ε = 10⁰–10²**：**弱吸收**（d-d 躍遷）— forbidden transition（被對稱性或自旋選擇定則禁止，只因微擾才勉強發生）
- **ε < 1**：幾乎看不到 — 嚴格 forbidden

**實務意義**：如果你的 analyte ε 很大（如有機染料 ~10⁵），很稀的溶液就能量到；如果 ε 很小（如 d-d 躍遷 ~10¹），需要濃度高或光程長

---

## Sample Handling 細節

### 標準 cuvette 樣品量

- 10 mm 標準石英 cuvette：~2–4 mL
- Micro cuvette：10–20 μL
- Capillary flow cell：< 10 μL
- ATR 附件：液滴或粉末 mg 量級

### 樣品準備的實務問題

白話說：UV-Vis 量測看起來簡單（倒溶液進 cuvette 就量），但魔鬼在細節。以下每個問題都會讓你的數據變垃圾：

1. **氣泡**：氣泡會散射 UV 光 → 假吸收 → A 偏高。解法：輕拍 cuvette 趕走氣泡
2. **散射**：混濁樣品散射光出去 → 偵測器以為光被吸收了 → A 虛高。解法：用 integrating sphere 或先過濾
3. **濃度太高**：A > 2 代表 99% 的光被擋住，偵測器收到的光太弱 → stray light 主導 → 結果不可靠。解法：稀釋
4. **Blank 不對**：blank 的溶劑跟 sample 不同 → 扣背景扣不乾淨 → 基線歪掉。解法：用完全一樣的溶劑做 blank

---

## UV-Vis 的物理極限與常見 Problems

### Instrumental Limitations

- Stray light → 高 A 時偏離 Beer's Law（L3 有圖）
- Dark noise 和 shot noise → 稀樣品下限
- **動態範圍約 1–2 A**

### Chemical Problems

- **Photodegradation**：樣品被 UV 光破壞（xenon flash 短曝光可減輕）
- **Absorber concentration 分布不均**：非均勻樣品需特殊 correction（exponential decay）

### Measurement Requirements

- 樣品在溶液中的**形式固定**（不隨時間變化）
- 所有分析物與**標準品在同樣條件下**測（溫度、溶劑、pH）
- Reflectance 需要標準 reference material 校正

---
