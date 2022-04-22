import React from 'react'
// https://react-icons.github.io/
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks, GiTacos } from 'react-icons/gi';
import styled from "styled-components";
import { List } from "./styled/List";
import { NavLink } from "react-router-dom";

export default function Category() {
  return (
    <List>
        <NavLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>America</h4>
        </NavLink>
        <NavLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </NavLink>
        <NavLink to={'/cuisine/Mexican'}>
            <GiTacos/>
            <h4>Mexican</h4>
        </NavLink>
    </List>
  )
}
