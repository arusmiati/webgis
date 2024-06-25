import Image from "next/image";
import {useState} from "react";
// import ProfilePopover from "./ProfilePopover";
import SidebarItem from "../components/SidebarItem"
const navitem = [
    {
        icon: "/icons/icons8-home",
        label: "Homepage",

        href: "/homepage",
        main: true,
    },
    {
        icon: "/icons/data",
        label: "Data",

        href: "/data",
        main: true,
    },
    {
        icon: "/icons/cluster",
        label: "Clustering",

        href: "/cluster",
        main: true,
    },
    
];

const MainLayout = ({children}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div
                style={{zIndex: 9999}}
                className={`fixed md:flex ${
                    open ? "md:pl-72" : "md:pl-[68px]"
                } md:flex-row-reverse w-full top-0 z-10 text-white transition-all duration-200 ease-in-out`}
            >
                
                <div className="sidebar bg-[#343A40] h-16 md:w-screen flex items-center justify-between px-8 ">
                    
                    <div
                        className={`${open ? " md:flex" : "flex"} cursor-pointer`}
                        onClick={() => setOpen(!open)}
                    >
                        <Image
                            src="/icons/dash-icon.svg"
                            alt="dash icon"
                            layout="intrinsic"
                            width="24"
                            height="24"
                        />
                    </div>
                    <div
                        className={`${!open ? "hidden" : "flex md:hidden"} cursor-pointer`}
                        onClick={() => setOpen(!open)}
                    >
                        <Image
                            src="/icons/close-icon.svg"
                            alt="close icon"
                            layout="intrinsic"
                            width="19"
                            height="19"
                        />
                    </div>
                    <div className="flex md:hidden">
                        {/* <Image
              src="/images/logo-full-.png"
              alt="full"
              width="135"
              height="20"
            /> */}
                    </div>
                </div>
            </div>
            <nav
                style={{zIndex: 99999}}
                className={`bg-[#343A40] w-full ${
                    open
                        ? "h-screen  md:fixed md:w-72"
                        : "h-0 md:fixed md:block  md:w-[80px]"
                } md:h-screen md:top-0 z-10 max-h-screen transition-all duration-200 ease-in-out fixed top-16 text-white overflow-y-auto overflow-x-hidden navbar`}
            >
            
                <div
                    className={`flex items-center ${
                        open ? "justify-start px-6" : "justify-center"
                    } mt-4`}
                >

                    <div className="text-center justify-items-center items w-full bold mt-3 mb-2" style={{fontWeight: 'bold', fontSize: "20px" }}>
                        <Image
                            src="/gowa.png"
                            alt="My Icon"
                            width={50}
                            height={50}
                        />
                        <h1
                            className={`tes pl-8 ${!open ? "max-h-0" : `max-h-96`
                                } h-auto overflow-hidden transition-all duration-200 ease-in-out`}
                        >Health Center Of Bontomarannu</h1>
                        <hr />
                    </div>
                    <hr />
                    <div className={`md:block  hidden md:p-0`}>
                        {/* <Image
              src="/images/logo-bubble-.svg"
              alt="logo bubble"
              width="50"
              height="40"
              layout="intrinsic"
            /> */}
                    </div>
                    <div className={`${!open ? "md:hidden" : "md:block"}  hidden md:p-0`}>
                        {/* <Image
              src="/images/logoText.svg"
              alt="logo text"
              width="120"
              height="60"
              layout="intrinsic"
            /> */}
                    </div>
                </div>

                {navitem.map(({icon, label, item, main, href}) => (
                    <SidebarItem
                        icon={icon}
                        label={label}
                        key={label}
                        hide={!open}
                        item={item}
                        main={main}
                        href={href}
                        setOpen={setOpen}
                    />
                ))}

            </nav>

            <main
                className={`bg-[#E5E5E5] min-h-screen pt-16 ${
                    open ? "md:ml-72" : "md:ml-[80px]"
                } transition-all duration-200 ease-in-out`}
            >
                {children}
            </main>
        </>
    )
        ;
};

export function withMainLayout(Component) {
    Component.Layout = MainLayout;
    return Component;
}

export default MainLayout;