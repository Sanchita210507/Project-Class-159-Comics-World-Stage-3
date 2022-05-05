AFRAME.registerComponent("comic", {
     
  
      init: function () {
       this.comicContainer = this.el;   
      this.createCards()
      
     },
   
     createCards: function () {
       const thumbnailsRef = [
         {
           id: "Infinity Gauntlet",
           title: "The Infinity Gauntlet",
           url: "./assets/thumbnails/comic1.jpg"
         },
         {
          id: "Captain-America",
          title: "Captain America : Civil War",
          url: "./assets/thumbnails/comic2.jpg"
        },
        {
          id: "Avengers",
          title: "The Avengers",
          url: "./assets/thumbnails/comic3.jpg"
        },
        {
          id: "Spider-Man",
          title: "Spider Man : Amazing Fantasy",
          url: "./assets/thumbnails/comic4.jpg"
        },

       ]

       let previousXPosition = -60
       
       for(var item of thumbnailsRef){
         const posX = previousXPosition+25
         const posY = 5
         const posZ = -40
         const position = {x:posX, y:posY, z:posZ}
         previousXPosition = posX

         const borderEl = this.createBorder(position, item.id)
         const thumbnailEl = this.createThumbnail(item)
         borderEl.appendChild(thumbnailEl)
         const titleEl = this.createTitle(position, item)
         borderEl.appendChild(titleEl)
         this.comicContainer.appendChild(borderEl)
         
       }
     },

     createBorder:function(position, id){
       const entityEl = document.createElement("a-entity")
       entityEl.setAttribute("id", id)
       entityEl.setAttribute("visible", true)
       entityEl.setAttribute("geometry", {
         primitive : "plane",
         height : 28,
         width : 20
       })
       entityEl.setAttribute("position", position)
       entityEl.setAttribute("material", {
         color : "black",
         opacity : 1,
      });
       entityEl.setAttribute("cursor-listener", {})
       return entityEl
     },

     createThumbnail:function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("position", {z : 0.1})
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry",{
        primitive : "plane",
        height : 26,
        width : 18
      })
      entityEl.setAttribute("material",{
        src : item.url
      })
      return entityEl
     },

     createTitle:function(position , item){
     
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("text", {
        value : item.title,
        color : "black",
        font : "exo2bold",
        align : "center",
        width : 70})

        const elPosition = position
        elPosition.y = -27
        entityEl.setAttribute("position", elPosition)
        entityEl.setAttribute("visible", true)

        return entityEl
      
     },

    
   });
   
