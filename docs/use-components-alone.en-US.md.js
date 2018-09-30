webpackJsonp([45],{1134:function(n,s){n.exports={content:["article",["p","The scaffold of Ant Design Pro provides a set of ",["a",{title:null,href:"http://pro.ant.design/components"},"default components"],", which abstract common block in admin interfaces. We will continue to maintain and iterate these components to provide a higher level of abstraction than Ant Design for admin interfaces."],["h2","Usage"],["p","The components in the scaffold of Ant Design Pro are divided into two types:"],["ul",["li",["p","antd components: ",["a",{title:null,href:"https://ant.design/docs/react/introduce"},"https://ant.design/docs/react/introduce"]]],["li",["p","pro built-in components: ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/tree/master/src/components"},"https://github.com/ant-design/ant-design-pro/tree/master/src/components"]]]],["p","For scaffolding users, you can import/add/reform pro's built-in components directly. Please refer to ",["a",{title:null,href:"/docs/new-component"},"new components"]," for specific usage."],["p","For users without using scaffold, we provide a way to use pro's built-in components."],["blockquote",["p","Default components will be published to ",["a",{title:null,href:"http://npmjs.com/ant-design-pro"},"ant-design-pro"]," in npm's repository."]],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> ant-design-pro@latest --save'},["code","$ npm install ant-design-pro@latest --save"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'ant-design-pro/dist/ant-design-pro.css\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Import whole style</span>'},["code","import 'ant-design-pro/dist/ant-design-pro.css'; // Import whole style"]],["p","Then you can import pro's components like Ant Design."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Result <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/Result\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import Result from 'ant-design-pro/lib/Result';\n\nReactDOM.render(<Result type=\"success\" />, mountNode);"]],["h3","\u6309\u9700\u52a0\u8f7d"],["p","You can use babel-plugin-import to load on demand. After adding this plugin, you can write it like this."],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Result <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'ant-design-pro\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Result type<span class="token operator">=</span><span class="token string">"success"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Result } from 'ant-design-pro';\n\nReactDOM.render(<Result type=\"success\" />, mountNode);"]],["p","This method is recommended."],["p","babel-plugin-import Configuration is as follows\uff1a"],["pre",{lang:"js",highlighted:' <span class="token punctuation">{</span>\n    libraryName<span class="token punctuation">:</span> <span class="token string">\'ant-design-pro\'</span><span class="token punctuation">,</span>\n    libraryDirectory<span class="token punctuation">:</span> <span class="token string">\'lib\'</span><span class="token punctuation">,</span>\n    style<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    camel2DashComponentName<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token operator">></span> Note that pro\'s components is dependent on antd@<span class="token number">3.0</span> by <span class="token keyword">default</span> and you need to ensure consistency <span class="token keyword">with</span> antd\u2018s version<span class="token punctuation">.</span>\n\n## Document <span class="token operator">&amp;</span> FeedBack\n\nYou can find all components<span class="token punctuation">,</span> demos and API documents on <span class="token punctuation">[</span>the components\' page<span class="token punctuation">]</span><span class="token punctuation">(</span>http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>pro<span class="token punctuation">.</span>ant<span class="token punctuation">.</span>design<span class="token operator">/</span>components<span class="token punctuation">)</span><span class="token punctuation">.</span>\n\nComponents \bwill <span class="token keyword">continue</span> to iterate <span class="token keyword">with</span> the scaffold\'s update<span class="token punctuation">.</span> If you have any questions and demands<span class="token punctuation">,</span> you can feed back <span class="token punctuation">[</span>here<span class="token punctuation">]</span><span class="token punctuation">(</span>http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>ant<span class="token operator">-</span>design<span class="token operator">/</span>ant<span class="token operator">-</span>design<span class="token operator">-</span>pro<span class="token operator">/</span>issues<span class="token punctuation">)</span><span class="token punctuation">.</span>\n\n<span class="token operator">-</span> Latest Version\uff1a<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">[</span>ant<span class="token operator">-</span>design<span class="token operator">-</span>pro<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>img<span class="token punctuation">.</span>shields<span class="token punctuation">.</span>io<span class="token operator">/</span>npm<span class="token operator">/</span>v<span class="token operator">/</span>ant<span class="token operator">-</span>design<span class="token operator">-</span>pro<span class="token punctuation">.</span>svg<span class="token operator">?</span>style<span class="token operator">=</span>flat<span class="token operator">-</span>square<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">(</span>http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span>ant<span class="token operator">-</span>design<span class="token operator">-</span>pro<span class="token punctuation">)</span>\n<span class="token operator">-</span> <span class="token punctuation">[</span>Change Log<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">/</span>docs<span class="token operator">/</span>changelog<span class="token punctuation">)</span>'},["code"," {\n    libraryName: 'ant-design-pro',\n    libraryDirectory: 'lib',\n    style: true,\n    camel2DashComponentName: false,\n}\n\n> Note that pro's components is dependent on antd@3.0 by default and you need to ensure consistency with antd\u2018s version.\n\n## Document & FeedBack\n\nYou can find all components, demos and API documents on [the components' page](http://pro.ant.design/components).\n\nComponents \bwill continue to iterate with the scaffold's update. If you have any questions and demands, you can feed back [here](http://github.com/ant-design/ant-design-pro/issues).\n\n- Latest Version\uff1a[![ant-design-pro](https://img.shields.io/npm/v/ant-design-pro.svg?style=flat-square)](http://npmjs.com/ant-design-pro)\n- [Change Log](/docs/changelog)"]]],meta:{order:16,title:"Use Pro Components Alone",type:"Advanced",filename:"docs/use-components-alone.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Usage",title:"Usage"},"Usage"]]]}}});