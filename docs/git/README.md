# Git

### git无法拉取提交

![](https://s3.bmp.ovh/imgs/2023/03/22/469d181f4e9bcfa4.png)

**原因**

这个错误提示是因为你的本地分支和远程分支出现了分歧，需要指定如何协调它们。你可以按照提示中的建议运行其中一个命令来解决这个问题，具体方法如下：

1. 如果你想使用 merge 方式合并分支，可以运行以下命令：

```bash
git config pull.rebase false
```

2. 如果你想使用 rebase 方式合并分支，可以运行以下命令：

```bash
git config pull.rebase true
```

3. 如果你想只使用 fast-forward 方式合并分支，可以运行以下命令：

```bash
git config pull.ff only
```

注意，如果你想为所有的仓库设置默认偏好，可以将 "git config" 替换为 "git config --global"。另外，你也可以在命令行中使用 --rebase、--no-rebase 或者 --ff-only 来覆盖默认设置。

**这三种合并方式的区别**

这三种合并方式指的是 Git 在合并分支时采用的不同策略，它们分别是 merge、rebase 和 fast-forward，它们的区别如下：

1. Merge（合并） Merge 合并方式是 Git 默认的合并策略，它会将两个分支合并成一个新的提交，并产生一条新的合并提交记录。这种方式可以处理合并时出现的冲突，但是会产生很多不必要的合并提交记录，因此会降低 Git 日志的可读性。
2. Rebase（变基） Rebase 合并方式会将当前分支的提交放在目标分支的提交之后，以形成一条线性的提交历史记录。这种方式可以保持提交历史的干净和简单，但是会覆盖目标分支的提交信息，因此在多人协作时使用需要特别注意。
3. Fast-forward（快进） Fast-forward 合并方式是指在目标分支没有新的提交时，直接将当前分支合并到目标分支上，并将目标分支指向当前分支的最新提交。这种方式可以保持提交历史的简单和干净，但是如果目标分支有新的提交，就无法使用快进方式合并。

综上所述，不同的合并方式适用于不同的场景，需要根据实际情况进行选择。通常情况下，建议使用 rebase 或 fast-forward 合并方式来保持代码提交历史的干净和简单。如果存在合并冲突等情况，可以使用 merge 合并方式来处理。

**如何修改合并方式**

如果你已经使用 "git config pull.rebase false" 命令将默认的合并方式设置为 merge，并想要修改为其他方式，可以使用以下命令进行修改：

1. 修改为 rebase 合并方式：

```bash
git config pull.rebase true
```

2. 修改为 fast-forward 合并方式：

```bash
git config pull.ff only
```

3. 取消设置，恢复为 Git 的默认行为：

```bash
git config --unset pull.ff
```

如果你想要修改全局设置，可以在上述命令中加上 "--global" 参数，如下所示：

```bash
git config --global pull.ff only
git config --global --unset pull.rebase
git config --global --unset pull.ff
```

注意，如果你已经在本地仓库中修改了默认设置，那么上述命令只会修改当前仓库的设置。如果你想要修改所有仓库的默认设置，需要在命令中添加 "--global" 参数。



4.vscode git 拉取时 提示：在签出前，请清理存储库工作树

有两种方法解决：

一，手动解决
1、`git stash` （这一步的作用是把当前未提交的修改暂存起来，让仓库还原到最后一次提交的状态。）

2、`git pull` （拉取远程仓库的代码，让你现在的代码和远程仓库一致）

3、`git stash pop` （恢复第一步储存起来的代码，也就是恢复当前未提交的修改）

二、放弃本地修改，直接覆盖（一般情况下不建议这样）
1、`git reset --hard`

2、`git pull`