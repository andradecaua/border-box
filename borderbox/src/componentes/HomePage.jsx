

function Border(props){
    return(
        <div id="border">
            <span id="titleborda">Tamanho da borda</span>
            <input id={props.nameinput} type="text" onInput={() => {
                const template = document.getElementById("template")
                const borda = document.getElementById(props.nameinput).value

                template.style.borderWidth = borda
            }}/>
            <span id="tipoborda">Tipo da borda</span>
            <select id={props.selectname} onInput={() => {
                const template = document.getElementById("template")
                const selectValue = document.getElementById(props.selectname).value

                template.style.borderStyle = selectValue
            }}>
                <option value="none">None</option>
                <option value="solid">Solid</option>
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
                <option value="double">Double</option>
                <option value="groove">Groove</option>
                <option value="ridge">Ridge</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
            </select>
            <span id="colorborder">Cor da borda</span>
            <input id={props.colorname} type="color" onInput={() => {
                const template = document.getElementById('template')
                const color = document.getElementById(props.colorname).value

                template.style.borderColor = color
            }} />
        </div>
    )
}

function Box(){
    let boxarray = []
    return(
        <div id="box">
            <span>Box shadow</span>
            <input type="text" id="horizonte" placeholder="Deslocamento horizontal"  className="boxshadow" onInput={() => {
                const yvalue = document.getElementsByClassName("boxshadow")[0]
                const template = document.getElementById('template')
                boxarray[0] = yvalue.value
                if(boxarray[0] === ""){
                    boxarray[0] = "0px"
                }
                template.style.boxShadow = `${boxarray[0]} ${boxarray[1]} ${boxarray[2]} ${boxarray[3]}`
                
            }}/>
            <input type="text" id="vertical" placeholder="Deslocamento vertical" className="boxshadow" onInput={() => {
                const yvalue = document.getElementsByClassName("boxshadow")[1]
                const template = document.getElementById('template')
                boxarray[1] = yvalue.value
                if(boxarray[1] === ""){
                    boxarray[1] = "0px"
                }
                template.style.boxShadow = `${boxarray[0]} ${boxarray[1]} ${boxarray[2]} ${boxarray[3]}`
            }}/>
            <input type="text" id="blur" placeholder="Blur da sombra"  className="boxshadow" onInput={() => {
                const yvalue = document.getElementsByClassName("boxshadow")[2]
                const template = document.getElementById('template')
                boxarray[2] = yvalue.value
                if(boxarray[2] === ""){
                    boxarray[2] = "0px"
                }
                template.style.boxShadow = `${boxarray[0]} ${boxarray[1]} ${boxarray[2]} ${boxarray[3]}`
            }}/>
            <input type="color" placeholder="Cor da sombra"  className="boxshadow"onInput={() => {
                const yvalue = document.getElementsByClassName("boxshadow")[3]
                const template = document.getElementById('template')
                boxarray[3] = yvalue.value
                if(boxarray[3] === ""){
                    boxarray[3] = "0px"
                }
                template.style.boxShadow = `${boxarray[0]} ${boxarray[1]} ${boxarray[2]} ${boxarray[3]}`
            }}/>
        </div>
    )
}

export function Home(){
    return(
        <div id="Home">

            <div id="copytext">
                <button onClick={() => {



                    const template = document.getElementById("template")

                    let radius = {
                        topl: template.style.borderTopLeftRadius.toString(),
                        topr: template.style.borderTopRightRadius.toString(),
                        bottomr: template.style.borderBottomRightRadius.toString(),
                        bottoml: template.style.borderBottomLeftRadius.toString(),
                    }
                    let shadow = template.style.boxShadow.toString()
                    
                    let border = {
                        width: template.style.borderWidth.toString(),
                        style: template.style.borderStyle.toString(),
                        color: template.style.borderColor.toString()
                    }
                    navigator.clipboard.writeText(`{
                            border-radius: ${radius.topl} ${radius.topr} ${radius.bottomr} ${radius.bottoml};
                            box-shadow: ${shadow};
                            border: ${border.width} ${border.style} ${border.color};
                        }`)
                    

                }}>Copiar</button>
            </div>

            <div id="showarea">
                <div id="template"><span>Template</span></div>
            </div>

            <div id="inputsitens">

                <span id="instrunctions">
                    <p>Para utilização do site utilize as unidades de média dentros dos campos de entrada</p>
                    <p>Pode-se utilizar as unidades de medida "px em % rem" entre as outras</p>
                    <p>Para copiar a estilização clique no botão copy</p>
                </span>

                <div id="radius">
                    <span>Arredondamento de borda</span>

                    <input id="bordaesquerdaencima" placeholder="Borda esquerda encima" onInput={() => {
                        const template = document.getElementById("template")
                        let values = document.getElementById("bordaesquerdaencima")
                        template.style.borderTopLeftRadius = values.value
                    }}/>

                    <input id="bordaesquerdaembaixo" placeholder="Borda esquerda embaixo" onInput={() => {
                        const template = document.getElementById("template")
                        let values = document.getElementById("bordaesquerdaembaixo")
                        template.style.borderBottomLeftRadius = values.value
                    }}/>

                    <input id="bordadireitaencima" placeholder="Borda direita encima" onInput={() => {
                        const template = document.getElementById("template")
                        let values = document.getElementById("bordadireitaencima")
                        template.style.borderTopRightRadius = values.value
                    }}/>

                    <input id="bordadireitaembaixo" placeholder="Borda direita embaixo" onInput={() => {
                        const template = document.getElementById("template")
                        let values = document.getElementById("bordadireitaembaixo")
                        template.style.borderBottomRightRadius = values.value
                    }}/>

                </div>
                <Border selectname="selectstyle" colorname="Cor" nameinput="tamanho" />
                <Box />
            </div>
        </div>
    )
}