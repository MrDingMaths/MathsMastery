// shared/createEl.js
// Union of all three per-app createEl helpers (algebra/helpers.js, mathsfacts/utils.js, trigUI.js local)
export function createEl(tag, options = {}) {
    const el = document.createElement(tag);
    if (options.className) el.className = options.className;
    if (options.id) el.id = options.id;
    if (options.textContent) el.textContent = options.textContent;
    if (options.innerHTML) el.innerHTML = options.innerHTML;
    if (options.value !== undefined) el.value = options.value;
    if (options.type) el.type = options.type;
    if (options.placeholder) el.placeholder = options.placeholder;
    if (options.step) el.step = options.step;
    if (options.style) Object.assign(el.style, options.style);
    if (options.autocomplete) el.autocomplete = options.autocomplete;
    if (options.disabled) el.disabled = options.disabled;
    if (options.selected) el.selected = options.selected;
    return el;
}
