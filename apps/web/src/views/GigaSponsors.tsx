import { GigaHomeButton, GigaBaseView } from "@components/index.js";

interface gigaSponsor {
  uuid: string;
  name: string;
  emoji: string;
  destination: string;
};

const gigaSponsors: gigaSponsor[] = [
  {
    uuid: "b2338903-d0bc-4d7c-af82-4a272eac953f",
    name: "Zimmerei Holzbau Blümlein",
    emoji: "🌲❤️",
    destination: "https://holzbau-bluemlein.de/"
  },
    {
    uuid: "a9a176e2-b200-4695-a99f-738cac7fe691",
    name: "Brauerei Hebendanz",
    emoji: "🍺❤️",
    destination: "https://www.brauerei-hebendanz.de/home.html"
  }
];


export const GigaSponsors: React.FC = () => {
  return(
    <GigaBaseView>
      <div className="relative h-screen justify-center flex flex-col items-center p-8">
        <ul className="relative flex flex-col rounded-lg sm:w3/10">
          {gigaSponsors.map(((sponsor: gigaSponsor) => {
            return (
              <li className="flex w-full flex-col items-center mb-4 border-2 bg-gray-300 shadow-sm shadow-black border-black rounded-2xl">
                <a className="flex flex-col items-center justify-center w-full h-full p-4" href={sponsor.destination} aria-label={sponsor.name}>
                  <span className="text-lg">{sponsor.name}</span>
                  <span className="text-lg">{sponsor.emoji}</span>
                </a>
              </li>
            );
          }))}
        </ul>
        <GigaHomeButton/>
      </div>
    </GigaBaseView>
  );
};