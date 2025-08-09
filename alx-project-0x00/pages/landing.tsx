import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <button styles="rounded-sm">Rounded Small</button>
      <Button styles="rounded-md">Rounded Medium</Button>
      <Button styles="rounded-full">Rounded Full</Button>
    </div>
  );
};

export default Landing;
