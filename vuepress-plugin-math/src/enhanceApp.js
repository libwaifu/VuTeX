import './index.styl';
import parseMacro from '../lib/charMacro';

export default () => {
  if (window.MathJax) return;
  const script = document.createElement('script');
  script.setAttribute('src', '//cdn.bootcss.com/mathjax/2.7.5/MathJax.js');
  document.head.appendChild(script);
export default ({ Vue }) => {
  if (window.MathJax) return
  const script = document.createElement('script')
  script.setAttribute('src', '//cdn.bootcss.com/mathjax/2.7.5/MathJax.js')
  document.head.appendChild(script)
  script.addEventListener('load', () => {
    Vue.prototype.mathjax = window.MathJax
    window.MathJax.Hub.Config({
      showProcessingMessages: false,
      messageStyle: 'none',
      extensions: ['toMathML.js', 'tex2jax.js'],
      TeX: {
        extensions: [
          'AMSmath.js',
          'AMSsymbols.js',
          'noErrors.js',
          'noUndefined.js'
        ]
      },
      tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        processEscapes: true
        //preview: 'none'
      },
      jax: ['input/TeX', 'output/HTML-CSS'],
      'HTML-CSS': {
        availableFonts: ['STIX', 'TeX']
        //showMathMenu: false
      }
    });
    window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    window.MathJax.Hub.Register.StartupHook('TeX Jax Ready', function() {
      window.MathJax.InputJax.TeX.prefilterHooks.Add(data => {
        data.math = parseMacro(data.math);
      });
    });
    window.MathJax.Hub.Register.StartupHook('TeX Jax Ready', function() {
      window.MathJax.InputJax.TeX.Definitions.Add({
        macros: {
          '|': ['Macro', '\\left|#1\\right|', 1],
          '(': ['Macro', '\\left(#1\\right)', 1],
          '[': ['Macro', '\\left[#1\\right]', 1],
          '<': ['Macro', '\\left<#1\\right>', 1],
          '{': ['Macro', '\\left{#1\\right}', 1]
        }
      });
    });
  });
  // 点开新界面必然导致有 DOM 被移除
  document.addEventListener('DOMNodeRemoved', () => {
    window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
  })
  // Todo: 长公式滑动条监听鼠标滚轮
};
