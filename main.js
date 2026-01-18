const referencesEl = document.getElementById("references");
logos.forEach((src) => {
  referencesEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="flex items-center justify-center">
      <img
        src="${src}"
        class="max-h-28 opacity-70 hover:opacity-100 transition"
        alt="Club reference"
        loading="lazy"
      />
    </div>
    `
  );
});

const showsEl = document.getElementById("shows");
shows.forEach((show, i) => {
  const hasTickets = show.link && show.link !== "#";

  showsEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="flex items-center justify-between py-4 ${
      i !== shows.length - 1 ? "border-b border-white/5" : ""
    }">
      <div>
        <p class="text-gray-400 text-sm">${show.date}</p>
        <p class="text-lg font-semibold">${show.venue}</p>
        <p class="text-gray-400 text-sm">${show.location}</p>
      </div>

      ${
        hasTickets
          ? `<a
              href="${show.link}"
              class="flex items-center justify-center px-5 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Tickets
            </a>`
          : `<span
              class="flex items-center justify-center px-5 py-2 rounded-lg bg-white/10 text-gray-400 cursor-default"
            >
              No Link
            </span>`
      }
    </div>
    `
  );
});

const videosEl = document.getElementById("videos");
videos.forEach((video) => {
  videosEl.innerHTML += `
    <div class="bg-[#111] rounded-xl border border-white/5">
      <div class="relative w-full pb-[56.25%]">
<iframe
  loading="lazy"
  class="absolute inset-0 w-full h-full"
  src="${video.url}"
  title="DJ Nocoon video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>


      </div>
    </div>
  `;
});

const galleryEl = document.getElementById("gallery");
images.forEach((img) => {
  galleryEl.innerHTML += `
    <div class="overflow-hidden rounded-xl">
      <img src="${img}" class="w-full h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
  `;
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

const mixtapesEl = document.getElementById("mixtapes");

mixtapes.forEach((mix) => {
  mixtapesEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="bg-[#111] rounded-xl border border-white/5 p-4">
      <p class="mb-4 font-semibold text-lg">${mix.title}</p>
      <div class="relative w-full ${
        mix.platform === "soundcloud" ? "h-40" : "h-32"
      }">
        <iframe
          class="absolute inset-0 w-full h-full rounded"
          src="${mix.embedUrl}"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media"
          loading="lazy"
        ></iframe>
      </div>
    </div>
    `
  );
});
