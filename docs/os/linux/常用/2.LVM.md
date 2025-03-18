# LVM
## 创建lvm
- **创建物理卷（PV）**：
```
pvcreate /dev/sdb
```
- **创建卷组（VG）**：
```
vgcreate vg1 /dev/sdb
```
- **创建逻辑卷（LV）**：
```
lvcreate -L 10G -n lv1 vg1
```
或
```
lvcreate -l +100%FREE -n lv1 vg1
```
- **格式化逻辑卷**：
```
mkfs.ext4 /dev/vg1/lv1
```
- **挂载**：
在`/etc/fstab`中添加
```
/dev/vg1/lv1  /data  ext4  defaults  0  0
```
## 扩容LVM
- **扩展卷组（VG）**：
```
vgextend vg1 /dev/sdc
```
- **扩展逻辑卷（LV）**：
```
lvextend -L 20G /dev/vg1/lv1
```
或
```
lvextend -l +100%FREE /dev/vg1/lv1
```
- **扩展文件系统**：
```
resize2fs /dev/vg1/lv1
```
