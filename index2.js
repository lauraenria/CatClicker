/* ======= Model ======= */

let model = {
  currentCat: null,
  cats: [
    {
      name: "Angora",
      imgSrc: "images/gatto Angora.jpg",
      clickCount: 0
    },
    {
      name: "Bengala",
      imgSrc: "images/gatto Bengala.jpg",
      clickCount: 0
    },
    {
      name: "Certosino",
      imgSrc: "images/gatto-certosino.jpg",
      clickCount: 0
    },
    {
      name: "Maine Coon",
      imgSrc: "images/Maine Coon.jpg",
      clickCount: 0
    },
    {
      name: "Persiano",
      imgSrc: "images/Persiano.jpg",
      clickCount: 0
    },
    {
      name: "Sacro di Birmania",
      imgSrc: "images/Sacro di Birmania.jpg",
      clickCount: 0
    }
  ]
};

/* ======= Octopus ======= */
let octopus = {
  init: function() {
    model.currentCat = model.cats[0];

    //initialisation
    catView.init();
    catView.render();
    catListView.init();
    catListView.render(model.cats);
    formView.init();
    formView.render();
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  incrementCount: function() {
    model.currentCat.clickCount++;
    catView.render();
  },

  addNewCat : function(){
    model.cats.push(formView.newCat);
    // model array cats [last element of array]
    catListView.render(model.cats.slice(-1));
  }
  
};

/* ======= View ======= */

let catView = {
  init: function() {
    this.img = document.querySelector(".cat-display");
    this.catName = document.querySelector(".cat-name");
    this.number = document.querySelector(".cat-number");

    this.img.addEventListener("click", function() {
      octopus.incrementCount();
    });
  },

  render: function() {
    this.img.setAttribute("src", model.currentCat.imgSrc);
    this.catName.textContent = model.currentCat.name;
    this.number.textContent = model.currentCat.clickCount;
  }
};

let catListView = {
  init: function() {
    this.list = document.querySelector(".cat-list");
    this.displayName = document.querySelector(".cat-name");
    this.display = document.querySelector(".cat-display");
    this.number = document.querySelector(".cat-number");
  },

  render: function(cats) {
    cats.forEach(cat => {
      let entry = document.createElement("li");
      let link = document.createElement("a");
      let src = cat.imgSrc;
      let name = document.createTextNode(cat.name);
      link.appendChild(name);
      entry.appendChild(link);
      // console.log(link, 'link')
      this.list.appendChild(entry);

      link.addEventListener(
        "click",
        function() {
          octopus.setCurrentCat(cat);
          catListView.displayName.textContent = cat.name;
          catListView.display.setAttribute("src", cat.imgSrc);
          catListView.number.textContent = cat.clickCount.toString();
        },
        false
      );
    });
  }
};


let form = document.querySelector("#name-form");

let formView = {
  init: function() {
    this.admin = document.querySelector("#admin");
    let newCat = new Object();
    this.newCat = newCat;
    console.log(newCat);

    form.onsubmit = function(event){
      event.preventDefault();
      newCat.name = form.cat_name.value;
      newCat.imgSrc = form.cat_image.value;
      newCat.clickCount = form.cat_clicks.value;
      octopus.addNewCat();
      // console.log(form.cat_name.value);
      // console.log(form.cat_image.value);
      // console.log(form.cat_clicks.value);
    }
  },

  render: function() {
    this.admin.addEventListener("click", function() {
      form.classList.toggle("hidden");
    });
  }
};

octopus.init();

