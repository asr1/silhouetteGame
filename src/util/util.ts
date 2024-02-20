import ICharacter from "../interfaces/ICharacter";

// Returns a list of names that should be revealed based on input.
export function CheckNames(input: string, cast: ICharacter[]) {
    let matchedCharacters = new Set();

    cast.forEach( (char) => {
        
        // Exact name match
        if(char.name.toUpperCase() === input.toUpperCase()) {
            matchedCharacters.add(char.name);
        }

        // Pseudonym match
        char.names.forEach((name) => {
            if(name.toUpperCase() === input.toUpperCase()) {
                matchedCharacters.add(char.name);
            }
        })
    
        // Partial string match: if they type the guy from Halo we return Master Chief on "Halo"
        if(char.containsNames) {
            char.containsNames.forEach( (name) => {
                if(input.toLocaleUpperCase().includes(name.toUpperCase())) {
                    matchedCharacters.add(char.name);
                }
            });
        }
        

        
    });

    return Array.from(matchedCharacters);
}