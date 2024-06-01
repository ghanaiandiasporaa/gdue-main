import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { Facebook, FacebookIcon, Twitter } from "lucide-react";
import Image from "next/image";
import {
  bebas,
  ibm_plex_sans_condense,
  montserrat,
  poppins,
  sourceCodePro400,
  sourceCodePro700,
} from "@/config/fonts";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <div className="md:p-8">
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className={`uppercase text-md  border  border-neutral-300/70 dark:border-neutral-700/70 shadow-sm h-full w-full bg-neutral-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10  dark:bg-black md:rounded-full `}
      >
        <NavbarContent
          className={`font-bold basis-1/5 sm:basis-full" justify="start`}
        >
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo />
              <p className="font-bold text-inherit">GDUE</p>
            </NextLink>
          </NavbarBrand>

          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          {/* <NavbarItem className="hidden sm:flex gap-2">

          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>

        </NavbarItem> */}

          {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
          <NavbarItem className="hidden md:flex items-center">
            <Button
              isExternal
              as={Link}
              className={` text-sm font-bold  bg-default-100`}
              href={siteConfig.links.membership}
              startContent={
                <Image
                  alt="Ghana"
                  src={"/images/ghana.svg"}
                  width={30}
                  height={30}
                />
              }
              variant="flat"
            >
              Membership
            </Button>
          </NavbarItem>
          {/* <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.membership}
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
            >
              Donate
            </Button>
          </NavbarItem> */}
          <ThemeSwitch />
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link
            isExternal
            aria-label="Facebook"
            href={siteConfig.links.facebook}
          >
            <Facebook className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <Twitter className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </div>
  );
};
