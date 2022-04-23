import React from 'react'
// https://react-icons.github.io/
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks, GiTacos } from 'react-icons/gi';
import { List } from "./styled/List";
import { SLink } from "./styled/SLink";

export default function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
        <SLink to={'/cuisine/Mexican'}>
            <GiTacos/>
            <h4>Mexican</h4>
        </SLink>
    </List>
  )
}
