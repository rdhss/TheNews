import { GET_DATA_FAILED, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../constant"

const initialState = {
    loading : false,
    data : [],
    // data : [{
    //     "status": "ok",
    //     "totalResults": 36,
    //     "articles": [
    //     {
    //     "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Chris Isidore",
    //     "title": "UAW expands strike, hitting Ford’s largest factory - CNN",
    //     "description": "The United Auto Workers union surprised Ford with a major escalation of its strike, ordering workers off the job at the company’s largest plant.",
    //     "url": "https://www.cnn.com/2023/10/11/business/uaw-strike-kentucky-ford-truck-plant/index.html",
    //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231011184910-01-ford-kentucky-truck-plant-091523-restricted.jpg?c=16x9&q=w_800,c_fill",
    //     "publishedAt": "2023-10-12T04:55:00Z",
    //     "content": "The United Auto Workers union surprised Ford with a major escalation of its strike, ordering workers off the job at the companys largest plant.\r\nLate Wednesday night, the union told 8,700 workers to … [+4464 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "NDTV News"
    //     },
    //     "author": null,
    //     "title": "Jada Pinkett Smith Reveals She's Been Separated From Will Smith Since 2016 - NDTV Movies",
    //     "description": "Pinkett Smith said they were \"still trying to figure out between the two of us how to be in partnership\"",
    //     "url": "https://www.ndtv.com/entertainment/jada-pinkett-smith-reveals-shes-been-separated-from-will-smith-since-2016-4473363",
    //     "urlToImage": "https://c.ndtvimg.com/2023-10/fvvq9iq_will-_625x300_12_October_23.jpg",
    //     "publishedAt": "2023-10-12T04:45:42Z",
    //     "content": "Will Smith and Jada Pinkett Smith. (Courtesy: X)\r\nNew Delhi: Actor Jada Pinkett Smith has been separated from husband Will Smith since 2016 -- six years before the infamous \"Oscars Slap\" -- she revea… [+2802 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "cbs-news",
    //     "name": "CBS News"
    //     },
    //     "author": null,
    //     "title": "Powerball ticket sold in California wins $1.765 billion jackpot, second-biggest in U.S. lottery history - CBS News",
    //     "description": null,
    //     "url": "https://www.cbsnews.com/news/powerball-winner-1-765-billion-jackpot-california/",
    //     "urlToImage": null,
    //     "publishedAt": "2023-10-12T04:32:00Z",
    //     "content": null
    //     },
    //     {
    //     "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Stephen Collinson",
    //     "title": "Chaos in House GOP intensifies with Scalise’s speakership bid in peril - CNN",
    //     "description": "The House Republican Party is sliding even deeper into disarray as it feuds over its next speaker, apparently oblivious to the picture of US government dysfunction it is sending at a moment of worsening global crises.",
    //     "url": "https://www.cnn.com/2023/10/12/politics/house-republican-chaos-scalise-speakership/index.html",
    //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231005205210-lead-image-04-steve-scalise.jpg?c=16x9&q=w_800,c_fill",
    //     "publishedAt": "2023-10-12T04:16:00Z",
    //     "content": "The House Republican Party is sliding even deeper into disarray as it feuds over its next speaker, apparently oblivious to the picture of US government dysfunction it is sending at a moment of worsen… [+8712 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "al-jazeera-english",
    //     "name": "Al Jazeera English"
    //     },
    //     "author": "Al Jazeera",
    //     "title": "NASA unveils sample scooped from surface of near-Earth asteroid Bennu - Al Jazeera English",
    //     "description": "US space agency and scientists say sample taken from Bennu contains abundant water and carbon, as well as iron minerals.",
    //     "url": "https://www.aljazeera.com/news/2023/10/12/nasa-unveils-sample-scooped-from-surface-of-near-earth-asteroid-bennu",
    //     "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2020/10/000_8TG4EB.jpg?resize=1920%2C1440",
    //     "publishedAt": "2023-10-12T04:04:33Z",
    //     "content": "A sample of material collected from the surface of the near-Earth asteroid Bennu has been found to contain abundant water and carbon, the US space agency NASA said, offering more evidence for a theor… [+4337 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "AZCentral"
    //     },
    //     "author": "Nick Piecoro, Theo Mackie",
    //     "title": "Diamondbacks complete sweep of Dodgers, will play for National League pennant - The Arizona Republic",
    //     "description": "The Arizona Diamondbacks completed an NLDS sweep of the Los Angeles Dodgers on Wednesday night, will play Braves or Phillies for NL pennant.",
    //     "url": "https://www.azcentral.com/story/sports/mlb/diamondbacks/2023/10/11/arizona-diamondbacks-los-angeles-dodgers-mlb-national-league-division-series-game-3-news-updates/71077990007/",
    //     "urlToImage": "https://www.azcentral.com/gcdn/authoring/authoring-images/2023/10/12/PPHX/71150321007-d-backs-dodgers-6.JPG?crop=4271,2403,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
    //     "publishedAt": "2023-10-12T03:56:15Z",
    //     "content": "For the first time since 2007, the Diamondbacks will play for the National League pennant. That dream became reality just after 9 p.m. Wednesday night, when Paul Sewald got Kiké Hernández to fly out … [+8603 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "[Removed]"
    //     },
    //     "author": null,
    //     "title": "[Removed]",
    //     "description": "[Removed]",
    //     "url": "https://removed.com",
    //     "urlToImage": null,
    //     "publishedAt": "1970-01-01T00:00:00Z",
    //     "content": "[Removed]"
    //     },
    //     {
    //     "source": {
    //     "id": "politico",
    //     "name": "Politico"
    //     },
    //     "author": null,
    //     "title": "'Netanyahu let us down': Trump chides Israel just days after attack - POLITICO",
    //     "description": "His meandering remarks were the most extensive since the deadly weekend attacks.",
    //     "url": "https://www.politico.com/news/2023/10/11/netanyahu-trump-chides-israel-hamas-war-00121142",
    //     "urlToImage": "https://static.politico.com/07/b9/164999014994b99af99e86ca5cbf/election-2024-trump-04142.jpg",
    //     "publishedAt": "2023-10-12T03:35:30Z",
    //     "content": "But he also meandered among various topics, zig-zagging from the weekend terrorist attack in Israel that has captured the worlds attention to criticisms of his GOP rivals, crime in Washington, D.C., … [+4275 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Brad Lendon",
    //     "title": "How does Hamas get its weapons? A mix of ingenuity, resourcefulness and a key overseas mentor - CNN",
    //     "description": "The brutal rampage by Islamist militant group Hamas on Israel last weekend involved thousands of rockets and missiles, drones dropping explosives, and untold numbers of small arms and ammunition.",
    //     "url": "https://www.cnn.com/2023/10/11/middleeast/hamas-weaponry-gaza-israel-palestine-unrest-intl-hnk-ml/index.html",
    //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231011011654-01-hamas-weapons-cnn-hk.jpg?c=16x9&q=w_800,c_fill",
    //     "publishedAt": "2023-10-12T03:22:00Z",
    //     "content": "The brutal rampage by Islamistmilitant group Hamas on Israel last weekend involved thousands of rockets and missiles, drones dropping explosives, and untold numbers of small arms and ammunition.\r\nBut… [+5978 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Deadline"
    //     },
    //     "author": "Dominic Patten",
    //     "title": "SAG-AFTRA & Studio Talks “Much Rockier Than Usual” Today; Pause “Likely” In Negotiations - Deadline",
    //     "description": "After a rough day of negotiations Wednesday, the actors guild and the studios have pulled the plug for now. Things were distinctly “much rockier than usual” today a veteran dealmaker says. Another …",
    //     "url": "https://deadline.com/2023/10/actors-strike-talks-break-down-likely-1235570627/",
    //     "urlToImage": "https://deadline.com/wp-content/uploads/2023/10/SAG-AFTRA-HQ.jpg?w=1024",
    //     "publishedAt": "2023-10-12T03:10:00Z",
    //     "content": "After a rough day of negotiations Wednesday, the actors guild and the studios have pulled the plug for now. \r\nThings were distinctly “much rockier than usual” today a veteran dealmaker says. Another … [+3803 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-washington-post",
    //     "name": "The Washington Post"
    //     },
    //     "author": "Karen DeYoung, Claire Parker",
    //     "title": "Blinken flies to Israel as Gaza humanitarian crisis worsens - The Washington Post",
    //     "description": "The top U.S. diplomat spoke of “complicated” negotiations with Egypt and Israel to allow aid into Gaza while Israeli airstrikes intensify.",
    //     "url": "https://www.washingtonpost.com/national-security/2023/10/11/humanitarian-crisis-gaza-rafah-crossing/",
    //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OZHUY74455E2FDJX6OD4CSHPTY_size-normalized.jpg&w=1440",
    //     "publishedAt": "2023-10-12T02:36:00Z",
    //     "content": "Comment on this story\r\nComment\r\nSecretary of State Antony Blinken headed to Israel on Wednesday as a show of support in the wake of the brazen Hamas attack, even as the Biden administration tried to … [+6622 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Hollywood Reporter"
    //     },
    //     "author": "Kirsten Chuba",
    //     "title": "Taylor Swift’s ‘Eras Tour’ Premiere: Superstar Arrives for L.A. Red Carpet Event - Hollywood Reporter",
    //     "description": "The concert film is world premiering at The Grove on Wednesday night.",
    //     "url": "https://www.hollywoodreporter.com/movies/movie-news/taylor-swift-eras-tour-premiere-1235612750/",
    //     "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Taylor-Swift-arrived-at-Taylor-Swift-The-Eras-Tour-getty-H-2023.jpg?w=1024",
    //     "publishedAt": "2023-10-12T01:18:45Z",
    //     "content": "Taylor Swift made a movie star appearance at the world premiere of her The Eras Tour concert film on Wednesday at The Grove’s AMC Theatre.\r\nThe superstar — who just before the Los Angeles event annou… [+2130 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "fox-news",
    //     "name": "Fox News"
    //     },
    //     "author": "Angelica Stabile",
    //     "title": "Here are the best and worst US states for mental health, as revealed in a new report - Fox News",
    //     "description": "A new study from Soliant Health revealed the best and worst U.S. states or mental health in 2023. Fox News Digital breaks down the findings and shares input from a doctor.",
    //     "url": "https://www.foxnews.com/health/best-worst-us-states-mental-health-revealed-new-report",
    //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/happy-sad-split.jpg",
    //     "publishedAt": "2023-10-12T01:07:00Z",
    //     "content": "Where you live could have a lot to do with how you feel.\r\nA recent study from Soliant Health, a health care staffing and research company based in Atlanta, Georgia, has revealed this years best and w… [+4880 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-wall-street-journal",
    //     "name": "The Wall Street Journal"
    //     },
    //     "author": "Vivian Salama",
    //     "title": "U.S. Looks at Risks of Deeper Involvement With Israel's War on Hamas - The Wall Street Journal",
    //     "description": "Biden administration mixing diplomacy, deterrence to prevent wider conflict",
    //     "url": "https://www.wsj.com/world/middle-east/u-s-looks-at-risks-of-deeper-involvement-with-israels-war-on-hamas-eaf00b73",
    //     "urlToImage": "https://images.wsj.net/im-866888/social",
    //     "publishedAt": "2023-10-12T00:53:00Z",
    //     "content": null
    //     },
    //     {
    //     "source": {
    //     "id": "entertainment-weekly",
    //     "name": "Entertainment Weekly"
    //     },
    //     "author": "Maureen Lee Lenker",
    //     "title": "Jeremy Allen White agrees to daily sobriety testing in custody filings - Entertainment Weekly News",
    //     "description": "<em>The Bear </em>star will use a device called SoberLink.",
    //     "url": "https://ew.com/celebrity/jeremy-allen-white-daily-sobriety-testing-custody-filings/",
    //     "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C38%2C2000%2C1038&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F10%2F12%2Fjeremy-allen-white-sobriety-test-101123.jpg",
    //     "publishedAt": "2023-10-12T00:37:00Z",
    //     "content": "Jeremy Allen White has reached a custody agreement — and it requires him to maintain his sobriety.\r\nThe Bearstar shares two daughters, Ezer Billie, 4, and Dolores Wild, 2, with his estranged wife Add… [+1480 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Yahoo Sports Staff",
    //     "title": "MLB playoffs 2023: Bryce Harper leads Phillies to NLDS Game 3 win over Braves, 2-1 series lead - Yahoo Sports",
    //     "description": "The D-backs are moving on to the NLCS. The Phillies will look to punch their ticket in Thursday's Game 4.",
    //     "url": "https://sports.yahoo.com/mlb-playoffs-2023-diamondbacks-eliminate-dodgers-phillies-take-2-1-lead-over-braves-in-nlds-game-3s-002833419.html",
    //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/rUMEKLvfyXjZNt3s8bELWQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-10/213346a0-68b2-11ee-abfb-e9d33aaee256",
    //     "publishedAt": "2023-10-12T00:28:00Z",
    //     "content": "It was a longball party Wednesday in Philadelphia, as the Phillies clobbered six home runs tying the record for most in a game in MLB postseason history en route to a 10-2 Game 3 demolishing of the B… [+5742 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Space.com"
    //     },
    //     "author": "Josh Dinner",
    //     "title": "Bad weather delays SpaceX Falcon Heavy launch of NASA's Psyche asteroid mission to Oct. 13 - Space.com",
    //     "description": "The big rocket is going to get pummeled by some storms overnight.",
    //     "url": "https://www.space.com/nasa-psyche-spacex-falcon-heavy-launch-delay-weather",
    //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/o22zmjxUNdgmviL7UayinY-1200-80.jpg",
    //     "publishedAt": "2023-10-12T00:27:30Z",
    //     "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
    //     },
    //     {
    //     "source": {
    //     "id": "mashable",
    //     "name": "Mashable"
    //     },
    //     "author": "Kimberly Gedeon",
    //     "title": "Google Pixel 8 reviews are in — 3 things critics hate about the Android device - Mashable",
    //     "description": "We read all the Google Pixel 8 reviews so you don't have to.",
    //     "url": "https://mashable.com/article/pixel-8-reviews-are-in",
    //     "urlToImage": "https://helios-i.mashable.com/imagery/articles/058WqspR3G5KQOYDBrX4miZ/hero-image.fill.size_1200x675.v1697067908.webp",
    //     "publishedAt": "2023-10-12T00:13:44Z",
    //     "content": null
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "CBS Sports"
    //     },
    //     "author": "",
    //     "title": "Twins vs. Astros live stream: TV channel, how to watch MLB playoffs without cable, time, pitchers, odds - CBS Sports",
    //     "description": "The Astros are one win away from their seventh straight ALCS appearance",
    //     "url": "https://www.cbssports.com/mlb/news/twins-vs-astros-live-stream-tv-channel-how-to-watch-mlb-playoffs-without-cable-time-pitchers-odds/",
    //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/10/11/6ddba633-e543-44e6-a5fd-7072d9b197c3/thumbnail/1200x675/494a1a7e1cb5597dac970de075a81b0b/yordan-alvarez-getty.png",
    //     "publishedAt": "2023-10-11T23:51:00Z",
    //     "content": "The Houston Astros are one win away from a seventh consecutive American League Championship Series. Houston as a 2-1 lead over the Minnesota Twins in the best-of-five Division Series and will look to… [+1606 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "YouTube"
    //     },
    //     "author": null,
    //     "title": "St. Louis region to see partial solar eclipse - KMOV St. Louis",
    //     "description": "St. Louis region to see partial solar eclipse   For more Local News from KMOV:  https://www.kmov.com/ For more YouTube Content: https://www.youtube.com/chann...",
    //     "url": "https://www.youtube.com/watch?v=wHtAPf4_YpY",
    //     "urlToImage": "https://i.ytimg.com/vi/wHtAPf4_YpY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGMgYyhjMA8=&rs=AOn4CLCI7N9mzQJD_-BT-dn0pCTpu-R_EA",
    //     "publishedAt": "2023-10-11T23:12:50Z",
    //     "content": null
    //     }
    //     ]
    //     }],
    error : ''
}


const NewsReducer= (state = initialState, action) => {
    const _actions = {
        [GET_DATA_REQUEST] : () => {
            return {
                ...state,
                loading : true
            }
        },
        [GET_DATA_SUCCESS] : () => {
            return {
                loading : false,
                data : action.payload,
            }
        },
        [GET_DATA_FAILED] : () => {
            return {
                loading : false,
                data : [],
                error : action.payload
            }
        },
        DEFAULT: () =>state,
    }
    return (_actions[action.type] || _actions.DEFAULT)()
}

export default NewsReducer