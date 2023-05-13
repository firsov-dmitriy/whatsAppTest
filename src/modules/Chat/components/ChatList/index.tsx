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
  const [numbers, setNumbers] = useState(new Array(5).fill({ chatId: 89960661103 }));
  const [value, setValue] = useState<string | undefined>();

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(event.target.value);
    },
    [setValue],
  );
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const code = event.code;

      if (code.toLowerCase() === 'enter' && !numbers.includes(value)) {
        setNumbers((prev) => [...prev, { chatId: value }]);
        setValue(undefined);
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
      {numbers.map((item) => (
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
      />
    </Box>
  );
};

export const ChatList = React.memo(_ChatList);
