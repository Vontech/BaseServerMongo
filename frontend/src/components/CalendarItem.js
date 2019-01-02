import React, { Component } from "react";
import { CalendarItemModel } from "../models/CalendarItemModel";

export function getTitleElement(data: CalendarItemModel, additionalStyles: any) {
  return(<h1 style={additionalStyles}>{data.title}</h1>);
}

export function getTimeElement(data: CalendarItemModel, additionalStyles: any) {
  return(<h1 style={additionalStyles}>{data.startTime} - {data.endTime}</h1>);
}

export function getContainerStyle(data: CalendarItemModel) {
  return {
    background: data.color,
    padding: 12,
    width: 200,
    margin: 'auto',
    textAlign: 'left',
    
  }
}
