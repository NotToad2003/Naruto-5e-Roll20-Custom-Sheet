on('change:chakra_base sheet:opened', function() {
  getAttrs(['chakra_base'], function(values) {
    const base = parseInt(values['chakra_base']) || 0;
    setAttrs({ chakra_total: base + 10 });
  });
});
