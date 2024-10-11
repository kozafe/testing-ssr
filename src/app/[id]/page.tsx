import axios from "axios";

interface Props {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
}
interface Page {
  params: { id: string };
}
const Something = async (props: Page) => {
  const { id } = props.params;
  const { data }: { data: Props } = await axios.get(
    `https://api.sampleapis.com/coffee/hot/${id}`
  );

  const { description, image, ingredients, title } = data;

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] gap-[12px]">
      <img src={image} style={{ width: 200 }} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="text-[black] bg-[white]">{ingredients}</p>
    </div>
  );
};

export default Something;
