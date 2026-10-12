/* ===== Peepal Cafe & Kitchen – script.js ===== */

/* ---------- SETTINGS (yahan apni details badal sakte ho) ---------- */
const WHATSAPP_NUMBER = "919928110359"; // country code 91 + number (bina + ke)
const CAFE_NAME = "Peepal Cafe & Kitchen";
const LOGO_FILE = "images/logo.jpg";    // logo ki file (images folder me)
const OPEN_MIN = 11 * 60;               // 11:00 AM
const LAST_BOOKING_MIN = 22 * 60 + 30;  // 10:30 PM (last booking time)
const ADVANCE_MIN = 30;                 // aaj ke liye kam se kam 30 min aage ka time

/* ---------- PHOTOS ----------
   Jin photos me [ "images/...", "photo-..." ] likha hai:
   - pehla naam = aapki asli photo (images folder me)
   - dusra = internet wali dummy photo
   Site pehle asli photo dhundti hai. Wo images folder me na mile to dummy dikhti hai. */
const IMG = {
  /* cafe / ambience */
  hero:    ["images/hero.jpg",    "photo-1559925393-8be0ec4767c8"],
  about1:  "photo-1445116572660-236099ec97a0",
  about2:  "photo-1495474472287-4d71bcdd2085",
  booking: ["images/booking.jpg", "photo-1521017432531-fbd92d768814"],
  g1: ["images/gallery-1.jpg", "photo-1517248135467-4c7edcad34c4"],
  g2: ["images/gallery-2.jpg", "photo-1509042239860-f550ce710b93"],
  g3: ["images/gallery-3.jpg", "photo-1781332143834-19a40f746cd9"],
  g4: ["images/gallery-4.jpg", "photo-1554118811-1e0d58224f24"],
  g5: ["images/gallery-5.jpg", "photo-1555396273-367ea4eb4db5"],

  /* starters / tandoori */
  grill:    "photo-1781332143834-19a40f746cd9",
  skewers:  "photo-1788843304145-bec146aa83c5",
  skewers2: "photo-1788843303849-40b7eea25824",
  plate:    "photo-1666001120694-3ebe8fd207be",

  /* chinese-style starters */
  springRoll:  "photo-1515022376298-7333f33e704b",
  crispySnack: "photo-1623253083987-26681ce4a992",
  snackPlate:  "photo-1695712641388-87c0f9c2d36e",
  snackPlate2: "photo-1695712641569-05eee7b37b6d",
  sizzler:     "photo-1781332143834-19a40f746cd9",

  /* paneer / curries */
  thali:    "photo-1567188040759-fb8a883dc6d8",
  curry1:   "photo-1631452180519-c014fe946bc7",
  curry2:   "photo-1603894584373-5ac82b2ae398",
  curry3:   "photo-1567529854338-fc097b962123",
  paneerNaan: "photo-1781332146569-9c5093bc2ca5",
  dal:      "photo-1596797038530-2c107229654b",

  /* italian & pizza */
  pizza1: "photo-1513104890138-7c749659a591",
  pizza2: "photo-1565299624946-b28f40a0ae38",
  pizza3: "photo-1574071318508-1cdbab80d002",
  pizza4: "photo-1604382354936-07c5d9983bd3",
  pasta:  "photo-1621996346565-e3dbc646d9a9",

  /* chinese & rice */
  noodles:   "photo-1569718212165-3a8278d5f624",
  friedRice: "photo-1512058564366-18510be2db19",
  biryani:   "photo-1563379091339-03b21ab4a4f8",

  /* drinks & desserts */
  coldCoffee: "photo-1517701604599-bb29b565090c",
  mojito:     "photo-1551538827-9c037cb4f32a",
  brownie:    "photo-1606313564200-e75d5e30476c",
  shake:      "photo-1572490122747-3968b75cc699"
};

/* ---------- MENU DATA : [naam, price, tag, photo-key] ---------- */
const MENU = {
  "Starters": { icon: "🍢", items: [
    ["Tandoori Platter", 409, "Chef's pick", "grill"],
    ["Paneer Tikka", 289, "", "skewers"],
    ["Hariyali Paneer Tikka", 289, "", "skewers2"],
    ["Lahsuni Paneer Tikka", 289, "", "skewers"],
    ["Dahi Ke Kebab", 279, "", "grill"],
    ["Paneer Chilly Dry/Gravy", 279, "", "skewers2"],
    ["Cheese Chilly Kebab", 269, "", "plate"],
    ["Spring Roll", 259, "", "springRoll"],
    ["Hara Bhara Kebab", 249, "", "plate"],
    ["Veg Manchurian Dry/Gravy", 239, "", "snackPlate2"],
    ["Dragon Potato", 229, "", "crispySnack"],
    ["Corn Fritters", 229, "", "snackPlate"]
  ]},
  "Paneer Special": { icon: "🧀", items: [
    ["Peepal Special (Three in One)", 389, "Signature", "thali"],
    ["Peepal Pasanda", 389, "", "curry2"],
    ["Paneer Toofani", 329, "", "curry3"],
    ["Paneer Angara", 329, "", "curry1"],
    ["Paneer Tikka Masala", 299, "", "paneerNaan"],
    ["Cheese Butter Masala", 299, "", "curry3"],
    ["Paneer Lababdar", 279, "", "curry2"],
    ["Paneer Butter Masala", 279, "", "curry1"]
  ]},
  "Italian & Pizza": { icon: "🍕", items: [
    ["Penne Pasta (Red/White/Pink)", 299, "", "pasta"],
    ["Peepal Classic Pizza", 299, "Bestseller", "pizza1"],
    ["Paneer Tandoori Pizza", 299, "", "pizza2"],
    ["Exotica Pizza", 259, "", "pizza4"],
    ["Margherita Pizza", 239, "", "pizza3"]
  ]},
  "Kofta & Marwari": { icon: "🍛", items: [
    ["Malai Kofta", 309, "", "curry2"],
    ["Kaju Curry", 309, "", "curry3"],
    ["Gulab Jamun Sabzi", 309, "Marwari", "curry1"],
    ["Sev Tamatar", 219, "", "curry3"]
  ]},
  "Chinese & Sizzlers": { icon: "🍜", items: [
    ["Hakka Noodles", 199, "", "noodles"],
    ["Veg Fried Rice", 199, "", "friedRice"],
    ["Chinese Sizzler", 399, "Sizzling", "sizzler"]
  ]},
  "Dal & Rice": { icon: "🍚", items: [
    ["Dal Makhani", 279, "", "dal"],
    ["Hyderabadi Biryani", 279, "", "biryani"]
  ]},
  "Coffees & Mocktails": { icon: "☕", items: [
    ["Classic Cold Coffee", 149, "", "coldCoffee"],
    ["Blue Lagoon Mocktail", 159, "", "mojito"],
    ["Mint Mojito", 159, "", "mojito"]
  ]},
  "Desserts & Shakes": { icon: "🍫", items: [
    ["Sizzling Brownie With Ice Cream", 179, "Must try", "brownie"],
    ["Kit Kat Shake", 169, "", "shake"]
  ]}
};

/* ---------- GALLERY DATA (photo-key IMG me hai: g1 ... g5) ---------- */
const GALLERY = [
  { key: "g1", cap: "Indoor Dining",      emoji: "🛋️" },
  { key: "g2", cap: "Courtyard at Night", emoji: "✨" },
  { key: "g3", cap: "Outdoor Seating",    emoji: "☀️" },
  { key: "g4", cap: "Cosy Lounge",        emoji: "🌿" },
  { key: "g5", cap: "Arched Walkway",     emoji: "🌿" }
];

/* ---------- Helpers ---------- */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const pad = (n) => String(n).padStart(2, "0");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Photo ka chhota (fast) link banata hai: w = width, h = height */
function imgUrl(v, w, h) {
  if (!v) return "";
  if (/^photo-/.test(v)) v = "https://images.unsplash.com/" + v;
  if (/^https?:\/\/images\.unsplash\.com\//.test(v)) {
    try {
      const u = new URL(v);
      ["w", "h", "fit", "q", "auto", "fm", "ixid", "ixlib"].forEach((k) => u.searchParams.delete(k));
      u.searchParams.set("auto", "format");
      u.searchParams.set("fit", "crop");
      u.searchParams.set("q", "65");
      u.searchParams.set("w", String(w || 600));
      if (h) u.searchParams.set("h", String(h));
      return u.toString();
    } catch (e) { return v; }
  }
  return v; // koi aur link / local file (images/xyz.jpg) jaisa hai waisa
}

/* ---------- Photo loader: asli photo -> dummy photo -> emoji/icon ---------- */
function initPhotos(root = document) {
  root.querySelectorAll(".ph[data-img]").forEach((box) => {
    if (box.dataset.ready) return;
    box.dataset.ready = "1";

    const emoji = document.createElement("span");
    emoji.className = "ph-emoji";
    emoji.textContent = box.dataset.emoji || "🍽️";
    box.appendChild(emoji);

    const raw = IMG[box.dataset.img];
    if (!raw) return; // is dish ki photo nahi -> sirf icon

    const w = +box.dataset.w || 600;
    const h = +box.dataset.h || 0;
    const list = (Array.isArray(raw) ? raw : [raw]).map((v) => imgUrl(v, w, h));

    const img = document.createElement("img");
    img.className = "ph-img";
    img.alt = box.dataset.alt || CAFE_NAME;
    img.decoding = "async";
    img.loading = box.dataset.eager ? "eager" : "lazy";

    let i = 0;
    img.addEventListener("load", () => { img.classList.add("loaded"); box.classList.add("has-img"); });
    img.addEventListener("error", () => {
      i++;
      if (i < list.length) img.src = list[i]; // asli photo na mili -> dummy
      else img.remove();                      // kuch nahi mila -> icon dikhega
    });
    img.src = list[0];
    box.appendChild(img);
  });
}

/* ---------- Logo: navbar + footer (logo na mile to leaf icon rehta hai) ---------- */
function initLogos() {
  const probe = new Image();
  probe.onload = () => {
    $$(".logo-icon").forEach((box) => {
      const img = document.createElement("img");
      img.src = LOGO_FILE;
      img.alt = CAFE_NAME + " logo";
      box.appendChild(img);
      box.classList.add("has-logo");
    });
  };
  probe.src = LOGO_FILE;
}

/* ---------- Scroll lock (menu / popup / lightbox open ho to) ---------- */
function updateScrollLock() {
  const open = navLinks.classList.contains("open") || !$("#modal").hidden || !$("#lightbox").hidden;
  document.body.classList.toggle("no-scroll", open);
}

/* ---------- Year ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- Navbar ---------- */
const navbar = $("#navbar");
const hamburger = $("#hamburger");
const navLinks = $("#navLinks");

function closeNav() {
  hamburger.classList.remove("open");
  navLinks.classList.remove("open");
  updateScrollLock();
}
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
  updateScrollLock();
});
$$("#navLinks a").forEach((a) => a.addEventListener("click", closeNav));

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
$$(".reveal").forEach((el) => io.observe(el));

/* ---------- Counter animation ---------- */
const counter = $("[data-count]");
if (counter) {
  const target = +counter.dataset.count;
  let n = 0;
  const step = Math.ceil(target / 60);
  const t = setInterval(() => {
    n = Math.min(n + step, target);
    counter.textContent = n;
    if (n >= target) clearInterval(t);
  }, 22);
}

/* ---------- MENU ---------- */
const tabsEl = $("#menuTabs");
const gridEl = $("#menuGrid");
const searchEl = $("#menuSearch");
const noResult = $("#noResult");
let activeTab = "All";

function renderTabs() {
  const names = ["All", ...Object.keys(MENU)];
  tabsEl.innerHTML = names
    .map((n) => `<button class="tab ${n === activeTab ? "active" : ""}" data-tab="${esc(n)}">${esc(n)}</button>`)
    .join("");
}
tabsEl.addEventListener("click", (e) => {
  const b = e.target.closest(".tab");
  if (!b) return;
  activeTab = b.dataset.tab;
  tabsEl.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t === b));
  b.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  renderMenu();
});

function renderMenu() {
  const q = searchEl.value.trim().toLowerCase();
  let html = "";
  let count = 0;

  Object.entries(MENU).forEach(([cat, data]) => {
    if (activeTab !== "All" && activeTab !== cat) return;

    data.items.forEach(([name, price, tag, key], i) => {
      if (q && !name.toLowerCase().includes(q) && !cat.toLowerCase().includes(q)) return;
      count++;
      html += `
        <div class="menu-item" style="animation-delay:${Math.min(i * 40, 400)}ms">
          <div class="menu-thumb ph" data-img="${esc(key || "")}" data-w="120" data-h="120" data-emoji="${data.icon}" data-alt="${esc(name)}"></div>
          <div class="menu-info">
            <h4>${esc(name)} ${tag ? `<span class="tag">${esc(tag)}</span>` : ""}</h4>
            <small>${esc(cat)}</small>
          </div>
          <div class="menu-price">₹${price}</div>
        </div>`;
    });
  });

  gridEl.innerHTML = html;
  noResult.hidden = count > 0;
  initPhotos(gridEl);
}
searchEl.addEventListener("input", renderMenu);
renderTabs();
renderMenu();

/* ---------- GALLERY + LIGHTBOX ---------- */
const galleryEl = $("#galleryGrid");
galleryEl.innerHTML = GALLERY.map((g, i) => `
  <figure class="gallery-item" data-key="${g.key}" style="animation-delay:${i * 80}ms">
    <div class="ph" data-img="${g.key}" data-w="900" data-h="675" data-emoji="${g.emoji}" data-alt="${esc(g.cap)}"></div>
    <figcaption>${esc(g.cap)}</figcaption>
  </figure>`).join("");
initPhotos(galleryEl);

const lightbox = $("#lightbox");
function closeLightbox() { lightbox.hidden = true; updateScrollLock(); }
galleryEl.addEventListener("click", (e) => {
  const fig = e.target.closest(".gallery-item");
  if (!fig) return;
  const small = fig.querySelector(".ph-img.loaded");
  if (!small) return; // photo abhi nahi khuli to kuch nahi khulega
  $("#lbImg").src = imgUrl(small.currentSrc || small.src, 1400, 0);
  $("#lbImg").alt = small.alt;
  $("#lbCap").textContent = fig.querySelector("figcaption").textContent;
  lightbox.hidden = false;
  updateScrollLock();
});
$("#lbClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

/* ---------- Baaki photo slots (hero, about, booking, specials) + logo ---------- */
initPhotos(document);
initLogos();

/* ---------- Opening hours (aaj ka din highlight) ---------- */
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const todayIdx = new Date().getDay();
$("#hoursList").innerHTML = [1, 2, 3, 4, 5, 6, 0]
  .map((d) => `<li class="${d === todayIdx ? "today" : ""}"><span>${days[d]}</span><span>11:00 AM – 11:00 PM</span></li>`)
  .join("");

/* ---------- BOOKING ---------- */
const form = $("#bookingForm");
const dateEl = $("#date");
const guestsEl = $("#guests");
const quickEl = $("#quickTime");
const hourEl = $("#hour");
const minEl = $("#minute");

function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function niceDate(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}
function fmtTime(h24, m) {
  const ap = h24 >= 12 ? "PM" : "AM";
  const hh = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${hh}:${pad(m)} ${ap}`;
}
const to24 = (h12, ap) => (h12 % 12) + (ap === "PM" ? 12 : 0);
const getAmPm = () => document.querySelector('input[name="ampm"]:checked').value;

dateEl.min = getTodayStr();
dateEl.value = getTodayStr();

/* Quick slots: har 30 min (11:00 AM – 10:30 PM) */
function buildQuickSlots() {
  const isToday = dateEl.value === getTodayStr();
  const n = new Date();
  const minAllowed = n.getHours() * 60 + n.getMinutes() + ADVANCE_MIN;
  let opts = `<option value="">⚡ Quick pick (every 30 min)</option>`;
  let count = 0;
  for (let t = OPEN_MIN; t <= LAST_BOOKING_MIN; t += 30) {
    if (isToday && t < minAllowed) continue;
    count++;
    opts += `<option value="${t}">${fmtTime(Math.floor(t / 60), t % 60)}</option>`;
  }
  if (!count) opts = `<option value="">No slots left today – please pick another date</option>`;
  quickEl.innerHTML = opts;
}
buildQuickSlots();

/* Custom time -> total minutes (valid na ho to null) */
function getCustomMinutes() {
  const hRaw = hourEl.value.trim();
  const mRaw = minEl.value.trim();
  if (hRaw === "") return null;
  const h = parseInt(hRaw, 10);
  const m = mRaw === "" ? 0 : parseInt(mRaw, 10); // minute khali ho to :00
  if (isNaN(h) || isNaN(m) || h < 1 || h > 12 || m < 0 || m > 59) return null;
  return to24(h, getAmPm()) * 60 + m;
}

/* Custom time badalne par dropdown sync karo */
function syncQuick() {
  const t = getCustomMinutes();
  const has = t !== null && Array.from(quickEl.options).some((o) => o.value === String(t));
  quickEl.value = has ? String(t) : "";
}

/* Quick option chuna -> HH:MM AM/PM boxes bhar do */
quickEl.addEventListener("change", () => {
  if (!quickEl.value) return;
  const t = +quickEl.value;
  const h24 = Math.floor(t / 60);
  hourEl.value = h24 % 12 === 0 ? 12 : h24 % 12;
  minEl.value = pad(t % 60);
  document.querySelector(`input[name="ampm"][value="${h24 >= 12 ? "PM" : "AM"}"]`).checked = true;
  $("#timeField").classList.remove("invalid");
});

/* Sirf number allow + auto jump */
hourEl.addEventListener("input", () => {
  hourEl.value = hourEl.value.replace(/\D/g, "").slice(0, 2);
  syncQuick();
  $("#timeField").classList.remove("invalid");
  const v = hourEl.value;
  if (v.length === 2 || (v.length === 1 && +v > 1)) { minEl.focus(); minEl.select(); }
});
minEl.addEventListener("input", () => {
  minEl.value = minEl.value.replace(/\D/g, "").slice(0, 2);
  syncQuick();
  $("#timeField").classList.remove("invalid");
});
minEl.addEventListener("blur", () => {
  if (minEl.value.length === 1) minEl.value = pad(minEl.value);
  if (minEl.value === "" && hourEl.value !== "") minEl.value = "00";
  syncQuick();
});
$$('input[name="ampm"]').forEach((r) =>
  r.addEventListener("change", () => { syncQuick(); $("#timeField").classList.remove("invalid"); })
);

dateEl.addEventListener("change", () => {
  buildQuickSlots();
  syncQuick();
  $("#timeField").classList.remove("invalid");
});

/* Guests +/- */
$("#plus").addEventListener("click", () => { if (+guestsEl.value < 30) guestsEl.value = +guestsEl.value + 1; });
$("#minus").addEventListener("click", () => { if (+guestsEl.value > 1) guestsEl.value = +guestsEl.value - 1; });

/* Phone: sirf number */
$("#phone").addEventListener("input", (e) => { e.target.value = e.target.value.replace(/\D/g, ""); });

/* ---------- Validation ---------- */
function setError(id, msg) {
  const field = $("#" + id).closest(".field");
  field.classList.toggle("invalid", !!msg);
  field.querySelector(".error").textContent = msg || "";
  return !msg;
}

function validateTime() {
  if (hourEl.value.trim() === "") return setError("hour", "Please pick or type a time");
  const t = getCustomMinutes();
  if (t === null) return setError("hour", "Enter a valid time (hour 1–12, minutes 0–59)");
  if (t < OPEN_MIN || t > LAST_BOOKING_MIN) return setError("hour", "We take bookings between 11:00 AM and 10:30 PM");
  if (dateEl.value === getTodayStr()) {
    const n = new Date();
    if (t < n.getHours() * 60 + n.getMinutes() + ADVANCE_MIN) return setError("hour", "For today, please pick a time at least 30 minutes from now");
  }
  return setError("hour", "");
}

function validate() {
  let ok = true;
  const name = $("#name").value.trim();
  const phone = $("#phone").value.trim();
  const email = $("#email").value.trim();

  ok = setError("name", name.length < 2 ? "Please enter your name" : "") && ok;
  ok = setError("phone", !/^[6-9]\d{9}$/.test(phone) ? "Enter a valid 10 digit mobile number" : "") && ok;
  ok = setError("email", !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? "Enter a valid email" : "") && ok;

  let dateMsg = "";
  if (!dateEl.value) dateMsg = "Select a date";
  else if (dateEl.value < getTodayStr()) dateMsg = "Date cannot be in the past";
  ok = setError("date", dateMsg) && ok;

  ok = validateTime() && ok;
  return ok;
}

["name", "phone", "email", "date"].forEach((id) =>
  $("#" + id).addEventListener("input", () => $("#" + id).closest(".field").classList.remove("invalid"))
);

/* ---------- Booking popup ---------- */
const modal = $("#modal");
function closeModal() { modal.hidden = true; updateScrollLock(); }
$("#modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

/* ---------- Submit ---------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  dateEl.min = getTodayStr();
  if (!validate()) return;

  const t = getCustomMinutes();
  const timeStr = fmtTime(Math.floor(t / 60), t % 60);
  const seat = document.querySelector('input[name="seat"]:checked').value;

  const booking = {
    id: "PCR" + Date.now().toString().slice(-6),
    name: $("#name").value.trim(),
    phone: $("#phone").value.trim(),
    email: $("#email").value.trim(),
    date: dateEl.value,
    time: timeStr,
    guests: guestsEl.value,
    occasion: $("#occasion").value,
    seat,
    notes: $("#notes").value.trim()
  };

  // Browser me backup save (demo ke liye)
  try {
    const all = JSON.parse(localStorage.getItem("peepalBookings") || "[]");
    all.push(booking);
    localStorage.setItem("peepalBookings", JSON.stringify(all));
  } catch (err) { /* ignore */ }

  const dateNice = niceDate(booking.date);

  const msg =
`Hello ${CAFE_NAME}! 🌿
I'd like to book a table.

*Booking ID:* ${booking.id}
*Name:* ${booking.name}
*Mobile:* ${booking.phone}
*Email:* ${booking.email}
*Date:* ${dateNice}
*Time:* ${booking.time}
*Guests:* ${booking.guests}
*Occasion:* ${booking.occasion}
*Seating:* ${booking.seat}
*Notes:* ${booking.notes || "-"}`;

  $("#modalWA").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  $("#modalText").innerHTML =
    `Thanks <b>${esc(booking.name)}</b>! Table for <b>${esc(booking.guests)}</b> on <b>${esc(dateNice)}</b> at <b>${esc(booking.time)}</b>.<br>
     Booking ID: <b>${booking.id}</b><br><br>
     Neeche button dabao aur WhatsApp me <b>Send</b> karo – booking cafe tak tabhi pahunchegi jab aap message send karoge.`;
  modal.hidden = false;
  updateScrollLock();

  // form reset
  form.reset();
  form.querySelectorAll(".field").forEach((f) => f.classList.remove("invalid"));
  dateEl.value = getTodayStr();
  guestsEl.value = 2;
  hourEl.value = "";
  minEl.value = "";
  buildQuickSlots();
});

/* ---------- Escape key se sab band ---------- */
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  closeModal();
  closeLightbox();
  closeNav();
});