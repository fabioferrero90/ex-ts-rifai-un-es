import { memo } from "react";

type Politician = {
  name: string;
  country: string;
  biography: string;
  dob: string;
  id: number;
  image: string;
  party: string;
  position: string;
  years_in_office: string;
};

type PoliticianCardProps = {
  politician: Politician;
}

const PoliticianCard = memo(({ politician }: PoliticianCardProps) => {
  console.log("Card")
  return (
    <div className="ff-card border-2 rounded m-1 w-[30%]">
      <img className="ff-card-image" src={politician.image} alt={politician.name} />
      <div className="ff-card-info p-4">
        <h3 className="text-xl font-black">{politician.name}</h3>
        <h5>{politician.position}</h5>
        <p>{politician.biography}</p>
      </div>
    </div> 
  ) 
});

export default PoliticianCard;