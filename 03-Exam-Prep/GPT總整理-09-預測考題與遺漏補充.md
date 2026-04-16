---
科目: 分析化學
章節: 考前總整理
標題: 預測考題（含完整答案）+ 遺漏重點補充
日期: 2026-04-16
tags:
  - 分析化學
  - 考前衝刺
  - 預測考題
---

# 預測考題 + 遺漏重點補充

---

# 壹、筆記遺漏的重點

## 1. Fluorescence vs UV-Vis 靈敏度

**螢光法對稀釋樣品的靈敏度遠高於 UV-Vis**（10³-10⁶ 倍）。
- UV-Vis 測的是 I0 和 I 的差值，稀樣品時 I ≈ I0，noise 會淹掉訊號
- 螢光測的是黑背景上的發射光，只要樣品有一點螢光就能偵測
- 螢光可測到 ppb 級；UV-Vis 通常只到 ppm 級

## 2. IR 與 UV-Vis-NIR 共通偵測器

老師 exercise 直接考過：哪個 detector 兩邊都能用？
- **InGaAs** 和 **PbS** 都是 NIR 半導體偵測器
- 同時適用於 FTIR 的 NIR 區和 UV-Vis-NIR 的延伸區
- 考試寫 **InGaAs** 最穩

## 3. Hooke's Law 標準答法

老師 exercise 問：aromatic C-H 和 C-C stretching 誰頻率高？
- **C-H stretching 頻率較高**
- 原因：reduced mass 差距巨大（μCH ≈ 0.92，μCC = 6）
- C-H stretch: 3100-3000 cm⁻¹ vs C-C stretch: 1600-1400 cm⁻¹

## 4. 老師答題格式（必背）

從 Examples PDF 看出來的標準結構：
1. **先寫全名**（ATR = Attenuated Total Reflectance）
2. **再寫物理機制**（evanescent wave / diffuse reflection）
3. **再寫差異比較**（穿透深度、適用樣品）
4. **最後補具體例子**（螢光標記、出口指示牌）

## 5. 必背數字集中整理

| 數值 | 內容 |
|------|------|
| 1.5406 A | Cu Kα 波長 |
| 3100-3000 cm⁻¹ | aromatic/alkene C-H stretch |
| 3000-2850 cm⁻¹ | alkane C-H stretch |
| 1750-1700 cm⁻¹ | C=O stretch |
| 3500-3200 cm⁻¹ | O-H stretch |
| 3300-2500 cm⁻¹ | COOH 的 O-H（超寬） |
| 1680-1640 cm⁻¹ | C=C stretch |
| 2260-2100 cm⁻¹ | C≡C stretch |
| 16 ns | Fluorescein FL lifetime |
| 120 μs | Eu2O3 phosphorescence lifetime |
| 77 K | MCT 偵測器液態氮冷卻溫度 |
| 0.1-1.0 | 有效吸光度範圍 |
| 1 eV = 1.602 × 10⁻¹⁹ J | 能量換算 |

---

# 貳、預測考題 + 完整答案

## 題目 1：比較 ATR 與 DRIFT

ATR 全名為 **Attenuated Total Reflectance**，DRIFT 全名為 **Diffuse Reflectance Infrared Fourier Transform Spectroscopy**。ATR 是讓 IR 光在高折射率晶體內全反射，於界面產生 evanescent wave，僅穿入樣品表面數微米，因此適合固體表面、薄膜、液體與不想前處理的樣品。DRIFT 則是量測粉末或粗糙表面對 IR 的漫反射訊號，光在顆粒間多次散射後再被收集，特別適合粉末、鬆散固體與粗糙表面。ATR 前處理少、偏表面分析；DRIFT 偏粉體分析，常需與 KBr 稀釋以避免吸收過強。

---

## 題目 2：比較 Fluorescence 與 Phosphorescence

Fluorescence 是電子由 **S1 回到 S0** 的放光過程，屬於 **spin-allowed** 躍遷，壽命通常為 **ns**。Phosphorescence 則是電子先經 **intersystem crossing (ISC)** 進入 **T1**，再由 **T1 回到 S0**，此過程為 **spin-forbidden**，壽命可達 **ms 到小時**。因為 phosphorescence 在放光前損失更多能量，發射光通常**波長較長、能量較低**；fluorescence 則波長較短、能量較高。例子：螢光筆屬 fluorescence，夜光逃生標誌屬 phosphorescence。

---

## 題目 3：Emission wavelength 和 excitation wavelength 哪個較長？為什麼？

**Emission wavelength 比 excitation wavelength 長**。分子吸收光後先被激發到較高能階，但在放光前會先經過 **vibrational relaxation** 損失部分能量。因此發射光子的能量低於吸收光子的能量，由 E = hc/λ 可知發射波長較長。這種吸收峰與發射峰的位移稱為 **Stokes shift**。

---

## 題目 4：Dilute samples 分析，Fluorescence 與 UV-Vis 哪個靈敏度較高？

**Fluorescence 較敏感。** UV-Vis 是量測 I0 與 I 的小差值，稀樣品時 I ≈ I0，容易受 stray light 與 noise 影響。螢光法直接量測樣品發出的光，背景接近黑背景，且可以用 excitation/emission 雙重選擇提高 selectivity，對 trace analyte 更有利。螢光比 absorption 靈敏約 **10³-10⁶ 倍**。

---

## 題目 5：Aromatic C-H 與 C-C stretching 哪個 frequency 較高？用 Hooke's law 解釋

**Aromatic C-H stretching 出現在較高 frequency。** 依 Hooke's law，振動波數 ṽ 正比於 sqrt(k/μ)。雖然 C-C 鍵的 force constant 不小，但 **C-H 的 reduced mass 非常小**（μCH ≈ 0.92，μCC = 6），sqrt(1/μ) 項使 C-H 振動頻率大幅提高。實際上 aromatic C-H stretch 在 **3100-3000 cm⁻¹**，aromatic ring C-C stretch 在 **1600-1400 cm⁻¹**。

---

## 題目 6：比較傳統色散式 IR 與 FTIR

傳統色散式 IR 用光柵或單光器一次選一個波長，逐波長掃描，速度慢、光通量低。FTIR 用 **Michelson 干涉儀**同時收集所有波數資訊，先得到干涉圖（interferogram），再用**傅立葉轉換**轉成光譜。FTIR 具有三大優勢：**多工優勢（Fellgett）** 同時收集所有頻率、**高光通量優勢（Jacquinot）** 進光量大、**波數精度優勢（Connes）** 用雷射校準，因此更快、訊雜比更好、解析度更高。

---

## 題目 7：哪個 detector 同時適用 IR/FTIR 與 UV-Vis-NIR？

**InGaAs photodiode**（PbS 也可接受）。這兩者都是 **NIR 半導體偵測器**，涵蓋近紅外範圍，在 IR 系統的 NIR 區和 UV-Vis-NIR 的延伸區都能使用。

---

## 題目 8：描述 absorption edge 的物理過程、為什麼不同元素有不同 edge、比較 XANES 與 EXAFS

當入射 X 光能量達到內層電子的 **binding energy** 時，core electron 被擊出形成 **core hole**，吸收係數出現明顯跳升 = **absorption edge**。不同元素的核電荷不同 → binding energy 不同 → edge energy 具有**元素專一性**。

- **XANES**（吸收邊附近 ~10-40 eV）：提供**氧化態、電子結構、對稱性、d 軌域佔據**
- **EXAFS**（edge +40 eV 以上）：光電子與鄰近原子散射干涉，提供**鍵長、配位數、鄰近原子種類、局部結構**

> XANES 看電子，EXAFS 看局部幾何結構。

---

## 題目 9：K-edge vs L-edge，哪個對 3d 電子結構較敏感？

**L-edge 對 3d 電子結構較敏感。** K-edge 是 1s 電子激發，1s → 3d 屬於 dipole-forbidden（Δl = 2），訊號弱。L-edge 涉及 **2p → 3d** 躍遷，符合 Δl = +/-1 的 dipole selection rule，訊號強、對**氧化態、自旋態、晶場分裂與共價性**更敏感。

---

## 題目 10：說明 Bragg's law，比較 crystalline 與 amorphous 的 XRD pattern

Bragg's law：**nλ = 2d sinθ**。當 X 光被相鄰晶面散射後，path difference 恰為波長整數倍時產生 constructive interference，在對應角度出現 diffraction peak。

- **Crystalline**：長程有序 → **sharp, discrete peaks**
- **Amorphous**：無長程有序 → **broad hump**，無銳利峰

Cu Kα 波長 = **1.5406 A**。

---

## 題目 11：說明 Beer-Lambert Law 及其偏差來源

**A = εbc**，在固定波長下吸光度與濃度及光徑長成正比。

偏差三類：
1. **真實偏差**：高濃度時分子間交互作用改變吸收行為
2. **化學偏差**：分析物發生解離、配位或酸鹼平衡改變
3. **儀器偏差**：非單色光（polychromatic radiation）或雜散光（stray light）

> Beer's law 僅嚴格適用於稀溶液與良好單色光條件。

---

## 題目 12：IR active 的條件是什麼？比較 CO2 和 H2O 的 IR 活性

**IR active 條件：振動過程中偶極矩必須改變。**

- CO2 是線型分子：對稱伸縮不改變偶極矩 → **IR inactive**；非對稱伸縮和彎曲振動改變偶極矩 → **IR active**
- H2O 是非線型極性分子：多種振動模式都造成偶極矩變化 → 多個 IR 吸收峰

---

## 題目 13：比較 DTGS 與 MCT 偵測器

**DTGS（氘化硫酸三甘胺）** 是熱偵測器，靠溫度變化產生電訊號。它的線性範圍廣、在高光通量下表現穩定，適合一般定性和定量分析，而且不需要冷卻，成本較低。缺點是響應速度慢（約 1 秒），不適合快速動態量測。

**MCT（碲化汞鎘）** 是量子型偵測器，靠光子直接激發半導體產生電訊號。它的靈敏度遠高於 DTGS，響應速度極快（約 0.5 微秒），非常適合低光通量和快速動力學量測。但 MCT 必須用**液態氮冷卻到 77 K** 才能運作，且在高光通量下容易**飽和**導致非線性，需要加中性密度濾光片降低入射能量。有效範圍也較窄（600-5000 cm⁻¹）。

> 簡記：DTGS 穩定耐操不用冷卻；MCT 靈敏快速但要液態氮且會飽和。

---

## 題目 14：什麼是雜散光（Stray light）？對量測有什麼影響？

雜散光是不經過樣品而到達偵測器的光。會讓透射光 I 偏大 → 由 A = log(I0/I) 可知 **A 被低估**。對高濃度（高吸光度）樣品影響最大，造成 Beer's law 偏離。

---

## 題目 15：為什麼 XAS 需要同步輻射？

XAS 的原理是掃描不同能量的 X 光，找出特定元素的吸收邊。這需要一個**能量可連續調整**且**強度夠高**的 X 光源。

傳統實驗室的 X 光管只能產生固定能量的特徵 X 光（像 Cu Kα = 1.54 A），沒辦法連續改變能量去掃描吸收邊，所以不能做 XAS。

**同步輻射**是讓電子在儲存環中以接近光速運行，轉彎時放出的電磁輻射。它的特點：
- **連續寬頻**：從紅外到硬 X 光都有，可以自由選能量
- **極高亮度**：比 X 光管強約 **10⁶ 倍**，訊號好
- **高準直性**：光束集中，適合微小樣品
- **可調能量**：用單色器（矽晶體 + Bragg 繞射）選出需要的能量

所以做 XAS 必須去同步輻射設施（如台灣的 TPS，3 GeV，周長 518 m）。

---

## 題目 16：說明 Scherrer equation 的意義

**Scherrer equation 用 XRD 峰的寬度估算晶粒大小。** 峰越寬，晶粒越小。原理：小晶粒的可連續干涉範圍變短 → 干涉不集中 → 峰展寬。

---

## 題目 17：比較濾光片（Filter）與單光器（Monochromator）

**濾光片**是固定式選波元件，從寬光譜中選出某一段波長讓它通過。分成吸收型（用有色玻璃吸掉不要的波長，便宜但頻寬較寬）和干涉型（用薄膜干涉讓特定波長通過，頻寬窄但較貴）。優點是結構簡單、光通量高、便宜，適合例行定量分析。缺點是波長固定，不能掃描整個光譜。

**單光器**是用稜鏡或光柵（繞射光柵）把白光分成各波長，再用狹縫選出想要的波長。可以連續調整輸出波長、解析度高，適合研究用途和全光譜掃描。缺點是系統較複雜、光損失較大、價格高。

> 簡記：濾光片固定選波適合日常；單光器連續掃描適合研究。

---

## 題目 18：比較 PMT、Photodiode、DAD、CCD 四種偵測器

**PMT（光電倍增管）**：光子打到光陰極放出電子，經過多級打靶（dynode）倍增電子數，最終產生很大的電流。靈敏度極高，特別適合弱光偵測。但需要高電壓驅動（~1000V）、價格貴、一次只能測一個波長。

**Photodiode（光二極體）**：半導體元件，光子激發電子-電洞對產生電流。結構簡單、穩定耐用、便宜，適合一般光強度量測。靈敏度比 PMT 低。

**DAD（二極體陣列偵測器）**：把很多個 photodiode 排成一列，每個對應一個波長位置。可以**同時量測整段光譜**，速度非常快，適合 HPLC 等需要即時全光譜的場合。靈敏度中等。

**CCD（電荷耦合元件）**：類似數位相機的感光晶片，由大量像素組成，每個像素累積光子產生的電荷。靈敏度高、雜訊低，可同時收集多波長，特別適合弱光和需要高靈敏度的研究。

| 偵測器 | 原理 | 靈敏度 | 特色 |
|--------|------|--------|------|
| **PMT** | 電子倍增 | 最高 | 弱光專用、單點 |
| **Photodiode** | 半導體光電 | 較低 | 穩定便宜、日常用 |
| **DAD** | 多個二極體 | 中等 | 同時多波長、快 |
| **CCD** | 電荷累積 | 高 | 多像素、弱光研究 |

---

## 題目 19：比較 XAS 與 XES

- **XAS**：量測電子被激發到 **unoccupied states** 時的吸收 → 分析空軌域與化學鍵
- **XES**：core hole 形成後外層電子回填釋放光子 → 反映 **occupied states**
- 兩者互補，可提供完整電子結構資訊

---

## 題目 20：什麼是 Rietveld refinement？

**Rietveld refinement 用 least squares 擬合理論與實驗的整個 XRD 圖譜**，不是只看單一 peak。可以精確決定晶格參數、原子座標、佔據率等結構資訊。
