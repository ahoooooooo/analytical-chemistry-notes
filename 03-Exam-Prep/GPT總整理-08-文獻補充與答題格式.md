---
科目: 分析化學
章節: 考前總整理
標題: GPT總整理-文獻補充重點+老師答題範例格式
日期: 2026-04-16
tags:
  - 分析化學
  - 考前衝刺
  - GPT整理
  - 文獻補充
---

# 考前衝刺版總整理（八）：文獻補充 + 答題格式

來源：IR 教科書 (Fiore & Pellerito Ch.5)、UV-Vis 教科書 (Tissue)、老師答題範例 (Examples-HLWu-20260410)

---

# 壹、老師答題範例格式（最重要！）

老師的範例只有一頁，但透露了**答題標準**：

## 範例 1：ATR vs DRIFT 比較

老師要求的答題結構：
1. **先寫全名**：ATR = Attenuated Total Reflectance、DRIFT = Diffuse Reflectance Infrared Fourier Transform
2. **寫物理機制**：ATR 靠全反射產生 evanescent wave；DRIFT 靠漫反射
3. **寫差異**：穿透深度、適用樣品類型
4. **寫適用情境**

## 範例 2：Fluorescence vs Phosphorescence 比較

老師要求：
1. **寫機制**：Fluorescence 是 S1→S0（spin-allowed）；Phosphorescence 是 T1→S0 經 ISC（spin-forbidden）
2. **寫時間尺度**：螢光奈秒、磷光毫秒到秒
3. **寫具體例子**：螢光標記、磷光如出口指示牌

> **結論：老師要的是「機制 + 比較 + 例子」，不是只寫定義！**

---

# 貳、IR 教科書補充（GPT 總整理漏掉的）

## 1. Overtone 與 Combination Bands

- **基頻 fundamental**：Δv = +/-1（最強吸收）
- **Overtone 泛音**：Δv = +/-2, +/-3...（強度只有基頻的 1-5%）
- **Combination bands 組合頻**：兩個不同振動同時發生

> **考試可能問：為什麼在高波數區看到不該出現的弱峰？答：overtone 或 combination band。**

## 2. Fermi Resonance（費米共振）

- 當 fundamental 和 overtone 能量接近時，會交互作用
- 結果：原本一個峰變成**兩個峰**，且 overtone 異常增強
- 經典例子：CO2 的 Fermi resonance

> **一句背法：Fermi resonance = fundamental 和 overtone 能量接近 → 互相作用 → 兩個峰**

## 3. Anharmonic Oscillator（非諧振子）

- 真實分子不是完美的 harmonic oscillator
- 非諧性使得 overtone 變為可能（雖然弱）
- 也使得振動能階間距隨量子數增大而縮小

## 4. 振動能階量子化

E = hν(v + 1/2)，v = 振動量子數
- v = 0 → 1 是 fundamental
- v = 0 → 2 是 first overtone

## 5. ATR 穿透深度公式

dp = λ / (2π × sqrt(n1² sin²θ - n2²))

- dp：穿透深度
- n1：晶體折射率
- n2：樣品折射率
- θ：入射角

> **穿透深度隨波長增大而增大 → 低波數區穿透較深**

## 6. ATR 晶體材料比較

| 材料 | 折射率 | 特點 |
|------|--------|------|
| Ge | 4.0 | 穿透深度最淺，適合薄膜 |
| ZnSe | 2.4 | 中間，適合通用掃描 |
| Diamond | 2.4 | 硬、耐用，適合水溶液 |

## 7. 固體樣品製備：KBr 壓錠法

- 樣品 1-2 mg + KBr 約 100 mg
- 研磨均勻混合
- 高壓（10-15 噸）壓成透明圓片
- KBr 具吸濕性，壓錠前需真空乾燥
- 碟片厚度約 0.3-0.5 mm

## 8. 液體樣品製備

- 兩滴液體夾在兩片 NaCl 鹽片之間
- 常用溶劑：CCl4（最通用，因 IR 吸收少）
- 鹽片怕水，避免接觸水氣

## 9. 氣體樣品

- 氣體吸收帶有轉動精細結構
- 低濃度需用長光徑 gas cell（數公尺）
- 標準光徑 1-10 cm

## 10. IR 光源比較（GPT 漏掉）

| 光源 | 溫度 | 特點 |
|------|------|------|
| **Globar** (SiC) | 1200-1500 K | 最常用、發射率約 0.5 |
| **Nernst Glower** (稀土氧化物) | 1700-2000 K | 發射率更高、但壽命較短 |

> **Globar 便宜耐用；Nernst 發射率好但容易燒壞。**

## 11. FTIR 解析度

- 解析度取決於**移動鏡最大位移量**
- 鏡面位移越大 → 解析度越高
- 常見解析度：4, 2, 1, 0.5 cm⁻¹
- 多次掃描平均可改善 S/N（正比於 sqrt(n)）

## 12. 校準標準

- **Polystyrene**：IR 波數校準標準物質（已知吸收峰位置）
- 水蒸氣、CO2 也可做精密校準

## 13. 氫鍵對 IR 光譜的影響

- O-H 氫鍵使峰**變寬、頻率下降**
- 分子內 vs 分子間氫鍵效果不同
- 濃度影響：稀溶液看單體峰、濃溶液看氫鍵峰

## 14. Coupling Effect（耦合效應）

- 相鄰相似官能基的振動會耦合
- 分裂成對稱和非對稱兩個峰
- 例：-NH2 的對稱和非對稱伸縮

---

# 參、UV-Vis 教科書補充（GPT 總整理漏掉的）

## 1. Chromophore 與 Auxochrome

- **Chromophore 發色團**：含 π 電子系統的基團（C=C、C=O、N=N、C≡N），負責吸收
- **Auxochrome 助色團**：含孤對電子的基團（-OH、-NH2、-OR），增強或延伸吸收

> **Chromophore 吸光；Auxochrome 幫忙增強。**

## 2. 溶劑效應（超容易考！）

| 效應 | 方向 | 原因 |
|------|------|------|
| **Bathochromic shift**（紅移） | λ 增大 | 極性溶劑穩定激發態 |
| **Hypsochromic shift**（藍移） | λ 減小 | 極性溶劑穩定基態 |
| **Hyperchromic effect** | ε 增大 | 吸收增強 |
| **Hypochromic effect** | ε 減小 | 吸收減弱 |

> **紅移 = bathochromic = 往長波長移；藍移 = hypsochromic = 往短波長移。**

## 3. 有效吸光度範圍

- **最佳量測範圍：A = 0.1 ~ 1.0**
- A 太小（< 0.1）：雜訊影響大
- A 太大（> 1.0）：stray light 影響、偏離 Beer's law

## 4. 吸光度與 %T 的轉換

A = 2 - log(%T)

| %T | A |
|----|---|
| 100% | 0 |
| 50% | 0.301 |
| 10% | 1.0 |
| 1% | 2.0 |

## 5. UV-Vis 光源

| 光源 | 波長範圍 | 用途 |
|------|----------|------|
| **Deuterium lamp** | 200-400 nm | UV 區主要光源 |
| **Tungsten lamp** | 300-2500 nm | Vis + NIR 光源 |
| **Xenon flash lamp** | 寬範圍 | 特殊用途 |

> **D2 lamp 照 UV；W lamp 照 Vis。**

## 6. Cuvette 材質（補充）

| 材質 | 適用範圍 |
|------|----------|
| Quartz | UV + Vis（全範圍）|
| Glass | 只有 Vis（> 350 nm）|
| Polystyrene | 只有 Vis（拋棄式）|

## 7. 反射光譜法

- 不透明樣品可用反射式量測
- Specular reflectance：鏡面反射
- Diffuse reflectance：漫反射（粉末、粗糙表面）

## 8. 多成分分析

- 混合物在不同波長量測吸光度
- 利用 Beer's law 的加成性：A(total) = ε1c1l + ε2c2l + ...
- 聯立方程式解各成分濃度

## 9. 反應動力學監測

- UV-Vis 可即時監測反應進度
- 追蹤特定波長吸光度隨時間變化
- 適合研究反應速率

---

# 肆、GPT 總整理遺漏的其他重點

## 1. 光源類型總整理（全光譜）

| 區域 | 光源 |
|------|------|
| Far-IR | High-pressure Hg lamp |
| Mid-IR | Globar、Nernst glower |
| NIR | Tungsten-halogen (QTH) |
| UV | Deuterium arc lamp |
| Vis | Tungsten-halogen lamp |
| 寬範圍 | Xenon flash lamp |
| X-ray | Synchrotron radiation |

## 2. 偵測器總整理（全光譜）

| 區域 | 偵測器 |
|------|--------|
| IR (thermal) | DTGS、Bolometer、Golay cell、Thermocouple |
| IR (quantum) | MCT（需液態 N2 冷卻至 77 K） |
| Vis | PMT、Silicon photodiode、CCD |
| UV | PMT |
| NIR | InGaAs、PbS |

## 3. Interferogram → Spectrum 流程

1. 光源發光 → beam splitter 分成兩路
2. 一路到固定鏡、一路到移動鏡
3. 鏡面位移產生光程差
4. 兩路光重合產生干涉 → interferogram（強度 vs 鏡面位置）
5. **FFT（快速傅立葉轉換）** → spectrum（強度 vs 頻率）
6. Apodization function 修正截斷造成的失真

## 4. MCT 偵測器補充

- 需要**液態氮冷卻至 77 K** 才能操作
- 響應時間極快（約 0.5 μs）
- 有效範圍：600-5000 cm⁻¹（比 DTGS 窄）
- DTGS 響應時間：約 1 s

## 5. S/N 改善公式

S/N 正比於 sqrt(n)（n = 掃描次數）

- 掃 4 次 → S/N 提升 2 倍
- 掃 16 次 → S/N 提升 4 倍
- 掃 64 次 → S/N 提升 8 倍

---

# 伍、最終必背清單（文獻新增部分）

1. **Overtone**：Δv = +/-2，強度弱，解釋不該出現的弱峰
2. **Fermi resonance**：fundamental 和 overtone 能量接近 → 交互作用 → 兩個峰
3. **ATR 穿透深度**：低波數穿透較深
4. **KBr 壓錠**：1-2 mg 樣品 + 100 mg KBr，高壓壓成透明碟
5. **Chromophore 吸光、Auxochrome 增強**
6. **Bathochromic = 紅移、Hypsochromic = 藍移**
7. **有效 A 範圍 0.1-1.0**
8. **A = 2 - log(%T)**
9. **D2 lamp 照 UV；W lamp 照 Vis**
10. **S/N 正比於 sqrt(掃描次數)**
11. **MCT 要液態氮冷卻至 77 K**
12. **老師要的答題格式：機制 + 比較 + 例子**
