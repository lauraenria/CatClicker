document.addEventListener("DOMContentLoaded", function() {
  // variables
  let list = document.querySelector(".cat-list");
  let display = document.querySelector(".cat-display");
  let number = document.querySelector(".cat-number");
  let displayName = document.querySelector('.cat-name');

  let cats = [
    {
      name: "Angora",
      src: "images/gatto Angora.jpg",
      number: 0
    },
    {
      name: "Bengala",
      src: "images/gatto Bengala.jpg",
      number: 0
    },
    {
      name: "Certosino",
      src: "images/gatto-certosino.jpg",
      number: 0
    },
    {
      name: "Maine Coon",
      src: "images/Maine Coon.jpg",
      number: 0
    },
    {
      name: "Persiano",
      src: "images/Persiano.jpg",
      number: 0
    },
    {
      name: "Sacro di Birmania",
      src: "images/Sacro di Birmania.jpg",
      number: 0
    }
  ];

  let singleCat = cats[0];

  cats.forEach(cat => {
    let entry = document.createElement("li");
    let link = document.createElement("a");
    let src = cat.src;
    let name = document.createTextNode(cat.name);
    link.appendChild(name);
    entry.appendChild(link);
    list.appendChild(entry);

    link.addEventListener(
      "click",
      function() {
        displayName.textContent = cat.name;
        display.setAttribute("src", src);
        singleCat = cat;
        number.textContent = cat.number.toString();
      },
      false
    );
  });

  display.addEventListener(
    "click",
    function() {
      let singleCatNumber = singleCat.number;
      singleCatNumber += 1;
      singleCat.number = singleCatNumber;
      number.textContent = singleCatNumber.toString();
      console.log(singleCat);
    },
    false
  );
});

