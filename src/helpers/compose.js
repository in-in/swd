const compose = (...funcs) => (comp) => funcs.reduceRight((prev, fn) => fn(prev), comp);

export default compose;
