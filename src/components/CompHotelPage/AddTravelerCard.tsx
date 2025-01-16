import {
  Box,
  IconButton,
  List,
  ListItem,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { useMedia } from "../../context/MediaQueryContext";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const PlusRemoveBoxes: FC<{
  title: string;
  counter: number;
  handlerFuncs: (type: string) => void;
}> = ({ counter, title, handlerFuncs }) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginY: "0.5rem",
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem" }}>
          {title}
        </Typography>
      </Box>
      <Box display={"flex"} gap={1} alignItems={"center"}>
        <IconButton
          onClick={() => handlerFuncs("remove")}
          sx={{
            bgcolor: "var(--gray-color)",
            color: "#fff",
            padding: 0,
            width: 30,
            height: 30,
            "&:hover": {
              backgroundColor: "var(--gray-color)",
            },
          }}
        >
          -
        </IconButton>
        <Typography sx={{ fontWeight: "bold" }}>{counter}</Typography>
        <IconButton
          sx={{
            bgcolor: "var(--primary-color)",
            color: "#fff",
            padding: 0,
            width: 30,
            height: 30,

            "&:hover": {
              backgroundColor: "var(--primary-color)",
            },
          }}
          onClick={() => handlerFuncs("add")}
        >
          +
        </IconButton>
      </Box>
    </ListItem>
  );
};

const BoxOfChildrenAge: FC<{ state: number }> = ({ state }) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        borderBottom: "1px solid #ccc",
        padding: "1rem  0",
      }}
      alignItems="center"
    >
      <Typography>کودک {state}</Typography>
      <TextField
        placeholder="0-17 سال"
        variant="outlined"
        sx={{ width: "50%" }}
      />
    </ListItem>
  );
};
const AddTravelerCard: FC<{
  roomState: number;
  adultsState: number;
  setAdult: React.Dispatch<React.SetStateAction<number>>;
  setRoom: React.Dispatch<React.SetStateAction<number>>;
}> = ({ adultsState, roomState  ,setAdult , setRoom}) => {
  let isXS = useMedia();
  const CusBoxAddTraveler = styled(Box)({
    position: "absolute",
    top: isXS ? 170 : 60,
    left: 120,
    zIndex: 400,
    backgroundColor: "#fff",
    borderRadius: "1rem",
    width: "250px",
padding : "0.5rem"  ,  
    boxShadow: "var(--main-shadow)",
  });
  // let [countOfRooms, setCountOfRooms] = useState(2);
  // let [countOfAdults, setCountOfAdults] = useState(2);
  let [countOfChildren, setCountOfChildren] = useState(0);
  const [childrenList, setChildrenList] = useState<number[]>([]);

  const handlerRooms = (type: string) => {
    switch (type) {
      case "add":
        if (roomState < 8) {
          setRoom(roomState + 1);
          setAdult(adultsState + 1);
        }

        break;
      case "remove":
        if (roomState > 1) {
          setRoom((prev) => prev - 1);
        }
        if (roomState === 2) {
          setAdult(() => 4);
        }

        break;
      default:
        break;
    }
  };
  const handlerChildren = (type: string) => {
    switch (type) {
      case "add":
        if (countOfChildren < 20) {
          setCountOfChildren((prevCount) => {
            const newCount = prevCount + 1;
            setChildrenList((prevList) => [...prevList, newCount]);
            return newCount;
          });
        }
        break;
      case "remove":
        if (countOfChildren > 0) {
          setCountOfChildren((prevCount) => {
            const newCount = prevCount - 1;
            setChildrenList((prevList) => prevList.slice(0, -1));
            return newCount;
          });
        }
        break;
      default:
        break;
    }
  };
  const handlerAdults = (type: string) => {
    switch (type) {
      case "add":
        if (adultsState < 31) {
          setAdult((prevAdults) => {
            const newAdults = prevAdults + 1;

            if (
              newAdults > 5 &&
              Math.floor(newAdults / 5) > Math.floor(prevAdults / 5)
            ) {
              setRoom((prevRooms) => prevRooms + 1);
            }

            return newAdults;
          });
        }

        break;
      case "remove":
        if (adultsState > 1) {
          setAdult((prevAdults) => {
            const newAdults = prevAdults - 1;

            if (newAdults < 4 && roomState > 1) {
              setRoom((prevRooms) => prevRooms - 1);
            }

            return newAdults;
          });
        }
        break;
    }
  };

  return (
    <CusBoxAddTraveler>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        <PlusRemoveBoxes
          handlerFuncs={handlerRooms}
          counter={roomState}
          title="اتاق ها"
        />
        <PlusRemoveBoxes
          handlerFuncs={handlerAdults}
          counter={adultsState}
          title="بزرگسالان"
        />
        <PlusRemoveBoxes
          handlerFuncs={handlerChildren}
          counter={countOfChildren}
          title=" کودکان"
        />
      </List>
      <List sx={{ margin: "0 1rem", overflowY: "auto", maxHeight: "300px" }}>
        {childrenList.map((child, index) => (
          <BoxOfChildrenAge key={index} state={child} />
        ))}
      </List>
      <Box  >
      <PrimaryBtn text="بروزرسانی"/>

      </Box>
    </CusBoxAddTraveler>
  );
};
export default AddTravelerCard;
