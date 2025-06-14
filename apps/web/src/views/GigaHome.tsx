import imgGigaChad from "@assets/images/gigachad.webp"
import { useEffect, useState } from "react";
import { tGigaTeam } from "@gigachads.de/shared/types"
import { getTeamById } from "@servicesV1/index.js";
import { GigaFooter, GigaBaseView } from "@components/index.js";

export const GigaHome: React.FC = () => {
  const [team, setTeam] = useState<tGigaTeam>({
    uuid: "25c1fc86-f037-4292-a54f-a7dc8426bec6",
    name: "Giga Chads",
    years: []
  });

  useEffect(() => {
    const getData = async () => {
      setTeam(await getTeamById(334));
    };
    getData()
  }, [])

  return(
    <GigaBaseView>
      <div className="relative justify-center flex p-8">
        <div className="flex flex-col w-full sm:w-3/10 items-center">
          <img className="w-full h-full" src={imgGigaChad} alt="gigachad" />
          <span className="text-6xl mt-2 mb-2 p-1 font-bold">{team.name}</span>
          <span>Platzierungen</span>
          <hr className="text-black w-11/12"/>
          <ul className="p-4 font-bold text-2xl">
            {team.years.map((year => {
              return <li key={year.year}>{`QuattFo ${year.year}: ${year.ranking}`}</li>
            }))}
          </ul>
          <hr className="text-black w-11/12"/>
          <GigaFooter/>
        </div>
      </div>
    </GigaBaseView>
  );
};