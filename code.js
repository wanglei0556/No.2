/**
 *
 * 1、 查看分支列表： git branch
 *
 * 2、 创建新分支： git branch 分支名称
 *
 * 3、 切换分支： git checkout 分支名称
 *
 * 4、 分支的快速创建和切换： git checkout -b 分支名称
 *
 * 5、 合并分支：
 *               1、  切换到 master 分支
 *               git checkout master
 *               2、  在master 分支上运行 git merge 命令，将 login 分支的代码合班到 master 分支
 *               git merge login
 * 
 * 6、 删除分支： git branch -d 分支名称
 * 
 * 7、 将本地分支推送到远程仓库：
 *                              1、  -u 表示把本地分支和远程分支进行关联，只在第一次推送的时候需要带 -u 参数
 *                              git push -u 远程仓库的别名 本地分支名称： 远程分支名称
 *                              2、  实际案例
 *                              git push -u origin payment:pay
 *                              3、  如果希望远程分支的名称和本地分支名称保持一致，可以对命令进行简化
 *                              git push -u origin payment
 * 
 * 8、 查看远程仓库中所有的分支列表： git remote show 远程仓库名称
 * 
 * 9、 跟踪分支：
 *               1、  示例
 *               git checkout pay
 *               2、  从远程仓库中，把对应的远程分支下载到本地仓库，并把下载的本地分支进行重命名
 *               git checkout -b 本地分支名称 远程仓库名称/远程分支名称
 *               3、  示例
 *               git checkout -b payment origin/pay
 * 
 * 10、 拉取远程分支的最新的代码： git pull
 * 
 * 11、 删除远程分支： git push 远程仓库名称 --delete 远程分支名称
 *
 */