---
科目: 分析化學
章節: L5
標題: X 光繞射光譜（Diffraction Spectroscopy / XRD）
日期: 2026-04-10
tags:
  - 分析化學
  - XRD
  - Bragg
  - 晶體學
  - 儀器分析
---

# L5 X 光繞射光譜（XRD / Diffraction Spectroscopy）

## 核心定義

**X-ray Diffraction (XRD)**：利用單色 X 光與晶體材料交互作用，透過 **constructive interference（建設性干涉）** 量測散射 X 光角度與強度，進而決定材料的**原子與分子結構**。是**非破壞性**分析技術。

---

## Bragg's Law（最重要！）

### 公式

```
n λ = 2d sin θ
```

| 符號 | 意義                                                    |
| ---- | ------------------------------------------------------- |
| n    | 繞射級數（n = 1, 2, 3…）                                |
| λ    | 入射 X 光波長                                           |
| d    | **interplanar spacing**（平行原子層之間的距離）         |
| θ    | **Bragg angle**（入射光與晶面之間的夾角，**不是法線**） |

### 物理意義

- X 光打到晶體 → 被不同晶面上的原子散射
- 從**第二層**反射的光比第一層多走了一段距離 → **path difference**
- 若此 path difference **等於波長整數倍** → 建設性干涉（峰出現）
- 若不是整數倍 → 破壞性干涉（光互相抵消）

### 幾何推導

從相鄰兩晶面反射的光，多走路徑 = **2d sinθ**

```
2d sin θ = nλ  (建設性干涉條件)
```

只有滿足這條件的 (θ, d, λ) 組合才會出現 XRD 峰。

---

## XRD 能提供什麼資訊（考點）

XRD pattern = 材料的**指紋（fingerprint）**。可取得：

1. **Phase identification（相鑑定）**：辨識物質的確切形式
   - 範例：TiO₂ 的 **anatase**（101 峰）、**rutile**（110 峰）、**brookite** 三種相
2. **Crystallinity（結晶度）**：材料是**有序（crystalline）還是無序（amorphous）**
3. **Lattice parameters（晶格參數）**：計算 unit cell 的形狀與大小（a、b、c、α、β、γ）
4. **Crystallite size（晶粒大小）**：用 **Scherrer equation** 從峰寬推估
5. **Residual stress（殘餘應力）**：由峰位置偏移判斷材料是否有內張/內壓應力

---

## XRD 光源：In-house X-ray Tube（非同步輻射實驗室版）

### Sealed Tube 結構

- 真空玻璃或陶瓷封裝管
- **Cathode（陰極）**：tungsten 鎢絲 → 電熱（thermionic emission）放出電子
- **Anode（陽極/靶）**：金屬塊（最常 **Cu**）施加高正電壓（例 **40 kV**）
- 高速電子撞擊靶金屬 → 產生 X 光
- **冷卻**：99% 能量轉成熱 → 必須用冷卻水持續降溫防熔化

### X 光光譜結構

從金屬靶產生的 X 光同時有：

- **Characteristic X-rays（特徵 X 光）**：**Kα、Kβ** 等尖峰 → 用於 XRD
  - 機制：入射電子踢出 K shell 電子 → L/M shell 電子回填 → 發射特徵光子
- **Bremsstrahlung continuum（煞車輻射連續譜）**：電子在靶中被減速產生的連續 X 光背景

### 特徵 X 光的電子殼層來源（考點）

| 線名 | 躍遷 | 能階來源 | 相對強度 |
|---|---|---|---|
| **Kα₁** | **L₃ → K**（2p₃/₂ → 1s） | L shell | 最強 |
| **Kα₂** | **L₂ → K**（2p₁/₂ → 1s） | L shell | 次強（約 Kα₁ 的一半）|
| **Kβ** | **M → K**（3p → 1s） | M shell | 中等 |
| **Kβ'** | 價帶 → K | valence | 弱 |

**重點**：
- **Kα 來自 L shell 電子填補 K hole**
- **Kβ 來自 M shell 電子填補 K hole**
- Kα₁ 比 Kα₂ 強（2p₃/₂ 比 2p₁/₂ 有較多電子），**spin-orbit coupling** 讓 2p 分裂成兩個
- 現代 XRD 常用 **Kα₁ 單色化**（去掉 Kα₂ 與 Kβ）提升解析度

### 各種 Anode 材質比較（實驗室 XRD 用）

| Anode  | Kα₁ (Å)     | 用途與備註                                                    |
| ------ | ----------- | ------------------------------------------------------------- |
| **Cu** | **1.54060** | **無機物最常用**；會使 Fe、Co 樣品產生 fluorescence 干擾      |
| Cr     | 2.28970     | 高解析度、大 d-spacing；在空氣中衰減大                        |
| Fe     | 1.93604     | 用於 ferrous 合金以避免 Fe fluorescence；造成 Cr fluorescence |
| Co     | 1.78897     | 用於 ferrous 合金減少 Fe fluorescence                         |
| **Mo** | **0.70930** | 短波長，適合**小 unit cell**（high angle 資訊多）             |

**選靶原則**：避免靶 Kα 能量**剛好激發樣品的 X 光 fluorescence**（造成高背景）。

- 測 Fe 基樣品 → 用 Co 或 Cr（不要 Cu）
- 測一般無機物 → Cu 最便宜好用

---

## XRD 歷史

- **Max von Laue**（1912）：第一張 X 光繞射影像，證明 X 光是波
- **W. Henry Bragg & W. Lawrence Bragg**（父子，1913）：推導 Bragg's Law，獲 1915 諾貝爾物理獎

---

## Sample 類型與 XRD Pattern 的對應

### Single crystal（單晶）

- X 光打單晶 → detector 上看到少數幾個**離散亮點**
- 每個亮點對應一組晶面

### Powder (polycrystalline) 多晶粉末

- 許多微晶隨機取向
- 每組晶面在**各種角度**都有機會滿足 Bragg 條件
- Detector 上看到**同心圓環**（Debye-Scherrer rings）
- 掃瞄 2θ 角度即得到 **1D XRD pattern**（強度 vs 2θ）

### Crystalline vs Amorphous vs Gas 的對比

| 材料類型               | XRD Pattern 特徵                         |
| ---------------------- | ---------------------------------------- |
| **Crystal**            | 尖銳的 **離散峰**（高強度、窄）          |
| **Amorphous / Liquid** | **寬而漫的包絡（broad hump）**，無特徵峰 |
| **Monatomic gas**      | 只有單調衰減的背景，無結構               |

### 範例：NaCl (Cu Kα)

- 粉末 NaCl → 多個明顯峰：**200、220、222、311、400、420、422、333/511**
- 每個峰對應一組 (hkl)

---

## 晶體學基礎

### 7 種晶系（Crystal Systems）

| 晶系             | 邊長條件  | 角度條件                                    |
| ---------------- | --------- | ------------------------------------------- |
| **Triclinic**    | 無條件    | 無                                          |
| **Monoclinic**   | —         | α = β = 90°（first setting） 或 α = γ = 90° |
| **Orthorhombic** | —         | α = β = γ = 90°                             |
| **Tetragonal**   | a = b     | α = β = γ = 90°                             |
| **Cubic**        | a = b = c | α = β = γ = 90°                             |
| **Hexagonal**    | a = b     | α = β = 90°，γ = 120°                       |
| **Trigonal**     | a = b     | α = β = 90°，γ = 120°                       |
| **Rhombohedral** | a = b = c | α = β = γ                                   |

### 14 種 Bravais Lattices

每個晶系有不同的 centering（P = primitive、I = body-centered、F = face-centered、C = base-centered），總共 **14 種 Bravais 晶格**。

- Orthorhombic: P、I、C、F
- Tetragonal: P、I
- Cubic: P、I、F
- Trigonal/Hexagonal: P、R
- Monoclinic: P、C
- Triclinic: P

### Coordination Polyhedra

晶體結構常用**配位多面體**描述，例如：

- **Perovskite** ABO₃（如 SrTiO₃）：B 被 6 個 O 包圍成八面體
- Close-packed 層（A 層）
- Corner-sharing / edge-sharing polyhedra 排成 3D 網格

---

## Crystal Coordination & Miller Indices

### 座標系

晶體用**a、b、c 三個晶格向量**做座標軸，夾角 α、β、γ。

- x 軸沿 a
- y 軸沿 b
- z 軸沿 c
- 原點在晶胞一角

### Miller Indices (hkl)

- 用來描述**晶面**的標記
- 定義：晶面在 a、b、c 軸上截距的**倒數**（取整數）
- 例：
  - (100)：只截 a 軸，(h,k,l) = (1,0,0)
  - (110)：截 a 與 b 軸
  - (111)：三軸都截
  - (200)：在 a 軸上截 1/2（倒數 = 2）
- 平行晶面間距 d\_{hkl} 與 Miller indices 相關

### 負指數記法（必考！）

當晶面與某軸交於**負方向**時，Miller index 用**上劃線**表示，不能寫負號：

- **(1̄10)** 讀作「bar-one one zero」：h = −1, k = 1, l = 0
- **(1̄01)**：h = −1, k = 0, l = 1
- **(1̄11)**：h = −1, k = 1, l = 1
- **(001̄)**：l = −1

**符號對照**：
```
正指數：(110), (101), (111), (200)
負指數：(1̄10), (1̄01), (1̄11), (2̄00)  ← 上劃線 = 負
```

**重點**：
- 相同立方晶體的**對稱等價面**用大括號：{100} 代表 (100), (1̄00), (010), (01̄0), (001), (001̄) 共 6 個面
- 方向（direction）用**中括號**：[110]；族用尖括號：⟨110⟩
- 晶面用**小括號**：(110)；族用大括號：{110}

### Cubic 系統的 d\_{hkl}

```
1/d² = (h² + k² + l²) / a²
```

從 XRD 各峰位置可以反推 a 與指派 (hkl)。

### 範例 XRD 峰 → Miller indices 對應

TiO₂ anatase 粉末：(101) 是第一峰，(004)、(200)、(105)、(211)…
TiO₂ rutile 粉末：(110) 是第一峰，(101)、(200)、(111)、(210)、(211)、(220)…

---

## Lab XRD vs Synchrotron XRD（重要比較）

### Synchrotron XRD 優勢

1. **Intense photon flux**：強度高，比實驗室光源高幾百萬倍
2. **High spatial resolution**：可做 micro-diffraction
3. **High angle information**：可測到大 2θ 的高角度峰
4. **Fast data acquisition**：20 秒 vs 實驗室 30 分鐘
5. **Non-ambient conditions**：可做 **in situ**（高溫、高壓、電化學、電池）
6. **Tunable energy**：選任意波長做 resonance 實驗

### 實際譜比較

- 同一樣品：20s TPS 19A（synchrotron）vs 30m D2 Phaser（in-house）
  - Synchrotron 強度高 10–100 倍
  - Synchrotron 峰形更窄、背景更低、細峰分得開
- 實驗室譜可辨別主峰，但細節被 fluorescence 與雜訊淹沒

---

## XRD Pattern 分析方法

### (1) Phase Identification（相鑑定）

- 比對實驗譜與資料庫（**ICDD PDF 卡**、**COD**、**ICSD**）
- 例：TiO₂ PDF #75-1537 anatase；PDF #75-1537 rutile
- 看主峰位置、強度比、多個 (hkl) 是否都吻合

**實驗譜 vs Stick Pattern（資料庫）對照**：
- 資料庫標準譜是**竹籤狀 stick pattern**，每根 stick 對應一個理論 (hkl) 的 2θ 位置與相對強度
- 實驗譜是有寬度、有背景的連續曲線
- 判讀流程：
  1. 把實驗譜與候選 stick pattern 疊在同一張 2θ 軸
  2. 檢查每根 stick 是否都能對應到實驗峰的位置
  3. 相對強度是否大致符合（有 **preferred orientation** 會偏差）
  4. 若所有主峰都吻合 → 該相存在；若只有部分吻合 → 混合相或雜質
- **Synchrotron 譜**可清楚分辨密集 stick；**Lab 譜** 峰寬 + 背景可能蓋過細節

### (2) Rietveld Refinement（精修）

**Hugo M. Rietveld**（1969）發明。

**原理**：用 least-squares 擬合整條理論繞射譜 vs 實驗譜：

```
S = Σᵢ wᵢ[yᵢ(obs) − yᵢ(calc)]²   → minimize
```

- yᵢ(calc) = SF · Mₖ · |Fₖ|² · PO_k · Δₖ · Lₖ · Pₖ · … + bkg
- SF：scale factor
- M：multiplicity
- **|Fₖ|²**：structure factor 平方（決定峰強度）
- PO：preferred orientation
- L：Lorentz-polarization
- bkg：background

**Structure factor**：

```
F(hkl) = Σⱼ fⱼ · exp[2πi(h xⱼ + k yⱼ + l zⱼ)]
```

- f_j：原子 j 的 atomic scattering factor
- (x_j, y_j, z_j)：原子 j 在 unit cell 的分數座標
- (h, k, l)：Miller indices

**Rietveld 可精煉出**：

- 精確的晶格參數
- 原子位置
- 熱振動參數
- 相含量（定量分析）
- 晶粒大小與應力

### (3) Scherrer Equation（晶粒大小）

從 XRD 峰**寬度**估算奈米晶的大小：

```
τ = K λ / (β cos θ)
```

| 符號  | 意義                                                     |
| ----- | -------------------------------------------------------- |
| **τ** | 有序晶體域的平均大小（crystallite size）                 |
| **K** | dimensionless shape factor（~0.9）                       |
| **λ** | X 光波長                                                 |
| **β** | 峰的 **full width at half maximum (FWHM)**，扣除儀器寬化 |
| **θ** | Bragg 角                                                 |

**重點**：**晶粒越小 → 峰越寬**

- 範例：Co₂₀Ni₈₀ 奈米粒子在不同粒徑下 XRD 峰寬：
  - 540 nm → 尖銳峰
  - 45 nm → 明顯變寬
  - 10 nm → 非常寬、幾乎成包絡
- 10 nm 以下甚至難以辨認各峰位置

---

## IR 發射光譜與螢光/磷光的比較（L4 延伸）

本份講義最後一頁也提到 photoluminescence 的補充定義（中文）：

- **螢光 Fluorescence**：電子被光激發到更高能階後，很快回到基態並發出光。只涉及**自旋不變**的 allowed transition（S₁ → S₀），所以反應快（~ns）
- **磷光 Phosphorescence**：電子自激發單態（S₁）經過 **intersystem crossing (ISC)** 到三重態（T₁），再從 T₁ → S₀。此躍遷稱為 **forbidden transition**（需要自旋翻轉），因此很慢（ms–h），移開光源後仍會發光一段時間

---

## 重要公式彙整

```
n λ = 2d sin θ                              Bragg's Law
1/d² = (h² + k² + l²)/a²                    Cubic d-spacing
τ = K λ / (β cos θ)                         Scherrer equation
F(hkl) = Σⱼ fⱼ exp[2πi(hxⱼ+kyⱼ+lzⱼ)]         Structure factor
S = Σᵢ wᵢ[yᵢ(obs) − yᵢ(calc)]² → min        Rietveld 擬合目標函數

Cu Kα₁:  1.54060 Å
Mo Kα₁:  0.70930 Å
Co Kα₁:  1.78897 Å
Cr Kα₁:  2.28970 Å
Fe Kα₁:  1.93604 Å
```

---

## 典型考題（推測）

### 「X 光繞射發生在什麼條件下？」

當入射 X 光與晶面間隔滿足 **Bragg's Law**：nλ = 2d sinθ，反射光之間發生建設性干涉時發生繞射峰。

### 「為什麼粉末 XRD 產生同心圓環，而單晶 XRD 產生離散亮點？」

單晶所有晶面取向固定 → 只有特定方向滿足 Bragg → 亮點。粉末樣品是許多隨機取向的微晶，每組晶面都有機會在**旋轉對稱的各個方向**滿足 Bragg 條件 → 亮點沿 2θ 形成**圓環**，在 1D 掃瞄譜上就是峰。

### 「In-house XRD 光源的機制？」

鎢絲熱離子發射電子，經 40 kV 加速撞擊金屬靶（通常 Cu）。電子踢出靶原子 K shell 電子，L shell 電子回填，發射 **Kα characteristic X-ray**，同時伴隨 Bremsstrahlung 連續譜。99% 能量變熱，需水冷。

### 「為什麼測鐵樣品時要避免 Cu 靶？」

Cu Kα（1.54 Å，8.05 keV）能量剛好高於 Fe 的 K edge（7.11 keV），會激發 Fe 原子發出**X 光螢光**，造成高背景、降低 SNR。改用 Co 或 Cr 靶可避免。

### 「Scherrer equation 說明什麼物理事實？」

晶粒越小 → XRD 峰越寬。從 FWHM 可以估算 crystallite 的平均大小。大晶體有長範圍週期性 → Bragg 條件很嚴格 → 峰尖；小晶體只有少數週期 → Bragg 條件相對鬆 → 多個 θ 都有貢獻 → 峰寬。

### 「Synchrotron XRD 比實驗室 XRD 有哪些優勢？」

Intense photon flux、high spatial resolution、high-angle information、fast data acquisition、non-ambient conditions、tunable wavelength。

---

## Flashcards

XRD 的核心定律？::Bragg's Law：nλ = 2d sinθ
Bragg's Law 中 θ 的定義是什麼？::入射光與晶面的夾角（不是法線的夾角）
d 在 Bragg's Law 中代表什麼？::Interplanar spacing，晶面之間的距離
n 在 Bragg's Law 中是什麼？::繞射級數 (n = 1, 2, 3…)，滿足建設性干涉的整數
XRD 能提供材料的哪五種資訊？::Phase identification、crystallinity、lattice parameters、crystallite size、residual stress
TiO₂ 的三種晶相名字？::Anatase、Rutile、Brookite
Single crystal XRD 圖案的外觀？::離散亮點（少數幾個點）
Powder XRD 圖案的外觀？::同心圓環 (Debye-Scherrer rings)，在 1D 掃瞄下是峰
Crystalline、amorphous、monatomic gas 的 XRD pattern 差別？::Crystal 尖銳峰；amorphous 寬包絡；gas 單調背景
實驗室 XRD 用的光源是什麼？::Sealed X-ray tube（真空管 + 鎢絲陰極 + 金屬靶陽極）
In-house XRD 最常用的 anode 材質？::Cu (Kα₁ = 1.54060 Å)，最適合無機物
為什麼測 Fe 樣品不能用 Cu 靶？::Cu Kα 能量高於 Fe K edge，會激發 Fe X 光螢光造成高背景
測 Fe 樣品建議用哪種靶？::Co 或 Cr，兩者 Kα 能量低於 Fe K edge
X-ray tube 中為什麼需要水冷？::99% 電子動能轉為熱，必須連續冷卻否則靶熔化
Characteristic X-ray 的機制？::電子踢出 K shell 電子，L/M shell 電子回填，發射 Kα、Kβ 特徵光
Bremsstrahlung 是什麼？::電子在靶中被減速產生的 X 光連續譜背景
Max von Laue 的貢獻？::1912 年首次觀察到晶體 X 光繞射影像
Bragg 父子的貢獻？::推導 Bragg's Law，1915 諾貝爾物理獎
7 種晶系是哪些？::Triclinic、Monoclinic、Orthorhombic、Tetragonal、Cubic、Hexagonal、Trigonal (Rhombohedral)
Bravais lattice 總共有幾種？::14 種（7 晶系 × 不同 centering）
Cubic 晶系的邊長與角度條件？::a = b = c，α = β = γ = 90°
Miller index 是怎麼定義的？::晶面在 a,b,c 軸截距的倒數，取整數
Cubic 系統 d-spacing 公式？::1/d² = (h²+k²+l²)/a²
Rietveld refinement 是什麼？::用 least-squares 擬合整條 XRD 理論譜 vs 實驗譜，由 Rietveld 於 1969 發明
Rietveld 可以取得哪些資訊？::精確晶格參數、原子位置、熱振動、相含量、晶粒大小與應力
Structure factor F(hkl) 決定什麼？::XRD 峰的強度（相對強度），由原子在 unit cell 的分數座標決定
Scherrer equation？::τ = Kλ/(β cosθ)
Scherrer equation 中的 β 是什麼？::峰的 FWHM（扣除儀器寬化）
Scherrer equation 中的 K 是什麼？::Dimensionless shape factor，~0.9
為什麼晶粒越小 XRD 峰越寬？::短週期晶體只有少數週期，Bragg 條件鬆，多個 θ 有貢獻
Synchrotron XRD 相對實驗室 XRD 的六大優勢？::Intense flux、high spatial resolution、high angle info、fast acquisition、non-ambient conditions、tunable wavelength
Perovskite 的化學通式？::ABO₃（如 SrTiO₃），B 被 6 個 O 形成八面體
XRD 中 TiO₂ anatase 的主峰 (hkl)？::(101)
XRD 中 TiO₂ rutile 的主峰 (hkl)？::(110)
為什麼要用 monochromatic X-ray 做 XRD？::Bragg 條件依賴單一波長 λ，多色光會產生多重繞射干擾
