const STORAGE_LEVELS = "layoutList.acceptedLevels";
const STORAGE_QUEUE = "layoutList.reviewQueue";
const STORAGE_ROLE = "layoutList.activeRole";
const STORAGE_RECORD_QUEUE = "layoutList.recordQueue";
const STORAGE_STAFF_APPLICATIONS = "layoutList.staffApplications";
const STORAGE_IDEAS = "layoutList.ideas";
const STORAGE_RANK_REQUESTS = "layoutList.rankRequests";
const STORAGE_ACCOUNTS = "layoutList.accounts";
const STORAGE_CURRENT_ACCOUNT = "layoutList.currentAccount";
const STORAGE_RATE_LIMITS = "layoutList.rateLimits";
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_ACTIONS = 4;

const roles = {
  member: {
    label: "Member",
    color: "warning",
    permissions: [],
  },
  owner: {
    label: "Owner",
    color: "cyan",
    permissions: ["acceptLevels", "acceptRecords", "manageStaff", "assignRoles", "editRules", "editRanks", "removeQueue"],
  },
  coOwner: {
    label: "Co Owner",
    color: "cyan",
    permissions: ["acceptLevels", "acceptRecords", "manageStaff", "assignRoles", "editRules", "editRanks", "removeQueue"],
  },
  admin: {
    label: "Admin",
    color: "pink",
    permissions: ["acceptLevels", "acceptRecords", "assignRoles", "editRules", "editRanks", "removeQueue"],
  },
  listModerator: {
    label: "List Moderator",
    color: "violet",
    permissions: ["acceptLevels", "editRanks", "removeQueue"],
  },
  recordModerator: {
    label: "Record Moderator",
    color: "green",
    permissions: ["acceptRecords", "removeQueue"],
  },
  trialModerator: {
    label: "Trial Moderator",
    color: "warning",
    permissions: [],
  },
};

const staff = [
  { name: "hkh12321", role: "owner", status: "online" },
  { name: "Lipt0n", role: "coOwner", status: "online" },
  { name: "Vexen", role: "admin", status: "reviewing" },
  { name: "Noxces", role: "listModerator", status: "levels" },
  { name: "PidorGMD", role: "recordModerator", status: "records" },
  { name: "AytistGD", role: "trialModerator", status: "training" },
];

const defaultRecordQueue = [
  {
    recordId: "record-1",
    player: "Nile",
    level: "Abyss Route",
    progress: "98.4",
    category: "Classic",
    video: "https://example.com/record-aster",
    submittedAt: "Queued",
  },
  {
    recordId: "record-2",
    player: "vexen",
    level: "Pulse Matrix",
    progress: "96.9%",
    category: "Classic",
    video: "https://example.com/record-frost",
    submittedAt: "Queued",
  },
];

const categoryLists = {
  challenges: [
    {
      rank: 1,
      name: "At Dooms Gate",
      creator: "hkh12321",
      verifier: "Vexen",
      levelId: "139352997",
      difficulty: "Challenge",
      note: "Short timing route",
    },
    {
      rank: 2,
      name: "Mini Collapse",
      creator: "Riven",
      verifier: "Vexen",
      levelId: "77110023",
      difficulty: "Challenge",
      note: "Tight wave control",
    },
  ],
  spams: [
    {
      rank: 1,
      name: "Click Furnace",
      creator: "Drax",
      verifier: "Moon",
      levelId: "88110044",
      difficulty: "Spam",
      note: "High CPS burst",
    },
    {
      rank: 2,
      name: "Input Storm",
      creator: "Aster",
      verifier: "Frost",
      levelId: "88110045",
      difficulty: "Spam",
      note: "Consistency spam",
    },
  ],
  impossibles: [
    {
      rank: 1,
      name: "Frame Absolute",
      creator: "Xeno",
      verifier: "Showcase",
      levelId: "99110066",
      difficulty: "Impossible",
      note: "Showcase only",
    },
    {
      rank: 2,
      name: "Null Machine",
      creator: "Eden",
      verifier: "Showcase",
      levelId: "99110067",
      difficulty: "Impossible",
      note: "No verified completion",
    },
  ],
  future: [
    {
      rank: "?",
      name: "Solar Layout",
      creator: "Nora",
      verifier: "Unreleased",
      levelId: "TBA",
      difficulty: "Future",
      note: "Planned release",
    },
    {
      rank: "?",
      name: "After Violet",
      creator: "Kairo",
      verifier: "In progress",
      levelId: "TBA",
      difficulty: "Future",
      note: "Verification not started",
    },
    {
      rank: "?",
      name: "Silent Corridor Layout",
      creator: "Xeno",
      verifier: "Testing",
      levelId: "TBA",
      difficulty: "Future",
      note: "Balance changes pending",
    },
  ],
};

const defaultLevels = [
  {
    rank: 1,
    name: "Abyss Route",
    creator: "Kairo",
    verifier: "Nile",
    levelId: "102938475",
    video: "https://example.com/abyss-route",
    length: "2:18",
    rating: 98.4,
    status: "top",
    difficulty: "Extreme",
    points: 150,
    victors: 3,
  },
  {
    rank: 2,
    name: "Pulse Matrix",
    creator: "Riven",
    verifier: "Vexen",
    levelId: "928374651",
    video: "https://example.com/pulse-matrix",
    length: "1:52",
    rating: 96.9,
    status: "top",
    difficulty: "Extreme",
    points: 142,
    victors: 5,
  },
  {
    rank: 3,
    name: "Signal Breaker",
    creator: "Mako",
    verifier: "Iris",
    levelId: "837261940",
    video: "https://example.com/signal-breaker",
    length: "2:04",
    rating: 95.2,
    status: "top",
    difficulty: "Extreme",
    points: 136,
    victors: 8,
  },
  {
    rank: 4,
    name: "Static Tower",
    creator: "Drax",
    verifier: "Moon",
    levelId: "726150493",
    video: "https://example.com/static-tower",
    length: "1:44",
    rating: 92.7,
    status: "top",
    difficulty: "Insane",
    points: 128,
    victors: 11,
  },
  {
    rank: 5,
    name: "Zero Delay",
    creator: "Nora",
    verifier: "Frost",
    levelId: "615049382",
    video: "https://example.com/zero-delay",
    length: "1:36",
    rating: 91.5,
    status: "top",
    difficulty: "Insane",
    points: 120,
    victors: 9,
  },
  {
    rank: 11,
    name: "Glass Current",
    creator: "Eden",
    verifier: "Aster",
    levelId: "504938271",
    video: "https://example.com/glass-current",
    length: "2:28",
    rating: 86.8,
    status: "extended",
    difficulty: "Hard",
    points: 82,
    victors: 17,
  },
  {
    rank: 14,
    name: "Orbit Thread",
    creator: "Xeno",
    verifier: "Luma",
    levelId: "493827160",
    video: "https://example.com/orbit-thread",
    length: "1:58",
    rating: 84.1,
    status: "extended",
    difficulty: "Hard",
    points: 73,
    victors: 22,
  },
  {
    rank: 0,
    name: "Neon Damage",
    creator: "Axel",
    verifier: "Pending",
    levelId: "382716049",
    video: "https://example.com/neon-damage",
    length: "2:07",
    rating: 0,
    status: "pending",
    difficulty: "Unrated",
    points: 0,
    victors: 0,
  },
];

const legacy = [
  ["Night Hall", "Former #3", "78 pts"],
  ["Frame Burn", "Former #8", "64 pts"],
  ["Cold Sync", "Former #12", "51 pts"],
  ["Thin Air", "Former #18", "42 pts"],
  ["Metro Gap", "Former #21", "37 pts"],
  ["Square Limit", "Former #25", "31 pts"],
];

const players = [
  ["Nile", 422, 12],
  ["Vexen", 388, 10],
  ["Iris", 344, 9],
  ["Moon", 305, 8],
  ["Frost", 292, 7],
  ["Aster", 244, 6],
];

const spamSlayers = [
  ["Drax", 318, 14],
  ["Aster", 284, 11],
  ["Frost", 251, 9],
  ["Moon", 219, 7],
  ["Kairo", 188, 6],
];

const challengeSlayers = [
  ["Nile", 336, 16],
  ["Vexen", 302, 13],
  ["Iris", 278, 12],
  ["Eden", 231, 8],
  ["Riven", 204, 7],
];

const victors = [
  ["Nile", "Abyss Route", "100%"],
  ["Vexen", "Pulse Matrix", "100%"],
  ["Iris", "Signal Breaker", "100%"],
  ["Moon", "Static Tower", "100%"],
];

let activeFilter = "all";
let levels = loadStored(STORAGE_LEVELS, defaultLevels);
let reviewQueue = loadStored(STORAGE_QUEUE, []);
let activeRole = localStorage.getItem(STORAGE_ROLE) || "member";
let recordQueue = loadStored(STORAGE_RECORD_QUEUE, defaultRecordQueue);
let staffApplications = loadStored(STORAGE_STAFF_APPLICATIONS, []);
let ideas = loadStored(STORAGE_IDEAS, []);
let rankRequests = loadStored(STORAGE_RANK_REQUESTS, []);
let accounts = loadStored(STORAGE_ACCOUNTS, []);
let currentAccountId = localStorage.getItem(STORAGE_CURRENT_ACCOUNT) || "";
let rateLimits = loadStored(STORAGE_RATE_LIMITS, {});
let viewedProfileUsername = "";
let activeAccountCompletionFilter = "Classic";

const levelList = document.querySelector("#levelList");
const challengeList = document.querySelector("#challengeList");
const spamList = document.querySelector("#spamList");
const impossibleList = document.querySelector("#impossibleList");
const futureList = document.querySelector("#futureList");
const queueList = document.querySelector("#queueList");
const recordQueueList = document.querySelector("#recordQueueList");
const staffApplicationQueue = document.querySelector("#staffApplicationQueue");
const ideaQueue = document.querySelector("#ideaQueue");
const rankRequestQueue = document.querySelector("#rankRequestQueue");
const rankEditor = document.querySelector("#rankEditor");
const staffList = document.querySelector("#staffList");
const accountList = document.querySelector("#accountList");
const permissionList = document.querySelector("#permissionList");
const activeRoleSelects = document.querySelectorAll("[data-role-select]");
const manualLevelForm = document.querySelector("#manualLevelForm");
const manualAddButton = document.querySelector("#manualAddButton");
const manualLevelMessage = document.querySelector("#manualLevelMessage");
const ideaForm = document.querySelector("#ideaForm");
const ideaMessage = document.querySelector("#ideaMessage");
const staffApplicationForm = document.querySelector("#staffApplicationForm");
const staffApplicationMessage = document.querySelector("#staffApplicationMessage");
const staffRoleSelect = document.querySelector("#staffRoleSelect");
const recordModeratorTestBlock = document.querySelector("#recordModeratorTestBlock");
const hackVerdictSelect = document.querySelector("#hackVerdictSelect");
const rankRequestForm = document.querySelector("#rankRequestForm");
const rankRequestMessage = document.querySelector("#rankRequestMessage");
const accountForm = document.querySelector("#accountForm");
const accountMessage = document.querySelector("#accountMessage");
const recordSubmitForm = document.querySelector("#recordSubmitForm");
const recordSubmitMessage = document.querySelector("#recordSubmitMessage");
const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");
const logoutButton = document.querySelector("#logoutButton");
const accountCornerName = document.querySelector("#accountCornerName");
const accountCornerMeta = document.querySelector("#accountCornerMeta");
const accountProfileName = document.querySelector("#accountProfileName");
const accountProfileMeta = document.querySelector("#accountProfileMeta");
const accountProfileLink = document.querySelector("#accountProfileLink");
const accountPointsCount = document.querySelector("#accountPointsCount");
const accountCreatedCount = document.querySelector("#accountCreatedCount");
const accountVerifiedCount = document.querySelector("#accountVerifiedCount");
const accountCreatedList = document.querySelector("#accountCreatedList");
const accountVerifiedList = document.querySelector("#accountVerifiedList");
const accountPassedList = document.querySelector("#accountPassedList");
const listSelect = document.querySelector("#listSelect");
const managementNavLink = document.querySelector("#managementNavLink");
const tabs = document.querySelectorAll(".tab");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const modal = document.querySelector("#levelModal");
const modalBody = document.querySelector("#modalBody");

function loadStored(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function saveStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function canSubmitAction(actionName) {
  const now = Date.now();
  const attempts = (rateLimits[actionName] || []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (attempts.length >= RATE_LIMIT_MAX_ACTIONS) {
    rateLimits[actionName] = attempts;
    saveStored(STORAGE_RATE_LIMITS, rateLimits);
    return false;
  }

  attempts.push(now);
  rateLimits[actionName] = attempts;
  saveStored(STORAGE_RATE_LIMITS, rateLimits);
  return true;
}

function rateLimitMessage(messageElement) {
  if (messageElement) {
    messageElement.textContent = "Too many attempts. Wait about a minute and try again.";
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cleanUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function nextRank() {
  const ranked = levels.filter((level) => level.rank > 0).map((level) => level.rank);
  return ranked.length ? Math.max(...ranked) + 1 : 1;
}

function can(permission) {
  return roles[activeRole] ? roles[activeRole].permissions.includes(permission) : false;
}

function hasManagementAccess() {
  return activeRole !== "member";
}

function roleBadge(roleKey) {
  const role = roles[roleKey] || roles.trialModerator;
  return `<span class="role-badge ${role.color}">${escapeHtml(role.label)}</span>`;
}

function permissionLabel(permission) {
  const labels = {
    acceptLevels: "Accept levels",
    acceptRecords: "Accept records",
    manageStaff: "Manage staff",
    assignRoles: "Assign roles",
    editRules: "Edit rules",
    editRanks: "Edit level positions",
    removeQueue: "Remove queue items",
  };
  return labels[permission] || permission;
}

function canAssignRoles() {
  return can("assignRoles");
}

function assignableRoles() {
  if (activeRole === "owner") {
    return ["member", "listModerator", "recordModerator", "admin", "coOwner", "owner"];
  }

  if (activeRole === "coOwner" || activeRole === "admin") {
    return ["member", "listModerator", "recordModerator", "admin"];
  }

  return ["member"];
}

function visibleLevels() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const selectedList = listSelect ? listSelect.value : "classic";
  const source = selectedList === "classic" ? levels : categoryLists[selectedList] || [];
  const sorted = [...source].sort((a, b) => {
    if (sortSelect && sortSelect.value === "rating") return b.rating - a.rating;
    if (sortSelect && sortSelect.value === "length") return String(b.length || "").localeCompare(String(a.length || ""));
    return (a.rank || 999) - (b.rank || 999);
  });

  return sorted.filter((level) => {
    const matchesFilter =
      selectedList !== "classic" ||
      activeFilter === "all" ||
      (activeFilter === "top" && level.rank > 0 && level.rank <= 10) ||
      level.status === activeFilter;
    const matchesSearch = [level.name, level.creator, level.verifier, level.levelId, level.note]
      .join(" ")
      .toLowerCase()
      .includes(query);
    return matchesFilter && matchesSearch;
  });
}

function renderLevels() {
  if (!levelList) return;
  const rows = visibleLevels();
  levelList.innerHTML = rows
    .map(
      (level) => `
        <article class="level-card">
          <div class="rank">${level.rank || "?"}</div>
          <div>
            <div class="level-title">
              <h3>${escapeHtml(level.name)}</h3>
              <span class="tag">${escapeHtml(level.difficulty)}</span>
            </div>
            <div class="level-meta">
              <span>ID: ${escapeHtml(level.levelId || "none")}</span>
              <span>by ${escapeHtml(level.creator)}</span>
              <span>verified by ${escapeHtml(level.verifier)}</span>
              <span>${escapeHtml(level.length || level.note || "listed")}</span>
              <span>${level.rating ? `${escapeHtml(level.rating)}%` : level.note ? escapeHtml(level.note) : "awaiting rating"}</span>
            </div>
          </div>
          <div class="level-actions">
            <button class="button ghost" type="button" data-level="${escapeHtml(level.name)}">Details</button>
          </div>
        </article>
      `
    )
    .join("");

  if (!rows.length) {
    levelList.innerHTML = `<article class="level-card"><div>No matching layouts found.</div></article>`;
  }
}

function renderCategoryLists() {
  const targets = {
    challenges: challengeList,
    spams: spamList,
    impossibles: impossibleList,
    future: futureList,
  };

  Object.entries(targets).forEach(([key, target]) => {
    if (!target) return;
    target.innerHTML = categoryLists[key]
      .map(
        (item) => `
          <article class="level-card">
            <div class="rank">${escapeHtml(item.rank)}</div>
            <div>
              <div class="level-title">
                <h3>${escapeHtml(item.name)}</h3>
                <span class="tag">${escapeHtml(item.difficulty)}</span>
              </div>
              <div class="level-meta">
                <span>ID: ${escapeHtml(item.levelId)}</span>
                <span>by ${escapeHtml(item.creator)}</span>
                <span>verified by ${escapeHtml(item.verifier)}</span>
                <span>${escapeHtml(item.note)}</span>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  });
}

function renderQueue() {
  if (!queueList) return;
  const canAccept = can("acceptLevels");
  const canRemove = can("removeQueue");

  queueList.innerHTML = reviewQueue
    .map(
      (item) => `
        <article class="review-card">
          <div>
            <p class="eyebrow">submitted by ${escapeHtml(item.contact)}</p>
            <h3>${escapeHtml(item.name)}</h3>
            <div class="level-meta">
              <span>ID: ${escapeHtml(item.levelId)}</span>
              <span>creator: ${escapeHtml(item.creator)}</span>
              <span>list: ${escapeHtml(item.targetList || "Classic")}</span>
              <span>verified by: ${escapeHtml(item.verifier)}</span>
              <span>submitted: ${escapeHtml(item.submittedAt)}</span>
            </div>
            <p>${escapeHtml(item.notes || "No notes.")}</p>
            <a class="text-link" href="${escapeHtml(item.video)}" target="_blank" rel="noreferrer">Open video proof</a>
          </div>
          <div class="review-actions">
            <button class="button primary" type="button" data-accept="${escapeHtml(item.queueId)}" ${canAccept ? "" : "disabled"}>Accept Level</button>
            <button class="button ghost" type="button" data-reject="${escapeHtml(item.queueId)}" ${canRemove ? "" : "disabled"}>Remove</button>
            <small>${canAccept ? "Role can accept levels" : "This role cannot accept levels"}</small>
          </div>
        </article>
      `
    )
    .join("");

  if (!reviewQueue.length) {
    queueList.innerHTML = `<article class="review-card"><div>No submitted levels yet.</div></article>`;
  }
}

function renderRoleSelect() {
  const availableRoles = hasManagementAccess()
    ? Object.entries(roles).filter(([key]) => key !== "member")
    : [["member", roles.member]];

  const options = availableRoles
    .map(
      ([key, role]) => `
        <option value="${key}" ${key === activeRole ? "selected" : ""}>${escapeHtml(role.label)}</option>
      `
    )
    .join("");

  activeRoleSelects.forEach((select) => {
    select.innerHTML = options;
  });
}

function renderManagement() {
  if (!staffList || !permissionList || !recordQueueList || !rankEditor) return;

  staffList.innerHTML = staff
    .map(
      (person) => `
        <article class="staff-card">
          <div>
            <strong>${escapeHtml(person.name)}</strong>
            <span>${escapeHtml(person.status)}</span>
          </div>
          ${roleBadge(person.role)}
        </article>
      `
    )
    .join("");

  permissionList.innerHTML = Object.entries(roles)
    .map(
      ([key, role]) => `
        <article class="permission-card ${key === activeRole ? "active" : ""}">
          <div>
            ${roleBadge(key)}
            <p>${role.permissions.length ? role.permissions.map(permissionLabel).join(", ") : "View only"}</p>
          </div>
        </article>
      `
    )
    .join("");

  renderRecordQueue();
  renderRankEditor();
  renderManualAddForm();
  renderCommunityQueues();
  renderAccounts();
}

function syncRoleFromCurrentAccount() {
  const currentAccount = accounts.find((account) => account.id === currentAccountId);
  const nextRole = currentAccount ? currentAccount.siteRole : "member";

  if (activeRole !== nextRole) {
    activeRole = nextRole;
    localStorage.setItem(STORAGE_ROLE, activeRole);
  }
}

function renderAccessControls() {
  if (managementNavLink) {
    managementNavLink.style.display = hasManagementAccess() ? "" : "none";
  }
}

function renderAccounts() {
  if (!accountList) return;

  if (!accounts.length) {
    accountList.innerHTML = `<article class="staff-card"><div>No accounts created yet.</div></article>`;
    return;
  }

  accountList.innerHTML = accounts
    .map(
      (account) => `
        <article class="staff-card">
          <div>
            <strong>${escapeHtml(account.username)}</strong>
            <span>${escapeHtml(account.discord || "No Discord")} - ${escapeHtml(account.tag)}</span>
          </div>
          <div class="account-actions">
            ${account.id === currentAccountId ? `<span class="role-badge green">Active</span>` : `<button class="button ghost" type="button" data-switch-account="${escapeHtml(account.id)}">Use</button>`}
            ${
              canAssignRoles()
                ? `<select class="role-assign-select" data-account-role="${escapeHtml(account.id)}">
                    ${assignableRoles()
                      .map(
                        (roleKey) =>
                          `<option value="${roleKey}" ${roleKey === (account.siteRole || "member") ? "selected" : ""}>${escapeHtml(roles[roleKey].label)}</option>`
                      )
                      .join("")}
                  </select>`
                : roleBadge(account.siteRole || "member")
            }
          </div>
        </article>
      `
    )
    .join("");
}

function updateAccountRole(accountId, nextRole) {
  if (!canAssignRoles()) return;
  if (!assignableRoles().includes(nextRole)) return;

  accounts = accounts.map((account) =>
    account.id === accountId
      ? {
          ...account,
          siteRole: nextRole,
        }
      : account
  );

  saveStored(STORAGE_ACCOUNTS, accounts);
  renderAll();
}

function renderCommunityQueues() {
  renderRequestQueue(staffApplicationQueue, staffApplications, {
    empty: "No staff applications yet.",
    canRemove: can("manageStaff"),
    type: "staff",
    title: (item) => `${item.role} application`,
    meta: (item) => [
      `contact: ${item.contact}`,
      `sent: ${item.submittedAt}`,
      item.role === "Record Moderator" ? `verdict: ${item.hackVerdict || "none"}` : "",
    ].filter(Boolean),
    body: (item) =>
      item.role === "Record Moderator" && item.hackVerdict
        ? `${item.reason} | Test answer: ${item.hackVerdict}`
        : item.reason,
  });

  renderRequestQueue(ideaQueue, ideas, {
    empty: "No ideas yet.",
    canRemove: can("editRules") || can("manageStaff"),
    type: "idea",
    title: (item) => item.title,
    meta: (item) => [`contact: ${item.contact}`, `sent: ${item.submittedAt}`],
    body: (item) => item.idea,
  });

  renderRequestQueue(rankRequestQueue, rankRequests, {
    empty: "No rank change requests yet.",
    canRemove: can("editRanks"),
    type: "rank",
    title: (item) => `${item.level} -> #${item.rank}`,
    meta: (item) => [`contact: ${item.contact}`, `sent: ${item.submittedAt}`],
    body: (item) => item.reason,
  });
}

function renderRequestQueue(target, rows, config) {
  if (!target) return;

  if (!rows.length) {
    target.innerHTML = `<article class="review-card"><div>${config.empty}</div></article>`;
    return;
  }

  target.innerHTML = rows
    .map(
      (item) => `
        <article class="review-card">
          <div>
            <p class="eyebrow">${escapeHtml(config.title(item))}</p>
            <h3>${escapeHtml(item.contact)}</h3>
            <div class="level-meta">
              ${config.meta(item).map((text) => `<span>${escapeHtml(text)}</span>`).join("")}
            </div>
            <p>${escapeHtml(config.body(item))}</p>
          </div>
          <div class="review-actions">
            <button class="button ghost" type="button" data-remove-request="${escapeHtml(config.type)}:${escapeHtml(item.id)}" ${config.canRemove ? "" : "disabled"}>Remove</button>
            <small>${config.canRemove ? "Role can clear this queue" : "This role cannot clear this queue"}</small>
          </div>
        </article>
      `
    )
    .join("");
}

function renderManualAddForm() {
  if (!manualLevelForm || !manualAddButton || !manualLevelMessage) return;
  const allowed = can("acceptLevels");

  manualLevelForm.querySelectorAll("input, button").forEach((field) => {
    field.disabled = !allowed;
  });

  manualLevelMessage.textContent = allowed
    ? "Owner, Co Owner, Admin, and List Moderator can add levels."
    : "This role cannot add levels.";
}

function renderStaffApplicationRoleState() {
  if (!staffRoleSelect || !recordModeratorTestBlock || !hackVerdictSelect) return;
  const needsTest = staffRoleSelect.value === "Record Moderator";
  recordModeratorTestBlock.hidden = !needsTest;
  hackVerdictSelect.required = needsTest;
  if (!needsTest) {
    hackVerdictSelect.value = "";
  }
}

function renderRankEditor() {
  if (!rankEditor) return;
  const canEditRanks = can("editRanks");
  const sorted = [...levels].sort((a, b) => (a.rank || 999) - (b.rank || 999));

  rankEditor.innerHTML = sorted
    .map(
      (level) => `
        <article class="rank-editor-row">
          <div>
            <strong>${escapeHtml(level.name)}</strong>
            <span>ID: ${escapeHtml(level.levelId || "none")} - verifier: ${escapeHtml(level.verifier || "Pending")}</span>
          </div>
          <label>
            Rank
            <input type="number" min="0" value="${escapeHtml(level.rank || 0)}" data-rank-level="${escapeHtml(level.name)}" ${canEditRanks ? "" : "disabled"} />
          </label>
        </article>
      `
    )
    .join("");

  if (!canEditRanks) {
    rankEditor.insertAdjacentHTML(
      "afterbegin",
      `<p class="locked-note">Only Owner, Admin, and List Moderator can change level positions.</p>`
    );
  }
}

function renderRecordQueue() {
  if (!recordQueueList) return;
  const canAccept = can("acceptRecords");
  const canRemove = can("removeQueue");

  recordQueueList.innerHTML = recordQueue
    .map(
      (record) => `
        <article class="review-card">
          <div>
            <p class="eyebrow">record from ${escapeHtml(record.player)}</p>
            <h3>${escapeHtml(record.level)} - ${escapeHtml(record.progress)}</h3>
            <div class="level-meta">
              <span>type: ${escapeHtml(record.category || "Classic")}</span>
              <span>submitted: ${escapeHtml(record.submittedAt)}</span>
              <span>player: ${escapeHtml(record.player)}</span>
            </div>
            <a class="text-link" href="${escapeHtml(record.video)}" target="_blank" rel="noreferrer">Open record video</a>
          </div>
          <div class="review-actions">
            <button class="button primary" type="button" data-accept-record="${escapeHtml(record.recordId)}" ${canAccept ? "" : "disabled"}>Accept Record</button>
            <button class="button ghost" type="button" data-remove-record="${escapeHtml(record.recordId)}" ${canRemove ? "" : "disabled"}>Remove</button>
            <small>${canAccept ? "Role can accept records" : "This role cannot accept records"}</small>
          </div>
        </article>
      `
    )
    .join("");

  if (!recordQueue.length) {
    recordQueueList.innerHTML = `<article class="review-card"><div>No submitted records yet.</div></article>`;
  }
}

function openLevel(name) {
  const level = levels.find((item) => item.name === name);
  if (!level || !modal || !modalBody) return;

  const video = cleanUrl(level.video);
  modalBody.innerHTML = `
    <div class="modal-body">
      <p class="eyebrow">rank ${level.rank || "pending"}</p>
      <h2>${escapeHtml(level.name)}</h2>
      <p class="hero-copy">
        Built by ${escapeHtml(level.creator)} and verified by ${escapeHtml(level.verifier)}.
        Ranked for flow, movement density, sync quality, and consistency across the full route.
      </p>
      <div class="stat-grid">
        <div class="stat"><span>Level ID</span><strong>${escapeHtml(level.levelId || "TBD")}</strong></div>
        <div class="stat"><span>Rating</span><strong>${level.rating || "TBD"}</strong></div>
        <div class="stat"><span>Length</span><strong>${escapeHtml(level.length)}</strong></div>
        <div class="stat"><span>Points</span><strong>${escapeHtml(level.points)}</strong></div>
      </div>
      <div class="modal-actions">
        ${video ? `<a class="button ghost" href="${escapeHtml(video)}" target="_blank" rel="noreferrer">Open video</a>` : ""}
        <a class="button primary" href="https://discord.gg/BGaWFnkuz" target="_blank" rel="noreferrer">Submit on Discord</a>
      </div>
    </div>
  `;
  modal.showModal();
}

function acceptSubmission(queueId) {
  if (!can("acceptLevels")) return;
  const submission = reviewQueue.find((item) => item.queueId === queueId);
  if (!submission) return;

  levels = [
    ...levels,
    {
      rank: nextRank(),
      name: submission.name,
      creator: submission.creator,
      verifier: submission.verifier,
      levelId: submission.levelId,
      video: submission.video,
      length: "TBD",
      rating: 0,
      status: "extended",
      difficulty: "Unrated",
      points: 0,
      victors: 0,
    },
  ];
  reviewQueue = reviewQueue.filter((item) => item.queueId !== queueId);
  saveStored(STORAGE_LEVELS, levels);
  saveStored(STORAGE_QUEUE, reviewQueue);
  renderAll();
}

function removeSubmission(queueId) {
  if (!can("removeQueue")) return;
  reviewQueue = reviewQueue.filter((item) => item.queueId !== queueId);
  saveStored(STORAGE_QUEUE, reviewQueue);
  renderQueue();
}

function acceptRecord(recordId) {
  if (!can("acceptRecords")) return;
  const record = recordQueue.find((item) => item.recordId === recordId);
  if (!record) return;

  victors.unshift([record.player, record.level, record.progress]);
  recordQueue = recordQueue.filter((item) => item.recordId !== recordId);
  saveStored(STORAGE_RECORD_QUEUE, recordQueue);
  renderAll();
}

function removeRecord(recordId) {
  if (!can("removeQueue")) return;
  recordQueue = recordQueue.filter((item) => item.recordId !== recordId);
  saveStored(STORAGE_RECORD_QUEUE, recordQueue);
  renderRecordQueue();
}

function removeRequestQueueItem(value) {
  const [type, id] = value.split(":");

  if (type === "staff" && can("manageStaff")) {
    staffApplications = staffApplications.filter((item) => item.id !== id);
    saveStored(STORAGE_STAFF_APPLICATIONS, staffApplications);
  }

  if (type === "idea" && (can("editRules") || can("manageStaff"))) {
    ideas = ideas.filter((item) => item.id !== id);
    saveStored(STORAGE_IDEAS, ideas);
  }

  if (type === "rank" && can("editRanks")) {
    rankRequests = rankRequests.filter((item) => item.id !== id);
    saveStored(STORAGE_RANK_REQUESTS, rankRequests);
  }

  renderCommunityQueues();
}

function createAccount(form) {
  const data = new FormData(form);
  const username = data.get("username").trim();
  const discord = data.get("discord").trim();
  const tag = data.get("tag");
  const pin = data.get("pin").trim();

  if (accounts.some((account) => account.username.toLowerCase() === username.toLowerCase())) {
    if (accountMessage) accountMessage.textContent = "This username already exists locally.";
    return;
  }

  if (pin.length < 4) {
    if (accountMessage) accountMessage.textContent = "PIN must be at least 4 symbols.";
    return;
  }

  const account = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    username,
    discord,
    tag,
    siteRole: "member",
    pin,
    createdAt: new Date().toLocaleString(),
  };

  accounts = [...accounts, account];
  currentAccountId = account.id;
  viewedProfileUsername = account.username;
  saveStored(STORAGE_ACCOUNTS, accounts);
  localStorage.setItem(STORAGE_CURRENT_ACCOUNT, currentAccountId);
  form.reset();
  if (accountMessage) accountMessage.textContent = "Account created on this browser.";
  renderAll();
}

function switchAccount(id) {
  const account = accounts.find((item) => item.id === id);
  if (!account) return;
  currentAccountId = id;
  viewedProfileUsername = account.username;
  localStorage.setItem(STORAGE_CURRENT_ACCOUNT, currentAccountId);
  renderAll();
}

function loginAccount(form) {
  const data = new FormData(form);
  const username = data.get("username").trim().toLowerCase();
  const pin = data.get("pin").trim();
  const account = accounts.find((item) => item.username.toLowerCase() === username);

  if (!account) {
    if (loginMessage) loginMessage.textContent = "Account not found on this browser.";
    return;
  }

  if (!account.pin) {
    account.pin = pin;
    saveStored(STORAGE_ACCOUNTS, accounts);
  }

  if (account.pin !== pin) {
    if (loginMessage) loginMessage.textContent = "Wrong PIN.";
    return;
  }

  currentAccountId = account.id;
  viewedProfileUsername = account.username;
  localStorage.setItem(STORAGE_CURRENT_ACCOUNT, currentAccountId);
  form.reset();
  if (loginMessage) loginMessage.textContent = `Logged in as ${account.username}.`;
  renderAll();
}

function logoutAccount() {
  currentAccountId = "";
  viewedProfileUsername = "";
  localStorage.removeItem(STORAGE_CURRENT_ACCOUNT);
  if (loginMessage) loginMessage.textContent = "Logged out.";
  renderAll();
}

function renderAccountCorner() {
  const currentAccount = accounts.find((account) => account.id === currentAccountId);
  if (!accountCornerName || !accountCornerMeta) return;

  if (!currentAccount) {
    accountCornerName.textContent = "Guest";
    accountCornerMeta.textContent = "Not logged in";
    const accountCorner = document.querySelector("#accountCorner");
    if (accountCorner) {
      accountCorner.setAttribute("href", "#account");
    }
    return;
  }

  accountCornerName.textContent = currentAccount.username;
  accountCornerMeta.textContent = currentAccount.discord
    ? `${currentAccount.tag} - ${currentAccount.discord}`
    : currentAccount.tag;
  const accountCorner = document.querySelector("#accountCorner");
  if (accountCorner) {
    accountCorner.setAttribute("href", `#account:${encodeURIComponent(currentAccount.username)}`);
  }
}

function allProfileLevels() {
  return [
    ...levels,
    ...Object.values(categoryLists).flat(),
  ];
}

function renderAccountDashboard() {
  if (
    !accountProfileName ||
    !accountProfileMeta ||
    !accountProfileLink ||
    !accountPointsCount ||
    !accountCreatedCount ||
    !accountVerifiedCount ||
    !accountCreatedList ||
    !accountVerifiedList ||
    !accountPassedList
  ) {
    return;
  }

  const currentAccount = accounts.find((account) => account.id === currentAccountId);
  const profileAccount =
    accounts.find((account) => account.username.toLowerCase() === viewedProfileUsername.toLowerCase()) ||
    currentAccount;

  if (!profileAccount) {
    accountProfileName.textContent = "Guest";
    accountProfileMeta.textContent = "Log in to see your profile activity.";
    accountProfileLink.setAttribute("href", "#account");
    accountProfileLink.textContent = "Profile";
    accountPointsCount.textContent = "0";
    accountCreatedCount.textContent = "0";
    accountVerifiedCount.textContent = "0";
    accountCreatedList.innerHTML = `<article class="staff-card"><div>No created levels yet.</div></article>`;
    accountVerifiedList.innerHTML = `<article class="staff-card"><div>No verified levels yet.</div></article>`;
    accountPassedList.innerHTML = `<article class="staff-card"><div>No passed levels yet.</div></article>`;
    return;
  }

  const username = profileAccount.username.toLowerCase();
  const relatedLevels = allProfileLevels();
  const created = relatedLevels.filter((level) => String(level.creator || "").toLowerCase() === username);
  const verified = relatedLevels.filter((level) => String(level.verifier || "").toLowerCase() === username);
  const completions = recordQueue.filter((record) => String(record.player || "").toLowerCase() === username);
  const points = getProfilePoints(profileAccount.username);
  const categories = getCompletionCategorySummary(completions);
  const passedInCategory = completions.filter(
    (record) => String(record.category || "Classic") === activeAccountCompletionFilter
  );

  accountProfileName.textContent = profileAccount.username;
  accountProfileMeta.textContent = profileAccount.discord
    ? `${profileAccount.tag} - ${profileAccount.discord}`
    : profileAccount.tag;
  accountProfileLink.setAttribute("href", `#account:${encodeURIComponent(profileAccount.username)}`);
  accountProfileLink.textContent = `Profile: ${profileAccount.username}`;
  accountPointsCount.textContent = String(points);
  accountCreatedCount.textContent = String(created.length);
  accountVerifiedCount.textContent = `${verified.length} (${categories})`;
  accountCreatedList.innerHTML = renderAccountLevelRows(created, "No created levels yet.");
  accountVerifiedList.innerHTML = renderAccountLevelRows(verified, "No verified levels yet.");
  accountPassedList.innerHTML = renderAccountRecordRows(
    passedInCategory,
    `No passed levels in ${activeAccountCompletionFilter} yet.`
  );
  document.querySelectorAll("[data-account-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.accountFilter === activeAccountCompletionFilter);
  });
}

function getProfilePoints(username) {
  const lower = username.toLowerCase();
  return [players, spamSlayers, challengeSlayers].reduce((total, board) => {
    const row = board.find((item) => String(item[0]).toLowerCase() === lower);
    return total + (row ? Number(row[1]) || 0 : 0);
  }, 0);
}

function getCompletionCategorySummary(rows) {
  const counts = { Classic: 0, Challenges: 0, Spams: 0 };
  rows.forEach((row) => {
    const key = row.category || "Classic";
    if (counts[key] !== undefined) {
      counts[key] += 1;
    }
  });

  return `C ${counts.Classic} / Ch ${counts.Challenges} / S ${counts.Spams}`;
}

function renderAccountLevelRows(rows, emptyText) {
  if (!rows.length) {
    return `<article class="staff-card"><div>${emptyText}</div></article>`;
  }

  return rows
    .map(
      (level) => `
        <article class="staff-card">
          <div>
            <strong>${escapeHtml(level.name)}</strong>
            <span>ID: ${escapeHtml(level.levelId || "TBA")} - ${escapeHtml(level.difficulty || level.status || "Listed")}</span>
          </div>
          <span class="role-badge violet">${escapeHtml(level.rank ?? "?")}</span>
        </article>
      `
    )
    .join("");
}

function renderAccountRecordRows(rows, emptyText) {
  if (!rows.length) {
    return `<article class="staff-card"><div>${emptyText}</div></article>`;
  }

  return rows
    .map(
      (record) => `
        <article class="staff-card">
          <div>
            <strong>${escapeHtml(record.level)}</strong>
            <span>${escapeHtml(record.progress)} - ${escapeHtml(record.category || "Classic")}</span>
          </div>
          <a class="text-link" href="${escapeHtml(record.video)}" target="_blank" rel="noreferrer">Video</a>
        </article>
      `
    )
    .join("");
}

function updateLevelRank(levelName, rankValue) {
  if (!can("editRanks")) return;
  const nextValue = Math.max(0, Number.parseInt(rankValue, 10) || 0);
  levels = levels.map((level) =>
    level.name === levelName
      ? {
          ...level,
          rank: nextValue,
          status: levelStatusFromRank(nextValue),
        }
      : level
  );
  saveStored(STORAGE_LEVELS, levels);
  renderSidebars();
  renderLevels();
}

function levelStatusFromRank(rank) {
  if (rank > 0 && rank <= 10) return "top";
  if (rank > 10) return "extended";
  return "pending";
}

function addLevelFromForm(form) {
  if (!can("acceptLevels")) return;
  const data = new FormData(form);
  const video = cleanUrl(data.get("video"));
  const message = manualLevelMessage;
  const rank = Math.max(0, Number.parseInt(data.get("rank"), 10) || 0);

  if (!video) {
    if (message) message.textContent = "Add a valid video link that starts with http:// or https://.";
    return;
  }

  levels = [
    ...levels,
    {
      rank,
      name: data.get("level").trim(),
      creator: data.get("creator").trim(),
      verifier: data.get("verifier").trim(),
      levelId: data.get("levelId").trim(),
      video,
      length: "TBD",
      rating: 0,
      status: levelStatusFromRank(rank),
      difficulty: "Unrated",
      points: 0,
      victors: 0,
    },
  ];

  saveStored(STORAGE_LEVELS, levels);
  form.reset();
  if (message) message.textContent = "Level added to Main List.";
  renderAll();
}

function showView(viewName) {
  if (!viewName) {
    return;
  }

  if (viewName.startsWith("account:")) {
    viewedProfileUsername = decodeURIComponent(viewName.slice("account:".length));
    viewName = "account";
  } else if (viewName === "account") {
    const currentAccount = accounts.find((account) => account.id === currentAccountId);
    viewedProfileUsername = currentAccount ? currentAccount.username : "";
  }

  if (viewName === "management" && !hasManagementAccess()) {
    viewName = "home";
  }

  const normalizedView = viewName === "classic" ? "levels" : viewName;
  if (["classic", "challenges", "spams", "impossibles", "future"].includes(viewName) && listSelect) {
    listSelect.value = viewName;
    activeFilter = "all";
    tabs.forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
    renderLevels();
  }

  document.querySelectorAll("[data-view]").forEach((view) => {
    view.classList.toggle("active", view.dataset.view === normalizedView || (normalizedView === "home" && view.dataset.view === "levels"));
  });

  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.viewLink === viewName);
  });

  const target = normalizedView === "home" ? document.body : document.querySelector(`[data-view="${normalizedView}"]`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderSidebars() {
  const currentAccount = accounts.find((account) => account.id === currentAccountId);
  const sideTotal = document.querySelector("#sideTotal");
  const sidePanel = document.querySelector(".side-panel small");
  const victorList = document.querySelector("#victorList");
  const legacyGrid = document.querySelector("#legacyGrid");

  if (sideTotal) sideTotal.textContent = levels.length;
  if (sidePanel) {
    sidePanel.textContent = currentAccount
      ? `${currentAccount.username} - ${currentAccount.tag}`
      : "ranked layouts";
  }

  if (victorList) {
    victorList.innerHTML = victors
      .map(
        ([player, level, progress]) => `
          <div class="compact-item">
            <div><strong>${escapeHtml(player)}</strong><span> cleared ${escapeHtml(level)}</span></div>
            <strong>${escapeHtml(progress)}</strong>
          </div>
        `
      )
      .join("");
  }

  if (legacyGrid) {
    legacyGrid.innerHTML = legacy
      .map(
        ([name, rank, points]) => `
          <article class="archive-item">
            <div><strong>${escapeHtml(name)}</strong><br><span class="level-meta">${escapeHtml(rank)}</span></div>
            <strong>${escapeHtml(points)}</strong>
          </article>
        `
      )
      .join("");
  }

  renderLeaderboard("#leaderboardRows", players, "records");
  renderLeaderboard("#spamSlayerRows", spamSlayers, "spam clears");
  renderLeaderboard("#challengeSlayerRows", challengeSlayers, "challenge clears");
}

function renderLeaderboard(selector, rows, label) {
  const target = document.querySelector(selector);
  if (!target) return;

  target.innerHTML = rows
    .map(
      ([name, points, clears], index) => `
        <div class="leader-row">
          <div><strong>#${index + 1}</strong> ${escapeHtml(name)}</div>
          <span>${escapeHtml(points)} pts - ${escapeHtml(clears)} ${escapeHtml(label)}</span>
        </div>
      `
    )
    .join("");
}

function renderAll() {
  syncRoleFromCurrentAccount();
  renderAccessControls();
  renderRoleSelect();
  renderAccountCorner();
  renderAccountDashboard();
  renderSidebars();
  renderLevels();
  renderCategoryLists();
  renderQueue();
  renderManagement();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    activeFilter = tab.dataset.filter;
    renderLevels();
  });
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-view-link]");
  const detail = event.target.closest("[data-level]");
  const accept = event.target.closest("[data-accept]");
  const reject = event.target.closest("[data-reject]");
  const acceptRecordButton = event.target.closest("[data-accept-record]");
  const removeRecordButton = event.target.closest("[data-remove-record]");
  const removeRequestButton = event.target.closest("[data-remove-request]");
  const switchAccountButton = event.target.closest("[data-switch-account]");
  const accountFilterButton = event.target.closest("[data-account-filter]");

  if (link) {
    event.preventDefault();
    showView(link.dataset.viewLink);
  }

  if (detail) {
    openLevel(detail.dataset.level);
  }

  if (accept) {
    acceptSubmission(accept.dataset.accept);
  }

  if (reject) {
    removeSubmission(reject.dataset.reject);
  }

  if (acceptRecordButton) {
    acceptRecord(acceptRecordButton.dataset.acceptRecord);
  }

  if (removeRecordButton) {
    removeRecord(removeRecordButton.dataset.removeRecord);
  }

  if (removeRequestButton) {
    removeRequestQueueItem(removeRequestButton.dataset.removeRequest);
  }

  if (switchAccountButton) {
    switchAccount(switchAccountButton.dataset.switchAccount);
  }

  if (accountFilterButton) {
    activeAccountCompletionFilter = accountFilterButton.dataset.accountFilter;
    renderAccountDashboard();
  }
});

document.addEventListener("change", (event) => {
  const roleSelect = event.target.closest("[data-account-role]");
  const rankInput = event.target.closest("[data-rank-level]");

  if (roleSelect) {
    updateAccountRole(roleSelect.dataset.accountRole, roleSelect.value);
  }

  if (rankInput) {
    updateLevelRank(rankInput.dataset.rankLevel, rankInput.value);
    renderRankEditor();
  }
});

const modalClose = document.querySelector(".modal-close");
if (modalClose) {
  modalClose.addEventListener("click", () => {
    if (modal) {
      modal.close();
    }
  });
}

if (searchInput) {
  searchInput.addEventListener("input", renderLevels);
}

if (sortSelect) {
  sortSelect.addEventListener("change", renderLevels);
}

if (listSelect) {
  listSelect.addEventListener("change", () => {
    if (searchInput) {
      searchInput.value = "";
    }
    tabs.forEach((item) => item.classList.remove("active"));
    const allFilterButton = document.querySelector('[data-filter="all"]');
    if (allFilterButton) {
      allFilterButton.classList.add("active");
    }
    activeFilter = "all";
    renderLevels();
  });
}

activeRoleSelects.forEach((select) => {
  select.addEventListener("change", (event) => {
    activeRole = event.target.value;
    localStorage.setItem(STORAGE_ROLE, activeRole);
    renderAll();
  });
});

const submitForm = document.querySelector("#submitForm");
if (submitForm) {
  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const video = cleanUrl(form.get("video"));
    const message = document.querySelector("#formMessage");

    if (!canSubmitAction("levelSubmission")) {
      rateLimitMessage(message);
      return;
    }

    if (!video) {
      if (message) message.textContent = "Add a valid video link that starts with http:// or https://.";
      return;
    }

    reviewQueue = [
      ...reviewQueue,
      {
        queueId: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        name: form.get("level").trim(),
        creator: form.get("creator").trim(),
        targetList: form.get("targetList"),
        verifier: form.get("verifier").trim(),
        levelId: form.get("levelId").trim(),
        video,
        contact: form.get("contact").trim(),
        notes: form.get("notes").trim(),
        submittedAt: new Date().toLocaleString(),
      },
    ];

    saveStored(STORAGE_QUEUE, reviewQueue);
    event.currentTarget.reset();
    if (message) message.textContent = "Submission added to Review Queue. Accept it there to add it to the list.";
    renderQueue();
  });
}

if (manualLevelForm) {
  manualLevelForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!canSubmitAction("manualLevel")) {
      rateLimitMessage(manualLevelMessage);
      return;
    }
    addLevelFromForm(event.currentTarget);
  });
}

if (ideaForm) {
  ideaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    if (!canSubmitAction("idea")) {
      rateLimitMessage(ideaMessage);
      return;
    }

    ideas = [
      ...ideas,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        contact: form.get("contact").trim(),
        title: form.get("title").trim(),
        idea: form.get("idea").trim(),
        submittedAt: new Date().toLocaleString(),
      },
    ];

    saveStored(STORAGE_IDEAS, ideas);
    event.currentTarget.reset();
    if (ideaMessage) ideaMessage.textContent = "Idea sent to Management.";
    renderCommunityQueues();
  });
}

if (staffApplicationForm) {
  staffApplicationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    if (!canSubmitAction("staffApplication")) {
      rateLimitMessage(staffApplicationMessage);
      return;
    }

    if (form.get("role") === "Record Moderator" && !form.get("hackVerdict")) {
      if (staffApplicationMessage) staffApplicationMessage.textContent = "For Record Moderator, watch the test video and answer the hack question.";
      return;
    }

    staffApplications = [
      ...staffApplications,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        contact: form.get("contact").trim(),
        role: form.get("role"),
        hackVerdict: form.get("hackVerdict") || "",
        reason: form.get("reason").trim(),
        submittedAt: new Date().toLocaleString(),
      },
    ];

    saveStored(STORAGE_STAFF_APPLICATIONS, staffApplications);
    event.currentTarget.reset();
    if (staffApplicationMessage) staffApplicationMessage.textContent = "Application sent to Management.";
    renderCommunityQueues();
  });
}

if (staffRoleSelect) {
  staffRoleSelect.addEventListener("change", renderStaffApplicationRoleState);
}

if (rankRequestForm) {
  rankRequestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    if (!canSubmitAction("rankRequest")) {
      rateLimitMessage(rankRequestMessage);
      return;
    }

    rankRequests = [
      ...rankRequests,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        contact: form.get("contact").trim(),
        level: form.get("level").trim(),
        rank: form.get("rank").trim(),
        reason: form.get("reason").trim(),
        submittedAt: new Date().toLocaleString(),
      },
    ];

    saveStored(STORAGE_RANK_REQUESTS, rankRequests);
    event.currentTarget.reset();
    if (rankRequestMessage) rankRequestMessage.textContent = "Rank change request sent to Management.";
    renderCommunityQueues();
  });
}

if (accountForm) {
  accountForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!canSubmitAction("accountCreate")) {
      rateLimitMessage(accountMessage);
      return;
    }
    createAccount(event.currentTarget);
  });
}

if (recordSubmitForm) {
  recordSubmitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const video = cleanUrl(form.get("video"));

    if (!canSubmitAction("recordSubmission")) {
      rateLimitMessage(recordSubmitMessage);
      return;
    }

    if (!video) {
      if (recordSubmitMessage) recordSubmitMessage.textContent = "Add a valid video link that starts with http:// or https://.";
      return;
    }

    recordQueue = [
      ...recordQueue,
      {
        recordId: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        player: form.get("player").trim(),
        level: form.get("level").trim(),
        progress: form.get("progress").trim(),
        category: form.get("category"),
        video,
        submittedAt: new Date().toLocaleString(),
      },
    ];

    saveStored(STORAGE_RECORD_QUEUE, recordQueue);
    event.currentTarget.reset();
    if (recordSubmitMessage) recordSubmitMessage.textContent = "Record added to Record Queue.";
    renderRecordQueue();
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!canSubmitAction("login")) {
      rateLimitMessage(loginMessage);
      return;
    }
    loginAccount(event.currentTarget);
  });
}

if (logoutButton) {
  logoutButton.addEventListener("click", logoutAccount);
}

renderAll();
renderStaffApplicationRoleState();

const initialView = window.location.hash.replace("#", "");
if (initialView) {
  showView(initialView);
}
