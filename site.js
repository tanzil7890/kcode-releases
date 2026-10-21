// Shared by every page of kcode.outhad.com.

// Every [data-version] element names the latest release. The deploy writes it into the page (and
// each release redeploys); asking GitHub on every load covers the minutes in between. Nothing is
// kept between loads: a tag kept for the visit outlived the next release in a tab left open.
const chips = document.querySelectorAll("[data-version]")
if (chips.length)
  fetch("https://api.github.com/repos/tanzil7890/kcode-releases/releases/latest")
    .then((response) => (response.ok ? response.json() : undefined))
    .then((release) => {
      if (!release?.tag_name) return
      for (const chip of chips) chip.textContent = release.tag_name
    })
    .catch(() => {})

// A copy button on every code block in the docs.
for (const pre of document.querySelectorAll("article pre")) {
  const button = document.createElement("button")
  button.className = "copy"
  button.type = "button"
  button.textContent = "Copy"
  button.addEventListener("click", () =>
    navigator.clipboard
      .writeText(pre.querySelector("code").textContent)
      .then(() => {
        button.textContent = "Copied"
        setTimeout(() => (button.textContent = "Copy"), 1500)
      })
      .catch(() => getSelection().selectAllChildren(pre.querySelector("code"))),
  )
  pre.appendChild(button)
}

// The docs' "On this page" list marks the section being read, like the current step of a graph.
const links = [...document.querySelectorAll(".toc a[href^='#']")]
const sections = links.map((link) => document.getElementById(link.hash.slice(1))).filter(Boolean)
if (sections.length) {
  const mark = () => {
    const line = innerHeight * 0.3
    const current = sections.filter((section) => section.getBoundingClientRect().top <= line).at(-1) ?? sections[0]
    for (const link of links) {
      if (link.hash === `#${current.id}`) link.setAttribute("aria-current", "location")
      else link.removeAttribute("aria-current")
    }
  }
  addEventListener("scroll", mark, { passive: true })
  addEventListener("resize", mark)
  mark()
}
