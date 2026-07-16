const copyText = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to the selection-based method when clipboard permission is denied.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Clipboard copy was not available.");
};

document.querySelectorAll(".publication__bibtex-copy").forEach((button) => {
  button.addEventListener("click", async () => {
    const source = document.getElementById(button.dataset.bibtexTarget);
    const label = button.querySelector("span");
    const status = button.parentElement.querySelector(".publication__copy-status");

    if (!source) return;

    try {
      await copyText(source.textContent.trim());
      label.textContent = "Copied";
      status.textContent = "BibTeX copied to clipboard.";
    } catch {
      label.textContent = "Copy failed";
      status.textContent = "Could not copy BibTeX.";
    }

    window.setTimeout(() => {
      label.textContent = "BibTeX";
      status.textContent = "";
    }, 1800);
  });
});
