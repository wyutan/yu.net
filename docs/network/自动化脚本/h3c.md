```sh

#!/bin/bash

# 定义交换机的连接信息
switch_username="username"
switch_password="password"

# 获取当前日期的日、年和月
current_day=$(date "+%d")
current_year=$(date "+%Y")
current_month=$(date "+%m")

# 定义保存配置的文件夹路径
folder="/home/$current_year/$current_month"

# 如果文件夹不存在，则创建文件夹
mkdir -p "$folder"

# 遍历文件中的每个交换机 IP
while IFS= read -r switch_ip && [ -n "$switch_ip" ]; do


    # 定义保存配置的文件路径，包含交换机的 IP 地址和日期
    config_file="$folder/$current_day"_"$switch_ip.txt"

    # 使用 expect 执行脚本
    expect -c "
    spawn ssh $switch_username@$switch_ip
    expect {
        \"yes/no\" { send \"yes\r\"; exp_continue }
        -nocase \"Password:\" { send \"$switch_password\r\"; exp_continue }
    }
    expect \">\" { send \"screen-length disable\r\" }
    expect \">\" { send \"display current-configuration\r\" }
    expect \">\" { send \"quit\r\" }

    expect eof
    " > $config_file

    # 输出抓取完成的消息
    echo "Configuration saved to $config_file"
done < "/home/h3c.txt"
