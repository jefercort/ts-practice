(() => {
  let isEnable = true;
  isEnable = false;

  let isNew: boolean = true;
  isNew = false;

  const random = Math.random();
  isNew = random > 0.5 ? true : false;
  console.log('random', random);
  console.log('isNew', isNew);
}) ();
