"use client";
import { Card, Divider, Link } from "@nextui-org/react";

const Footer = () => {
  const links: { href: string; content: string }[] = [
    { href: "https://github.com/AmletixQ/", content: "GitHub" },
    { href: "https://vk.com/amletixq/", content: "VK" },
    { href: "https://t.me/AmletixQ/", content: "Telegram" },
  ];
  return (
    <footer className="mx-6 my-4 sm:mx-4">
      <Card
        radius="md"
        className="flex flex-row justify-around p-4 bg-transparent border-2 border-green-800"
      >
        <Link
          isBlock
          isExternal
          showAnchorIcon
          color="success"
          href="https://github.com/AmletixQ"
        >
          GitHub
        </Link>
        <Divider className="bg-white h-6" orientation="vertical" />
        <Link
          isBlock
          isExternal
          showAnchorIcon
          color="success"
          href="https://t.me/AmletixQ"
        >
          Telegram
        </Link>
        <Divider className="bg-white h-6" orientation="vertical" />
        <Link
          isBlock
          isExternal
          showAnchorIcon
          color="success"
          href="https://vk.com/amletixq"
        >
          VK
        </Link>
      </Card>
    </footer>
  );
};

export default Footer;
