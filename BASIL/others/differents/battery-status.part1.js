
//              STATUS BATTERY
// IN: Our script reads the battery status data(in %)
// FACT: the factory settings indicate how long does a % last
// OUT: calculate how many minutes our devices has left

// variables
// camelCase (whithout prefixes: var, let, const)



baterryCharge = 70             // %    <---- variable

FULL_BATTERY = 100             // 100% - fully charged battery
chargePercentInMinutes = 10    // 1% ~ 10 minutes

etWorkInMinutes        = baterryCharge * chargePercentInMinutes
etWorkInHours          = etWorkInMinutes / 60
alert("remaining time(minutes)" + etWorkInMinutes)
alert("remaining time(hours)" + etWorkInHours)
// ########################################################################################


//              BOX MODEL
// IN: Our script reads the the child content width, padding, border, margin in pixels
//      also te script reads the parent content width
// FACT: we know the mode of the box-sizing (content/border) and the formula
// OUT: print the total width of the child, print if it fits, print the overflow offset

// <div>
//    <div></div> - child
// <div>

// unit px
childWidth = 20
childPadding = 10
childBorder = 1
childMargin = 20

parrentWidth = 110

childSize = childWidth + (childPadding + childBorder + childMargin) * 2
overflow = childSize > parrentWidth     // Boolean


alert("Horizontal child size" + childSize + "px")
alert("child overflow " + overflow)
