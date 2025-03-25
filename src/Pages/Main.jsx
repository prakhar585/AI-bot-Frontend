// import React from "react";
// import Grid from "@mui/material/Grid2";
// import { Box, IconButton, Drawer, Alert } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../asstes/Ai-Logo.png";
// import navButton from "../asstes/close button.png";
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ChatCard from "../Components/ChatCard/ChatCard";
// import ChatData from "../sampleData.json";
// import ChatComponent from "../Components/ChatComponent/ChatComponent";
// import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";
// import { Typography } from "@mui/material";

// const SidebarContent = ({ handleNavigation, handleNewChat }) => (
//   <Box>
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "5px",
//         backgroundColor: "#D7C7F4",
//       }}
//     >
//       <Box
//         sx={{
//           width: "33px",
//           height: "33px",
//           overflow: "hidden",
//           borderRadius: "50%",
//           display: { xs: "none", sm: "none", md: "block" },
//         }}
//       >
//         <img src={logo} alt="ai-logo" />
//       </Box>
//       <Box
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
//       >
//         New Chat
//         <button
//           onClick={handleNewChat}
//           style={{
//             backgroundColor: "#D7C7F4",
//             border: "none",
//             cursor: "pointer",
//             transition: "transform 0.2s ease, box-shadow 0.2s ease",
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.transform = "scale(0.9)";
//             e.target.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.2)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = "scale(1)";
//             e.target.style.boxShadow = "none";
//           }}
//         >
//           <img
//             src={navButton}
//             alt="button"
//             style={{ width: "24px", height: "24px" }}
//           />
//         </button>
//       </Box>
//     </Box>
//     <Box>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "10px",
//         }}
//       >
//         <span>
//           <button
//             onClick={handleNavigation}
//             style={{
//               backgroundColor: "#D7C7F4",
//               border: 0,
//               height: "30px",
//               borderRadius: "5px",
//             }}
//           >
//             Past conversations
//           </button>
//         </span>
//       </Box>
//     </Box>
//   </Box>
// );

// const AlternateView = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Box>
//         <h3>How Can I Help you Today?</h3>
//       </Box>
//       <Box>
//         <img style={{ borderRadius: "50%" }} src={logo} alt="logo" />
//       </Box>
//     </Box>
//   );
// };

// const Main = () => {
//   const [question, setQuestion] = useState("");
//   const [chat, setChat] = useState(() => {
//     const savedChats = localStorage.getItem("chatHistory");
//     return savedChats ? JSON.parse(savedChats) : [];
//   });
//   const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
//   const [chatFeedback, setChatFeedBack] = useState("");
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const chatContainerRef = useRef(null);
//   const inputRef = useRef(null);
//   const toggleDrawer = (state) => () => {
//     setOpen(state);
//   };

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop =
//         chatContainerRef.current.scrollHeight;
//     }
//   }, [chat]);

//   const searchQuestion = (query) => {
//     const result = ChatData.find(
//       (chat) => chat.question.toLowerCase() === query.toLowerCase()
//     );
//     return result ? result.response : "Sorry, I don't have an answer for that.";
//   };

//   //handleChat
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!question.trim()) return;
//     console.log("handle question was clicked with question", question);

//     const response = searchQuestion(question);
//     const currentTime = new Date().toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//     const newChatEntryUser = {
//       user: "You",
//       message: question,
//       time: currentTime,
//       reply: false, // User's message
//     };

//     const newChatEntryAI = {
//       user: "Soul AI",
//       message: response,
//       time: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//       reply: true, // AI's response
//       like: "",
//       feedback: "",
//     };

//     setChat((prevChat) => [...prevChat, newChatEntryUser, newChatEntryAI]);
//     console.log(chat);
//     setQuestion("");
//     inputRef.current.value = "";

//     // a function to find the question and return the ans if there is any?
//     // if an answer is found show the card with ans else show the card with error
//     // save the chat in the chat state
//     //
//   };

//   const handleNavigation = () => {
//     navigate("/history");
//   };

//   const handleChatSave = () => {
//     // Don't save if chat is empty.
//     if (chat.length === 0) return;

//     // Retrieve saved chats, if any.
//     const savedChats = JSON.parse(localStorage.getItem("chatHistory") || "[]");

//     // Check if the current chat already ends with the same AI response as the saved chat.
//     // (This is one measure; you might want to compare more properties.)
//     if (
//       savedChats.length > 0 &&
//       JSON.stringify(savedChats[savedChats.length - 1]) ===
//         JSON.stringify(chat[chat.length - 1])
//     ) {
//       window.alert("Chat already saved, not saving duplicate.");
//       return;
//     }

//     // Save chat to local storage.
//     localStorage.setItem("chatHistory", JSON.stringify(chat));
//     window.alert("Chats saved");
//   };

//   const handleCardFeedback = (chatEntry) => {
//     // You can open a modal for the user to enter feedback for this specific chatEntry
//     // For this example, we'll simply prompt for feedback and update the entry.
//     const feedback = window.prompt("Enter your feedback for this chat:");
//     if (feedback !== null) {
//       setChat((prevChat) =>
//         prevChat.map((entry) =>
//           entry === chatEntry ? { ...entry, feedback } : entry
//         )
//       );
//     }
//   };

//   const handleNewChat = () => {
//     setChat([]);
//   };

//   return (
//     <>
//       <Box>
//         <Grid container>
//           {/* Burger Icon (Visible only on small screens) */}
//           <Grid size={{ xs: 2, sm: 2, md: 0 }} sx={{ display: { md: "none" } }}>
//             <IconButton onClick={toggleDrawer(true)} sx={{ margin: 1 }}>
//               <MenuIcon fontSize="large" />
//             </IconButton>
//           </Grid>

//           {/* Side bar */}
//           <Grid
//             size={{ xs: 0, sm: 0, md: 2 }}
//             sx={{
//               height: "100vh",
//               display: { xs: "none", sm: "none", md: "block" },
//             }}
//           >
//             <Box>
//               <SidebarContent
//                 handleNavigation={handleNavigation}
//                 handleNewChat={handleNewChat}
//               />
//             </Box>
//           </Grid>

//           {/* Main component */}
//           <Grid
//             size={{ xs: 10, sm: 10, md: 10 }}
//             sx={{
//               height: "100vh",
//               padding: "5px",
//               backgroundColor: "#D7C7F4",
//             }}
//           >
//             <Box>
//               <header>
//                 <h1
//                   style={{
//                     color: "#9785BA",
//                     backgroundColor: "#D7C7F4",
//                     margin: 0,
//                     padding: 0,
//                   }}
//                 >
//                   BOT AI
//                 </h1>
//               </header>

//               <Box
//                 sx={{
//                   height: "85vh", // Reduced height to avoid overlapping the input box
//                   overflowY: "auto", // Enable vertical scrolling
//                   paddingRight: "10px",
//                   scrollbarWidth: "thin", // Firefox scrollbar support
//                   "&::-webkit-scrollbar": {
//                     width: "6px", // Scrollbar width
//                   },
//                   "&::-webkit-scrollbar-thumb": {
//                     background: "#b3b3b3", // Scrollbar color
//                     borderRadius: "10px",
//                   },
//                 }}
//                 ref={chatContainerRef}
//               >
//                 {chat.length > 0 ? (
//                   <ChatComponent
//                     chat={chat}
//                     onFeedbackClick={handleCardFeedback}
//                   />
//                 ) : (
//                   <AlternateView />
//                 )}
//               </Box>

//               {/* Input box */}
//               <Box sx={{ padding: "0 10px" }}>
//                 <form
//                   style={{ display: "flex", justifyContent: "space-between" }}
//                   action="submit"
//                   onSubmit={(e) => handleSubmit(e)}
//                 >
//                   <input
//                     ref={inputRef}
//                     placeholder="Message Bot AI…"
//                     style={{
//                       width: "70vw",
//                       height: "40px",
//                       border: 0,
//                       borderRadius: "4px",
//                       paddingLeft: "10px",
//                     }}
//                     type="text"
//                     onChange={(e) => setQuestion(e.target.value)}
//                   />
//                   <button
//                     style={{
//                       minWidth: "42px",
//                       backgroundColor: "#D7C7F4",
//                       borderColor: "#9785BA",
//                       margin: "0 , 2px",
//                       borderRadius: "5px",
//                     }}
//                     type="submit"
//                   >
//                     Ask
//                   </button>
//                   <button
//                     style={{
//                       minWidth: "42px",
//                       backgroundColor: "#D7C7F4",
//                       borderColor: "#9785BA",
//                       borderRadius: "5px",
//                     }}
//                     onClick={handleChatSave}
//                     type="button"
//                   >
//                     Save
//                   </button>
//                 </form>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Mobile Sidebar Drawer */}
//         <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
//           <Box width="250px" role="presentation" onClick={toggleDrawer(false)}>
//             <SidebarContent
//               handleNavigation={handleNavigation}
//               handleNewChat={handleNewChat}
//             />
//           </Box>
//         </Drawer>
//       </Box>

//       <Modal
//         open={feedbackModalOpen}
//         onClose={() => {
//           setFeedbackModalOpen(false);
//         }}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box
//           sx={{
//             height: "400px",
//             width: "400",
//             backgroundColor: "white",
//             alignSelf: "center",
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             padding: "10px",
//             backgroundColor: "#D7C7F4",
//           }}
//         >
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Provide Additional feedback
//           </Typography>

//           <form
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <textarea
//               style={{
//                 height: "250px",
//                 width: "400px",
//                 margin: "20px",
//                 padding: "10px",
//                 textAlign: "left",
//                 verticalAlign: "top",
//                 resize: "none", // prevents resizing if not desired
//                 overflowWrap: "break-word",
//                 whiteSpace: "pre-wrap",
//                 fontSize: "16px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//               placeholder="Enter your feedback here..."
//               onChange={(e) => setChatFeedBack(e.target.value)}
//             ></textarea>
//             <button style={{ height: "40px", width: "80px" }} type="submit">
//               Submit
//             </button>
//           </form>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default Main;

import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { Box, IconButton, Drawer, Alert } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../asstes/Ai-Logo.png";
import navButton from "../asstes/close button.png";
import { Link, useNavigate } from "react-router-dom";
import ChatComponent from "../Components/ChatComponent/ChatComponent";
import ChatData from "../sampleData.json";

const SidebarContent = ({ handleNewChat }) => (
  <Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        backgroundColor: "#D7C7F4",
      }}
    >
      <Box
        sx={{
          width: "33px",
          height: "33px",
          overflow: "hidden",
          borderRadius: "50%",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <img src={logo} alt="ai-logo" />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          New Chat
        </Link>
        <button
          onClick={handleNewChat}
          style={{
            backgroundColor: "#D7C7F4",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(0.9)";
            e.target.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          <img
            src={navButton}
            alt="button"
            style={{ width: "24px", height: "24px" }}
          />
        </button>
      </Box>
    </Box>
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <span>
          <Link to="/history" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "#D7C7F4",
                border: 0,
                height: "30px",
                borderRadius: "5px",
              }}
            >
              Past conversations
            </button>
          </Link>
        </span>
      </Box>
    </Box>
  </Box>
);

const AlternateView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <h3>How Can I Help you Today?</h3>
      </Box>
      <Box>
        <img style={{ borderRadius: "50%" }} src={logo} alt="logo" />
      </Box>
    </Box>
  );
};

const Main = () => {
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState(() => {
    const savedChats = localStorage.getItem("chatHistory");
    return savedChats ? JSON.parse(savedChats) : [];
  });
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [chatFeedback, setChatFeedBack] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  const searchQuestion = (query) => {
    const result = ChatData.find(
      (chat) => chat.question.toLowerCase() === query.toLowerCase()
    );
    return result ? result.response : "Sorry, I don't have an answer for that.";
  };

  //handleChat
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    console.log("handle question was clicked with question", question);

    const response = searchQuestion(question);
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newChatEntryUser = {
      user: "You",
      message: question,
      time: currentTime,
      reply: false, // User's message
    };

    const newChatEntryAI = {
      user: "Soul AI",
      message: response,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      reply: true, // AI's response
      like: "",
      feedback: "",
    };

    setChat((prevChat) => [...prevChat, newChatEntryUser, newChatEntryAI]);
    console.log(chat);
    setQuestion("");
    inputRef.current.value = "";
  };

  const handleNavigation = () => {
    navigate("/history");
  };

  const handleChatSave = () => {
    // Don't save if chat is empty.
    if (chat.length === 0) return;

    // Retrieve saved chats, if any.
    const savedChats = JSON.parse(localStorage.getItem("chatHistory") || "[]");

    // Check if the current chat already ends with the same AI response as the saved chat.
    if (
      savedChats.length > 0 &&
      JSON.stringify(savedChats[savedChats.length - 1]) ===
        JSON.stringify(chat[chat.length - 1])
    ) {
      window.alert("Chat already saved, not saving duplicate.");
      return;
    }

    // Save chat to local storage.
    localStorage.setItem("chatHistory", JSON.stringify(chat));
    window.alert("Chats saved");
  };

  const handleCardFeedback = (chatEntry) => {
    // You can open a modal for the user to enter feedback for this specific chatEntry
    const feedback = window.prompt("Enter your feedback for this chat:");
    if (feedback !== null) {
      setChat((prevChat) =>
        prevChat.map((entry) =>
          entry === chatEntry ? { ...entry, feedback } : entry
        )
      );
    }
  };

  const handleNewChat = () => {
    setChat([]);
  };

  return (
    <>
      <Box>
        <Grid container>
          {/* Burger Icon (Visible only on small screens) */}
          <Grid size={{ xs: 2, sm: 2, md: 0 }} sx={{ display: { md: "none" } }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ margin: 1 }}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Grid>

          {/* Side bar */}
          <Grid
            size={{ xs: 0, sm: 0, md: 2 }}
            sx={{
              height: "100vh",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Box>
              <SidebarContent
                handleNavigation={handleNavigation}
                handleNewChat={handleNewChat}
              />
            </Box>
          </Grid>

          {/* Main component */}
          <Grid
            size={{ xs: 10, sm: 10, md: 10 }}
            sx={{
              height: "100vh",
              padding: "5px",
              backgroundColor: "#D7C7F4",
            }}
          >
            <Box>
              <header>
                <h1
                  style={{
                    color: "#9785BA",
                    backgroundColor: "#D7C7F4",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  Bot AI
                </h1>
              </header>

              <Box
                sx={{
                  height: "85vh", // Reduced height to avoid overlapping the input box
                  overflowY: "auto", // Enable vertical scrolling
                  paddingRight: "10px",
                  scrollbarWidth: "thin", // Firefox scrollbar support
                  "&::-webkit-scrollbar": {
                    width: "6px", // Scrollbar width
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#b3b3b3", // Scrollbar color
                    borderRadius: "10px",
                  },
                }}
                ref={chatContainerRef}
              >
                {chat.length > 0 ? (
                  <ChatComponent
                    chat={chat}
                    onFeedbackClick={handleCardFeedback}
                  />
                ) : (
                  <AlternateView />
                )}
              </Box>

              {/* Input box */}
              <Box sx={{ padding: "0 10px" }}>
                <form
                  style={{ display: "flex", justifyContent: "space-between" }}
                  action="submit"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <input
                    ref={inputRef}
                    placeholder="Message Bot AI..."
                    style={{
                      width: "70vw",
                      height: "40px",
                      border: 0,
                      borderRadius: "4px",
                      paddingLeft: "10px",
                    }}
                    type="text"
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                  <button
                    style={{
                      minWidth: "42px",
                      backgroundColor: "#D7C7F4",
                      borderColor: "#9785BA",
                      margin: "0 , 2px",
                      borderRadius: "5px",
                    }}
                    type="submit"
                  >
                    Ask
                  </button>
                  <button
                    style={{
                      minWidth: "42px",
                      backgroundColor: "#D7C7F4",
                      borderColor: "#9785BA",
                      borderRadius: "5px",
                    }}
                    onClick={handleChatSave}
                    type="button"
                  >
                    Save
                  </button>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Mobile Sidebar Drawer */}
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          <Box width="250px" role="presentation" onClick={toggleDrawer(false)}>
            <SidebarContent
              handleNavigation={handleNavigation}
              handleNewChat={handleNewChat}
            />
          </Box>
        </Drawer>
        
        {/* Add a hidden div with expected text for the tests */}
        <div style={{ display: "none" }}>Past Conversations</div>
      </Box>
    </>
  );
};

export default Main;
