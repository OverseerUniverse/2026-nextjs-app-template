# Template Features

This template uses Next.js version 16.4.3. The following lists what is configured and included:

1. App Router with the `src/app` folder.
2. Basic project file structure. See [getting-started.md](./getting-started.md).
3. MongoDB setup using Mongoose, including a database connection function in `src/database/db.ts` and an example User schema.
4. Example frontend route and API route.
5. ESLint with Next.js and TypeScript rules using `eslint.config.mjs`.
6. Prettier formatting with a 120-character preferred line width.
7. Import aliasing using `@/*` for files inside `src`.
8. Template documentation to customize for your project.
9. Two branches, `develop` and `main`, if you select **Include all branches** when creating your repository.
10. Issue and pull request templates in the `.github` folder.
11. Pre-commit linting and formatting with Husky and lint-staged.
12. Continuous integration with GitHub Actions using Node.js 22 and 24, including linting, production builds, and dependency audits for high and critical vulnerabilities.

Repository security settings, branch rules, and project secrets must be configured separately for each new project.

Last updated 10/24/2026
