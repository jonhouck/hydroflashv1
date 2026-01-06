# Manual Walkthrough - CI/CD Pipeline Verification

This document guides you through verifying the GitHub Actions CI/CD pipeline integration.

## 1. Prerequisites
- Access to the GitHub repository: [https://github.com/jonhouck/hydroflashv1](https://github.com/jonhouck/hydroflashv1)
- A Pull Request open against the `main` branch.

## 2. Verifying the Pipeline

### Step 1: Push Changes
Any push to a branch with an open Pull Request (or a push to `main`) should trigger the `CI` workflow.

### Step 2: Check GitHub Actions
1. Navigate to the **Actions** tab in the GitHub repository.
2. You should see a workflow run titled "CI".
3. Click on the run to see details.

### Step 3: Verify Jobs
Ensure the following jobs complete successfully:
- **build**: This job installs dependencies, runs linter `npm run lint`, builds the project `npm run build`, and runs unit tests `npm run test`.
- **e2e**: This job installs Playwright browsers and runs end-to-end tests `npm run test:e2e`.

### Step 4: Verify PR Checks
1. Go to the **Pull Requests** tab.
2. Open the relevant Pull Request.
3. Scroll to the bottom to the checks section.
4. Verify that all checks have passed and have a green checkmark.

## 3. Troubleshooting
- If **lint** fails: Run `npm run lint` locally to fix style issues.
- If **test** fails: Run `npm run test` locally to debug unit tests.
- If **e2e** fails: Run `npm run test:e2e` locally. You may need to run `npx playwright install` first.

## 4. Verifying Data Schemas (AGRV-7)
The project now includes Zod schemas for validating Water Network data.

### Inspecting Types
1. Navigate to `src/lib/types.ts` to view the `Node`, `Link`, and `WaterNetwork` TypeScript definitions.
2. Navigate to `src/lib/schemas.ts` to view the corresponding Zod schemas.

### Running Schema Validation Tests
To verify that the schemas strictly enforce the data model:
1. Run the unit tests: `npm run test`
2. Ensure that `tests/unit/schema.test.ts` passes.

