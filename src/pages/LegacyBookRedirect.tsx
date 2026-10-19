import { Navigate, useParams } from 'react-router-dom';
import { getVehicle } from '@/data/pricingCatalog';

/** Legacy /book/:id: route into the coherent vehicle → plan → details path. */
export default function LegacyBookRedirect() {
  const { id } = useParams();
  const vehicle = getVehicle(id);
  return <Navigate to={vehicle ? `/vehicles/${vehicle.id}/plan` : '/vehicles'} replace />;
}
