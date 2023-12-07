import { useSearchParams } from 'react-router-dom';

export const ProductDetalis = () => {
  const { id } = useSearchParams();

  return (
    <div>
      <img src="https://via.placeholder.com/960x240" alt="" />

      <h2>Product - Name - {id}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt
        excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate a, sed
        reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga
        dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Impedit suscipit quisquam incidunt commodi fugiat aliquam praesentium
        ipsum quos unde voluptatum?
      </p>
    </div>
  );
};
