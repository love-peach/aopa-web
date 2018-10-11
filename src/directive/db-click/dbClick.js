export default{
  bind(el, binding) {
    el.addEventListener('click', (e) => {
      if (!el.disabled) {
        if (binding.value && typeof binding.value === 'function') {
          binding.value(e);
        }
        el.disabled = true;
        setTimeout(() => {
          el.disabled = false;
        }, 1000);
      }
    });
  },
};
