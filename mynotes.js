//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// WHAT I DIDNT KNOW IN SECTIONS 0 & 1
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// INTRO TO JS SLIDES
/*

* literals are values that we can see (since we can't see values in mem)
* expression statements are statements that end in ;
* ** var names are like name-tags for values

objects:
* dot notation is converted to quotes and brackets obj.o === obj['o']
*   ergo, you cant use var names and dot notation (obj.val !== obj[val]
* keys as strings is implied w/ obj literals (obj = { o : 'letter o' }
* ints == strings as obj keys
* but ALL KEYS ARE STRINGIFIED between brackets
* use for-in iteration
*
* there are no properties on null or undefined
* false has undefined values for all properties

arrays:
* arrs have the same property access as objs
* arr.length counts number of numerical keys
* arr.length is always 1 + max_index
* use for-with-semicolon iteration

functions:
* func.length === 0     // useful for something else

arguments obj & func params
* useful when you don't know how many args you'll have or if you cant name them

funcs as params
* you can pass args to a callback by wrapping it w/ an anon func

*/

///////////////////////////////////////
// JS KOANS

// OBJECTS, ARRAYS, FUNCTIONS
/*

ARRAYS
* var newArray = existingArray
*   creates a new 'nametag' for existingArray
* unshift pushes to front of array
* shift pops from front of array

OBJECTS
* key in obj        // returns true || false
* delete obj.key    // deletes key && val

FUNCTIONS
*

 */

//**********    MUTABILITY   **********
/*

*

 */

// INHERITANCE
/*
 */

///////////////////////////////////////
///////////////////////////////////////
// GIT-RELATED STUFF

// FORKS AND PULL REQUESTS
/*

* if you want to keep your fork up-to-date, you need to add a remote (upstream)
*   > git remote add upstream url
*   > git pull upstream master      // pull upstream into master
* I THINK:
*   if you pull request a branch, any commits to the branch will be attached to the pull request

 */

// SETUP
/*

* special line ending preferences:
*   git config --global core.autocrlf input
*   git config --global core.safecrlf true

* username stuff:
*   git config --global user.name
*   git config --global user.email

 */

// STAGING AND COMMITTING
/*

* commits should be for small, independent changes to code
*   so only add the relevant files to a commit, not everything that changed
* git reset     // unstages changes to files so they won't be committed
* after committing, whatever was committed is unstaged
* git add       // only stages current changes, DOES NOT PERSISTENTLY TRACK
* to track committed changes while detached, checkout a new branch
* git commit --amend -m     // amends a commit
* git cat-file -p hash      // dumps info about the treehash/commit/file

RESETTING and UNDOING STUFF
* git reset HEAD file   // clears the staging area of file
* git checkout file     // discards changes in working directory
* git revert HEAD/hash  // reverts to last/hashed commit
* git reset --hard hash // reverts working dir to specified commit

TAGS
* git tag name  // tags the branch/commit with name, which can be checked out
* git checkout name^    // checks out parent of name
* git checkout name~2   // checks out second ancestor of name

 */

// BRANCHING AND MERGING
/*

BRANCH: branch early, branch often
*

MERGING
* git merge branch    // merges branch into HEAD

 */

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////