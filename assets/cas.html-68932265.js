import{_ as a,o as e,c as d,d as h}from"./app-57542e83.js";const r={},i=h('<p>为了线程间共享数据的安全性，我们引入了锁的机制。不管是<code>synchronized</code>内置锁还是重入锁，在高并发时，对锁的激烈竞争导致的线程等待很大程度上会影响性能。为此，人们想到了一种称为非阻塞同步的方法，这种方式不需要锁。它，就是我们今天要讲的<code>CAS</code>。</p><h2 id="cas" tabindex="-1"><a class="header-anchor" href="#cas" aria-hidden="true">#</a> CAS</h2><p>CAS全称<code>Compare And Swape</code>，是一种比较并交换的算法。在硬件层面上，大多数处理器架构中，是已经支持原子化的CAS指令的。在JDK 1.5之后，虚拟机就可以使用这个指令了。</p><p>CAS包含了<code>3</code>个操作数，它的形式为CAS(V, E, N)。其中V表示要更新的地址，E表示要比较的值，N表示新值。</p><ul><li>当V的值等于E时，V的值更新为N，返回的结果为V原有的值E</li><li>当V的值不等于E时，说明有其它的线程做了更新，则当前线程就不做V值的更新。返回的结果是V的值</li></ul><p>CAS的操作是乐观的，因为它总是希望自己能够成功的执行更新操作。</p><p>当多个线程尝试使用CAS更新同一个变量时，只有一个线程能够更新成功，其他线程都将更新失败。而且这些更新失败的线程并不会等待被挂起，而是被告知失败的结果。对于失败后的处理，线程可以自行处理。</p><p>线程在竞争CAS失败时不会阻塞，它可以决定是否重试，或者执行一些恢复操作，或者啥都不干直接退出。把这种竞争失败的处理交由给开发人员，这种灵活性就大大减少了与锁相关的活跃性问题了(死锁和优先级反转等等)。</p><h2 id="原子操作" tabindex="-1"><a class="header-anchor" href="#原子操作" aria-hidden="true">#</a> 原子操作</h2><p>内存屏障？原子性是由硬件指令支持的，那内存的可见性呢？</p><h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h2><p><code>Unsafe</code></p><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><h3 id="aba问题" tabindex="-1"><a class="header-anchor" href="#aba问题" aria-hidden="true">#</a> ABA问题</h3><h3 id="循环长开销大" tabindex="-1"><a class="header-anchor" href="#循环长开销大" aria-hidden="true">#</a> 循环长开销大</h3><p>CAS的原子操作只能针对一个共享变量。</p><h3 id="单个共享变量" tabindex="-1"><a class="header-anchor" href="#单个共享变量" aria-hidden="true">#</a> 单个共享变量</h3><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',20),c=[i];function n(s,t){return e(),d("div",null,c)}const l=a(r,[["render",n],["__file","cas.html.vue"]]);export{l as default};