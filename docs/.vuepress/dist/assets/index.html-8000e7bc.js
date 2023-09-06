import{_ as n,p as s,q as a,a1 as p}from"./framework-e5ca3300.js";const t={},e=p(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><h2 id="atomic" tabindex="-1"><a class="header-anchor" href="#atomic" aria-hidden="true">#</a> atomic</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$primary</span></span><span class="token punctuation">:</span> #0a71ce<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$success</span></span><span class="token punctuation">:</span> #67c23a<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$warning</span></span><span class="token punctuation">:</span> #e6a23c<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$danger</span></span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$info</span></span><span class="token punctuation">:</span> #909399<span class="token punctuation">;</span>

<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px -1px 0px 0px #e6e8ed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.handle-button </span><span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> static<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px 24px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 颜色</span>
<span class="token selector">.color-white </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.color-success </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$success</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.color-warning </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$warning</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.color-danger </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$danger</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.color-info </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$info</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.color-primary </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 宽度 */</span>
<span class="token selector">.w-100 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.w-all </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.h-all </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* flex 布局 */</span>
<span class="token selector">.flex </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-row </span><span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-col </span><span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-row-reverse </span><span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row-reverse <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-col-reverse </span><span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column-reverse <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-wrap </span><span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-nowrap </span><span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.justify-start </span><span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.justify-end </span><span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.justify-between </span><span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.justify-around </span><span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.justify-evenly </span><span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.justify-center </span><span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.align-center </span><span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.align-stretch </span><span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.align-start </span><span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.align-end </span><span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-start </span><span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content-end </span><span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content-center </span><span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content-between </span><span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content-around </span><span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content-stretch </span><span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-1 </span><span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-2 </span><span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-3 </span><span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-4 </span><span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-5 </span><span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-shrink </span><span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义内外边距，历遍1-60</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 0 <span class="token keyword">through</span> <span class="token selector">60 </span><span class="token punctuation">{</span>
  <span class="token comment">// 能被5除尽的数</span>
  <span class="token selector">.px-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.py-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mx-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.my-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.m-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.p-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.ml-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mt-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mr-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mb-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.pl-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.pt-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.pr-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.pb-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.m-auto </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义字体(px)单位，</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 12 <span class="token keyword">through</span> <span class="token selector">60 </span><span class="token punctuation">{</span>
  <span class="token selector">.font-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// line-height</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 12 <span class="token keyword">through</span> <span class="token selector">60 </span><span class="token punctuation">{</span>
  <span class="token selector">.line-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 圆角</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 4 <span class="token keyword">through</span> <span class="token selector">40 </span><span class="token punctuation">{</span>
  <span class="token selector">.rounded-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.rounded-c </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ls </span><span class="token punctuation">{</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ls-1 </span><span class="token punctuation">{</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ls-2 </span><span class="token punctuation">{</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ls-3 </span><span class="token punctuation">{</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ls-4 </span><span class="token punctuation">{</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ls-7 </span><span class="token punctuation">{</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 内容溢出 */</span>
<span class="token selector">.overflow-hidden </span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.overflow-y-hidden </span><span class="token punctuation">{</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.overflow-x-hidden </span><span class="token punctuation">{</span>
  <span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.overflow-y-auto </span><span class="token punctuation">{</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.overflow-x-auto </span><span class="token punctuation">{</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.overflow-y-scroll </span><span class="token punctuation">{</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.overflow-x-scroll </span><span class="token punctuation">{</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 文字缩进 */</span>

<span class="token selector">.text-indent </span><span class="token punctuation">{</span>
  <span class="token property">text-indent</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 文字划线 */</span>
<span class="token selector">.text-through </span><span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> line-through<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 文字对齐 */</span>
<span class="token selector">.text-left </span><span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-right </span><span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-center </span><span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 文字换行溢出处理 */</span>
<span class="token selector">.text-ellipsis </span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.text-ellipsis-2 </span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span> <span class="token comment">//多行在这里修改数字即可</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 文字粗细和斜体 */</span>
<span class="token selector">.font-weight-light </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 300<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">/*细*/</span>
<span class="token selector">.font-weight-lighter </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">/*更细*/</span>
<span class="token selector">.font-weight-normal </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">/*正常*/</span>
<span class="token selector">.font-weight-bold </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">/*粗*/</span>
<span class="token selector">.font-weight-bolder </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">/*更粗*/</span>
<span class="token selector">.font-italic </span><span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">/*斜体*/</span>

<span class="token comment">/* 文字颜色 */</span>
<span class="token selector">.text-white </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-gray </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-main </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #842ab5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-primary </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #0076f6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-hover-primary </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #0056b3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-secondary </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #6c757d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-hover-secondary </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #494f54<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-success </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #28a745<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-hover-success </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #19692c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-info </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #17a2b8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-hover-info </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #0f6674<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-warning </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffc107<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-hover-warning </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ba8b00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-danger </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #dc3545<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-hover-danger </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #a71d2a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-light </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f8f9fa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-hover-light </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #cbd3da<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-dark </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #343a40<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-hover-dark </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #121416<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-body </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-muted </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #6c757d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-light-muted </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #a9a5a0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-light-black </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-light-white </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token property"><span class="token variable">$borderWidth</span></span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token comment">// 边框</span>
<span class="token selector">.border </span><span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">$borderWidth</span><span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #dee2e6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-top </span><span class="token punctuation">{</span>
  <span class="token property">border-top-width</span><span class="token punctuation">:</span> <span class="token variable">$borderWidth</span><span class="token punctuation">;</span>
  <span class="token property">border-top-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-top-color</span><span class="token punctuation">:</span> #dee2e6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-right </span><span class="token punctuation">{</span>
  <span class="token property">border-right-width</span><span class="token punctuation">:</span> <span class="token variable">$borderWidth</span><span class="token punctuation">;</span>
  <span class="token property">border-right-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-right-color</span><span class="token punctuation">:</span> #dee2e6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-bottom </span><span class="token punctuation">{</span>
  <span class="token property">border-bottom-width</span><span class="token punctuation">:</span> <span class="token variable">$borderWidth</span><span class="token punctuation">;</span>
  <span class="token property">border-bottom-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #dee2e6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-left </span><span class="token punctuation">{</span>
  <span class="token property">border-left-width</span><span class="token punctuation">:</span> <span class="token variable">$borderWidth</span><span class="token punctuation">;</span>
  <span class="token property">border-left-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> #dee2e6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 定位 */</span>
<span class="token selector">.position-relative </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.position-absolute </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.position-fixed </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 定位 - 固定顶部 */</span>
<span class="token selector">.fixed-top </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1030<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 定位 - 固定底部 */</span>
<span class="token selector">.fixed-bottom </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1030<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.top-0 </span><span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left-0 </span><span class="token punctuation">{</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right-0 </span><span class="token punctuation">{</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bottom-0 </span><span class="token punctuation">{</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.cursor-pointer </span><span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
