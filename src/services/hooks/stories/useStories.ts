import { useQuery } from 'react-query';

import { StoryItemType } from '../../../components/StoryList';
import { api } from '../../api';

type StoryData = {
  id: string;
  firstName: string;
  lastName: string;
};

type GetStories = {
  code: number;
  data: StoryData[];
  status: string;
  total: number;
};

const TEN_MINUTES = 10 * 60 * 1000;
const LIMIT = 20;

const formatStories = (data: GetStories, page: number) => {
  const posts = data?.data?.map((item, index) => {
    const pageNumber = index + page * LIMIT;

    return {
      id: `${item?.id}-${pageNumber}`,
      name: `${item?.firstName?.toLowerCase()}.${item?.lastName?.toLowerCase()}`,
      uri: `https://source.unsplash.com/100x100/?person?sig=${pageNumber}`,
      hasStory: true,
    };
  });

  return posts;
};

const getStories = async (page: number): Promise<StoryItemType[]> => {
  const { data } = await api.get<GetStories>(
    `custom?_quantity=${LIMIT}&id=uuid&firstName=firstName&lastName=lastName`
  );

  const stories = formatStories(data, page);

  return stories;
};

export const useStories = (page = 0) => {
  return useQuery(['stories', page], () => getStories(page), {
    staleTime: TEN_MINUTES,
  });
};
