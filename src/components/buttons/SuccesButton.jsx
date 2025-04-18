/***
 * Success Button Component uses the base button as its structure.
 * The button has a green background by default and white text.
 * On hover, the background will change to light green and the text to light silver.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <SuccessButton onClick={ handleClick }>
 *  Click Me
 * </SuccessButton>
 */

import React from "react";

import { BaseButton } from "./BaseButton";

import PrimaryColor from "../../themes/color_pallete/PrimaryColor";
import SecondaryColor from "../../themes/color_pallete/SecondaryColor";
import UseHover from "../../hooks/UseHover";
import UseNavigation from "../../hooks/UseNavigation";

const SuccessButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  const { handleNavigation } = UseNavigation();

  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      onClick={ () => handleNavigation(path) }
      style={{ 
        backgroundColor: isHovered ? SecondaryColor.lightGreen : PrimaryColor.green,
        color: isHovered? SecondaryColor.lightSilver : PrimaryColor.white,
        transition: 'background-color 0.2s ease'
      }}
      { ...props }
    >
      { children }
    </BaseButton>
  )
}

export default SuccessButton