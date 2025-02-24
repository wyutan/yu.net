# 华三
## dot1x
```
radius scheme qax
 primary authentication X.X.X.X
 secondary authentication X.X.X.X
 key authentication simple XXX
 key accounting simple XXX
 timer quiet 10
 timer response-timeout 5
 user-name-format without-domain

domain qax
 authentication lan-access radius-scheme qax
 authorization lan-access none
 accounting lan-access none
#
dot1x auth eap
mac-authentication domain qax 
domain default enable qax
#
dot1x
mac-authentication
interface range GigabitEthernet1/0/1
 port link-mode bridge
 port link-type hybrid
 undo port hybrid vlan 1
 port hybrid vlan 2811 untagged
 port hybrid pvid vlan 2811
 mac-vlan enable
 stp edged-port
 dot1x
 mac-authentication 

```

## 提权
```
rule name level-1
rule 10 permit command screen-length disable
```
