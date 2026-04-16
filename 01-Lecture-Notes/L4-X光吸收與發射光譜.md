---
科目: 分析化學
章節: L4
標題: X 光吸收光譜（XAS）與發射光譜（Emission / Fluorescence / Phosphorescence）
日期: 2026-03-27
tags:
  - 分析化學
  - XAS
  - XANES
  - EXAFS
  - fluorescence
  - phosphorescence
  - 同步輻射
---

# L4 X 光吸收光譜 (XAS) 與發射光譜

## Part 1: X-ray Absorption Spectroscopy (XAS)

### 定義與原理

**XAS** 是基於高能 X 光與特定原子的**core-shell 電子（內層電子）** 交互作用的光譜技術。透過掃瞄 X 光能量，可以探知元素的**身份、氧化態、局部結構環境**。

### 基本物理過程

1. **Photoelectric Absorption（光電吸收）→ Absorption Edge（吸收邊）**
   - 當入射 X 光光子能量 = 或 > core-shell 電子（K shell、L shell）的 binding energy → 原子**吞掉**光子
   - 電子被踢出原子，留下 "core-hole" → 形成 photoelectron
   - 此特定能量下吸收係數出現尖銳的 jump → 稱為 **absorption edge**

2. **Photoelectron Propagation（光電子波傳播）**
   - 放出的 photoelectron 表現為**波**（wave-particle duality），從吸收原子向外傳播
   - 波長取決於動能，即 (入射 X 光能量 − binding energy)

3. **Scattering and Interference（散射與干涉）**
   - 光電子波遇到鄰近原子時被**散射**回原吸收原子
   - 原波與反射波發生**建設性/破壞性干涉**
   - 在 absorption edge 後面的區域，μ(E) 會出現振盪結構 → **XAS 的資訊來源**

### Absorption Edge 命名規則

由被激發的 core 電子**主量子數 n** 決定：

- **K edge**：n=1（1s 電子被踢出）
- **L edge**：n=2（2s 或 2p 電子）
  - L₁ edge: 2s
  - L₂ edge: 2p₁/₂
  - L₃ edge: 2p₃/₂（spin-orbit coupling 分裂）
- **M edge**：n=3（3s、3p、3d 電子）

每個元素的 K、L、M 邊對應該原子的**電子結合能**，因此**每個元素都有獨一無二的 edge energy**，這就是 XAS 元素專一性的來源。

範例能量：

- Mo K edge: 20.0 keV
- Cu K edge: 9.0 keV
- Ni K edge: 8.3 keV
- Fe K edge: 7.1 keV
- Mn K edge: 6.5 keV
- S K edge: 2.5 keV
- U L_III edge: 17.2 keV
- W L_III edge: 10.2 keV

---

### XAS 能量分類（考點）

以 X 光能量分為三類，決定**穿透深度與可測元素**：

| 類別           | 能量範圍 | 測量元素/邊                                                          | 測量環境                                        | 優點                                                                              |
| -------------- | -------- | -------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| **Hard XAS**   | > 5 keV  | K-edges of 過渡金屬（Fe, Co, Ni, Pt, Au）、heavy elements 的 L-edges | 環境大氣下可做                                  | 穿透深，適合 **in situ** 測量                                                     |
| **Tender XAS** | 2–5 keV  | P、S 的 K-edges                                                      | 需 He-purged 或 low vacuum（N₂、O₂ 會嚴重吸收） | energy 科學關鍵元素                                                               |
| **Soft XAS**   | < 2 keV  | 輕元素 (B, C, N, O, F) K-edges、3d 過渡金屬 (Ti, V, Cr, Mn) L-edges  | **Ultra-High Vacuum (UHV)**（幾公分空氣就擋光） | 最敏感於電子結構與化學鍵（orbital occupancy），測有機分子、聚合物、金屬氧化物最佳 |

**記憶口訣**：Hard 硬 = 穿透強 / 空氣可行 / 測金屬 K；Tender = 中間 / He 吹掃 / P/S；Soft 軟 = UHV / 輕元素 / L-edge 電子結構

---

### K-edge vs L-edge XAS（考點）

#### K-edge XAS

- **電子躍遷**：1s 電子激發（n=1）
- **能量範圍**：hard X-ray（> 4 keV）
- **適合做 EXAFS**：決定**鍵長、配位數、鄰近原子種類**
- **穿透深**，可進樣品深處
- 對氧化態與整體幾何對稱性（tetrahedral vs octahedral）敏感

#### L-edge XAS

- **電子躍遷**：n=2 shell 的 2s 或 2p 電子
- **能量範圍**：soft X-ray（0.1–2 keV）
- 因**spin-orbit coupling**，2p 分裂為 **L₂ (2p₁/₂)** 和 **L₃ (2p₃/₂)** 兩個 edge
- 對過渡金屬，L-edge 直接**探測 2p → 3d 躍遷**，是研究**軌道佔據、磁性、金屬-配位子共價性**最敏感的技術
- L-edge peaks 通常比 K-edge 尖（有時稱 "white lines"），提供更詳細的電子結構「指紋」

### 選擇定則（Selection Rules for XAS）

**Electric dipole transition**（主要）：

- Δl = ±1
- K edge (1s, l=0) → p (l=1)
- L edge (2s, l=0) → p；(2p, l=1) → s 或 d

**Quadrupole transition**（much weaker）：

- Δl = ±2
- K edge: s → d, p → f

**推論**：

- **K edge 1s → 3d 是 dipole-forbidden**（Δl = 2），只能發生 quadrupole
- **L₂,₃ edge 2p → 3d 是 dipole-allowed**（Δl = 1）
- 所以 L-edge 對 3d 過渡金屬探測效率**遠高於** K-edge pre-edge

其他定則：

- ΔS = 0（spin 不變）
- ΔL = 0, ±1（但 L=0 → L=0 禁止）
- ΔJ = 0, ±1（J=0 → J=0 禁止）

---

### XANES vs EXAFS（重要考點！）

XAS 光譜按能量位置分成兩段：

| 區段               | 全名                                                                             | 能量相對吸收邊      | 資訊                                             | 特點                                 |
| ------------------ | -------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------ | ------------------------------------ |
| **XANES / NEXAFS** | X-ray Absorption Near Edge Structure / Near Edge X-ray Absorption Fine Structure | edge 附近 ~10–40 eV | **氧化態、d-軌道填充、對稱性**                   | 光電子低動能（k 小），多重散射主導   |
| **EXAFS**          | Extended X-ray Absorption Fine Structure                                         | edge 以上 > 40 eV   | **鍵長、配位數、鄰近原子種類、原子間距、雜亂度** | 光電子高動能（k 大），單散射近似可用 |

**資訊差別**：

- **XANES**：能量接近原子 core level ionization energy，提供**電子結構**（氧化態、orbital occupancy）、**對稱性**（tetrahedral vs octahedral vs square planar）
- **EXAFS**：能量遠離吸收邊，光電子動能大、散射長度長，提供**局部幾何結構**（first、second shell 原子距離與數量）

### XANES Case Study（考點範例）

1. **Change of Oxidation State**：MnO → Mn₂O₃ → MnO₂，隨氧化態升高，K-edge 位置**往高能量移**
2. **Change of Symmetry**：
   - Co(II) octahedral vs [CoCl₄]²⁻ tetrahedral → pre-edge 的位置/強度不同
   - Ni²⁺ octahedral vs square planar → XANES 特徵不同
3. **Change of donor type**：NiO vs NiS（換配位原子）→ edge 形狀改變

### Mn K-edge Case Study 定量細節（必考）

針對 MnO、Mn₂O₃、MnO₂ 的 Mn K-edge XANES：

- **主 edge 躍遷**：**1s → 4p**（dipole-allowed，Δl = ±1）
- **Edge energy 隨氧化態升高而紅移 → 高能量**：
  - **MnO (Mn²⁺)** ≈ 6546 eV
  - **Mn₂O₃ (Mn³⁺)** ≈ 6549 eV
  - **MnO₂ (Mn⁴⁺)** ≈ 6552 eV
- 三者的 Mn 幾何環境都是 **Octahedral**，圖上可套八面體配位多面體
- **圖判技巧**：從 inset 放大看 edge shift 直接對應氧化態，在 edge energy 與氧化態做線性外插 → 未知樣的氧化態

### Fe K-edge vs L₂,₃-edge Case Study

**[Fe(tacn)₂]Cl₃ vs [Fe(tacn)₂]Cl₂**（同一系統、不同氧化態）

**(a) K-edge**：
- Pre-edge peak 在 ~7112 eV 對應 **1s → 3d**（dipole-forbidden，只能 quadrupole，小峰）
- Main edge ~7120 eV 對應 **1s → 4p**（主要邊緣）
- K-edge 提供的主要資訊：**氧化態、整體對稱性**

**(b) L₂,₃-edge**：
- L₃ ≈ 705 eV（2p₃/₂ → 3d）
- L₂ ≈ 720 eV（2p₁/₂ → 3d）
- **2p → 3d 是 dipole-allowed**，峰比 K-edge 尖、強度高、細節更豐富
- L₂,₃ 能分辨 **low-spin vs high-spin**：
  - Low-spin d⁶（Fe²⁺, [Fe(tacn)₂]²⁺）：t₂g 滿、eg 空 → L₃ 為單峰
  - High-spin d⁵（Fe³⁺, [Fe(tacn)₂]³⁺）：t₂g³eg² → L₃ 分裂成兩峰（對應到 t₂g、eg）
- **結論**：L-edge 對 3d 過渡金屬的**電子結構、自旋態、晶場分裂**遠比 K-edge 敏感

### XAS 適合的樣品類型（考點）

XAS 可以研究多種材料形態：
- **Nanocrystalline / amorphous** 材料
- **Very thin films**（表面 & 界面化學）
- **Supported materials**（催化劑載體）
- **Multicomponent / nanocomposites**（含多元素複合材料）
- **Ordered vs disordered** 系統（對比）
- **In situ / operando / short-lived states**（即時追蹤反應中間物）

### EXAFS Case Study

- **Fe/C(100)** 的 EXAFS：可看到 radial distribution peaks
- **bcc Fe** vs **fcc Cu** 的 EXAFS 可比對晶格類型
- 金屬 Cu = FCC（Face Centered Cubic），r₁ = 最近鄰距離、r₂, r₃… = 更遠殼層

### EXAFS 公式

```
χ(k) = −(S₀²/k) · Σ_s [N |f_s(π,k)| / R_s²] · exp(−k²σ²) · exp(−2R_s/λ) · sin(2kR_s + φ_s(k))
```

變數意義：

- **N**：coordination number（配位數）
- **σ²**：Debye-Waller factor（熱擾動）
- **R**：interatomic distance（鍵長）
- **λ**：electron mean free path（電子平均自由徑）
- **S₀²**：inelastic scattering effect（非彈性散射）
- **k = √(2m(E−E₀)/ℏ²)**：光電子波數（wavenumber）

從 EXAFS 反演（Fourier transform）可以得到**配位殼層的鍵長與配位數**。

---

### 為什麼 XAS 需要 Synchrotron Radiation？

**Synchrotron（同步輻射）** 相對傳統 X-ray tube 的優勢：

1. **High flux**：比 X-ray tube 高 **10⁶ 倍**（百萬倍）
2. **Continuous broad spectrum**：X 光能量範圍極寬（可掃瞄）
3. **Brightness**：photons/(sec·mrad²·mm²·0.1%BW) 遠遠超過實驗室 X 光源
4. **Tunability**：可任意調整 X 光能量，做 energy scan
5. **Time resolution**：快至 10 ms per spectrum（QXAFS）

**強度比較（brightness）**：

- Solar radiation < X-ray generator white light < characteristic X-ray < **bending magnet < wiggler < undulator**

### NSRRC（國家同步輻射研究中心）

- **Taiwan Light Source (TLS)**：1993 年 10 月啟用，亞洲第一、世界第三座第三代同步輻射設施。周長 120 m，電子束能量 1.5 GeV
- **Taiwan Photon Source (TPS)**：2016 年 9 月 19 日啟用。周長 518 m，電子束能量 **3 GeV**

---

### XAS 測量原理（Beer's Law 應用）

```
I_t = I₀ · exp(−μ(E)·x)
⇒ μ(E)·x = ln(I₀/I_t)
```

- I₀：入射 X 光
- I_t：透射 X 光
- μ(E)：X 光吸收係數，依能量變化
- x：樣品厚度

### XAS 的兩種量測模式（結構化整理）

**三個訊號**：I₀ (入射)、I_t (透射)、I_f (螢光)

| 模式 | 量什麼 | 適合樣品 | 說明 |
|---|---|---|---|
| **Transmission mode** | I_t / I₀ | **厚實、均勻、濃度足夠**的樣品 | 直接用 Beer's Law：μx = ln(I₀/I_t)；最準確 |
| **Fluorescence mode** | I_f / I₀ | **稀薄、稀釋、表面、薄膜**樣品 | 偵測 X-ray fluorescence 信號，靈敏度高，適合低濃度 |

**選擇原則**：樣品太薄或太稀 → 透射訊號弱（I_t ≈ I₀） → 改用 fluorescence mode。

### 元素特徵 X-ray 能量速查（考點數字）

| 元素 | K-edge (eV) | L₃-edge (eV) | Kα₁ emission (eV) |
|---|---|---|---|
| **Fe** | 7112 | 707 | 6403 |
| **Co** | 7709 | 778 | 6930 |
| **Ni** | 8333 | 854 | 7478 |
| **Cu** | 8979 | 933 | 8048 |
| **Zn** | 9659 | 1022 | 8639 |
| **Mo** | 20000 | 2520 | 17479 |
| **Cr** | 5989 | 574 | 5415 |
| **Mn** | 6539 | 640 | 5899 |

**使用原則**：
- 想激發某元素的 K-edge → 需要 X 光能量 > 該元素 K binding energy
- K-edge 越高 → 越需要 hard X-ray（重元素）
- L-edge 在 soft X-ray 區（輕過渡金屬需要 UHV）

### Monochromator

用**Silicon crystal（矽單晶）** 做晶體單色器，利用 Bragg diffraction 選出單色 X 光：

```
Collimated white X-ray → Si crystal (兩片) → Outgoing monochromatic light
```

### Detectors

- **Gas ionization chamber**（最常用，測 I₀ 與 I_t）
- **Si solid-state detector**
- **Electron yield detector**（需 He flushing）
- **Lytle detector**（fluorescent X-ray ion chamber）
- **Silicon drift detector / energy dispersive detector**

### Ionization Chamber 填充氣體的選擇（考點）

Gas ionization chamber 是 XAS 最主力的偵測器，但**填什麼氣體要看量測能量**：

| 填充氣體 | 適用能量範圍 | 對應元素 edge |
|---|---|---|
| **N₂** | Soft / low-energy X-ray | 輕元素 K (B, C, N, O)；3d TM L edge |
| **Ar** | Tender / mid-energy | P, S, Cl K edge；3d TM K edge（Ti–Zn）|
| **Kr** | Hard X-ray | 重過渡金屬 K edge (Mo, Ru, Pd)；重元素 L |
| **Xe** | Very hard | 5d TM K edge、稀土 L edge |

**選擇原則**：
- 填充氣體必須**在該能量下有足夠吸收**才能偵測電離訊號
- **太輕（如 N₂）對高能 X 光穿透而過 → 無訊號**
- **太重（如 Xe）對低能 X 光過度吸收 → I₀ 偵測器會耗盡入射光**
- 實務上：I₀ chamber 常用較透明氣體（吸 ~10%），I_t chamber 用較強吸收氣體（吸 ~70%）

---

## Part 2: Emission Spectroscopy

### 三種發射光譜的範疇

1. **Infrared Emission Spectroscopy**
2. **X-ray Emission Spectroscopy (XES)**
3. **Luminescence / Fluorescence spectroscopy**

### Kirchhoff's Law（考點）

「**任意物體在熱力學平衡下，其 emissivity 等於 absorptivity**」在任一給定溫度與波長下成立。

- 推論：**好的輻射吸收體也是好的輻射發射體**
- Perfect blackbody 是終極案例
- 所以把樣品加熱到一定溫度就會發射 IR，可反過來做 IR 發射光譜

### IR Emission Spectroscopy

- 量測樣品因**熱激發**而發射的 IR 輻射
- 分子振動被熱能激發到高能階，放出 IR 光
- 大氣效應：
  - 大部分 IR 被大氣 H₂O、CO₂ 吸收 → 從地面觀測困難
  - Visible window 可從地面觀測
  - 大部分 IR spectrum 須從太空觀測
  - 長 radio waves 也被擋

---

### X-ray Emission Spectroscopy (XES)

"**Photon-in, photon-out**" 技術，探測原子的 **已佔據電子態（occupied electronic states）**。

**三步驟過程**：

1. **Core-hole creation**：入射高能 X 光踢出 core-shell 電子（如 1s）→ 形成不穩定 "hole"
2. **Electronic decay**：較高能 shell（2p 或 valence band）的電子跳下來填 hole
3. **Photon emission**：為守恆能量，原子發射光子，能量 = 兩 shell 差 = **X-ray Fluorescence (XRF)**

### XES 的放射線系列（以 Cr₂O₃ 為例）

- **Kα₁, Kα₂**：2p → 1s（最強，分 2p₃/₂ 與 2p₁/₂）
- **Kβ₁,₃**：3p → 1s
- **Kβ'、Kβ''**：自旋相關的細結構（來自 3p-3d 交互作用）
- **Kβ₂,₅**：價帶（valence） → 1s 躍遷，對**化學鍵**最敏感

### XES 與 XAS 的對比

- XAS（absorption）：探**空的（unoccupied）** 能階
- XES（emission）：探**佔據的（occupied）** 能階
- 兩者互補 → 完整掌握材料電子結構

Soft X-ray XES 特別能分辨**水分子的 molecular orbitals（1a₁、1b₂、3a₁、1b₁、4a₁、2b₂）**，是化學鍵研究利器。

---

## Part 3: Luminescence

### 定義與分類

**Luminescence（發光）** = 物質放出不伴隨熱輻射的光，依激發來源分：

| 類別                    | 激發方式     | 範例                                      |
| ----------------------- | ------------ | ----------------------------------------- |
| **Photoluminescence**   | 吸收光子     | Fluorescence、Phosphorescence             |
| **Cathodoluminescence** | 電子束轟擊   | CRT                                       |
| **Chemiluminescence**   | 化學反應觸發 | 螢光棒、螢火蟲（bioluminescence）         |
| **Electroluminescence** | 外加電場     | OLED                                      |
| **Mechanoluminescence** | 機械作用     | tribo-、fracto-、piezo-、sonoluminescence |
| **Radioluminescence**   | 游離輻射轟擊 | 氚手錶錶盤（tritium）                     |
| **Thermoluminescence**  | 加熱         | —                                         |

---

### Fluorescence Spectroscopy

#### 原理

- 利用**UV 或 visible 光**激發分子電子到激發態
- 電子經短暫停留後回到基態，發出光（**emission**）
- 光導向 filter → detector 測強度與波長

#### Fluorescence vs Phosphorescence（超重要考點！）

| 性質        | Fluorescence                   | Phosphorescence                                          |
| ----------- | ------------------------------ | -------------------------------------------------------- |
| 激發態 spin | **Singlet 激發態 S₁**          | **Triplet 激發態 T₁**                                    |
| 自旋變化    | 不改變（spin-allowed）         | 需 spin flip（ISC 後進入 T₁，T₁ → S₀ 是 spin-forbidden） |
| 發生速率    | 快，10¹⁰–10⁷ s⁻¹               | 慢，10⁵–10⁻³ s⁻¹                                         |
| 激發態壽命  | 奈秒級（~ns）                  | **毫秒到小時**（~ms–h）                                  |
| 移除光源後  | 幾乎馬上停止                   | 仍持續發光（"glow-in-the-dark"）                         |
| 發射能量    | 較高、波長較短                 | 較低、波長較長（紅移）                                   |
| 範例        | 螢光筆、螢光染料 GFP、螢光礦物 | 夜光標示、EXIT 逃生指示牌                                |

#### 能階流程

```
吸收 → S₁（singlet 激發態）
   ↓ 振動弛豫 (vibrational relaxation) → S₁ 最低振動
   ├── 直接 fluorescence → S₀（ns 時間內結束）
   └── ISC (intersystem crossing) → T₁（triplet 激發態）
        ↓ phosphorescence → S₀（慢，ms–h）
```

**ISC (Intersystem crossing)** = 從 singlet 到 triplet 的「禁止」轉換（需自旋翻轉），但在重原子效應或自旋-軌道耦合下仍可發生。

### Jablonski 圖的速率常數比較（為什麼螢光比磷光常見？）

分子到 S₁ 後有多條衰減路徑，各自有自己的速率常數 k：

```
k_f    : Fluorescence rate（S₁ → S₀ 發光）
k_IC   : Internal Conversion rate（S₁ → S₀ 無輻射，熱耗散）
k_ISC  : Intersystem Crossing rate（S₁ → T₁，需自旋翻轉）
k_p    : Phosphorescence rate（T₁ → S₀ 發光）
```

**速率大小關係**：
- **k_IC > k_ISC**（IC 比 ISC 快很多，因為 ISC 要 spin flip，ISC 是被禁止的）
- k_f ≈ 10⁶–10⁹ s⁻¹（快）
- k_p ≈ 10⁻¹–10³ s⁻¹（慢很多）

**量子產率 (Quantum Yield) Φ**：
```
Φ_f = k_f / (k_f + k_IC + k_ISC)
Φ_p = Φ_ISC × k_p / (k_p + k_nr)
```

**結論**：
- **大多數有機分子的螢光比磷光常見**，因為 ISC 是禁止躍遷，k_ISC 通常很小
- 含**重原子**（Br、I、Pt、Pd、Ir）的分子會顯著提高 k_ISC（spin-orbit coupling 增強）→ 磷光顯著
- 所以夜光材料常含**重金屬錯合物**（如 Ir(III)、Pt(II) 錯合物）

### Singlet vs Triplet State（重要）

#### Singlet State (S₀, S₁)

- 兩個電子自旋**相反配對**（一個 up、一個 down）
- Total spin S = 0
- Spin multiplicity (2S+1) = **1**
- 能階記號：1/√2 (|↑↓⟩ − |↓↑⟩)
- 大多數有機分子的**基態**是 singlet（所有電子在最低軌道成對）
- 從 S₁ → S₀ 的躍遷是**spin-allowed**，「快而允許」

#### Triplet State (T₁)

- 兩個電子自旋**平行**（兩個都 up 或都 down）
- Total spin S = 1
- Spin multiplicity (2S+1) = **3**
- 能階記號：1/√2 (|↑↓⟩ + |↓↑⟩)，|↑↑⟩，|↓↓⟩
- Triplet 通常**能量低於**對應的 singlet 激發態（因為平行自旋使電子間排斥較小）
- 從 T₁ → S₀ 需要自旋翻轉 → **spin-forbidden**，「慢而禁止」→ 造成長壽命的 phosphorescence

### Stokes Shift（重要）

- 定義：**最大吸收波長與最大發射波長的差**
- 為什麼有 Stokes shift？
  - 分子吸收光 → 跳到較高振動態的 S₁
  - 在 S₁ 內發生**vibrational relaxation**（以熱形式耗散能量）到 S₁ 最低振動態
  - 再由最低振動態發出 fluorescence → 發射的光能量**較低**、波長**較長**

### Fluorescence Spectrometer 架構

```
Light source → Excitation monochromator → Sample → Emission monochromator → Detector
```

- **兩個 monochromator**：一個選激發波長、一個選發射波長
- Sample 常放在 90° 位置以減少散射光干擾

### Case Studies

#### C-Dots（碳量子點）

- UV-Vis absorption spectrum + fluorescence emission spectrum
- 日光下看是**黃色**，UV 照射下發**藍色螢光**（365 nm UV）
- 可用於**抗-嗎啡 antibody 標記** → 測嗎啡濃度（3.2×10⁻⁴ ~ 10 mg/L）
- 定量：FL 強度 vs morphine concentration 呈線性

#### Quantum Dot Bioconjugates（CdSe 量子點）

- **粒徑可調的發射光譜**：小粒徑 → 藍綠發射；大粒徑 → 紅發射
- 覆蓋 480–640 nm 全段
- 原理：**量子侷限效應**，粒徑越小 → 能階越寬 → 發光越藍
- 應用：生物檢測、細胞影像、診斷

#### PL Decay 的 lifetime 對比

- **Fluorescein（螢光素）**：FL decay lifetime **16 ns**
- **Eu₂O₃**：phosphorescence decay lifetime **120 μs**（相差千倍以上）

#### GaAs Wafer Surface Nitridation（定量細節，必考圖判）

**實驗設計**（三步驟）：
1. **Step 1**：GaAs 表面原生氧化層（naturally oxidized，有 Ga₂O₃、As₂O₃、dangling bonds）
2. **Step 2**：去氧化（deoxidized）→ 露出乾淨 GaAs 表面
3. **Step 3**：用 **N₂H₄**（肼）處理 → 表面氮化，形成 GaAs_xN_y 層鈍化懸鍵

**量測條件**：
- **Excitation photon energy**：**1.6 eV**
- **Photon flux**：**1.9 × 10¹³ photons·cm⁻²·pulse⁻¹**
- **Nitridation 處理時間**：**10 min**
- 量 **Time-Resolved PL (TRPL)** 的 carrier lifetime

**結果（圖判重點）**：
- **PL intensity**（穩態）：Naturally oxidized < Deoxidized < **Nitrided**（增強最多）
- 峰位置：約 **820–920 nm**（GaAs band-edge emission）
- **TRPL decay lifetime**（動力學）：隨處理時間上升，**ps 等級**
  - Naturally oxidized ≈ 最短（缺陷多、非輻射重組快）
  - Deoxidized ≈ 中等
  - **Nitrided 10 min ≈ 最長**（缺陷被鈍化）
- **結論**：nitridation 能**鈍化表面懸鍵** → 降低 non-radiative recombination → 延長 carrier lifetime → 增強 PL

**技術意涵**：PL（特別是 TRPL）是**評估半導體表面缺陷與載子動力學**的非破壞性方法。

---
