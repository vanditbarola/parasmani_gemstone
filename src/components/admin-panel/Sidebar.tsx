"use client";
import { MdDashboard } from 'react-icons/md';
import { RiShoppingCartLine } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: <RiShoppingCartLine />,
    href: "/admin/products",
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle button for small screens */}
      <button
        className="lg:hidden p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`bg-white w-[300px] min-h-screen p-4 shrink-0 fixed lg:relative z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center gap-4">
          <h2 className="text-[20px] font-semibold">Parasmani-Gems</h2>
        </div>
        <ul className="space-y-4 mt-6">
          {menus.map((menu) => (
            <Link
              key={menu.title}
              href={menu.href}
              className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${pathName === menu.href ? "bg-pink text-white" : "bg-gray-200"}`}
              onClick={() => setIsOpen(false)} // Close sidebar on menu click
            >
              <div className="text-[20px]">{menu.icon}</div>
              <p>{menu.title}</p>
            </Link>
          ))}
        </ul>
      </div>

      {/* Overlay for small screens */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={() => setIsOpen(false)}></div>}
    </div>
  );
}

export default Sidebar;
