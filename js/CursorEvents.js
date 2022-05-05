AFRAME.registerComponent("cursor-listener", {
    schema : {
        selectedItemId : { default : "", type : "string"},
    },

    init:function(){
        this.handleMouseEnterEvents()
        this.mouseLeaveEvents()
    },
    update:function(){
        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        c = fadeBackgroundEl.children;
        if(c.length > 0){
            var i;
            for(i = 0; i <= c.length; i++){
        
                fadeBackgroundEl.removeChild(c[i]);
            }
        } else {
            this.handleMouseClickEvents()
        }
    },

    handleComicsListState:function(){
        const id = this.el.getAttribute("id");
        const comicsId = ["Infinity Gauntlet","Captain-America","Avengers","Spider-Man"];

        if(comicsId.includes(id)){
            const comicsContainer = document.querySelector("#comics-container")
            comicsContainer.setAttribute("cursor-listener", {selectedItemId : id})
            this.el.setAttribute("material",{color : "#886aff", opacity : 1 })

        }

    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.handleComicsListState()
        })
    },

    mouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemId} = this.data
            
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")

                if(id == selectedItemId){
                    el.setAttribute("material", { color : "black", opacity : 1})
                }
            }
        })
    },

    handleMouseClickEvents:function(){
        this.el.addEventListener("click", ()=>{
           const {selectedItemId} = this.data;

           const fadeBackgroundEl = document.querySelector("#fadeBackground")
           const titleEl = document.querySelector("#app-title")
           const cursorEl = document.querySelector("#camera-cursor")

           if(selectedItemId){
               fadeBackgroundEl.setAttribute("visible", true)
               fadeBackgroundEl.setAttribute("info-banner", {
                   itemId : selectedItemId
               })

               titleEl.setAttribute("visible", false)
               cursorEl.setAttribute("position", {x : 0, y : 0, z : -1});
               cursorEl.setAttribute("geometry", {
                   radiusInner : 0.03,
                   radiusOuter : 0.04,
               });
            } else {
                fadeBackgroundEl.setAttribute("visible", false);
                titleEl.setAttribute("visible", false);
                cursorEl.setAttribute("position", {x : 0, y : 0, z : -3});
                cursorEl.setAttribute("geometry", {
                    radiusInner : 0.08,
                    radiusOuter : 0.12
                });
            }
        })
    }
});
