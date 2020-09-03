import React from "react"
import classes from './Image.module.css'

const Image = (props) => {
  // console.log(props.imgInfo.fluid)
    return (
      // <Img fixed={props.imgInfo.fixed} alt="coffee image"></Img>
      <img alt="" className={props.type ? classes.true : classes.false} src={props.imgInfo.fluid.src}></img>
    )
    }

export default Image
