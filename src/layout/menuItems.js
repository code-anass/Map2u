import { AiFillAppstore } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
export const items = [
  {
    key: "1",
    icon: <AiFillAppstore className="icon" />,
    label: "Rancangan Fizikal Negara ",
    children: [
      { key: "2", label: "Pelaporan RFN ", icon: <BsCircleFill /> },
      { key: "3", label: "Kemaskini Pemantauan", icon: <BsCircleFill /> },
      { key: "4", label: "Dashboard", icon: <BsCircleFill /> },
    ],
  },
];
