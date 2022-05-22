# InfotableSelectionHelperWidget
An extension to simplify infotable selection management.

## Description
This extension provides a widget to simplify infotable selection management.

## Properties
- debugMode - BOOLEAN (default = false): if set to true it sends to the browser's JS console a set of information useful for debugging the widget
- infotable - INFOTABLE (no default value): the infotable
- simplifiedMultipleSelection - BOOLEAN (default = false): true to activate the simplified multiple selection (no CTRL/SHIFT keys needed)
- eqZero - BOOLEAN (default = false): true if no row is selected
- eqOne - BOOLEAN (default = false): true if one and only one row is selected
- gtZero - BOOLEAN (default = false): true if at least one row is selected
- gtOne - BOOLEAN (default = false): true if more than one row is selected
- eqValue - BOOLEAN (default = false): true if the number of selected rows is equal to the value set into the "value" property
- gtValue - BOOLEAN (default = false): true if the number of selected rows is greater than the value set into the "value" property
- ltValue - BOOLEAN (default = false): true if the number of selected rows is less than the value set into the "value" property
- value - INTEGER (default = 0): the rows number to use as comparison for eqValue, gtValue and ltValue

## Services
- SelectFirst: service to select the first row
- SelectNext: service to select the next row
- SelectPrevious: service to select the previous row
- DeselectAll: service to deselect all rows
- SelectAll: service to select all rows

## Events
- EqZero: event thrown when the infotable has zero selected rows
- EqOne: event thrown when the infotable has one selected row
- GtZero: event thrown when the infotable has at least one selected row
- GtOne: event thrown when the infotable has more than one selected row
- EqValue: event thrown when the infotable has the selected rows number set into the "value" property
- GtValue: event thrown when the infotable has more selected rows than the value set into the "value" property
- LtValue: event thrown when the infotable has less selected rows than the value set into the "value" property

## Donate
If you would like to support the development of this and/or other extensions, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).
