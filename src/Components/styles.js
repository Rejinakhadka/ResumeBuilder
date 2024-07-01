import styled from "@emotion/styled";
import { Box , Avatar,Button} from "@mui/material";


export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`;

export const StyledNav = styled.Navbar`

`