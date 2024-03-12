






/*  from HTML to DOM

                                                                                     BROWSER
                                                                                        |
social         +-------------------------------- request (GET) -------------------------+
    |          v
    +---- index.html(file) --------------------- response (HTML) --------------> index.html(copy/memory)
                                                                                        |
                                                                                        |
                                                                                        v
                                                       (memory) DOM <-----------    1. parse
                                                                 | ^                   - interpretation
                                                                 | |                   -error autocorrection
                                                                 | |                2. render
                                                                 | |                    |
                                                                 | |                    |
                                                                 | +--------------------+
                                                                 +----- render --->  window (ui)
                                                                                        |  ^
                                                                                        |  |  actions
                                                                                        v  | 
                                                                                       USER                         


    <h1> ... </h1> -------------------------> 
                                HTMLHeadingElement {........}

-----------------------------------------------------------------------------------------------------------------

JS (Vanilla) in front is:
    * WEB APIS (AJAX, FETCH, CANVAS, MEDIA, ANIMATION, GEOLOCATION...)
    * BOM - Browser Object Model
    * DOM - Document Object Model
    
DOM 
                            LOAD
    <html code> ----> parsing/interpreting ----> DOM (memory) ---------> render -----> WINDOW -----> USER
        + css{}                                   ^                                                   |
        + JS                                       +---- propagation <--- actions (clicks, scroll,...)+
        + svg                                     ^
        + ...                                     ^
                                                JS Code

*/
