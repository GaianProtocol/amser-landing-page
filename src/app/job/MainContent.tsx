export function MainContent({ mainContent }: { mainContent: string }) {
  return (
    // <div className="flex-1 p-6 space-y-6">
    //   <div>
    //     <div className="flex items-center space-x-2 mb-2">
    //       <h1 className=" font-bold ">
    //         🧠 Glint Dashboard Bounty on Superteam Earn
    //       </h1>
    //     </div>
    //     <p className="text-gray-600 text-sm">
    //       Ship a Solana dashboard → qualify for the Ambassador Program → share a
    //       $200 USDT prize + $GLNT allocation
    //     </p>
    //   </div>
    //   <BountySnapshot />
    //   <WhyThisBountyExists />
    //   <SubmissionChecklist />
    // </div>
    <div dangerouslySetInnerHTML={{ __html: mainContent }}></div>
  );
}

// function BountySnapshot() {
//   const prizePool = ["1st 800,000 VND", "2nd 400,000 VND", "3rd 200,000 VND"];

//   const submitSteps = [
//     "Publish the dashboard on <a href='' style='color: #51a2ff' target='_blank'>GlintAnalytics.com</a>",
//     "Tweet the link, tag <strong >@GlintAnalytics</strong> and one clear takeaway.",
//     "Drop the same link at <a href='' style='color: #51a2ff' target='_blank'>Discord → #ambassador-quests</a>.",
//   ];

//   const links = [
//     "Platform → <a href='' style='color: #51a2ff' target='_blank'>GlintAnalytics.com</a>",
//     "Discord → <a href='' style='color: #51a2ff' target='_blank'>Join Here</a>",
//     "Quick-start guide in <a href='' style='color: #51a2ff' target='_blank'>#announcements</a>",
//   ];

//   return (
//     <div className="flex flex-col space-y-4">
//       <div>
//         <h1 className="font-bold">Bounty Snapshot</h1>
//       </div>
//       <div className="space-y-4">
//         <div>
//           <h4 className="font-bold mb-2">Prize Pool 2,000,000 VND</h4>
//           <ul className="text-sm text-gray-600 space-y-2">
//             {prizePool.map((prize, index) => (
//               <li key={index}>• {prize}</li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold mb-2">What to Build</h4>
//           <p className="text-sm text-gray-600">
//             A <span className="font-bold">new Solana-focused dashboard</span> on{" "}
//             <span className="text-blue-400">GlintAnalytics.com</span> that
//             surfaces real insight (protocol stats, wallet flows, DeFi trends,
//             whatever you find interesting).
//           </p>
//         </div>
//         <div>
//           <h4 className="font-bold mb-2">How to Submit (3 steps)</h4>
//           <ol className="text-sm text-gray-600 space-y-2">
//             {submitSteps.map((step, index) => (
//               <li key={index}>
//                 {index + 1}.{" "}
//                 <span dangerouslySetInnerHTML={{ __html: step }}></span>
//               </li>
//             ))}
//           </ol>
//         </div>
//         <div>
//           <p className="text-sm text-gray-600">
//             <strong>Deadline:</strong> 7 days after this bounty goes live on
//             Superteam Earn.
//           </p>
//         </div>
//         <div>
//           <h4 className="font-bold mb-2">Links</h4>
//           <ul className="text-sm space-y-1">
//             {links.map((link, index) => (
//               <li key={index}>
//                 •&nbsp;&nbsp;
//                 <span dangerouslySetInnerHTML={{ __html: link }}></span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function WhyThisBountyExists() {
//   const roles = [
//     "Technical Ambassadors - create dashboards",
//     "Content Ambassadors - create threads and blogposts",
//     "Community Ambassadors - engage and stay active",
//   ];

//   return (
//     <div className="flex flex-col ">
//       <div className="flex items-center">
//         <h1 className="font-bold mb-2">🚀 Why This Bounty Exists</h1>
//       </div>
//       <div className="space-y-2">
//         <p className="text-sm text-gray-600">
//           We&#39;re not just giving out $200 USDT.
//         </p>
//         <p className="text-sm text-gray-600">
//           We&#39;re recruiting the next cohort of{" "}
//           <strong>Glint Ambassadors</strong>.
//         </p>
//         <p className="text-sm text-gray-600">
//           If your dashboard submitted on GlintAnalytics.com meets quality
//           standards, you&#39;ll be granted the{" "}
//           <strong>Dashboard Creator</strong> role in Discord.
//         </p>
//         <p className="text-sm text-gray-600 mb-4">That role unlocks:</p>
//         <div className="space-y-4">
//           <div>
//             <h4 className="font-bold mb-1">4-Week Ambassador Program</h4>
//             <p className="text-sm text-gray-600">Pool</p>
//             <p className="text-sm text-gray-600">
//               100,000 $GLNT distributed every 4 weeks
//             </p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-1">Roles</h4>
//             <ul className="text-sm text-gray-600 space-y-2">
//               {roles.map((role, index) => (
//                 <li className="pl-2" key={index}>
//                   •&nbsp;&nbsp;{role}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-1">Tools</h4>
//             <p className="text-sm text-gray-600">
//               DRP quests + Engage Bot leaderboard
//             </p>
//             <p className="text-sm text-gray-600">
//               In short: one Solana dashboard today can get you on a recurring
//               $GLNT payroll tomorrow.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function SubmissionChecklist() {
//   const checklistItems = [
//     "Uses Solana data",
//     "Loads without errors; visuals are clear",
//     "Tweet tags @GlintAnalytics and includes a concise insight",
//     "Daily posts allowed in #ambassador-quests before the 14-day deadline",
//   ];

//   return (
//     <div className="flex flex-col space-y-4">
//       <div className="flex items-center">
//         <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
//         <h1 className="font-bold">Submission Checklist</h1>
//       </div>
//       <div className="space-y-2">
//         <ul className="space-y-2">
//           {checklistItems.map((item, index) => (
//             <li key={index} className="flex items-start space-x-3 pl-2">
//               <span className={`text-sm `}>•&nbsp;&nbsp;{item}</span>
//             </li>
//           ))}
//         </ul>
//         <Separator className="my-4" />
//         <p className="text-sm text-gray-600">
//           We score on usefulness, originality, and presentation. Top three split
//           the USDT, but all solid entries can graduate into the Ambassador
//           Program.
//         </p>
//         <p className="text-sm text-gray-600">
//           Ready to turn Solana data into long-term rewards?
//         </p>
//         <p className="text-sm text-gray-600">
//           Build. Tweet. Submit. See you in Discord.
//         </p>
//       </div>
//     </div>
//   );
// }
