import { styled } from "@mui/system";
import { ListItem } from "@mui/material";

export const ListItemStyled = styled(ListItem)`
background: black;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 10px;
  max-width: 500px; /* Ajusta el ancho máximo según tus necesidades */
  z-index: 999


`;

export const ItemImage = styled("img")`
  width: 40px; /* Ajusta el ancho máximo según tus necesidades */
  height: 40px; /* Ajusta la altura máxima según tus necesidades */
  margin-right: 10px; /* Espaciado entre la imagen y el texto */
`;

export const ItemText = styled("div")`
  flex-grow: 1;
`;

export const ItemPrice = styled("div")`
  font-weight: bold;
  
`;

export { List } from "@mui/material"; // Exportamos el componente List de Material-UI
