import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useQuery } from 'react-query';

import { PostItem } from '../../../components/PostList';
import { generateRandomDate } from '../../../utils/generateRandomDate';
import { generateRamdomNumber } from '../../../utils/generateRandomNumber';
import { api } from '../../api';

type PostData = {
  city: string;
  country: string;
  description: string;
  hasStory: boolean;
  id: string;
  firstName: string;
  lastName: string;
  showLocation: boolean;
};

type GetPosts = {
  code: number;
  data: PostData[];
  status: string;
  total: number;
};

const THREE_DAYS = 3 * 24 * 60;
const AVAILABLE_ASPECT_RATIO = [0.8, 1, 1.91];

const formatPosts = (data: GetPosts) => {
  const posts = data?.data?.map((item, index) => {
    return {
      id: item?.id,
      user: {
        name: `${item?.firstName?.toLowerCase()}.${item?.lastName?.toLowerCase()}`,
        location: `${item?.city}, ${item?.country}`,
        image: {
          uri: `https://source.unsplash.com/100x100/?person?sig=${index}`,
          aspectRatio: AVAILABLE_ASPECT_RATIO[1],
        },
        hasStory: item?.hasStory,
      },
      post: {
        image: {
          uri: `https://source.unsplash.com/random?sig=${index}`,
          aspectRatio:
            AVAILABLE_ASPECT_RATIO[
              generateRamdomNumber(0, AVAILABLE_ASPECT_RATIO?.length)
            ],
        },
        likesAmount: generateRamdomNumber(10, 100000),
        description: item?.description,
        commentsAmount: generateRamdomNumber(1, 1000),
        createdAt: formatDistanceToNow(
          generateRandomDate(generateRamdomNumber(1, THREE_DAYS)),
          {
            addSuffix: true,
            locale: ptBR,
          }
        ),
      },
    };
  });

  return posts;
};

const getPosts = async (): Promise<PostItem[]> => {
  const { data } = await api.get<GetPosts>(
    'custom?_quantity=10&id=uuid&firstName=firstName&lastName=lastName&city=city&country=country&description=text&showLocation=boolean&hasStory=boolean'
  );

  const posts = formatPosts(data);

  return posts;
};

export const usePosts = () => {
  return useQuery('posts', getPosts);
};
