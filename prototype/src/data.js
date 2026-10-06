export const findings = [
  { id: "RV-2841", cve: "CVE-2024-3400", title: "Command injection in PAN-OS", asset: "edge-fw-prod-01", app: "Customer Portal", team: "Platform Security", cvss: 10.0, epss: 0.97, age: 3, status: "In progress", owner: "A. Patel", kev: true, source: "Tenable" },
  { id: "RV-2838", cve: "CVE-2023-34362", title: "SQL injection in MOVEit Transfer", asset: "fileshare-us-east-1", app: "Finance Operations", team: "Business Apps", cvss: 9.8, epss: 0.92, age: 11, status: "Open", owner: "Unassigned", kev: true, source: "Qualys" },
  { id: "RV-2829", cve: "CVE-2024-21762", title: "Out-of-bounds write in FortiOS", asset: "vpn-gateway-prod", app: "Corporate Network", team: "Infrastructure", cvss: 9.6, epss: 0.88, age: 7, status: "In progress", owner: "M. Chen", kev: true, source: "Tenable" },
  { id: "RV-2814", cve: "CVE-2024-21412", title: "Microsoft Outlook security feature bypass", asset: "workstation-fleet", app: "Workplace Services", team: "End User Computing", cvss: 8.1, epss: 0.71, age: 19, status: "Overdue", owner: "J. Rivera", kev: true, source: "Defender" },
  { id: "RV-2806", cve: "CVE-2024-23897", title: "Jenkins CLI arbitrary file read", asset: "build-runner-03", app: "Developer Platform", team: "Developer Experience", cvss: 8.6, epss: 0.66, age: 24, status: "Open", owner: "S. Okafor", kev: false, source: "Qualys" },
  { id: "RV-2791", cve: "CVE-2023-44487", title: "HTTP/2 rapid reset denial of service", asset: "api-gateway-prod", app: "Customer Portal", team: "Platform Security", cvss: 7.5, epss: 0.39, age: 31, status: "Exception", owner: "L. Morgan", kev: false, source: "Tenable" },
  { id: "RV-2783", cve: "CVE-2024-1709", title: "ScreenConnect authentication bypass", asset: "remote-support-01", app: "IT Service Desk", team: "IT Operations", cvss: 10.0, epss: 0.95, age: 5, status: "Open", owner: "R. Singh", kev: true, source: "Tenable" },
  { id: "RV-2768", cve: "CVE-2023-22518", title: "Confluence privilege escalation", asset: "wiki-prod-east", app: "Knowledge Hub", team: "Business Apps", cvss: 9.8, epss: 0.82, age: 42, status: "Overdue", owner: "K. Williams", kev: true, source: "Qualys" },
];

export const applications = [
  { name: "Customer Portal", owner: "Digital Products", tier: "Tier 1 · Critical", assets: 284, findings: 86, risk: 91, color: "violet", env: "Cloud" },
  { name: "Finance Operations", owner: "Finance Technology", tier: "Tier 1 · Critical", assets: 192, findings: 54, risk: 84, color: "amber", env: "Hybrid" },
  { name: "Corporate Network", owner: "Infrastructure", tier: "Tier 1 · Critical", assets: 418, findings: 72, risk: 78, color: "blue", env: "On-prem" },
  { name: "Developer Platform", owner: "Engineering Enablement", tier: "Tier 2 · High", assets: 136, findings: 38, risk: 64, color: "teal", env: "Cloud" },
  { name: "Workplace Services", owner: "Enterprise IT", tier: "Tier 2 · High", assets: 962, findings: 103, risk: 58, color: "rose", env: "Hybrid" },
];

export const integrations = [
  { name: "Tenable", category: "Vulnerability management", icon: "◈", tint: "violet", state: "Connected", detail: "Last sync 4 min ago", records: "18,429 findings" },
  { name: "CISA KEV", category: "Threat intelligence", icon: "◎", tint: "teal", state: "Connected", detail: "Last sync 1 hour ago", records: "1,142 vulnerabilities" },
  { name: "FIRST EPSS", category: "Threat intelligence", icon: "↗", tint: "blue", state: "Connected", detail: "Last sync 1 hour ago", records: "182,640 scores" },
  { name: "ServiceNow CMDB", category: "Business context", icon: "▤", tint: "amber", state: "Action needed", detail: "Credentials need review", records: "2,184 configuration items" },
  { name: "Microsoft Defender", category: "Endpoint security", icon: "◉", tint: "blue", state: "Connected", detail: "Last sync 12 min ago", records: "4,802 devices" },
  { name: "Jira Service Management", category: "Remediation workflow", icon: "▦", tint: "violet", state: "Available", detail: "Connect to sync tickets", records: "" },
];

export const activities = [
  { icon: "↗", tone: "violet", text: "Tenable sync completed", detail: "2,184 findings updated · 4 min ago" },
  { icon: "✓", tone: "teal", text: "Risk exception approved", detail: "CVE-2023-44487 · Customer Portal · 1 hr ago" },
  { icon: "＋", tone: "blue", text: "New application discovered", detail: "Payments API · ServiceNow CMDB · 3 hrs ago" },
  { icon: "◉", tone: "amber", text: "Critical KEV exposure detected", detail: "3 assets across 2 applications · 5 hrs ago" },
];

export const riskFactors = [
  { label: "Threat activity", weight: 25, color: "violet", desc: "EPSS probability, known exploitation, threat intelligence" },
  { label: "Vulnerability severity", weight: 20, color: "rose", desc: "CVSS score, vulnerability type, patch availability" },
  { label: "Business impact", weight: 20, color: "amber", desc: "Application criticality, data sensitivity, regulatory impact" },
  { label: "Exposure", weight: 15, color: "blue", desc: "Internet exposure, network layer, cloud or on-prem" },
  { label: "Control effectiveness", weight: 10, color: "teal", desc: "WAF, EDR, segmentation, compensating controls" },
  { label: "Operational urgency", weight: 10, color: "slate", desc: "Finding age, remediation status, SLA or due date" },
];

export const navItems = [
  { section: "Workspace", items: [ ["overview", "◫", "Overview"], ["findings", "◈", "Findings", "18"], ["applications", "▣", "Applications"], ["remediation", "↗", "Remediation"] ] },
  { section: "Manage", items: [ ["integrations", "⟳", "Integrations"], ["risk-model", "◉", "Risk model"] ] },
];
