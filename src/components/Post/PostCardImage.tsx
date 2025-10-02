import { clsx } from 'clsx';
// Remove dependency on Voidfull SDK types
// import type { Post } from '@voidfull/js-sdk';

import type { OnlyRequired } from '../../env';

type RequiredProps = 'title' | 'slug' | 'featureImage';

// Define our own Post type
interface Post {
  title: string;
  slug: string;
  featureImage: string | null;
}

export const PostCardImage = ({
  title,
  slug,
  featureImage,
}: OnlyRequired<Post, RequiredProps>) => {
  if (!featureImage) return null;

  return (
    <a
      href={`/p/${slug}`}
      className={clsx(
        // 'block relative border rounded-2xl bg-gray-200',
        // "after:content-[''] after:block after:pb-[55%]",
        'w-full aspect-[2.25/1] relative border border-black border-opacity-10 rounded-xl overflow-hidden',
      )}
    >
      <img
        className="absolute inset-0 object-cover bg-gray-100 w-full h-full min-h-full"
        srcSet={[featureImage ? `${featureImage} 600w` : ''].toString()}
        src={featureImage}
        alt={title}
        loading="lazy"
      />
    </a>
  );
};
