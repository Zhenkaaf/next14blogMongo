"use client";

const HydrationTest = () => {
  const a = Math.random();
  console.log("HydrationTest", a);

  return <div>{a}</div>;
};

export default HydrationTest;

/* Fast Refresh:

Как упоминалось ранее, Fast Refresh в режиме разработки может вызывать дополнительные 
рендеры в целях обеспечения быстрой обновляемости кода. Если вы видите эти дополнительные 
рендеры только в режиме разработки, то это может быть связано с работой Fast Refresh. */
