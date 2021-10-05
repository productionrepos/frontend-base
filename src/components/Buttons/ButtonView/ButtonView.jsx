import React from 'react'

import GreenButton from '../ButtonComponents/FilledButtons/GreenButton'
import WhiteButton from '../ButtonComponents/FilledButtons/WhiteButton'
import YellowButton from '../ButtonComponents/FilledButtons/YellowButton'
import BlackButton from '../ButtonComponents/FilledButtons/BlackButton'
import RedButton from '../ButtonComponents/FilledButtons/RedButton'

import GreenEmptyButton from '../ButtonComponents/EmptyButtons/GreenEmptyButton'
import GreyEmptyButton from '../ButtonComponents/EmptyButtons/GreyEmptyButton'
import YellowEmptyButton from '../ButtonComponents/EmptyButtons/YellowEmptyButton'
import BlackEmptyButton from '../ButtonComponents/EmptyButtons/BlackEmptyButton'
import RedEmptyButton from '../ButtonComponents/EmptyButtons/RedEmptyButton'

import GreenLinkButton from '../ButtonComponents/LinkButtons/GreenLinkButton'
import GreyLinkButton from '../ButtonComponents/LinkButtons/GreyLinkButton'

import GreenBlockButton from '../ButtonComponents/BlockButtons/GreenBlockButton'
import YellowBlockButton from '../ButtonComponents/BlockButtons/YellowBlockButton'

import CheckBox from '../ButtonComponents/CheckBoxes/CheckBox'

import GreenButton2 from '../ButtonComponents/Buttons/GreenButton2'
import YellowButton2 from '../ButtonComponents/Buttons/YellowButton2'
import BlackButton2 from '../ButtonComponents/Buttons/BlackButton2'

export default function ButtonView() {
    return (
        <div>
            <GreenButton></GreenButton>
            <WhiteButton></WhiteButton>
            <YellowButton></YellowButton>
            <BlackButton></BlackButton>
            <RedButton></RedButton>
            <GreenEmptyButton></GreenEmptyButton>
            <GreyEmptyButton></GreyEmptyButton>
            <YellowEmptyButton></YellowEmptyButton>
            <BlackEmptyButton></BlackEmptyButton>
            <RedEmptyButton></RedEmptyButton>
            <GreenLinkButton></GreenLinkButton>
            <GreyLinkButton></GreyLinkButton>
            <GreenBlockButton></GreenBlockButton>
            <YellowBlockButton></YellowBlockButton>
            <CheckBox></CheckBox>
            <GreenButton2></GreenButton2>
            <YellowButton2></YellowButton2>
            <BlackButton2></BlackButton2>
        </div>
    )
}