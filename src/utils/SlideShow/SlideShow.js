import { useEffect, useRef, useState } from "react";
import "./slideShow.css";

export default function SlideShow() {
  const image = [
    { url: require("../image/3609477.jpg") },
    { url: require("../image/3936526.jpg") },
    { url: require("../image/18899269.jpg") },
  ];
  const [slide, setSlide] = useState(0);
  let i = 0;
  useEffect(() => {
    const x = setInterval(() => {
      if (slide < image.length - 1) {
        setSlide(slide + 1);
        console.log(image[slide].url);
        i++;
      } else {
        setSlide(0);
        console.log(image[slide].url);
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, [slide, image]);
  // let i=0;
  // useEffect(()=>{
  //   console.log("bbb")
  // },[i])

  // console.log(slide);

  return (
    <>
      <img src={image[slide].url} alt="not found" />
    </>
  );
}
