let slider = $(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
});


// burger
$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

// anim

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}


//   var audio = document.getElementById("myaudio");
//   audio.volume = 0.2;




// const TASKS = [];
//  let DIPLAY_TASKS = [];


//            let root = document.getElementById("s");
// 		   root.innerHTML = "";
// 		   const div = document.createElement("div");
// 		   DIPLAY_TASKS.forEach((task) => {
// 			    if (!task.isDeleted) {
// 			const div = document.createElement("div");
// 		    div.classList.add("task");

//     }});
  

// 	$(document).keypress(function (e) {
// 		if (e.which == 13) {
// 	  // get data from input by id
// 	  const title = document.getElementById("search__result_text").value;
	  
// 	  // const priority = PRIORITY.filter((priority) => priority.id === +priorityId)[0]
	 
// 	  // create template for task
// 	  const task = {
// 	    title: title,
// 	  };
// 	  // push task to TASKS
// 	  TASKS.push(task);
// 	  //clear input
// 	  document.getElementById("search__result_text").value = "";
// 	  // display elemets from TASKS
// 	  DIPLAY_TASKS = TASKS;
// 	  setElementOnDOM();
// 	}
// })


  
  



/*
{
  id: 1,
  title: 'JavaScript',
  description: 'Some description',
  createdAt: '2019-01-01',
  isDone: false,
  isDeleted: false,
  priority: 1,
}
*/

// const TASKS = [];
// let DIPLAY_TASKS = [];

// const PRIORITY = [
//   { id: 1, name: "Low" },
//   { id: 2, name: "Normal" },
//   { id: 3, name: "High" },
//   { id: 4, name: "Urgent" },
// ];

// // display elemets from TASKS inner HTML
// function setElementOnDOM() {
//   const root = document.getElementById("tasks");
//   root.innerHTML = "";
//   DIPLAY_TASKS.forEach((task) => {
//     if (!task.isDeleted) {
//       const div = document.createElement("div");
//       div.classList.add("task");
//       // add id to div
//       div.setAttribute("data-id", task.id);
//       div.innerHTML = `
//       <div class="task__title">
//         <h3>${task.title}</h3>
//         <p>${task.priority.name}</p>
//       </div>
//       <div class="task__description">
//         <p>${task.description}</p>
//       </div>
//       <div class="task__footer">
//         <p>${task.createdAt}</p>
//         <button class="task__button">Delete</button>
//       </div>
//     `;
//       root.appendChild(div);
//     }
//   });
// }

// function setPriorityOptions(id) {
//   // insert into the DOM by id
//   const root = document.getElementById(`${id}`);
//   PRIORITY.forEach((priority) => {
//     const option = document.createElement("option");
//     option.value = priority.id;
//     option.textContent = priority.name;
//     root.appendChild(option);
//   });
// }

// setPriorityOptions("priority");
// setPriorityOptions("filter_priority");

// document.getElementById("submit_form").addEventListener("click", (e) => {
//   e.preventDefault();
//   // get data from input by id
//   const title = document.getElementById("title_form").value;
//   const description = document.getElementById("description_form").value;
//   const priorityId = document.getElementById("priority").value;
//   // const priority = PRIORITY.filter((priority) => priority.id === +priorityId)[0]
//   const priority = PRIORITY.find((priority) => priority.id === +priorityId);
//   // create template for task
//   const task = {
//     id: TASKS.length + 1,
//     title: title,
//     description: description,
//     createdAt: new Date(),
//     isDone: false,
//     isDeleted: false,
//     priority: priority,
//   };
//   // push task to TASKS
//   TASKS.push(task);
//   //clear input
//   document.getElementById("title_form").value = "";
//   document.getElementById("description_form").value = "";
//   document.getElementById("priority").value = 1;
//   // display elemets from TASKS
//   DIPLAY_TASKS = TASKS;
//   setElementOnDOM();
// });

// // add event listener to delete button by class
// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("task__button")) {
//     const id = e.target.parentElement.parentElement.getAttribute("data-id");
//     const task = TASKS.find((task) => task.id === +id);
//     task.isDeleted = true;
//     // replace task in TASKS
//     TASKS.splice(TASKS.indexOf(task), 1, task);
//     DIPLAY_TASKS = TASKS;
//     setElementOnDOM();
//   }
// });

// document.getElementById("filter").addEventListener("change", (e) => {
//   if (e.target.value == 0) {
//     DIPLAY_TASKS = TASKS;
//     if (DIPLAY_TASKS.length == 0) {
//       document.getElementById("tasks").innerHTML = "No tasks";
//     } else {
//       setElementOnDOM();
//     }
//   } else if (e.target.value >= 1) {
//     const changedPriorityId = e.target.value;
//     DIPLAY_TASKS = TASKS.filter(
//       (task) => task.priority.id === +changedPriorityId
//     );
//     if (DIPLAY_TASKS.length == 0) {
//       document.getElementById("tasks").innerHTML = "No tasks";
//     } else {
//       setElementOnDOM();
//     }
//   }
// });

// // sort TASKS by date
// DIPLAY_TASKS = TASKS.sort((a, b) => {
//   return b.createdAt - a.createdAt;
// });

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// LIALIUK, [05.02.2023 13:35]
// async function getData() {
//   const response = await fetch(`${BASE_URL}/todos`);
//   const data = await response.json();
//   return data;
// }


// async function RunProgram() {
//   const data = await getData();
//   const filteredData = data.filter((item) => item.title[0].toLowerCase() == 's');
//   // sort TASKS by id in descending order
//   const sortedData = data.sort((a, b) => b.id - a.id);
//   console.log(filteredData);
//   console.log(sortedData);
// }

// LIALIUK, [05.02.2023 13:35]
// RunProgram();