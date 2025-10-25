
import React from 'react';
import { MobilityOption } from './types';

const TrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2zM5 18h14" />
  </svg>
);

const BusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-6.364-7.898l12.728 0M4 18.75h16" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm-12 0c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" />
  </svg>
);

const CarpoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BikeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zM12 14c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7zM20 12c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zM4 12c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12s2 4 4 4" />
  </svg>
);

const WalkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);


export const MOBILITY_OPTIONS: MobilityOption[] = [
  {
    id: 'train',
    title: 'Train (TER SNCF)',
    description: 'La gare de Mouans-Sartoux est un point central sur la ligne Cannes-Grasse, offrant des liaisons rapides vers les principaux pôles urbains de la région.',
    icon: <TrainIcon />,
    links: [
      { href: 'https://www.sncf-connect.com/gares/mouans-sartoux', text: 'Horaires et billets' },
      { href: 'https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur', text: 'Site TER SUD' },
    ],
  },
  {
    id: 'bus',
    title: 'Bus (Palm Bus & Sillages)',
    description: "Plusieurs lignes de bus desservent la commune, la reliant efficacement à Cannes, Grasse et les villages environnants. Une solution économique pour les déplacements locaux.",
    icon: <BusIcon />,
    links: [
      { href: 'https://www.palmbus.fr/', text: 'Site Palm Bus (vers Cannes)' },
      { href: 'https://www.sillages.paysdegrasse.fr/', text: 'Site Sillages (vers Grasse)' },
    ],
  },
  {
    id: 'carpooling',
    title: 'Covoiturage',
    description: 'Partagez un trajet pour des destinations plus lointaines ou pour vos déplacements quotidiens. Une alternative flexible et conviviale pour réduire les coûts et l\'impact environnemental.',
    icon: <CarpoolIcon />,
    links: [
      { href: 'https://www.blablacar.fr/', text: 'Blablacar' },
      { href: 'https://www.mouvnco.fr/', text: 'Mouvnco (local)'},
    ],
  },
  {
    id: 'bike',
    title: 'Vélo',
    description: 'Profitez des pistes cyclables locales et des routes de campagne pour vos déplacements. Le vélo est idéal pour les courtes distances et pour découvrir les paysages de l\'arrière-pays.',
    icon: <BikeIcon />,
    links: [
      { href: 'https://www.geovelo.fr/france/provence-alpes-cote-d-azur/mouans-sartoux', text: 'Itinéraires cyclables (Geovelo)' },
      { href: 'https://www.komoot.fr/discover/Mouans-Sartoux/tours', text: 'Circuits et balades (Komoot)' },
    ],
  },
  {
    id: 'walk',
    title: 'Marche à pied',
    description: 'Explorez la commune et ses alentours grâce à de nombreux sentiers de randonnée et chemins pédestres, comme les berges de la Siagne ou le parc de la Valmasque.',
    icon: <WalkIcon />,
    links: [
      { href: 'https://www.alltrails.com/fr/france/alpes-maritimes/mouans-sartoux', text: 'Sentiers de randonnée (AllTrails)' },
      { href: 'https://www.mouans-sartoux.net/votre-mairie/publications/plan-de-ville/', text: 'Plan de la ville' },
    ],
  },
];
