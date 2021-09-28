# Contribution Guidelines

## Table of Contents

- [Contribution Guidelines](#contribution-guidelines)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Bug reports](#bug-reports)
  - [Discuss your design](#discuss-your-design)
  - [Commit message format](#commit-message-format)
      - [Types](#types)
  - [Testing](#testing)

## Introduction

This document explains how to contribute changes to the riot.js project.

## Bug reports

Please search the issues on the issue tracker with a variety of keywords
to ensure your bug is not already reported.

If unique, [open an issue](https://github.com/montejojorge/riot.js/issues/new)
and answer the questions so we can understand and reproduce the
problematic behavior.

Please write clear, concise instructions so we can reproduce the behavior
even if it seems obvious. The more detailed and specific you are,
the faster we can fix the issue. Check out [How to Report Bugs
Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html).

## Discuss your design

The project welcomes submissions. If you want to change or add something,
please let everyone know what you're working on [file an issue](https://github.com/montejojorge/riot.js/issues/new)!
Significant changes must go through the change proposal process
before they can be accepted. To create a proposal, file an issue with
your proposed changes documented, and make sure to note in the title
of the issue that it is a proposal.

## Commit message format

```
<type>: <description>

[optional body]

[optional footer]
```
#### Types
**feat** - A new feature  
**fix** - A bug fix  
**docs** - Changes in documentation  
**style** - Style changes, formatting, missing semicolons or whitespaces  
**refactor** - Code changes that neither fixes a bug or adds a feature  
**perf** - Changes that improve performance  
**test** - Changes related to tests  
**chore** - Changes the build process

## Testing

Before submitting a pull request, run the test for the whole tree
to make sure your changes don't cause regression elsewhere.
