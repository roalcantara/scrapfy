# Scrapfy

A simple scrap application written in [TypeScript](https://typescriptlang.org) and running on [NestJS](https://nestjs.com/), generated using [Nx](https://nx.dev).

## Setup

Run `git clone git@github.com:roalcantara/scrapfy.git` to clone the repo.

Run `cd scrapfy`

Run `yarn install`

---

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@scrapfy/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

---

## Guidelines

## 1. Why a Monorepo

This is a monorepo project built with [Nrwl Nx](https://nx.dev/angular/getting-started/what-is-nx).

From the [Nrwl Nx](https://nx.dev/angular/getting-started/what-is-nx) docs:

> Developing Like Google, Facebook, and Microsoft
>
> Working with multiple applications and libraries is difficult. From Google to Facebook, Uber, Twitter and more, a good amount of large software companies handle this challenge by taking a monorepo approach. And they have been doing so for years. These are some of the advantages this approach provides:
>
> - Everything at that current commit works together. Changes can be verified across all affected parts of the organization.
> - Easy to split code into composable modules
> - Easier dependency management
> - One toolchain setup
> - Code editors and IDEs are "workspace" aware
> - Consistent developer experience

### To get to know more

- Read the [Angular Enterprise Monorepo Patterns Book](https://nx.dev/angular/getting-started/resources#angular-enterprise-monorepo-pattens-book)
- Keep up with the [Nrwl Blog](https://blog.nrwl.io/nx/home)
- Keep up with the [Nrwl YouTube Channel](https://www.youtube.com/channel/UCF8luR7ORJTCwSNA9yZksCw)

## 2. Team Workflow

- Follow the [Github Flow](https://guides.github.com/introduction/flow/).
- Follow the [Git Rebase Workflow](https://randyfay.com/content/rebase-workflow-git).
- Follow the [Successfull Git Branch Model's](http://nvie.com/posts/a-successful-git-branching-model/) branch naming conventions.

## 3. Coding Best Practices

- Write your code in [TypeScript](typescriptlang.org).
- Configure [TSLint](https://palantir.github.io/tslint/) on [your](https://atom.io/packages/linter-tslint) [code](https://github.com/leafgarland/typescript-vim) [editor](https://marketplace.visualstudio.com/items?itemName=eg2.tslint).
- Use [Yarn](http://yarnpkg.com) to manage dependencies.
- Use English for coding, commenting and committing.
- Write [readable](https://youtu.be/56mETnrByBM) and [S.O.L.I.D.](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) code.

## 4. Coding Style

- Follow the [General Coding Guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#names),
- Follow the [General Naming Guidelines](https://angular.io/guide/styleguide#general-naming-guidelines)
- Follow the [Angular Style Guide](https://angular.io/guide/styleguide) - as much as possible.

### Coding Style Tools

- [Prettier](https://prettier.io/)
  - Takes care of code formatting
  - Rules are configured on [`.prettierrc.yml`](https://prettier.io/docs/en/configuration.html)
- [TSLint](https://palantir.github.io/tslint/)
  - Takes care of linting rules
  - Rules are configured on [`.tslint.yml`](https://palantir.github.io/tslint/usage/configuration/)
- [Saas Lint](https://www.npmjs.com/package/sass-lint)
  - Linter for both sass and scss syntax
  - Rules are configured on [`.sass-lint.yml`](https://github.com/sasstools/sass-lint/tree/master/docs/options)
- [LintHTML](https://www.npmjs.com/package/@linthtml/linthtml)
  - An unofficial html5 linter and validator
  - Rules are configured on [`.linthtmlrc.yml`](https://github.com/linthtml/linthtml#rules)
- [Markdown Lint](https://www.npmjs.com/package/markdownlint-cli)
  - Style checker and lint tool for Markdown/CommonMark files
  - Rules are configured on [`.markdownlint.yml`](https://github.com/DavidAnson/markdownlint#configuration)
- [Commit Lint](https://commitlint.js.org/#/)
  - Linter for commit messages
  - Rules are configured on [`.commitlintrc.yml`](https://commitlint.js.org/#/reference-configuration)

### Code Style Changes

To propose a new rule or a code style change, please:

1. Open a pull request
2. On the PR title:
   1. A summary of the change
3. On the PR description:
   1. Describe the problem you want to solve.
   2. Your take on the correct solution to the problem.
   3. Any relevant resource that would endorse such a change
4. Add a commit providing 2-3 examples for the proposed solution
   1. Preferably on a real code
5. Request the review for the change for teammates
6. Being approved by 51% of the teammates:
   1. Configure the rule properly;
   2. Apply the rule on the whole codebase on the project;
   3. And the PR follows the regular Pull Request flow; YAY!

## 5. Testing

- Write unit tests with [Jest](https://jestjs.io/).
- Write E2E tests with [Cypress](https://www.cypress.io/).
- Apply the [Better Specs](http://www.betterspecs.org/) best practices for testing - as much as possible.

## 6. Git Commit Guidelines

- Follow the [Conventional Commits](https://conventionalcommits.org/)
- Follow the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)

### Commit Messages

- Follow the [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/) tips
- Follow the [5 Useful Tips For A Better Commit Message](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message) tips
- Consider using [Commitizen cli](http://commitizen.github.io/cz-cli/)

### Follow [The seven rules of a great Git commit message](https://chris.beams.io/posts/git-commit/) (TL;DR)

1. [Separate subject from body with a blank line](https://chris.beams.io/posts/git-commit/#separate)
2. [Limit the subject line to 50 characters](https://chris.beams.io/posts/git-commit/#limit-50)
3. [Capitalize the subject line](https://chris.beams.io/posts/git-commit/#capitalize)
4. [Do not end the subject line with a period](https://chris.beams.io/posts/git-commit/#end)
5. [Use the imperative mood in the subject line](https://chris.beams.io/posts/git-commit/#imperative)
6. [Wrap the body at 72 characters](https://chris.beams.io/posts/git-commit/#wrap-72)
7. [Use the body to explain what and why vs. how](https://chris.beams.io/posts/git-commit/#why-not-how)

### Commit Types

As configured on [`.commitlintrc.yml`](https://commitlint.js.org/#/reference-configuration), it must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code _(white-space, formatting, missing semi-colons, etc)_
- **ref**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **revert**: A commit that reverts a previous commit
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **ci**: Changes to our CI configuration files and scripts _(example scopes: Circle, BrowserStack, SauceLabs)_
- **build**: Changes that affect the build system or external dependencies _(example scopes: gulp, broccoli, npm)_
- **perf**: A code change that improves performance
- **git**: Changes on git files, such as [`.gitignore`](https://git-scm.com/docs/gitignore)

### Commit Best Practices

- Commit [often](https://sethrobertson.github.io/GitBestPractices/#sausage_metaphor)
- Keep commits small and [atomic](https://www.freshconsulting.com/atomic-commits/)
- Write [S.O.L.I.D.](https://youtu.be/e9K1gHYIE2c) commits
- Write meaningful titles targeting for non-technical readers
- Write commits that would help the [Code Review](#8-code-reviews)
- Add any extra information that would help the [Code Review](#8-code-reviews)
- Reference the [issue](https://help.github.com/en/articles/autolinked-references-and-urls) that originated the commit

## 7. Pull Requests

One would say that some of the main purposes of Pull Requests are:

- Add a product increment
- Remove obsolete code/behaviour
- Fix a product problem
- Enhance product behaviour
- Refactor code to improve quality
- Add/change some architecture requirement
- Update libraries or improve security
- Discuss the better approach to certain issues

### Main Goals

The ideal PR must be:

1. As smallest as possible
2. Defects free
3. Easy to be reviewed and validated
4. Reviewed and validated as soon as possible
5. Merged as soon as possible
6. Have been approved by at least one reviewer

### Best Practices (TL;DR)

1. Prefer one feature/fix/refactoring per PR
2. Estimate the PR before starting it
3. Link the PR to an Issue before starting it
4. Comment any consideration/doubt/problem/discussion/definition on the PR`s Issue;
5. Try to have, at least, one Unit Tests per change, when applicable
6. Try to make a PR that you would enjoy reviewing
7. Remember, the next reviewer can be you

### Before sending the PR to [Code Review](#8-code-reviews) ensures that

1. Any implementation follows the [Coding Best Practices](#3-coding-best-practices) and any team `Style Guide`
2. Any commit follows the [Commit Best Practices](#commit-best-practices)
3. Any change has been tested at least once. That is:
   1. Running the program
   2. Checking if the change works
4. All project's Unit Tests are keeping running
5. There are no linter violations on the project
6. You have reviewed your own code

### To [Get Better](https://hackernoon.com/how-to-give-and-get-better-code-reviews-e011c3cda55e) [Code Review](#8-code-reviews) ensures that

1. The PR has:
   1. The minimum changes necessary to accomplish the PR`s goal
   2. The minimum commits necessary to accomplish the PR`s goal
   3. A clear, short and concise title that summarizes the changes
   4. A clear description that contextualizes the problem you’re solving
2. Any relevant explanation or reference is present on the PR`s description or commits;
3. Whenever necessary, the PR describes how it must be validated
   1. Adding any relevant info necessary to the validation, such as username, environment, password, deadline, and etc.
4. Avoid refactorings not related to the PR's goal
   1. Because it might difficult the Code Review
   2. However, if the refactoring is inevitable
      1. It should be properly isolated and justified

## 8. Code Reviews

One would say that some of the main purposes of Code Reviews are:

- Detecting and Reducing defects
- Sharing knowledge on the architecture, business logic, design patterns, and techniques
- Promoting the [collective ownership](http://www.extremeprogramming.org/rules/collective.html) of the code

### Suggested Checklist

1. Try to understand the change and its impact on the codebase and on the product
2. For each change, ensures that
   1. It is clear
   2. It mets the requirements
   3. It has no defects
   4. It has, at least, one unit test
   5. It follows the [Coding Best Practices](#3-coding-best-practices)
3. For each commit, ensures that
   1. It follows the [Commit Best Practices](#commit-best-practices)

### Best Practices (TL;DR)

When reviewing a Pull Request, try to:

1. Focus more on finding
   1. Defects
   2. Logic problems
   3. Performance issues
   4. Bugs
2. Focus less on
   1. Changes that have not been made on the commit
   2. Things not related to the Pull Request goal
   3. Coding style
   4. Nitpicking
3. Give, at least, one comment. When so, try to:
   1. Ask, don't tell
   2. Highlight wins
   3. Highlight things that you've learnt
   4. Articulate the problems (if any) and suggest alternatives
   5. Mind your language and tone
      1. It is incredibly easy to misunderstand something online
4. Remember:
   1. It is perfectly possible to have more than one way of solving a problem
   2. Code Reviews are more efficient when focusing on defects rather than code style
   3. Code Styles should be ruled automatically by tools. That is:
      1. If a code has no error, performance issue, defect, nor violates any linter rule, it is probably ok
   4. Some ideas are better conveyed face-to-face
   5. You might have to maintain this change in the near future

### Resources

Here are some highly recommended resources on the topic:

- [Implementing a Strong Code-Review Culture by Derek Prior](https://www.youtube.com/watch?v=PJjmw9TRB7s)
- [Goldilocks And The Three Code Reviews by Vaidehi Joshi](https://www.youtube.com/watch?v=-6EzycFNwzY)
- [Code Review is an Architectural Necessity - GitHub Universe 2016](https://youtu.be/pJFM321_lAs)
- [How to Give and Get Better Code Reviews](https://hackernoon.com/how-to-give-and-get-better-code-reviews-e011c3cda55e)

## 9. Contribute

- Abide by the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## 10. References

- [How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)
- [Build a JavaScript Command Line Interface (CLI) with Node.js](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)
- [How to build a command-line app in Node.js using TypeScript, Google Cloud Functions and Firebase](https://codeburst.io/how-to-build-a-command-line-app-in-node-js-using-typescript-google-cloud-functions-and-firebase-4c13b1699a27)
