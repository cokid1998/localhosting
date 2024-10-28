import { useParams } from "react-router-dom";

function CafeDetail() {
  const params = useParams();
  const { id } = params;

  return <div>cafe: {id}</div>;
}

export default CafeDetail;
