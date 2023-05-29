import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articals = [
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Christine Hall",
      "title": "Daily Crunch: Meta to pay $725M settlement in Cambridge Analytica data access case",
      "description": "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
      "url": "https://techcrunch.com/2022/12/23/meta-to-pay-725m-settlement-in-cambridge-analytica-data-access-case/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/02/GettyImages-1368412925.jpg?resize=1200,789",
      "publishedAt": "2022-12-23T21:38:00Z",
      "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT,subscribe here.\r\nToday we celebrate a bit of oversight over an industry that has bee… [+4206 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Greg Kumparak",
      "title": "TechCrunch's Favorite Things of 2022",
      "description": "We made it! Another year (nearly!) complete. Go team! The end of the year means many things — holidays, food, family, reflection, etc. Around these parts, it also means it’s time for the TechCrunch Favorite Things list. Each year Team TechCrunch puts together…",
      "url": "https://techcrunch.com/2022/12/23/techcrunchs-favorite-things-of-2022/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/gift-guide-22-favorite-things.jpg?resize=1200,645",
      "publishedAt": "2022-12-23T20:05:40Z",
      "content": "We made it! Another year (nearly!) complete. Go team!\r\nThe end of the year means many things holidays, food, family, reflection, etc. Around these parts, it also means it’s time for the TechCrunch Fa… [+26295 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Ingrid Lunden",
      "title": "How Mastodon is scaling amid the Twitter exodus",
      "description": "Under Elon Musk, Twitter has lost more than half its staff through layoffs and quitting, made erratic moves in its product and platform strategies and is facing up to reports about its financial state.",
      "url": "https://techcrunch.com/2022/12/23/how-mastodon-is-scaling-amid-the-twitter-exodus/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/mastodon-app-ios.jpg?resize=1200,675",
      "publishedAt": "2022-12-23T19:46:20Z",
      "content": "Twitter is in crisis these days. Under new owner Elon Musk, the service has lost more than half its staff through layoffs and quitting, made erratic moves in its product and platform strategies and i… [+9790 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Ingrid Lunden",
      "title": "Mastodon creator Eugen Rochko talks funding and how to build the anti-Twitter",
      "description": "Mastodon’s success has somewhat taken its creator Eugen Rochko by surprise, but he's steadfast on maintaining its non-profit nature.",
      "url": "https://techcrunch.com/2022/12/23/mastodon-creator-eugen-rochko-talks-funding-and-how-to-build-the-anti-twitter/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/eugen-rochko-mastodon.jpg?resize=1200,645",
      "publishedAt": "2022-12-23T19:45:26Z",
      "content": "Eugen Rochko came up with the idea for and built Mastodon some six years ago during another one of Twitter’s dips. A developer who had already been interested in and was working with open source soft… [+3767 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Walter Thompson",
      "title": "TechCrunch+ roundup: Headcount data study, SaaS sales mistakes, financial close strategies",
      "description": "Startups that don't have PMF, supportive investors or a manageable burn rate should already be planning to reduce headcount.",
      "url": "https://techcrunch.com/2022/12/23/techcrunch-roundup-headcount-data-study-saas-sales-mistakes-financial-close-strategies/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/GettyImages-119684387.jpg?resize=1200,793",
      "publishedAt": "2022-12-23T17:47:00Z",
      "content": "For the last 24 months, Thomvest Ventures recorded headcount data for 150 Series A to C enterprise SaaS startups, and we have the numbers.\r\nThis report prepared by Eddie Ackerman, Thomvest’s strategi… [+5829 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Haje Jan Kamps",
      "title": "Backed by Electrolux, Mila raises at a $52M valuation to add smarts to fresh air",
      "description": "Mila created an air cleaner with a choice of filters to suit the use case and price point customers were interested in, along with an array of sensors.",
      "url": "https://techcrunch.com/2022/12/23/mila-series-a/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/mila-hero-Large.jpeg?resize=1200,659",
      "publishedAt": "2022-12-23T17:33:22Z",
      "content": "Three years ago, Mila showed up on Kickstarter with its smart air purifier. The company created an air cleaner with a choice of different filters to suit the use case (and price point) customers were… [+6762 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Annie Njanja",
      "title": "Questions linger over Facebook, Twitter, TikTok's commitment to uphold election integrity in Africa, as countries head to polls",
      "description": "A dozen countries in Africa including Nigeria are expected to hold their presidential elections next year.",
      "url": "https://techcrunch.com/2022/12/23/questions-linger-over-facebook-twitter-tittoks-commitment-to-uphold-election-integrity-in-africa-as-countries-head-to-polls/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/06/gettyimages-1230783269-594x594-1.jpg",
      "publishedAt": "2022-12-23T17:01:56Z",
      "content": "A dozen countries in Africa including Nigeria, the continents biggest economy and democracy, are expected to hold their presidential elections next year, and questions linger on how well social media… [+8043 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Devin Coldewey",
      "title": "The FCC can finally hammer predatory prison phone call companies, thanks to just-passed bill",
      "description": "A brand new law will let the Federal Communications Commission directly regulate rates in the notoriously predatory prison calling industry.",
      "url": "https://techcrunch.com/2022/12/22/the-fcc-can-finally-hammer-predatory-prison-phonecall-companies-thanks-to-just-passed-bill/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/inmate-video-call.jpg?resize=1200,675",
      "publishedAt": "2022-12-22T23:29:08Z",
      "content": "A brand-new law (awaiting only the president’s signature) will let the Federal Communications Commission directly regulate rates in the notoriously predatory prison calling industry. Under the threat… [+4366 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Dominic-Madori Davis",
      "title": "3 Black investors share what they are prepping for come the new year",
      "description": "For 2023, it appears investors are focusing on trends that are relatively safer and likelier to bear fruit.",
      "url": "https://techcrunch.com/2022/12/23/3-black-investors-share-what-they-are-prepping-for-come-the-new-year/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/06/GettyImages-957043250.jpg?resize=1200,750",
      "publishedAt": "2022-12-22T18:42:04Z",
      "content": "This years been eventful for investors and founders alike. Just as it seemed the venture capital boom of 2021 was slowing down, the startup and VC worlds spun on their axes practically overnight, bir… [+1751 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Ron Miller",
      "title": "While Amazon had a rocky year, AWS remains reliable cash cow",
      "description": "Although Amazon as a whole has hit a bit of a post-peak pandemic rough patch, AWS keeps delivering.",
      "url": "https://techcrunch.com/2022/12/23/while-amazon-had-a-rocky-year-aws-remains-reliable-cash-cow/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/IMG_1039.jpeg?resize=1200,1006",
      "publishedAt": "2022-12-22T18:11:50Z",
      "content": "Back in March 2020, when the world shut down, Amazon became the worlds go-to online store. When people couldnt leave their homes, it became imperative to have goods come to them, and Amazon thrived. … [+2364 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articals: this.articals,
      loading: false
    }
  }

  render() {
    return (
      <div className="container">
        <h1>HeadLines</h1>
        <div iv className="row">
          {this.state.articals.map((element) => {
            return( <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>)
          })}

        </div>
      </div>

    )
  }
}

export default News
