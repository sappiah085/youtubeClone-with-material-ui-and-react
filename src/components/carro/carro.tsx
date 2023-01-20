import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "swiper/css";
import { Grid, Button } from "@mui/material";
import { useState, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Carro() {
  const [active, setActive] = useState("all");
  const swiperRef: any = useRef(null);
  const [index, setIndex] = useState(0);
  return (
    <Grid container height={"50px"} position={"relative"} width={"100%"}>
      {index !== 0 && (
        <Button
          onClick={() => swiperRef.current.slidePrev()}
          sx={{
            color: "white",
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translateY(-50%)",
            backgroundColor: "#181818",
            zIndex: 300,
            height: "50px",
            borderRadius: "none",
            "&:hover": {
              backgroundColor: "#181818",
            },
          }}
        >
          <ArrowBackIosIcon />
        </Button>
      )}
      <Swiper
      
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={9}
        className="mySwiper"
        onSlideChange={(e) => setIndex(e.realIndex)}
      >
        <SwiperSlide>
          <Button
            sx={{
              color: active == "all" ? "black" : "white",
              textTransform: "capitalize",
              backgroundColor: active == "all" ? "white" : "#222222",
              "&:hover": {
                color: "white",
              },
            }}
          >
            All
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            Comedy
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            For you
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            Listenable
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            Recently uploaded
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            All
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            Comedy
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            For you
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            Listenable
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            Recently uploaded
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            All
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            Comedy
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            For you
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            Listenable
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button
            sx={{
              color: "white",
              textTransform: "capitalize",
              backgroundColor: "#222222",
            }}
          >
            Recently uploaded
          </Button>
        </SwiperSlide>
      </Swiper>
      {index !== 6 && (
        <Button
          onClick={() => swiperRef.current.slideNext()}
          sx={{
            color: "white",
            position: "absolute",
            top: "50%",
            right: "0%",
            transform: "translateY(-50%)",
            backgroundColor: "#181818",
            zIndex: 300,
            height: "50px",
            borderRadius: "none",
            "&:hover": {
              backgroundColor: "#181818",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      )}
    </Grid>
  );
}
