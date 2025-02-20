## S系列

### 初始化

```
system-view
vlan vlanid
interface vlanif vlanid
 ip address x.x.x.x y.y.y.y
 quit
ip route-static 0.0.0.0 0.0.0.0 z.z.z.z

super password level 15 cipher passwd

aaa
local-user username password irreversible-cipher passwd
local-user username service-type ssh
local-user username privilege level 1
quit
stelnet server enable
ssh user username authentication-type password
ssh user username service-type stelnet
ssh server-source all-interface

user-interface vty 0 4
authentication-mode aaa
protocol inbound ssh

return
save force

```

### 提权
```
command-privilege level x view shell dis cur
```

### dot1x
```
radius-server template qax
 radius-server authentication x.x.x.x 1812 weight 100
<!-- 默认80越大越优先 -->
 radius-server authentication x.x.x.x 1812 
 radius-server accounting x.x.x.x 1813 weight 100
 radius-server accounting x.x.x.x 1813 
 radius-server shared-key cipher xxx
#
aaa
 authentication-scheme qax
 authentication-mode radius
domain qax
 authentication-scheme qax
 radius-server qax
#
dot1x-access-profile name qax
 dot1x authentication-method eap
#
mac-access-profile name qax
#
authentication-profile name qax
 mac-access-profile qax
 dot1x-access-profile qax
 access-domain qax force
#
interface gigabitethernet 0/0/1
 authentication-profile qax
```

### 其他
s系列ssh支持低安全性密钥算法
```
load-module weakea
`根据回显输入后续命令`
```
