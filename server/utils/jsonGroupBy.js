const jsonGroupBy = (item, criteria) => {
  console.log('criteria', criteria);
  let groupBy = item.reduce((r, a) => {
    console.log('a', a);
    console.log('r', r);
    r[a[criteria]] = [...(r[a[criteria]] || []), a];
    return r;
  }, {});

  return groupBy;
};

module.exports = jsonGroupBy;
