转自[探索云原生](https://www.cnblogs.com/KubeExplorer/p/18531449)
## 安装 nvidia-container-toolkit

NVIDIA Container Toolkit 的主要作用是将 NVIDIA GPU 设备挂载到容器中。

兼容生态系统中的任意容器运行时，docker、containerd、cri-o 等。

NVIDIA 官方安装文档：[nvidia-container-toolkit-install-guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)

对于 Ubuntu 系统，安装命令如下：
```
# 1. Configure the production repository
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

# Optionally, configure the repository to use experimental packages 
sed -i -e '/experimental/ s/^#//g' /etc/apt/sources.list.d/nvidia-container-toolkit.list

# 2. Update the packages list from the repository
sudo apt-get update

# 3. Install the NVIDIA Container Toolkit packages
sudo apt-get install -y nvidia-container-toolkit
```
## 配置使用该 runtime
支持 Docker, Containerd, CRI-O, Podman 等 CRI。

具体见官方文档 [container-toolkit#install-guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#configuration)

这里以 Docker 为例进行配置：

旧版本需要手动在 `/etc/docker/daemon.json` 中增加配置，指定使用 nvidia 的 runtime。

```
    "runtimes": {
        "nvidia": {
            "args": [],
            "path": "nvidia-container-runtime"
        }
    }
```
新版 toolkit 带了一个`nvidia-ctk`工具，执行以下命令即可一键配置：
```
sudo nvidia-ctk runtime configure --runtime=docker
```
重启 Docker
```
sudo systemctl restart docker
```
## 启动 Docker 容器进行测试，其中命令中增加 `--gpu`参数来指定要分配给容器的 GPU。

`--gpu` 参数可选值：

`--gpus all`：表示将所有 GPU 都分配给该容器
`--gpus "device=<id>[,<id>...]"`：对于多 GPU 场景，可以通过 id 指定分配给容器的 GPU，例如 --gpu "device=0" 表示只分配 0 号 GPU 给该容器
GPU 编号则是通过`nvidia-smi`命令进行查看
