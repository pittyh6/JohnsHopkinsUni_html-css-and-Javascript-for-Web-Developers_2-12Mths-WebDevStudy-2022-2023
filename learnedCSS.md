# Web Developer Study
## 12 months web developer study. I decided to dedicate at least 12 months to learn web development.

![Begin Banner](/Documentation/top-1200x350.gif)

* Online courses, challenges and creation of my own projects.

## What I learned/used 
### CSS 
* Cascading Style Sheets (CSS) 
    * style of the site
    * Anatomy
        * selector{property: value;}
            *  p{color: red;}
    * Element select
        * element (tag)
        * Class (.className)
        * Id (#idName)
        * grouping selectors (use , to separate selectors)
            * element, .class, #id
    * Combining Selectors
        * element.className
        * element.#idName
    * Child Selector
        * selector > selector
        * article > p {}
    * Descendant Selector
        * selector selector
            * article p{}
    * examples
        * all with class="highlight"
            * .highlight{}
        * all p with class="highlight"
            * p.highlight{}
        * all elements with class="highlight" as well as with class="mainpoint"
            * .highlight.mainpoint{}
        * any article element which is a direct child of a section element.
            * section > article{}
        * any h2 element which is a direct child of a section element
            * section > h2
        * all li elements that are inside a section element
            * section li
    * Pseudo-Class Selectors
        * element:pseudo-className
            * a:link, a:visited{}
            * a:hover, a:active{}
            * :link
            * :visited
            * :hover
            * :active //click but not released
            * :nth-child()
                * :nth-child(numberOfPlaceElementIs)
                    * :nth-child(2)
                    * :nth-child(odd)
                    * :nth-child(even)
            * Combining pseudo-element
                * div:nth-child(4):hover{}
    * Style Placement
        * inline-styles
        * internal
        * external
            * < link rel="stylesheet" href="">
    * Conflict Resolution
        * Origin
        * Merge
        * inheritance
        * specificity
            * style => style="..."
            * id => #id{}
            * class, pseudo-class, atributes => .class{}, :pseudo{}
            * element => p{}
            * !important
    * Styling Text
        * font-family:
        * color: 
            * #0000ff'
            * blue
            * rgba(255,0,0,0.3)
        * font-style:
        * font-height: 
        * font-size:
            * px
            * %
            * em
            * rem
        * text-transform:
            * capitalize
            * lowercase
            * uppercase
        * text-align
            * center
            * right, left...
    * The Box Model
        * margin
            * accumulative
                * horizontal = yes
                * vertical = no // the biggest win.
        * border
        * padding
        * * selector
            * *{box-sizing: border-box}
        * overflow //barra de rolagem
    * The Background Property
        * background-color:
        * background-image: url("....")
        * background-repeat: 
        * background-position: 1position 2position
            * background-position: top right
        * background: url("..") no-repeat right center blue //when use background: you can add a bunch of value fot the element
    * Positioning Elements by Floating
        * float: right/right
        * clear: left/right/both
    * Relative and Absolute Element Positioning
        * static = default position
        * top, right, bottom, left
            * relative =position relative to the normal document flow
            * absolute position
        *   Details of positioning
            static positioning is default for all elements, except html.Html actually has it's positioning set to relative.
            Relative positioning offsets the element relative to it's normal document flow position.And the normal document flow is not affected what soever, by moving or offsetting the relative position element.
            Absolute positioning is relative to it's closest ancestor which has positioning set to a non-static value, which is either absolute or relative.The important thing to remember about absolute positioning is that the element is taken out of it's normal document flow.And the rest of the elements basically behave as if that element doesn't exist.
            Also you saw, offsetting the relative container element offsets its contents as well, which gives you great flexibility to move around a whole set of elements and not just one.
    * Media Queries
        * @media(.....){}
            * (max-width: 800px){}
            * (min-width: 600px){}
            * (orientation: landscape/portrait)
            * screen {}
            * print{}
        * logical Operators
            * and
                * @media (min-width: 768px) and (max-width: 991px){...}
            * , => OR 
                * @media (min-width: 768px) , (max-width: 991){...}
    * Responsive Design
        * Grid => 12 column Grid Responsive
            * nested-layout => 12 column Grid
        * to make the browser understand that do not ned to give a zoon -. To understand that it is to accept the mobile layout
            * < meta name="viewport" content="width=device-width, initial-scale=1"> VERY IMPORTANT





    



![End Banner](/Documentation/botton-1200x350.gif)