// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		folder: "Universe Simulation",
		title: 'Universe Simulation',
		category: 'Web Application',
		description_short: "",
		description_long: "We created this software for a Computer Graphics and Image Processing course. You can create your own universe by scanning an image! Simply draw an image and scan the image inside of the software to create the universe. The user can define various attributes like planet types, distance between planets and planet sizes inside the image. The planets are procedural generated by using a noise function and therefore never look the same. Afterwards the user can explore the universe in 3D.",
		roles: ["Graphics Programming", "UI Programming"],
		types: ["University Project", "Group Project (4 Members)"],
		created: "August 2019 - January 2020",
		tools: "",
		features: [
			{
				title: "Draw your Universe",
				video: "1.webm",
				description: "Draw your image and take a photo of it inside the application or load an existing image into the programm. The colored circles represent different planet types like a sun planet or an earth like planet. The lines between planets indicate which planet is rotating arround which. The universe gets created out of the image and you can explore it in 3D."
			},
			{
				title: "Explore the Universe",
				video: "3.webm",
				description: "You can rotate the scene using the mouse and also enable various settings like the visibility of the orbits. We implemented mouse-picking so the user can select a planet to have a closer look at it. We used a convex combination between Matrices to achieve the smooth zoom to a planet. Each planet also has a random name and you get information about it like the size or the ammount of entities on it."
			},
			{
				title: "Procedural Planets",
				video: "4.webm",
				description: "Every planet is created using a noise function. Therefore every universe is unique even if you generate 2 universes from the same image. Occurrence and position of objects on the planet like plants are also random. Most objects on the planet are modeled externaly in Maya and are imported into the project. These objects are also aligned correctly on the surcface on which they are placed."
			},
			{
				title: "Planet Editor",
				video: "5.webm",
				description: "We created a planet edtior where you can create your own unique planet in real-time by editing the parameters of the noise function."
			},
			{
				title: "OBJ Export",
				video: "6.webm",
				description: "Planets can be exported as .obj file format at anytime and can be loaded into any 3D programm e.g. Maya or it can even be printed with a 3D printer!"
			},
			{
				title: "Low Poly Look",
				video: "7.webm",
				description: "We aimed for the low poly look to make it visually more appealing. Shaders used for lightning calculations, animating the water and particles are self written and optimized for the low poly look. ...and yes we also got a Candy Planet if you haven't noticed."
			}
		],
		contents: [
			{
				type: "Executeable",
				url: "",
			},
			{
				type: "Documentation",
				url: "",
			},
			{
				type: "Code",
				url: "",
			}
		],
		images: ["1.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp","8.webp","9.webp","10.webp"]
	},

	{
		folder: "Crazier Machines",
		title: 'Crazier Machines',
		category: '',
		description_short: "",
		description_long: "Crazier Machines is the name of a little game we create for a simulation course at my university. We had to create a 2D physics engine that features algorithms for collision detection and collision resolution. Goal of the game is to transport a ball into a bucket and the user has certain objects at disposal to achieve that. Objects can be freely placed into the scene and when the simulation is running the moveable objects collide phisically correcttly with the other objects.",
		roles: ["Simulation Programming", "Graphics Programming", "UI Programming"],
		types: ["University Project", "Group Project (4 Members)"],
		created: "March 2020 - June 2020",
		tools: "",
		features: [
			{
				title: "2D Physics",
				video: "1.webm",
				description: "We test collision using the Separating Axis Theorem and a convex bounding polygon each object has. We create the bounding polygon manually with a separate programm. We first tried to automate this process by creating a bounding polygon out of the 3D modell data we got but the polygon didnt always interpret the form of the object correcttly and sometimes had too many edges. After a collision occurs we calculate the new velocity and acceleration using physically correct formulas."
			},
			{
				title: "Level Editor",
				video: "2.webm",
				description: "Objects can be added to the scene through drag and drop. Selecting an object by clicking on it opens a transformation menue where the user can scale, rotate and position the element. All object specific settings can also be edited through a menue inside the sidebar which appears when the user selected an object."
			},
			{
				title: "Level Export/Import",
				video: "3.webm",
				description: "Levels generated inside the editor can be saved localy. Saved levels can be imported back into the game to be played."
			},
			{
				title: "Special Objects",
				video: "4.webm",
				description: "We modelled special objects like a hair dryer that emmits wind or a portal that transports an object. Settings of these objects like the wind force or the rotation direction of the fidget spinner can also be edited."
			},
			{
				title: "Campaign Mode",
				video: "5.webm",
				description: "You can choose between 12 really crazy levels. Can you beat them all ?"
			},
			{
				title: "2½D",
				video: "6.webm",
				description: "Although the simulation is running in 2D all objects are rendered in 3D and the user can rotate the camera to watch the simulation in 3D. The 3D engine is selfwritten and utilizes OpenGL. We used the same rendering engine from my Universe Simulation project because the engine was developed not only for the project but as a more general system that can be used in multiple future projects."
			}
			
		],
		contents: [
			{
				type: "Executeable",
				url: "",
			},
			{
				type: "Documentation",
				url: "",
			},
			{
				type: "Code",
				url: "",
			}
		],
		images: ["1.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp"]
	},

	{
		folder: "OpenFile",
		title: "OpenFile App",
		category: '',
		description_short: "",
		description_long: "Open File is the name for our file hosting service application which we created for a User Experience Design course. The task was to create a Natural User Interface (NUI) which transmits trust and safety. We specificly used heuristica, colors, icons and more to convey the feelings to the user. After the design process was done, we created smooth and modern Animations in After Effects to bring the application to lif",
		roles: ["UI Design", "UX Design", "Animation Design"],
		types: ["University Project", "Group Project (2 Members)"],
		created: "April 2020 - June 2020",
		tools: "",
		features: [
			{
				title: "The App",
				// video: "1.webm",
				description: "Open File is the name for our file hosting service application. The user can upload files like photos or videos from the phone and access them anywhere or even share the files. Google Drive, Dropbox or Microsoft OneDrive offer similar features but we want to convince potential users with a modern and creative interface. Our target group are software developers who can upload, share and view their code online with features like code highlighting and code merging."
			},
			{
				title: "Logo Design",
				// video: "1.webm",
				description: "The logo should quickly visualize what the app is all about but at the same time look trustfull. We used multiple rectangular elements which represents files. The rectangular elements are cutt off with a circle which makes the elements look like a bright happy smile. Just like the Amazon logo the hidden smile subconsciously creates joy and can create trust towards the user."
			},
			{
				title: "Icon Design",
				video: "2.webm",
				description: "Our icons should appear really friendly nearly childlike with really rounded corners and no sharp corners. We used simple icons that are already familiar to the user like the cut and copy icons so the user can recognize them immediately. We experimented with colors and background elements for the icons."
			},
			{
				title: "Design Concepts",
				video: "3.webm",
				description: "We went through multiple itterations of our app and always tried to focus on the core feature the file management. The user should immediately find the files hes searching for and not get annoyed with other stuff like buttons or unnecessary text. Most file management services only list all folders vertically thats why we decided to break this linear pattern with a horizontal bar at the top."
			},
			{
				title: "File Upload Animation",
				video: "4.webm",
				description: "For each animation we started out with a small story board that contains the wireframes for each site and the designed version of it. We used after effects and not a prototyping software to animate the interaction because the prototyping softwares didnt offer the features we needed e.g. adjust the animation curves for each animation."
			},
			{
				title: "All Animations",
				video: "6.webm",
				description: "We adjusted the speed curves of each animation that it looks more natural. The animations also shouldnt take too long otherwise the user is annoyed and can not interact with the system."
			}
		],
		contents: [
			{
				type: "Executeable",
				url: "",
			},
			{
				type: "Documentation",
				url: "",
			},
			{
				type: "Code",
				url: "",
			}
		],
		images: ["1.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp","8.webp","9.webp","10.webp","11.webp","12.webp"]
	},

	{
		folder: "Revitalize",
		title: "Revitalize Website",
		category: '',
		description_short: "",
		description_long: "We created this website for a Web Developement and Web & Corporate Design course. We had to create a complete corporate identity including a logo, a target group, corporate philosophy and more. We also had to design the web pages including wireframes, site interactions and information architecture. After the Design process we had to programm the website using client side storage and server side form validation.",
		roles: ["Web Developement", "Corporate Design", "Web Design", "UX Design"],
		types: ["University Project", "Group Project (3 Members)"],
		created: "September 2019 - January 2020",
		tools: "",
		features: [
			{
				title: "The Company",
				// video: "1.webm",
				description: "We created the company 'Revitalize' which produces natural fitness supplements. The company sells products like whey protein or pre workout boosters at a really high quality. Products are sold through their online Website. The company targets younger people who care for the environment and don't want to consume synthetic or fake products. The target group values transparency, honesty, personality and quality."
			},
			{
				title: "Logo Design",
				video: "1.webm",
				description: "Matching the corporate's identity we had to create a logo. The logo shows a kettlebell (a Training device for free weight training) and hidden inside it you can find a leaf. The logo should represent nature, strength but also high quality. We used a fibonacci grid for the different elements in the logo to get the proportions right and to get a more balanced visualisation. The logo also uses color gradients and the leaf makes use of the negative space which gives the logo a modern touch."
			},
			{
				title: "Corporate Design",
				video: "2.webm",
				description: "We created a moodboard to identify how the company should represent itself in terms of color, fonts and imagery. We went for a modern typography that looks natural and personal. The colors represent nature but should also feel unique and not like a greenwashing company. We went for many small variations of a green tone to not overwhelm the viewer with flashy colors."
			},
			{
				title: "Wireframes",
				video: "3.webm",
				description: "Before we started to design the pages we starte out with wireframes and layed the foundation for each site. We already designed the wireframes a little bit to get a better feeling on how things should look later on."
			},
			{
				title: "Concept Design",
				video: "4.webm",
				description: "We aimed for simple site designs that dont overwhelm the viewer. We also used a Wave element on the start of each Page and also cut the elements in a Wave style to prevent hard edges on pictures for a more natural look. The waves are created and animated using JavaScript and are a welcome change to standard static sites. We tried to minimize blank whitespaces of the site with slightly visible background images of athletic people to emphasize that this page is about a fitness product."
			},
			{
				title: "Product Page",
				video: "5.webm",
				description: "The Product site features a image carousell, a editable nutrition table and a extended navigation Bar to make it really easy to get information about the product, but also makes it possible to buy the product at any time, without scrolling up to a 'buy button'."
			},
			{
				title: "Cookies",
				video: "6.webm",
				description: "We use client-side storage in form of cookies to save which items are in the shopping cart. The user can leave the site and when he comes back he will find the same items in his shopping cart."
			}
		],
		contents: [
			{
				type: "Executeable",
				url: "",
			},
			{
				type: "Documentation",
				url: "",
			},
			{
				type: "Code",
				url: "",
			}
		],
		images: ["1.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp","8.webp","9.webp","10.webp","11.webp","12.webp","13.webp","14.webp","15.webp"]
	},

	{
		folder: "Brush Cleaner",
		title: "Brush Cleaner",
		category: '',
		description_short: "",
		description_long: "This is a product concept for a Computer-Aided Design (CAD) course. It's a cleaning tool for makeup brushes. It's a 2 part set that can be put together to save space in the bathroom. The bottle at the bottom holds a cleaning liquid and The bottle at the top has little nubs inside and the user can rub the brushes against the nubs to clean them. The top bottle can also be used as a brush holder when the set is put together.",
		roles: ["3D Modeling", "Industrial Design"],
		types: ["University Project", "Individual Project"],
		created: "May 2019 - June 2019 ",
		tools: "",
		features: [
			{
				title: "Bottom Bottle",
				video: "1.webm",
				description: "This bottle should contain cleaning liquid for the brushes. The main goal was to make it look and feel not like an ugly cleaning liquid bottle but like an expensive parfume flacon so it integrates much better into a bathroom."
			},
			{
				title: "Top Bottle",
				video: "2.webm",
				description: "This bottle has multiple kinds of nubs inside it. The user should fill in water and a bit of the cleaning liquid of the bottom bottle and rub the brushes against the nubs to clean the brushes."
			},
			{
				title: "Combined Set",
				video: "3.webm",
				description: "The 2 parts of the set can be used completely sepperately, but the user can also put them together to save space in the bathroom. Both bottles are designed that they can be easily stacked."
			}
		],
		contents: [
			{
				type: "Executeable",
				url: "",
			},
			{
				type: "Documentation",
				url: "",
			},
			{
				type: "Code",
				url: "",
			}
		],
		images: ["1.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp"]
	},

	{
		folder: "Arcade Automat",
		title: 'Arcade Automat',
		category: '',
		description_short: "",
		description_long: "I created this application together with a fellow student for the course Algorithms and Datastructures. We had to implement certain algorithms of the course and we decided to make this little Arcade Automat which features the games Pac-Man and Snake. We used merge and heap sort to sort a high score list, the A* path finding algorithm in the pacman game and a binary search algorithm to search for names inside the high score list.",
		roles: ["Game Programming", "UI Programming"],
		types: ["University Project", "Group Project (2 Members)"],
		created: "April 2019 - July 2019",
		tools: "",
		features: [
			{
				title: "Retro Menue",
				video: "1.webm",
				description: "We aimed for a retro menue that can only be controled with a keyboard. It also features a settings menue where you can turn off sounds, change window size, change controls and more. By pressing the enter key durring a game you can return to the menue and restart/resume the game."
			},
			{
				title: "Sorted Highscores",
				video: "2.webm",
				description: "We used merge and heap sort to sort the high score list and a binary search algorithm to search for names. If you loose a game of Pac-Man or Snake you can enter your name and the score will be saved together with ur name. The Highscores also get saved locally into a file, so they wont get lost when you close the programm."
			},
			{
				title: "Pac-Man",
				video: "2.webm",
				description: "I tired to copy the original Pac-Man as good as possible. I used the A*Pathfindin algorithm for the ghosts to move arround. The ghosts also follow the original patterns of the game where they chase Pac-Man. Ghosts also turn invisible and move back to their home when you touch them with the power-up on."
			},
			{
				title: "Multiple Levels",
				video: "3.webm",
				description: "The characters don't follow a strict path so it's pretty easy to add new levels just by defining the walls of the Level. Future work would be a level editor to make very own Pac-Man levels. This level features the logo and name of my university in flashing colors."
			}
		],
		contents: [
			{
				type: "Executeable",
				url: "",
			},
			{
				type: "Documentation",
				url: "",
			},
			{
				type: "Code",
				url: "",
			}
		],
		images: ["1.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp","8.webp","9.webp","10.webp","11.webp","12.webp"]
	}
];

export default projects;
