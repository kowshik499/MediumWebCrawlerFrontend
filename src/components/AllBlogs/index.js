import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'

import Head from '../Head'
import BlogCard from '../BlogCard'

import './index.css'

const culture = [
  {
    id: '7177b2e1-8a1c-4a29-b449-9f69b8ed312c',
    blogName: 'If It Feels Like a New Dark Age Is Falling… That’s Because It Is',
    blogLink: 'https://medium.com//eudaimonia-co/if-it-feels-like-a-new-dark-age-is-falling-thats-because-it-is-458c7c9433b1?source=topics_v2---------0-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    authorName: 'umair haque',
    authorBlogLink: 'https://medium.com//@umairh?source=topics_v2---------0-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    publishedTime: '·22 hours ago',
    readTime: '11 min read',
    relatedTag: 'Life',
    blogDescription: 'Why We’re Entering a Dark Age Between Civilizations —  See that chart above? That’s the Keeling Curve. It shows the concentration of carbon dioxide in the atmosphere. As you can see, it shows no signs of slowing down in any way whatsoever. The problem is that even when it does, there will be an overshoot of years, maybe even…'
  },
  {
    id: '2263c8f6-856a-4214-849f-4aba9911a48a',
    blogName: 'Kendrick Lamar and “the Culture” of Generational Trauma',
    blogLink: 'https://medium.com//the-riff/kendrick-lamar-and-the-culture-of-generational-trauma-9906d0e5bba?source=topics_v2---------1-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    authorName: 'Jeffrey Harvey',
    authorBlogLink: 'https://medium.com//@mediamaven0103?source=topics_v2---------1-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    publishedTime: '·18 hours ago',
    readTime: '7 min read',
    relatedTag: 'Music',
    blogDescription: 'Initial thoughts on Mr. Morale & The Big Steppers, empathy, and Kendrick’s place in the culture —  There’s a sequence towards the end of Kendrick Lamar’s new album, Mr. Morale & The Big Steppers, that succinctly captures the overarching thesis of the Compton MC’s fourth and final project for TDE/Interscope Records. It culminates on the penultimate track, “Mother | Sober,” in which each of the final two…'
  },
  {
    id: 'c6dbac1f-52f3-4810-8f50-0fe1303e915e',
    blogName: 'This Is How a Totalitarian Society Is Born',
    blogLink: 'https://medium.com//eudaimonia-co/this-is-how-a-totalitarian-society-is-born-8ddf2bd9d812?source=topics_v2---------2-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    authorName: 'umair haque',
    authorBlogLink: 'https://medium.com//@umairh?source=topics_v2---------2-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    publishedTime: '·1 day ago',
    readTime: '9 min read',
    relatedTag: 'Life',
    blogDescription: 'What Do the Lunatics Taking Over Our Societies Want? The Dark Ages —  Yes, it’s a revolution. Rights under their greatest attack in modern history. Soon, women won’t have autonomy — and after? Right about now, you’re probably wondering: what do these lunatics, these religious fanatics, the extremists that the right has become even want? You’re probably wondering because on the face of…'   
  },
  {
    id: '814facf2-fbf2-4ae1-9c89-85193ae4abea',
    blogName: 'I Look At This Painting Everyday',
    blogLink: 'https://medium.com//@christopherpjones/i-look-at-this-painting-everyday-e74794eb68d2?source=topics_v2---------3-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    authorName: 'Christopher P Jones',
    authorBlogLink: 'https://medium.com//@christopherpjones?source=topics_v2---------3-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    publishedTime: '·10 hours ago',
    readTime: '4 min read',
    relatedTag: 'Art',
    blogDescription: 'Edward Hopper’s perfectly painted dilemma, yet I cannot say what it is exactly —  For a few years now, I’ve had a postcard of this painting tacked to my study wall. It’s called Pennsylvania coal town and it was made by Edward Hopper in 1947. Whenever I stop my work and look up at this painting, I can’t help but feel that Hopper painted…'
  },
  {
    id: 'a21c506d-d559-4219-acd6-5246354a6269',
    blogName: 'Akihasan Hongu Akiha Shrine',
    blogLink: 'https://medium.com//@donnyjkimball/akihasan-hongu-akiha-shrine-bc5415935322?source=topics_v2---------4-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    authorName: 'A Different Side of Japan',
    authorBlogLink: 'https://medium.com//@donnyjkimball?source=topics_v2---------4-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    publishedTime: '·12 hours ago',
    readTime: '8 min read',
    relatedTag: 'Travel',
    blogDescription: 'One of Hamamatsu’s Top Hidden Gems —  Today, we’ll be venturing back to Hamamatsu in Shizuoka Prefecture. Though this city is already somewhat of an off of the beaten path destination, the topic of this article is an even more obscure hidden gem (at least as far as inbound tourism to Japan is…'
  },
  {
    id: 'b43116af-3c59-42aa-a2c4-9b00e021f16d',
    blogName: '건강한 챕터조직이 목적조직에 미치는 긍정적인 영향',
    blogLink: 'https://medium.com//@h2s1880/어느-조직이든-이쪽과-저쪽의-사이를-좋게-하는-사람이-있다면-그-조직은-망하지-않아-건강한-챕터조직이-목적조직에-미치는-긍정적인-영향-1a6d37d3806a?source=topics_v2---------5-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    authorName: 'Hyeonsu Ha',
    authorBlogLink: 'https://medium.com//@h2s1880?source=topics_v2---------5-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    publishedTime: '·8 hours ago',
    readTime: '7 min read',
    relatedTag: '프로그래밍',
    blogDescription: '인터넷에서 국내에서 챕터 조직이 잘 운용된 사례 및 챕터가 각 목적조직이 미치는 긍정적인 영향에 대한 이야기가 적어서  아쉬운 마음을 달래보고자 이번엔 “건강한 챕터조직이 목적조직에 미치는 긍정적인 영향"에 대해서 글을 적어보았어요. 챕터(Chapter)? 인터넷상에 서 챕터조직에 대해서 검색해보면 가장 대표적으로 스포티파이의 매트릭스 구 …'
  },
  {
    id: '468bc4ae-030f-4035-8df4-c8d09476527d',
    blogName: 'What Media isn’t Saying about Terrorist Attack in Buffalo by the White Supremacist',
    blogLink: 'https://medium.com//@jaronmays/what-media-isnt-saying-about-terrorist-attack-in-buffalo-by-the-white-supremacist-1489331d0af1?source=topics_v2---------6-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    authorName: 'Jaron Mays',
    authorBlogLink: 'https://medium.com//@jaronmays?source=topics_v2---------6-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    publishedTime: '·18 hours ago',
    readTime: '4 min read',
    relatedTag: 'Racism',
    blogDescription: 'White supremacist terrorists are on the move —  There was a terrorist attack in Buffalo, NY that happened today by a hardcore white supremacist, who was 18-years-old. According to CNN: The suspect, identified as Payton Gendron, 18, was charged with first-degree murder and arraigned in Hannah’s courtroom, the judge said. At first, they didn’t want to release his…'
  },
  {
    id: 'ce7b7f85-2a46-4556-aa5b-c554c8b90547',
    blogName: 'To Really Get to Know a Place, You Have to Walk It',
    blogLink: 'https://medium.com//@craig-axford/to-really-get-to-know-a-place-you-have-to-walk-it-ee2a6bb0567b?source=topics_v2---------7-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    authorName: 'Craig Axford',
    authorBlogLink: 'https://medium.com//@craig-axford?source=topics_v2---------7-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    publishedTime: '·1 day ago',
    readTime: '5 min read',
    relatedTag: 'Walking',
    blogDescription: 'Escaping our cars is necessary to developing an intimate knowledge of our world. —  We live in a car culture. I was reminded of this recently when a potential landlord in the small town of Moab, Utah raised doubts about my ability to make it here without an automobile. I pointed out that I had walked from one end of the town to the…'
  },
  {
    id: '6b7d89e9-d020-439f-8bca-18a28a3c75dc',
    blogName: 'A Short History of Our Favorite Chocolate Bars',
    blogLink: 'https://medium.com//@keith-mcnulty/a-short-history-of-our-favorite-chocolate-bars-ac5f7d666480?source=topics_v2---------8-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    authorName: 'Keith McNulty',
    authorBlogLink: 'https://medium.com//@keith-mcnulty?source=topics_v2---------8-84--------------------6b70bee3_444a_45c4_8418_7a263ca94d70-------19',
    publishedTime: '·1 day ago',
    readTime: '8 min read',
    relatedTag: 'Culture',
    blogDescription: 'The story of ten of our favorite treats —  I’m a total chocoholic! I have been as far back as I can remember. And I’m lucky enough to live in a time where chocolate has been widely available and where a small number of super-brands have provided reliable satisfaction over the past few decades. Although the size and shape…'
  }
]

const cooking = [
  {
    id: 'abaaa6ae-6329-4b8c-bac1-6dfffd37ba86',
    blogName: 'How to cook at home | Exp #001',
    blogLink: 'https://medium.com//@brianexperiments/how-to-cook-at-home-exp-001-79c2208bbf6f?source=topics_v2---------0-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    authorName: 'Brian',
    authorBlogLink: 'https://medium.com//@brianexperiments?source=topics_v2---------0-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    publishedTime: '·2 hours ago',
    readTime: '4 min read',
    relatedTag: 'How To',
    blogDescription: 'Hypothesis: If I cook all my own meals for 7 days then I will save money and feel better. Why this matters: I feel shitty about the cost and quality of the food I eat. Not to mention we get a lot of takeout. Turns out the Mrs. …'
  },
  {
    id: '111954e4-2b3e-465c-ae0b-19b844cff26c',
    blogName: 'Strawberry And Almond Crumble',
    blogLink: 'https://medium.com//gardening-birding-and-outdoor-adventure/strawberry-and-almond-crumble-b8a84088bfa3?source=topics_v2---------1-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    authorName: 'Patsy Collins',
    authorBlogLink: 'https://medium.com//@patsy-collins?source=topics_v2---------1-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    publishedTime: '·4 hours ago',
    readTime: '1 min read',
    relatedTag: 'Cooking',
    blogDescription: 'Make the most of a bumper harvest with this delicious dessert that smells as good as it tastes —  Ingredients filling 1 1/2lb/ 750g strawberries Fresh or frozen (frozen don’t need to be defrosted before use) 2 oz/50g sugar teaspoon vanilla extract (optional, but gives a richer flavour) topping 4 oz/ 125g plain white flour 3 oz/75g sugar 3 oz/75g butter (softened) 2 oz / 50 g flaked almonds Method 1…'
  },
  {
    id: '151f4a0b-5773-4d97-8777-98669b06cf76',
    blogName: 'Niçoise Salad',
    blogLink: 'https://medium.com//@martahenriques46/niçoise-salad-49434fc75582?source=topics_v2---------2-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    authorName: 'Marta Henriques',
    authorBlogLink: 'https://medium.com//@martahenriques46?source=topics_v2---------2-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    publishedTime: '·9 hours ago',
    readTime: '1 min read',
    relatedTag: 'Recipe',
    blogDescription: 'Hey loves! Hope you guys enjoy this super easy salad recipie that will refresh your summer!'
  },
  {
    id: '40c01b82-28ff-486c-b782-37f0e2540491',
    blogName: 'Coleslaw Quest',
    blogLink: 'https://medium.com//illumination/coleslaw-quest-be8770d78c81?source=topics_v2---------3-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    authorName: 'Wendy Weber',
    authorBlogLink: 'https://medium.com//@wsquared2000?source=topics_v2---------3-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    publishedTime: '·16 hours ago',
    readTime: '6 min read',
    relatedTag: 'Coleslaw',
    blogDescription: 'Mission: Create a Coleslaw Recipe as Good as Grandma’s —  My paternal grandmother Kate Friedman was a fantastic cook and among other things, such as mandel bread, which is like a biscotti, but my Jewish tradition calls it this. In a future article I’ll talk about it — I did become adept at making it. …'
  },
  {
    id: 'cefbfab5-05b6-4f1a-9eac-dc1ab053adb6',
    blogName: 'Update 4: New Years Challenge',
    blogLink: 'https://medium.com//@relapsinghealth/update-4-new-years-challenge-c9366f4bc91f?source=topics_v2---------4-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    authorName: 'Emily Forman',
    authorBlogLink: 'https://medium.com//@relapsinghealth?source=topics_v2---------4-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    publishedTime: '·3 hours ago',
    readTime: '2 min read',
    relatedTag: 'Cooking',
    blogDescription: 'I haven’t been doing as much cooking as I would like. —  Since I was working on everything and a bunch of different goals last year and this year I decided for New Year I would challenge myself to cook 440 new recipes and of course, write about them. While I have made some progress on my list and I’ve cooked 20…'
  },
  {
    id: '86c14ae1-fec8-472f-a8f9-b68212bbe057',
    blogName: '簡單又好味的日本西京燒烤魚',
    blogLink: 'https://medium.com//@somewherejournal/簡單又好味的日本西京燒烤魚-ca6dbe280861?source=topics_v2---------5-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    authorName: '一隅 Somewhere Journal',
    authorBlogLink: 'https://medium.com//@somewherejournal?source=topics_v2---------5-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    publishedTime: '·2 days ago',
    readTime: '4 min read',
    relatedTag: 'Japanese Food',
    blogDescription: '西京燒烤魚，相信都不太陌生，只要你去過日本餐廳，大多都有這道菜。上了兩個多月的傳統日本料理的課堂，在課堂上學習了這歷史悠久的西京燒，在香港吃的話，動輒要過百元。但原來，這道菜一點不貴，而且容易做，我花了60元便完成了三人份。為甚麼這麼貴呢？大概是賣相跟名字都像高級料理吧﹗'
  },
  {
    id: 'd29e3d19-3bdc-41f8-80c7-2b7fbaa2a5e7',
    blogName: 'Stirring',
    blogLink: 'https://medium.com//@birrellwalsh/stirring-6841d8a12878?source=topics_v2---------6-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    authorName: 'Birrell Walsh',
    authorBlogLink: 'https://medium.com//@birrellwalsh?source=topics_v2---------6-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    publishedTime: '·19 hours ago',
    readTime: '1 min read',
    relatedTag: 'Cooking',
    blogDescription: 'Stirring lentils, as we’ve done\nfor seven thousand circles of the sun.'
  },
  {
    id: 'a915aba5-089c-4bee-a652-7154fdf28585',
    blogName: 'Chef’s Special',
    blogLink: 'https://medium.com//sneak-snippets/chefs-special-21fc2b370f0?source=topics_v2---------7-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    authorName: 'Patricia Ray',
    authorBlogLink: 'https://medium.com//@patriciaray-author?source=topics_v2---------7-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    publishedTime: '·1 day ago',
    readTime: '2 min read',
    relatedTag: '100 Story Challenge',
    blogDescription: '№ 82 of 💯 Story Challenge in 💯 words: Love goes through the stomach, they say, but isn’t the effort of preparing a meal that defines a lover’s dedication? —  I enjoy the texture of food. An onion reveals its juiciness as I cut it. The pungent smell of garlic sticks to my fingers as I chop it. My knife slicing easily through zucchini or mushrooms. Whisking a creamy sauce as its richness tantalises my nostrils and the entire kitchen.'
  },
  {
    id: 'd46c73eb-fcb4-4c1b-a27d-010fb9f51f2a',
    blogName: 'Want to get inspired to cook? Read THIS book.',
    blogLink: 'https://medium.com//@dane-bh/want-to-get-inspired-to-cook-read-this-book-3be21879594c?source=topics_v2---------8-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    authorName: 'Dane BH',
    authorBlogLink: 'https://medium.com//@dane-bh?source=topics_v2---------8-84--------------------53e1fd48_0c22_4db9_913c_510744870734-------19',
    publishedTime: '·19 hours ago',
    readTime: '3 min read',
    relatedTag: 'Cooking',
    blogDescription: 'Not many people can identify the exact moment they became a cook, but I can. Many people can identify cookbooks that inspired them, that changed them, that showed them new ways to think about the world, and I can, too. (There’s a meme going around right now where people are sharing cookbooks that are important to them.) There are a small handful of cookbooks that…'
  }
]

const business = [
  {
    id: '9c756e12-fa47-4126-b1e5-50b937716ef8',
    blogName: '7 Passive Income Ideas To Easily Make $500/Day',
    blogLink: 'https://medium.com//@czmclaudiu/7-passive-income-ideas-to-easily-make-500-day-e7c40b2c7a41?source=topics_v2---------0-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Claudiu',
    authorBlogLink: 'https://medium.com//@czmclaudiu?source=topics_v2---------0-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·11 hours ago',
    readTime: '5 min read',
    relatedTag: 'Passive Income',
    blogDescription: 'Passive income is the holy grail of money. If you can make money while you sleep, you can work less and do more things that are important to you. —  Start an Online Business. Share your expertise and help others while generating income to the next level. You have the expertise. You know how to do something better than most people in your field, so why not monetize it? You can start a blog, website, or podcast and share your knowledge with others who need help. If you’re really good at what you do, people will come…'
  },
  {
    id: '1ad93413-0a52-4e63-a392-5c134dbe9fb6',
    blogName: 'A Simple Math Equation Helped a Couple Pay Off $40,000 in 6 Months',
    blogLink: 'https://medium.com//@swavedigest/a-simple-math-equation-helped-a-couple-pay-off-40-000-in-6-months-6518069843bb?source=topics_v2---------1-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Swavedigest',
    authorBlogLink: 'https://medium.com//@swavedigest?source=topics_v2---------1-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·8 hours ago',
    readTime: '3 min read',
    relatedTag: '40000',
    blogDescription: 'Amy Crockett refinanced $40,000 in credit card debt to make payments more manageable.. She calculated the amount of interest she was paying daily, which was about $2. She manually paid $4 to $10 a day on top of monthly payments, and paid off the debt in six months. LoadingSomething is…'
  },
  {
    id: 'd5476d37-b511-4c70-8b75-dd6121bbec6d',
    blogName: 'Sunday thoughts: if we want to be a research superpower, why don’t we act like one? (and why does no one outside HE know about the REF)',
    blogLink: 'https://medium.com//@jonathansimons1982/sunday-thoughts-if-we-want-to-be-a-research-superpower-why-dont-we-act-like-one-3d7b816d6a8b?source=topics_v2---------2-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Jonathan Simons',
    authorBlogLink: 'https://medium.com//@jonathansimons1982?source=topics_v2---------2-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·11 hours ago',
    readTime: '4 min read',
    relatedTag: 'Schools',
    blogDescription: 'The REF. The Research Excellence Framework. Quite possibly the bit of measurement in public services that has the biggest difference between a sector that obsesses over it, and everyone else that is largely oblivious to it — or, to paraphrase Palmerston on Schleswig-Holstein, knows about it but can’t begin to…'
  },
  {
    id: '4b7c1449-07b7-4baf-9644-2b10c68ce0c4',
    blogName: 'Why Starting Your Affiliate Marketing Business Is a Good Idea',
    blogLink: 'https://medium.com//marketingaffiliate/why-starting-your-affiliate-marketing-business-is-a-good-idea-f3b7d263f9bb?source=topics_v2---------3-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Ed-iT',
    authorBlogLink: 'https://medium.com//@ed-it-us?source=topics_v2---------3-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·8 hours ago',
    readTime: '1 min read',
    relatedTag: 'Marketing',
    blogDescription: 'Affiliate marketing is the way to go! —  There is a huge load of approaches to bring in cash on the web. Subsidiary promotion permits you to get familiar with everything with different items and specialties. Odds are that you have a drawn-out undertaking as a top priority, something that you couldn’t want anything more than to consistently…'
  },
  {
    id: 'f7a992f4-a53f-4174-9b97-7c1999dc35aa',
    blogName: 'Four Reasons Highly Intelligent People Fail To Make Money Online',
    blogLink: 'https://medium.com//swlh/four-reasons-highly-intelligent-people-fail-to-make-money-online-495d51b054de?source=topics_v2---------4-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Jano le Roux',
    authorBlogLink: 'https://medium.com//@janoleroux?source=topics_v2---------4-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·14 hours ago',
    readTime: '5 min read',
    relatedTag: 'Money',
    blogDescription: 'I accidentally turned my struggle into a $9,000/month side business from my desk with my fiancé in my early 20s — but because I was being too smart, I nearly f*cked it all up. As an entrepreneur and marketing consultant, I’ve met my share of highly intelligent people. I’ve seen…'
  },
  {
    id: '66d0240a-32e5-470b-a5b2-a2ba5f247c75',
    blogName: 'Peloton Is Spinning Out of Control',
    blogLink: 'https://medium.com//@stephenmoore/peloton-is-spinning-out-of-control-254154287e7a?source=topics_v2---------5-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Stephen Moore',
    authorBlogLink: 'https://medium.com//@stephenmoore?source=topics_v2---------5-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·2 days ago',
    readTime: '4 min read',
    relatedTag: 'Business',
    blogDescription: 'The company’s stock price just hit an all-time low —  Motivation That Moves You. On May 9, Peloton unveiled a brand refresh, including a new campaign featuring its most popular instructors and a first-ever tagline. While the tagline will do little to motivate users into fitness — a constant human struggle that takes more than flashy advertising — it certainly…'
  },
  {
    id: 'd59eb8ad-6b21-4df4-b5ba-e7fc98566e8b',
    blogName: 'A Short History of Our Favorite Chocolate Bars',
    blogLink: 'https://medium.com//@keith-mcnulty/a-short-history-of-our-favorite-chocolate-bars-ac5f7d666480?source=topics_v2---------6-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Keith McNulty',
    authorBlogLink: 'https://medium.com//@keith-mcnulty?source=topics_v2---------6-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·1 day ago',
    readTime: '8 min read',
    relatedTag: 'Culture',
    blogDescription: 'The story of ten of our favorite treats —  I’m a total chocoholic! I have been as far back as I can remember. And I’m lucky enough to live in a time where chocolate has been widely available and where a small number of super-brands have provided reliable satisfaction over the past few decades. Although the size and shape…'
  },
  {
    id: 'd591eddb-30c5-43e5-81fb-c4932b2ac70b',
    blogName: '後疫情時代 少人數的觀光專列旅遊行程正在發酵',
    blogLink: 'https://medium.com//@joelhu/後疫情時代-少人數的觀光專列旅遊行程正在發酵-17f85f491ddb?source=topics_v2---------7-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Joel Fukuzawa',
    authorBlogLink: 'https://medium.com//@joelhu?source=topics_v2---------7-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·11 hours ago',
    readTime: '5 min read',
    relatedTag: '日本',
    blogDescription: '提到日本的觀光列車，「九州七星號（ななつ星 in 九州）」豪華觀光列車應該是大家印象最深的，九州七星號不但豪華，搭乘的費用也很驚人，一個人兩天一夜的行程至少要從 65…'
  },
  {
    id: 'aa142754-1d9e-4d58-844b-ce3fa4983274',
    blogName: 'Why Every Company is Now a Tech Company',
    blogLink: 'https://medium.com//@sanchit-gera/why-every-company-is-now-a-tech-company-87a388537321?source=topics_v2---------8-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Sanchit Gera',
    authorBlogLink: 'https://medium.com//@sanchit-gera?source=topics_v2---------8-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·15 hours ago',
    readTime: '4 min read',
    relatedTag: 'Software Development',
    blogDescription: 'Around 10 years ago, Marc Andreseen published a famous article on how tech companies were disrupting traditional industries that once seemed immune to change. As the argument went, tech companies could leverage the power of the internet to deliver new experiences that were more convenient, accessible and far cheaper for…'
  }
]

const statusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  initial: 'INITIAL',
}


class AllBlogs extends Component {
  state = {
    blogsListStatus: statusConstants.success,
    blogsList: [],
    searchInput: '',
  }

  getBlogsDetails = () =>{
    console.log("Entered into getBlogDetails")

    this.setState({blogsListStatus: statusConstants.loading})
    const {searchInput} = this.state
    let val = searchInput.toLowerCase()
    console.log(val)
    if (val==="business" || val==="cooking" || val==="culture"){
      this.setState({blogsListStatus:statusConstants.success})
    }
    else{
      this.setState({blogsListStatus: statusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchBtn = () => {
    this.getBlogsDetails()
  }

  onClickBlogsRetry = () => {
    const {searchInput} = this.state
    this.getBlogsDetails()
  }

  renderBlogsListFailureView = () => (
    <div className="blogs-list-failure-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1 className="blogs-failure-head">Oops! Something Went Wrong</h1>
      <p className="blogs-failure-para">
        We cannot seem to find the page you are looking for
      </p>
      <button
        className="retry-btn"
        type="button"
        onClick={this.onClickBlogsRetry}
      >
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderBlogs(blogsData){
    console.log("Entered into render blogs")
    console.log(blogsData)
    return (
      <ul className="blog-list-cont">
        {blogsData.map(eachBlog => (
          <BlogCard key={eachBlog.id} blogDetails={eachBlog} />
        ))}
      </ul>
    )
  }

  renderBlogsListSuccessView = () =>{
    console.log("Entered into success view")
    const {searchInput} = this.state
    const val = searchInput.toLowerCase()

    if (val==="business"){
      console.log("entered into business if")
      return this.renderBlogs(business)
    }
    else if (val==="culture"){
      return this.renderBlogs(culture)
    }
    else if (val==="cooking"){
      return this.renderBlogs(cooking)
    }
  }

  renderBlogsListView = () => {
    const {blogsListStatus} = this.state
    switch (blogsListStatus) {
      case statusConstants.success:
        return this.renderBlogsListSuccessView()
      case statusConstants.loading:
        return this.renderLoadingView()
      case statusConstants.failure:
        return this.renderBlogsListFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <Head />
        <div className="all-blogs-main-cont">
          <div className="blogs-and-filters-cont">
            <div className="blogs-cont">
              <div className="search-input-cont">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Enter Tag Here"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                />
                <button
                  type="button"
                  testid="searchButton"
                  className="search-btn"
                  onClick={this.onClickSearchBtn}
                >
                  <BsSearch className="search-icon" />
                </button>
              </div>
              {this.renderBlogsListView()}
              {/* {this.renderBlogs()} */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AllBlogs
