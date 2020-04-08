import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import gridStyles from "./grid.module.scss";

export const PWD = (props) => {
  return (
    <div className={gridStyles.pageWrapperDark}>
      {props.children}
    </div>
  )
}

export const PWL = (props) => {
  return (
    <div className={gridStyles.pageWrapperLight}>
      {props.children}
    </div>
  )
}

export const GridTwo = (props) => {
  return (
    <div className={gridStyles.gridContainer}>
      <div className={gridStyles.gridTwoColumn}>
        {props.children}
      </div>
    </div>
  )
}

export const GridFour = (props) => {
  return (
    <div className={gridStyles.gridContainer}>
      <div className={gridStyles.gridFourColumn}>
        {props.children}
      </div>
    </div>
  )
}

export const GridGallery = (props) => {
  return (
    <div className={gridStyles.gridContainer}>
      <div className={gridStyles.gridGallery}>
        {props.children}
      </div>
    </div>
  )
}

export const GridAuto = (props) => {
  return (
    <div className={gridStyles.gridContainer}>
      <div className={gridStyles.gridAutoColumn}>
        {props.children}
      </div>
    </div>
  )
}

export const GridWall = (props) => {
  return (
    <div className={gridStyles.gridContainer}>
      <div className={gridStyles.gridWall}>
        {props.children}
      </div>
    </div>
  )
}

export const PortfolioCard = props => {
  return (
    <div className={gridStyles.portfolioCard}>
    <Link className={gridStyles.cardLink} to={props.link}>
      <Img className={gridStyles.cardImage} sizes={props.image} alt={props.alt} />
      <div className={gridStyles.info}>
        <h3 className={gridStyles.infoCompany}>{props.company}</h3>
        <p className={gridStyles.infoType}>{props.type}</p>
      </div>
    </Link>
  </div>
  )
}

export const FeaturedSmall = props => {
  return (
    <div className={gridStyles.featuredSmall}>
    <Link className={gridStyles.cardLink} to={props.link}>
      <Img className={gridStyles.cardImage} sizes={props.image} alt={props.alt} />
      <div className={gridStyles.info}>
        <h3 className={gridStyles.infoCompany}>{props.title}</h3>
      </div>
    </Link>
  </div>
  )
}

export const FeaturedLarge = props => {
  return (
    <div className={gridStyles.featuredLarge}>
    <Link className={gridStyles.cardLink} to={props.link}>
      <Img className={gridStyles.cardImage} sizes={props.image} alt={props.alt} />
      <div className={gridStyles.info}>
        <h3 className={gridStyles.infoCompany}>{props.title}</h3>
      </div>
    </Link>
  </div>
  )
}

export const BlogCard = props => {
  return (
    <div className={gridStyles.blogCard}>
    <Link className={gridStyles.cardLink} to={props.link}>
      <Img className={gridStyles.cardImage} sizes={props.image} alt={props.alt} />
      <div className={gridStyles.info}>
        <h3 className={gridStyles.infoTitle}>{props.title}</h3>
        <p className={gridStyles.infoDate}>{props.date}</p>
      </div>
    </Link>
  </div>
  )
}

export const ImageContainer = ({ classes, fluid }) => {
  return (
    <React.Fragment>
      <Img className={classes} fluid={fluid} />
    </React.Fragment>
  )
}