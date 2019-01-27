# @vutex/vuepress-plugin-math

A vuepress plugin which provides support for latex syntax in markdown files.

## Basic Usage

### Inline Latex

```md
因为 $0\leq y\leq1$ 时, $\Phi(y)=0$. 故由上式得到: 当 $y\geq0$ 时, 则 $\Phi(y)$ 是一个非减函数.
```

因为 $0\leq y\leq1$ 时, $\Phi(y)=0$. 故由上式得到: 当 $y\geq0$ 时, 则 $\Phi(y)$ 是一个非减函数.

### Latex Block

```md
$$
\frac {\partial^{r}} {\partial \omega^{r}} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right)  \left\{(\log y)^{r} + \sum_{i = 1}^{r} \frac {(- 1)^{i} r \cdots (r - i + 1) (\log y)^{r - i}} {\omega^{i}} \right\}
\label{a}\tag{1}
$$
```

$$
\frac {\partial^{r}} {\partial \omega^{r}} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right)  \left\{(\log y)^{r} + \sum_{i = 1}^{r} \frac {(- 1)^{i} r \cdots (r - i + 1) (\log y)^{r - i}} {\omega^{i}} \right\}
\label{a}\tag{1}
$$
