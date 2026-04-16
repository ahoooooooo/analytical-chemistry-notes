---
科目: 分析化學
章節: 考前總整理
標題: GPT總整理-IR/FTIR原理、振動、偵測器、取樣、Peak Assignment
日期: 2026-04-16
tags:
  - 分析化學
  - 考前衝刺
  - GPT整理
---

# 考前衝刺版總整理（二）：IR 與 FTIR

---

# 一、6 大核心主題

## 1. IR 為什麼能測到分子？

紅外吸收光譜是利用分子中**共價鍵振動**對紅外光的吸收來分析官能基與結構。當入射紅外光的頻率與化學鍵的自然振動頻率相同時，就會發生吸收。
但不是所有振動都會吸收 IR，**必須在振動過程中造成偶極矩改變**，才是 IR active。

> **IR 看的是振動；能不能吸收，關鍵是偶極矩有沒有改變。**

---

## 2. 振動頻率受什麼控制？

用 **Hooke's law** 解釋，把化學鍵當成彈簧、原子當成質量塊。
振動頻率和兩件事有關：
- **(1) 鍵強度 k**
- **(2) 約化質量 μ**

關係：
- **鍵越強，頻率越高**
- **原子越輕，頻率越高**

常考例子：
- C≡C > C=C > C-C
- C-H 頻率高於 C-Cl（因為 H 比 Cl 輕）

> **強鍵高波數，輕原子高波數。**

---

## 3. CO2 vs H2O 的 IR 活性

### CO2
CO2 是**線型分子**。
- **對稱伸縮**不造成偶極矩改變 → **IR inactive**
- **非對稱伸縮**與**彎曲振動**會造成偶極矩改變 → **IR active**

### H2O
H2O 是**非線型分子**，本身就有淨偶極矩。
對稱伸縮、非對稱伸縮、scissoring bending 都可能導致偶極變化 → 可出現在 IR 光譜中。

> **有沒有 IR 吸收，不只看有沒有振動，還要看振動時偶極矩有沒有變。**

---

## 4. FTIR vs 傳統 IR

### 傳統 IR
- 用 **monochromator / grating**
- 一次量一個波長
- 速度慢
- 靈敏度與解析度較差

### FTIR
- 用 **Michelson interferometer**
- 同時收集所有頻率訊號，先得到 interferogram
- 再用 **Fourier transform** 轉成光譜
- **速度更快、靈敏度更高、訊雜比更好、解析度更高**

> IR 是一般技術名稱；FTIR 是利用干涉儀與傅立葉轉換的現代化 IR 測量方法。FTIR 的優點在於**多波長同時收集**，因此具有**快速、高靈敏、高解析度**的優勢。

---

## 5. DTGS vs MCT Detector

### DTGS
- 熱偵測器
- 適合 **high throughput**、**static experiments**
- 線性範圍廣
- 適合定性與定量
- 對快速動力學量測較不理想

### MCT
- 量子型偵測器
- **靈敏度高**
- 適合 **low throughput**、**kinetic measurements**
- 高通量下容易**飽和**，響應變非線性
- 需要用 neutral density filter 或 optical screen 降低入射能量

> **DTGS：穩、廣、耐高通量。MCT：敏、快、適合低光與動態量測，但會飽和。**

---

## 6. ATR vs DRIFT

### ATR（Attenuated Total Reflectance）
- IR 在高折射率晶體中全反射，產生 **evanescent wave**
- 只穿透樣品表面很淺一層
- 適合表面、薄膜、固體、液體
- 樣品前處理少

### DRIFT（Diffuse Reflectance Infrared Fourier Transform Spectroscopy）
- 靠 IR 在粉末或粗糙表面中**多次散射**後的漫反射訊號
- 適合粉末、粗糙表面
- 不靠穿透，而是靠 diffuse reflection

> **ATR 看表面淺層；DRIFT 看粉末/粗糙表面的漫反射。**

---

# 二、考試比較題模板

## 1. FTIR vs 傳統 IR

FTIR 與傳統 IR 都是利用分子振動吸收紅外光來分析結構與官能基，但兩者的分光方式不同。傳統 IR 通常使用單光器逐一掃描不同波長，因此量測較慢；FTIR 則利用 Michelson interferometer 同時收集所有頻率訊號，再以 Fourier transform 轉成光譜，因此具有較快的量測速度、較高的靈敏度與較佳的解析度。

## 2. MCT vs DTGS

DTGS 為熱偵測器，適合高通量與靜態量測，且線性範圍廣，因此適合一般定性與定量分析；MCT 為量子型偵測器，靈敏度高，適用於低通量與快速動力學量測，但在高通量下容易飽和，需降低入射能量。

## 3. ATR vs DRIFT

ATR 是利用高折射率晶體全反射產生 evanescent wave，使紅外光僅穿透樣品表面淺層，因此適合表面分析與少量前處理；DRIFT 則是利用粉末或粗糙表面的多重散射與漫反射訊號進行分析，適合粉體樣品。

## 4. CO2 vs H2O 的 IR active 行為

IR 吸收需伴隨偶極矩改變。CO2 為線型分子，其對稱伸縮不改變偶極矩，因此不具 IR 活性；但非對稱伸縮與彎曲振動會改變偶極矩，因此可吸收 IR。H2O 為非線型極性分子，其振動較容易造成偶極矩變化，因此多種振動模式皆可在 IR 中觀察到。

---

# 三、計算題觀念

核心圍繞在 **Hooke's law / 振動頻率 / 波數**。

## 判斷規則
- **k 變大 → 波數上升**
- **μ 變大 → 波數下降**

所以：
- 三鍵 > 雙鍵 > 單鍵
- 含 H 的鍵通常比含重原子的鍵出現在更高波數

---

# 四、Peak Assignment 必背

## 1. 烴類

### Alkane
- C-H stretch: **3000-2850 cm⁻¹**
- C-H bend/scissoring: **1470-1450 cm⁻¹**
- CH3 rock: **1370-1350 cm⁻¹**
- 長鏈 CH2 rock: **725-720 cm⁻¹**

### Alkene
- C=C stretch: **1680-1640 cm⁻¹**
- =C-H stretch: **3100-3000 cm⁻¹**
- =C-H bend: **1000-650 cm⁻¹**

### Alkyne
- C≡C stretch: **2260-2100 cm⁻¹**
- ≡C-H stretch: **3330-3270 cm⁻¹**
- ≡C-H bend: **700-610 cm⁻¹**

### Aromatic
- Ar-H stretch: **3100-3000 cm⁻¹**
- overtones: **2000-1665 cm⁻¹**
- ring C-C stretch: **1600-1585、1500-1400 cm⁻¹**

---

## 2. 含氧官能基

### Alcohol
- O-H stretch: **3500-3200 cm⁻¹**
- C-O stretch: **1260-1050 cm⁻¹**

### Ketone
- C=O stretch: **1715 cm⁻¹**
- α,β-unsaturated ketone: **1685-1666 cm⁻¹**

### Aldehyde
- H-C=O stretch: **2830-2695 cm⁻¹**
- C=O stretch: **1740-1720 cm⁻¹**
- α,β-unsaturated aldehyde: **1710-1685 cm⁻¹**
- 常看到 **2720 cm⁻¹ 附近肩峰**

### Ester
- C=O stretch: **1750-1735 cm⁻¹**
- α,β-unsaturated ester: **1730-1715 cm⁻¹**
- C-O stretch: **1300-1000 cm⁻¹**

### Carboxylic acid
- O-H stretch: **3300-2500 cm⁻¹（超寬）**
- C=O stretch: **1760-1690 cm⁻¹**
- C-O stretch: **1320-1210 cm⁻¹**

---

## 3. 含氮、鹵素

### Nitro / N-O
- N-O asymmetric: **1550-1475 cm⁻¹**
- N-O symmetric: **1360-1290 cm⁻¹**

### Halides
- C-X general: **850-515 cm⁻¹**
- C-Cl: **850-550 cm⁻¹**
- C-Br: **690-515 cm⁻¹**

---

# 五、Fingerprint Region

**1400-600 cm⁻¹** 稱為 **fingerprint region**。
這區峰很多、彼此重疊、較複雜，不容易單靠單一峰做官能基判定，但對於**比對特定化合物是否相同**很有價值。

> **官能基區幫你判斷類型；fingerprint region 幫你認身份。**

---

# 六、超短版考前速背

### 核心原理
- IR 吸收來自**分子振動**
- 要**偶極矩改變**才能吸收
- 鍵越強、原子越輕 → 波數越高

### FTIR
- 用 Michelson interferometer
- 同時收所有頻率
- 快、靈敏、解析度高

### Detector
- **DTGS**：高通量、靜態、線性廣
- **MCT**：高靈敏、低通量、動態快，但會飽和

### Sampling
- **ATR**：表面淺層，前處理少
- **DRIFT**：粉末、粗糙表面、漫反射

### 必背峰位
- O-H：3500-3200
- COOH 的 O-H：3300-2500（超寬）
- C=O：大約 1750-1700
- C=C：1680-1640
- C≡C：2260-2100
- C-H（alkane）：3000-2850
- 芳香/烯類 =C-H：3100-3000
- fingerprint：1400-600 cm⁻¹

---

# 七、申論萬用模板

### 描述 IR/FTIR 原理

紅外吸收光譜是利用分子中共價鍵振動對紅外光的吸收來分析分子結構與官能基。當入射光頻率與化學鍵自然振動頻率一致時會產生吸收，而該振動必須伴隨偶極矩改變才具有 IR 活性。FTIR 則是利用 Michelson interferometer 同時收集所有頻率訊號，再藉傅立葉轉換得到光譜，因此具有快速、高靈敏與高解析度等優點。

### 比較 ATR 與 DRIFT

ATR 與 DRIFT 都是 FTIR 常用取樣方式。ATR 利用全反射產生 evanescent wave，分析樣品表面淺層，適合少量前處理與表面分析；DRIFT 則利用粉末或粗糙表面的多重散射與漫反射訊號，特別適合粉末樣品。

### 比較 DTGS 與 MCT

DTGS 為熱偵測器，適合高通量與靜態量測，線性範圍較廣；MCT 為量子型偵測器，靈敏度較高，適合低通量與快速動態量測，但高通量時容易飽和。
