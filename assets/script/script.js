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

var mode = 0


$("#faca").on("click", function(){
    if (mode == 0){
        mode = 1
        $("#body").addClass("dark")
        // theme

        $("#logo1").attr("src", "assets/img/LogoSurvive.png")
        $("#carrinho").attr("src", "assets/img/CarrinhoWhite.png")
        $(this).attr("src", "assets/img/NatureMode.png")
        // header

        $(".title-banner").html("Desafie a Natureza Impiedosa!")
        $(".descricao-banner").html("Prepare-se para o Inesperado e Domine Ambientes Hostis com Nossos Acampamentos de Treinamento")
        $("#img-banner1").attr("src", "assets/img/SurviveArtBanner1 1.png")
        $("#img-banner2").attr("src", "assets/img/SurviveArtBanner2 1.png")
        $("#img-banner3").attr("src", "assets/img/SurviveArtBanner3 1.png")
        $("#img-banner4").attr("src", "assets/img/SurviveArtBanner4 1.png")
        $("#img-banner5").attr("src", "assets/img/SurviveArtBanner5 1.png")
        // banner

        $("#subtitle-sec2-1").html("Amantes da Sobrevivência Extrema")
        $("#text-sc2-1").html("Nossa Equipe Compartilha a Paixão Pela Aventura e o Profundo Conhecimento em Sobrevivência. Na essência de nossa equipe, arde uma chama indomável pela sobrevivência em ambientes adversos. Cada um de nós é moldado pela paixão por desafiar os limites da natureza e pelo aprendizado constante sobre como prosperar em meio à adversidade")
        $("#img-sec2-1").attr("src", "assets/img/ExtremeNatureIMG 1.png")
        $("#img-sec2-3").attr("src", "assets/img/DarkNatureIMG 1.png")
        // sec-2

        $("#lampada-1").attr("src", "assets/img/lampada-2.png")
        $("#lampada-2").attr("src", "assets/img/saco-2.png")
        $("#lampada-3").attr("src", "assets/img/lanterna-2.png")
        $("#lampada-4").attr("src", "assets/img/kit-2.png")
        $("#lampada-5").attr("src", "assets/img/bussola-2.png")
        $("#lampada-6").attr("src", "assets/img/mapa-2.png")
        $("#lampada-7").attr("src", "assets/img/barraca-2.png")
        $("#lampada-8").attr("src", "assets/img/corda-2.png")
        $("#lampada-9").attr("src", "assets/img/oculos-2.png")
        $("#lampada-10").attr("src", "assets/img/repelente-2.png")
        $("#lampada-11").attr("src", "assets/img/extintor-2.png")
        $("#lampada-12").attr("src", "assets/img/mochila-2.png")
        // cards-produtos

        $("#aventura-img1").attr("src", "assets/img/Imgs1-2.png")
        // aventuras

        $("#logofooter").attr("src", "assets/img/LogoSurvive.png")
        $("#facebook").attr("src", "assets/img/VectorDF.png")
        $("#instagram").attr("src", "assets/img/VectorDI.png")
        $("#pinterest").attr("src", "assets/img/VectorDP.png")
        $("#youtube").attr("src", "assets/img/VectorDY.png")
        // footer
        
    } else {
        mode = 0
        $("#body").removeClass("dark")
        // theme

        $("#logo1").attr("src", "assets/img/LogoNature-removebg-preview.png")
        $("#carrinho").attr("src", "assets/img/Carrinho.png")
        $(this).attr("src", "assets/img/IconFaca.png")
        // banner

        $(".title-banner").html("Explore a Natureza ao Máximo!")
        $(".descricao-banner").html("Encontre os Melhores Equipamentos e Dicas para uma Aventura de Acampamento Inesquecível")
        $("#img-banner1").attr("src", "assets/img/ArteNature.jpg")
        $("#img-banner2").attr("src", "assets/img/ArteNature2.jpg")
        $("#img-banner3").attr("src", "assets/img/ArteNature3.jpg")
        $("#img-banner4").attr("src", "assets/img/ArteNature4.jpg")
        $("#img-banner5").attr("src", "assets/img/ArteNature5.jpg")
        // banner

        $("#subtitle-sec2-1").html("Amantes da Natureza e do Acampamento")
        $("#text-sc2-1").html("Somos entusiastas ávidos da natureza e do acampamento. A paixão pela aventura ao ar livre corre em nossas veias. Cada membro de nossa equipe tem uma conexão profunda com a beleza e a tranquilidade da natureza, e essa paixão nos motiva a compartilhar nossa experiência e conhecimento com outros amantes da natureza")
        $("#img-sec2-1").attr("src", "assets/img/Subtitle1Nature 1.png")
        $("#img-sec2-3").attr("src", "assets/img/SubtitleNature3 1.png")
        // sec-2

        $("#lampada-1").attr("src", "assets/img/BgProdutosL.png")
        $("#lampada-2").attr("src", "assets/img/BgProdutos 2.png")
        $("#lampada-3").attr("src", "assets/img/BgProdutos 3.png")
        $("#lampada-4").attr("src", "assets/img/BgProdutos 4.png")
        $("#lampada-5").attr("src", "assets/img/BgProdutos 5.png")
        $("#lampada-6").attr("src", "assets/img/BgProdutos 6.png")
        $("#lampada-7").attr("src", "assets/img/BgProdutos 1-5.png")
        $("#lampada-8").attr("src", "assets/img/BgProdutos 1-4.png")
        $("#lampada-9").attr("src", "assets/img/BgProdutos 1-3.png")
        $("#lampada-10").attr("src", "assets/img/BgProdutos 1-2.png")
        $("#lampada-11").attr("src", "assets/img/BgProdutos 1-1.png")
        $("#lampada-12").attr("src", "assets/img/BgProdutos 1.png")
        // cards-produtos

        $("#aventura-img1").attr("src", "assets/img/Imgs1.png")
        // aventuras

        $("#logofooter").attr("src", "assets/img/LogoNature-removebg-preview.png")
        $("#facebook").attr("src", "assets/img/Vector-5.png")
        $("#instagram").attr("src", "assets/img/Vector-removebg-preview.png")
        $("#pinterest").attr("src", "assets/img/Vector-6.png")
        $("#youtube").attr("src", "assets/img/Vector.png")
        // footer
    }
})
