import React, { VFC } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const UserDetailModal: VFC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={4}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value="テスト" isReadonly />
              <FormLabel>フルネーム</FormLabel>
              <Input value="テストフルネーム" isReadonly />
              <FormLabel>メールアドレス</FormLabel>
              <Input value="テストメールアドレス" isReadonly />
              <FormLabel>電話番号</FormLabel>
              <Input value="000-000-0000" isReadonly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserDetailModal;
