#!/usr/bin/env bash
arr=(test name 123)
echo ${arr[1]}
echo "执行的文件名：$0"
echo "第一个参数为：$1"
echo "第二个参数为：$2"
echo "第三个参数为：$3"
echo "传入到脚本的参数个数是:$#"
echo "所有参数为(\$@):$@"
echo "所有参数为(\$*):$*"
echo "运行脚本的进程ID:$$"
echo "显示Shell使用的当前选项:$-"
echo "显示最后命令的退出状态:$?"

echo '循环输出$*开始'
for i in "$*"
 do echo $i
done
echo '循环输出$*结束'
echo '循环输出$@开始'
for i in "$@"
 do echo $i
done
echo '循环输出$@结束'

val=`expr 2 + 2`
echo "两数之和为 : $val"

file="./test2.sh"
if [ -r $file ]
then
   echo "文件可读"
else
   echo "文件不可读"
fi

fe="./test3.sh"
if [ -e $fe ]
then
   echo "文件存在"
else
   echo "文件不存在"
fi

echo "OK! \n"
echo "It is a test \n"
echo "It is a test2"

echo "It is a test 输出结果至myfile文件" > myfile
echo `date`

printf "hello printf\n"
who > users
cat users
wc -l < users > myfile
cat -n users > myfile
npm run build:skeleton
npm run build