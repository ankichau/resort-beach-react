import React from "react"

function Images(props){
    let image = props.items.map(item=>item.fields.file.url)
    return(
        <div>
            {image.filter(room=>i)}
        </div>
    )

}