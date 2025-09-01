// import convData from 'faux_lang.json'

const convData = {
    "a": "*-",
    "b": "_*-",
    "c": "_*=",
    "d": "_*≡",
    "e": "*=",
    "f": "/-",
    "g": ".-",
    "h": "/*-",
    "i": "*≡",
    "j": "/*=",
    "k": ".=",
    "l": "_◌-",
    "m": "_-",
    "n": "_=",
    "o": "*≣",
    "p": "_*≣",
    "q": ".≡",
    "r": "_~",
    "s": "/=",
    "t": "_*⊡",
    "u": "*⊡",
    "v": "_◌=",
    "w": "~-",
    "x": "~=",
    "y": "~≡",
    "z": "/≡"
}

var conv = new Vue({
    el: "#app",
    data: {
        guide : convData,
        display: false,
        input: "DEFAULT USER",
        convertedText: null
    },
    methods : {
        convertText : function() {
            console.log("works")

            var txt = this.input.toLowerCase().trim()
            var chr = txt.split("")
            
            for (let i = 0; i < chr.length; i++) {
                var curr = chr[i]
                var conv = this.guide[curr]

                chr[i] = conv
            }

            var tmp = chr.toString()
            console.log("tmp: ", tmp)
            console.log("tmp rmv: ", tmp.replaceAll(',', ''))

            this.convertedText = tmp.replaceAll(',', '')
            this.display = true
        }
    }
})
