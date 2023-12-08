(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{554:function(r,e,t){"use strict";t.r(e);var a=t(7),o=Object(a.a)({},(function(){var r=this,e=r._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("p",[r._v("原文地址:"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/555680710#:~:text=%E5%9C%A8Linux%E4%B8%AD%E6%9C%89,%E8%A3%85docker%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://zhuanlan.zhihu.com/p/555680710#:~:text=在Linux中有,装docker。"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("docker需要安装在Centos7及以上版本的Linux系统中。")]),r._v(" "),e("p",[r._v("在Linux中有两种安装docker的方法，一种是使用官方安装脚本自动安装docker，另一种是手动安装docker。")]),r._v(" "),e("h3",{attrs:{id:"使用官方安装脚本自动安装docker1-第一步-安装docker。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用官方安装脚本自动安装docker1-第一步-安装docker。"}},[r._v("#")]),r._v(" 使用官方安装脚本自动安装docker"),e("br"),r._v("1.第一步，安装docker。")]),r._v(" "),e("p",[r._v("官方安装脚本安装"),e("br"),r._v("命令：")]),r._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[r._v("curl "),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v("-")]),r._v("fsSL https"),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),e("span",{pre:!0,attrs:{class:"token comment"}},[r._v("//get.docker.com | bash -s docker --mirror Aliyun")]),r._v("\n")])]),r._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[r._v("1")]),e("br")])]),e("p",[r._v("也可以使用国内daocloud一键安装")]),r._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[r._v("curl "),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v("-")]),r._v("sSL https"),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),e("span",{pre:!0,attrs:{class:"token comment"}},[r._v("//get.daocloud.io/docker | sh")]),r._v("\n")])]),r._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[r._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-第二步-测试安装成功与否。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-第二步-测试安装成功与否。"}},[r._v("#")]),r._v(" 2.第二步，测试安装成功与否。")]),r._v(" "),e("p",[r._v("执行命令 docker -v"),e("br"),r._v("然后：跑一个项目验证是否完全成功"),e("br"),r._v("命令：docker run hello-world")]),r._v(" "),e("p",[r._v("若结果显示“docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?”,则运行如下命令：")]),r._v(" "),e("p",[r._v("systemctl daemon-reload")]),r._v(" "),e("p",[r._v("systemctl restart docker.service")]),r._v(" "),e("p",[r._v("再次验证：docker run hello-world")]),r._v(" "),e("p",[r._v("第三步，设置开机启动。")]),r._v(" "),e("h1",{attrs:{id:"允许开机启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#允许开机启动"}},[r._v("#")]),r._v(" 允许开机启动")]),r._v(" "),e("p",[r._v("命令：systemctl enable docker")]),r._v(" "),e("p",[r._v("第四步，查看docker版本。")]),r._v(" "),e("h1",{attrs:{id:"没启动docker之前查看docker版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#没启动docker之前查看docker版本"}},[r._v("#")]),r._v(" 没启动docker之前查看docker版本")]),r._v(" "),e("p",[r._v("命令：docker -v")]),r._v(" "),e("p",[r._v("或 docker version")]),r._v(" "),e("p",[r._v("手动安装docker"),e("br"),r._v("第一步，卸载旧版本docker。")]),r._v(" "),e("p",[r._v("若系统中已安装旧版本docker，则需要卸载旧版本docker以及与旧版本docker相关的依赖项。")]),r._v(" "),e("p",[r._v("命令：yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine")]),r._v(" "),e("p",[r._v("第二步，安装gcc依赖。")]),r._v(" "),e("p",[r._v("命令：yum -y install gcc gcc-c++")]),r._v(" "),e("p",[r._v("第三步，使用Docker仓库进行安装。")]),r._v(" "),e("p",[r._v("在新主机上首次安装Docker Engine-Community之前，需要设置Docker仓库。之后，可以从仓库安装和更新Docker。")]),r._v(" "),e("h1",{attrs:{id:"设置仓库-安装所需的软件包。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置仓库-安装所需的软件包。"}},[r._v("#")]),r._v(" 设置仓库，安装所需的软件包。")]),r._v(" "),e("p",[r._v("命令：yum install -y yum-utils device-mapper-persistent-data lvm2")]),r._v(" "),e("h1",{attrs:{id:"设置稳定的仓库-使用官方源地址-比较慢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置稳定的仓库-使用官方源地址-比较慢"}},[r._v("#")]),r._v(" 设置稳定的仓库，使用官方源地址（比较慢）")]),r._v(" "),e("p",[r._v("命令：yum-config-manager --add-repo "),e("a",{attrs:{href:"https://download.docker.com/linux/centos/docker-ce.repo",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://download.docker.com/linux/centos/docker-ce.repo"),e("OutboundLink")],1)]),r._v(" "),e("h1",{attrs:{id:"可以选择国内的一些源地址-如阿里云"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可以选择国内的一些源地址-如阿里云"}},[r._v("#")]),r._v(" 可以选择国内的一些源地址，如阿里云")]),r._v(" "),e("p",[r._v("命令：yum-config-manager --add-repo "),e("a",{attrs:{href:"http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo"),e("OutboundLink")],1)]),r._v(" "),e("h1",{attrs:{id:"可以选择国内的一些源地址-如清华大学源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可以选择国内的一些源地址-如清华大学源"}},[r._v("#")]),r._v(" 可以选择国内的一些源地址，如清华大学源")]),r._v(" "),e("p",[r._v("命令：yum-config-manager --add-repo "),e("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("第四步，安装Docker Engine-Community。")]),r._v(" "),e("h1",{attrs:{id:"安装最新版本的docker-engine-community和containerd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装最新版本的docker-engine-community和containerd"}},[r._v("#")]),r._v(" 安装最新版本的Docker Engine-Community和containerd")]),r._v(" "),e("p",[r._v("命令：yum install docker-ce docker-ce-cli "),e("a",{attrs:{href:"http://containerd.io",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://containerd.io"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("若启用了多个Docker仓库，则在利用“yum install”或“yum update”命令安装Docker时没有指定Docker版本情况下，进行Docker安装或更新将始终安装最高版本的Docker。")]),r._v(" "),e("p",[r._v("Docker安装完默认未启动，并且已经创建好docker用户组，但该用户组下没有用户。")]),r._v(" "),e("h1",{attrs:{id:"安装特定版本的docker-engine-community"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装特定版本的docker-engine-community"}},[r._v("#")]),r._v(" 安装特定版本的Docker Engine-Community")]),r._v(" "),e("h1",{attrs:{id:"列出存储库中可用的版本并按版本号从高到低进行排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出存储库中可用的版本并按版本号从高到低进行排序"}},[r._v("#")]),r._v(" 列出存储库中可用的版本并按版本号从高到低进行排序")]),r._v(" "),e("p",[r._v("命令：yum list docker-ce --showduplicates | sort -r")]),r._v(" "),e("h1",{attrs:{id:"通过其完整的软件包名称安装特定版本-如docker-ce-19-03-15。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过其完整的软件包名称安装特定版本-如docker-ce-19-03-15。"}},[r._v("#")]),r._v(" 通过其完整的软件包名称安装特定版本，如docker-ce-19.03.15。")]),r._v(" "),e("p",[r._v("命令：yum install docker-ce-19.03.15 docker-ce-cli-19.03.15 "),e("a",{attrs:{href:"http://containerd.io",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://containerd.io"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("第五步，启动Docker。")]),r._v(" "),e("p",[r._v("命令：systemctl enable docker")]),r._v(" "),e("p",[r._v("systemctl start docker")]),r._v(" "),e("p",[r._v("systemctl restart docker")]),r._v(" "),e("p",[r._v("第六步，验证Docker Engine-Community是否正确安装。")]),r._v(" "),e("p",[r._v("命令：docker version")]),r._v(" "),e("p",[r._v("docker run hello-world")]),r._v(" "),e("p",[r._v("若结果显示“Hello from Docker!”，则说明Docker Engine-Community正确安装。")]),r._v(" "),e("p",[r._v("Docker常用命令")]),r._v(" "),e("h1",{attrs:{id:"查看docker版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看docker版本"}},[r._v("#")]),r._v(" 查看docker版本")]),r._v(" "),e("p",[r._v("docker version")]),r._v(" "),e("h1",{attrs:{id:"查看docker详细信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看docker详细信息"}},[r._v("#")]),r._v(" 查看docker详细信息")]),r._v(" "),e("p",[r._v("docker info")]),r._v(" "),e("h1",{attrs:{id:"查看docker命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看docker命令"}},[r._v("#")]),r._v(" 查看docker命令")]),r._v(" "),e("p",[r._v("docker --help")]),r._v(" "),e("p",[r._v("镜像命令")]),r._v(" "),e("h1",{attrs:{id:"查看docker镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看docker镜像"}},[r._v("#")]),r._v(" 查看docker镜像")]),r._v(" "),e("p",[r._v("docker images")]),r._v(" "),e("h1",{attrs:{id:"列出本地所有的镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出本地所有的镜像"}},[r._v("#")]),r._v(" 列出本地所有的镜像")]),r._v(" "),e("p",[r._v("docker images -a")]),r._v(" "),e("h1",{attrs:{id:"只显示镜像id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#只显示镜像id"}},[r._v("#")]),r._v(" 只显示镜像ID")]),r._v(" "),e("p",[r._v("docker images -q")]),r._v(" "),e("h1",{attrs:{id:"显示镜像的摘要信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示镜像的摘要信息"}},[r._v("#")]),r._v(" 显示镜像的摘要信息")]),r._v(" "),e("p",[r._v("docker images --digests")]),r._v(" "),e("h1",{attrs:{id:"显示完整的镜像信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示完整的镜像信息"}},[r._v("#")]),r._v(" 显示完整的镜像信息")]),r._v(" "),e("p",[r._v("docker images --no-trunc")]),r._v(" "),e("h1",{attrs:{id:"从docker-hub上查找tomcat镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从docker-hub上查找tomcat镜像"}},[r._v("#")]),r._v(" 从Docker Hub上查找tomcat镜像")]),r._v(" "),e("p",[r._v("docker search tomcat")]),r._v(" "),e("h1",{attrs:{id:"从docker-hub上下载tomcat镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从docker-hub上下载tomcat镜像"}},[r._v("#")]),r._v(" 从Docker Hub上下载tomcat镜像")]),r._v(" "),e("p",[r._v("docker pull tomcat")]),r._v(" "),e("p",[r._v("或 docker pull tomcat:latest")]),r._v(" "),e("h1",{attrs:{id:"提交容器使之成为一个新的镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交容器使之成为一个新的镜像"}},[r._v("#")]),r._v(" 提交容器使之成为一个新的镜像")]),r._v(" "),e("p",[r._v('docker commit -m "提交的描述信息" -a "作者" 容器ID 要创建的目标镜像名称:[标签名]')]),r._v(" "),e("p",[r._v('如：docker commit -m "新的tomcat" -a "YM" b10b019a21c2 mytomcat:1.2')]),r._v(" "),e("h1",{attrs:{id:"从docker中删除hello-world镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从docker中删除hello-world镜像"}},[r._v("#")]),r._v(" 从Docker中删除hello-world镜像")]),r._v(" "),e("p",[r._v("docker rmi hello-world")]),r._v(" "),e("h1",{attrs:{id:"从docker中强制删除hello-world镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从docker中强制删除hello-world镜像"}},[r._v("#")]),r._v(" 从Docker中强制删除hello-world镜像")]),r._v(" "),e("p",[r._v("docker rmi -f hello-world")]),r._v(" "),e("h1",{attrs:{id:"从docker中强制删除hello-world镜像和nginx镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从docker中强制删除hello-world镜像和nginx镜像"}},[r._v("#")]),r._v(" 从Docker中强制删除hello-world镜像和nginx镜像")]),r._v(" "),e("p",[r._v("docker rmi -f hello-world nginx")]),r._v(" "),e("h1",{attrs:{id:"通过docker-images-p查询到的镜像id来删除所有镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过docker-images-p查询到的镜像id来删除所有镜像"}},[r._v("#")]),r._v(" 通过docker images -p查询到的镜像ID来删除所有镜像")]),r._v(" "),e("p",[r._v("docker rmi -f $(docker images -p)")]),r._v(" "),e("p",[r._v("容器命令")]),r._v(" "),e("h1",{attrs:{id:"根据镜像新建并启动容器。image是镜像id或镜像名称。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据镜像新建并启动容器。image是镜像id或镜像名称。"}},[r._v("#")]),r._v(" 根据镜像新建并启动容器。IMAGE是镜像ID或镜像名称。")]),r._v(" "),e("p",[r._v("docker run -it -d --name tomcat1 tomcat:latest /bin/bash")]),r._v(" "),e("h1",{attrs:{id:"列出当前所有正在运行的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出当前所有正在运行的容器"}},[r._v("#")]),r._v(" 列出当前所有正在运行的容器")]),r._v(" "),e("p",[r._v("docker ps")]),r._v(" "),e("h1",{attrs:{id:"列出所有的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出所有的容器"}},[r._v("#")]),r._v(" 列出所有的容器")]),r._v(" "),e("p",[r._v("docker ps -a")]),r._v(" "),e("h1",{attrs:{id:"列出最近创建的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出最近创建的容器"}},[r._v("#")]),r._v(" 列出最近创建的容器")]),r._v(" "),e("p",[r._v("docker ps -l")]),r._v(" "),e("h1",{attrs:{id:"列出最近创建的3个容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出最近创建的3个容器"}},[r._v("#")]),r._v(" 列出最近创建的3个容器")]),r._v(" "),e("p",[r._v("docker ps -n 3")]),r._v(" "),e("h1",{attrs:{id:"只显示容器id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#只显示容器id"}},[r._v("#")]),r._v(" 只显示容器ID")]),r._v(" "),e("p",[r._v("docker ps -q")]),r._v(" "),e("h1",{attrs:{id:"显示当前所有正在运行的容器完整信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示当前所有正在运行的容器完整信息"}},[r._v("#")]),r._v(" 显示当前所有正在运行的容器完整信息")]),r._v(" "),e("p",[r._v("docker ps --no-trunc")]),r._v(" "),e("h1",{attrs:{id:"启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[r._v("#")]),r._v(" 启动容器")]),r._v(" "),e("p",[r._v("docker start 容器ID或容器名称")]),r._v(" "),e("h1",{attrs:{id:"重新启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重新启动容器"}},[r._v("#")]),r._v(" 重新启动容器")]),r._v(" "),e("p",[r._v("docker restart 容器ID或容器名称")]),r._v(" "),e("h1",{attrs:{id:"停止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止容器"}},[r._v("#")]),r._v(" 停止容器")]),r._v(" "),e("p",[r._v("docker stop 容器ID或容器名称")]),r._v(" "),e("h1",{attrs:{id:"强制停止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制停止容器"}},[r._v("#")]),r._v(" 强制停止容器")]),r._v(" "),e("p",[r._v("docker kill 容器ID或容器名称")]),r._v(" "),e("h1",{attrs:{id:"删除容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[r._v("#")]),r._v(" 删除容器")]),r._v(" "),e("p",[r._v("docker rm 容器ID或容器名称")]),r._v(" "),e("p",[r._v("或 docker rm -f 容器ID或容器名称强制")]),r._v(" "),e("h1",{attrs:{id:"删除多个容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除多个容器"}},[r._v("#")]),r._v(" 删除多个容器")]),r._v(" "),e("p",[r._v("docker rm -f $(docker ps -a -q)")]),r._v(" "),e("h1",{attrs:{id:"查看容器日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器日志"}},[r._v("#")]),r._v(" 查看容器日志")]),r._v(" "),e("p",[r._v("docker logs -f -t --since --tail 容器ID或容器名称")]),r._v(" "),e("p",[r._v("如：docker logs -f -t --since=”2021-09-10” --tail=10 b10b019a21c2")]),r._v(" "),e("p",[r._v("-f：查看实时日志")]),r._v(" "),e("p",[r._v("-t：查看日志产生的日期")]),r._v(" "),e("p",[r._v("--since：只输出指定日期之后的日志")]),r._v(" "),e("p",[r._v("--tail=10：查看最后的10条日志")]),r._v(" "),e("h1",{attrs:{id:"查看容器内运行的进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器内运行的进程"}},[r._v("#")]),r._v(" 查看容器内运行的进程")]),r._v(" "),e("p",[r._v("docker top 容器ID或容器名称")]),r._v(" "),e("h1",{attrs:{id:"查看容器内部细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器内部细节"}},[r._v("#")]),r._v(" 查看容器内部细节")]),r._v(" "),e("p",[r._v("docker inspect 容器ID或容器名称")]),r._v(" "),e("h1",{attrs:{id:"进到容器内"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进到容器内"}},[r._v("#")]),r._v(" 进到容器内")]),r._v(" "),e("p",[r._v("docker attach 容器ID")]),r._v(" "),e("p",[r._v("或 docker exec 容器ID")]),r._v(" "),e("h1",{attrs:{id:"宿主机路径从容器内拷贝文件到宿主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#宿主机路径从容器内拷贝文件到宿主机"}},[r._v("#")]),r._v(" 宿主机路径从容器内拷贝文件到宿主机")]),r._v(" "),e("p",[r._v("docker cp 容器ID:容器内的文件路径")]),r._v(" "),e("p",[r._v("卸载docker")]),r._v(" "),e("h1",{attrs:{id:"卸载docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载docker"}},[r._v("#")]),r._v(" 卸载docker")]),r._v(" "),e("p",[r._v("命令：systemctl stop docker")]),r._v(" "),e("p",[r._v("yum remove docker-ce docker-ce-cli "),e("a",{attrs:{href:"http://containerd.io",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://containerd.io"),e("OutboundLink")],1)]),r._v(" "),e("h1",{attrs:{id:"删除安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除安装包"}},[r._v("#")]),r._v(" 删除安装包")]),r._v(" "),e("p",[r._v("命令：yum remove docker-ce")]),r._v(" "),e("h1",{attrs:{id:"删除镜像、容器、配置文件等内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像、容器、配置文件等内容"}},[r._v("#")]),r._v(" 删除镜像、容器、配置文件等内容")]),r._v(" "),e("p",[r._v("命令：rm -rf /var/lib/docker")]),r._v(" "),e("p",[r._v("rm -rf /var/lib/containerd")])])}),[],!1,null,null,null);e.default=o.exports}}]);