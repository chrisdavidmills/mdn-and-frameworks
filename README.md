# MDN and frameworks
This repo contains ideas and experiments around hosting JS framework content on MDN.

## MDN Web Docs
[MDN Web Docs](https://developer.mozilla.org/en-US/) is a well-known resource for web development knowledge, especially in the realm of JavaScript.

### MDN's current position on frameworks
MDN has great docs on the JavaScript language, and native browser APIs, but we tend not to touch frameworks (client-side JavaScript or otherwise) for a variety of reasons:

1. The web platform is a pretty large remit already; we don’t have time to take on large-scale framework documentation.
2. Web platform content is fairly stable, and changes slowly. Frameworks and framework trends change rapidly, so maintenance of the content would be a nightmare potentially.
3. Framework vendors tend to have their own established documentation, so it would be a waste of effort repeating such content on MDN.
4. MDN tries to be an unbiased source of truth for the web platform. It is easy to come under fire with accusations of bias if you start to cover frameworks (and this has happened before for comparatively minor coverage).

### Future direction

However, the reality is that frameworks are used extensively for real world web development.

In talks with web development educations (e.g. lecturers at universities), we’ve found that most reputable web-related courses try to teach a solid grounding in raw JS, but also the confidence and abilities to understand frameworks and what they are used for, how to research and learn new things on your own, how to quest to constantly keep your skill set up to date, etc. 

This is far more useful than just teaching students the framework du jour, for obvious reasons.

Could we provide useful framework content on MDN that sits alongside the raw web standards content and is maintainable?

## Aims of the project
### From MDN's perspective
* Better, more relevant docs
* Bigger user base

### From Framework vendor's perspective
* More exposure?
* Better docs availability?
* Allow core devs to spend more time coding framework bug fixes and enhancements, and less time answering queries. 

## Risks of the project
* Lack of interest
* Overhead of reviewing and maintaining the content
* Consistency of content
* Scope. I mean, it’s not just about frameworks, but potentially also framework and toolchain combinations.


## Who would be responsible for this content?

I was hoping we could largely run it as a community project, with framework communities being in charge of their own content, and MDN editors providing advice, reviews, liaison, etc. The MDN core writers would not have the time or knowledge to do this without any outside help.


## Directions to take

### Carrying out research

We could interview web developers, asking questions like:

* Do you use frameworks for development?
* Do you use MDN?
* What frameworks do you use?
* Do you think it would be useful to have framework documentation on MDN, and why?
* Any thoughts on what kind?
* What specific framework documentation do you find particularly useful?
* What do you find hardest or most annoying about using frameworks?

We could also ask framework vendors what their most common pain points are with people learning their frameworks, in terms of:

* Web platform features that don’t work well inside frameworks
* Visibility of features
* Knowing when a feature is obsolete, so should no longer be used.
* What their FAQs are

### Creating a guide to modern JS tooling
The MDN [Learning area](https://developer.mozilla.org/en-US/docs/Learn) is our place on MDN for complete beginners to get started. We believe that learning code from the ground up is the best way to start, so we lead with courses in raw HTML, CSS, and JavaScript.

However, we also cover a number of side-topics that we believe are essential for web devs to know, e.g. accessibility, server-side web development, and testing.

Alongside this, I'd love to have material on modern tooling, covering the types of tools modern web developers use, how they use them, and what they do for us. This would include frameworks

I've so far not tried to write this because of worries about maintenance difficulty and suspected bias. We'd have to write this carefully, looking at the concepts from a high level and linking to other resources for the specifics.

### Documenting frameworks on MDN...
... that don't already have good docs elsewhere.

Because there wasn't a place on MDN for web-related technologies that aren't actual web platform features, I created the [Web-related technologies](https://developer.mozilla.org/en-US/docs/Related) section to provide a place.

We so far only have one technology in the section — [IMSC](https://developer.mozilla.org/en-US/docs/Related/IMSC) — but we are hoping to get EPUB3 docs soon, and we'd also love to try hosting some resources covering smaller JS libraries that don't already have a place for docs. 

### Adding useful asides to existing articles

I think the main way we coould add content to MDN would be to add useful tips, snippets, and gotchas to pages of related content. I've already started creating some example at [Framework tests and research](https://developer.mozilla.org/en-US/docs/User:chrisdavidmills/Framework_tests_and_research), to show what this could look like.

This would include things like:

* Multiple examples on a reference page that show how to do X with raw JS, and then React, Vue, etc.
* Separate sections entirely for framework equivalents, on the same page or a separate page
* Links back to framework documentation, to where they talk about framework-specific equivalents.
* "Here’s the side effect of using function X in this framework", or "beware because this method exists on the prototype in this framework"
* Common gotchas or FAQs about frameworks

### Creating the content in a structured data format

One of the biggest risks with this project (for the useful asides) is that it won't get enough uptake to be a success; that we'll only get a small amount of content, that it won't be complete enough to be useful. 

We need a way to test this, so that if it doesn't work we can remove it again without too much worry.

Rather than add the content statically to each relevant document, I propose that we create the asides in some kind of a structured data source that can be dynamically added to relevant pages via a macro, in the same way as our [browser compat data](https://github.com/mdn/browser-compat-data) tables.

This way, we could also use the data in other places. We could populate MDN with useful framework content, but also use it to build say a set of React FAQ pages, which the community could work on to keep up-to-date.

The experimental [MDN Stumptown project](https://github.com/mdn/stumptown-experiment) does a similar thing and then pulls together the pages using yaml and Python. Eventually my frameworks idea could be pulled into that.  

## Next steps

*  Interview web developers about framework content on MDN. 
*  Interview framework vendors about framework content on MDN.
*  Agree on JSON schema for holding the data
* Get some contacts at frameworks who are willing to help put together a number of sample entries.
* Create a test macro on MDN to start putting some of this data on pages, then send it to some reviewers to see what people think.
* Find some authors to help create a learning area guide to modern tools.

## See also 
* [MDN and framework content](https://docs.google.com/document/d/1Pmeu90QQXXdivIPVhIGZilT2n1PgpBGSeOVm3DQ2W7I/edit#heading=h.yw4sygim7yyb) for initial thoughts, background, and ideas.
* [MDN and Frameworks exploration](https://docs.google.com/document/d/1mgQda73zBuWHJsr1kjDPmEIZFWgHiLKVVu6KGTmyFgo/edit#) for further ideas and reesearch
* [Framework tests and research](https://developer.mozilla.org/en-US/docs/User:chrisdavidmills/Framework_tests_and_research) for early examples of what the content might look like on MDN pages.
