### Basic Git Commands for Managing a Repository

1. **Initializing a Repository**:
   - This is the first step to start tracking our project using Git. The command initializes a hidden `.git` directory that Git uses to store version control information.
   - **Command**:  
     ```bash
     git init
     ```

2. **Making Changes and Staging Files**:
   - After making changes or adding new files to the project, we need to stage them for the next commit. This tells Git which files to include in the next snapshot.
   - **Command**:  
     ```bash
     git add .
     ```
     The `.` stages all changed files in the current directory.

3. **Committing Changes**:
   - After staging the changes, we create a commit to record these changes in the history of the repository. A commit represents a snapshot of the current state of the project.
   - **Command**:  
     ```bash
     git commit -m "Commit message"
     ```

4. **Connecting to a Remote Repository**:
   - To push code to GitHub , we need to link the local repository to a remote one. This command adds the remote repository where we can later push our commits.
   - **Command**:  
     ```bash
     git remote add origin https://github.com/username/repo.git
     ```

5. **Pushing Changes to GitHub**:
   - Once everything is committed locally, we can push the changes to GitHub. The following command pushes the changes to the main branch of the remote repository.
   - **Command**:  
     ```bash
     git push -u origin main
     ```
     The `-u` option sets the upstream branch, so you can use `git push` in the future without specifying the remote and branch.
