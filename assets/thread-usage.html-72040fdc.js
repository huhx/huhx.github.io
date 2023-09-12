const e=JSON.parse('{"key":"v-f0e1d4ac","path":"/java/thread/thread-usage.html","title":"线程的使用","lang":"en-US","frontmatter":{"title":"线程的使用","date":"2023-08-05T00:00:00.000Z","category":"java","tag":["Thread","Concurrency"]},"headers":[{"level":2,"title":"线程的创建","slug":"线程的创建","link":"#线程的创建","children":[{"level":3,"title":"继承Thread类","slug":"继承thread类","link":"#继承thread类","children":[]},{"level":3,"title":"实现Runnable接口","slug":"实现runnable接口","link":"#实现runnable接口","children":[]}]},{"level":2,"title":"线程的暂停","slug":"线程的暂停","link":"#线程的暂停","children":[]},{"level":2,"title":"线程的终止","slug":"线程的终止","link":"#线程的终止","children":[]},{"level":2,"title":"线程的中断","slug":"线程的中断","link":"#线程的中断","children":[]},{"level":2,"title":"线程wait和notify","slug":"线程wait和notify","link":"#线程wait和notify","children":[]},{"level":2,"title":"线程优先级","slug":"线程优先级","link":"#线程优先级","children":[]},{"level":2,"title":"线程join和yield","slug":"线程join和yield","link":"#线程join和yield","children":[{"level":3,"title":"join方法","slug":"join方法","link":"#join方法","children":[]},{"level":3,"title":"yield方法","slug":"yield方法","link":"#yield方法","children":[]}]},{"level":2,"title":"守护线程","slug":"守护线程","link":"#守护线程","children":[]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"在构建方法里面启动线程？","slug":"在构建方法里面启动线程","link":"#在构建方法里面启动线程","children":[]},{"level":3,"title":"notify与notifyAll的区别？","slug":"notify与notifyall的区别","link":"#notify与notifyall的区别","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1694501966000,"updatedTime":1694501966000},"readingTime":{"minutes":12.29,"words":3688},"filePathRelative":"java/thread/thread-usage.md","localizedDate":"August 5, 2023","excerpt":"<p>在上一篇博客我们讲到什么是线程，这里我们来简单的介绍下线程的使用。</p>\\n<h2> 线程的创建</h2>\\n<p>线程的创建有两种方式，一种是<code>继承Thread类</code>，另一种是<code>实现Runnable接口</code>。比较推荐的是<code>实现Runnable接口</code>的这种方式。</p>\\n<p><code>Thread</code>本身是实现了<code>Runnable</code>接口的，调用<code>start()</code>方法会新建一个线程(这个逻辑存在于native方法<code>start0</code>中)并让此线程调用<code>run()</code>方法。</p>","copyright":{"author":"huhx","license":"MIT"}}');export{e as data};
