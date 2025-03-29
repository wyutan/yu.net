import{_ as n,e as i,f as a,o as l}from"./app-CLHAN7Ey.js";const p={};function e(d,s){return l(),i("div",null,s[0]||(s[0]=[a(`<p><mark>在零配置设备部署场景中，如果用户指定配置文件，配置文件第一行需要指定版本号。版本号需要和软件大包的版本一致，否则可能会导致设备实际生效的配置与配置文件不一致</mark></p><h2 id="配置文件服务器" tabindex="-1"><a class="header-anchor" href="#配置文件服务器"><span>配置文件服务器</span></a></h2><p>并在文件服务器工作目录下创建文件<code>lswnet.cfg</code> 文件内容如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>esn=xxxx;vrpfile=s57li_easy_V200R022C00.cc;vrpver=V200R022C00SPC100;patchfile=s57li_easy_V200R022C00.pat;cfgfile=s57li_easy_V200R022C00.cfg;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置dhcp" tabindex="-1"><a class="header-anchor" href="#配置dhcp"><span>配置DHCP</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ip pool easy-operation</span></span>
<span class="line"><span> gateway-list x.x.x.</span></span>
<span class="line"><span> network x.x.x.0 mask 255.255.255.0</span></span>
<span class="line"><span> option 66 ascii sftp://tftpuser:password@192.168.4.6:10020</span></span>
<span class="line"><span> option 146 ascii netfile=lswnet.cfg;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交换机下行口" tabindex="-1"><a class="header-anchor" href="#交换机下行口"><span>交换机下行口</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>interface GigabitEthernet0/0/2</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan 10</span></span>
<span class="line"><span> port hybrid untagged vlan 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行初始化程序将生成的cfg文件存放于e-1-目录" tabindex="-1"><a class="header-anchor" href="#运行初始化程序将生成的cfg文件存放于e-1-目录"><span>运行<code>初始化</code>程序将生成的<code>cfg</code>文件存放于<code>E:\\1\\</code>目录</span></a></h2><h2 id="将配置文件上传至文件服务器" tabindex="-1"><a class="header-anchor" href="#将配置文件上传至文件服务器"><span>将配置文件上传至文件服务器</span></a></h2><h3 id="下载pscp-exe" tabindex="-1"><a class="header-anchor" href="#下载pscp-exe"><span>下载pscp.exe</span></a></h3><p>从PuTTY官方网站下载<code>pscp.exe</code>，并放到<code>C:\\Windows\\System32</code>目录下</p><h3 id="运行批处理上传配置文件" tabindex="-1"><a class="header-anchor" href="#运行批处理上传配置文件"><span>运行批处理上传配置文件</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@echo off</span></span>
<span class="line"><span>setlocal enabledelayedexpansion</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: 目标服务器信息</span></span>
<span class="line"><span>set USER=root</span></span>
<span class="line"><span>set PASSWORD=password</span></span>
<span class="line"><span>set HOST=10.1.1.1</span></span>
<span class="line"><span>set PORT=22</span></span>
<span class="line"><span>set REMOTE_PATH=/home/config/cfg/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: 本地文件夹</span></span>
<span class="line"><span>set LOCAL_PATH=E:\\1\\*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: 执行 SCP 上传</span></span>
<span class="line"><span>pscp -P %PORT% -pw %PASSWORD% %LOCAL_PATH% %USER%@%HOST%:%REMOTE_PATH%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo 上传完成！</span></span>
<span class="line"><span>pause</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动更新lswnet-cfg文件" tabindex="-1"><a class="header-anchor" href="#自动更新lswnet-cfg文件"><span>自动更新<code>lswnet.cfg</code>文件</span></a></h2><h3 id="安装inotifywait" tabindex="-1"><a class="header-anchor" href="#安装inotifywait"><span>安装<code>inotifywait</code></span></a></h3><h3 id="后台运行" tabindex="-1"><a class="header-anchor" href="#后台运行"><span>后台运行</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>nohup /home/hw_config/watch_cfg.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="监控cfg脚本" tabindex="-1"><a class="header-anchor" href="#监控cfg脚本"><span>监控<code>cfg</code>脚本</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">WATCH_DIR</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/home/config/cfg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">SCRIPT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/home/config/auto.sh</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">inotifywait</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -m</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> modify,create,delete,move</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$WATCH_DIR</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> while</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> read</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> path</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> action</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> do</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> - 检测到 $action: $file</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /home/config/monitor.log</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    bash</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$SCRIPT</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新lswnet-cfg文件的脚本" tabindex="-1"><a class="header-anchor" href="#更新lswnet-cfg文件的脚本"><span>更新<code>lswnet.cfg</code>文件的脚本</span></a></h3><p>配置文件名格式为<code>esn_ip.cfg</code> 脚本名<code>auto.sh</code></p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 源文件所在目录</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">source_dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/home/config/cfg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 目标文件 lswnet.cfg</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">target_file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/home/config/lswnet.cfg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 临时存储所有行的数组</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">declare</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> lines</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 遍历源目录下所有的 *_*.cfg 文件</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> file</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> in</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$source_dir</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/*_*.cfg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> do</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 提取文件名中的前缀（xxxx）和 IP 地址（10.1.1.1）</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  base_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">basename</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$file</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .cfg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  name_prefix</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=$(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$base_name</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sed</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -E</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s/([a-zA-Z0-9]+)_([0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+)$/\\1/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 生成新的行内容并存入数组</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  lines</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">esn=$name_prefix;cfgfile=cfg/$base_name.cfg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">done</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 统一写入 lswnet.cfg</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">printf</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%s\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">lines</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$target_file</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化脚本" tabindex="-1"><a class="header-anchor" href="#初始化脚本"><span>初始化脚本</span></a></h2><h3 id="excel文件" tabindex="-1"><a class="header-anchor" href="#excel文件"><span>excel文件</span></a></h3><p>文件名“info.xlsx ”</p><table><thead><tr><th>设备esn</th><th>交换机上所有vlan</th><th>下联口vlan</th><th>管理vlan</th><th>管理ip</th><th>掩码</th><th>缺省路由下一跳</th><th>用户名</th><th>密码</th></tr></thead><tbody><tr><td>esn</td><td>all_vlan</td><td>vlanid</td><td>mgmt_vlan</td><td>mgmt_ip</td><td>netmask</td><td>gateway</td><td></td><td></td></tr><tr><td>111</td><td>121 131</td><td>131</td><td>131</td><td>10.1.1.2</td><td>255.255.255.0</td><td>10.1.1.1</td><td></td><td></td></tr></tbody></table><h3 id="配置模板" tabindex="-1"><a class="header-anchor" href="#配置模板"><span>配置模板</span></a></h3><p>文件名“初始化.cfg”</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>sysname {mgmt_ip}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vlan batch {vlan_raw}</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>stp mode rstp</span></span>
<span class="line"><span>stp bpdu-protection</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>authentication-profile name default_authen_profile</span></span>
<span class="line"><span>authentication-profile name dot1x_authen_profile</span></span>
<span class="line"><span>authentication-profile name dot1xmac_authen_profile</span></span>
<span class="line"><span>authentication-profile name mac_authen_profile</span></span>
<span class="line"><span>authentication-profile name multi_authen_profile</span></span>
<span class="line"><span>authentication-profile name portal_authen_profile</span></span>
<span class="line"><span>authentication-profile name wsx</span></span>
<span class="line"><span> dot1x-access-profile wsx</span></span>
<span class="line"><span> mac-access-profile wsx</span></span>
<span class="line"><span> access-domain wsx force</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>http server-source -i MEth0/0/1</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>radius-server template default</span></span>
<span class="line"><span>radius-server template wsx</span></span>
<span class="line"><span> radius-server shared-key cipher 共享密钥</span></span>
<span class="line"><span> radius-server authentication 10.1.1.1 1812 weight 100</span></span>
<span class="line"><span> radius-server authentication 10.1.1.2 1812 weight 80</span></span>
<span class="line"><span> radius-server accounting 10.1.1.1 1813 weight 100</span></span>
<span class="line"><span> radius-server accounting 10.1.1.2 1813 weight 80</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>pki realm default</span></span>
<span class="line"><span> certificate-check none</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>free-rule-template name default_free_rule</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>portal-access-profile name portal_access_profile</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span> authentication-scheme default</span></span>
<span class="line"><span>  authentication-mode local</span></span>
<span class="line"><span> authentication-scheme wsx</span></span>
<span class="line"><span>  authentication-mode radius</span></span>
<span class="line"><span> authentication-scheme radius</span></span>
<span class="line"><span>  authentication-mode radius</span></span>
<span class="line"><span> authorization-scheme default</span></span>
<span class="line"><span>  authorization-mode local</span></span>
<span class="line"><span> accounting-scheme default</span></span>
<span class="line"><span>  accounting-mode none</span></span>
<span class="line"><span> domain default</span></span>
<span class="line"><span>  authentication-scheme radius</span></span>
<span class="line"><span>  accounting-scheme default</span></span>
<span class="line"><span>  radius-server default</span></span>
<span class="line"><span> domain default_admin</span></span>
<span class="line"><span>  authentication-scheme default</span></span>
<span class="line"><span>  accounting-scheme default</span></span>
<span class="line"><span> domain wsx</span></span>
<span class="line"><span>  authentication-scheme wsx</span></span>
<span class="line"><span>  accounting-scheme default</span></span>
<span class="line"><span>  radius-server wsx</span></span>
<span class="line"><span> undo local-user password change-offline enable</span></span>
<span class="line"><span> undo local-aaa-user change-password verify</span></span>
<span class="line"><span> local-user {username} password irreversible-cipher {passwd} </span></span>
<span class="line"><span> local-user {username} privilege level 15</span></span>
<span class="line"><span> local-user {username} service-type ssh</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>ntp-service server disable</span></span>
<span class="line"><span>ntp-service ipv6 server disable</span></span>
<span class="line"><span>ntp-service unicast-server 10.x.x.x</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface Vlanif1</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface Vlanif {mgmt_vlan}</span></span>
<span class="line"><span> ip address {mgmt_ip} {netmask}</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface MEth0/0/1</span></span>
<span class="line"><span> undo ip address </span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/1</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/2</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/3</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/4</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/5</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/6</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/7</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/8</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/9</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/10</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/11</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/12</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/13</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/14</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/15</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/16</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/17</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/18</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/19</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/20</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/21</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/22</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/23</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/24</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/25</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/26</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/27</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/28</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/29</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/30</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/31</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/32</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/33</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/34</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/35</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/36</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/37</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/38</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/39</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/40</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/41</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/42</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/43</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/44</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/45</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/46</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/47</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/48</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> port hybrid pvid vlan {vlanid}</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid untagged vlan {vlanid}</span></span>
<span class="line"><span> stp edged-port enable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface XGigabitEthernet0/0/1</span></span>
<span class="line"><span> port link-type trunk</span></span>
<span class="line"><span> port trunk allow-pass vlan {vlan_raw}</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface XGigabitEthernet0/0/2</span></span>
<span class="line"><span> port link-type trunk</span></span>
<span class="line"><span> port trunk allow-pass vlan {vlan_raw}</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface XGigabitEthernet0/0/3</span></span>
<span class="line"><span> port link-type trunk</span></span>
<span class="line"><span> port trunk allow-pass vlan {vlan_raw}</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface XGigabitEthernet0/0/4</span></span>
<span class="line"><span> port link-type trunk</span></span>
<span class="line"><span> port trunk allow-pass vlan {vlan_raw}</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface NULL0</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>undo icmp name timestamp-request receive</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>ip route-static 0.0.0.0 0.0.0.0 {gateway}</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>snmp-agent</span></span>
<span class="line"><span>snmp-agent community read cipher 团体名</span></span>
<span class="line"><span>snmp-agent sys-info version v2c v3</span></span>
<span class="line"><span>undo snmp-agent protocol source-status all-interface</span></span>
<span class="line"><span>snmp-agent protocol source-interface Vlanif{mgmt_vlan}</span></span>
<span class="line"><span>undo snmp-agent protocol source-status ipv6 all-interface</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>stelnet server enable</span></span>
<span class="line"><span>ssh user {username}</span></span>
<span class="line"><span>ssh user {username} authentication-type password</span></span>
<span class="line"><span>ssh user {username} service-type stelnet</span></span>
<span class="line"><span>ssh server-source all-interface</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>command-privilege level 1 view shell display current-configuration</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>user-interface con 0</span></span>
<span class="line"><span> authentication-mode password</span></span>
<span class="line"><span> set authentication password cipher console密码</span></span>
<span class="line"><span>user-interface vty 0 4</span></span>
<span class="line"><span> authentication-mode aaa</span></span>
<span class="line"><span>user-interface vty 16 20</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>dot1x-access-profile name dot1x_access_profile</span></span>
<span class="line"><span>dot1x-access-profile name wsx</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>mac-access-profile name mac_access_profile</span></span>
<span class="line"><span>mac-access-profile name wsx</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>ops</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>remote-unit</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>return</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本"><span>脚本</span></a></h3><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sys</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> datetime</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> pathlib </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Path</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> openpyxl </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> load_workbook</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 获取当前日期，并创建文件夹</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">current_date </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> datetime</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">datetime</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">now</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">strftime</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%Y%m</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">new_folder </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">current_date</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">new_folder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">mkdir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">exist_ok</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">True</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;📂 使用文件夹: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">new_folder</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 定义模板文件和 Excel 文件路径</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">template_file </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">初始化.cfg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">info_file </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">info.xlsx</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 确保模板和 Excel 文件存在</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> not</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> template_file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">exists</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">():</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;❌ 模板文件 </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">template_file</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 不存在！&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    input</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">按任意键退出...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    sys</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">exit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> not</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> info_file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">exists</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">():</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;❌ Excel 文件 </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">info_file</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 不存在！&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    input</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">按任意键退出...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    sys</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">exit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 加载 Excel 文件</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">wb </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> load_workbook</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">filename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">info_file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sheet </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> wb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">active</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># **获取 Excel 数据的最大有效行数**</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">max_row </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sheet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">max_row</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 读取模板内容，并去掉注释行</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">with</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> template_file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">open</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">r</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> encoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">utf-8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> as</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    template_content </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">join</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">line </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> line </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> template </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> not</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> line</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">strip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">startswith</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 统计成功生成的文件数量</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">generated_files </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 遍历 Excel 数据并生成文件（只读取前 9 列，跳过完全空的行）</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> row_index </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> range</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> max_row </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    row </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">cell</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">value </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> cell </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sheet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">row_index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">][:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">9</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 仅获取前 9 列数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 跳过全空行</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> all</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">cell </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">is</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> None</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> or</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">cell</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">).</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">strip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ==</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;&quot;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> cell </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        continue</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 直接跳过，不打印警告信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 检查缺失数据</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    missing_info </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> []</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    headers </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">设备 esn</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">交换机上所有 vlan</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">下联口 vlan</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">管理 vlan</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">管理 ip</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">掩码</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">缺省路由下一跳</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">用户名</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">密码</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> idx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> cell </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> enumerate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        if</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> cell </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">is</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> None</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            missing_info</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">append</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">headers</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">idx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 如果有缺失数据，打印错误并退出</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> missing_info</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;❌ [错误] Excel 第 </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">row_index</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 行缺失数据: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">join</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">missing_info</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        input</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">按任意键退出...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        sys</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">exit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 解析数据</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    esn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> vlan_raw</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> vlanid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> mgmt_vlan</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> mgmt_ip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> netmask</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> gateway</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> username</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> passwd </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> row</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 处理 VLAN ID</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> isinstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">vlan_raw</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        vlanid_list </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">v</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">strip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">())</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> v </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> vlan_raw</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">split</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> if</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> v</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">strip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isdigit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()]</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    elif</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> isinstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">vlan_raw</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> float</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        vlanid_list </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">vlan_raw</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)]</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    else</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;❌ Excel 第 </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">row_index</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 行 VLAN ID 格式错误: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">vlan_raw</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        input</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">按任意键退出...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        sys</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">exit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 转换 VLAN ID 为字符串格式</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    vlanid_str </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">join</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">map</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> vlanid_list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 生成配置内容</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    try</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        file_content </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> template_content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">format</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            vlan_raw</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">vlanid_str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> vlanid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">vlanid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> mgmt_vlan</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">mgmt_vlan</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            mgmt_ip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">mgmt_ip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> netmask</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">netmask</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> gateway</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gateway</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> username</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">username</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> passwd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">passwd</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        )</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    except</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> KeyError</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> as</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;❌ Excel 第 </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">row_index</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 行，模板变量缺失: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        input</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">按任意键退出...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        sys</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">exit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 生成文件</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    file_path </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> new_folder </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">esn</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">_</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">mgmt_ip</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.cfg&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    with</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> file_path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">open</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">w</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> encoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">utf-8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> errors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">replace</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> as</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> output_file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        output_file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">write</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">file_content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;✅ 生成文件: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">file_path</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    generated_files </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">+=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 输出成功信息</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> generated_files </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;🎉 脚本执行完成！共生成 </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">generated_files</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 个配置文件。&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">else</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">⚠️ 没有生成任何配置文件，请检查 Excel 数据是否完整。</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待用户按任意键退出</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">input</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">✅ 任务完成，按任意键退出...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32)]))}const h=n(p,[["render",e],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/network/rgty3fic/","title":"华为零配置开局","lang":"zh-CN","frontmatter":{"title":"华为零配置开局","createTime":"2025/03/29 02:33:28","permalink":"/network/rgty3fic/","description":"在零配置设备部署场景中，如果用户指定配置文件，配置文件第一行需要指定版本号。版本号需要和软件大包的版本一致，否则可能会导致设备实际生效的配置与配置文件不一致 配置文件服务器 并在文件服务器工作目录下创建文件lswnet.cfg 文件内容如下： 配置DHCP 交换机下行口 运行初始化程序将生成的cfg文件存放于E:\\\\1\\\\目录 将配置文件上传至文件服务器 ...","head":[["meta",{"property":"og:url","content":"http://git.x-cli.net/network/rgty3fic/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"华为零配置开局"}],["meta",{"property":"og:description","content":"在零配置设备部署场景中，如果用户指定配置文件，配置文件第一行需要指定版本号。版本号需要和软件大包的版本一致，否则可能会导致设备实际生效的配置与配置文件不一致 配置文件服务器 并在文件服务器工作目录下创建文件lswnet.cfg 文件内容如下： 配置DHCP 交换机下行口 运行初始化程序将生成的cfg文件存放于E:\\\\1\\\\目录 将配置文件上传至文件服务器 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-29T02:30:18.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-29T02:30:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"华为零配置开局\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-29T02:30:18.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":9.32,"words":2795},"git":{"updatedTime":1743215418000,"contributors":[{"name":"yu","username":"yu","email":"90786339+wyutan@users.noreply.github.com","commits":15,"avatar":"https://avatars.githubusercontent.com/yu?v=4","url":"https://github.com/yu"}]},"autoDesc":true,"filePathRelative":"network/自动化运维/2.华为零配置开局.md"}');export{h as comp,r as data};
