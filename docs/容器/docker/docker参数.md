## daemon常用参数修改
```
vim /etc/docker/daemon.json 
```
修改Cgroup驱动为systemd、修改镜像源、设置代理服务器
```
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "registry-mirrors": ["https://quay.io/repository "],
  "proxies": {
    "http_proxy": "http://x.x.x.x:xxx",
    "https_proxy": "https://x.x.x.x:xxx"
}
}
```
