import React from 'react'

export default function ImageList(props) {
    const images = props.images.map(({ description, id, urls }) => {
        return <img alt={description} key={id} src={urls.regular} />
    })
    return (
        <div>
            {images}
        </div>
    )
}
