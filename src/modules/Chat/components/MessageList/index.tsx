import React, { useEffect } from 'react';
import {
  useGetChatHistoryMutation,
  useGetMessageQuery,
  useLazyGetMessageQuery,
} from '../../api/chatApi';
import { useAuthInfo } from '@/hooks/useAuthInfo';
import {
  Box,
  Chip,
  CircularProgress,
  LinearProgress,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { dateFormat } from '@/utils/formatDate';
import { StyledMessageListWrapper } from './styles';
import { format } from 'date-fns';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export type TMessageListProps = {
  chatId?: string;
};

const _MessageList = ({ chatId }: TMessageListProps) => {
  const [value, setValue] = React.useState(0);

  const [getChatHistory, { data: messageList, isLoading }] = useGetChatHistoryMutation();
  const tokens = useAuthInfo();
  const [fetchMessage, { data: message, isLoading: messageLoading }] = useLazyGetMessageQuery();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (chatId && tokens) {
      getChatHistory({ number: chatId, ...tokens, limit: 5 });
    }
  }, [chatId]);
  useEffect(() => {
    let intervalId = undefined;
    if (value === 1) {
      setInterval(() => {
        fetchMessage(tokens);
      }, 3000);
    }
    return clearInterval(intervalId);
  }, [value, fetchMessage]);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Список сообщений' />
          <Tab label='Одно сообщение' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <StyledMessageListWrapper>
          {isLoading && <LinearProgress />}
          {messageList &&
            [...messageList]?.reverse().map((item) => {
              const date = format(new Date(item.timestamp * 1000), 'hh:mm:ss');
              return (
                <Stack flexDirection='row' alignItems='center' gap='5px' key={item.idMessage}>
                  <Typography color='gray' fontSize='12px'>
                    {date}
                  </Typography>
                  <Chip label={item.textMessage} />
                </Stack>
              );
            })}
        </StyledMessageListWrapper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {messageLoading ? (
          <CircularProgress />
        ) : (
          <Typography>{message?.body.messageData.textMessageData.textMessage}</Typography>
        )}
      </TabPanel>
    </>
  );
};

export const MessageList = React.memo(_MessageList);
