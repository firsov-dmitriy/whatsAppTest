import { InputField } from '@/package';
import { Box, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

import React, { ReactNode, useCallback, useState } from 'react';
export type OnClick = (chatId: string) => void;
function Row(props: { children: ReactNode; onClick: OnClick }) {
  const { children, onClick } = props;

  return (
    <ListItem onClick={() => onClick(children as string)} component='div' disablePadding>
      <ListItemButton>
        <ListItemText>{children}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
export type TChatListProps = {
  onClick: OnClick;
};
const _ChatList = ({ onClick }: TChatListProps) => {
  const [numbers, setNumbers] = useState<{ chatId: string }[]>([]);
  const [value, setValue] = useState<string | undefined>();
  const [errorMsg, setErrorMsg] = useState<string | undefined>();

  const regExp = /^(\7|7)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setValue(value);
    },
    [setValue],
  );
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const code = event.code;

      if (value && code?.toLowerCase() === 'enter' && !numbers.includes({ chatId: value })) {
        if (regExp.test(value)) {
          setNumbers((prev) => [...prev, { chatId: value }]);
          setValue(undefined);
          setErrorMsg(undefined);
        } else {
          setErrorMsg('Не валидный номер телефона');
        }
      }
    },
    [value, setValue],
  );
  return (
    <Box
      display='flex'
      flexDirection='column'
      sx={{ border: '1px solid #fdfef6', borderRadius: 4, padding: 1 }}
    >
      <Typography fontSize={32} m='0 auto'>
        Чаты
      </Typography>
      {numbers &&
        numbers.map((item) => (
          <Row onClick={onClick} key={item.chatId}>
            {item.chatId}
          </Row>
        ))}
      <InputField
        label='Номер'
        size='small'
        variant='filled'
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        error={errorMsg}
      />
    </Box>
  );
};

export const ChatList = React.memo(_ChatList);
