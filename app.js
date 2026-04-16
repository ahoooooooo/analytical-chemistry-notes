const notes = [
  {
    id: "l1",
    label: "L1",
    title: "光譜學基礎",
    subtitle: "Spectroscopy fundamentals and instrument overview",
    date: "2026-03-06",
    path: "01-Lecture-Notes/L1-光譜學基礎.md",
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
];

const notePills = document.querySelector("#note-pills");
const lectureList = document.querySelector("#lecture-list");
const tocList = document.querySelector("#toc-list");
const noteBody = document.querySelector("#note-body");
const readerKicker = document.querySelector("#reader-kicker");
const readerTitle = document.querySelector("#reader-title");
const readerSubtitle = document.querySelector("#reader-subtitle");
const sourceLink = document.querySelector("#source-link");

const githubBase = "https://github.com/ahoooooooo/analytical-chemistry-notes/blob/main/";

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

function renderNavigation() {
  notePills.innerHTML = notes
    .map(
      (note) =>
        `<button class="note-pill${note.id === activeNoteId ? " active" : ""}" data-note-id="${note.id}">${note.label} <span aria-hidden="true">·</span> ${note.title}</button>`
    )
    .join("");

  lectureList.innerHTML = notes
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

  document.querySelectorAll("[data-note-id]").forEach((element) => {
    element.addEventListener("click", () => activateNote(element.dataset.noteId));
  });
}

function renderReaderMeta(note) {
  readerKicker.textContent = `${note.label} · 分析化學`;
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
}

async function activateNote(noteId) {
  const note = getNoteById(noteId);
  activeNoteId = note.id;
  renderNavigation();
  renderReaderMeta(note);

  noteBody.innerHTML = '<p class="muted">載入講義中…</p>';
  tocList.innerHTML = '<p class="muted">整理章節中…</p>';

  try {
    const response = await fetch(note.path);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const markdown = await response.text();
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
