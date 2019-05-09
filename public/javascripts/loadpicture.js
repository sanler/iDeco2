
const miArraydefotos2=document.getElementsByClassName('thePicture');

for(i=0;i<miArraydefotos2.length;i++){
  console.log(miArraydefotos2[i].id);
  
  }

const grid2 = document.querySelector(".grid2");
const rowSize2 = parseInt(getComputedStyle(grid2).getPropertyValue("grid-auto-rows"), 10);
const rowGap2 = parseInt(getComputedStyle(grid2).getPropertyValue("grid-gap"), 10);
const gridItems2 = [];

const positionGridItems2 = () => {
  gridItems2.forEach(({ item, content }) => {
    content.classList.remove("cover2");
    const rowSpan = Math.ceil(
    (content.offsetHeight + rowGap2) / (rowSize2 + rowGap2));

    item.style.setProperty("--row-span", rowSpan);
    content.classList.add("cover2");
  });
};

window.addEventListener("load", positionGridItems2);
//window.addEventListener("resize", _.debounce(positionGridItems, 100));


// DEMO CODE

const generateImages2 = (el, count = 10) => {
  const getRandomSize2 = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

  const newImage2 = (i) => {
   
 //   console.log('****************************'+miArraydefotos[i]._id);


    const item = document.createElement("div");
    item.className = "grid__item2";

    const a =document.createElement("a");
    a.className = "grid__link";

    a.setAttribute('href', `/picture/${miArraydefotos2[i].id}`);
    item.appendChild(a);

    const content = document.createElement("img");
    //const width = getRandomSize(200, 600);
    //const height = getRandomSize(200, 400);
    content.src = miArraydefotos2[i].src;

    a.appendChild(content);
    gridItems2.push({ item,a,content });

    return item;
  };

  let images = document.createDocumentFragment();
  for (let i = 0; i < count; i++) images.appendChild(newImage2(i));
  el.appendChild(images);
};

generateImages2(grid2, miArraydefotos2.length);