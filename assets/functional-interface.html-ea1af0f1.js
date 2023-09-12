const e=JSON.parse('{"key":"v-4ddbba80","path":"/java/base/functional-interface.html","title":"函数式编程","lang":"en-US","frontmatter":{"title":"函数式编程","date":"2023-08-02T00:00:00.000Z","category":"java","tag":["Java"]},"headers":[{"level":2,"title":"函数式编程","slug":"函数式编程","link":"#函数式编程","children":[{"level":3,"title":"什么是函数接口","slug":"什么是函数接口","link":"#什么是函数接口","children":[]},{"level":3,"title":"函数接口的创建","slug":"函数接口的创建","link":"#函数接口的创建","children":[]},{"level":3,"title":"java函数式接口","slug":"java函数式接口","link":"#java函数式接口","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Lambda为什么不能抛出异常?","slug":"lambda为什么不能抛出异常","link":"#lambda为什么不能抛出异常","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1694501966000,"updatedTime":1694501966000},"readingTime":{"minutes":4.77,"words":1430},"filePathRelative":"java/base/functional-interface.md","localizedDate":"August 2, 2023","excerpt":"<p>千呼万唤始出来，Java 8终于引入了对函数式编程的支持。函数式编程是一种编程范式，它将计算视为数学函数的计算，使代码更加简洁、易于理解和维护。</p>\\n<h2> 函数式编程</h2>\\n<p>在<code>java.util.function</code>中，包含了大量的函数式的接口。其中就有我们熟悉的<code>Function</code>和<code>Supplier</code>，这些基本上满足了开发日常的需要。这些接口中的每一个都是通用且抽象的，使得它们很容易适应几乎任何lambda表达式。</p>\\n<h3> 什么是函数接口</h3>\\n<p>上面提到的接口有一个共性，那就是加上了<code>@FunctionalInterface</code>且只有一个<code>abstract方法</code>。比如</p>","copyright":{"author":"huhx","license":"MIT"}}');export{e as data};