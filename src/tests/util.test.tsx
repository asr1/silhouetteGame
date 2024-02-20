import ICharacter from "../interfaces/ICharacter";
import { CheckNames } from "../util/util";

describe('Compare Utility', () => {
    // const testCast: ICharacter[] =
    // [
    //   {
    //     name: "Mr. Incredible",
    //     names: ["Bob", "Mr. Incredible"],
    //     containsNames: ["Incredible", "Parr", "Incredibles", "Robert"],
    //     x: 5,
    //     y: 6,
    //     z: 0,
    //     src: '../images/incredible.png'
    // },
    // {
    //     name: "Spongebob Squarepants",
    //     names: ["Spongebob", "Spongebob Squarepants"],
    //     containsNames: ["Sponge", "Square"],
    //     x: 1,
    //     y: 2,
    //     z: 1,
    //     src: 'sponge.png'
    // },
    // {
    //     name: "Master Chief",
    //     names: ["John Halo", "Master Chief", "Master Cheif", "Chief"],
    //     containsNames: ["Halo", "Chief", "Cheif", "117"],
    //     x: 1,
    //     y: 2,
    //     z: 1,
    //     src: 'masterChief.png'
    // }];

    const testData: ICharacter[] = [
        {
            name: "Testman",
            names: ["Tester"],
            containsNames: ["Test", "Balm"],
            x: 1,
            y: 2,
            z: 1,
            src: 'testMan.png'
        }
    ]
    
    it('matches exact names', () => {
     expect(CheckNames("Testman", testData)).toEqual(["Testman"]);
    });
    
    it('matches exact names irrespective of case', () => {
        expect(CheckNames("tEstMAn", testData)).toEqual(["Testman"]);
    });

    it('matches pseudonyms', () => {
        expect(CheckNames("Tester", testData)).toEqual(["Testman"]);
    });

    it('matches pseudonyms irrespective of case', () => {
        expect(CheckNames("tESTeR", testData)).toEqual(["Testman"]);
    });

    it('matches matches partial strings', () => {
        expect(CheckNames("Test", testData)).toEqual(["Testman"]);
    });

    it('matches matches partial strings irrespective of case', () => {
        expect(CheckNames("TEST", testData)).toEqual(["Testman"]);
    });

    it('matches matches partial strings from longer ones', () => {
        expect(CheckNames("is there no balm in Gilead?", testData)).toEqual(["Testman"]);
    });

    it('returns multiple matches if appropriate', () => {
        const testData2: ICharacter[] = [
            {
                name: "Testman",
                names: ["Tester"],
                containsNames: ["Test", "Balm"],
                x: 1,
                y: 2,
                z: 1,
                src: 'testMan.png'
            }, 
            {
                name: "The Balmer",
                names: ["Balmer"],
                x: 1,
                y: 2,
                z: 1,
                src: 'testMan.png'
            }
        ]
        expect(CheckNames("Balmer", testData2)).toEqual(["Testman", "The Balmer"]);
    });

    it('returns empty array if no matches are found', () => {
        expect(CheckNames("Superman", testData)).toEqual([]);

    })


});