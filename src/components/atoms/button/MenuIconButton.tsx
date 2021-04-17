import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React, { memo, VFC } from "react";

type Props = {
  onOpen: () => void;
};

const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      icon={<HamburgerIcon />}
      onClick={onOpen}
    />
  );
});

export default MenuIconButton;
