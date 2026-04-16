---
科目: 分析化學
章節: L2
標題: IR 吸收光譜與 FTIR
日期: 2026-03-13
tags:
  - 分析化學
  - IR
  - FTIR
  - Michelson-interferometer
  - 儀器分析
---

# L2 IR 吸收光譜與 FTIR

## Absorption Spectroscopy 三大分支

這學期後段會處理三種吸收光譜：

1. **Infrared absorption spectroscopy（IR）** ← 本次重點
2. **UV-Visible absorption spectroscopy**
3. **X-ray absorption spectroscopy**

---

## Infrared (IR) Absorption Spectroscopy

### 定義

**IR 吸收光譜** 是強力的分析技術，透過測量樣品吸收紅外光的程度，辨識**分子結構與官能基（molecular structures and functional groups）**。

運作原理：IR 頻率必須**對應到共價鍵的自然振動頻率**，而且振動要造成**分子 dipole moment 的改變**。

---

## 分子振動的量子力學基礎

### 能階與 Harmonic Oscillator

白話說：分子裡的化學鍵不是剛性的，原子之間會**像彈簧一樣來回振動**。最簡單的數學模型就是把鍵當作完美彈簧（harmonic oscillator），位能對位移畫出來是一條拋物線。

- **諧振子（harmonic oscillator）**：完美彈簧模型，能階等距，永遠不會斷鍵
- **非諧振子（anharmonic oscillator）**：真實分子的行為 — 拉太大力鍵會斷，所以高能階會越來越擠，最終收斂到一個極限（**dissociation energy，解離能**）
- 能階記號：v = 0, 1, 2, …（v=0 是基態，室溫下絕大多數分子都在這裡）

**為什麼重要**：諧振子模型雖然是近似，但足以預測 IR 吸收的大致頻率；anharmonicity 則解釋了為什麼會出現 overtone（泛音，v=0→2 的跳躍）和 combination band

### Hooke's Law 模型

白話說：把分子想成「兩顆球用一條彈簧連在一起」，球的質量和彈簧的軟硬決定了它振動的快慢。這就是 Hooke's Law 在分子層面的應用。

```
v̄ = (1/(2πc)) × √(f/μ)
```

- **v̄**：振動頻率（以波數 cm⁻¹ 表示）— 就是 IR 光譜橫軸的數字
- **c**：光速（常數，不用管）
- **f**：**force constant（力常數）**— 代表彈簧有多硬，也就是化學鍵有多強。triple bond > double bond > single bond，所以 f 也是這個順序
- **μ**：**reduced mass（折合質量）**— 不是兩個原子質量的簡單相加，而是下面的公式。直覺上，μ 受較輕的那顆原子主導（想像一顆很重的球和一顆很輕的球用彈簧接在一起，振動快慢主要由輕的那顆決定）

**Reduced mass 公式**：

```
μ = (M₁ M₂) / (M₁ + M₂)
```

**讀這個公式的方式**：分子看分母 — 如果一個原子超重（M₁ → ∞），μ ≈ M₂（較輕那顆）。所以 C–H 的 μ 幾乎就是 H 的質量（≈1），而 C–C 的 μ ≈ 6，差了 6 倍

### 關鍵推論（考點！）

由 Hooke's Law 可以定性「預測」IR 吸收頻率會往哪移動：

**(1) Bond strength k**：鍵越強 → 越「硬」→ 振動越快 → 波數越高

- C≡C (~2150 cm⁻¹) > C=C (~1650 cm⁻¹) > C–C (~1000 cm⁻¹)

**(2) Atomic mass μ**：質量越輕 → 振動越快 → 波數越高

- C–H (light H) ≈ 3000 cm⁻¹
- C–Cl (heavy Cl) ≈ 700 cm⁻¹

### Energy 與 v̄ 的關係

白話說：IR 光譜橫軸的波數 v̄ 就直接對應分子振動所需的能量。波數越大 = 能量越高 = 振動越快。

- 室溫下大部分分子在基態 v=0，能量 E₀ = ½ hv̄
- 吸收一個 IR 光子跳到 v=1，能量 E₁ = 3/2 hv̄
- 所以需要的光子能量 = ΔE = hv̄

**從實驗反推鍵的性質**：量到吸收峰在哪個波數，代入 Hooke's Law 就能算出那個鍵的力常數 f。這是 IR 光譜最核心的用途 — 看峰的位置就知道是什麼鍵。

力常數的典型範圍（記個大概即可）：

- Single bond：f ≈ 3–8 × 10² N/m（平均 ~500 N/m）
- Double bond：f ≈ single 的 **2 倍**（~1000 N/m）
- Triple bond：f ≈ single 的 **3 倍**（~1500 N/m）

這就解釋了為什麼 C≡C 在 2150、C=C 在 1650、C–C 在 1000 cm⁻¹ — 力常數比大約是 3:2:1，波數也大約是這個比例

---

## Selection Rule（複習）

**IR active 的必要條件**：振動過程中**分子 dipole moment 必須改變**。

白話說：IR 光是電磁波，它的電場會跟分子的電偶極矩「對話」。如果一個振動模式完全不改變偶極矩（比如對稱分子的對稱伸縮），電磁波就「抓不住」這個振動 → 不吸收 → IR inactive。反過來，只要振動會讓正負電荷分布不對稱地變化，就能跟 IR 光交互作用 → IR active。

### CO₂（線型分子）

- 振動模式 = 3(3)−5 = **4 個**
- 對稱伸縮：兩 C=O 偶極抵消 → **IR inactive**
- 反對稱伸縮：淨偶極變動 → **IR active**（2350 cm⁻¹）
- 兩個彎曲模式 degenerate → **IR active**（667 cm⁻¹，波長 15 μm）
- 實驗上 CO₂ 只看到 **2 條吸收帶**

### H₂O（非線型分子）

- 振動模式 = 3(3)−6 = **3 個**
- 中央 O 不在 H–H 軸上：
  - Symmetric stretching → IR active（3657 cm⁻¹ / 2.74 μm）
  - Asymmetric stretching → IR active（3766 cm⁻¹ / 2.66 μm）
  - Scissoring bend → IR active（1595 cm⁻¹ / 6.27 μm）
- IR 光譜有 **3 條吸收帶**

### Coupling（耦合效應）

白話說：化學鍵不是獨立存在的 — 一個鍵振動時會拉扯到旁邊的鍵，就像一排彈簧球串在一起，拉動一顆球旁邊的也會跟著動。這導致同一個官能基在不同分子裡的吸收位置**會稍微偏移**。

- 例：甲醇 C–O stretch 在 1034 cm⁻¹，乙醇 1053 cm⁻¹，2-丁醇 1105 cm⁻¹
- 原因：C–O stretch 會與相鄰的 C–C 或 C–H 振動耦合，周圍環境不同就會拉到不同位置
- **結果**：指紋區（1400–600 cm⁻¹）才會那麼複雜 — 各種耦合振動在這裡疊在一起，很難指派給單一個鍵，但正因為每個分子的耦合模式獨一無二，所以才叫「指紋」

---

## IR 儀器三大組件（光譜儀通式）

```
Light (IR source)  →  Sample / Optics  →  Detector (DTGS / MCT)
```

### (1) Infrared light sources

三大類：

**Thermal radiation IR sources（熱輻射式）** — 最常見

- 用**黑體 blackbody** 近似
- 相同溫度下 blackbody 具有最高輻射密度，是理想光源
- 實例：
  - **Globar（碳化矽 silicon carbide rods）**：電熱，波長範圍 ~2000–20000 nm，適合 mid-IR 與 far-IR
  - **Nernst glower**
  - **Incandescent 白熾燈**：> 5000 nm 被玻璃殼吸收 → 只能做 near-IR、mid-IR
  - **Quartz tube halogen lamp**：壽命 > 5000 小時
- 塗上 Ti、Zr、Cr、Mn、Fe、Ni、Si 氧化物或 B、Si 碳化物，可生成 far-IR 光源

**Gas discharge IR sources**

- 例：Xenon lamp，強 near-IR 連續譜

**Laser IR sources**

- 例：CO₂ laser、tunable QC lasers
- 光強度最高但波長範圍窄（除非可調）

**光源比較（強度/波長關係圖重點）**：
Synchrotron > tunable QC lasers > globar ≫ microbolometer noise floor

### Blackbody 源（校正用）

- 理想、校準發射器：只吸收所有入射輻射，只靠溫度決定發射
- 典型範圍 2–14 μm
- 高溫 → 峰往短波長移（Wien's law 定性）
- 5000 K / 3000 K / 2000 K / 1000 K 的輻射曲線：溫度越高，能量分布越往短波長/高波數
- **校正用 blackbody 實際操作溫度**：**500°C、800°C、1000°C** 為常見選項，用於熱像儀、光譜儀、輻射計的絕對輻射強度校正
- 輻照度峰值在 1000°C 約 2–3 μm，800°C 約 4 μm，500°C 約 6 μm（Wien's law 定量對應）

---

### (2) IR Detectors

#### 偵測器材質（narrow-gap 半導體）

| 材質                                                     | 縮寫              |
| ------------------------------------------------------ | --------------- |
| Lead(II) sulfide                                       | PbS             |
| **Mercury cadmium telluride**                          | **MCT, HgCdTe** |
| Indium antimonide                                      | InSb            |
| Indium arsenide                                        | InAs            |
| Indium gallium arsenide                                | InGaAs          |
| Lead selenide                                          | PbSe            |
| Lithium tantalate                                      | LiTaO₃          |
| **Triglycine sulfate / Deuterated triglycine sulfate** | **TGS / DTGS**  |
| Platinum silicide                                      | PtSi            |

#### Detectivity D\*（關鍵參數！）

白話說：D\* 回答一個簡單問題 — 「這個偵測器能看到多微弱的光？」。它把偵測器面積和頻寬的影響標準化掉了，所以可以**跨不同偵測器公平比較**。

- 單位：cm·Hz^(1/2)/W
- **D\* 越高 → 在同樣微弱的光下，信號越清楚**
- 實際差距：MCT-A 的 D\* ≈ 6.4 × 10¹⁰，DLaTGS 的 D\* ≈ 2.7 × 10⁸ → MCT 靈敏度是 DTGS 的 **~200 倍**。這就是為什麼需要高靈敏度時（微量樣品、快速掃瞄）要選 MCT

#### DTGS vs MCT Detectors（重要比較）

| 項目               | **DTGS (DLaTGS)**                            | **MCT (HgCdTe)**                            |
| ------------------ | -------------------------------------------- | ------------------------------------------- |
| 類型               | Thermal（熱型）                              | Quantum（量子型）                           |
| 高通量情形         | 表現好                                       | 容易**飽和非線性**                          |
| 低通量情形         | 表現差                                       | 表現好                                      |
| 動態範圍           | 線性響應範圍寬                               | 較窄，需在低通量使用                        |
| 適合               | 定性、定量 FT-IR、**靜態測量**               | **動力學測量（kinetics）**                  |
| 操作溫度           | Room temp                                    | 常需 **Liquid N₂ 冷卻**                     |
| 跟資料收集速度關係 | 熱型偵測器信號 ∝ 1/資料收集速度 → 慢測量有利 | 信號相對**不隨收集速度變化** → 適合快動力學 |
| 冷卻               | 不需                                         | 需要                                        |

**白話理解這兩個偵測器**：

想像 DTGS 是一支「溫度計」— 光打上去讓它變熱，它測溫度變化。好處是量什麼溫度都行（線性範圍寬），壞處是溫度計反應慢、而且微弱的溫度變化它感覺不到。

MCT 是一個「光電開關」— 光子直接把電子打出來，每個光子都被計數。好處是超靈敏（連很弱的光都看得到），壞處是光太強時電子太多會「塞車」（飽和）。

所以：
- **DTGS**：適合一般靜態測量、光量大的情境（如常規 FTIR 分析）
- **MCT**：適合微量樣品、快速動力學（如化學反應 in situ 追蹤），但需液氮冷卻且高通量會飽和
- MCT 飽和怎麼辦？加 neutral density filter 或縮小光圈降低光量

---

## Sample Measurement 模式（三大取樣技術）

白話說：IR 光要穿過或接觸到你的樣品，但不同形態的樣品需要不同方法。這三種方法回答的問題是：「我的樣品該怎麼放進 IR 光譜儀？」

| 技術                                               | 適用樣品                                                         | 優點                                                 |
| -------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------- |
| **Transmission（透射）**                           | 有機分子溶於 cell；聚合物、薄膜、粉末做 pellet/mull              | 便宜、傳統、定性定量都好，**從高濃度到低濃度都可以** |
| **ATR (Attenuated Total Reflectance)**             | 塗料、塑膠、橡膠、塗層、天然粉末、固體（可壓平）、液體、生物樣品 | 樣品處理極少，無需壓片，分析表面                     |
| **DRIFT (Diffuse Reflectance IR FT Spectroscopy)** | 軟粉末或粉狀混合物、硬/韌聚合物、油漆、塗料表面、錠片            | 幾乎零樣品處理，直接倒入 cup，無 KBr 壓片            |

**怎麼選**：
- 樣品能做成透明薄片或溶液 → **Transmission**（最經典、定量最準）
- 固體/液體不想前處理 → **ATR**（壓上去就測，現代最常用）
- 粉末不想壓片 → **DRIFT**（直接倒粉末進去）

### ATR 原理

白話說：光從密的介質（高折射率晶體）射向疏的介質（樣品），角度夠大就會全反射回來。但全反射不是「光完全不碰到另一邊」— 實際上有一點點光會**滲出去**，像鬼魂一樣穿過界面一點點距離再消失，這就是 **evanescent wave（消逝波）**。ATR 就是靠這個滲出去的光來「嗅」到樣品的。

- 穿透深度公式：

  ```
  d_p = λ / (2π n₁ √(sin²θ − (n₁/n₂)²))
  ```

  - λ：光的波長（波長越長，消逝波穿越深）
  - n₁：晶體折射率（越高，穿越越淺）
  - n₂：樣品折射率
  - θ：入射角（角度越大，穿越越淺）

- d_p 約 **1 μm** — 所以 ATR 本質上是**表面分析技術**，只看到樣品最外面一丁點
- 可單次反射（Single reflection IRE）或多次反射（Multiple reflection IRE），多次反射會累積更多吸收信號

### DRIFT 原理

- 入射光被粉末多次散射 → 混合了 **specular reflected** + **diffuse reflected** 光
- 偵測 diffuse reflected 部分

### Mid-IR 常用窗片/晶體材質（要記得 KBr、NaCl）

| 材質             | 透明範圍 cm⁻¹ | 備註                         |
| ---------------- | ------------- | ---------------------------- |
| KBr              | 40000–400     | **溶於水和醇，常用 pellet**  |
| NaCl             | 33000–625     | 溶於水                       |
| CsI              | 33000–160     | 溶於水                       |
| CaF₂             | 50000–1100    | ATR                          |
| Ge               | 5000–660      | ATR，非常硬惰性              |
| ZnSe             | 16700–660     | ATR，微溶酸                  |
| Diamond          | 50000–500     | 超硬惰性，ATR 標準材料       |
| Al₂O₃ (sapphire) | 50000–2222    | 窗/光纖/ATR，抗酸鹼到 1000°C |

---

## Fourier-Transform Infrared Spectroscopy (FTIR)

### 與傳統 IR 的差別（考點！）

白話說：傳統 IR 像「收音機轉台」— 一次只聽一個頻率，要把所有頻率都轉過一遍才能得到完整光譜。FTIR 像「同時錄下所有電台」— 一次全收，之後用數學（FFT）拆開每個頻率的貢獻。所以 FTIR 當然更快、信號更好。

| 項目    | 傳統 Dispersive IR                  | **FTIR**                             |
| ----- | --------------------------------- | ------------------------------------ |
| 波長選擇器 | **Monochromator**（grating / slit） | **Michelson interferometer**         |
| 測量方式  | 一次掃一個波長                           | **同時量測所有 IR 頻率**                     |
| 速度    | 慢（數分鐘）                            | 快（數秒內）                               |
| SNR   | 較差                                | **較好**（multiplex / Fellgett 優勢）      |
| 解析度   | 較差                                | **較好**                               |
| 輸出    | 直接 spectrum                       | **Interferogram → 數學 FT → spectrum** |
| 應用    | —                                 | 兩者都用於辨識官能基與材料                        |

### Michelson Interferometer 原理

白話說：Michelson 干涉儀的核心想法是「把一束光分成兩束，讓它們走不同長度的路再合回來，看它們會加強還是抵消」。動鏡移動就是在改變其中一束光走的路有多長。

```
Source → Beam splitter → {Fixed mirror M₁, Movable mirror M₂} → 合併 → Sample → Detector
```

- **Beam splitter**：半透半反的鏡子，把入射光 50/50 分成兩路
- **Fixed mirror M₁**：不動的參考鏡
- **Movable mirror M₂**：在 translation stage 上來回移動，製造 **optical path difference δ**
- 兩路光回到 beam splitter 時合併 → 路徑差決定干涉是加強還是抵消

**從簡單到複雜理解**：
- 只有**一個頻率**的光：I(δ) = B(v̄₁)·cos(2πδv̄₁) → 動鏡移動時看到一個純正弦波
- **兩個頻率**混在一起：兩個正弦波疊加 → 出現拍頻（beat pattern）
- **全部 IR 頻率**一起來（真實情況）：幾千個正弦波疊加 = **interferogram** — 在中心（δ=0）所有波同相所以信號暴衝（centerburst），往兩邊快速衰減

### Interferogram → Spectrum

白話說：偵測器記錄到的不是光譜，而是一堆波疊在一起的「亂碼」（interferogram）。Fourier Transform 就是把這坨亂碼拆解回「每個頻率各貢獻多少」的工具 — 像是把一首交響樂拆成每個樂器的獨奏。

**正變換**（光譜 → interferogram）：

```
I(δ) = ∫₀^∞ B(v̄) cos(2π δ v̄) dv̄
```

**反變換**（interferogram → 光譜，這才是 FTIR 真正在做的）：

```
B(v̄) = ∫_{-∞}^{∞} I(δ) cos(2π δ v̄) dδ
```

電腦用 **Fast Fourier Transform (FFT)** 快速算出 B(v̄) — 這就是你最終看到的 IR 光譜。

**解析度**：Δv̄ = 1/δ_max
- δ_max 是動鏡的最大位移量
- 直覺：動鏡走越遠 = 收集更多干涉資訊 = 能分辨更接近的兩個頻率 = **解析度越高**
- 例：要達到 1 cm⁻¹ 解析度，動鏡至少要移 1 cm

### FTIR 處理流程

1. 量 **background interferogram**（沒放樣品，單光束）→ FFT → background spectrum
2. 放樣品量 **sample interferogram** → FFT → sample spectrum
3. **Transmittance**：%T = 樣品單光束 / 背景單光束
4. **Absorbance**：A = −log₁₀ T

### FTIR 儀器關鍵元件

- **Broadband source**（如 Globar、Nernst）
- **Beam splitter**
- **Fixed mirror + Movable mirror（在 delay line 上）**
- **Sample compartment**
- **Detector**（DTGS 或 MCT）
- **Pellet press（壓片機）**：傳統 FTIR 做 KBr 壓片用

---

## FTIR 結果判讀：Peak Assignments

白話說：拿到一張 IR 光譜，你的任務是「看峰在哪，猜出分子裡有什麼鍵」。策略是**先看高波數區的特徵峰確定官能基，再用指紋區確認是哪個特定分子**。下面的數字不需要精確背，記個大致範圍和相對位置就好。

### IR 光譜分區（重要！）

| 範圍 cm⁻¹ | 區域                             | 特徵                             |
| --------- | -------------------------------- | -------------------------------- |
| 3200–3400 | O–H / N–H 伸縮                   | 寬峰（有氫鍵）                   |
| 2850–3100 | C–H 伸縮                         | alkane/alkene/aromatic           |
| 2100–2260 | C≡N / C≡C 伸縮                   | 三鍵                             |
| 1650–1820 | **C=O 伸縮**                     | carbonyl，強峰                   |
| 500–1000  | C=C（取代型）、芳香取代型        | —                                |
| 1400–600  | **Fingerprint region（指紋區）** | 複雜、重疊多，用來區分特定化合物 |

### Hydrocarbons peak assignment

**Alkanes**：

- C–H stretch: 3000–2850 cm⁻¹
- C–H bend / scissoring: 1470–1450 cm⁻¹
- C–H rock (methyl): 1370–1350 cm⁻¹
- Long-chain methyl rock: 725–720 cm⁻¹

**Alkenes**：

- C=C stretch: 1680–1640 cm⁻¹
- =C–H stretch: 3100–3000 cm⁻¹
- =C–H bend: 1000–650 cm⁻¹

**Alkynes**：

- C≡C stretch: 2260–2100 cm⁻¹
- ≡C–H stretch: 3330–3270 cm⁻¹
- ≡C–H bend: 700–610 cm⁻¹

**Aromatic compounds**：

- C–H stretch: 3100–3000 cm⁻¹
- Overtones (weak): 2000–1665 cm⁻¹
- C–C in-ring stretch: 1600–1585 cm⁻¹
- C–C in-ring stretch: 1500–1400 cm⁻¹

### C–O bond (Alcohols, Aldehydes, Ketones, Esters, Acids)

**Alcohols**：

- O–H stretch (H-bonded): 3500–3200 cm⁻¹（寬峰）
- C–O stretch: 1260–1050 cm⁻¹（strong）

**Ketones**（alkyl C=O）：

- C=O stretch: 1715 cm⁻¹
- α,β-unsaturated ketone: 1685–1666 cm⁻¹

**Aldehydes**：

- 特徵：C–H stretch 2830–2695 cm⁻¹（**2720 shoulder peak** 就在 alkyl C–H stretch 右側）
- C=O stretch: 1740–1720 cm⁻¹
- α,β-unsaturated aldehyde: 1710–1685 cm⁻¹

**Esters**：

- C=O stretch: 1750–1735 cm⁻¹
- α,β-unsaturated ester: 1730–1715 cm⁻¹
- C–O stretch: 1300–1000 cm⁻¹

**Carboxylic acids**：

- C=O stretch: 1760–1690 cm⁻¹（強、寬）
- O–H stretch: 3300–2500 cm⁻¹（特寬）
- C–O stretch: 1320–1210 cm⁻¹
- O–H bend: 1440–1395、950–910 cm⁻¹

### Organic Nitrogen Compounds

- N–O asymmetric stretch: 1550–1475 cm⁻¹
- N–O symmetric stretch: 1360–1290 cm⁻¹

### Organic Halogen Compounds (Alkyl halides C–X, X = F/Cl/Br/I)

- C–H wag (–CH₂X): 1300–1150 cm⁻¹
- C–X stretch (general): 850–515 cm⁻¹
  - C–Cl: 850–550 cm⁻¹
  - C–Br: 690–515 cm⁻¹

### Fingerprint Region 特別說明

- 1400–600 cm⁻¹ 稱為 fingerprint region
- 峰多、重疊、難單獨指派
- 但對不同化合物**獨一無二**，就像指紋 → 可用來**確認是哪個分子**
- Focus 分析放在 > 1500 cm⁻¹（特徵官能基區），用 fingerprint 做最終確認

### 生物分子 FTIR 範例（蛋白質、脂質、核酸、醣）

- **Protein**: Amide I (C=O) ~1650、Amide II ~1540 cm⁻¹
- **Lipid**: C–H stretch 2850–2950、C=O 1740
- **Nucleic acid**: phosphate PO₂⁻ ~1080、1240 cm⁻¹
- **Carbohydrate**: C–O stretch 1200–900 cm⁻¹

### MOF-801 範例（金屬-有機框架）

- 3400 cm⁻¹: O–H stretch（配位水、吸附水）
- 1578 cm⁻¹: 羧酸鹽 COO⁻ 反對稱
- 1403 cm⁻¹: 羧酸鹽 COO⁻ 對稱
- 1650 cm⁻¹: C=O
- 低波數區（655、796、983、1211、491）：金屬-氧 / 骨架振動

---
