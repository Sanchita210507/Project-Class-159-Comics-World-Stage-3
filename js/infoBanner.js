AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        "Infinity Gauntlet": {
          banner_url: "./assets/thumbnails/comic1.jpg",
          title: "The Infinity Gauntlet",
          released_year: "1991",
          description:
            "The Infinity Gauntlet is an American comic book storyline published by Marvel Comics. When Thanos uses his powers to instantly erase half of the life in the universe from existence, Adam Warlock leads Earth's remaining heroes against him.",
        },
        "Captain-America": {
          banner_url: "./assets/thumbnails/comic2.jpg",
          title: "Captain America : Civil War",
          released_year: "2006",
          description:
            "'Civil War' is a Marvel Comics crossover storyline consisting of a seven-issue limited series written by Mark Millar and penciled by Steve McNiven. Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage.",
        },
        "Avengers": {
          banner_url: "./assets/thumbnails/comic3.jpg",
          title: "The Avengers",
          released_year: " 1963",
          description:
            "The Avengers are a fictional team of superheroes that appears in American comic books published by Marvel Comics. When Thor's evil brother, Loki, gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury, director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's 'dream team' are Iron Man, Captain America, the Hulk, Thor, the Black Widow and Hawkeye.",
        },
        "Spider-Man": {
          banner_url: "./assets/thumbnails/comic4.jpg",
          title: "Spider Man : Amazing Fantasy",
          released_year: "1962",
          description:
            "Amazing Fantasy is an American comic book anthology series published by Marvel Comics. Jack Kirby and Steve Ditko collaborated on this cover to create what is quite possibly the most iconic image in Marvel Comics' history. Before all the clones, symbiotes and civil wars we see Spider-Man in a simpler time doing what he does best, catching crooks and saving the day. ",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });
