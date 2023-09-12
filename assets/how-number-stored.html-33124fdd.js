const s=JSON.parse('{"key":"v-f5270e8e","path":"/java/base/how-number-stored.html","title":"数字是咋个存储的","lang":"en-US","frontmatter":{"title":"数字是咋个存储的","date":"2023-08-03T00:00:00.000Z","category":"java","tag":["Java"]},"headers":[{"level":2,"title":"概念介绍","slug":"概念介绍","link":"#概念介绍","children":[{"level":3,"title":"什么是原码","slug":"什么是原码","link":"#什么是原码","children":[]},{"level":3,"title":"什么是反码","slug":"什么是反码","link":"#什么是反码","children":[]},{"level":3,"title":"什么是补码","slug":"什么是补码","link":"#什么是补码","children":[]},{"level":3,"title":"整数的表示","slug":"整数的表示","link":"#整数的表示","children":[]},{"level":3,"title":"浮点数的表示","slug":"浮点数的表示","link":"#浮点数的表示","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"使用补码，怎么乘除法？","slug":"使用补码-怎么乘除法","link":"#使用补码-怎么乘除法","children":[]},{"level":3,"title":"字节序的大端模式与小端模式？","slug":"字节序的大端模式与小端模式","link":"#字节序的大端模式与小端模式","children":[]},{"level":3,"title":"浮点数正无穷与负无穷？","slug":"浮点数正无穷与负无穷","link":"#浮点数正无穷与负无穷","children":[]},{"level":3,"title":"浮点数为什么要加偏移量？","slug":"浮点数为什么要加偏移量","link":"#浮点数为什么要加偏移量","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694501966000,"updatedTime":1694501966000},"readingTime":{"minutes":7.2,"words":2159},"filePathRelative":"java/base/how-number-stored.md","localizedDate":"August 3, 2023","excerpt":"<p>数乃万物之理，了解数字，就是掌握真理。都知道数字在计算机中是二进制存储的，但是具体到存储细节可能让很多程序员犯难了。这里我们就深耕细节，展开介绍下整数及浮点数在java虚拟机的表示。</p>\\n<h2> 概念介绍</h2>\\n<p>计算机的信息都是以二进制形式表示的，数值也不例外。数有正负之分，那就把最高位存放符号位呗(0为正，1为负)，这诞生了原码。</p>\\n<h3> 什么是原码</h3>\\n<p>所谓原码，就是符号位加上数字的二进制表示，其中符号位1表示负数，0表示正数。比如说该整数类型的位数是8，那么原码能够表示该整数类型数值的范围就是：(-<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mn>2</mn><mn>7</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\\"application/x-tex\\">2^7 + 1</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8974em;vertical-align:-0.0833em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">2</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">7</span></span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6444em;\\"></span><span class=\\"mord\\">1</span></span></span></span>) ~ (<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mn>2</mn><mn>7</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\\"application/x-tex\\">2^7 - 1</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8974em;vertical-align:-0.0833em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">2</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">7</span></span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6444em;\\"></span><span class=\\"mord\\">1</span></span></span></span>) =&gt; (-127 ~ 127)</p>","copyright":{"author":"huhx","license":"MIT"}}');export{s as data};
