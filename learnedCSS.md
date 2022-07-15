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
        * border
        * padding
        

    

            
    





    



![End Banner](/Documentation/botton-1200x350.gif)