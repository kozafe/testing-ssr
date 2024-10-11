import axios from "axios";

interface Page {
  params: { id: string };
}

interface Post {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    rank_math_lock_modified_date: boolean;
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  class_list: string[];
  lang: string;
  translations: {
    id: number;
  };
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
    about: Array<{ href: string }>;
    author: Array<{ href: string }>;
    replies: Array<{ href: string }>;
    "version-history": Array<{ href: string }>;
    "predecessor-version": Array<{ href: string }>;
    "wp:featuredmedia": Array<{ href: string }>;
    "wp:attachment": Array<{ href: string }>;
    "wp:term": Array<{ href: string }>;
    curies: Array<{ name: string; href: string; templated: boolean }>;
  };
}

const Something = async (props: Page) => {
  const { id } = props.params;
  const { data }: { data: Post } = await axios.get(
    `https://www.transfez.id/wp-json/wp/v2/posts/${id}`
  );

  const { content, title } = data;

  return (
    <div className="flex flex-col gap-[20px]">
      <h1>{title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
    </div>
  );
};

export default Something;
