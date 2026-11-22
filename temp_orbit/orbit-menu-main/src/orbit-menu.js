export function addOrbitActions(menuId, actions) {
  const menu = typeof menuId === 'string' ? document.getElementById(menuId) : menuId;
  if (!menu) return;

  menu.querySelectorAll('[data-action]').forEach(child => {
    const actionName = child.dataset.action;
    if (actions[actionName]) {
      child.addEventListener('click', e => {
        e.stopPropagation();
        actions[actionName](child);
      });
    }
  });
}

export function attachOrbitMenus() {
  document.querySelectorAll('.orbit-menu').forEach(function (menu) {
    const options = Array.from(menu.children).slice(1);
    const sectorData = menu.dataset.sector;
    const sector = sectorData ? parseFloat(sectorData) * Math.PI / 180 : 2 * Math.PI;
    const angle_step = sector / options.length;
    const rect = menu.getBoundingClientRect();
    const rxOffset = parseFloat(menu.dataset.rxOffset) || 50;
    const ryOffset = parseFloat(menu.dataset.ryOffset) || 50;
    const rx = (rect.width / 2) + rxOffset;
    const ry = (rect.height / 2) + ryOffset;

    const angleOffsetData = menu.dataset.angleOffset;
    const angleOffset = angleOffsetData ? angleOffsetData * Math.PI / 180 : 0;

    document.addEventListener('click', () => {
      options.forEach(child => {
        child.classList.remove('show');
        child.style.transform = 'translate(-50%, -50%) translate(0, 0)';
      });
    });

    menu.addEventListener('click', function (e) {
      const anyVisible = [...options].some(el => el.classList.contains('show'));
      const closeAfterMenuClick = menu.dataset.close ? (menu.dataset.close === 'true') : true;
      const closeAfterItemClick = e.target.dataset.close ? (e.target.dataset.close === 'true') : true;

      options.forEach((child, index) => {
        if (anyVisible) {
          if (closeAfterMenuClick && closeAfterItemClick) {
            child.classList.remove('show');
            child.style.transform = 'translate(-50%, -50%) translate(0, 0)';
          }
        } else {
          child.classList.add('show');
          const angle = index * angle_step + angleOffset;
          const x = rx * Math.cos(angle);
          const y = ry * Math.sin(angle);
          child.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        }
      });

      e.stopPropagation();
    });
  });
}

export default {
  addOrbitActions,
  attachOrbitMenus
};
