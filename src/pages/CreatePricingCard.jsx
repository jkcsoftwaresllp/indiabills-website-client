
import PricingForm from "../components/pricingSections/PricingForm";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function CreatePricingCard() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await api.post("/pricing", data);
    navigate("/pricing");
  };

  return <PricingForm onSubmit={handleCreate} />;
}
