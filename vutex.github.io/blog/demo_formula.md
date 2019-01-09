---
title: Formula Demo
type: post
tag: [math, demo]
---


---

## 符号宏

- `<<` : $<<$
- `>>` : $>>$
- `==` : $==$

---

## 括号宏

```latex
$$\|{\<{\[{\({\dfrac{x}{8}}}}_{x=1}^2$$
```

$$\|{\<{\[{\({\dfrac{x}{8}}}}}_{x=1}^2$$

自适应高度的括号

不支持大括号, 因为 `\{` 本身已经有宏定义了, 另外连续大括号`{{`  `}}`是 `Vue` 的嵌入语义, 具有最高优先级, 可能发生冲突.

## 函数宏

- `\dd{x}` : $\dd{x}$ 使用正体
- `\e^{x}` : $\e^{x}$ 使用正体

<!-- more -->

## 多种字体

$$\begin{array}{ll|l}
 \texttt{"normal"}      &\texttt{}         & ABCDEFGHIJKLMNOPQRSTUVWXYZ\\
 \texttt{"blackboard"}  &\texttt{\mathbb}  &\mathbb{ABCDEFGHIJKLMNOPQRSTUVWXYZ}\\
 \texttt{"boldface"}    &\texttt{\mathbf}  &\mathbf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}\\
 \texttt{"typewriter"}  &\texttt{\mathtt}  &\mathtt{ABCDEFGHIJKLMNOPQRSTUVWXYZ}\\
 \texttt{"roman"}       &\texttt{\mathrm}  &\mathrm{ABCDEFGHIJKLMNOPQRSTUVWXYZ}\\
 \texttt{"sans-serif"}  &\texttt{\mathsf}  &\mathsf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}\\
 \texttt{"calligraphic"}&\texttt{\mathcal} &\mathcal{ABCDEFGHIJKLMNOPQRSTUVWXYZ}\\
 \texttt{"script"}      &\texttt{\mathscr} &\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ}\\
 \texttt{"fraktur"}     &\texttt{\mathfrak}&\mathfrak{ABCDEFGHIJKLMNOPQRSTUVWXYZ}\\
\end{array}$$

## 多种色彩

$$\begin{array}{|rrrrrrrr|}
\hline
\verb+#000+ & \color{#000}{text} & \verb+#005+ & \color{#005}{text} & \verb+#00A+ & \color{#00A}{text} & \verb+#00F+ & \color{#00F}{text}  \\
\verb+#500+ & \color{#500}{text} & \verb+#505+ & \color{#505}{text} & \verb+#50A+ & \color{#50A}{text} & \verb+#50F+ & \color{#50F}{text}  \\
\verb+#A00+ & \color{#A00}{text} & \verb+#A05+ & \color{#A05}{text} & \verb+#A0A+ & \color{#A0A}{text} & \verb+#A0F+ & \color{#A0F}{text}  \\
\verb+#F00+ & \color{#F00}{text} & \verb+#F05+ & \color{#F05}{text} & \verb+#F0A+ & \color{#F0A}{text} & \verb+#F0F+ & \color{#F0F}{text}  \\
\hline
\verb+#080+ & \color{#080}{text} & \verb+#085+ & \color{#085}{text} & \verb+#08A+ & \color{#08A}{text} & \verb+#08F+ & \color{#08F}{text}  \\
\verb+#580+ & \color{#580}{text} & \verb+#585+ & \color{#585}{text} & \verb+#58A+ & \color{#58A}{text} & \verb+#58F+ & \color{#58F}{text}  \\
\verb+#A80+ & \color{#A80}{text} & \verb+#A85+ & \color{#A85}{text} & \verb+#A8A+ & \color{#A8A}{text} & \verb+#A8F+ & \color{#A8F}{text}  \\
\verb+#F80+ & \color{#F80}{text} & \verb+#F85+ & \color{#F85}{text} & \verb+#F8A+ & \color{#F8A}{text} & \verb+#F8F+ & \color{#F8F}{text}  \\
\hline
\verb+#0F0+ & \color{#0F0}{text} & \verb+#0F5+ & \color{#0F5}{text} & \verb+#0FA+ & \color{#0FA}{text} & \verb+#0FF+ & \color{#0FF}{text}  \\
\verb+#5F0+ & \color{#5F0}{text} & \verb+#5F5+ & \color{#5F5}{text} & \verb+#5FA+ & \color{#5FA}{text} & \verb+#5FF+ & \color{#5FF}{text}  \\
\verb+#AF0+ & \color{#AF0}{text} & \verb+#AF5+ & \color{#AF5}{text} & \verb+#AFA+ & \color{#AFA}{text} & \verb+#AFF+ & \color{#AFF}{text}  \\
\verb+#FF0+ & \color{#FF0}{text} & \verb+#FF5+ & \color{#FF5}{text} & \verb+#FFA+ & \color{#FFA}{text} & \verb+#FFF+ & \color{#FFF}{text}  \\
\hline
\end{array}$$

## 长公式滑动

$$\begin{aligned}
x_1&=-\frac{b}{4a}+\frac12\sqrt{\left(\frac{b}{2a}\right)^2-\frac{2c}{3a}+\frac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}+\frac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}}-\frac12\sqrt{\frac{b^2}{2a^2}-\frac{4c}{3a}-\frac{\sqrt[3]2\big(c^2-3bd+12ae\big)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}-\frac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}+\frac{-b^3+4abc-8a^2d}{4a^3\sqrt{\left(\dfrac{b}{2a}\right)^2-\dfrac{2c}{3a}+\dfrac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}+\dfrac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}}}}\\
x_2&=-\frac{b}{4a}+\frac12\sqrt{\left(\frac{b}{2a}\right)^2-\frac{2c}{3a}+\frac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}+\frac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}}+\frac12\sqrt{\frac{b^2}{2a^2}-\frac{4c}{3a}-\frac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}-\frac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}-\frac{b^3-4abc+8a^2d}{4a^3\sqrt{\left(\dfrac{b}{2a}\right)^2-\dfrac{2c}{3a}+\dfrac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}+\dfrac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}}}}\\
x_3&=-\frac{b}{4a}-\frac12\sqrt{\left(\frac{b}{2a}\right)^2-\frac{2c}{3a}+\frac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}+\frac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}}-\frac12\sqrt{\frac{b^2}{2a^2}-\frac{4c}{3a}-\frac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}-\frac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}+\frac{b^3-4abc+8a^2d}{4a^3\sqrt{\left(\dfrac{b}{2a}\right)^2-\dfrac{2c}{3a}+\dfrac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}+\dfrac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}}}}\\
x_4&=-\frac{b}{4a}-\frac12\sqrt{\left(\frac{b}{2a}\right)^2-\frac{2c}{3a}+\frac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}+\frac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}}+\frac12\sqrt{\frac{b^2}{2a^2}-\frac{4c}{3a}-\frac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}-\frac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}+\frac{b^3-4abc+8a^2d}{4a^3\sqrt{\left(\dfrac{b}{2a}\right)^2-\dfrac{2c}{3a}+\dfrac{\sqrt[3]2(c^2-3bd+12ae)}{3a\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}+\dfrac{\sqrt[3]{2c^3-9bcd+27ad^2+27b^2e-72ace+\sqrt{\big(2c^3-9bcd+27ad^2+27b^2e-72ace\big)^2-4\big(c^2-3bd+12ae\big)^3}}}{3\sqrt[3]2a}}}}\\
\end{aligned}$$

这是四次方程求根公式, 非常的长, 但是我们可以使用滑动条来查看