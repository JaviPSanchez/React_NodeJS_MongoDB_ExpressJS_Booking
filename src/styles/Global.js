import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";

const styles = {
  optionCounterButton:
    "w-[30px] h-[30px] border-2 border-solid border-primaryLight disabled:cursor-not-allowed",
  optionCounterNumber: "w-[30px] h-[30px] flex justify-center items-center",
  featuredItem:
    "relative text-white rounded-xl h-[250px] overflow-hidden flex-1",
  featuredImage: "w-full h-full object-cover",
  featuredTitles: "absolute bottom-[20px] left-[20px] font-bold text-2xl",
  pList: "w-full max-w-5xl flex justify-between gap-2 mt-10",
  pListItem: "flex-1 rounded-xl overflow-hidden cursor-pointer",
  pListImg: "w-full h-[125px] object-cover",
  pListTitles: "text-xl text-[#444444]",
  fpItem: "flex-1 gap-2 flex flex-col",
  fpImg: "w-full h-[250px] object-cover",
  fpName: "text-[#333333] font-bold",
  fpCity: "font-light",
  fpPrice: "font-medium",
  fpRating:
    "[&>button]:bg-primary [&>button]:text-white [&>button]:font-bold [&>button]:p-2 [&>button]:mr-2 [&>span]:text-sm",
  mail: "w-full mt-12 bg-primary text-white flex flex-col items-center gap-5 p-5",
  mailInputContainer:
    "[&>button]:h-[50px] [&>button]:p-2 [&>button]:bg-primaryLight [&>button]:text-white [&>button]:border-none [&>button]:rounded-xl [&>button]:cursor-pointer [&>input]:w-[300px] [&>input]:h-[30px] [&>input]:p-6 [&>input]:border-none [&>input]:mr-2 [&>input]:rounded-xl",
  footer: "w-full w-5xl text-sm p-6",
  fLists: "w-full flex justify-between mb-[50px]",
  fList: "list-none p-0",
  fListItem: "mb-2 text-primary cursor-pointer",
  searchItem:
    "border-2 border-solid border-gray-200 p-2.5 rounded-xl flex justify-between gap-5 mb-5",
  siImg: "w-[200px] h-[200px] object-cover",
  siDesc: "flex flex-col gap-2.5 flex-2",
  siTitle: "text-xs text-primaryLight",
  siDistance: "text-xs",
  siTaxiOp: "text-xs bg-green text-white max-w-fit p-2 rounded-md",
  siSubTitle: "text-xs font-bold",
  siFeatures: "text-xs",
  siCancelOp: "text-xs text-green font-bold",
  siCancelOpSubtitle: "text-xs text-green",
  siDetails: "flex-1 flex flex-col justify-between",
  siRating:
    "[&>span]:font-medium [&>span]:mr-6 [&>button]:bg-primary [&>button]:text-white [&>button]:p-1 [&>button]:font-bold [&>button]:border-none",
  siDetailTexts: "text-right flex flex-col gap-2",
  siPrice: "text-xl",
  siTaxOp: "text-xs text-grey-200",
  siCheckButton:
    "bg-primaryLight text-white font-bold px-2 py-2 border-none cursor-pointer rounded-xl",
  lsItem:
    "flex flex-col gap-2 mb-5 [&>label]:text-xs [&>input]:h-8 [&>input]:border-none [&>input]:p-2 [&>span]:h-8 [&>span]:p-2 [&>span]:bg-white [&>span]:flex [&>span]:items-center [&>span]:cursor-pointer",
  lsOptionItem: "flex justify-between mb-5 text-grey text-xs",
  lsOptionInput: "w-12",
  listSearch:
    "[&>button]:p-2 [&>button]:bg-primaryLight [&>button]:text-white [&>button]:border-none [&>button]:w-full [&>button]:font-bold [&>button]:cursor-pointer",
  hotelWrapper: "w-full max-w-5xl flex flex-col gap-2 relative",
  bookNow:
    "absolute top-10 right-0 border-none p-2.5 bg-primaryLight text-white font-bold rounded-md cursor-pointer",
  hotelTitle: "text-2xl mt-10",
  hotelAddress: "flex items-center gap-2 text-xl",
  hotelDistance: "text-primaryLight text-bold",
  hotelPriceHighlight: "text-green font-medium",
  hotelImages: "flex flex-wrap justify-between",
  hotelImgWrapper: "w-1/3",
  hotelImg: "w-full object-cover cursor-pointer",
  hotelDetails: "flex justify-between gap-10 mt-10",
  hotelDetailsTexts: "flex-3",
  hotelDesc: "text-sm mt-5",
  hotelDetailsPrice:
    "flex flex-col gap-10 flex-1 bg-greyLight p-5 [&>h1]:text-md [&>h1]:text-grey [&>span]:text-sm [&>button]:border-none [&>button]:p-5 [&>button]:bg-primaryLight [&>button]:text-white [&>button]:cursor-pointer [&>button]:rounded-xl",
  slider:
    "sticky top-0 left-0 w-screen h-screen bg-blackCustom z-999 flex items-center",
  sliderWrapper: "w-full h-full flex justify-center items-center",
  sliderImg: "w-[80%] h-10/12",
  close: "absolute top-5 right-5 text-3xl text-greyLight cursor-pointer",
  arrow: "m-5 text-4xl text-greyLight cursor-pointer",
};

export default styles;
