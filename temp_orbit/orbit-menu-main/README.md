# Orbit Menu

A lightweight, dependency-free JavaScript library to create interactive radial/sector-based menus. Easily embeddable in any project — Flask, Rails, or pure HTML.

## ✨ Features

- Works out of the box via `<script>` tag or as an ES module
- Radial layout with customizable number of sectors
- Assign JavaScript actions to menu items via `data-action`
- Tiny footprint: minified, source-mapped, no dependencies

---

## 🛠 Installation


### Option 1: Script tag (UMD build)

Just copy the JS and CSS files into your project’s assets (or else) folder.

```html
<link rel="stylesheet" href="/assets/orbit-menu.css">
<script src="/assets/orbit-menu.umd.js"></script>
```

Then initialize:

```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    OrbitMenu.attachOrbitMenus();

    OrbitMenu.addOrbitActions('orbit-menu-1', {
      sayHello: (el) => alert(`Hi from ${el.innerText}`)
    });
  });
</script>
```

### Option 2: ES Module

```html
<script type="module">
  import OrbitMenu from 'static/orbit-menu.esm.js';

  OrbitMenu.attachOrbitMenus();

  OrbitMenu.addOrbitActions('orbit-menu-1', {
    sayHello: (el) => alert(`Hi from ${el.innerText}`)
  });
</script>
```

or put it in window to be gloablly acesses:

```html
<script type="module">
  import OrbitMenu from 'static/orbit-menu.esm.js';
  window.OrbitMenu = OrbitMenu;
</script>

<script>
  OrbitMenu.attachOrbitMenus();

  document.addEventListener('DOMContentLoaded', function () {
    OrbitMenu.attachOrbitMenus();
    OrbitMenu.addOrbitActions('orbit-menu-1', {
      sayHello: el => alert(`Hi from ${el.innerText}`)
    });
  });
</script>
---

## ⚙️ Usage

### HTML Structure

```html
<span id="orbit-menu-1" class="orbit-menu">
  <span>Menu</span>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</span>
```

* First child: Menu HTML that trigger the menu
* Other children: Each menu item

### Data options:

* In `orbit-menu` element: data-...
    * sector: total angle that the menu will span. `Default: 360` (degrees)
    * rx-off-set: Horizontal margin between items and menu. `Default: 50` (px)
    * ry-off-set: Vertical margin between items and menu. `Default: 50` (px)
    * angle-off-set: Angle of the first element. `Default: 0`
    * close: close the menu after ANY item click. `Default: true`
* In `items` inside the menu: data-...
  * action: the name of the callback, defined in `addOrbitActions`. `Default: undefined`
  * close: close the menu after item click. Has priority over menu definition. `Default: true`

### Bootstrap Example

```html
<span id="orbit-menu-1" class="orbit-menu">
  <span class="btn btn-outline-primary">Menu</span>
  <span class="btn btn-primary">1</span>
  <span class="btn btn-primary">2</span>
  <span class="btn btn-primary">3</span>
</span>
```

> Note: Any tag that is a direct child of "orbit-menu" will be turned into a float option. You can use buttons, links... everthing. You does not have to use the `data-action` if you prefer to register your own events.

---

## 📦 Development

Install dependencies and build:

```bash
npm install
npx rollup -c
```

This creates:

- `dist/orbit-menu.esm.js` — ES Module
- `dist/orbit-menu.umd.js` — UMD (for direct browser use)
- `dist/orbit-menu.css` — Stylesheet
- Source maps included

Minification is handled via `rollup-plugin-terser`.

---

## 🧪 Example Action Binding

```js
OrbitMenu.addOrbitActions('orbit-menu-1', {
  sayHello: el => alert(`Hello from ${el.innerText}`),
  logText: el => console.log(el.innerText)
});
```

Each `data-action="sayHello"` will trigger the corresponding function with the clicked element as argument.

---

## 📁 File Structure

```
dist/
├── orbit-menu.umd.js
├── orbit-menu.esm.js
├── orbit-menu.css
└── *.map (source maps)

src/
└── orbit-menu.js

rollup.config.js
```

---

## 📄 License

MIT License – use it freely, modify it boldly!

---

## 🤝 Contributing

Found a bug or want to suggest a feature? Feel free to open an issue or PR!

---

## 🚀 Author

Built with care and curiosity by [you].
Pull requests welcome 🍻
