// function that cecks if a person full name is written corectly

function checkFullName(fullName){
    if (fullName.startsWith(" ") || fullName.endsWith(" ")){
        console.error("Incorrect spelling!")
    } else {
        let fragments = fullName.split(" ")
        if (fragments.length != 2) {
            console.error("Incorrect spelling!")
        } else {
            if (fragments[0].length < 2 || fragments[1].length < 2) {
                console.error("Incorrect spelling!")
            } else {
                if (
                    fragments[0][0].toLowerCase() == fragments[0][0] ||
                    fragments[1][0].toLowerCase() == fragments[1][0]
                    ) {
                    console.error("Incorrect spelling!")
                } else {
                    console.log("Valid name")
                }
            }
        }
    }
}

// HW: draw the function inner flow

/*
call
 |
 v
checkFullName(fullName)
 |
 +--> fullName.startsWith(" ") || fullName.endsWith(" ") -- YES --> "Incorrect spelling!" -- END
 |         |
 |         NO
 |         v
 |     Split fullName into fragments
 |         |
 |         +--> Number of fragments != 2 -- YES --> "Incorrect spelling!" -- END
 |                 |
 |                 NO
 |                 v
 |             Check if each fragment is < 2 characters
 |                 |
 |                 +--> Any fragment < 2 characters -- YES --> "Incorrect spelling!" -- END
 |                         |
 |                         NO
 |                         v
 |                     Check if first character of each fragment is lowercase
 |                         |
 |                         +--> First character lowercase in any fragment -- YES --> "Incorrect spelling!" -- END
 |                                     |
 |                                     NO
 |                                     v
 |                                 "Valid name"
 |
END

*/