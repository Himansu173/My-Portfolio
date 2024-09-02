import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";
import ThemeSwitchBtn from "./ThemeSwitch";
import { Tabs, Tab } from "@nextui-org/react";
import { scroller } from 'react-scroll';
import PropTypes from 'prop-types'
import { useState } from "react";

export default function NavBar({ activeSection, setActiveSection, disableObserverTemporarily }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Education",
    "Projects",
    "Skills",
    "Achievement",
    "Contact",
  ];

  const handleScroll = (to) => {
    disableObserverTemporarily();
    setActiveSection(to)
    scroller.scrollTo(to, {
      smooth: true,
      duration: 500,
      offset: -57,
    });

    if (isMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 400)
    }
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} height="3.6rem">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="min-[852px]:hidden"
        />
        <NavbarBrand className="gap-x-3">
          <p className="font-bold text-lg sm:tracking-wider tracking-wide cursor-pointer" onClick={() => handleScroll("Home")}>HIMANSU.</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden min-[852px]:flex gap-4" justify="center">
        <Tabs
          size="lg"
          className="lg:size-lg"
          color="secondary"
          aria-label="Tabs sizes"
          selectedKey={activeSection}
          onSelectionChange={(key) => handleScroll(key)}
        >
          {menuItems.map((item) => (
            <Tab key={item} title={item} />
          ))}
        </Tabs>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitchBtn />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <button
              className="w-full"
              onClick={() => handleScroll(item)}
            >
              {item}
            </button>
          </NavbarMenuItem>
        ))} */}
        <Tabs
          size="md"
          color="secondary"
          aria-label="Tabs sizes"
          isVertical={true}
          variant={"light"}
          selectedKey={activeSection}
          onSelectionChange={(key) => { handleScroll(key) }}
          fullWidth
        >
          {menuItems.map((item) => (
            // <NavbarMenuItem key={item}>
            <Tab key={item} title={item} />
            // </NavbarMenuItem>
          ))}
        </Tabs>
      </NavbarMenu>
    </Navbar>
  );
}

NavBar.propTypes = {
  activeSection: PropTypes.any,
  setActiveSection: PropTypes.any,
  disableObserverTemporarily: PropTypes.any,
}