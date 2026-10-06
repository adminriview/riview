export const icon = (name, cls = "") => `<span class="icon ${cls}" aria-hidden="true">${name}</span>`;

export function badge(label, tone = "slate") {
  return `<span class="badge badge-${tone}"><i></i>${label}</span>`;
}

export function statCard({ label, value, delta, direction = "up", icon: symbol, tint, note }) {
  return `<article class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon ${tint}">${symbol}</span></div><div class="stat-value">${value}</div><div class="stat-foot"><span class="delta ${direction}">${direction === "down" ? "↓" : "↑"} ${delta}</span><span>${note}</span></div></article>`;
}

export function panel(title, subtitle, content, action = "") {
  return `<section class="panel"><div class="panel-head"><div><h2>${title}</h2>${subtitle ? `<p>${subtitle}</p>` : ""}</div>${action}</div>${content}</section>`;
}

export function emptyState(iconText, title, body) {
  return `<div class="empty-state"><span class="empty-icon">${iconText}</span><strong>${title}</strong><p>${body}</p></div>`;
}
