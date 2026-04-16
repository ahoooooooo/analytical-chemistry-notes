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

當分子吸收 UV-Vis 光，**valence electrons（價電子）從基態提升到激發態**。主要三種躍遷：

1. **π → π\***：發生於**不飽和化合物**（有 C=C, C=O, …）
2. **n → π\***：發生於**有 lone pair 的分子**（含 N、O 等原子）
3. **d–d transitions**：發生於**過渡金屬錯合物**，是錯合物呈現**鮮豔顏色**的主因

其他還會看到：

- **Charge transfers（電荷轉移）**
- **Plasmon resonance**（奈米金屬粒子）
- **Band gap transitions**（半導體）

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

Allowed：singlet → singlet、triplet → triplet
Forbidden：singlet → triplet、triplet → singlet（會改變自旋多重度 spin multiplicity）

**推論**：

- Spin-forbidden 躍遷仍然可能發生，但機率很低 → 吸收/發射訊號很**微弱**
- 在配位化合物中，d–d 躍遷常受 spin selection rule 影響，這也解釋了它們的顏色與強度
- **High spin d⁵** 的組態（如 [Fe(F₆)]³⁻）：e_g 與 t₂g 全填單一電子（5 個自旋相同），任何 d–d 躍遷都會改變自旋 → **No spin transition allowed**（這就是 high-spin d⁵ 配合物顏色很淡的原因）

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

A = log(I₀/I) = ε·c·l

- I₀：入射強度
- I：穿過樣品後的強度
- ε：molar absorptivity（extinction coefficient）
- c：濃度
- l：path length

對於**非均勻樣品**需做非線性校正（Iₒ/I 的指數衰減修正）。

---

## (1) Light Sources（光源）

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

### Single beam

```
Source → Monochromator → Sample → Detector
```

- 只有一條光路，先量 reference（blank）再換 sample
- 簡單便宜

### Double beam

```
          ┌→ Reference → Detector 1
Source → 分束
          └→ Sample → Detector 2
```

- 光分成兩路，**同時**通過參考與樣品
- 自動補償光源漂移、偵測器漂移
- 結果更穩定、儀器更貴

**關鍵元件：Rotating Mirror / Chopper**
- 實際 double-beam 儀器常用**旋轉鏡（rotating sector mirror）或斷續器（chopper）**
- 機制：旋轉鏡以固定頻率（通常幾十 Hz）將光源**輪流切換**到 reference 與 sample 光路
- 偵測器接收到**交替訊號**，再用鎖相放大器（lock-in amplifier）分離
- 效益：
  - 同一偵測器可量兩路光 → 消除偵測器間靈敏度差異
  - 消除光源慢漂移（時間尺度長於 chopper 頻率）
  - 等效「**準同時雙光束**」

---

## (4) Dispersion Device（分光元件）

兩大選擇：

### Prism（稜鏡）

- 利用**折射率隨波長變化** → 色散
- 短波長（UV/藍）折射角大，長波長（Red/IR）折射角小
- **色散非線性**
- 優點：stray light 少、高精密應用好
- 缺點：解析度較差、老派

### Grating（光柵）

- **diffraction（繞射）** 分光
- **色散線性、等波長間距**，所有波長解析度相同
- 現代 UV-Vis 幾乎都用 grating
- 優點：整譜解析度高

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

**結構**：photocathode（光電陰極）→ 多級 dynodes → anode

**原理**：

1. 光子打 photocathode → 放出電子
2. 電子在電場作用下打到 dynode → **二次發射（secondary emission）** 放出更多電子
3. 經過 ~10 級 dynodes → 電流增益 10⁶~10⁷ 倍
4. 最後由 anode 收集 → 外部電路放大輸出

**特點**：

- 對**稀釋樣品**或**低光訊號**靈敏度極高
- **寬光譜響應、高 SNR、高穩定性**
- 必須有低 noise，才能在高光強下分辨 blank 與 sample 的微小差異

### Silicon Photodiode

- 光打到半導體 → 電子從 valence band 躍遷到 conduction band → 產生電荷
- 電荷對光強度**線性響應**
- 優點：動態範圍寬、robust、response 快、noise 低、便宜
- 缺點：UV 與 Vis 區靈敏度**比 PMT 差**，但對於不需極高靈敏度的應用夠用

### Diode Array Detector（重要）

- **multichannel photon detector**，由多個 photodiodes 排成 array
- 搭配 grating 把整個光譜**同時**投影到 array 上
- 優點：
  - **同時測量所有波長**（不用掃瞄）
  - 相比 PMT 無光學對準問題
- 缺點：個別像素靈敏度低於 PMT

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

- 儀器 stray light 差 → Beer's Law 線性偏離
  - 0% stray light → 理想線性
  - 0.1% → 輕微偏離（高 A 時顯著）
  - 1% → 明顯偏離
  - 10% → 嚴重偏離
- 樣品吸收越高 → 到達偵測器的光越少 → SNR 下降、信號出現 spiky noise

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

**Tauc plot** 方法：

- 從 UV-Vis 吸收譜算半導體的光學 band gap Eg
- 公式（amorphous 半導體，Tauc 1966）：
  ```
  (α·hν)^(1/2) = B(hν − Eg)
  ```
- α：energy-dependent absorption coefficient
- hν：photon energy
- B：band tailing parameter（amorphous 材料取 1）

- **晶體半導體**：把 1/2 指數換成 γ⁻¹：
  - γ = 1/2（direct allowed）
  - γ = 2（indirect allowed）
  - γ = 2/3（direct forbidden）
  - γ = 3（indirect forbidden）

**操作**：畫 (α·hν)^(1/γ) vs hν 的 Tauc plot → 取線性段外插到 x 軸 → 截距 = Eg

**範例**：TiO₂ / MO + TiO₂ 複合物的 Tauc plot 分析：

- 純 TiO₂ Eg ~3.22 eV
- 加 MO 後 Eg 微調

---

## Exercise 解答（考試題型）

### Q1. In the IR spectrum of aromatic compound, C–H stretching vs C–C stretching 哪個頻率較高？用 bond strength（力常數）與 reduced mass 解釋。

**答**：**C–H stretching 頻率較高**。

- 由 Hooke's Law：v̄ = (1/2πc)·√(f/μ)
- **μ（reduced mass）**：C–H 中 H 很輕 → μ_CH ≈ 0.92；C–C 中兩個 C → μ_CC ≈ 6 → μ_CH ≪ μ_CC → v̄_CH > v̄_CC
- **f（力常數）**：雖然 aromatic C–C 有部分雙鍵性質（force constant 比單鍵強），但 C–H 力常數也不低
- 綜合：**μ 的差異主導 → C–H 振動頻率遠高於 C–C 振動**
- 數據對照：aromatic C–H stretch 3100–3000 cm⁻¹；aromatic C–C stretch 1600–1400 cm⁻¹

### Q2. Grating-based IR spectroscopy 與 FTIR 的主要差別？

**答**：

- **Grating-based IR**：用 grating monochromator 一次挑選**一個波長**送進 sample，掃全頻需逐波長進行
  - 慢、SNR 較差、解析度較差
- **FTIR**：用 **Michelson interferometer** **同時量測所有 IR 頻率**，得到 interferogram，經過 Fast Fourier Transform 轉成光譜
  - 快（數秒完成）
  - SNR 更好（multiplex/Fellgett 優勢：所有頻段同時收訊，噪音被平均）
  - 解析度更高（Δv̄ = 1/δ_max，動鏡位移越大解析度越高）
- **應用**：兩者都用於辨識官能基與化合物

### Q3. 哪種 detector 可以同時用在 IR（FTIR）與 UV-Vis-NIR 吸收光譜儀？

**答**：**InGaAs photodiode**

- 波長範圍 800–2500 nm，橫跨 **Vis–NIR–短波 IR（SWIR）**
- UV-Vis-NIR 儀器常用作 NIR 通道的偵測器
- 在 FTIR 的 near-IR 區也能用（例：12500–3800 cm⁻¹ 範圍的 InGaAs/glass 偵測器）
- 另一個候選：**PbS**（1000–3500 nm），也能橫跨 near-IR 區，常見於 UV-Vis-NIR 儀器與 near-IR FTIR

---

## 重要公式與數字

```
A = log(I₀/I) = εcl                Beer-Lambert Law
ΔS = 0                             Spin selection rule
(αhν)^(1/2) = B(hν − Eg)           Tauc plot (amorphous)
(αhν)^(1/γ) vs hν                  Tauc plot (crystalline, γ=1/2,2,2/3,3)

UV 範圍:            200–400 nm
Visible:            400–800 nm
D2 lamp:            185–400 nm (UV 連續)
Tungsten-halogen:   350–3000 nm (Vis-NIR)
Xenon flash:        185–2500 nm (整段)

Quartz cuvette:     170–2700 nm (UV/Vis/NIR 全通)
Optical glass:      334–2500 nm (不能 UV)
Plastic:            340–800 nm  (便宜)

Silicon photodiode: 170–1100 nm
PMT:                200–900 nm (高靈敏度)
InGaAs:             800–2500 nm
PbS:                1000–3500 nm
```

---

## Flashcards

UV-Vis spectroscopy 的波長範圍？::UV 200–400 nm，Visible 400–800 nm
UV-Vis 與 IR 激發的能階有何不同？::UV-Vis 激發電子躍遷，IR 激發分子振動
UV-Vis 三種主要電子躍遷？::π→π*（不飽和化合物）、n→π*（有 lone pair）、d-d（過渡金屬錯合物）
為什麼過渡金屬錯合物常有鮮豔的顏色？::因為 d-d 躍遷吸收 visible 光
UV-Vis 的 spin selection rule？::ΔS = 0；允許 singlet→singlet、triplet→triplet；禁止改變 spin 多重度
為什麼 high-spin d⁵ 配合物顏色淡？::5 個 d 電子自旋相同，任何 d-d 躍遷都會改變自旋 → spin-forbidden
UV-Vis 吸收峰為何是寬峰不是尖峰？::振動與旋轉能階疊加在電子能階上，吸收峰是多個躍遷的包絡線
Beer-Lambert Law 的公式？::A = log(I₀/I) = εcl
UV-Vis 歷史三大光源？::Deuterium D2 lamp (UV)、Tungsten-halogen (Vis/NIR)、Xenon flash (全段)
D2 lamp 的特性？::UV 連續光源 185–400 nm，但 noise 高，half-life 只有 ~1000 hr
Tungsten-halogen lamp 的特性？::Vis–NIR 350–3000 nm、低 noise、壽命 ~10000 hr
Xenon flash lamp 的優勢？::185–2500 nm 單一光源覆蓋 UV+Vis+NIR，閃燈式短曝光適合光敏樣品，不需暖機
做 UV 測量一定要用哪種 cuvette？為什麼？::Quartz（170–2700 nm），玻璃與塑膠在 UV 會自己吸收
Optical glass cuvette 的波長範圍？::334–2500 nm，不能測 UV
UV 分析常見的首選溶劑？::水（UV 透過性好）
Single beam 與 double beam 的差別？::Single 一條光路需分次量參考與樣品；Double 同時量參考與樣品可自動補償漂移
Prism 與 Grating monochromator 的色散差別？::Prism 用折射率色散非線性；Grating 用繞射色散線性、解析度更好，現代主流
哪種材質的色散力最強？::Diamond，Δn (410–660 nm) ≈ 0.048
UV-Vis detector 的共同物理原理？::光電效應（photoelectric effect）
PMT 的工作原理？::光子打 photocathode 放出電子 → 經多級 dynode secondary emission 放大 10⁶ 倍 → anode 收集
為什麼 PMT 適合測稀溶液？::低光訊號下靈敏度極高、noise 低、寬光譜響應
Silicon photodiode 相對於 PMT 的優劣？::動態範圍寬、快、noise 低、便宜；但 UV/Vis 靈敏度比 PMT 差
Diode array detector 的優點？::多通道同時量所有波長，無對準問題，掃瞄快
NIR 區最常用的偵測器？::PbS photoresistor（1000–3500 nm），InGaAs photodiode（800–2500 nm）
UV-Vis 對水溶液友善的原因？::水在 UV-Vis 區幾乎不吸收
UV-Vis 的主要缺點？::結構資訊有限、複雜樣品吸收峰重疊、UV 溶劑透明度受限
什麼是 Tauc plot？::從 UV-Vis 吸收譜計算半導體光學 band gap 的方法
Amorphous 半導體的 Tauc plot 公式？::(αhν)^(1/2) = B(hν − Eg)
Tauc plot 如何求 Eg？::畫 (αhν)^(1/γ) vs hν，取線性段外插到 x 軸，截距 = Eg
為什麼奈米金粒子能用 UV-Vis 測粒徑？::plasmon resonance 吸收峰位置隨粒徑變化（粒徑越大越紅移）
可同時用在 IR 與 UV-Vis-NIR 的 detector？::InGaAs（800–2500 nm）與 PbS（1000–3500 nm）都能跨到 near-IR
aromatic 化合物中 C-H stretch 與 C-C stretch 哪個波數較高？為什麼？::C-H 較高（~3000 vs ~1500 cm⁻¹），因為 μ_CH 遠小於 μ_CC（H 原子很輕），由 v̄ ∝ 1/√μ 決定
FTIR 相對 grating IR 最大優勢？::同時量全波段（multiplex 優勢）、更快、更高 SNR、更高解析度
為什麼 UV-Vis 可做定量？::Beer-Lambert Law：吸光度與濃度成正比
