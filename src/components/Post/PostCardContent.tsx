import { useMemo } from 'react';
import { clsx } from 'clsx';
import dayjs from 'dayjs';
import type { Post } from '@voidfull/js-sdk';

import type { OnlyRequired } from '../../env';

type RequiredProps = 'title' | 'slug' | 'excerpt' | 'publishedAt';

interface Props extends OnlyRequired<Post, RequiredProps> {
  firstPost?: boolean;
}

export const PostCardContent = ({
  firstPost = false,
  title,
  slug,
  excerpt,
  publishedAt,
}: Props) => {
  const date = useMemo(() => {
    return publishedAt ? dayjs(publishedAt).format('MMM DD, YYYY') : null;
  }, [publishedAt]);

  return (
    <div>
      {/*{tag ? (*/}
      {/*  <span className="capitalize text-gray-500 mb-3 text-sm font-medium">*/}
      {/*    {tag}*/}
      {/*  </span>*/}
      {/*) : null}*/}
      <a href={`/p/${slug}`}>
        <h3
          className={clsx(
            'font-semibold break-words',
            firstPost ? 'text-2xl lg:text-4xl' : 'text-2xl lg:text-3xl',
          )}
        >
          {title}
        </h3>
      </a>

      {excerpt ? (
        <p className="mt-4 break-words line-clamp-2 text-gray-600">{excerpt}</p>
      ) : null}

      {date ? (
        <footer className="mt-2">
          <time className="text-gray-600 text-sm" dateTime={date}>
            {date}
          </time>
        </footer>
      ) : null}
    </div>
  );
};
