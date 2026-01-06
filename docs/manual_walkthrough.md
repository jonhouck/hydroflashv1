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


## 5. Verifying React Flow Integration (AGRV-9)
The project now includes a basic React Flow integration.

### Steps to Verify
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. **Verify the Map**: You should see a grid background representing the empty canvas.
4. **Zoom and Pan**:
   - Scroll to zoom in and out.
   - Click and drag to pan around the empty canvas.
   - Verify the controls (zoom in, zoom out, fit view, lock) are visible in the bottom-left corner.


## 6. Verifying Telemetry API (AGRV-8)
The project now includes a mock telemetry generator and API endpoint.

### Testing the API Endpoint
1. Start the development server: `npm run dev`
2. Open a terminal and run the curl command: `curl http://localhost:3000/api/telemetry`
3. Verify the output is a JSON object containing keys like `res-001`, `pump-001`.
7. Run the command multiple times and verify that the values (pressure, flow, level) change slightly within variance.


## 7. Verifying Custom Asset Nodes (AGRV-10)
The project now includes custom React Flow nodes for industrial assets.

### Steps to Verify
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. **Verify Node Visuals**:
   - **Reservoir**: Looks like a triangle/trapezoid or has distinct styling (Blue border).
   - **Pump**: Looks like a circle with a pump symbol (Green border).
   - **Tank**: Looks like a tank with a fill level indicator.
   - **Junction**: Small distinct node (Gray circle).
4. **Interact**:
   - Verify handles are positioned correctly on the nodes.
   - Verify you can still drag nodes around.

## 8. Verifying Network Layout (AGRV-11)
The project now includes an automated network layout generator.

### Steps to Verify
1. Start the development server: `npm run dev`
2. Open [http://localhost:3000](http://localhost:3000)
3. **Verify Hierarchy**:
   - Locate the **Main Reservoir** node (Triangle/Trapezoid) at the top-left (approx).
   - Locate the **Main Pump** node (Circle) connected to the Reservoir.
   - Locate a **Grid** of Tanks/Junctions connected to the Pump.
4. **Verify Connectivity**:
   - Ensure there are no isolated nodes floating far away from the main cluster.
   - Every node should have at least one edge connecting it to the system.
5. **Verify Count**:
   - Visually confirm there are at least 10 nodes on the canvas.

## 9. Verifying Pump Control Logic (AGRV-12)
The project now includes interactive Pump nodes that can be toggled ON/OFF.

### Steps to Verify
1. Start the development server: `npm run dev`
2. Open [http://localhost:3000](http://localhost:3000)
3. **Locate a Pump**: Find a Pump node (Circle with triangle arrow).
4. **Initial State**: Verify the pump border is **Gray** (OFF) and the arrow is **Gray**.
5. **Toggle ON**:
   - Click the Pump node.
   - Verify the border turns **Green** (ON) and the arrow turns **Green**.
6. **Toggle OFF**:
   - Click the Pump node again.
   - Verify the visuals return to **Gray** (OFF).
