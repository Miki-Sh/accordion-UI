(() =>{

    class Accordion {
        // 初期化　(初めに実行したい処理はこの中に書く)
        constructor(obj) {
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);

            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
                     // クラスの中で関数を呼びたい時はthisをつけると　このクラスのclickHandlerという意味になる
                index ++;
            }
        }

        clickHandler(e) {    
            
            e.preventDefault();
    
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
            if ($content.style.display === "block") {
                $content.style.display = "none";
            } else {
                $content.style.display = "block";
            }
        } 
    }

    const fuckingAccordion = new Accordion({
        hookName: "#js-faq",
        tagName: "p"
    });

    const secondAccordion = new Accordion({
        hookName: "#js-accordion",
        tagName: "a"
    });

    const thirdAccordion = new Accordion({
        hookName: "#js-accordion2",
        tagName: "dt"
    });
    









}) ();