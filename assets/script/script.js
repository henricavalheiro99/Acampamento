// sec-6 --------------------------------------------------------------------------------------------------
var title = ['Parque Nacional das Árvores Verdes', 'Cordilheira das Montanhas Serenas', 'Lago das águas serenas']
var subtitle = ['Rodeado por florestas, riachos e vida selvagem, este acampamento oferece trilhas incríveis e noites estreladas',
 'Oferece vistas panorâmicas e trilhas de montanha espetaculares para os amantes da aventura desafiadora', 'Perfeito para atividades aquáticas, pesca e piqueniques à beira do lago, tendo uma vista maravilhosa do ambiente']

    for(let quant=0; quant<title.length; quant++){
        document.querySelector('.cards-guia').innerHTML += `         
                <div style="background-image: url(assets/img/${quant}.png);" class="col-3 guia-imgs">
                    <div class="details">
                        <div class="detail-box">
                            <p class="title-baianagem">${title[quant]}</p>
                            <p class="subtitle-baianagem">${subtitle[quant]}</p>
                            <button class="procurar">Procurar</button>
                        </div>
                    </div>
                </div>
           `
}

var title2 = ['Deserto das minas douradas', 'Rio do luar tranquilizante', 'Cânion do ar Silencioso']
var subtitle2 = ['Uma experiência única no deserto com dunas reluzentes, histórias ao redor da fogueira e um clima quente', 'Ideal para relaxar junto ao rio, pescar, fazer caminhadas nas margens e aproveitar a experiência única do luar calmo',
'Uma experiência impressionante em um cânion, com trilhas emocionantes e noites sob as estrelas']

for(let quant=0; quant<title.length; quant++){
    document.querySelector('.cards-guia2').innerHTML += `         
            <div style="background-image: url(assets/img/${quant+3}.png);" class="col-3 guia-imgs">
                <div class="details">
                    <div class="detail-box">
                        <p class="title-baianagem">${title2[quant]}</p>
                        <p class="subtitle-baianagem">${subtitle2[quant]}</p>
                        <button class="procurar">Procurar</button>
                    </div>
                </div>
            </div>
       `
}

$("#btn").on("click", async function(){
    const url = "https://api.openai.com/v1/chat/completions"

    let texto = $("#qst").val()
    $("#qst").val("")

    let pergunta = $("#chat").html()
    pergunta += `
            <div class="msg">
                <div class="content">
                    <div class="txt">${texto}</div>
                    <div class="user"><i class="fa-regular fa-user"></i></div>
                </div>
            </div>
    `
    $("#chat").html(pergunta)

    let key = "sk-ubveoZ@faNtPr@8bsQ8dj7@T3BlbkFJ@Hy3lhK2Y@drT14tB@3TxPT"
    key = key.replaceAll("@", "")

    const configuracoes = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + key
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system", 
                    content: "Henri é um bot que está disposto a ajudar todos no nosso site de acampamento, ele é gentil e carinhoso com os usuários e vive para esclarecer suas dúvidas"
                },
                {
                    role: "user",
                    content: texto
                }
            ]
        })
    }

    let resposta = await fetch(url, configuracoes)
    resposta = await resposta.json()

    let valorRetorna = resposta.choices[0].message.content
    
    async function responder(){
        let html = $("#chat").html()
        html += `
            <div class="msg r">
                    <div class="content r">
                        <div class="txt">${valorRetorna}</div>
                        <div class="user ddh"></div>
                    </div>
                </div>
        `

        $("#chat").html(html)
    }

    responder() 
})
