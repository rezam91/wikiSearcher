import { useEffect, useState } from "react";

const LoadPhoto = ({ pageidToPhoto }) => {
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${pageidToPhoto}&prop=pageimages&piprop=original&format=json&origin=*`)
      .then((response) => {
        return response.json()
    })
      .then((result) => {
        const pages = result?.query?.pages
        const page = Object.values(pages)[0]
        const src = page?.original?.source
        if (src) {
          setImgSrc(src)
        }
      })
  }, [])

  return imgSrc ? (<img src={imgSrc} alt={`${pageidToPhoto} photo`} width='60px' />) : (<span>No Image!</span>);
};

export default LoadPhoto;
