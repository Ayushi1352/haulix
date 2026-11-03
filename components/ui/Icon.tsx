import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaQuoteLeft,
  FaRegCircle,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  LuArrowRight,
  LuBox,
  LuBuilding,
  LuCalendar,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuClipboardList,
  LuClock,
  LuDatabase,
  LuFileText,
  LuGlobe,
  LuHeadset,
  LuMail,
  LuMapPin,
  LuMenu,
  LuMessageSquare,
  LuPackage,
  LuPhone,
  LuPlane,
  LuSettings,
  LuShieldCheck,
  LuShip,
  LuTruck,
  LuUser,
  LuUserCheck,
  LuUsers,
  LuWarehouse,
  LuX,
} from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaQuoteLeft,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
  LuArrowRight,
  LuBox,
  LuBuilding,
  LuCalendar,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuClipboardList,
  LuClock,
  LuDatabase,
  LuFileText,
  LuGlobe,
  LuHeadset,
  LuMail,
  LuMapPin,
  LuMenu,
  LuMessageSquare,
  LuPackage,
  LuPhone,
  LuPlane,
  LuSettings,
  LuShieldCheck,
  LuShip,
  LuTruck,
  LuUser,
  LuUserCheck,
  LuUsers,
  LuWarehouse,
  LuX,
  TbTruckDelivery,
};

type Props = {
  name: string;
  className?: string;
  /** line thickness of the outline (Lu / Tb) icons; the filled (Fa) icons ignore it */
  strokeWidth?: number;
};

export const Icon = ({ name, className = "size-24", strokeWidth = 1.8 }: Props) => {
  const Glyph = icons[name];
  if (!Glyph) {
    if (process.env.NODE_ENV !== "production") console.warn(`Icon "${name}" is not in components/ui/Icon.tsx`);
    return <FaRegCircle aria-hidden="true" className={className} />;
  }
  const outline = !name.startsWith("Fa");
  return <Glyph aria-hidden="true" className={className} {...(outline ? { strokeWidth } : {})} />;
};
