import React, {useState, useEffect} from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Gallery = () => {
  const [images, setImages] = useState(null)  
  
  useEffect(() => {
    let shouldCancel = false    
    const call = async () => {
      const response = await axios.get(
        // 'https://'
      );      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(response.data.map(url => ({
          original: `${url}=w1024`,
          thumbnail: `${url}=w100`
        })))
      }
    }
    call()
    return () => shouldCancel = true
  }, [])  
  
  return images ? <ImageGallery items={images} /> : null
}
export default Gallery

// https://medium.com/@ValentinHervieu/how-i-used-google-photos-to-host-my-website-pictures-gallery-d49f037c8e3c
// https://github.com/xiaolin/react-image-gallery
// https://developers.google.com/photos
// https://github.com/pradel/react-google-photo