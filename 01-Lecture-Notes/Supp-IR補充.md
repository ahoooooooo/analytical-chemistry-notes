---
科目: 分析化學
章節: Supplementary
標題: Infrared Absorption Spectroscopy（教科書補充，p.129-149）
日期: 2026-03-13
tags:
  - 分析化學
  - IR
  - FTIR
  - ATR
  - 補充教材
---

# IR 補充（Fiore & Pellerito, Spectroscopy for Materials Characterization Ch.5）

> 大部分與 L2 重複，這裡記錄**L2 沒涵蓋或更詳細**的重點。

## IR 光譜的完整範圍

IR 光譜覆蓋波長 **0.7 μm–1 mm**，對應波數 **14285–10 cm⁻¹**。
三區段細分：
| 區域 | 波長 μm | 波數 cm⁻¹ |
|---|---|---|
| **Near IR (NIR)** | 0.7–2.5 | 14285–4000 |
| **Mid-IR (most used)** | 2.5–50 | 4000–200 |
| **Far IR** | 50–1000 | 200–10 |

**關鍵觀念**：

- 幾乎所有實務 IR 光譜都在 **Mid-IR 區**
- Mid-IR 是分子最強吸收、特徵振動頻率所在
- NIR 主要是**泛音（overtones）** 與**組合帶（combination bands）**
- Far IR 主要是**重原子振動、晶格振動、phonons**

---

## Transmittance (%T) 與 Absorbance 的換算

IR 光譜儀原始輸出常常是 **%Transmittance**（縱軸 0–100），但吸收度 A 與濃度線性（Beer-Lambert）。兩者換算：

```
T = P/P₀               (0 到 1 的小數)
%T = T × 100           (0 到 100 的百分比)
A = −log₁₀ T = log₁₀(1/T)
A = log₁₀(100/%T)      ← 常用
%T = 100 × 10^(−A)
```

**常用對應表**：
| %T | A |
|---|---|
| 100 | 0 |
| 50 | 0.301 |
| 10 | 1 |
| 1 | 2 |
| 0.1 | 3 |

**IR 譜的慣例**：
- 縱軸常用 **%T**（從上往下看峰）→ 吸收越強，峰越往下凹
- UV-Vis 譜慣用 **A**（從下往上看峰）→ 吸收越強，峰越往上凸

---

## Fundamental vs Overtone vs Combination Band（重要考點）

白話說：分子振動就像吉他弦 — 有最基本的振動頻率（fundamental），也可以出現倍頻（overtone）和多個振動混在一起的頻率（combination band）。理解這些是讀懂一張 IR 光譜的基礎：大部分峰是 fundamental，但那些「不該出現的小峰」通常就是 overtone 或 combination band。

### Fundamental band（基頻帶）

- Δv = ±1（振動量子數只變 1）— 就是彈簧振幅最自然的變化
- 最常見、最強的吸收帶 — IR 光譜上大部分你看到的峰都是這個
- 從 v=0 → v=1 的 allowed transition

### Overtone band（泛音帶）

白話說：就像吉他弦除了基音之外也會發出二倍音、三倍音。分子也是 — 它可以一次跳兩級（v=0 → v=2）。在完美的諧振子模型裡這是不可能的，但真實分子的位能曲線不是完美拋物線（anharmonic），所以這種跳躍被「偷偷允許」了。

- Δv = ±2 (first overtone)、Δv = ±3 (second overtone)
- 強度比 fundamental **弱很多**（因為本質上是 forbidden transition）
- 頻率**略低於** 2× 或 3× fundamental（因為高能階越來越擠）
- NIR 區的光譜主要就是這些 overtone

### Combination band（組合帶）

白話說：一個原子同時參與兩種不同振動時，這兩個振動的頻率可以「加在一起」出現一個新峰。就像兩個鐘同時敲，除了聽到各自的音之外，還會聽到一個混合的音。

- 頻率 v̄ = v̄₁ + v̄₂
- 通常弱，但在某些分子中可能很明顯

### Difference band（差頻帶）

- 頻率 v̄ = v̄₁ − v̄₂（兩個振動的差）
- 比 combination band 更少見

### Fermi Resonance（Fermi 共振）

白話說：當一個強的 fundamental 振動恰好跟某個弱的 overtone 能量幾乎相同時，它們會「互相拉扯」— 本來應該是「一個強峰 + 一個幾乎看不到的弱峰」，結果變成**兩個中等強度的峰**，分別被推到比預期更高和更低的位置。就像兩個頻率接近的音叉靠在一起，會互相影響對方的振動。

- **看到什麼**：在光譜上本該只有一個峰的地方，出現了兩個分離的峰（doublet）
- **怎麼判斷**：兩個峰的強度接近且位置對稱地偏離預期的 fundamental 位置
- 經典例子：CO₂ 的 symmetric stretch 在 1388 cm⁻¹，恰好 ≈ 2 × 667 cm⁻¹ bending overtone → 兩者耦合產生 Fermi resonance doublet

---

## Selection Rule 再強化：Dipole Moment 的向量性

**μ = Q·r**（電偶極矩）

- Q：電荷
- r：從定原點到電荷的向量距離

**Heteronuclear diatomic molecules（異核雙原子分子）**：

- 兩原子電負度不同 → 電子分布不均 → 分子本身有**極性 polar**
- 有 permanent electric dipole moment
- 振動時偶極矩大小改變 → **IR active**
- 例：HCl、CO、HF

**Homonuclear diatomic molecules（同核雙原子分子）**：

- 兩原子電負度相同 → 電子均勻分布 → **永遠沒有 dipole moment**
- 振動時偶極矩始終為 0，不改變
- **IR inactive**
- 例：H₂、O₂、N₂、Cl₂

### 為什麼 CO₂ 對稱 stretch 是 IR inactive？

- CO₂ 線型，兩個 C=O 偶極大小相同、方向相反 → 淨偶極 **μ = 0**
- 對稱 stretch 時兩個 O 同進同出 → 電荷分布仍對稱 → μ 始終 = 0
- 因為 μ 不變化 → IR inactive
- 反對稱 stretch：一側靠近、一側遠離 → 瞬時淨偶極 ≠ 0 → IR active

---

## Michelson Interferometer 的數學（L2 補齊）

### Optical Path Difference (OPD) 與 Retardation

白話說：動鏡往前移 Δ 的距離，光要走過去再走回來，所以**多走了 2Δ**。這個「多走了多少」就叫 retardation δ。δ 決定兩束光合回來時是加強還是抵消。

- Retardation δ = 2Δ
- **Zero Path Difference (ZPD)**：動鏡跟固定鏡到 beam splitter 的距離一模一樣 → 兩束光走完全相同的路 → 完全同相 → 信號最強（這就是 interferogram 中間那個大尖峰）

### 建設性與破壞性干涉

白話說：兩個波峰對上波峰 → 加強；波峰對上波谷 → 抵消。路徑差決定了哪種情況發生。

- **建設性（加強）**：δ = nλ → 兩波峰完全對齊 → 強度加倍
- **破壞性（抵消）**：δ = (n + ½)λ → 波峰對上波谷 → 強度歸零
- 介於兩者之間：強度隨 δ 做正弦變化 → 這就是為什麼 interferogram 看起來像振盪波

### 單色光的 Interferogram

單波長 λ（v̄ = 1/λ）下，光強對 δ 的變化：

```
I(δ) = B(v̄)·cos(2π·v̄·δ)
```

是一個純餘弦波。

### 多色光（broadband IR 源）的 Interferogram

所有波數同時振盪，總信號 = 各頻率干涉波**線性疊加**：

```
I(δ) = ∫₀^∞ B(v̄) cos(2π·v̄·δ) dv̄
```

此信號稱為 **interferogram**。特徵形狀：

- **Centerburst**：在 δ = ZPD 處所有波長同相 → 信號極大
- **Wings**：離開 ZPD 後，不同波長開始失相 → 快速衰減的振盪

### Fourier 反變換得光譜

```
B(v̄) = ∫_{-∞}^{∞} I(δ) cos(2π·v̄·δ) dδ
```

用 **FFT** 計算把 I(δ) 轉成 B(v̄)。

### Fourier Frequency

白話說：動鏡在移動，所以 interferogram 不只是「位置的函數」也是「時間的函數」。每個波數的光在 interferogram 中會以不同的速度振盪 — 波數越高振盪越快。偵測器只要錄下這個時間信號，再用 FFT 按頻率拆開，每個頻率對應一個波數，就得到完整光譜。

```
F = 2v·v̄
```

- F：Fourier frequency (Hz) — interferogram 中該成分振盪的時間頻率
- v：動鏡移動速度 (cm/s)
- v̄：對應的波數 (cm⁻¹)

**直覺**：動鏡移越快（v 大）或波數越高（v̄ 大），干涉條紋變化越快 → F 越高。這就是 FTIR 能「同時測全譜」的關鍵 — 所有波數的資訊都混在一個時域信號裡，靠不同的 Fourier frequency 來區分。

---

## IR 光源細節（L2 補齊）

### Nernst Glower（能斯特燈）

- 材質：**稀土氧化物混合物**（zirconium、yttrium、cerium、thorium oxides）
- 操作溫度 **1500–2000 K**
- 接近黑體的發射譜，**但 2000 cm⁻¹ 以下 emissivity 低**
- 缺點：
  - 脆（機械不穩定）
  - **負溫度係數**（resistance 隨溫上升而下降）→ 容易過熱、燒壞
  - 啟動需加熱到一定溫度才導電
- 今天較少用

### Globar（矽碳棒）

- 材質：**silicon carbide (SiC)**，電熱
- 操作溫度 **~1300 K**（比 Nernst 低）
- 優點：
  - 簡單穩固
  - **Far-IR 強度比 Nernst 好**（低波數 emissivity 較高）
  - 壽命長
- 最常用的 mid-IR 光源

### 第三種：**Nichrome wire**

- 鎳鉻合金螺旋電熱絲
- 簡單便宜但**強度較低**、溫度低、emissivity 差
- 優點：機械穩固、壽命長
- 較少用於 mid-IR

### Near-IR 光源

- **Tungsten-halogen lamp (QTH)**：quartz 或 glass 外殼 + 鎢絲 + 鹵素氣
- 高強度 near-IR
- 25000–2000 cm⁻¹ 可用
- 但**強度不是全頻段平坦**，會造成非線性響應

### Far-IR 光源

- **High-pressure mercury lamp**：低壓石英管 + Hg + Ar → 電弧放電
- 電弧放電 + 熱輻射雙機制
- 在 200 cm⁻¹ 以下遠強於 Globar

---

## IR Detector 深入（L2 補齊）

### 分兩大類

1. **Thermal detectors（熱型）**：量輻射造成的溫度變化
2. **Photon / quantum detectors（光子/量子型）**：量光子直接激發的電子

### 熱型偵測器

#### Thermocouple（熱電偶）

白話說：兩種不同金屬接在一起，一端加熱就會產生電壓（Seebeck effect）。IR 光打在接點上讓它變熱 → 量電壓就知道接收了多少光。原理簡單、波長範圍廣、但靈敏度不高。

- 室溫操作，穩定
- 現代多用 CMOS 製程的 **thermopile**（很多 thermocouple 串聯加強信號）

#### Bolometer（輻射熱計）

白話說：一條電阻絲，光照讓它溫度升高 → 電阻改變 → 量電阻就知道接收了多少光。概念跟溫度計一樣。

- 材質：Ni、Bi、Pt 或 Sb 金屬
- 缺點：反應慢（幾秒級）
- 現代 **micro bolometer**（微型化薄膜版本）反應快很多，常用於**紅外熱像儀**（夜視鏡就是這個）

#### Thermistor bolometer

- 以 Mn、Co、Ni 氧化物做的半導體熱敏電阻
- 溫度係數比金屬大 → 靈敏度更高
- Response 較慢

#### Pyroelectric detector（焦電偵測器，最常用於 mid-IR FTIR）

白話說：有些晶體天生就帶電（自發極化），而且這個極化量會隨溫度變化。IR 光讓晶體微微升溫 → 極化量改變 → 表面電荷改變 → 可以量到電流。跟 thermocouple/bolometer 不同的是，pyroelectric 偵測的是**溫度變化的速率**而非溫度本身，所以對快速變化的光信號反應好。

- 室溫可操作，反應快
- 關鍵限制：溫度超過 **Curie temperature T_C** 時自發極化消失，偵測器就失效了
- 代表材質：
  - **DTGS**：FTIR 最標準的偵測器，T_C = 60°C，室溫 20–30°C 操作沒問題
  - **LiTaO₃**：T_C 高達 610°C（不怕熱），但靈敏度較低
  - **PVDF**：便宜的高分子材料，但 T_C 低

### 光子型偵測器

#### 原理

白話說：跟太陽能電池一樣 — IR 光子直接把電子從價帶踢到導帶，產生可量測的電信號。因為是一對一的光子-電子轉換，反應極快（奈秒級）且靈敏度高。但問題是：在室溫下，熱能本身就會隨機激發電子產生雜訊（thermal noise），所以必須**用液氮冷卻到 77 K** 把熱雜訊壓下去。

- **快速 response（~1 ns）**、**高靈敏度、高 SNR**
- 缺點：需液氮冷卻，操作麻煩且成本高

#### 代表材質

- **PbSe** (lead selenide)
- **InSb** (indium antimonide)
- **InGaAs** (indium gallium arsenide)
- **Ge** (germanium)
- **MCT / HgCdTe (mercury cadmium telluride)**：mid-IR 最常用光子型；組成 Hg\_{1−x}Cd_x Te，x 決定 band gap（可調）
- **Doped Ge for far-IR**：冷卻到液氦 (4 K) 也用於 > 120 μm 區
- InGaAs 為 far-IR 做冷卻應用

### Golay Cell（熱氣體膨脹偵測器）

白話說：一個密封小盒子裡面裝了 Xe 氣體，一端是一片薄薄的反射膜。IR 光從窗戶進去加熱氣體 → 氣體膨脹 → 把薄膜推凸 → 外部用光學方法追蹤膜的變形量。原理非常直覺（就是氣球受熱膨脹），但機械結構精密所以很嬌貴。

- 優點：靈敏度在熱型偵測器中算好的、寬波長範圍、室溫操作
- 缺點：對機械振動極敏感（走路都會影響），壽命短

---

## ATR 技術深入

### Critical Angle 公式

白話說：光從密介質（晶體）射向疏介質（樣品）時，角度夠大就會全反射。「夠大」的門檻就是臨界角 θ_c。角度太小光就穿出去了（不是全反射），太大才會反彈回來。

```
θ_c = sin⁻¹(n_s / n_c)
```

- n_c 必須 > n_s 才有全反射 — 這就是為什麼 ATR 晶體的折射率都很高（Ge 4.0、Diamond 2.4）
- n_s/n_c 越小 → θ_c 越小 → 更容易全反射 → ATR 越好操作

### Penetration Depth d_p

```
d_p = λ / (2π·n_c·√(sin²θ − (n_s/n_c)²))
```

- 約 μm 量級（幾 μm）
- 因此 ATR 只取得**表面與近表面**的資訊

### 關鍵 ATR 晶體材質

| 材質               | Wavenumber 範圍 cm⁻¹ | Refractive index | 水溶解度  |
| ------------------ | -------------------- | ---------------- | --------- |
| **Germanium (Ge)** | 5500–675             | 4.00             | Insoluble |
| **Silicon (Si)**   | 8400–1500            | 3.41             | Insoluble |
| **ZnSe**           | 15000–650            | 2.40             | Insoluble |
| **Diamond**        | 30000–200            | 2.41             | Insoluble |

**記憶重點**：

- ATR 用的晶體**折射率都很高（2.4 以上）** 才能確保 n_c > n_s
- Ge 折射率最高 (4.00) → d_p 最小（深度最淺）
- Diamond 範圍最寬、最硬、化學最惰性 → 理想但**貴**
- ZnSe 便宜常用但**酸性樣品會腐蝕**
- Si 對 mid-IR 有強吸收，主要用於 far-IR

---

## IR 取樣方法（教科書 Table 5.3 精華）

### 1. Transmission 方法

**固體樣品：KBr Pellet**

- 1–2 mg 樣品 + 100–150 mg KBr
- 壓力 10000–15000 kg/cm² 壓成透明圓錠（13 mm）
- 壓片厚度一般 < 1 mm
- KBr 對 4000–400 cm⁻¹ 完全透明
- 缺點：吸濕、可能發生離子交換
- 也可用 CsI 延伸到 200 cm⁻¹

**Nujol Mull（油糊法）**

- 固體在 agate 研缽裡研成細粉
- 加 1–2 滴 Nujol（mineral oil）或 Fluorolube 成糊
- 夾在兩片 KBr/NaCl 窗之間
- 缺點：Nujol 本身在 2900 cm⁻¹ 與 1460 cm⁻¹、720 cm⁻¹ 有強吸收 → 這些區段被蓋掉
- 需分別用 Nujol + Fluorolube 做兩次掃

**薄膜（cast / melt-cast film）**

- 樣品溶於揮發性溶劑，滴到 KBr/NaCl 窗上，蒸乾
- 或加熱融化直接塗膜
- 對聚合物特別有用

**液體 cell（demountable / fixed）**

- 兩片 IR 窗材 + Teflon spacer 形成固定厚度（10–100 μm）
- 高揮發性液體用密封 fixed cell
- 黏稠液體、oils：5–20 μm，**夾 capillary film**（sandwich 一小滴）
- 常用液體 cell 的光程 0.05–0.1 mm，濃度 10%

**非水溶劑選擇**：

- CCl₄、CS₂、CHCl₃、hexane 在 mid-IR 區大部分透明
- 水在 IR 很強吸收 → 用 AgCl、BaF₂、KRS-5 做窗材
- D₂O 替代 H₂O 可把強吸收帶移到較低波數

**氣體 cell**

- 圓柱 cell，兩端有 IR 窗、真空接口
- 路徑通常 **10 cm**（單 pass，0.0658 atm 得到好光譜）
- 超高靈敏度：**multi-pass cell** 可到 120 m 等效光程，測到 ppb 等級

### 2. ATR / 3. DRIFT / 4. Reflection-absorption → 見 L2

---

## FTIR Microspectroscopy & AFM-IR

### FTIR Microspectroscopy

- FTIR + 光學顯微鏡
- 空間解析度 **5–10 μm**（受繞射限制，~λ）
- 需用 MCT 偵測器（高 D\*、窄光束可用）
- 信噪比 ∝ 厚度 ∝ 波長
- **Synchrotron IR microspectroscopy**：高亮度同步輻射做光源，空間解析度可達繞射極限

### AFM-IR（Atomic Force Microscopy + IR）

- 脈衝 IR 雷射激發樣品 → 吸收造成熱膨脹
- AFM 探針讀熱膨脹量 → 等效測量 IR 吸收係數
- **空間解析度 100 × 100 nm**，突破繞射極限
- 應用：單細胞、微小樣品

---

## FTIR 的實際優勢（數學根據）

### Multiplex (Fellgett) Advantage

白話說：傳統 IR 一次只看一個波長，量 N 個波長要花 N 倍時間。FTIR 同時量所有波長，相當於把偵測器的工作時間完全利用 → SNR 提升 √N 倍。如果你的光譜有 1000 個數據點，FTIR 的 SNR 就比掃瞄式好 √1000 ≈ 32 倍。

### Jacquinot (Throughput) Advantage

白話說：傳統 IR 的 monochromator 要用很窄的 slit 來選波長，大部分光被 slit 擋掉了。FTIR 不需要 slit — 所有光全部進來，到偵測器的光量大幅增加 → SNR 自然更好。

### Connes Advantage

白話說：FTIR 要知道動鏡的精確位置才能做好 FFT。它用一束 He-Ne laser 的干涉條紋來追蹤動鏡位置 — laser 波長極精準 → 波數軸精度可達 ~0.01 cm⁻¹。這意味著你可以放心地疊加多次掃瞄來提升 SNR，因為每次的波數軸都完全對齊。

---

## Applications（Case Studies 重點摘要）

### Chemical Characterization

- 合成反應 in situ 追蹤（React IR、immersion probe）
- Lambert-Beer law 可做**定量**
- 結構指派、光異構化、tautomerization 研究

### Surfaces 表面化學

- 聚合物摻合物 (polymer blends) 介面研究
- 塑膠氧化、UV 降解
- ATR、grazing-angle reflection、Micro-IR、AFM-IR 都能做
- Self-assembled monolayers（SAMs）、grafted polymers

### Medical / Life Science

- **Protein secondary structure**：Amide I (1650) 與 Amide II (1540) 可分辨 α-helix、β-sheet、random coil
- **Synchrotron-FTIR**：可在水相中量活細胞的光譜（一般 FTIR 不行，因水強吸收）
- **Amide I 精確位置 1640–1650 cm⁻¹**：α-helix 較 ~1650；β-sheet 較 ~1640
- **Phosphate PO₂⁻ 1044 cm⁻¹**：DNA/RNA 特徵峰，量細胞內核酸分布
- Cell/tissue imaging（FTIR imaging）→ 癌組織識別、amyloid 疾病
- **Drug polymorphism**：同一藥物不同結晶型有不同 IR 光譜 → 區分晶型（atorvastatin、indomethacin）；這在藥物研發很重要因為不同 polymorph 可能有不同生物活性
- **AFM-IR 對 electrospun nanofibers**：空間解析度 100 × 100 nm，用於分析奈米纖維中 molecular conformation、結晶度
- **Time-resolved FTIR**：下到 10 分鐘甚至 μs 級反應動力學
- **IR biosensor**：用於偵測 TNF-α（tumor necrosis factor）等生物標記

### Cultural Heritage / Forensic（鑑定用多種技術組合）

- **複合分析組合**：FTIR + XRF（X-ray fluorescence）+ SEM（scanning electron microscopy）+ XRD + 光學顯微鏡
- 博物館藏品鑑定（顏料、墨水、纖維、結合劑、清漆）
- **Micro-FTIR + ATR**：取樣極少（非破壞性），適合珍貴文物
- 偽造品鑑定（例：Virgin Hodegetria 畫作真偽分析）
- 犯罪現場：纖維、油漆、染料、生物體液分析
- **FTIR-Raman、GC-IR、IR microscopy** 組合在法醫化學常用

### Environmental / Geological

- 土壤、水體污染
- **礦物分析**：silicates、carbonates 為主
- **OH stretching region 3770–3500 cm⁻¹**：礦物中的 OH 基團（aluminosilicates、雲母）
- **Trace 污染物偵測**：NAMs（Naturally Adsorbed Materials）、stratosphere 氣溶膠（sulfate、carbonate、phosphate、perchlorate）
- **空氣污染物監測**：FTIR sensor 做大氣 VOCs 遠端偵測
- **火山氣體監測**：FTIR 直接從火山噴氣口量氣體成分
- **航空器排放**：機場周邊 FTIR 監測飛機廢氣

### Food Industry

- 食品成分快速分析（油脂、糖、蛋白質、摻假物）
- **Fingerprint region 1200–700 cm⁻¹** 蘊含多醣、蛋白質、脂質、類胡蘿蔔素特徵
- **摻假檢測（adulteration）**：政府法規要求 → FTIR + 多變量統計（chemometrics）
- **橄欖油摻假**：**trans C=C stretching 3009 cm⁻¹** 在 cis-double bond 油中缺失 → 用來偵測特級初榨橄欖油是否被摻假
- **三酸甘油酯取代模式**：偵測飽和脂肪、反式脂肪
- **酪胺酸毒素（aflatoxin）偵測**：在蛋糕、巧克力、穀物、咖啡中

---

### 🎯 IR 應用特徵波數速查（從 case studies 整理）

| 波數 cm⁻¹ | 指派 | 應用 |
|---|---|---|
| **3770–3500** | 礦物 OH stretching | 地質學、黏土礦物分析 |
| **3009** | cis-C=C stretching（不飽和脂肪） | 橄欖油摻假檢測 |
| 2900 / 1460 / 720 | Nujol 吸收（干擾） | IR 取樣時要避開 |
| **1650 (Amide I)** | α-helix C=O | 蛋白質結構鑑定 |
| **1640 (Amide I)** | β-sheet C=O | 蛋白質結構鑑定 |
| **1540 (Amide II)** | N-H bend + C-N stretch | 蛋白質結構鑑定 |
| **1200–700（指紋區）** | 各種 C-O、C-C、指紋 | 食品摻假、分子鑑定 |
| **1044** | DNA/RNA 磷酸 PO₂⁻ 對稱 stretch | 細胞 nucleic acid 分布 |
- Adulteration 檢測
- Chocolate、cereal 中低至 ppb 的 aflatoxin 偵測

---
