const lectures = [
  {
    id: "l1",
    label: "L1",
    title: "光譜學基礎",
    subtitle: "Spectroscopy fundamentals and instrument overview",
    date: "2026-03-06",
    path: "01-Lecture-Notes/L1-光譜學基礎.md",
  },
  {
    id: "l2",
    label: "L2",
    title: "IR 光譜與 FTIR",
    subtitle: "Infrared absorption, Hooke's law, FTIR advantages",
    date: "2026-03-13",
    path: "01-Lecture-Notes/L2-IR光譜與FTIR.md",
  },
  {
    id: "l3",
    label: "L3",
    title: "UV-Vis 吸收光譜",
    subtitle: "Electronic transitions, cuvettes, detectors and quantitation",
    date: "2026-03-20",
    path: "01-Lecture-Notes/L3-UV-Vis吸收光譜.md",
  },
  {
    id: "l4",
    label: "L4",
    title: "X 光吸收與發射光譜",
    subtitle: "XAS, XANES, EXAFS, fluorescence and phosphorescence",
    date: "2026-03-27",
    path: "01-Lecture-Notes/L4-X光吸收與發射光譜.md",
  },
  {
    id: "l5",
    label: "L5",
    title: "X 光繞射光譜",
    subtitle: "Bragg law, diffraction patterns and XRD analysis",
    date: "2026-04-10",
    path: "01-Lecture-Notes/L5-X光繞射光譜.md",
  },
  {
    id: "supp_ir",
    label: "S-IR",
    title: "IR 補充",
    subtitle: "教科書 Ch.5 補充：ATR、DRIFT、樣品製備、光譜解讀",
    date: "2026-03-13",
    path: "01-Lecture-Notes/Supp-IR補充.md",
  },
  {
    id: "supp_uv",
    label: "S-UV",
    title: "UV-Vis 補充",
    subtitle: "Tissue 教科書補充：光譜區域、材料性質、應用",
    date: "2026-03-20",
    path: "01-Lecture-Notes/Supp-UV-Vis補充.md",
  },
];

const reviews = [
  {
    id: "review1",
    label: "R1",
    title: "光譜基礎與 IR",
    subtitle: "光譜總架構、吸收/發射、Beer 定律、選波元件、偵測器",
    date: "2026-04-16",
    path: "03-Exam-Prep/GPT總整理-01-光譜基礎與IR.md",
  },
  {
    id: "review2",
    label: "R2",
    title: "IR 與 FTIR",
    subtitle: "IR 原理、FTIR、DTGS/MCT、ATR/DRIFT、Peak Assignment",
    date: "2026-04-16",
    path: "03-Exam-Prep/GPT總整理-02-IR與FTIR.md",
  },
  {
    id: "review3",
    label: "R3",
    title: "UV-Vis 光譜",
    subtitle: "UV-Vis、偵測器比較、Band Gap、Tauc Plot",
    date: "2026-04-16",
    path: "03-Exam-Prep/GPT總整理-03-UV-Vis光譜.md",
  },
  {
    id: "review4",
    label: "R4",
    title: "XAS 光譜",
    subtitle: "XANES/EXAFS、K-edge/L-edge、Synchrotron",
    date: "2026-04-16",
    path: "03-Exam-Prep/GPT總整理-04-XAS光譜.md",
  },
  {
    id: "review5",
    label: "R5",
    title: "發射光譜與螢光/磷光",
    subtitle: "XES、Fluorescence/Phosphorescence、Stokes Shift",
    date: "2026-04-16",
    path: "03-Exam-Prep/GPT總整理-05-發射光譜與螢光磷光.md",
  },
  {
    id: "review6",
    label: "R6",
    title: "XRD 繞射光譜",
    subtitle: "Bragg 定律、Miller Index、Rietveld、Scherrer",
    date: "2026-04-16",
    path: "03-Exam-Prep/GPT總整理-06-XRD繞射光譜.md",
  },
  {
    id: "review7",
    label: "R7",
    title: "考古題：XAS + XRD",
    subtitle: "XAS 圖譜判讀、XRD 是非題、Cu Ka 波長",
    date: "2026-04-16",
    path: "03-Exam-Prep/GPT總整理-07-考古題XAS與XRD.md",
  },
  {
    id: "review8",
    label: "R8",
    title: "文獻補充 + 答題格式",
    subtitle: "Overtone、Fermi Resonance、溶劑效應、老師答題範例",
    date: "2026-04-16",
    path: "03-Exam-Prep/GPT總整理-08-文獻補充與答題格式.md",
  },
];

const notes = [...lectures, ...reviews];

const notePills = document.querySelector("#note-pills");
const lectureList = document.querySelector("#lecture-list");
const tocList = document.querySelector("#toc-list");
const noteBody = document.querySelector("#note-body");
const readerKicker = document.querySelector("#reader-kicker");
const readerTitle = document.querySelector("#reader-title");
const readerSubtitle = document.querySelector("#reader-subtitle");
const sourceLink = document.querySelector("#source-link");

const githubBase = "https://github.com/ahoooooooo/analytical-chemistry-notes/blob/main/";
const notesContent = window.NOTES_CONTENT || {};

let activeNoteId = "";

marked.setOptions({
  breaks: false,
  gfm: true,
  headerIds: true,
  mangle: false,
});

function encodeGithubPath(path) {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function stripFrontmatter(markdown) {
  return markdown.replace(/^---[\s\S]*?---\s*/u, "");
}

function getNoteById(id) {
  return notes.find((note) => note.id === id) || notes[0];
}

function isReview(note) {
  return note.id.startsWith("review");
}

function renderNavigation() {
  const lecturePills = lectures
    .map(
      (note) =>
        `<button class="note-pill${note.id === activeNoteId ? " active" : ""}" data-note-id="${note.id}">${note.label} · ${note.title}</button>`
    )
    .join("");

  const reviewPills = reviews
    .map(
      (note) =>
        `<button class="note-pill review-pill${note.id === activeNoteId ? " active" : ""}" data-note-id="${note.id}">${note.label} · ${note.title}</button>`
    )
    .join("");

  notePills.innerHTML =
    `<span class="pill-group-label">Lectures</span>${lecturePills}` +
    `<span class="pill-divider"></span>` +
    `<span class="pill-group-label">考前衝刺</span>${reviewPills}`;

  const lectureCards = lectures
    .map(
      (note) => `
        <article class="lecture-card${note.id === activeNoteId ? " active" : ""}" data-note-id="${note.id}">
          <h3>${note.label} ${note.title}</h3>
          <p>${note.subtitle}</p>
          <p>${note.date}</p>
        </article>
      `
    )
    .join("");

  const reviewCards = reviews
    .map(
      (note) => `
        <article class="lecture-card review-card${note.id === activeNoteId ? " active" : ""}" data-note-id="${note.id}">
          <h3>${note.label} ${note.title}</h3>
          <p>${note.subtitle}</p>
        </article>
      `
    )
    .join("");

  lectureList.innerHTML =
    `<p class="panel-sublabel">Lectures</p>${lectureCards}` +
    `<p class="panel-sublabel review-sublabel">考前衝刺總整理</p>${reviewCards}`;

  document.querySelectorAll("[data-note-id]").forEach((element) => {
    element.addEventListener("click", () => activateNote(element.dataset.noteId));
  });
}

function renderReaderMeta(note) {
  const category = isReview(note) ? "考前衝刺" : "分析化學";
  readerKicker.textContent = `${note.label} · ${category}`;
  readerTitle.textContent = note.title;
  readerSubtitle.textContent = `${note.subtitle} · ${note.date}`;
  sourceLink.href = githubBase + encodeGithubPath(note.path);
}

function buildToc() {
  const headings = [...noteBody.querySelectorAll("h2, h3")];

  if (!headings.length) {
    tocList.innerHTML = '<p class="muted">這份講義沒有可跳轉標題。</p>';
    return;
  }

  tocList.innerHTML = headings
    .map((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, "-");
      }

      const tag = heading.tagName.toLowerCase();
      const label = tag === "h3" ? `↳ ${heading.textContent}` : heading.textContent;
      return `<a class="toc-link" href="#${heading.id}">${label}</a>`;
    })
    .join("");
}

function postProcessNote() {
  noteBody.querySelectorAll("a").forEach((link) => {
    if (link.getAttribute("href")?.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
  });

  noteBody.querySelectorAll("table").forEach((table) => {
    if (table.parentElement?.classList.contains("table-wrap")) {
      return;
    }

    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });
}

function activateNote(noteId) {
  const note = getNoteById(noteId);
  activeNoteId = note.id;
  renderNavigation();
  renderReaderMeta(note);

  noteBody.innerHTML = '<p class="muted">載入講義中…</p>';
  tocList.innerHTML = '<p class="muted">整理章節中…</p>';

  try {
    const markdown = notesContent[note.id];
    if (!markdown) {
      throw new Error("找不到內嵌筆記資料");
    }
    const html = marked.parse(stripFrontmatter(markdown));
    noteBody.innerHTML = html;
    postProcessNote();
    buildToc();

    if (window.location.hash !== `#${note.id}`) {
      history.replaceState(null, "", `#${note.id}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    noteBody.innerHTML = `
      <p class="muted">這份講義目前載入失敗。</p>
      <p class="muted">錯誤訊息：${error.message}</p>
    `;
    tocList.innerHTML = '<p class="muted">暫時無法建立章節目錄。</p>';
  }
}

function boot() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  const initial = getNoteById(hash);
  activeNoteId = initial.id;
  renderNavigation();
  renderReaderMeta(initial);
  activateNote(initial.id);
}

boot();
