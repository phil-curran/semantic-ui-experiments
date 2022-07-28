// import $ from "jquery";
// import "./Sidebar.css";

// const WeekdayModel = () => {
//   $(document).ready(function () {
//     $(".ui.accordion").accordion({
//       selector: {
//         trigger: ".title",
//       },
//     });
//   });

//   const weekdayModel = {
//     dataOne: "test",
//     dataTwo: "test",
//     periods: {
//       bootup: {
//         title: "Bootup",
//         startTime: "",
//         endTime: "",
//         tasks: [
//           {
//             id: 1,
//             title: "Journal",
//             description: "Record any dreams",
//             completed: false,
//           },
//           {
//             id: 2,
//             title: "Track Data",
//             description: "Record sleep, weight, internet usage data",
//             completed: false,
//           },
//           {
//             id: 3,
//             title: "Hydrate",
//             description: "Electrolyte formula",
//             completed: false,
//           },
//           {
//             id: 4,
//             title: "Supplement Stack",
//             description: "Take them",
//             completed: false,
//           },
//           {
//             id: 5,
//             title: "Email Sort",
//             description: "Clean, prioritize, add to plan",
//             completed: false,
//           },
//           {
//             id: 6,
//             title: "Day Planning",
//             description: "Assign tasks to work blocks",
//             completed: false,
//           },
//         ],
//       },
//       workBlockOne: {
//         title: "Work Block One",
//         startTime: "",
//         endTime: "",
//         tasks: [
//           {
//             id: 1,
//             title: "Work",
//             description: "do some work",
//             completed: false,
//           },
//         ],
//       },
//     },
//     notes: [],
//   };

//   <div className="ui styled accordion">
//     {data.map((period, index) => {
//       return (
//         <div id="index" className="period">
//           <div className="title">
//             <i className="dropdown icon"></i>
//             {data.title}
//           </div>
//           <div className="content">
//             <div className="ui celled fluid table">
//               {tasks.map((task, taskIndex) => {
//                 return (
//                   <tr id={taskIndex} className="row">
//                     <td>
//                       <div className="ui checkbox">
//                         <input
//                           type="checkbox"
//                           name="task"
//                           value={task.title}
//                           checked={task.completed}
//                           onChange={() => {
//                             task.completed = !task.completed;
//                           }}
//                         />
//                         <label>{task.title}</label>
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>;

//   let periodsArray = Object.entries(weekdayModel.periods);

//   const result = periodsArray.map((period) => {
//     let data = period[1];
//     let tasks = data.tasks;
//     return (
//       <div className="checklist-block">
//         <h4>{data.title}</h4>
//         <div className="ui styled fluid accordion">
//           {tasks.map((task, taskIndex) => {
//             return (
//               <div className="drawer">
//                 <div className="title">
//                   <i className="dropdown icon"></i>
//                   {task.title}
//                   <div class="ui mini icon buttons right floated">
//                     <button class="ui green button">
//                       <i class="file icon"></i>
//                     </button>
//                     <button class="ui yellow button">
//                       <i class="save icon"></i>
//                     </button>
//                     <button class="ui yellow button">
//                       <i class="upload icon"></i>
//                     </button>
//                     <button class="ui red button">
//                       <i class="download icon"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="content">
//                   <ul>
//                     <li>{task.description}</li>
//                   </ul>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div className="ui container">
//       <div className="ui segment">{result}</div>
//     </div>
//   );
// };

// export default WeekdayModel;
