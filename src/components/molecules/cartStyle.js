import { styled } from "@mui/system";
import { ListItem } from "@mui/material";

export const ListItemStyled = styled(ListItem)`
  background: black;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 13px;
  z-index: 999


`;

export const ItemImage = styled("img")`
  
  height: 40px; 
  margin-right: 10px;
`;

export const ItemText = styled("div")`
  flex-grow: 1;
`;

export const ItemPrice = styled("div")`
  font-weight: bold;
  
`;

export { List } from "@mui/material"; // Exportamos el componente List de Material-UI
