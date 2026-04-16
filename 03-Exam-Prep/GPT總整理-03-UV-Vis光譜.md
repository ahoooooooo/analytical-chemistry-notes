---
科目: 分析化學
章節: 考前總整理
標題: GPT總整理-UV-Vis光譜、偵測器比較、Band Gap、計算題
日期: 2026-04-16
tags:
  - 分析化學
  - 考前衝刺
  - GPT整理
---

# 考前衝刺版總整理（三）：UV-Vis 光譜

---

# 一、核心論述

## UV-Vis 是什麼（開頭萬用句）

UV-Vis spectroscopy measures absorption of light (200-800 nm) due to electronic transitions such as π→π*, n→π*, and d-d transitions, and is widely used for quantitative and electronic structure analysis.

---

## 為什麼可以定量（必考）

Because absorbance follows Beer-Lambert law：**A = εlc**
absorbance 正比於 concentration → 可做定量分析

---

## Selection rule（超常考）

- ΔS = 0（spin allowed）
- spin-forbidden → 吸收弱 → 顏色淡
- high-spin d⁵ 幾乎無色

---

# 二、比較題

## 1. PMT vs Photodiode

| | PMT | Photodiode |
|---|---|---|
| 靈敏度 | 高靈敏 | 較低靈敏 |
| 適用 | 適合弱光 | 適合一般光 |
| 電壓 | 需高電壓 | 穩定、耐用 |
| 價格 | 價格高 | 較便宜 |

> PMT：低光強。Photodiode：日常使用。

---

## 2. Photodiode vs DAD

| | Photodiode | DAD |
|---|---|---|
| 結構 | 單一 detector | 多個 detector |
| 量測 | 一次一波長 | 同時多波長 |
| 速度 | 較慢 | 很快 |

> DAD = 同時量整個光譜

---

## 3. DAD vs CCD

| | DAD | CCD |
|---|---|---|
| 元件 | 用 diode | 用 photo capacitor |
| 靈敏度 | 中等靈敏 | 高靈敏 |
| 特色 | 多波長 | 多 pixel |

> CCD = 更高靈敏 + 像相機

---

## 4. PMT vs CCD（進階）

- 都高靈敏
- PMT：單點強
- CCD：多點 + 弱光

---

## 5. UV-Vis vs IR（超愛考）

| | UV-Vis | IR |
|---|---|---|
| 躍遷 | 電子躍遷 | 分子振動 |
| 定量 | 可定量強 | 定量較難 |
| 結構 | 結構資訊少 | 結構資訊強 |
| 水 | 水可用 | 水干擾大 |

> UV-Vis：定量。IR：結構。

---

# 三、技術描述

## Double beam（必考）

分成 sample beam + reference beam，可消除光源波動，提高準確度。

---

## Stray light（常考）

雜散光會讓高 absorbance 測量偏低！

原因：A = log(I0/I)，stray light 讓 I 變大 → A 變小（低估）

---

## Cuvette（常考）

- quartz：UV OK
- glass：UV 不行（因為材料吸光）

---

# 四、Detector 概念總整理

detector = 把光 → 電訊號

### PMT
電子倍增 → 高靈敏

### Photodiode
半導體 → 電子移動

### DAD
多個 photodiode → 同時測波長

### CCD
電荷累積 → 高靈敏

### NIR detector
InGaAs / PbS → 長波長

---

# 五、為什麼要 NIR Detector

- UV-Vis 儀器常延伸到 NIR
- 一般 detector 在 NIR 靈敏度差
- → 用 InGaAs / PbS 補足

---

# 六、Band Gap（材料題必考）

## 定義

Eg = 電子從 VB（valence band）→ CB（conduction band）所需能量

## 為什麼 UV-Vis 可測

吸收開始點對應 Eg

## Tauc plot

(αhν)^(1/γ) vs hν，線性外插 → Eg

## 缺點（加分）

依賴 baseline、fitting、transition type → 有主觀性

---

# 七、Charge Transfer vs d-d

| | d-d | Charge transfer |
|---|---|---|
| 位置 | 金屬內部 | 金屬 ↔ 配體 |
| 強度 | 弱 | 強 |
| 顏色 | 顏色淡 | 顏色強 |

---

# 八、In Situ 量測（高分題）

在反應進行中量測，可看：
- oxidation state
- kinetics
- reversible change

---

# 九、UV-Vis 優缺點（必背）

## 優點
- 可定量
- 快
- 應用廣
- 水溶液可用

## 缺點
- 結構資訊少
- 峰重疊
- 溶劑/容器干擾

---

# 十、計算題

## 基本題型

### 題型 1
A = εlc → 解 c

### 題型 2
A = log(I0/I) → 解 I 或 A

### 題型 3
校正線：A vs c → 線性 → 求未知濃度

---

# 最後 30 秒必背總結

1. UV-Vis = 電子躍遷吸收
2. Beer's law → 定量
3. ΔS = 0
4. PMT（弱光）vs photodiode（穩定）
5. DAD（多波長）vs CCD（高靈敏）
6. NIR → InGaAs / PbS
7. band gap → Tauc plot
8. UV-Vis：定量強 / 結構弱
