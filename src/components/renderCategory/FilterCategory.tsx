import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from "next/link";
import * as React from "react";
import { useEffect, useState, Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "@/styles/arrowsCarousel.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faX } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow mr-[34px] !h-[100%]`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow ml-[34px] z-[1000] !h-[100%]`}
      onClick={onClick}
    />
  );
}
export const FilterCategory = ({ onDataChange }: any) => {
  const apiCategory = `${localUrl}/api/category`;
  const [dataCategory, setDataCategory] = useState<any[]>([]);
  const [currentId, setCurrentId] = useState<number | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiCategory);
        setDataCategory(res.cate);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiCategory]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 9,
    slidesToScroll: 9,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const sendCateId = (id: number) => {
    onDataChange(id);

    if (currentId !== null) {
      const oldElement = document.querySelector(`.dataCate-${currentId}`);
      if (oldElement) {
        oldElement.classList.remove("!w-full");
      }
    }

    const newElement = document.querySelector(`.dataCate-${id}`);
    if (newElement) {
      newElement.classList.add("!w-full");
    }

    // Cập nhật currentId với id mới
    setCurrentId(id);
  };

  // Filter
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Bộ lọc
  const [dataFilter, setDataFilter] = useState<any>(10000000);
  const [dataFilterArea, setDataFilterArea] = useState<any>(30);
  const [dataFilterPeople, setDataFilterPeople] = useState<any>(1);
  const [dataFilterBedRoom, setDataFilterBedRoom] = useState<any>(1);
  const [dataFilterBath, setDataFilterBath] = useState<any>(1);

  return (
    <div className="filter">
      <div className="line"></div>
      <div className="filter__container section-padding">
        <div className="filter__slider filter__list flex flex-col justify-center">
          <div className="slider-container">
            <Slider {...settings}>
              {dataCategory.map((cate) => (
                <div key={cate.id}>
                  <div
                    className="group cursor-pointer"
                    onClick={() => sendCateId(cate.id)}
                  >
                    <div className="flex justify-center mb-[5px]">
                      <Image
                        src={cate.icon} // Đảm bảo cung cấp thuộc tính src
                        alt={`Icon for ${cate.nameCategory}`} // Cung cấp thuộc tính alt để cải thiện khả năng tiếp cận
                        width={100} // Kích thước của hình ảnh
                        height={100} // Kích thước của hình ảnh
                        priority={true} // Tùy chọn: nếu bạn muốn ưu tiên tải hình ảnh này
                        className="w-[20px] h-[20px]" // Áp dụng các lớp CSS với Tailwind
                      />
                    </div>
                    <div className="filter__text whitespace-nowrap text-[14px] z-[1000] text-[#222222b3] flex justify-center">
                      <span className="relative pb-[6px]">
                        {cate.nameCategory}
                        <div
                          className={`absolute bottom-[0] w-0 mt-[4px] h-[1px] bg-color-green-1 group-hover:w-full transition-all duration-500 ease-out dataCate-${cate.id}`}
                        ></div>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="filter__btnFilter">
          <React.Fragment>
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              className="px-[15px] text-color-black-2 py-[10px] normal-case rounded-[10px] border-color-gray-1 duration-200 hover:border-color-green-2 hover:bg-color-white-0"
            >
              <FontAwesomeIcon className="mr-[5px]" icon={faFilter} /> Bộ lọc
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              PaperProps={{
                component: "form",
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const formJson = Object.fromEntries(
                    (formData as any).entries()
                  );
                  const email = formJson.email;
                  console.log(email);
                  handleClose();
                },
              }}
            >
              <div className="flex justify-center items-center px-[20px] py-[10px] border-b">
                <Button
                  onClick={handleClose}
                  className="w-[10%] inline-block min-w-[20px] p-[0px] text-black rounded-[50%]"
                >
                  <FontAwesomeIcon icon={faX} />
                </Button>
                <DialogTitle className="text-center w-[90%] p-[0px] pr-[20px] font-bold text-[16px]">
                  Bộ lọc
                </DialogTitle>
              </div>
              <DialogContent>
                <div className="border-b mb-[20px] pb-[10px]">
                  <FormControl>
                    <FormLabel
                      id="kindPlace"
                      className="font-bold text-black text-[18px]"
                    >
                      Loại chỗ ở
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="kindPlace"
                      defaultValue="0"
                      name="kindRoom"
                    >
                      <div className="flex justify-between">
                        <FormControlLabel
                          value="0"
                          control={<Radio className="text-color-green-0" />}
                          label="Phòng"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio className="text-color-green-0" />}
                          label="Căn hộ"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio className="text-color-green-0" />}
                          label="Nhà"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="border-b mb-[20px] pb-[10px]">
                  <DialogContentText className="font-bold text-black text-[18px] mb-[5px]">
                    Khoảng giá
                  </DialogContentText>
                  <input
                    className="w-[100%] accent-color-green-0 cursor-pointer"
                    type="range"
                    name="price"
                    min={0}
                    max={50000000}
                    step={1000000}
                    value={dataFilter}
                    onChange={(e) => setDataFilter(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <div className="minPrice">0đ</div>
                    <div className="maxPrice">
                      {new Intl.NumberFormat("de-DE").format(dataFilter)}đ
                    </div>
                  </div>
                </div>
                <div className="border-b mb-[20px] pb-[10px]">
                  <DialogContentText className="font-bold text-black text-[18px] mb-[5px]">
                    Diện tích
                  </DialogContentText>
                  <input
                    className="w-[100%] accent-color-green-0 cursor-pointer"
                    type="range"
                    name="area"
                    min={0}
                    max={100}
                    step={5}
                    value={dataFilterArea}
                    onChange={(e) => setDataFilterArea(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <div className="minPrice">
                      0m
                      <sup>2</sup>
                    </div>
                    <div className="maxPrice">
                      {new Intl.NumberFormat("de-DE").format(dataFilterArea)}m
                      <sup>2</sup>
                    </div>
                  </div>
                </div>
                <DialogContentText className="font-bold text-black text-[18px] pb-[10px]">
                  Số lượng tùy chọn
                </DialogContentText>
                <div className="filterQuantityPeople flex justify-between">
                  <DialogContentText className="text-black text-[16px]">
                    Số lượng khách tối đa
                  </DialogContentText>
                  <input
                    className="opacity-[1] border-[1px] rounded-[5px] text-center focus:outline-none focus:border-color-green-0"
                    type="number"
                    name="quantityPeople"
                    min={1}
                    max={10}
                    value={dataFilterPeople}
                    onChange={(e) => setDataFilterPeople(e.target.value)}
                  />
                </div>
                <div className="filterQuantityBedRoom flex justify-between py-[10px]">
                  <DialogContentText className="text-black text-[16px]">
                    Số lượng phòng ngủ
                  </DialogContentText>
                  <input
                    className="opacity-[1] border-[1px] rounded-[5px] text-center focus:outline-none focus:border-color-green-0"
                    type="number"
                    name="quantityBedRoom"
                    min={1}
                    max={10}
                    value={dataFilterBedRoom}
                    onChange={(e) => setDataFilterBedRoom(e.target.value)}
                  />
                </div>
                <div className="filterQuantityBath flex justify-between pb-[10px] border-b">
                  <DialogContentText className="text-black text-[16px]">
                    Số lượng phòng tắm
                  </DialogContentText>
                  <input
                    className="opacity-[1] border-[1px] rounded-[5px] text-center focus:outline-none focus:border-color-green-0"
                    type="number"
                    name="quantityBath"
                    min={1}
                    max={10}
                    value={dataFilterBath}
                    onChange={(e) => setDataFilterBath(e.target.value)}
                  />
                </div>
              </DialogContent>
              <DialogActions className="pb-[15px] px-[15px]">
                <Button
                  className="bg-color-green-0 w-[100%] px-[20px] normal-case text-[16px] text-white font-bold duration-200 hover:bg-color-green-2"
                  type="submit"
                >
                  Lọc chỗ ở
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};
