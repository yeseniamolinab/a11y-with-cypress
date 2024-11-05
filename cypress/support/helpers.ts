import { Result, RunOptions } from "axe-core";
export const a11yConfigOptions: RunOptions = {
    runOnly: {
      type: "tag",
      values: [
        "wcag2a",
        "wcag2aa",
        "wcag21a",
        "wcag21aa",
        "cat.keyboard",
        "cat.structure",
      ],
    },
  };
  
  const severityIndicators = {
    minor: "⚪️",
    moderate: "🟡",
    serious: "🟠",
    critical: "🔴",
  };
  
  export function terminalLog(violations: Result[]): void {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    );
    const violationData = violations.map(({ id, impact, description, nodes }) => ({
      id,
      impact: `${impact} ${severityIndicators[impact || 'minor']}`,
      description,
      nodes: nodes.length // Only count the number of nodes
    }));
  
    cy.task('table', violationData);
  }
  