import { Button } from "../components/shared/button/Button";
import { Card } from "../components/shared/card/Card";
import { Input } from "../components/shared/input/Input";

export function DoctorsPage() {
  return (
    <>
      <div className="flex gap-2 mt-4">
        <Input
          list="specialization-options"
          placeholder="Specialization or Examination"
        />
        <datalist id="specialization-options">
          <option value="Cardiology" />
          <option value="Dermatology" />
          <option value="Neurology" />
          <option value="Pediatrics" />
          <option value="Psychiatry" />
          <option value="Radiology" />
          <option value="Surgery" />
        </datalist>

        <Input list="city-options" placeholder="City" />
        <datalist id="city-options">
          <option value="Warsaw" />
          <option value="Krakow" />
          <option value="Lodz" />
          <option value="Wroclaw" />
          <option value="Poznan" />
          <option value="Gdansk" />
          <option value="Szczecin" />
          <option value="Bydgoszcz" />
          <option value="Lublin" />
          <option value="Bialystok" />
        </datalist>
        <Button>Search</Button>
      </div>

      <div className="grid grid-cols-4 grid-rows-4">
        <Card
          titleName="Dr. Emily Lorens"
          description="Neurology"
          imgSrc="/src/assets/doctor-holding-clipboard-looking-camera.png"
        />
        <Card
          titleName="Dr. Richard James"
          description="Neurology"
          imgSrc="/src/assets/front-view-doctor-holding-stethoscope.png"
        />
        <Card
          titleName="Dr. Sarah Patel"
          description="Neurology"
          imgSrc="/src/assets/family-doctor-doctor-s-office.png"
        />
        <Card
          titleName="Dr. Christopher Lee"
          description="Neurology"
          imgSrc="/src/assets/doctor-holding-clipboard-looking-camera.png"
        />
        <Card
          titleName="Dr. Ava Mitchell"
          description="Neurology"
          imgSrc="/src/assets/doctor-holding-clipboard-looking-camera.png"
        />
        <Card
          titleName="Dr. Amelia Hill"
          description="Neurology"
          imgSrc="/src/assets/doctor-holding-clipboard-looking-camera.png"
        />
        <Card
          titleName="Dr. Chloe Evans"
          description="Neurology"
          imgSrc="/src/assets/doctor-holding-clipboard-looking-camera.png"
        />
        <Card
          titleName="Dr. Ryan Martinez"
          description="Neurology"
          imgSrc="/src/assets/doctor-holding-clipboard-looking-camera.png"
        />
      </div>
    </>
  );
}
