"use client";
import Image from 'next/image'
import { Button, MapWithMarkers, useDzUpload } from "@/components";
import { MenubarShortcut } from "@/components/ui/menubar";
import { ACCEPTED_IMAGE_EXT } from "@/constants";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

export default function Page() {
  const { success, filepath, uploadField, error } = useDzUpload(
    ACCEPTED_IMAGE_EXT,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/upload`,
    "image"
  );
  return (
    <div className="w-full flex flex-col items-center justify-center h-96 ">
      <p className="my-12">TEST PAGE {1 + 3}</p>
      <Button className="w-[200px]">Hello Word</Button>
      <div className="w-full px-8 py-4">{uploadField}</div>
      {filepath ? (
        <div className="px-8 py-4 my-4">
          <Image src={filepath}  width={200} height={200} alt="" />

        </div>
      ) : null}
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

     
    </div>
  );
}
