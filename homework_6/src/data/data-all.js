var DATA = {
  'test' : [
    {
       'name': 'Cooking Mama: Meat Salad Edition',
       'img_src': '/thumbs/meat-salad-thumb.jpg',
       'tools': 'Arduino, Felt Fabric, Unity, button sensors, photocells',
       'description': 'Unity and Arduino version of popular game Cooking Mama. Made felt fabric controllers shaped like food and put sensors in them. Tweet received over half a million views on Twitter.',
       'tags' : ['arduino', 'code', 'Unity'],
       'key' : 'cooking-mama',
       'date': 'Fall 2018',
       'url': 'cooking-mama',
       'preview_type' : 'video',
       'preview_url' : 'https://www.youtube.com/embed/a2O5I6Tr3ms',
       'mark': `# About
       \n A Unity and Arduino version of popular game Cooking Mama! I made two felt fabric controllers (one spam, one steak) shaped like food and put sensors in them.
       \n### My tweet about it recieved [over half a million views on Twitter](https://twitter.com/crabbage_/status/1072711212016828416)!
       \n\n When I first learned how to use an Arduino, one of my first instincts was to connect it with Unity. At first, I had trouble coming up with an idea for a unity + arduino experience
       that would leverage the advantages of both. Ultimately, I was inspired by Cooking Mama, a game that I had loved in my childhood. I was excited by
       the idea of enhancing the game experience with a physical controller. How will a felt knife and a felt steak compare to a Nintendo stylus? Will it make it more fun? Will it be the same?
       I love the idea of making alternative experiences, and this was a way of exploring that.
       \n Thank you to Sidney Church for helping me connect the Arduino to unity and for all of the Arduino help!
       \n ![example gif 1](../images/meat-salad.gif)
       \n ![example img](../images/meat-salad.jpg)
       \n\n # Documentation pictures & Code
       \n The look of the felt fabric food controllers was inspired by Lucy Sparrow's Sparrow Mart, a supermarket made up of food made from felt.
       \n You can find the code [here](https://github.com/khanniie/unity-arduino-cooking-mama).
       \n The steak controller contains six buttons attached to a breadboard. On top of the buttons, I laid flat acrylic boards that I cut into sections so that the buttons could have a greater
       range of influence. The spam contains a photocell that can tell when you remove the meat, and the bowl also contains a photocell to detect when the meat is placed inside.
       \n For the unity part, I am sending the information from the Arduino to serial port, which unity then reads from.
       \n ![diagram of work](../images/meat-salad-diagram.jpg)
       \n\n <div class="fit2"><img src="../images/meat-salad-1.JPG"/><img src="../images/meat-salad-2.JPG"/><em>left: the felt steak and fabric parts, right: developing with arduino</em></div>
       \n\n
       `
     },
    {
       'name': 'mldraw: ML Drawing Tool (in progress)',
       'img_src': '/thumbs/pika-thumb.gif',
       'tools': 'Typescript / Javascript, choo.js, paper.js, pix2pix models, python, socket.io',
       'description': 'mldraw is a new vector drawing tool that lets you play with machine learning! Mix cats, anime, Pikachu, handbags, imagined buildings and more! I built the UI and worked on the drawing/layer functions.',
       'tags' : ['collaborative', 'code', 'ML / AI', 'web'],
       'key' : 'mldraw',
       'date': 'Spring 2019',
       'url': 'mldraw',
       'preview_type' : 'vimeo',
       'preview_url' : 'https://player.vimeo.com/video/321893512',
       'mark': `# About
       \n Mldraw is a new vector drawing tool that lets you play with machine learning! Users can mix cats, anime, Pikachu, handbags, imagined buildings and more.
       \n Mldraw is a web app that uses a layered vector drawing system where each layer can be given a different machine learning model that translates user input. The user will give us a line drawing of edges, and our app's backend server renders the translation using whatever model is assigned to that layer.
       Furthermore, we've also made it easy to import custom ML models for researchers so that they can use our tool to experiment with their models!
       \n Made in collaboration with [Aman Tiwari](http://www.aman.work/)!
       \n I designed and built the UI using HTML/CSS/Typescript, and I also worked on the drawing and layer functionality, such as the
        vector drawing, drag and dropping objects, layer building, etc.
        Mldraw’s interface is inspired by cute, techy/anti-techy retro aesthetics, such as the work of Sailor Mercury and the Bubblesort Zines.  We wanted it to be fun, novel, exciting and differentiated from the world of arxiv papers.
       \n Mldraw was born out of seeing the potential of the body of research done using pix2pix to turn drawings into other images and the severe lack of a usable, “useful” and accessible tool to utilize this technology.
       \n
       \n # Still in progress
       \n We have a great demo, but have plans to bug-test, add more exciting ML models and features, and deploy at mldraw.com. We're also still experimenting and making big changes to the UI / UX! More documentation coming soon.
       \n\n <div class="fit2"><img alt="before" src="../images/ml-before.png"/><img alt="after" src="../images/ml-after.png"/><em>User line drawing, and rendered version (two layers, one with a pikachu model and one with a handbag model)</em></div>
       \n\n # implementation
       \n Mldraw is implemented as a Typescript frontend using choo.js as a UI framework, with a Python registry server and a Python adapter library, along with a number of instantiations of the adapter library for specific models.
       The frontend communicates with the registry server using socket.io, which then passes to the frontend a list of models and their URLs. The frontend then communicates directly to the models.  This enables us e.g. to host a registry server for Mldraw without having to pay the cost of hosting every model it supports.
       \n Mldraw also supports models that run locally on the client (in the above video, the cat, Pikachu and bag models run locally, while the other models are hosted on remote servers).
       \n In service of the above desire to make Mldraw extensible, we have made it easy to add a new model – all that is required is some Python interface to the model, and to define a function that takes in an image and returns an image. Our model adapter will handle the rest of it, including registering the model with the server hosting a Mldraw interface.
       \n\n # Progress Documentation
       \n This is what mldraw looked like before the UI, when Aman and I were still working on the core functionality of the app.
       \n ![before UI](../images/mldraw-before.png) *mldraw before UI*
       \n ![ipad mockup that I drew before building the UI](../images/mldraw-mockup.jpg) *ipad mockup that I drew*
       \n ![Mldraw documentation, edges2pikachu model](../images/mldraw2.png) *Mldraw documentation, handbag and pikachu models applied*
       \n ![Mldraw documentation, edges2pikachu model](../images/mldraw1.png) *Mldraw documentation, edges2pikachu model*
       \n ![more recent UI](../images/current-ui-mldraw.png) *more recent UI*
       \n ## CSS animations
       \n ![render button interaction gif](../images/button-interactions.gif)*examples of small css animated interactions*
       \n*left: tooltip + pop animation on hover + lingering expansion until unhover, middle: render button disappears when canvas in use, fades back in when done, right: render button spins while rendering*
       \n ![toolbar interaction gif](../images/toolbar.gif)*toolbar animations: nod when usable, shake when unusable for that model*
       `
     },
     {
       'name': 'Secret Base AR',
       'img_src': '/thumbs/secretbase-thumb.gif',
       'tools': 'C#, Unity, Vuforia AR, Firebase',
       'description': 'Using distinctive images (posters, stickers, wall patterns) from real life, users can build “secret bases” that will pop up any time the app detects those images. These bases will be stored and can be sent to the users’ friends through a friend code.',
       'tags' : ['code', 'Unity', 'VR / AR'],
       'key' : 'secretbasear',
       'date': 'Spring 2018',
       'preview_type' : 'video',
       'preview_url' : 'https://www.youtube.com/embed/Vk_ZJ2VbFUA',
       'url': 'secret-base',
       'mark': `\n# About
               \n Using distinctive images (posters, stickers, wall patterns) from real life, users can build “secret bases” that will pop up any time the app detects those images. These bases will be stored and can be sent to the users’ friends through a friend code. These friends also have the ability to see and modify the same structure if they are within proximity of the same image.
               \n I created this project to explore the idea of digital intimacy and friendship; I was interested in internet-based relationship dynamics and wanted to prototype a way to share a personal space digitally.
               \n All the furniture was textured with hand-painted watercolor textures, and the “sharing” aspect uses both Firebase authorization for user sign in and Firebase’s database to remember base information. The AR was made using vuforia’s cloud database and extended tracking.
               \n![image](../images/secretbase.jpg)*furniture in Unity environment*
               \n\n<div class="fit2"><img src="../images/ar-secret-base.gif"/><img src="../images/sb-collab.gif"/><em>left:AR tree and tables, right: treehouse shared with friend's phone, both can view and edit the same structure</em></div>
               \n
               \n# The Process
               \nI started with concept artwork. With AR secret bases, the bases are located forever where their "image target" exists and are
               only accessible to those who have been invited, kind of like a secret treehouse club.
               \n![concept art](http://cmuems.com/2018/60212s/wp-content/uploads/2018/04/IMG_1087.png)
               \nI began by working on integrating Firebase user auth and database into Unity. I encountered
               a lot of bugs in getting the iOS build to execute, which I documented [here](http://cmuems.com/2018/60212s/conye/04/06/conye-artech/).
               \n![firebase img](http://cmuems.com/2018/60212s/wp-content/uploads/2018/04/Screen-Shot-2018-04-12-at-1.33.03-AM-1024x640.png)*above: Firebase and user auth.*
               \n![database img](http://cmuems.com/2018/60212s/wp-content/uploads/2018/04/database-1024x548.gif)*above: Firebase database working.*
               \nI then started building the Unity environment, which I wanted to use my own textures for. I had considered using premade assets, but wanted
               my final result to have a more distinctive look. I watercolored my textures in my sketchbook, scanned them in, made a bump map using photoshop and then textured the objects.
               \n![textures](../images/bumpmap.jpg)*bump map in photoshop*
               \nFor the basic grid and block placing implementation, the blocks had to snap to the grid and be able to be stacked upon each other. Furthermore, I wanted to have a square
               that would indicate where the next block would be placed down if the user would press "place."
               \n![bricks](http://cmuems.com/2018/60212s/wp-content/uploads/2018/05/demo_brick-1024x594.gif)*blocks*
               \nI then integrated the block system into the AR part. For each image target I loaded into Vuforia, I gave it a unique id that would later be used to map the image target to them
               furniture data stored in Firebase.
               \n![ar bricks](http://cmuems.com/2018/60212s/wp-content/uploads/2018/05/IMG_1325-1024x1024.jpg)*block placing built into the AR part*
               \nThen, I worked on getting the firebase details correct. I was able to send and retrieve data, and authorize users, but I didn’t have a structured way of implementing my idea yet. What I ended up with looked like this:
               \n![flow](http://cmuems.com/2018/60212s/wp-content/uploads/2018/05/info.png)*diagram of firebase calls*
               \nThe databse's final structure:
               \n![fb](http://cmuems.com/2018/60212s/wp-content/uploads/2018/05/Screen-Shot-2018-05-05-at-4.12.44-PM.png)*firebase backend*
               \n Overall, this was a hard and time-consuming project for me, but I learned a lot about Unity, AR and Firebase in the process.
               Although it could be cleaned up a lot, I was really happy with how it turned out and was happily surprised by how functional it was.
               \n Thank you to: Nitesh for helping me document, Rain for being the best 15-251 partner, Sophia C. for being a Very Good Buddy, Golan Levin for being a really great teacher, and Claire for her advice on the watercolor textures!
               `
     },
    {
      'name': 'Pixel Art Tsne & DCGAN',
      'img_src': '/thumbs/tsne-thumb.gif',
      'tools': 'Python, Node.js, PyTorch, Jupyter Notebook',
      'description': 'I datascraped ~5000 pixel icons from Deviantart and then extracted feature vectors from them, which were used to put them into a grid of nearest neighbors. I also used DCGAN to generate new pixel icons.',
      'tags' : ['code', 'ML / AI'],
      'key' : 'pixel-gan',
      'date': 'Fall 2018',
      'url': 'pixel-gan',
      'preview_url': '../images/tsne.gif',
      'preview_type': 'image',
      'mark': `# ABOUT / INSPIRATION
      \n With this project, I wanted to computationally analyze and recreate Deviantart art because I had been a very active member of Deviantart in my middle school days and
      thought that it would be a nice tribute to those days. I choose pixel icons specifically because of their uniform style and nostalgic value (for me, at least). Because a lot of the work was a little computationally heavy, I remotely ran most of
      my code on a computer hosted in CMU's Studio for Creative Inquiry. I had been reading a good amount of papers about machine learning and wanted to really play around with topics related to what I had been reading about. I created this project during the first third of my independent study class.
      \n # SCRAPING FOR IMAGES
      \n I used Node.js to grab roughly 5000 images using the Deviantart API, querying for square pixel images with a certain amount of likes that had been marked by their creator as "downloadable."
      \n ![deviantart pixel](../images/devpix.gif)
      \n # FEATURE EXTRACTION AND TSNE
      \n In a Jupyter Notebook, I used Pytorch's pretrained VGG16 model to extract feature vectors from all of my images. This allowed me to get the
      "nearest neighbors" of any given pixel icon. Shown below are examples of the nearest neighbor finding. The top/larger image was the origin image and the
      five images below are its nearest neighbors.
      \n ![neighbors 1](../images/neighbor1.png)
      \n ![neighbors 2](../images/neighbor2.png)
      \n ![neighbors 3](../images/neighbor3.png)
      \n ![neighbors 4](../images/neighbor4.png)
      \n ![neighbors 5](../images/neighbor5.png)
      \n Then, I could use run tsne on these images to plot them by feature vector. I also used
      an updated (Python 3) implementation of Raster Fairy to turn the 2D point cloud into a grid. Below is the result on a smaller (2000 images) subset of pixels.
      \n ![tsne](../images/2000_set_grey.png)
      \n # DCGAN
      \n I used an implementation of DCGAN that I found [here](https://github.com/eriklindernoren/PyTorch-GAN) to generate more.
      They turned out looking a little like pixel mush, so I tried messing around with the learning rate / number of epochs. The results still weren't as good as I was hoping,
      but I learned a lot about GANs and machine learning during this whole process and am really happy that I did this project.
      \n<div class="fit2"><img src="../images/dcgan1.gif" alt="dcgan res 1"/><img src="../images/dcgan2.gif" alt="dcgan res 2"/></div>
      \n\n![big gan result](../images/dcgan-big.gif)
      \n![res](../images/60800.png)
      \n![res combined two](../images/combined-dcgan.jpg)
      `
    },
    {
       'name': 'TartanHacks: Oink Web Accessibility',
       'img_src': '/thumbs/oink-thumb.jpg',
       'tools': 'Javascript, Google computer vision, Chrome, socket.io',
       'description': 'Won Google Accessibility Award. Chrome extension that uses computer vision to auto-generate missing alt tags for images, hide sensitive content, etc.',
       'tags' : ['collaborative', 'code', 'web'],
       'key' : 'oink-chrome',
       'date': 'Spring 2019',
       'url': 'oink-chrome',
       'preview_type' : 'image',
       'preview_url' : '../images/oink10.jpg',
       'mark': `# About
       \n Oink won the Google Accessibility Award at TartanHacks! Oink is a Chrome extension with a suite of web accessibility tools. It uses computer vision to auto-generate missing alt tags for images, hides sensitive content, makes font sizes bigger, and alerts users when sound is
       playing on a webpage. All of these functionalities are included, but can be toggled on and off based on user needs.
       \n For this project, I worked in a team of 4, with Kearnie Lin, Megan Ung and Kimberly Lo. I designed and built the UI; I also set up the socket.io backend that's being used to perform the calls to Google Cloud Vision.
       \n\n <div class="fit2"><img src="../images/oink1.png"/><img src="../images/oink2.png"/><em>left: popup menu in chrome, right: our icon in the toolbar</em></div>
       \n\n
       \n ![image of interface](../images/oink6.png)*image of interface*
       \n ## Adding in missing alt tags
       \n Alt tags are important components of images on the internet for those who use screenreaders to browse the web. However, websites sometimes don't include alt tags for these images, leaving the screenreader-reliant user unable to
       know what the content of the image is. We realized that we could use modern computer vision techniques to remedy this; our chrome extension looks for images that are missing alt tags, and sends those images
       to our backend through socket.io, which then sends the image through Google Cloud's computer vision to be labeled. We then add in these content labels as alt tags. This socket.io backend was being run continuously on my
       Digital Ocean server.
       \n\n Below is a webpage without our extension. It doesn't have alt tags on its images:
       \n ![before alt tags](../images/oink8.png)
       \n With our extension turned on, alt tags have been applied to the image!
       \n ![after oink, with alt tags](../images/oink7.png)
       \n ## Sensitive Content Filter
       \n Using the same techniques as described above, we can determine what the content of an image is. The web can be difficult for those who are especially sensitive to certain content,
       so we allow the user to give us a list of tags to watch for. We will then hide images that match those tags.
       \n ![image of interface](../images/oink6.png) *typing in spider to filter list*
       \n ![spider is hidden](../images/oink5.png) *the spider image has been hidden*
       \n ## More!
       \n Our app can also increase font size, make links more visible, and alert you if there's sound playing on a page.
       \n ![bigger font interface](../images/oink4.png) *toggling on bigger font option*
       \n ![bigger font on webpage](../images/oink3.png) *bigger font on webpage*
       \n # Future Goals
       \n ![future goals](../images/oink-future.png)*future goals*
       \n\n # At the Hackathon!
       \n ![presenting](../images/tartanhacks-prog.jpg)*Our team presenting our project!*
       \n ![example gif 1](../images/tartanhacks-award.jpg)*Google Accessibility Award*
       \n\n
       `
     },
    {
      'name': 'Snow Gum',
      'img_src': '/thumbs/snowgum-thumb.jpg',
      'key' : 'snowgum',
      'tools': 'Javascript, annyang.js, Photoshop',
      'description': 'HackCMU web-based game to teach children ages 4 - 6 Spanish colors through voice recognition. ',
      'tags' : ['code', 'web', 'collaborative'],
      'date': 'Fall 2017',
      'preview_url': 'https://www.youtube.com/embed/IPbMT5is4Jg',
      'preview_type': 'video',
      'url': 'snow-gum',
      'mark': `# ABOUT
      \n Web-based game to teach children ages 4 - 6 Spanish colors through voice recognition. Made for HackCMU with Alyssa Lee and Cece Bower. Worked on the speech recognition and animating the main character.
      \n ## TRY IT [HERE](https://khanniie-sites.github.io/Snow-Gum) !
      \n ![snowgum image](../images/snowgum.png)*screenshot of game*`
    },
    {
      'name': '60-212 Weekly Code Deliverables',
      'img_src': '/thumbs/mocap-thumb.gif',
      'tools': 'Javascript, three.js, p5.js, Processing',
      'description': 'Weekly code "deliverables" created for CMU\'s Interactivity and Computation class, coded in p5.js and Processing.',
      'tags' : ['web', 'sketches', 'code'],
      'key' : 'mocap',
      'date': 'Spring 2018',
      'url': '60212',
      'preview_type': 'none',
      'preview_url': 'none',
      'mark': `
        \nFor the first half of Golan Levin's Spring 2018 Interactivity and Computation course, we produced weekly deliverables.
        My work is better documented on the [course wordpress site](http://cmuems.com/2018/60212s/conye).
        \n # Aesemic Writing (maze writing)
        \n For this assignment, I imagined an alien civilization that spoke in riddles and wrote in mazes. I created a "maze language" where each letter is mapped to a maze fragment and put together.
        The resulting "maze" is then carved using the union find algorithm so that it will be a real maze. My resulting mazes were drawn onto paper using the Axidraw plotter.
        \n ![writing img 1](../images/aesemic3.jpg)
        \n ![writing img 1](../images/aesemic2.gif)
        \n ![writing img 2](../images/plotter2.gif)
        \n ![writing img 2](../images/aesemic3.gif)
        \n <div class="fit2"><img src="../images/maze-sketch.jpg" alt="maze sketch"/><img src="../images/maze-sketch-2.jpg" alt="maze sketch"/><em>Process sketches / pseudocode, including the conversion from letter to maze piece</em></div>
        \n\n ![writing img 2](../images/pathcarving.png) *Before the union find algorithm runs, only connected pieces share a number*
        \n ![writing img 2](../images/pathcarving-after.png) *After the carving algorithm finishes, all the pieces share one number because they're all connected*
        \n # Speech (Word sentiment flower)
        \n Using a speech sentiment library and p5.speech, I analyze the sentiment of
        the user's speech and the flower will grow or wilt according to the sentiment. For example,
        bad dirt" will cause it to wilt while "happy flower" will cause it to grow.
        I also used rita.js to give extra impact for rhymes. The flower is drawn using p5.js!
        \n ![flower](http://cmuems.com/2018/60212s/wp-content/uploads/2018/02/flower3.gif)
        \n # Motion Capture Metaballs
        \n I hooked up mocap data to a three.js metaball demo to create mocap metaball figures!
        \n ![metaballs](../images/mocap.gif)
        \n ![metaballs 2](../images/mocap2.gif)
        \n # Animated Loop
        \n An animated loop made in Processing.
        \n ![animated loop](../images/animated_loop.gif)
        \n ![animated loop](../images/loop-sketch.png)
        \n # Caffeine Bot
        \n Caffeine bot tracks how long you have until you need to recaffinate!
        \n ![Caffeine bot](../images/caffine_bot.gif)
        \n ![Caffeine bot](../images/process-clock.png)
      `
    },

    {
      'name': 'Bot-a-razzi',
      'img_src': '/thumbs/bot-a-razzi-thumb.jpg',
      'tools': 'Javascript, Aframe.js, Firebase, p5.js, Google Cardboard',
      'description': 'Floating robots follow the user around in this VR experience. The robot "view" is sent to a screen that projects a fake instagram profile with the video stream. ',
      'tags' : ['VR / AR', 'code', 'web', 'collaborative'],
      'key' : 'botarazzi',
      'date': 'Fall 2017',
      'url': 'bot-a-razzi',
      'preview_type' : 'video',
      'preview_url' : 'https://www.youtube.com/embed/R-ySfk5PLh8',
      'mark': `# About
      \n Final concept studio project; worked in a team of 4. Floating robots follow the user around in this VR experience built for the Google Cardboard using Aframe.js. The robot "view" info is sent to a different screen that projects a fake instagram profile with the video stream. I worked on the projections, sending and retrieving the data using Firebase. I also 3d modeled some of the models included and built the fake social media pages and their fake chat streams.
      \n![botarazzi image 1](../images/cityconcept-thumb.jpg)*above: concept art by me for bot-a-razzi.*
        \n![botarazzi image 1](../images/bot-a-razzi-long.png)*above: baby room (there are three rooms) in bot-a-razzi.*
        \n![botarazzi image 2](../images/ui-botarazzi.png)*above: example social media page in botarazzi.*  `
    },
    {
      'name': 'Human-AI Interaction Class Projects',
      'img_src': '/thumbs/hci-thumb.jpg',
      'tools': 'Python, Tweepy, PokeAPI, socket.io, Tensorfow',
      'key' : 'hci-ai',
      'description': 'Notable projects from the Human-AI Interaction class I took in Fall 2018.',
      'tags' : ['code', 'ML / AI', 'web'],
      'date': 'Fall 2018',
      'preview_url': '',
      'preview_type' : 'none',
      'url': 'hci-ai',
      'mark': `# EMAIL SCAM CLASSIFIER
       \n For my final project, I made an email scam classifier that will tell you if the text input that you give it is a specific type of email scam known as the advance-fee scam.
       The most common variant of this scam is colloquially known as the Nigerian Prince Scam.
       \n My classifier is trained on a set of about 4000 “Nigerian Prince Scam” emails and about 10000 normal emails from the Enron email dataset.
       It can classify whether or not an email is a “Nigerian Prince Scam.” Furthermore, an additional goal I had was to educate users on how such scams are structured,
       especially elder users who are more prone to falling victim to email scams. I provided a small game that asks
       users to write their own such email to better learn how they’re written.
       \n This tool is designed for those who want to a) check if an email they were sent / a letter they were sent is a fraudulent email b) learn how such emails are structured so they themselves can better avoid these scams in the future.
       \n I used a model from tensorflow hub to do transfer learning on with my own dataset, and the resulting accuracy for the testing set was accuracy 99.53%.
       \n For a few weeks, this project was a live webpage hosted on a digitalocean server (although I am no longer hosting it online). The python backend sent information through socket.io.
       \n ![scam email yes](../images/scam-static-1.png) *text classified as an advance fee scam*
       \n ![scam email no](../images/scam-static-2.png) *text not classified as a scam*
       \n ![scam email yes gif](../images/scam-email-classifier.gif) *gif of the entire page*
       \n ![scam email yes gif](../images/scam-email-classifier-2.gif) *gif of the interactive learning part*
       \n # POKEMON TWITTER BOT
       \n Pokemon Twitter bot that uses the PokeAPI
       to reply to tweets asking about Pokemon. Can also create and
       rate Pokemon teams for users.
       \n My app allowed the user to connect to the Pokemon API through a Python wrapper called PokeBase. For the user info, when they said “add pokemon name”,
       I would add that pokemon to their json representation. They could also call “delete pokemon name” or “get team” to view / edit their team further. Then,
       I would use this information to rate how good their team was by getting the base stats of their pokemon (through an API call) and summing up the stats.
       I also stored reply information so that I could have multi-turn conversations. The key for a reply is the tweet id of the follow-up tweet that asks for more
       information and the value encodes the type of the origin tweet. Thus, when a user replies to that tweet, I can check if they were replying to a “what pokemon am i?”
       type follow-up or a “give me an item” type follow-up tweet.
       \n ![what pokemon](../images/what-pokemon.png) *what pokemon am i? query example*
       \n ![what pokemon 2](../images/what-pokemon-2.png) *what pokemon am i? query example 2*
       \n ![add to team](../images/add-team.png) *adding to user's team*
       \n ![rate team](../images/team-rate.png) *rating user's team*
       \n ![what item](../images/what-item.png) *what item am I? query example*
       \n ![storage](../images/storage.png) *how user info is stored in json format*
       `
    },
    {
      'name': 'Doodle Date',
      'img_src': '/thumbs/doodledate-thumb.gif',
      'key' : 'doodledate',
      'tools': 'Javascript, JQuery, Firebase',
      'description': 'Online multiuser drawing tool. Users can create or join rooms and draw with their friends on the same canvas.',
      'tags' : ['code', 'web'],
      'date': 'Summer 2016',
      'preview_url': '../images/doodledate.gif',
      'preview_type': 'image',
      'url': 'doodle-date',
      'mark': `# ABOUT \n Online multiuser drawing tool. Users can create or join rooms and draw with their friends on the same canvas. Pen and eraser have custom size, opacity and width options. Doodle date also includes: color wheel, download, import image reference, layers.
      \n ## TRY IT [HERE](https://khanniie-sites.github.io/Doodle-Date/)
      \n # PROCESS DOCUMENTATION
      \n I made doodle date when I was first learning Javascript, so the implementation is a little messy and the tool is laggy, although functional.
      \n As I was adding more features, I tested the tool by doodling with it, so here are the process doodles:
      \n ![test1](../images/dd-test1.png)
      \n ![test2](../images/dd-test2.png)
      \n ![test3](../images/dd-test3.png)
      \n ![test4](../images/dd-test4.png)
      \n ![test5](../images/dd-test5.png)
      \n ![test6](../images/dd-test6.png)
      \n ![test7](../images/dd-test7.png)
      `
    },
    {
      'name': 'Stickers',
      'img_src': '/thumbs/stickers-thumb.jpg',
      'tools': 'Sticker paper, Laminator',
      'description': 'I make stickers out of my doodles!',
      'tags' : ['codeless', 'sketches'],
      'key' : 'stickers',
      'date': '2017 - Present',
      'preview_url': 'none',
      'preview_type': 'none',
      'url': 'stickers',
      'mark': `
        \n I make stickers and occasionally sell them at artist alley / artist showcase events!
        \n ![stickers all](../images/stickers-6.jpg)
        \n\n <div class="fit2"><img src="../images/stickers-3.jpg"/><img src="../images/stickers-4.jpg"/></div>
        \n\n ![stickers all](../images/stickers-2.jpg)
        \n ![stickers all](../images/stickers-5.jpg)
        \n
        `
    },
    {
      'name': 'Digital Art',
      'img_src': '/thumbs/jellyfish-thumb.png',
      'tools': 'Photoshop, Procreate, Paint Tool SAI, CATS',
      'description': 'Digital artwork created between 2016 - 2018.',
      'tags' : ['codeless', 'sketches'],
      'key' : 'digital',
      'date': '2016 - Present',
      'preview_url': 'none',
      'preview_type': 'none',
      'url': 'digital-art',
      'mark': `# Under Construction
        \n website still under construction in some parts, please come back later :) `
    },
    {
      'name': 'Traditional Art',
      'img_src': '/thumbs/fan-bing-bing.jpg',
      'tools': 'acrylic paint, oil paint, watercolors, graphite pencils',
      'description': 'Traditional artwork created between 2015 - 2018.',
      'tags' : ['codeless', 'sketches'],
      'key' : 'pastlives',
      'date': '2015 - Present',
      'preview_url': 'none',
      'preview_type': 'none',
      'url': 'traditional-art',
      'mark': `# Under Construction
        \n website still under construction in some parts, please come back later :) `
    },
    {
      'name': 'Remel Platformmer Game',
      'img_src': '/thumbs/remel-thumb.png',
      'tools': 'C#, Unity, Photoshop',
      'description': 'Dreamlike platformmer game where user movement controls enemy movements. Made as part of a CMU Game Creation Society team and won first place at GCS Showcase.',
      'key' : 'remel',
      'tags' : ['code', 'Unity', 'collaborative'],
      'date': 'Fall 2017',
      'url': 'remel',
      'preview_url': "https://www.youtube.com/embed/NLhB65GUHm0",
      'preview_type': 'video',
      'mark': `# ABOUT
      \n Dreamlike platformmer game where user movement controls enemy movements.
      Made as part of a CMU Game Creation Society team and won first place at GCS Showcase.
      I worked on programming and animating the blob enemy. [More info](https://remel.itch.io/remel)`
    },
    {
      'name': 'HackMIT: ResQ',
      'img_src': '/thumbs/resq-thumb.jpg',
      'key' : 'resq',
      'tools': 'Javascript, IBM-Watson API, Firebase',
      'description': 'Won HackMIT IBM sponsor award. A all-in-one disaster preparedness + relief tool for both individuals and rescue orgs.',
      'tags' : ['code', 'web', 'collaborative', 'ML / AI'],
      'date': 'Fall 2018',
      'preview_url': 'https://www.youtube.com/embed/o8giqAKmIZw',
      'preview_type': 'video',
      'url': 'resq',
      'mark': `# ABOUT
      \n Made at 2018 HackMIT, won the Best Disaster Preparedness & Relief Solutions for IBM Call for Code Challenge award!
      \n An all-in-one disaster preparedness + relief tool.
      People can access free information about potential and
      ongoing disasters as well as giving rescue teams and aid organizations to assess needs
      for each specific event using Google analytics and location data.
      \n It has a working implementation of an IBM Watson natural language processing data pipeline
      that analyses real-time Twitter data to predict disaster damage better that the Federal Emergency Management Agency (FEMA).
      \n I made the user registration / login flow, the user dashboard and on the Firebase user information storing and retrieval.
      \n # DEVPOST POST [HERE](https://devpost.com/software/disaster-rescue-github-io)
      \n
      `
    },
    {
      'name': 'Utopia',
      'img_src': '/thumbs/utopia-thumb.jpg',
      'tools': 'Javascript, clmtracker',
      'key' : 'utopia',
      'description': 'Experience a world where you\'re always happy! Uses clmtracker API for facial feature tracking / modiciation.',
      'tags' : ['code', 'web'],
      'date': 'Fall 2018',
      'preview_url': '../images/utopia.png',
      'preview_type': 'image',
      'url': 'utopia',
      'mark': `# ABOUT
      \n Utopia is a web experience that puts a permanent smile on the user's face. Partially based on a clmtracker demo.
      \n ## TRY IT [HERE](https://khanniie-sites.github.io/good-vibes-only) `
    }
  ]
};

export default DATA;
