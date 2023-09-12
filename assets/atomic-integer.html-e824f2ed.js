import{_ as n,o as s,c as a,d as e}from"./app-57542e83.js";const t={},p=e(`<p><code>Atomic</code>翻译成中文是原子的意思，是指一个操作是不可中断的。在多个线程一起执行的时候，能够保证一个操作一旦开始，就不会被其他线程干扰。今天我们就来学习下java中自带的一些原子类。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>原子类都存放在<code>java.util.concurrent.atomic</code>下，这里以 AtomicInteger 为例子来介绍</p><p>AtomicInteger 类常用方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>AtomicInteger 类的部分源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Unsafe</span> <span class="token class-name">U</span> <span class="token operator">=</span> <span class="token class-name">Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token constant">VALUE</span> <span class="token operator">=</span> <span class="token class-name">U</span><span class="token punctuation">.</span><span class="token function">objectFieldOffset</span><span class="token punctuation">(</span><span class="token class-name">AtomicInteger</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>AtomicInteger</code>类主要利用CAS (compare and swap) + volatile和native方法来保证原子操作，从而避免 synchronized 的高开销，执行效率大为提升</p><p>CAS 的原理是拿期望的值和原本的一个值作比较，如果相同则更新成新的值。UnSafe 类的<code>objectFieldOffset</code>方法是一个本地方法，这个方法是用来拿到变量的内存地址。另外<code>value</code>是一个<code>volatile</code>变量，在内存中可见，因此 JVM 可以保证任何时刻任何线程总能拿到该变量的最新值。</p><h3 id="unsafe类" tabindex="-1"><a class="header-anchor" href="#unsafe类" aria-hidden="true">#</a> Unsafe类</h3><p>Unsafe类似于C中的指针，compareAndSetInt方法是一个native方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UnsafeMain</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchFieldException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过反射的方式获取Unsafe</span>
        <span class="token keyword">var</span> unsafeField <span class="token operator">=</span> <span class="token class-name">Unsafe</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;theUnsafe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        unsafeField<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> unsafe <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Unsafe</span><span class="token punctuation">)</span> unsafeField<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 分配1024 bytes的直接内存，并把整数42写入此内存地址中</span>
        <span class="token keyword">long</span> memoryAddress <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">allocateMemory</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        unsafe<span class="token punctuation">.</span><span class="token function">putInt</span><span class="token punctuation">(</span>memoryAddress<span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;address = &quot;</span> <span class="token operator">+</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span>memoryAddress<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 从内存地址中读取整数</span>
        <span class="token keyword">int</span> value <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span>memoryAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;value = &quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 释放直接内存</span>
        unsafe<span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span>memoryAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>address <span class="token operator">=</span> <span class="token number">7f</span><span class="token number">7</span>b4c844000
value <span class="token operator">=</span> <span class="token number">42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,18),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","atomic-integer.html.vue"]]);export{d as default};