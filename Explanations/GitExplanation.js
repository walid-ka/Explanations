// Grundlagen GIT

//! Was ist GIT?

// Git is the open source distributed version control system that facilitates GitHub activities on your laptop or desktop. 
// Info: Git ist ein Versionierungssystem, das es mehreren Menschen ermöglicht, an einem Projekt zu arbeiten.

// Info: Ein "Remote" in Git ist ein Server, auf dem eine Kopie deines Repositories gespeichert ist.

//! Why Use Git?
// 🏗 Version Control: Tracks changes and allows developers to revert to previous versions if needed.
// 👨‍💻 Enables multiple developers to work on the same project without conflicts.
// ⚡ Developers can create branches, work independently, and merge changes seamlessly.
// 🚀 Code is stored safely, reducing the risk of data loss.

// git: an open source, distributed version-control system, installed locally i
// GitHub: a platform for hosting and collaborating on Git repositories
// commit: a Git object, a snapshot of your entire repository compressed into a SHA
// branch: a lightweight movable pointer to a commit
// clone: a local version of a repository, including all commits and branches
// remote: a common repository on GitHub that all team member use to exchange their changes
// fork: a copy of a repository on GitHub owned by a different user
// pull request: a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more
// HEAD: representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits when using (git checkout)





// Configure user information
// git config --global user.email "[email address]"
// git config --global user.name "[name]"
// Initialize a repository: git init
// Track files: git add <filename> (or git add . for all)
// Commit changes: git commit -m "Message"
// Create branches: git branch [branch-name]
// Switch branches: git checkout [branch-name]
// Delete Branch : git branch -d [branch-name]
// Merge branches: git merge [branch-name]
// Push changes to remote: git push origin main
// Pull latest changes: git pull origin main

// git clone [url]
// .gitignore (.env)