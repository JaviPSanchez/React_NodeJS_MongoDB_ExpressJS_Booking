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
};

export default styles;
