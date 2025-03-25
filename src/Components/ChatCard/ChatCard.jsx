
// import { Box, IconButton, Typography } from "@mui/material";
// import React, { useState } from "react";
// import Grid from "@mui/material/Grid2";
// import avatar from "../../asstes/Avatar.png";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// import aiAvatar from "../../asstes/Ai-Logo.png";
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';



// const ChatCard = ({ chat }) => {
//   const [feedback, setFeedback] = useState(null);
//   const [likeDislike, setLikeDislike] = useState(null);


//   const handleFeedBack =(e , feedbackType)=>{
//     if (feedbackType === "like") {
//       chat.like = "like";
//       setLikeDislike("like");
//     } else {
//       chat.like = "dislike";
//       setLikeDislike("dislike");
//     }
//     console.log(chat);
//   }

//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{
//         padding: "10px",
//         margin: "10px 20px",
//         // Set a maximum height to prevent the card from growing indefinitely.
//         // The card will expand up to 150px; beyond that, the message content scrolls.
//         maxHeight: "150px",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//         borderRadius: "20px",
//         backgroundColor: chat.reply ? "#F5F5F5" : "#E3F2FD",
//         transition: "all 0.3s ease-in-out",
//         overflow: "hidden",
//         alignItems: "flex-start", // Align items to the top.
//       }}
//     >
//       {/* Column 1: Avatar */}
//       <Grid
//         item
//         sx={{
//           width: "50px", // Fixed width for the avatar column.
//           flexShrink: 0,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "flex-start",
//         }}
//       >
//         <img
//           src={chat.reply ? aiAvatar : avatar}
//           alt="avatar"
//           style={{ borderRadius: "50%", height: "40px", width: "40px" }}
//         />
//       </Grid>

//       {/* Column 2: Message Content */}
//       <Grid item sx={{ flex: 1 }}>
//         <Typography variant="subtitle2" fontWeight="bold">
//           {chat.user}
//         </Typography>
//         {/* Wrap message text in a scrollable Box if it exceeds available space */}
//         <Box
//           sx={{
//             maxHeight: "80px", // Limit the height for the message text.
//             overflowY: "auto",
//           }}
//         >
//           <Typography
//             variant="body2"
//             sx={{ wordBreak: "break-word", overflowWrap: "break-word" }}
//           >
//             {chat.message}
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "4px",
//             marginTop: "4px",
//           }}
//         >
//           <Typography variant="caption" color="textSecondary">
//             {chat.time}
//           </Typography>
//           {chat.reply && (
//             <>
//               <IconButton
//                 size="small"
//                 sx={{ padding: "2px" }}
//                 color={likeDislike === "like" ? "primary" : "default"}
//                 onClick={(e) =>handleFeedBack(e, "like") }
//               >
//                 <ThumbUpIcon fontSize="small" />
//               </IconButton>
//               <IconButton
//                 size="small"
//                 sx={{ padding: "2px" }}
//                 color={likeDislike === "dislike" ? "error" : "default"}
//                 onClick={(e) =>handleFeedBack(e, "dislike") }
//               >
//                 <ThumbDownIcon fontSize="small" />
//               </IconButton>
//             </>
//           )}
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default ChatCard;
import { Box, IconButton, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import avatar from "../../asstes/Avatar.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import aiAvatar from "../../asstes/Ai-Logo.png";

const ChatCard = ({ chat, onFeedbackClick }) => {
  const [likeDislike, setLikeDislike] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handleFeedBack = (e, feedbackType) => {
   // Instead of mutating chat, call a callback passed from the parent:
  onFeedbackClick({ ...chat, like: feedbackType });
  setLikeDislike(feedbackType);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "10px",
        margin: "10px 20px",
        maxHeight: "150px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "20px",
        backgroundColor: chat.reply ? "#F5F5F5" : "#E3F2FD",
        transition: "all 0.3s ease-in-out",
        overflow: "hidden",
        alignItems: "flex-start",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Column 1: Avatar */}
      <Grid
        item
        sx={{
          width: "50px",
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <img
          src={chat.reply ? aiAvatar : avatar}
          alt="avatar"
          style={{ borderRadius: "50%", height: "40px", width: "40px" }}
        />
      </Grid>

      {/* Column 2: Message Content */}
      <Grid item sx={{ flex: 1 }}>
        <Typography variant="subtitle2" fontWeight="bold">
          <span>{chat.user}</span>
        </Typography>
        <Box
          sx={{
            maxHeight: "80px",
            overflowY: "auto",
          }}
        >
          <Typography
            variant="body2"
            sx={{ wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            {chat.message}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginTop: "4px",
          }}
        >
          <Typography variant="caption" color="textSecondary">
            {chat.time}
          </Typography>
          {chat.reply && hovered && (
            <>
              <IconButton
                size="small"
                sx={{ padding: "2px" }}
                color={likeDislike === "like" ? "primary" : "default"}
                onClick={(e) => handleFeedBack(e, "like")}
              >
                <ThumbUpIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ padding: "2px" }}
                color={likeDislike === "dislike" ? "error" : "default"}
                onClick={(e) => handleFeedBack(e, "dislike")}
              >
                <ThumbDownIcon fontSize="small" />
              </IconButton>
              <Button
                variant="outlined"
                size="small"
                onClick={() => onFeedbackClick(chat)}
              >
                Give Feedback
              </Button>
            </>
          )}
        </Box>
        {chat.feedback && (
          <Typography variant="caption" color="secondary">
            Feedback: {chat.feedback}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ChatCard;
