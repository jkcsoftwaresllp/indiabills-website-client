import { useEffect, useState } from "react";
import api from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import PricingForm from "../components/pricingSections/PricingForm";

export default function EditPricingCard() {
  const { id } = useParams();
  const [pricing, setPricing] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(`/pricing/${id}`);
      setPricing(res.data[0]);
      console.log(res.data[0])
    };
    fetchData();
  }, [id]);

  const handleUpdate = async (data) => {
    await api.put(`/pricing/${id}`, data);
    navigate("/pricing");
  };

  if (!pricing) return <p>Loading...</p>;

  return <PricingForm defaultValues={pricing} onSubmit={handleUpdate} isEdit />;
}
