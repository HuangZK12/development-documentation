import{_ as s,o as n,c as l,a}from"./app-30340c9c.js";const p={},e=a(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><h2 id="atomic" tabindex="-1"><a class="header-anchor" href="#atomic" aria-hidden="true">#</a> atomic</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#E06C75;">$primary</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#0a71ce</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$success</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#67c23a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$warning</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e6a23c</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$danger</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f56c6c</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$info</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#909399</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">#ffffff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  box-shadow: </span><span style="color:#D19A66;">0</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">#e6e8ed</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.handle-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-top: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">#ccc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">static</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">0</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">24</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-top: </span><span style="color:#D19A66;">48</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 颜色</span></span>
<span class="line"><span style="color:#D19A66;">.color-white</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.color-success</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$success</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.color-warning</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$warning</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.color-danger</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$danger</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.color-info</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$info</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.color-primary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$primary</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 宽度 */</span></span>
<span class="line"><span style="color:#D19A66;">.w-100</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">vw</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.w-all</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.h-all</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* flex 布局 */</span></span>
<span class="line"><span style="color:#D19A66;">.flex</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-direction: </span><span style="color:#D19A66;">row</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.flex-row</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-direction: </span><span style="color:#D19A66;">row</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.flex-col</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-direction: </span><span style="color:#D19A66;">column</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.flex-row-reverse</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-direction: </span><span style="color:#D19A66;">row-reverse</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.flex-col-reverse</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-direction: </span><span style="color:#D19A66;">column-reverse</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.flex-wrap</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-wrap: </span><span style="color:#D19A66;">wrap</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.flex-nowrap</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-wrap: </span><span style="color:#D19A66;">nowrap</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.justify-start</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">flex-start</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.justify-end</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">flex-end</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.justify-between</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">space-between</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.justify-around</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">space-around</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.justify-evenly</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">space-evenly</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.justify-center</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.align-center</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-items: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.align-stretch</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-items: </span><span style="color:#D19A66;">stretch</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.align-start</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-items: </span><span style="color:#D19A66;">flex-start</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.align-end</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-items: </span><span style="color:#D19A66;">flex-end</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.content-start</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-content: </span><span style="color:#D19A66;">flex-start</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.content-end</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-content: </span><span style="color:#D19A66;">flex-end</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.content-center</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-content: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.content-between</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-content: </span><span style="color:#D19A66;">space-between</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.content-around</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-content: </span><span style="color:#D19A66;">space-around</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.content-stretch</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-content: </span><span style="color:#D19A66;">stretch</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.flex-1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.flex-2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.flex-3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.flex-4</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.flex-5</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.flex-shrink</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-shrink: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 定义内外边距，历遍1-60</span></span>
<span class="line"><span style="color:#C678DD;">@for</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">through</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">60</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 能被5除尽的数</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.px-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-left: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-right: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.py-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-top: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-bottom: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.mx-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-right: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.my-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-top: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-bottom: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.m-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-right: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-top: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-bottom: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.p-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-left: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-right: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-top: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-bottom: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.ml-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.mt-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-top: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.mr-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-right: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.mb-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-bottom: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.pl-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-left: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.pt-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-top: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.pr-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-right: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.pb-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-bottom: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px </span><span style="color:#C678DD;">!important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.m-auto</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 定义字体(px)单位，</span></span>
<span class="line"><span style="color:#C678DD;">@for</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">through</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">60</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.font-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// line-height</span></span>
<span class="line"><span style="color:#C678DD;">@for</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">through</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">60</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.line-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    line-height: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 圆角</span></span>
<span class="line"><span style="color:#C678DD;">@for</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">through</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.rounded-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    border-radius: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.rounded-c</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-radius: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.ls</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  letter-spacing: </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.ls-1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  letter-spacing: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.ls-2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  letter-spacing: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.ls-3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  letter-spacing: </span><span style="color:#D19A66;">30</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.ls-4</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  letter-spacing: </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.ls-7</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  letter-spacing: </span><span style="color:#D19A66;">70</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 内容溢出 */</span></span>
<span class="line"><span style="color:#D19A66;">.overflow-hidden</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.overflow-y-hidden</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow-y: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.overflow-x-hidden</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow-x: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.overflow-y-auto</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow-y: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.overflow-x-auto</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow-y: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.overflow-y-scroll</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow-y: </span><span style="color:#D19A66;">scroll</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.overflow-x-scroll</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow-y: </span><span style="color:#D19A66;">scroll</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 文字缩进 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-indent</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-indent: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 文字划线 */</span></span>
<span class="line"><span style="color:#D19A66;">.text-through</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-decoration: </span><span style="color:#D19A66;">line-through</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 文字对齐 */</span></span>
<span class="line"><span style="color:#D19A66;">.text-left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-align: </span><span style="color:#D19A66;">left</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-align: </span><span style="color:#D19A66;">right</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-center</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-align: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 文字换行溢出处理 */</span></span>
<span class="line"><span style="color:#D19A66;">.text-ellipsis</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-overflow: </span><span style="color:#D19A66;">ellipsis</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  white-space: </span><span style="color:#D19A66;">nowrap</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-ellipsis-2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-overflow: </span><span style="color:#D19A66;">ellipsis</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: -webkit-box;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-line-clamp</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">//多行在这里修改数字即可</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-box-orient</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">vertical</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 文字粗细和斜体 */</span></span>
<span class="line"><span style="color:#D19A66;">.font-weight-light</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">300</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#7F848E;font-style:italic;">/*细*/</span></span>
<span class="line"><span style="color:#D19A66;">.font-weight-lighter</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#7F848E;font-style:italic;">/*更细*/</span></span>
<span class="line"><span style="color:#D19A66;">.font-weight-normal</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">400</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#7F848E;font-style:italic;">/*正常*/</span></span>
<span class="line"><span style="color:#D19A66;">.font-weight-bold</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">600</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#7F848E;font-style:italic;">/*粗*/</span></span>
<span class="line"><span style="color:#D19A66;">.font-weight-bolder</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">bold</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#7F848E;font-style:italic;">/*更粗*/</span></span>
<span class="line"><span style="color:#D19A66;">.font-italic</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-style: </span><span style="color:#D19A66;">italic</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#7F848E;font-style:italic;">/*斜体*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 文字颜色 */</span></span>
<span class="line"><span style="color:#D19A66;">.text-white</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#ffffff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-gray</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#999999</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-main</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#842ab5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-primary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#0076f6</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-hover-primary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#0056b3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-secondary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#6c757d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-hover-secondary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#494f54</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-success</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#28a745</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-hover-success</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#19692c</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-info</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#17a2b8</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-hover-info</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#0f6674</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-warning</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#ffc107</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-hover-warning</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#ba8b00</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-danger</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#dc3545</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-hover-danger</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#a71d2a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-light</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#f8f9fa</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-hover-light</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#cbd3da</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-dark</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#343a40</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-hover-dark</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#121416</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#333333</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-muted</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#6c757d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-light-muted</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#a9a5a0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-light-black</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.text-light-white</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$borderWidth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 边框</span></span>
<span class="line"><span style="color:#D19A66;">.border</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-width: </span><span style="color:#E06C75;">$borderWidth</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-style: </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-color: </span><span style="color:#D19A66;">#dee2e6</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.border-top</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-top-width: </span><span style="color:#E06C75;">$borderWidth</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-top-style: </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-top-color: </span><span style="color:#D19A66;">#dee2e6</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.border-right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-right-width: </span><span style="color:#E06C75;">$borderWidth</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-right-style: </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-right-color: </span><span style="color:#D19A66;">#dee2e6</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.border-bottom</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-bottom-width: </span><span style="color:#E06C75;">$borderWidth</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-bottom-style: </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-bottom-color: </span><span style="color:#D19A66;">#dee2e6</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.border-left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-left-width: </span><span style="color:#E06C75;">$borderWidth</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-left-style: </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-left-color: </span><span style="color:#D19A66;">#dee2e6</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 定位 */</span></span>
<span class="line"><span style="color:#D19A66;">.position-relative</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.position-absolute</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.position-fixed</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">fixed</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 定位 - 固定顶部 */</span></span>
<span class="line"><span style="color:#D19A66;">.fixed-top</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">fixed</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  right: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  z-index: </span><span style="color:#D19A66;">1030</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 定位 - 固定底部 */</span></span>
<span class="line"><span style="color:#D19A66;">.fixed-bottom</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">fixed</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  right: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  z-index: </span><span style="color:#D19A66;">1030</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.top-0</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.left-0</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.right-0</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  right: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.bottom-0</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.cursor-pointer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">cursor</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">pointer</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,B){return n(),l("div",null,o)}const t=s(p,[["render",c],["__file","index.html.vue"]]);export{t as default};
