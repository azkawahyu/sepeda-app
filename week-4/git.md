1. How the workflow for git until it's updated to repository ?
   ans :
   create a new repository :
   a. create new repository in github/gitlab & copy https url
   b. open folder that want to executed & open with vscode
   c. open terminal, type git init
   d. git status
   e. git add [file name] or git add .
   f. git commit -m "message"
   g. git remote add origin [url repository]
   h. git checkout -b main
   i. git push -u origin main

   desc :
   git init => initialize existing directory as a git repository
   git status => show modified files in working directory, staged for the next commit
   git add [file name] or git add . => add a file as it looks now to the next commit (stage)
   git commit -m "message" => create snapshot of the staged changes along a timline of a git projects history
   git remote add origin [url repository] => add a git repository url
   git checkout -b main => switch to branch main, -b is to create new branch
   git push -u origin main => transmit local branch commits to the remote repository branch

2. What's git? What's git use for?
   ans :
   git is a version control system to handle everything from small to very large projects with speed and efficiency. So, What's git use for? Git is used to tracks the changes of the file, record of what has been done and revert to specific versions that we need to. Beside that, git also makes collaboration easier, allowing changes by multiple people to all be merged into one main branch

3. How to track git progress ?
   ans :
   using Git log, we can track the record of all commits in a Git repository. There are several ways to tracking our commits in repository :
   a. git log >>> as a default, it will show 2 last commits update
   b. git log --oneline >>> To display a shorter log, we can add the --oneline argument
   c. git log [commit_number] >>> To view the log for a particular revision, we can enter the revision/commit number
   d. git log [file] >>> to view records to a specific file
   e. git log --author='author_name' >>> to see what revisions were made by a certain person/author
