import { CircularProgress, Box } from "@mui/material";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  
  & > .loading_container{
    display: flex;
    position: absolute;
    top:50%
    left:50%
    transform: translate(-50%, -50%)
  }
`;

export const Spinner = () => {
  return (
    <Wrapper>
      <div className="loading_container">
        <CircularProgress />
      </div>
    </Wrapper>
  );
};

// export const Spinner = () => {
//     return (
//       <div className="relative h-screen">
//         <Box
//           sx={{
//             display: "flex",
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: `translate(-${50}%,-${50}%)`,
//           }}
//         >
//           <CircularProgress />
//         </Box>
//       </div>
//     );
//   };
