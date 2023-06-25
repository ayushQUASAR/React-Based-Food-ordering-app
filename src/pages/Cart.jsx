import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import Cart_dt from "../pages/Cart-data";
import "../styles/Cart.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useCartContext } from "../components/ContextCart";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#C76868 ",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
const deltheme = createTheme({
  palette: {
    primary: {
      main: "#ff8a65",
    },
    secondary: {
      main: "#ff8a65",
    },
  },
});

const Cart = () => {
  const { cart } = useCartContext();
  const [valo, setfirst] = useState(0);
  const Inc = () => {
    setfirst(valo + 1);
  };
  const Dec = () => {
    setfirst(valo - 1);
  };
  // console.log('cart:',cart)
  const Del = () => {};
  return (
    <div className="cart-box">
      {cart.map((val, index) => {
        return (
          <>
            <div className="cart-items">
              <div className="item">Item</div>
              <div className="cart-f-dt">
                <img src={val.src} alt="foodimg" className="c-f-img" />
                <span className="f-name">{val.name}</span>
              </div>
              <div className="quantity">
                <div className="qty">Quantity</div>
                <ThemeProvider theme={theme}>
                  <Button className="minus" variant="contained" onClick={Dec}>
                    <Icon className="iminus" icon="ph:minus-square-fill" />
                  </Button>

                  <div className="inp"> {valo}</div>
                  <Button className="plus" variant="contained" onClick={Inc}>
                    <Icon className="iplus" icon="ph:plus-square-fill" />
                  </Button>
                </ThemeProvider>
              </div>
              <div className="delete">
                <ThemeProvider theme={deltheme}>
                  <Button className="del" variant="contained" onClick={Del}>
                    <DeleteOutlineIcon />
                  </Button>
                </ThemeProvider>
              </div>
              <div className="f-price"></div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
