import { styled } from "@mui/system";
import { ListItem } from "@mui/material";

export const ListItemStyled = styled(ListItem)`
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);

  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 13px;
  z-index: 999;
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
export const Buttons = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: stretch; /* Centrar horizontalmente los elementos */
  justify-content:space-evenly;
  text-align: center;
`;

export const TotalPrice = styled("div")`
  background: red;
  margin:10px
  font-size:larger;
  color:white;
`;

export { List } from "@mui/material"; // Exportamos el componente List de Material-UI
