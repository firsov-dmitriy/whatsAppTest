import { FormInputField } from '@/package';
import { Box, Button, IconButton } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

export type TChatFieldsProps = {};

const _ChatFields = ({}: TChatFieldsProps) => {
  return (
    <Box display='flex' alignItems='center'>
      <FormInputField
        name='message'
        label='Сообщение'
        size='small'
        placeholder='Введите сообщение'
      />
      <Button startIcon={<SendIcon sx={{ width: '2em', height: '2em' }} />} />
    </Box>
  );
};

export const ChatFields = React.memo(_ChatFields);
