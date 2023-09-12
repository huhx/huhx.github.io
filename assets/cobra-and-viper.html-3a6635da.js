import{_ as n,o as s,c as a,d as t}from"./app-57542e83.js";const o={},e=t(`<h2 id="cobra" tabindex="-1"><a class="header-anchor" href="#cobra" aria-hidden="true">#</a> cobra</h2><h3 id="cobra-cli" tabindex="-1"><a class="header-anchor" href="#cobra-cli" aria-hidden="true">#</a> cobra-cli</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># install</span>
go <span class="token function">install</span> github.com/spf13/cobra-cli@latest

<span class="token comment"># 如果执行安装了，cobra-cli command not found，对么参考：https://github.com/spf13/cobra/issues/1964</span>

<span class="token comment"># create repo</span>
<span class="token function">mkdir</span> demo <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> demo

<span class="token comment"># download dependencies</span>
go mod init demo
go mod tidy

<span class="token comment"># more</span>
cobra-cli init <span class="token parameter variable">--author</span> <span class="token string">&quot;huhx&quot;</span> <span class="token parameter variable">--viper</span> <span class="token parameter variable">--license</span> apache
<span class="token function">touch</span> <span class="token environment constant">$HOME</span>/.demo.yaml

<span class="token comment"># add command</span>
cobra-cli <span class="token function">add</span> team
cobra-cli <span class="token function">add</span> create <span class="token parameter variable">-p</span> <span class="token string">&#39;teamCmd&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> flags</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 1. Working with Flags</span>
Persistent Flags<span class="token punctuation">:</span> 
	rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BoolVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Verbose<span class="token punctuation">,</span> <span class="token string">&quot;verbose&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;v&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;verbose output&quot;</span><span class="token punctuation">)</span>
Local Flags<span class="token punctuation">:</span> 
	localCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Source<span class="token punctuation">,</span> <span class="token string">&quot;source&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Source directory to read from&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 2. Required flags</span>
rootCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Region<span class="token punctuation">,</span> <span class="token string">&quot;region&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span>
rootCmd<span class="token punctuation">.</span><span class="token function">MarkFlagRequired</span><span class="token punctuation">(</span><span class="token string">&quot;region&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 3. groups</span>
<span class="token comment">// must be provided together or none of them</span>
rootCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">,</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;u&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Username (required if password is set)&quot;</span><span class="token punctuation">)</span>
rootCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pw<span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Password (required if username is set)&quot;</span><span class="token punctuation">)</span>
rootCmd<span class="token punctuation">.</span><span class="token function">MarkFlagsRequiredTogether</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// either --json or --yaml but never both</span>
rootCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ofJson<span class="token punctuation">,</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;Output in JSON&quot;</span><span class="token punctuation">)</span>
rootCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ofYaml<span class="token punctuation">,</span> <span class="token string">&quot;yaml&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;Output in YAML&quot;</span><span class="token punctuation">)</span>
rootCmd<span class="token punctuation">.</span><span class="token function">MarkFlagsMutuallyExclusive</span><span class="token punctuation">(</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yaml&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="auto-completion" tabindex="-1"><a class="header-anchor" href="#auto-completion" aria-hidden="true">#</a> auto completion</h3><p>zsh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;autoload -U compinit; compinit&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
./rbctl completion <span class="token function">zsh</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">\${fpath<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>/_rbctl&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inside-cobra" tabindex="-1"><a class="header-anchor" href="#inside-cobra" aria-hidden="true">#</a> inside cobra</h3><h2 id="viper" tabindex="-1"><a class="header-anchor" href="#viper" aria-hidden="true">#</a> viper</h2><h3 id="inside-viper" tabindex="-1"><a class="header-anchor" href="#inside-viper" aria-hidden="true">#</a> inside viper</h3><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,14),p=[e];function c(i,l){return s(),a("div",null,p)}const r=n(o,[["render",c],["__file","cobra-and-viper.html.vue"]]);export{r as default};