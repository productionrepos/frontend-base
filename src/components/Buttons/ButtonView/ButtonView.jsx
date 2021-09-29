import React from 'react'

import FilledButtons from '../ButtonComponents/FilledButtons/FilledButtons'
import AceptarButton from '../ButtonComponents/FilledButtons/AceptarButton'
import CerrarButton from '../ButtonComponents/FilledButtons/CerrarButton'
import SecondaryButton from '../ButtonComponents/FilledButtons/SecondaryButton'
import SuccessButton from '../ButtonComponents/FilledButtons/Success'
import WarningButton from '../ButtonComponents/FilledButtons/WarningButton'
import DangerButton from '../ButtonComponents/FilledButtons/DangerButton'
import ContinuarButton from '../ButtonComponents/ArrowButtons/ContinuarButton'
import VolverButton from '../ButtonComponents/ArrowButtons/VolverButton'
import EliminarButton from '../ButtonComponents/FilledButtons/EliminarButton'
import GreenEmpty from '../ButtonComponents/EmptyButtons/GreenEmpty'
import GreyEmpty from '../ButtonComponents/EmptyButtons/GreyEmpty'
import RedEmpty from '../ButtonComponents/EmptyButtons/RedEmpty'
import BlackEmpty from '../ButtonComponents/EmptyButtons/BlackEmpty'
import YellowEmpty from '../ButtonComponents/EmptyButtons/YellowEmpty'
import GreenBlock from '../ButtonComponents/BlockButtons/GreenBlock'
import YellowBlock from '../ButtonComponents/BlockButtons/YellowBlock'
import CheckBox1 from '../ButtonComponents/CheckBox/CheckBox1'
import CheckBox2 from '../ButtonComponents/CheckBox/CheckBox2'
import CheckBox3 from '../ButtonComponents/CheckBox/CheckBox3'
import Button1 from '../ButtonComponents/Button/Button1'
import Button2 from '../ButtonComponents/Button/Button2'
import Button3 from '../ButtonComponents/Button/Button3'
import LinkButton1 from '../ButtonComponents/Link1/LinkButton1'
import LinkButton2 from '../ButtonComponents/Link2/LinkButton2'
export default function ButtonView() {
    return (
        <div>
            <FilledButtons></FilledButtons>
            <SecondaryButton></SecondaryButton>
            <SuccessButton></SuccessButton>
            <WarningButton></WarningButton>
            <DangerButton></DangerButton>
            <ContinuarButton></ContinuarButton>
            <VolverButton></VolverButton>
            <AceptarButton></AceptarButton>
            <CerrarButton></CerrarButton>
            <EliminarButton></EliminarButton>
            <GreenEmpty></GreenEmpty>
            <GreyEmpty></GreyEmpty>
            <RedEmpty></RedEmpty>
            <BlackEmpty></BlackEmpty>
            <YellowEmpty></YellowEmpty>
            <LinkButton1></LinkButton1>
            <LinkButton2></LinkButton2>
            <GreenBlock></GreenBlock>
            <YellowBlock></YellowBlock>
            <CheckBox1></CheckBox1>
            <CheckBox2></CheckBox2>
            <CheckBox3></CheckBox3>
            <Button1></Button1>
            <Button2></Button2>
            <Button3></Button3>


        </div>
    )
}
