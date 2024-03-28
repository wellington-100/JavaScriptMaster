
# JS Advansed / data table
    > data structures
    > functional
    > OOP
    > DOM
        - structure
        - traversing
        - mutation
        - events
    > vDOM / virtual DOM
    > forms

    > *web storage



window
  v
  v
document <------ (load/parse) html
  |
  +----- app.css (load)
  |
  +----- js-data.js (load)
  |
  +----- app.js (load)
  |
  ...



  MOUNT A DOM FRAGMENT:
            .
            |
            +--- body
                  |
                section#content <----- content
                       |
                       +---- table (root)
                                |
                                +------- tr (child)
                                            |
                                            +-------td (name)
                                            +-------td (photo)
                                            |        |
                                            |        +-----img
                                            |
                                            +-------td (job)
                                            +-------td (experince)
                                            +-------td (salary)
                                            +-------td (contacts)
                                                     |
                                                     +---ul
                                                         |
                                                         +----li (email)
                                                         +----li (whatsapp)     
                                                         |     
                                                         +----li (github)
                                                         |     |
                                                         |     +--- a (github link)
                                                         +----li (linkedin)
                                                               |
                                                               +--- a ((linkedin link



                                        # HW: render contacts as a List inside the same TD