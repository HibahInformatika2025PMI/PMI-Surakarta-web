/***
 * This component is used as a template for the donation cards.
 * 
 * Is used in:
 * - DonationSection.jsx
 */

import React from 'react'

import GradRedPurpleButton from '../buttons/GradRedPurpleButton'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import SubHeading from '../../themes/typography/SubHeading'
import Subtitle from '../../themes/typography/Subtitle'

const DonationHomepageCard = ({ image, title, description, buttonLabel, path, className, style, ...props }) => {
  return (
    <div
      className={`max-w-[400px] rounded-3xl shadow-md overflow-hidden ${className}`}
      style={{ backgroundColor: PrimaryColor.white, ...style }}
      {...props}
    >
      {/* Image Part */}
      <div className='flex items-center justify-center'>
        <img src={image} alt={title} className='w-full h-[150px] object-cover' />
      </div>

      <div className='py-4 px-6'>
        <SubHeading className={'mb-2 line-clamp-2'}>
          {title}
        </SubHeading>

        <Subtitle className={'mb-3 line-clamp-3 text-justify'}>
          {description}
        </Subtitle>

        <GradRedPurpleButton className={'flex justify-center w-full'} path={path}>
          {buttonLabel}
        </GradRedPurpleButton>
      </div>
    </div>
  )
}

export default DonationHomepageCard