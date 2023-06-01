import useSWR from 'swr';
import fetcher from '../../../../utils/fetcher';

 const useChatData = () => {
    const { data, error } = useSWR("http://localhost:3000/api/chat", fetcher);
  
    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };



export default useChatData;