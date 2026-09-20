/* ============================================================
   Μουσαῖος · 韩金哲 · 个人主页
   script.js — i18n · 文档渲染 · 图志灯箱
   ============================================================ */

// ============================================================
// i18n 翻译
// ============================================================
const translations = {
    zh: {
        "siteTitle": "Μουσαῖος · 韩金哲 · 个人主页",
        "nav.home": "卷首",
        "nav.research": "研穷",
        "nav.writings": "文录",
        "nav.gallery": "图志",
        "nav.contact": "缄后",
        "home.eyebrow": "— Personalia —",
        "home.affil": "上海交通大学 · 外国语学院",
        "home.researchLabel": "— Studia —",
        "home.r1": "古希腊罗马文学",
        "home.r2": "德意志浪漫主义",
        "home.r3": "古希腊碑铭学",
        "home.cta": "展卷文录 ❧",
        "home.invocation": "「人是梦中之影。」",
        "research.title": "研穷三向",
        "research.subtitle": "— Tres Campi, Una Via —",
        "research.r1.title": "古希腊罗马文学",
        "research.r1.desc": "研读荷马、品达、索福克勒斯与维吉尔，探讨古典叙事中的英雄伦理与命运观。",
        "research.r2.title": "德意志浪漫主义",
        "research.r2.desc": "关注诺瓦利斯、施莱格尔、荷尔德林，追溯浪漫派对古典精神的回响与再造。",
        "research.r3.title": "古希腊碑铭学",
        "research.r3.desc": "辑录城邦碑铭，研读法律、丧葬与圣所题铭，从石上文字复原古代社会面貌。",
        "research.motto": "「读古人之书，思今日之事。」",
        "writings.title": "文录",
        "writings.subtitle": "— Scripta Varia —",
        "writings.toc1": "Ἄτακτα · 杂缀",
        "writings.toc2": "Σχόλια · 注疏",
        "writings.toc3": "Ἅπαν · 论一",
        "writings.toc4": "叙拉古信札",
        "gallery.title": "图志",
        "gallery.subtitle": "— Imagines —",
        "contact.title": "缄后",
        "contact.subtitle": "— Epistulae —",
        "contact.name": "名号",
        "contact.affil": "所隶",
        "contact.affilValue": "上海交通大学 · 外国语学院",
        "contact.field": "域",
        "contact.fieldValue": "古典学 · 德语文学",
        "contact.email": "鸿雁",
        "contact.colophon": "愿君安好。",
        "footer.rights": "版权所有",
        "footer.sub": "Schola Linguarum Extranearum · Universitas Jiao Tong Shanghaiensis"
    },
    en: {
        "siteTitle": "Μουσαῖος · Han Jinzhe · Personal Homepage",
        "nav.home": "Home",
        "nav.research": "Studies",
        "nav.writings": "Writings",
        "nav.gallery": "Gallery",
        "nav.contact": "Contact",
        "home.eyebrow": "— Personalia —",
        "home.affil": "School of Foreign Languages, Shanghai Jiao Tong University",
        "home.researchLabel": "— Studia —",
        "home.r1": "Greco-Roman Literature",
        "home.r2": "German Romanticism",
        "home.r3": "Greek Epigraphy",
        "home.cta": "Open the Writings ❧",
        "home.invocation": "\"Man is the dream of a shadow.\"",
        "research.title": "Three Fields of Study",
        "research.subtitle": "— Tres Campi, Una Via —",
        "research.r1.title": "Greco-Roman Literature",
        "research.r1.desc": "Reading Homer, Pindar, Sophocles and Virgil — on heroic ethics and fate in classical narrative.",
        "research.r2.title": "German Romanticism",
        "research.r2.desc": "Novalis, Schlegel, Hölderlin — the Romantic resonance with the classical spirit.",
        "research.r3.title": "Greek Epigraphy",
        "research.r3.desc": "Collecting polis inscriptions — legal, funerary and dedicatory — to reconstruct ancient society.",
        "research.motto": "\"Read the ancients, think of today.\"",
        "writings.title": "Writings",
        "writings.subtitle": "— Scripta Varia —",
        "writings.toc1": "Ἄτακτα · Miscellanies",
        "writings.toc2": "Σχόλια · Scholia",
        "writings.toc3": "Ἅπαν · On the One",
        "writings.toc4": "Syracusan Letters",
        "gallery.title": "Gallery",
        "gallery.subtitle": "— Imagines —",
        "contact.title": "Contact",
        "contact.subtitle": "— Epistulae —",
        "contact.name": "Name",
        "contact.affil": "Affiliation",
        "contact.affilValue": "School of Foreign Languages, Shanghai Jiao Tong University",
        "contact.field": "Field",
        "contact.fieldValue": "Classics · German Literature",
        "contact.email": "Correspondence",
        "contact.colophon": "May you fare well.",
        "footer.rights": "All rights reserved",
        "footer.sub": "Schola Linguarum Extranearum · Universitas Jiao Tong Shanghaiensis"
    },
    de: {
        "siteTitle": "Μουσαῖος · Han Jinzhe · Persönliche Homepage",
        "nav.home": "Start",
        "nav.research": "Studien",
        "nav.writings": "Schriften",
        "nav.gallery": "Galerie",
        "nav.contact": "Kontakt",
        "home.eyebrow": "— Personalia —",
        "home.affil": "Fakultät für Fremdsprachen, Shanghai Jiao Tong Universität",
        "home.researchLabel": "— Studia —",
        "home.r1": "Griechisch-römische Literatur",
        "home.r2": "Deutsche Romantik",
        "home.r3": "Griechische Epigraphik",
        "home.cta": "Schriften öffnen ❧",
        "home.invocation": "«Der Mensch ist der Traum eines Schattens.»",
        "research.title": "Drei Studienfelder",
        "research.subtitle": "— Tres Campi, Una Via —",
        "research.r1.title": "Griechisch-römische Literatur",
        "research.r1.desc": "Lektüre von Homer, Pindar, Sophokles und Vergil — zur heroischen Ethik und zum Schicksal.",
        "research.r2.title": "Deutsche Romantik",
        "research.r2.desc": "Novalis, Schlegel, Hölderlin — die romantische Resonanz mit dem klassischen Geist.",
        "research.r3.title": "Griechische Epigraphik",
        "research.r3.desc": "Sammlung von Polis-Inschriften — rechtliche, Grab- und Weiheinschriften — zur Rekonstruktion.",
        "research.motto": "«Die Alten lesen, das Heute bedenken.»",
        "writings.title": "Schriften",
        "writings.subtitle": "— Scripta Varia —",
        "writings.toc1": "Ἄτακτα · Vermischtes",
        "writings.toc2": "Σχόλια · Scholien",
        "writings.toc3": "Ἅπαν · Vom Einen",
        "writings.toc4": "Syrakusische Briefe",
        "gallery.title": "Galerie",
        "gallery.subtitle": "— Imagines —",
        "contact.title": "Kontakt",
        "contact.subtitle": "— Epistulae —",
        "contact.name": "Name",
        "contact.affil": "Einrichtung",
        "contact.affilValue": "Fakultät für Fremdsprachen, Shanghai Jiao Tong Universität",
        "contact.field": "Bereich",
        "contact.fieldValue": "Altertumswissenschaft · Deutsche Literatur",
        "contact.email": "Korrespondenz",
        "contact.colophon": "Wohlauf zu leben.",
        "footer.rights": "Alle Rechte vorbehalten",
        "footer.sub": "Schola Linguarum Extranearum · Universitas Jiao Tong Shanghaiensis"
    }
};

// ============================================================
// 文档元数据（全文通过 fetch 从 texts/ 加载）
// ============================================================
const documents = {
    atakta: {
        titleGreek: "Ἄτακτα",
        titleCn: "杂缀",
        meta: "Ὕμνοι · Λυρικά · Γνῶμαι",
        file: "texts/doc1.txt",
        type: "prose"
    },
    scholia: {
        titleGreek: "Σχόλια εἰς Ἡσιόδου Θεογονίαν",
        titleCn: "赫西俄德《神谱》注疏",
        meta: "Scholia in Hesiodi Theogoniam",
        file: "texts/doc2.txt",
        type: "prose"
    },
    hapanta: {
        titleGreek: "Ἅπαν",
        titleCn: "论「一」与诸神",
        meta: "Περὶ τοῦ Ἑνὸς καὶ Θεῶν",
        file: "texts/doc3.txt",
        type: "prose"
    },
    syracusan: {
        titleGreek: "Ἐπιστολαὶ Συρακοῦσαι",
        titleCn: "叙拉古信札",
        meta: "Epistulae Syracusanae · Litterae CXLXXII",
        file: "texts/doc4.txt",
        type: "letters"
    }
};

// ============================================================
// 图志图片
// ============================================================
const galleryImages = [
    { file: "微信图片_20260920104923_168_2.jpg", caption: "Εἰκὼν α΄", tall: true },
    { file: "微信图片_20260920104924_169_2.jpg", caption: "Εἰκὼν β΄" },
    { file: "微信图片_20260920104925_170_2.jpg", caption: "Εἰκὼν γ΄" },
    { file: "微信图片_20260920104925_171_2.jpg", caption: "Εἰκὼν δ΄" },
    { file: "微信图片_20260920104926_172_2.jpg", caption: "Εἰκὼν ε΄" },
    { file: "微信图片_20260920104928_174_2.jpg", caption: "Εἰκὼν ς΄", tall: true },
    { file: "微信图片_20260920105212_175_2.jpg", caption: "Εἰκὼν ζ΄" },
    { file: "微信图片_20260920105213_176_2.jpg", caption: "Εἰκὼν η΄" },
    { file: "微信图片_20260920105213_177_2.jpg", caption: "Εἰκὼν θ΄" },
    { file: "微信图片_20260920105214_178_2.jpg", caption: "Εἰκὼν ι΄", wide: true },
    { file: "微信图片_20260920105215_179_2.jpg", caption: "Εἰκὼν ια΄" },
    { file: "微信图片_20260920105216_180_2.jpg", caption: "Εἰκὼν ιβ΄" },
    { file: "微信图片_20260920105217_181_2.jpg", caption: "Εἰκὼν ιγ΄" },
    { file: "微信图片_20260920105218_182_2.jpg", caption: "Εἰκὼν ιδ΄", tall: true },
    { file: "微信图片_20260920105218_183_2.jpg", caption: "Εἰκὼν ιε΄" },
    { file: "微信图片_20260920105220_184_2.jpg", caption: "Εἰκὼν ις΄" },
    { file: "微信图片_20260920105223_185_2.jpg", caption: "Εἰκὼν ιζ΄" },
    { file: "微信图片_20260920105227_186_2.jpg", caption: "Εἰκὼν ιη΄", wide: true },
    { file: "微信图片_20260920105233_187_2.jpg", caption: "Εἰκὼν ιθ΄" },
    { file: "微信图片_20260920105235_188_2.jpg", caption: "Εἰκὼν κ΄", tall: true }
];

// ============================================================
// 状态
// ============================================================
let currentLang = "zh";
let currentPage = "home";
let currentDoc = "atakta";
const docCache = {}; // 缓存已加载的文本

// ============================================================
// 叙拉古信札 · 禁忌信件锁定清单
// （仅信件编号，密码与口令均不在 UI 中明文展示）
// ============================================================
const LOCKED_LETTERS = new Set([
    6, 14, 16, 22, 23, 24, 25, 29, 31, 34, 37, 39,
    41, 42, 43, 44, 47, 48, 49, 50, 51, 52, 53, 54,
    55, 56, 57, 58, 59, 60, 63, 64, 66, 71, 81, 84, 85
]);
// 解锁口令与密码均以字符码数组存储，避免在源码中明文出现
// 口令 = "我爱着韩金哲"
const LOCK_PASSPHRASE = [25105,29233,30528,38889,37329,21746];
// 密码 = "0756"
const LOCK_PIN = [48,55,53,54];
// 已解锁信件（运行期记忆；刷新即失效）
const unlockedLetters = new Set();

// ============================================================
// 应用翻译
// ============================================================
function applyTranslations(lang){
    const dict = translations[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
        const key = el.getAttribute("data-i18n");
        if(dict[key] !== undefined){
            el.textContent = dict[key];
        }
    });
    document.title = dict["siteTitle"] || "Μουσαῖος · 韩金哲";
}

// ============================================================
// 切换语言
// ============================================================
function switchLanguage(lang){
    if(!translations[lang]) return;
    currentLang = lang;
    try { localStorage.setItem("musaios_lang", lang); } catch(e){}
    applyTranslations(lang);
    document.querySelectorAll(".lang-btn").forEach(btn=>{
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    renderDocument(currentDoc);
}

// ============================================================
// 切换页面
// ============================================================
function switchPage(page){
    if(!page) page = "home";
    currentPage = page;
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.toggle("active", p.id === "page-" + page);
    });
    document.querySelectorAll(".nav-link").forEach(link=>{
        link.classList.toggle("active", link.dataset.page === page);
    });
    window.scrollTo({top:0, behavior:"smooth"});
    try { history.replaceState(null, "", "#" + page); } catch(e){}
}

// ============================================================
// 加载文档全文（fetch + 缓存）
// ============================================================
async function loadDocumentText(docKey){
    if(docCache[docKey]) return docCache[docKey];
    const doc = documents[docKey];
    if(!doc) return null;
    // 1) 内联数据优先（支持 file:// 协议直接打开）
    // texts-data.js 的键与 documents 的键不同，需要映射
    const fileKeyToDocKey = {
        "texts/doc1.txt": "doc1",
        "texts/doc2.txt": "doc2",
        "texts/doc3.txt": "doc3",
        "texts/doc4.txt": "doc4"
    };
    const inlineKey = fileKeyToDocKey[doc.file] || docKey;
    try{
        if(typeof window !== "undefined" && window.TEXTS_DATA && window.TEXTS_DATA[inlineKey]){
            const text = window.TEXTS_DATA[inlineKey];
            docCache[docKey] = text;
            return text;
        }
    }catch(_){}
    // 2) 回退到 fetch（HTTP 服务器环境）
    try{
        const resp = await fetch(doc.file);
        if(!resp.ok) throw new Error("HTTP " + resp.status);
        const text = await resp.text();
        docCache[docKey] = text;
        return text;
    }catch(err){
        return "[文本加载失败 · 请通过本地 HTTP 服务器打开本页，或确认 texts-data.js 已加载]\n[Failed to load text. Please serve via a local HTTP server, or ensure texts-data.js is loaded.]";
    }
}

// ============================================================
// 解析文本为段落数组
// ============================================================
function parseParagraphs(text){
    return text.split(/\n\s*\n/)
        .map(p => p.replace(/^\s+|\s+$/g, ""))
        .filter(p => p.length > 0);
}

// ============================================================
// 解析信札（叙拉古信札专用：识别编号分信）
// ============================================================
function parseLetters(text){
    const lines = text.split(/\n/);
    const letters = [];
    let current = null;
    let buffer = [];

    const flushBuffer = ()=>{
        if(current && buffer.length){
            current.paragraphs = buffer.join("\n")
                .split(/\n/)
                .map(p=>p.trim())
                .filter(p=>p.length>0);
            letters.push(current);
        }
        buffer = [];
    };

    for(let i=0; i<lines.length; i++){
        const line = lines[i].trim();
        // 检测信编号行（纯数字，如 01, 02, ..., 92）
        if(/^\d{1,3}$/.test(line)){
            flushBuffer();
            current = { number: line, title: "", paragraphs: [] };
            // 下一行可能为标题/称呼
            const nextLine = (lines[i+1]||"").trim();
            if(nextLine && !/^\d{1,3}$/.test(nextLine)){
                current.title = nextLine;
                i++;
            }
            continue;
        }
        if(current){
            buffer.push(lines[i]);
        }else{
            // 编号前的文本（如文件标题/说明）
            if(line) buffer.push(lines[i]);
        }
    }
    flushBuffer();
    return letters;
}

// ============================================================
// 判断段落是否主要为希腊文
// ============================================================
function isGreekParagraph(p){
    const greekCount = (p.match(/[\u0370-\u03FF\u1F00-\u1FFF]/g) || []).length;
    const cnCount = (p.match(/[\u4e00-\u9fff]/g) || []).length;
    return greekCount > cnCount * 2;
}

// ============================================================
// 在文本中插入图片（图嵌文中）
// ============================================================
function buildImageFigure(imgIndex){
    const img = galleryImages[imgIndex % galleryImages.length];
    return `<figure class="doc-inline-figure">
        <img src="${encodeURI(img.file)}" alt="${img.caption}" loading="lazy">
        <figcaption>${img.caption}</figcaption>
    </figure>`;
}

// ============================================================
// 渲染文档（异步 · fetch 全文 · 图嵌文中）
// ============================================================
async function renderDocument(docKey){
    const doc = documents[docKey];
    if(!doc) return;
    const display = document.getElementById("writing-display");
    if(!display) return;

    // 先显示标题 + 加载提示
    let html = "";
    html += `<div class="doc-header">`;
    html += `<div class="doc-title-greek">${doc.titleGreek}</div>`;
    html += `<div class="doc-title-cn">${doc.titleCn}</div>`;
    html += `<div class="doc-meta">${doc.meta}</div>`;
    html += `</div>`;
    html += `<div class="doc-loading">⟡ 正在展开卷轴 · Volume aperire…</div>`;
    display.innerHTML = html;

    // 加载全文
    const text = await loadDocumentText(docKey);
    if(text === null){
        display.innerHTML += `<p class="doc-error">文本加载失败。</p>`;
        return;
    }

    html = "";
    html += `<div class="doc-header">`;
    html += `<div class="doc-title-greek">${doc.titleGreek}</div>`;
    html += `<div class="doc-title-cn">${doc.titleCn}</div>`;
    html += `<div class="doc-meta">${doc.meta}</div>`;
    html += `</div>`;

    if(doc.type === "letters"){
        // 信札模式
        const letters = parseLetters(text);
        let imgCounter = 0;
        const IMG_INTERVAL = 4; // 每4封信插一张图
        letters.forEach((letter, idx)=>{
            const num = letter.number ? parseInt(letter.number, 10) : NaN;
            const isLocked = !isNaN(num) && LOCKED_LETTERS.has(num) && !unlockedLetters.has(num);
            html += `<div class="doc-section doc-letter${isLocked ? " doc-letter-locked" : ""}"${isLocked ? ` data-letter-num="${num}"` : ""}>`;
            if(letter.number){
                html += `<div class="doc-letter-num">Ἐπιστολὴ ${letter.number}</div>`;
            }
            if(letter.title){
                html += `<div class="doc-letter-title">${letter.title}</div>`;
            }
            if(isLocked){
                // 禁忌信件：仅显示锁界面，不渲染正文
                html += `<div class="doc-letter-lock">`;
                html += `<div class="lock-seal">⛓</div>`;
                html += `<p class="lock-hint">此札含禁忌之辞，须先验明身份方可展读。</p>`;
                html += `<button class="lock-btn" data-unlock="${num}">解开封缄</button>`;
                html += `</div>`;
            }else{
                if(letter.paragraphs && letter.paragraphs.length){
                    letter.paragraphs.forEach(p=>{
                        if(isGreekParagraph(p)){
                            html += `<p class="doc-paragraph-greek">${escapeHtml(p)}</p>`;
                        }else{
                            html += `<p class="doc-paragraph">${escapeHtml(p)}</p>`;
                        }
                    });
                }
            }
            html += `</div>`;
            // 每隔若干封信插入一张图
            if((idx+1) % IMG_INTERVAL === 0 && idx < letters.length - 1){
                html += buildImageFigure(imgCounter);
                imgCounter++;
            }
        });
    }else{
        // 散文模式
        const paragraphs = parseParagraphs(text);
        const IMG_INTERVAL = 16; // 每16段插一张图
        let imgCounter = 0;
        paragraphs.forEach((p, i)=>{
            if(isGreekParagraph(p)){
                html += `<p class="doc-paragraph-greek">${escapeHtml(p)}</p>`;
            }else{
                html += `<p class="doc-paragraph">${escapeHtml(p)}</p>`;
            }
            if((i+1) % IMG_INTERVAL === 0 && i < paragraphs.length - 1){
                html += buildImageFigure(imgCounter);
                imgCounter++;
            }
        });
    }

    // 卷末
    html += `<div class="doc-end-mark">❦</div>`;

    display.innerHTML = html;
    display.style.animation = "none";
    display.offsetHeight;
    display.style.animation = "unroll .5s ease";
}

// ============================================================
// HTML 转义（防止文本中的 < > 引起渲染问题）
// ============================================================
function escapeHtml(str){
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

// ============================================================
// 禁忌信件 · 双重验证（口令 + 密码）
// 口令与密码均以字符码数组存储，运行期方可拼接比对
// ============================================================
function decodeCodeArr(arr){
    return String.fromCharCode.apply(null, arr);
}

function attemptUnlockLetter(num){
    // 1) 询问性别（实为口令验证）
    const ans = window.prompt("您的性别？");
    if(ans === null) return; // 用户取消
    const trimmed = String(ans).trim();
    if(trimmed === "男" || trimmed === "女"){
        window.alert("理解错误");
        return;
    }
    if(trimmed !== decodeCodeArr(LOCK_PASSPHRASE)){
        window.alert("理解错误");
        return;
    }
    // 2) 进入密码验证
    const pin = window.prompt("请输入密码：");
    if(pin === null) return;
    if(String(pin).trim() !== decodeCodeArr(LOCK_PIN)){
        window.alert("密码错误，封缄未启。");
        return;
    }
    // 验证通过，记录解锁状态并重渲染
    unlockedLetters.add(num);
    renderDocument(currentDoc);
}

// ============================================================
// 渲染图志
// ============================================================
function renderGallery(){
    const grid = document.getElementById("gallery-grid");
    if(!grid) return;
    let html = "";
    galleryImages.forEach((img, i)=>{
        const classes = ["gallery-item"];
        if(img.tall) classes.push("tall");
        if(img.wide) classes.push("wide");
        const num = String(i+1).padStart(2, "0");
        html += `<figure class="${classes.join(" ")}" data-img="${img.file}">`;
        html += `<span class="gallery-num">№ ${num}</span>`;
        html += `<img src="${encodeURI(img.file)}" alt="${img.caption}" loading="lazy">`;
        html += `<figcaption class="gallery-caption">${img.caption}</figcaption>`;
        html += `</figure>`;
    });
    grid.innerHTML = html;

    grid.querySelectorAll(".gallery-item").forEach(item=>{
        item.addEventListener("click", ()=>{
            openLightbox(item.dataset.img);
        });
    });
}

// ============================================================
// 灯箱
// ============================================================
function openLightbox(filename){
    let lb = document.querySelector(".lightbox");
    if(!lb){
        lb = document.createElement("div");
        lb.className = "lightbox";
        lb.innerHTML = `
            <button class="lightbox-close" aria-label="Close">✕</button>
            <img class="lightbox-img" alt="">
        `;
        document.body.appendChild(lb);
        lb.querySelector(".lightbox-close").addEventListener("click", ()=> closeLightbox());
        lb.addEventListener("click", (e)=>{
            if(e.target === lb) closeLightbox();
        });
        document.addEventListener("keydown", (e)=>{
            if(e.key === "Escape") closeLightbox();
        });
    }
    lb.querySelector(".lightbox-img").src = encodeURI(filename);
    lb.classList.add("active");
    document.body.style.overflow = "hidden";
}
function closeLightbox(){
    const lb = document.querySelector(".lightbox");
    if(lb){
        lb.classList.remove("active");
        document.body.style.overflow = "";
    }
}

// ============================================================
// 初始化
// ============================================================
document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll(".lang-btn").forEach(btn=>{
        btn.addEventListener("click", ()=> switchLanguage(btn.dataset.lang));
    });

    document.querySelectorAll("[data-page]").forEach(el=>{
        el.addEventListener("click", (e)=>{
            e.preventDefault();
            switchPage(el.dataset.page);
        });
    });

    document.querySelectorAll(".toc-tab").forEach(tab=>{
        tab.addEventListener("click", ()=>{
            const docKey = tab.dataset.doc;
            currentDoc = docKey;
            document.querySelectorAll(".toc-tab").forEach(t=> t.classList.toggle("active", t === tab));
            renderDocument(docKey);
        });
    });

    // 禁忌信件解锁按钮 · 事件委托（renderDocument 后动态注入）
    const writingDisplay = document.getElementById("writing-display");
    if(writingDisplay){
        writingDisplay.addEventListener("click", (e)=>{
            const btn = e.target.closest(".lock-btn");
            if(!btn) return;
            const num = parseInt(btn.getAttribute("data-unlock"), 10);
            if(isNaN(num)) return;
            attemptUnlockLetter(num);
        });
    }

    renderDocument(currentDoc);
    renderGallery();

    let savedLang = "zh";
    try { savedLang = localStorage.getItem("musaios_lang") || "zh"; } catch(e){}
    switchLanguage(savedLang);

    const hashPage = (location.hash || "#home").replace("#","");
    switchPage(hashPage);
});
