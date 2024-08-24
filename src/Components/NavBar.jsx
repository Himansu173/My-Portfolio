import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
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
    "Contact",
  ];

  const handleScroll = (to) => {
    disableObserverTemporarily();
    setActiveSection(to)
    scroller.scrollTo(to, {
      smooth: true,
      duration: 500,
      offset: to == "Home" ? -70 : 0,
    });

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-x-3">
          <p className="font-bold text-inherit sm:tracking-widest tracking-wide">HIMANSU.</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Tabs
          size="lg"
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
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <button
              className="w-full"
              onClick={() => handleScroll(item)}
            >
              {item}
            </button>
          </NavbarMenuItem>
        ))}
        {/* <Tabs
          size="md"
          color="secondary"
          aria-label="Tabs sizes"
          isVertical={true}
          variant={"light"}
          selectedKey={activeSection}
          onSelectionChange={(key) => { handleScroll(key) }}
        >
          {menuItems.map((item) => (
            <Tab key={item} title={item} />
          ))}
        </Tabs> */}
      </NavbarMenu>
    </Navbar>
  );
}

NavBar.propTypes = {
  activeSection: PropTypes.any,
  setActiveSection: PropTypes.any,
  disableObserverTemporarily: PropTypes.any,
}