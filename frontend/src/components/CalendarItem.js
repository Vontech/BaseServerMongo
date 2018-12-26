import React, { Component } from "react";
import { CalendarItemModel } from "../models/CalendarItemModel";

export function getTitleElement(data: CalendarItemModel) {
  return(<h1 style={{color: 'white'}}>{data.title}</h1>);
}

export function getContainerStyle(data: CalendarItemModel) {
  return {
    borderRadius: 6,
    background: 'red',
    padding: 12
  }
}
