import { Box, Tabs, Typography } from '@mui/material';
import React, { memo, useCallback, useMemo } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { MessageList } from '../MessageList';
import { OneMessage } from '../OneMessage';
export type TMessageTabProps = {
  chatId?: string;
};
const _MessageTab = ({ chatId }: TMessageTabProps) => {
  const [value, setValue] = React.useState('1');
  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    },
    [setValue],
  );
  const memoChatId = useMemo(() => chatId, [chatId]);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Список сообщений' value='1' />
            <Tab label='Одно сообщение' value='2' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <MessageList chatId={memoChatId} />
        </TabPanel>
        <TabPanel value='2'>
          <OneMessage chatId={memoChatId} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export const MessageTab = memo(_MessageTab);
