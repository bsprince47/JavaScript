let array = [
  
    {
        title: `double exposure 1`,
        link: `p/DGDXQDMoSVM`,
    },
    {
        title: `double exposure 2`,
        link: `reel/DGC-xcko3t1`,
    },
    {
        title: `double exposure 3`,
        link: `p/DGDYjWyor9l`,
    },
    {
        title: `Excel expense tracker`,
        link: `p/DGDZr9vokOt`,
    },
    {
        title: `Moon Night Light`,
        link: `p/DGDaU5_ITDZ`,
    },
    {
        title: `House Night Light`,
        link: `p/DGDaZHfoeje`,
    },
]

setTimeout(() => {
    let section = document.createElement("section");
    array.forEach(e => {
        let a = document.createElement("div");
        a.innerHTML = `<blockquote class="instagram-media" data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/${e.link}"
                    style=" background:#Fff; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                </blockquote>`;

                section.appendChild(a);


                
                
                
            })
            
            document.body.appendChild(section)
            window.instgrm.Embeds.process();  
}, 1000);


const person = {
    greet() {
        console.log("deer " + this.name);
    }
}
const user = {
    name: "random",
    __proto__: person
}

user.greet();
console.log(Object.getPrototypeOf(user) === person)