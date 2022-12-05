// src/mocks/handlers.js
import { rest } from 'msw';
import { API_URL } from '../app/constants';

const quoteRamdon = {
    quote: "I don't want to sound like a killjoy, but becuase this is not to my taste I don't think anyone else should be allowed to enjoy it.",
    character: "Marge Simpson",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
    characterDirection: "Right"
};

const quoteCharacter ={
    quote: "Ahh! Sweet liquor eases the pain.",
    character: "Troy McClure",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
    characterDirection: "Right"
    };

    const handlers =[
        rest.get(API_URL, (req, res, ctx) => {
    
            if (req.url.searchParams.get("character")) {
             
              return res(
                ctx.status(200),
                ctx.json({
                  result: 'quoteCharacter',
                }),
              )
            }
            
            return res(
              ctx.status(200),
              ctx.json({
                result: 'quoteRamdon',
              }),
            )
          }),
        
    ];

    export {quoteRamdon, quoteCharacter, handlers};


