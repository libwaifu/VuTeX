---
title: Formula Demo EX
type: post
tag: [math, demo]
---

::: lemma Lemma 1.1
假设 $y \geq 0$ , 而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \dd \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

显见， 当 $0 \leq y \leq 1$ 时， 有 $\Phi(y) = 0$. 对于所有 $y \geq 0$, 则 $\Phi(y)$ 是一个非减函数.

当 $\log x\geq 10^4$ 及 $y\geq e^{2{(\log x)}^{-0.1}}$ 时， 则有:

$$1 - x^{- 0.1} \leq \Phi (y) \leq 1$$
:::

<!-- more -->

**证:**

我们先来证明:

$$
\frac {\partial^{r}} {\partial \omega^{r}} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right)  \left\{(\log y)^{r} + \sum_{i = 1}^{r} \frac {(- 1)^{i} r \cdots (r - i + 1) (\log y)^{r - i}} {\omega^{i}} \right\}
\label{a}\tag{1}
$$

成立, 显见 $\eqref{a}$ 式当 $r=1$ 和 $r=2$ 时都成立.

现假定 $\eqref{a}$ 式对于  $r = 2 , \cdots , S$ 时都成立, 而证明对于 $S+1$ 也成立.

由于

$$\begin{aligned}
\frac {\partial^{s + 1}} {\partial \omega^{s + 1}} \left(\frac {y^{\omega}} {\omega}\right) 
&= \frac{\partial}{\partial \omega} \left\{y^{\omega} \left(\frac {(\log y)^{s}} {\omega} + \sum_{i = 1}^{s} \frac {(- 1)^{i}\cdot s \cdots (s - i + 1) (\log y)^{s - i}} {\omega^{i + 1}}\right)\right\}\\
&= y^{\omega} \left\{\frac {(\log y)^{s + 1}} {\omega} + \sum_{i = 1}^{s} \frac {(- 1)^{i}\cdot s \cdots (s - i + 1) (\log y)^{s + 1 - i}} {\omega^{i + 1}} - \frac {(\log y)^{s}} {\omega^{2}}+ \sum_{i = 1}^{s} \frac {(- 1)^{i + 1} s \cdot \cdot (s - i + 1) (i + 1) (\log y)^{s - i}} {\omega^{t + 2}} \right\}\\
&=\({\frac {y^{\omega}} {\omega}} (\log y)^{s + 1}- \frac {(s + 1) (\log y)^{s}} {\omega} + \frac {(- 1)^{r_{1}} (S + 1) !} {\omega^{s + 1}}
\end{aligned}$$

故 $\eqref{a}$ 式得证.

又当  $y \geq 1$ 时, 我们有

$$\begin{aligned}
\Phi(y)
&=1+\left\{\frac {(\log x)^{1.1 + 1.1 [ \log x} ]} {[ \log x ] !} \right\}\left\{\frac {\partial^{[ \log x ]}} {\partial \omega^{[ \log x)}} \left(\frac {y^{\omega}} {\omega}\right) \right\}_{\omega=-(\log x)^{1.1}}\\
&= 1 - e^{- (\log x)^{1.1} \cdot (\log y)} \sum_{\nu = 0}^{[\log x]} \frac {(\log x)^{1.1} (\log y)^{\nu}} {\nu !}\\
&= \left\{\frac {1} {[ \log x ] !} \right\} \int_{0}^{(\log x) ! \cdot (\log y)} e^{- \lambda} \lambda^{[ \log x ]} \mathrm{d} \lambda
\end{aligned}$$

因为  $0\leq y \leq1$ 时, $\Phi(y)=0$. 故由上式得到: 当  $y\geq0$  时, 则  $\Phi(y)$ 是一个非减函数.

又当  $y \geq e^{2 (\log x) - 1.0}$  时, 有

[^_^]: 为什么这里要写1.0?

$$\begin{aligned}
0 < 1 - \Phi (y)
&=\left\{\frac {1} {[ \log x ] !} \right\} \int_{(\log x)^{1.1} (\log y)}^{\infty} e^{- \lambda} \lambda^{[\log x ]} \mathrm{d} \lambda\\
&\leq \left\{\frac {1} {[ \log x ] !} \right\} \int_{2 [ \log x ]}^{\infty} e^{- \lambda} \lambda^{[ \log x ]} \mathrm{d} \lambda \\
&= \left\{\frac {([ \log x ])^{1 + [ \log x)}} {[ \log x ] !} \right\}\cdot\int_{2}^{\infty} e^{- \lambda [\log x]} \lambda^{[ \log x ]} \mathrm{d} \lambda\\
&=\left\{\frac {e^{-[ \log x ]} ([ \log x ])^{1 +[\log x]}} {[ \log x ] !} \right\}\cdot \int_{1}^{\infty} e^{- \lambda [\log x]} (1 + \lambda)^{[\log x]} \mathrm{d} \lambda \\
&\leq x^{- 0.1}
\end{aligned}$$
 

其中用到 $\log x\geq10^4$ 及当 $\lambda\geq1$ 时, 有 $e^{\log (1 + \lambda)} \leq e^{\lambda \log 2}$.

