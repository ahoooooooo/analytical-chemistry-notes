---
科目: 分析化學
章節: L3
標題: UV-Vis 吸收光譜
日期: 2026-03-20
tags:
  - 分析化學
  - UV-Vis
  - 電子躍遷
  - 儀器分析
---

# L3 UV-Vis 吸收光譜

## 核心概念

### 什麼是 UV-Vis Spectroscopy

**UV-Vis spectroscopy**：測量化學物質在 **紫外光（200–400 nm）與可見光（400–800 nm）** 範圍的吸收行為。

- 與 IR 相比：IR 激發**振動**，UV-Vis 激發**電子（electronic transitions）**。
- 適用：官能基辨識、反應動力學、結構資訊（共軛 conjugation、金屬離子）、**濃度定量**

### Electronic Transitions（電子躍遷）

白話說：UV-Vis 光的能量比 IR 高很多，足以把電子從一個軌域「踢」到更高能量的軌域。不同類型的電子需要不同的能量來踢，所以吸收在不同波長 → 這就是我們辨別分子的依據。

主要三種躍遷：

1. **π → π\***：雙鍵或共軛系統裡的 π 電子被激發到反鍵軌域 π\*。這是**最強的吸收**（ε 通常 10³–10⁵），因為 π 和 π\* 軌域空間重疊好。共軛越長 → 吸收越紅移（波長越長），這也是為什麼胡蘿蔔素有顏色（大量共軛雙鍵）
2. **n → π\***：有 lone pair（孤對電子）的原子（N、O、S）把一個不成鍵的電子丟到 π\* 軌域。這是**弱吸收**（ε 通常 10¹–10²），因為 n 軌域和 π\* 軌域空間重疊差
3. **d–d transitions**：過渡金屬的 d 電子在分裂的 d 軌域之間跳。通常也是**弱吸收**（symmetry-forbidden），但因為吸收在可見光區所以錯合物常有**鮮豔顏色**

其他還會看到：

- **Charge transfers（電荷轉移）**：電子從配體跑到金屬或反過來，通常是**很強的吸收**
- **Plasmon resonance**（奈米金屬粒子）：金屬表面的自由電子集體振盪
- **Band gap transitions**（半導體）：電子從價帶跳到導帶

### UV-Vis vs IR vs NIR 所能探測的

| 區段        | 探測的是                                    |
| ----------- | ------------------------------------------- |
| NIR         | 振動泛音、overtone                          |
| **Visible** | d–d、n→π\*、π→π\*、charge transfer、plasmon |
| **UV**      | π→π\*、帶寬電子躍遷、band gap               |

---

## Selection Rule（重要考點）

### Spin Selection Rule

**ΔS = 0**（自旋不變才允許躍遷）

白話說：電子在跳軌域的時候，自旋方向不能翻轉。如果一個躍遷要求電子翻轉自旋（比如從「全部朝上」的狀態翻一個朝下），那這個躍遷就被「禁止」了。

- Allowed：singlet → singlet、triplet → triplet（自旋總數不變）
- Forbidden：singlet → triplet、triplet → singlet（自旋總數改變）

**推論**：

- 「Forbidden」不是完全不會發生，只是機率非常低 → 吸收訊號**微弱**（ε 很小）
- d–d 躍遷常受此規則影響 → 這也是為什麼大多數過渡金屬錯合物的顏色不會像螢光筆那麼亮，而是淡淡的
- **經典考題 — High spin d⁵**（如 [FeF₆]³⁻）：5 個 d 電子各佔一個軌域，自旋全部朝同一方向。要做任何 d-d 躍遷，一個電子必須跳到已有同向電子的軌域 → 但 Pauli 不允許 → 必須翻轉自旋 → **spin-forbidden** → 所以 high-spin d⁵ 幾乎無色或顏色極淡

---

## 電子、振動、旋轉能階疊加

UV-Vis 真正看到的「寬峰」實際上是：

- **電子能階（electronic）** 間距最大
- **振動能階（vibrational）** 疊在電子能階上（距離較小）
- **旋轉能階（rotational）** 疊在振動能階上（最細）

所以 UV-Vis 吸收峰 = 許多電子-振動-旋轉組合躍遷的**包絡線**。這也是為什麼 UV-Vis 譜峰一般是寬的 broad band，不像原子光譜是 sharp line。

**例**：

- π→π\* 躍遷 ~187 nm
- n→π\* 躍遷 ~285 nm

---

## Spin Crossover（溫度誘導自旋態切換）Case Study

某些**過渡金屬錯合物**在不同溫度下會切換 spin 態，UV-Vis-NIR 能直接追蹤。

**典型範例**（投影片第 7 頁）：
- **低溫 188 K**：low-spin 狀態 **S = 0**（d 電子成對填）
- **高溫 373 K**：high-spin 狀態 **S = 2**（d 電子平行）
- UV-Vis-NIR 光譜從 350–850 nm 追蹤：隨溫度升高，d-d 吸收峰位置與強度系統性改變

**物理解釋**：
- Low spin 時 t₂g 滿、eg 空，能階分裂強 → 高能量吸收
- High spin 時 t₂g、eg 都有電子 → 能量分裂弱 → 低能量吸收紅移
- 符合 **spin selection rule ΔS = 0** 的考量：自旋態改變會大幅改變 d-d 躍遷行為

**考點技巧**：看到「溫度變化的 UV-Vis 譜」立刻想 spin crossover / phase transition / conformational change。

---

## UV-Vis 儀器架構（光譜儀通式）

```
Light source → Monochromator → Sample → Detector
```

### Beer-Lambert Law（複習）

白話說：光穿過樣品，一部分被吃掉（absorbed）。Beer-Lambert Law 說的是：**溶液越濃，或光走的路越長，被吃掉的比例越多 — 而且是等比例的關係**。這就是 UV-Vis 能做定量分析的數學根據。

A = log(I₀/I) = ε·c·l

- **I₀**：打進去的光強度
- **I**：出來的光強度（被樣品吸收後變弱了）
- **A**：吸光度 — 就是「被吃掉了多少」的對數表示，A=1 代表只有 10% 的光穿過去
- **ε**：molar absorptivity — 每個分子「吃光」的能力有多強，是分子的固有性質（不同波長不同）
- **c**：濃度（mol/L）
- **l**：光走過的路徑長度（通常 1 cm 的 cuvette）

**限制**：此定律只在**稀溶液**（< 0.01 M）成立 — 濃度太高分子之間會互相影響，A 跟 c 就不再線性。另外，非均勻樣品（混濁液、有散射）也會偏離。

---

## (1) Light Sources（光源）

白話說：UV-Vis 儀器需要「燈泡」來產生 UV 和可見光。問題是沒有一種燈能完美涵蓋整個 UV-Vis 範圍，所以歷史上要用兩種燈拼起來。現代 Xenon flash lamp 才終於解決了這個問題。

歷史上有三種主要光源：

### Deuterium (D₂) arc lamp

- **UV 區的連續光源**（185–400 nm）
- 利用氘氣 arc discharge
- 優點：在 UV 區強度穩定、良好連續譜
- 缺點：現代 D2 燈**noise 高**，常是整個儀器的性能瓶頸
- 壽命短：**half-life ~1000 hr**，需頻繁更換

### Tungsten-halogen lamp

- 利用鎢絲電熱發光
- 涵蓋**可見光（Vis）與 NIR**，約 **350–3000 nm**
- 優點：noise 低、drift 低、壽命長（~10000 hr）

### Xenon flash lamp（現代主流）

- 閃燈式，短時間高強度發光
- 範圍 **185–2500 nm**，**單一光源即可涵蓋 UV + Vis + NIR**，不需要切換光源
- 只在量測瞬間照樣品 → 適合**光漂白敏感樣品**（如某些生物分子）
- 優點：不需暖機、壽命長
- 應用：Agilent Cary 60、Cary 3500

### 光源切換策略

用 D2 + tungsten 雙光源的儀器：

- 用 source selector 切換
- 或把兩光源混合成單一寬頻光源

---

## (2) Sample Holder（Cuvette 樣品槽）

### 基本要求

- 液體樣品放入**固定光程長度的 cuvette（比色管）**
- 標準 cuvette **光程 10 mm**，必須**對光譜範圍透明**（自己不能吸收！）

### Cuvette 材質比較（考點！）

| 材質                         | 適用波長 (nm)                   |
| ---------------------------- | ------------------------------- |
| **Quartz**                   | **170–2700**（UV–Vis–NIR 全通） |
| **Infrasil quartz (NIR)**    | 220–3800                        |
| **Optical glass**            | 334–2500（不能測 UV！）         |
| **Polystyrene (disposable)** | 340–800（便宜拋棄式）           |

**記法**：

- **UV 測量一定要用 quartz**（glass 與 plastic 在 UV 會自己吸收 → 結果錯！）
- 拋棄式塑膠便宜但只能測可見光

### Solvent 透明度

- UV 分析**水是首選**（透過 < 190 nm）
- 若樣品不溶於水，要挑對的溶劑（甲醇、乙醇透過至 ~210 nm；非鹵化碳氫）
- 溶劑本身若有吸收 → 擋到樣品訊號 → 選不對會出錯

---

## (3) 光學架構：Double beam vs Single beam

白話說：量吸光度需要比較「有樣品」和「沒樣品」的光強度。問題是光源的亮度會隨時間慢慢飄（drift）。Single beam 先量空白再量樣品，中間光源如果飄了結果就有誤差。Double beam 同時量兩路光，飄移被自動抵消。

### Single beam

```
Source → Monochromator → Sample → Detector
```

- 先量 reference（blank）→ 換樣品 → 量 sample
- 優點：簡單便宜
- 缺點：兩次量測之間光源飄移 → 影響準確度

### Double beam

```
          ┌→ Reference → Detector 1
Source → 分束
          └→ Sample → Detector 2
```

- 光分成兩路，**同時**通過參考與樣品
- 光源飄移同時影響兩路 → 做比值時**自動抵消**
- 結果更穩定，但儀器更貴

**關鍵元件：Rotating Mirror / Chopper**

實際上很多 double-beam 儀器只用**一個偵測器**，靠旋轉鏡快速切換兩路光：
- 旋轉鏡以幾十 Hz 的頻率輪流把光導到 reference 和 sample 光路
- 偵測器收到交替訊號（像跑馬燈），用鎖相放大器分離
- 好處：只用一個偵測器就不用擔心兩個偵測器靈敏度不同的問題
- 本質上是「**快速交替**」而非真正同時，但因為切換比光源飄移快得多，所以等效於同時量測

---

## (4) Dispersion Device（分光元件）

兩大選擇：

### Prism（稜鏡）

白話說：彩虹的原理 — 不同顏色的光在玻璃裡折射角度不同，所以白光被展開成光譜。

- 短波長折射角大（UV/藍偏折多），長波長折射角小（紅偏折少）
- 缺點：**色散非線性** — UV 端波長分很開，紅端擠在一起 → 解析度不均勻
- 優點：stray light 少（不會像光柵產生高階繞射）
- 現在基本被 grating 取代，但高精密應用偶爾還用

### Grating（光柵）

白話說：光柵是一片刻了很多條平行溝槽的反射鏡。不同波長的光從不同角度繞射出來，就像把光譜「攤開」。

- **色散線性** — 所有波長間距均勻 → 整張光譜的解析度一致
- 現代 UV-Vis 幾乎都用 grating（尤其 holographic grating，stray light 更低）

### Dispersive power

稜鏡材質的**折射率 n 隨波長的變化量**（表示能把相近波長分多開）：

| 材質         | n @660 nm | n @410 nm | 差 Δn          |
| ------------ | --------- | --------- | -------------- |
| Water        | 1.331     | 1.342     | 0.011          |
| **Diamond**  | **2.410** | **2.458** | **0.048** 最大 |
| Glass, crown | 1.512     | 1.530     | 0.018          |
| Glass, flint | 1.662     | 1.698     | 0.036          |
| Quartz fused | 1.455     | 1.468     | 0.013          |

Diamond 色散力最強 → 波長分離能力最好。

---

## (5) Detectors（偵測器）

### 波長覆蓋（重要參考圖）

| 偵測器                         | 適用波長     | 特性                                                  |
| ------------------------------ | ------------ | ----------------------------------------------------- |
| **Silicon photodiode**         | 170–1100 nm  | UV/Vis 常用，**寬動態範圍**，便宜，noise 低           |
| **Photomultiplier tube (PMT)** | 200–900 nm   | UV/Vis 全覆蓋，**靈敏度極高**、雜訊低、響應寬         |
| **PbS photoresistor**          | 1000–3500 nm | NIR 最常用，光電導池                                  |
| **InGaAs photodiode**          | 800–2500 nm  | NIR，線性響應、高靈敏度；窄頻 800–1700、寬頻 800–2500 |

所有 UV-Vis detectors 都靠**光電效應（photoelectric effect）**：光子打在材料上 → 放出電子。

### PMT（Photomultiplier Tube）

白話說：PMT 是一台「電子雪崩放大器」。一個光子打出一個電子，這個電子再去撞出更多電子，一級一級像骨牌一樣放大，最終一個光子的信號被放大了一百萬倍。所以 PMT 能看到**極微弱的光**。

**結構**：photocathode（光電陰極）→ 多級 dynodes → anode

**原理**：

1. 光子打 photocathode → 放出 1 個電子
2. 電子被電場加速，撞到 dynode → **二次發射** 放出 3–5 個電子
3. 這些電子再撞下一個 dynode → 再放大 3–5 倍
4. 經過 ~10 級 dynodes → 總增益 10⁶~10⁷ 倍
5. 最後由 anode 收集 → 外部電路輸出

**為什麼重要**：PMT 是 UV-Vis 儀器中**靈敏度最高**的偵測器。測很稀的溶液時（吸光度很小 → 穿透光跟入射光幾乎一樣強），需要 PMT 來分辨那一點點差異

### Silicon Photodiode

白話說：跟太陽能電池原理一樣 — 光打到半導體，電子被踢到導帶產生電流。電流大小跟光強度成正比。

- 優點：動態範圍寬（從很暗到很亮都能線性響應）、反應快、noise 低、便宜、耐用
- 缺點：靈敏度**比 PMT 差**（沒有放大機制，一個光子只產生一個電子）
- **選擇邏輯**：樣品不太稀、不需要極致靈敏度 → 用 Si photodiode 就夠了，而且更穩定便宜

### Diode Array Detector（重要）

白話說：把幾百個 Si photodiode 排成一列，用 grating 把光譜「攤開」投射到上面 — 每個 diode 接收一個波長。這樣**一次拍照就拿到整張光譜**，不用慢慢掃。概念上跟 FTIR「同時量所有頻率」類似，是速度的革命。

- 優點：**毫秒級取全譜**（適合反應動力學）、無機械運動部件
- 缺點：單點靈敏度低於 PMT（每個小 diode 的面積小、沒有放大）

### CCD Detector

- 類似 diode array，但用 **photocapacitor** 而非 photodiode
- 每個 photocapacitor 包含數百萬像素
- 極靈敏，可偵測非常弱的光信號
- 可做 1D 或 2D array

### PbS & InGaAs（NIR 偵測器）

- **PbS**：光電導池，NIR 最常用（1000–3500 nm）
- **InGaAs**：線性響應、靈敏度好，常見 800–1700 nm (窄頻) 或 800–2500 nm (寬頻)
- 在寬波長範圍儀器中，PbS 常**搭配 PMT** 做 UV/Vis 覆蓋
- 低 NIR 需要高靈敏度時，PbS 可搭配窄頻 InGaAs

---

## Stray Light 與 Photometric Linearity

白話說：**Stray light（雜散光）** 是指不該到達偵測器的光 — 比如光柵散射出的雜光、儀器內壁反射的光。這些光沒有被樣品吸收，但偵測器分不清它是穿透光還是雜光，所以會「灌水」讓你以為樣品吸收沒那麼多。

**Stray light 越多 → 高吸光度時偏離 Beer's Law 越嚴重**：
- 0% stray light → 理想線性（不存在的理想情況）
- 0.1% → 輕微偏離（A > 2 時開始看到）
- 1% → 明顯偏離（A > 1.5 就不可靠）
- 10% → 嚴重偏離（完全不能定量）

**為什麼高 A 值時最嚴重**：A=3 代表只有 0.1% 的光穿過去。如果 stray light 就有 0.1%，偵測器收到的光有一半是假的 → 結果完全不對。所以實際量測時 **A 超過 2 就要小心**，超過 3 基本不可信。

---

## UV-Vis 的優缺點（考點）

### Advantages

1. **Wide application range**：有機、無機、過渡金屬錯合物、蛋白質、核酸都能測
2. **Quantitative analysis**：Beer-Lambert Law 成立 → **吸光度 ∝ 濃度**，是定量的理想工具
3. **Speed and sensitivity**：現代儀器快、靈敏（但不一定比 FTIR 靈敏）
4. **Non-destructive**：不破壞樣品（大多數光譜技術都是 non-destructive）
5. **Compatible with aqueous solutions**：水在 UV-Vis 區幾乎不吸收 → 可直接測水溶液（不像 IR 水會強吸收）
6. **Solid samples compatible**：也能用 diffuse reflectance accessory 測固體

### Disadvantages

1. **Limited structural information**：無法提供詳細結構資訊；官能基辨識比 FTIR / Raman 差
2. **Overlapping absorption peaks**：複雜樣品多組分時，吸收峰重疊嚴重 → 不適合定性；3–4 組分以內還能處理，複雜混合物最好用 HPLC 或 FTIR
3. **Solvent interference**：溶劑可能影響譜形，通常用 baseline correction 補償
4. **Not all compounds absorb**：不是每個化合物都有 UV-Vis 發色團，要額外做顏色反應（發色試劑）
5. **Limited UV transparency of solvents**：UV 區溶劑選擇受限

---

## Case Studies（應用範例，考點對應「技術內容」）

### (1) Quantitative Analysis

- 量 analyte 不同濃度下的吸收光譜
- 取某波長下的吸收度對濃度作圖
- Beer-Lambert Law → 線性 → 取 R² → 求斜率（= εl）→ 建校正曲線 → 未知樣品反求濃度

### (2) Reaction Kinetics（反應動力學）

- 過渡金屬活性中心（如 Fe²⁺ 在沸石中）的電子結構可由 UV-Vis-NIR 追蹤
- 分 peak 給不同躍遷：
  - Unresolved d–d transitions
  - d*xy → d*{x²−y²} transition
  - **Charge transfer transition**（CT，常在 UV 區）
- Gauss curve fitting 把複雜譜分解成單獨成分

### (3) Structural Information

- **Nanoparticle plasmonics（奈米粒子電漿子）**：金奈米粒子的吸收峰位置會隨**粒徑**移動
- 粒徑越大 → 吸收峰紅移
- UV-Vis 可快速推估金奈米粒子大小與聚集狀態

### (4) Reversible Redox Behavior in MOFs

- **UU-100(Co)** 在 DMF 中，施加 −1.50 V → Co(II) 被還原成 Co(I) → 520 nm、670 nm 出現新峰
- 回氧化回 −0.05 V → 670 nm 被漂白、520 nm 小紅移 → 代表生成 Co⁰
- 用 in situ UV-Vis 追蹤可逆氧化還原

### (5) Band Gap Energies（半導體）

白話說：半導體有一個**能量門檻（band gap Eg）**— 光子能量低於 Eg 就穿透，高於 Eg 就被吸收。所以從 UV-Vis 吸收譜可以反推 Eg 的大小。Tauc plot 就是這個反推的數學工具。

**Tauc plot** 方法：

公式（amorphous 半導體，Tauc 1966）：
```
(α·hν)^(1/2) = B(hν − Eg)
```
- **α**：吸收係數（從 UV-Vis 譜的 absorbance 換算）
- **hν**：入射光子的能量（= 1240/λ(nm) eV）
- **Eg**：就是我們要求的 band gap
- **B**：材料常數

**直覺理解**：光子能量 < Eg 時，(hν − Eg) 是負的 → 沒有吸收。光子能量剛好超過 Eg → 吸收開始出現並隨能量增加。

**晶體半導體**：根據躍遷類型，指數不同：
- γ = 1/2（direct allowed）→ 畫 (αhν)² vs hν
- γ = 2（indirect allowed）→ 畫 (αhν)^(1/2) vs hν
- γ = 2/3（direct forbidden）→ 畫 (αhν)^(3/2) vs hν
- γ = 3（indirect forbidden）→ 畫 (αhν)^(1/3) vs hν

**怎麼操作**：畫 (αhν)^(1/γ) vs hν → 找到吸收邊上升最陡的線性段 → **外插到 x 軸** → 那個截距就是 Eg。TiO₂ 做出來大約 Eg ≈ 3.2 eV

**範例**：TiO₂ / MO + TiO₂ 複合物的 Tauc plot 分析：

- 純 TiO₂ Eg ~3.22 eV
- 加 MO 後 Eg 微調

---
